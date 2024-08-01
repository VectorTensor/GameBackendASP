using GameBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace GameBackend.Data;

public class ScoreAppDbContext: DbContext
{

    public ScoreAppDbContext(DbContextOptions<ScoreAppDbContext> options) : base(options)
    {
        
    }
    
    public DbSet<ScoreModel> Scores { get; set; }
    
    
}