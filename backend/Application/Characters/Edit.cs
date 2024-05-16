using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Characters
{
    public class Edit
    {
        public class Command : IRequest 
        {
            public Character Character { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
        private readonly DataContext _context;
        public IMapper _mapper { get; }

            public Handler(DataContext context, IMapper mapper)
            {
            _mapper = mapper;
            _context = context;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var character = await _context.Characters.FindAsync(request.Character.Id);

                _mapper.Map(request.Character, character);
                await _context.SaveChangesAsync();
            }
        }
    }
}