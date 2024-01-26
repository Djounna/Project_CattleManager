using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CM.Backend.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class UpdateCowEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Sex",
                table: "Cows");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "Cows",
                newName: "Gender");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Gender",
                table: "Cows",
                newName: "Status");

            migrationBuilder.AddColumn<string>(
                name: "Sex",
                table: "Cows",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
