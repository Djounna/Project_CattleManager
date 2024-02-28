using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CM.Backend.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedMilkingsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Milkings_MilkProductions_MilkProductionId",
                table: "Milkings");

            migrationBuilder.DropColumn(
                name: "Area",
                table: "Pens");

            migrationBuilder.RenameColumn(
                name: "MilkProductionId",
                table: "Milkings",
                newName: "CowId");

            migrationBuilder.RenameIndex(
                name: "IX_Milkings_MilkProductionId",
                table: "Milkings",
                newName: "IX_Milkings_CowId");

            migrationBuilder.AddForeignKey(
                name: "FK_Milkings_Cows_CowId",
                table: "Milkings",
                column: "CowId",
                principalTable: "Cows",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Milkings_Cows_CowId",
                table: "Milkings");

            migrationBuilder.RenameColumn(
                name: "CowId",
                table: "Milkings",
                newName: "MilkProductionId");

            migrationBuilder.RenameIndex(
                name: "IX_Milkings_CowId",
                table: "Milkings",
                newName: "IX_Milkings_MilkProductionId");

            migrationBuilder.AddColumn<int>(
                name: "Area",
                table: "Pens",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Milkings_MilkProductions_MilkProductionId",
                table: "Milkings",
                column: "MilkProductionId",
                principalTable: "MilkProductions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
