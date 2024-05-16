using MediatR;
using Persistence;

namespace Application.Characters
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
        public DataContext _context { get; }
            public Handler(DataContext context)
            {
            _context = context;
                
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var character = await _context.Characters.FindAsync(request.Id);
                _context.Remove(character);

                await _context.SaveChangesAsync();
            }
        }
    }
}