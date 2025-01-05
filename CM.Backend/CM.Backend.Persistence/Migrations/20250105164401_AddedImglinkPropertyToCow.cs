using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CM.Backend.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddedImglinkPropertyToCow : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImgLink",
                table: "Cows",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImgLink",
                table: "Cows");
        }
    }
}
