using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class CharactersController : BaseApiController
    {
        private readonly DataContext _context;
        public CharactersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet] //api/Characters
        public async Task<ActionResult<List<Character>>> GetCharacters()
        {
        return await _context.Characters.ToListAsync();
        }

    }
}