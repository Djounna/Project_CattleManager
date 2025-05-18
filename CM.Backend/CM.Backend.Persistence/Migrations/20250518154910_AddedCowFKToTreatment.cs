using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CM.Backend.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddedCowFKToTreatment : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Treatments_Conditions_ConditionId",
                table: "Treatments");

            migrationBuilder.AlterColumn<int>(
                name: "ConditionId",
                table: "Treatments",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "CowId",
                table: "Treatments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Treatments_CowId",
                table: "Treatments",
                column: "CowId");

            migrationBuilder.AddForeignKey(
                name: "FK_Treatments_Conditions_ConditionId",
                table: "Treatments",
                column: "ConditionId",
                principalTable: "Conditions",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Treatments_Cows_CowId",
                table: "Treatments",
                column: "CowId",
                principalTable: "Cows",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Treatments_Conditions_ConditionId",
                table: "Treatments");

            migrationBuilder.DropForeignKey(
                name: "FK_Treatments_Cows_CowId",
                table: "Treatments");

            migrationBuilder.DropIndex(
                name: "IX_Treatments_CowId",
                table: "Treatments");

            migrationBuilder.DropColumn(
                name: "CowId",
                table: "Treatments");

            migrationBuilder.AlterColumn<int>(
                name: "ConditionId",
                table: "Treatments",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Treatments_Conditions_ConditionId",
                table: "Treatments",
                column: "ConditionId",
                principalTable: "Conditions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
