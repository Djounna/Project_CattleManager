using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CM.Backend.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class UpdateJobTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PenId",
                table: "RecurringJobs",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_RecurringJobs_PenId",
                table: "RecurringJobs",
                column: "PenId");

            migrationBuilder.AddForeignKey(
                name: "FK_RecurringJobs_Pens_PenId",
                table: "RecurringJobs",
                column: "PenId",
                principalTable: "Pens",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RecurringJobs_Pens_PenId",
                table: "RecurringJobs");

            migrationBuilder.DropIndex(
                name: "IX_RecurringJobs_PenId",
                table: "RecurringJobs");

            migrationBuilder.DropColumn(
                name: "PenId",
                table: "RecurringJobs");
        }
    }
}
