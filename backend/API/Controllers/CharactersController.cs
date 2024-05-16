using Application.Characters;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CharactersController : BaseApiController
  {
    [HttpGet] //api/activities
    public async Task<ActionResult<List<Character>>> GetCharacters()
    {
      return await Mediator.Send(new List.Query());
    }

    [HttpGet("{id}")] //api/activities/id
    public async Task<ActionResult<Character>> GetCharacter(int id)
    {
      return await Mediator.Send(new Details.Query { Id = id });
    }

    [HttpPost]
    public async Task<IActionResult> CreateCharacter(Character character)
    {
      await Mediator.Send(new Create.Command { Character = character });

      return Ok();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> EditCharacter(int id, Character character)
    {
      character.Id = id;
      await Mediator.Send(new Edit.Command { Character = character });
      return Ok();
    }

    [HttpDelete("{id}")]

    public async Task<IActionResult> DeleteActivity(int id)
    {
      await Mediator.Send(new Delete.Command { Id = id });
      return Ok();
    }
  }
}