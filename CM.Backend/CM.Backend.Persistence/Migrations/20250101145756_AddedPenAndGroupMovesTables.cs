using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CM.Backend.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddedPenAndGroupMovesTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GroupMoves",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CowId = table.Column<int>(type: "int", nullable: false),
                    Date = table.Column<DateOnly>(type: "date", nullable: false),
                    SourceGroupId = table.Column<int>(type: "int", nullable: true),
                    DestinationGroupId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GroupMoves", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GroupMoves_Cows_CowId",
                        column: x => x.CowId,
                        principalTable: "Cows",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GroupMoves_Groups_DestinationGroupId",
                        column: x => x.DestinationGroupId,
                        principalTable: "Groups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GroupMoves_Groups_SourceGroupId",
                        column: x => x.SourceGroupId,
                        principalTable: "Groups",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PenMoves",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CowId = table.Column<int>(type: "int", nullable: false),
                    Date = table.Column<DateOnly>(type: "date", nullable: false),
                    SourcePenId = table.Column<int>(type: "int", nullable: true),
                    DestinationPenId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PenMoves", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PenMoves_Cows_CowId",
                        column: x => x.CowId,
                        principalTable: "Cows",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PenMoves_Pens_DestinationPenId",
                        column: x => x.DestinationPenId,
                        principalTable: "Pens",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PenMoves_Pens_SourcePenId",
                        column: x => x.SourcePenId,
                        principalTable: "Pens",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_GroupMoves_CowId",
                table: "GroupMoves",
                column: "CowId");

            migrationBuilder.CreateIndex(
                name: "IX_GroupMoves_DestinationGroupId",
                table: "GroupMoves",
                column: "DestinationGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_GroupMoves_SourceGroupId",
                table: "GroupMoves",
                column: "SourceGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_PenMoves_CowId",
                table: "PenMoves",
                column: "CowId");

            migrationBuilder.CreateIndex(
                name: "IX_PenMoves_DestinationPenId",
                table: "PenMoves",
                column: "DestinationPenId");

            migrationBuilder.CreateIndex(
                name: "IX_PenMoves_SourcePenId",
                table: "PenMoves",
                column: "SourcePenId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GroupMoves");

            migrationBuilder.DropTable(
                name: "PenMoves");
        }
    }
}
