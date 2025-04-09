using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CM.Backend.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class RemovedRecurringJobs : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Jobs_RecurringJobs_RecurringJobId",
                table: "Jobs");

            migrationBuilder.DropTable(
                name: "RecurringJobs");

            migrationBuilder.DropIndex(
                name: "IX_Jobs_RecurringJobId",
                table: "Jobs");

            migrationBuilder.DropColumn(
                name: "RecurringJobId",
                table: "Jobs");

            migrationBuilder.AddColumn<DateOnly>(
                name: "Date",
                table: "Jobs",
                type: "date",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Jobs");

            migrationBuilder.AddColumn<int>(
                name: "RecurringJobId",
                table: "Jobs",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "RecurringJobs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PenId = table.Column<int>(type: "int", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Length = table.Column<int>(type: "int", nullable: true),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RecurringJobs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RecurringJobs_Pens_PenId",
                        column: x => x.PenId,
                        principalTable: "Pens",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_RecurringJobId",
                table: "Jobs",
                column: "RecurringJobId");

            migrationBuilder.CreateIndex(
                name: "IX_RecurringJobs_PenId",
                table: "RecurringJobs",
                column: "PenId");

            migrationBuilder.AddForeignKey(
                name: "FK_Jobs_RecurringJobs_RecurringJobId",
                table: "Jobs",
                column: "RecurringJobId",
                principalTable: "RecurringJobs",
                principalColumn: "Id");
        }
    }
}
