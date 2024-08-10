using GameBackend.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GameBackend.Data;



public class UserDataContext: IdentityDbContext
{

    public UserDataContext(DbContextOptions<UserDataContext> options) : base(options)
    {
        
    }

    public DbSet<ScoreModel> Scores { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<ScoreModel>()
            .HasOne(sm => sm.User)
            .WithOne()
            .HasForeignKey<ScoreModel>(sm => sm.UserId);

    }
    
    
}