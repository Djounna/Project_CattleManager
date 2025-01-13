using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CM.Backend.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddedVaccinationTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FatherId",
                table: "Cows",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MotherId",
                table: "Cows",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Vaccinations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Date = table.Column<DateOnly>(type: "date", nullable: false),
                    CowId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vaccinations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vaccinations_Cows_CowId",
                        column: x => x.CowId,
                        principalTable: "Cows",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cows_FatherId",
                table: "Cows",
                column: "FatherId");

            migrationBuilder.CreateIndex(
                name: "IX_Cows_MotherId",
                table: "Cows",
                column: "MotherId");

            migrationBuilder.CreateIndex(
                name: "IX_Vaccinations_CowId",
                table: "Vaccinations",
                column: "CowId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cows_Cows_FatherId",
                table: "Cows",
                column: "FatherId",
                principalTable: "Cows",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Cows_Cows_MotherId",
                table: "Cows",
                column: "MotherId",
                principalTable: "Cows",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cows_Cows_FatherId",
                table: "Cows");

            migrationBuilder.DropForeignKey(
                name: "FK_Cows_Cows_MotherId",
                table: "Cows");

            migrationBuilder.DropTable(
                name: "Vaccinations");

            migrationBuilder.DropIndex(
                name: "IX_Cows_FatherId",
                table: "Cows");

            migrationBuilder.DropIndex(
                name: "IX_Cows_MotherId",
                table: "Cows");

            migrationBuilder.DropColumn(
                name: "FatherId",
                table: "Cows");

            migrationBuilder.DropColumn(
                name: "MotherId",
                table: "Cows");
        }
    }
}
