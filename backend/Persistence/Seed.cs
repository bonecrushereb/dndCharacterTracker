using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.Characters.Any()) return;

            var characters = new List<Character>
            {
                new Character 
                {
                    CharacterName = "Hünd",
                    Sex="Male",
                    Race="Half Elf",
                    CharacterClass="Rogue",
                    Level=11,
                    Strength=11,
                    Dexterity=20,
                    Constitution=16,
                    Intelligence=11,
                    Wisdom=11,
                    Charisma=16,
                    ProfBonus=4,
                    WalkSpeed=40,
                    CurrentHealth=70,
                    FullHealth=91,
                    TempHealth=0,
                    Armor="Light Armor",
                    Weapons=new List<String>{"Crossbow"},
                    Tools=new List<String>{"Thieve's Tools"},
                    Languages=new List<String>{"Common"},
                    Background="test",
                    Alignment="test",
                    Faith="test",
                    LifeStyle="test",
                    HairStyle="test",
                    SkinColor="test",
                    EyeColor="test",
                    Height=6,
                    Weight=150,
                    Age=40,
                    PersonalityTrait="test",
                    Ideals="test",
                    Bonds="test",
                    Flaws="test",
                    Organizations=new List<String>{"test"},
                    Allies=new List<String>{"test"},
                    Enemies=new List<String>{"test"},
                    BackStory="test"
                }
            };

            await context.Characters.AddRangeAsync(characters);
            await context.SaveChangesAsync();
        }
    }
}