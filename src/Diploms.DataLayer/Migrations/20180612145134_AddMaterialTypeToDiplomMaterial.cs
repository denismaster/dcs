using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Diploms.DataLayer.Migrations
{
    public partial class AddMaterialTypeToDiplomMaterial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MaterialTypeId",
                table: "DiplomWorkMaterials",
                nullable: false,
                defaultValue: 1);

            migrationBuilder.CreateIndex(
                name: "IX_DiplomWorkMaterials_MaterialTypeId",
                table: "DiplomWorkMaterials",
                column: "MaterialTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_DiplomWorkMaterials_MaterialTypes_MaterialTypeId",
                table: "DiplomWorkMaterials",
                column: "MaterialTypeId",
                principalTable: "MaterialTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DiplomWorkMaterials_MaterialTypes_MaterialTypeId",
                table: "DiplomWorkMaterials");

            migrationBuilder.DropIndex(
                name: "IX_DiplomWorkMaterials_MaterialTypeId",
                table: "DiplomWorkMaterials");

            migrationBuilder.DropColumn(
                name: "MaterialTypeId",
                table: "DiplomWorkMaterials");
        }
    }
}
