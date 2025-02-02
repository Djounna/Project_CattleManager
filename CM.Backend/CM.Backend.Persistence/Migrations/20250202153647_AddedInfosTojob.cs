using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CM.Backend.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddedInfosTojob : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Infos",
                table: "Jobs",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Infos",
                table: "Jobs");
        }
    }
}
