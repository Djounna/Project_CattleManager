using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CM.Backend.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedInterventionEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Interventions_Intervenants_IntervenantId",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Interventions");

            migrationBuilder.AlterColumn<int>(
                name: "IntervenantId",
                table: "Interventions",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Interventions_Intervenants_IntervenantId",
                table: "Interventions",
                column: "IntervenantId",
                principalTable: "Intervenants",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Interventions_Intervenants_IntervenantId",
                table: "Interventions");

            migrationBuilder.AlterColumn<int>(
                name: "IntervenantId",
                table: "Interventions",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Interventions",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_Interventions_Intervenants_IntervenantId",
                table: "Interventions",
                column: "IntervenantId",
                principalTable: "Intervenants",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
