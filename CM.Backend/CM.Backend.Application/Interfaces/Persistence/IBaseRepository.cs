namespace CM.Backend.Application.Interfaces.Persistence;
public interface IBaseRepository<T> where T : class 
{
    T GetById(int id); //,CancellationToken cancellationToken = default
    IEnumerable<T> GetList();//CancellationToken cancellationToken = default
    T Create(T entity);//, CancellationToken cancellationToken = default
    T Update(T entity);// , CancellationToken cancellationToken = default
    void Delete(int id);//, CancellationToken cancellationToken = default
    void Save();
}
