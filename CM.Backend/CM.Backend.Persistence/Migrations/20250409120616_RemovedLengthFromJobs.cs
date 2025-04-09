using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CM.Backend.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class RemovedLengthFromJobs : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Length",
                table: "Jobs");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Length",
                table: "Jobs",
                type: "int",
                nullable: true);
        }
    }
}
