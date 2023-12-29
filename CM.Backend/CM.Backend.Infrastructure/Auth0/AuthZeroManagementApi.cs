using AutoMapper;
using CM.Backend.Application.Interfaces.Infrastructure;
using CM.Backend.Application.Models.Users; // TO DO : check if correct on architectural level ?
using CM.Backend.Domain.Users;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace CM.Backend.Infrastructure.Auth0;
public class AuthZeroManagementApi : IUserManagementService
{
    private IHttpClientFactory _httpClientFactory;
    private readonly IConfiguration _configuration;

    public AuthZeroManagementApi(IConfiguration configuration, IHttpClientFactory httpClientFactory)
    {
        _httpClientFactory = httpClientFactory;
        _configuration = configuration;
    }


    public async Task<TokenData> GetToken()
    {
        using HttpClient _httpClient = _httpClientFactory.CreateClient();

        var response =
            await _httpClient.PostAsync(_configuration["Auth0ManagementApi:Path"], new FormUrlEncodedContent(
                new Dictionary<string, string>
                {
                    {"client_id", _configuration["Auth0ManagementApi:ClientId"]},
                    {"grant_type", _configuration["Auth0ManagementApi:GrantType"]},
                    {"client_secret", _configuration["Auth0ManagementApi:ClientSecret"]},
                    {"audience", _configuration["Auth0ManagementApi:Audience"]}
                }));

        if (!response.IsSuccessStatusCode) throw new Exception("Unable to retrieve access token");

        var content = await response.Content.ReadAsStringAsync();
        var tokenData = JsonConvert.DeserializeObject<TokenData>(content);
        return tokenData;
    }

    public async Task<UserAuth> CreateUser(UserAuth userInput, CancellationToken cancellationToken)
    {
        var token = await GetToken();
        var accessToken = token.access_token;

        using HttpClient _httpClient = _httpClientFactory.CreateClient();

        _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

        string passwordToPost;
        if (userInput.Password == "Default")
        {
            passwordToPost = _configuration["UserPassword:Default"];
        }
        else
        {
            passwordToPost = userInput.Password;
        }

        var response = await _httpClient.PostAsync(_configuration["Auth0ManagementApi:Audience"] + "users", new FormUrlEncodedContent(
            new Dictionary<string, string>
            {
                {"email", userInput.Email},
                {"email_verified", "false"},
                {"connection", _configuration["UserPassword:Connection"]},
                {"verify_email","true"},
                {"given_name", userInput.Firstname},
                {"family_name", userInput.Lastname},
                {"name", userInput.Firstname + " " + userInput.Lastname},
                {"nickname", userInput.Username},
                {"password", passwordToPost},
                {"username", userInput.Username},
            }), cancellationToken);


        if (!response.IsSuccessStatusCode)
        {
            throw new ValidationException();
        }

        var content = await response.Content.ReadAsStringAsync(cancellationToken);

        var userAuth = JsonConvert.DeserializeObject<UserAuth>(content);

        //var userDb = _mapper.Map<User>(userAuth);
        //userDb.IdRole = userInput.IdRole;
        //userDb.Username = userInput.Username;

        return userAuth;
    }

    public async Task<UserAuth> UpdateUser(UserAuth userInput, CancellationToken cancellationToken = default)
    {
        try
        {
            // Get AccessToken
            var token = await GetToken();
            var accessToken = token.access_token;

            using HttpClient _httpClient = _httpClientFactory.CreateClient();

            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

            var response = await _httpClient.PatchAsync(_configuration["Auth0ManagementApi:Audience"] + "users/" + userInput.IdAuth, new FormUrlEncodedContent(
           new Dictionary<string, string>
           {
                {"email", userInput.Email},
                {"verify_email","true"}

           }), cancellationToken);

            if (!response.IsSuccessStatusCode)
            {
                throw new ValidationException();
            }

            var content = await response.Content.ReadAsStringAsync(cancellationToken);

            var userAuth = JsonConvert.DeserializeObject<UserAuth>(content);

            //_mapper.Map<User>(userAuth);
            //var userDb = new User
            //{
            //    Username = userInput.Username,  // from userInput bc not changed in Auth0
            //    IdRole = userInput.IdRole,      // from userInput bc not present in Auth0

            //    Email = userAuth.Email,
            //    VerifiedEmail = userAuth.VerifiedEmail,
            //    IdUserAuth0 = userAuth.IdUserAuth0
            //};

            return userAuth;

        }
        catch (Exception)
        {
            throw new ValidationException();
        }
    }

    public async Task<bool> AssignRole(User user, Role role, CancellationToken cancellation)
    {
        var token = await GetToken();
        var accessToken = token.access_token;

        using HttpClient _httpClient = _httpClientFactory.CreateClient();

        _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

        List<UserRole> lst = await GetAllRoles(cancellation);
        //Role role = await GetRoleInDb(user, cancellation);
        var result = lst.Find(c => c.name == role.Name);

        string[] tab = {result.id};
        AssignRolesRequest rolesRequest = new AssignRolesRequest(tab);

        var json = JsonConvert.SerializeObject(rolesRequest);

        var response = await _httpClient.PostAsync(_configuration["Auth0ManagementApi:Audience"] + "users/" + user.AuthId + "/roles", new StringContent(json, Encoding.UTF8, "application/json"), cancellation);

        if (!response.IsSuccessStatusCode)
        {
            throw new ValidationException();
        }

        return true;
    }

    private async Task<List<UserRole>> GetAllRoles(CancellationToken cancellationToken)
    {
        var tokenResponse = await GetToken();
        var tokenAccess = tokenResponse.access_token;

        using HttpClient _httpClient = _httpClientFactory.CreateClient();
        var url = _configuration["Auth0ManagementApi:Audience"] + "roles";

        _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", tokenAccess);
        var httpResponse = await _httpClient.GetAsync(url, cancellationToken);
        if (!httpResponse.IsSuccessStatusCode) throw new Exception();

        var content = await httpResponse.Content.ReadAsStringAsync(cancellationToken);
        var roles = JsonConvert.DeserializeObject<List<UserRole>>(content);
        return roles;
    }

}

public class UserRole
{
    public string id { get; set; }
    public string name { get; set; }
    public string description { get; set; }
}

public class AssignRolesRequest
{
    [JsonProperty("roles")] public string[] Roles;

    public AssignRolesRequest(string[] tab)
    {
        Roles = tab;
    }
}
