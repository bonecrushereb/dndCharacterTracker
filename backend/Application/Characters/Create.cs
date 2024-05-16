using Domain;
using MediatR;
using Persistence;

namespace Application.Characters
{
    public class Create
    {
        public class Command : IRequest
        {
            public Character Character { get; set; }
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
                _context.Characters.Add(request.Character);

                await _context.SaveChangesAsync();
            }
        }
    }
}