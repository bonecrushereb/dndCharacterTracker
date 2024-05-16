using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Character
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string CharacterName { get; set; }
        public string Sex { get; set; }
        [Required]
        public string Race { get; set; }
        [Required]
        public string CharacterClass { get; set; }
        [Required]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Please submit a number from 1 to 20")]
        public int Level { get; set; }

        [Required]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Please submit a number from 1 to 20")]
        public int Strength { get; set; }
        [Required]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Please submit a number from 1 to 20")]
        public int Dexterity { get; set; }
        [Required]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Please submit a number from 1 to 20")]
        public int Constitution { get; set; }
        [Required]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Please submit a number from 1 to 20")]
        public int Intelligence { get; set; }
        [Required]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Please submit a number from 1 to 20")]
        public int Wisdom { get; set; }
        [Required]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Please submit a number from 1 to 20")]
        public int Charisma { get; set; }
        [Required]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Please submit a number from 1 to 20")]
        public int ProfBonus { get; set; }
        [Required]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Please submit a number")]
        public int WalkSpeed { get; set; }
        [Required]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Please submit a number")]
        public int CurrentHealth { get; set; }
        [Required]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Please submit a number")]
        public int FullHealth { get; set; }
        [RegularExpression("^[0-9]*$", ErrorMessage = "Please submit a number")]
        public int TempHealth { get; set; }

        public string Armor { get; set; }
        public List<string> Weapons { get; set; }
        public List<string> Tools { get; set; }
        public List<string> Languages { get; set; }

        public string Background { get; set; }
        public string Alignment { get; set; }
        public string Faith { get; set; }
        public string LifeStyle { get; set; }

        public string HairStyle { get; set; }
        public string SkinColor { get; set; }
        public string EyeColor { get; set; }
        [RegularExpression("^[0-9]*$", ErrorMessage = "Please submit a number")]
        public int Height { get; set; }
        [RegularExpression("^[0-9]*$", ErrorMessage = "Please submit a number")]
        public int Weight { get; set; }
        [RegularExpression("^[0-9]*$", ErrorMessage = "Please submit a number")]
        public int Age { get; set; }

        public string PersonalityTrait { get; set; }
        public string Ideals { get; set; }
        public string Bonds { get; set; }
        public string Flaws { get; set; }

        public string Organizations { get; set; }
        public string Allies { get; set; }
        public string Enemies { get; set; }
        public string BackStory { get; set; }

    }
}