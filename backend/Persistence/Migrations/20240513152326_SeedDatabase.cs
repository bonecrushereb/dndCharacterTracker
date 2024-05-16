using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class SeedDatabase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Characters",
                newName: "CharacterName");

            migrationBuilder.RenameColumn(
                name: "Class",
                table: "Characters",
                newName: "CharacterClass");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CharacterName",
                table: "Characters",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "CharacterClass",
                table: "Characters",
                newName: "Class");
        }
    }
}
