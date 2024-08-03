using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GameBackend.Data;



public class UserDataContext: IdentityDbContext
{

    public UserDataContext(DbContextOptions<UserDataContext> options) : base(options)
    {
        
    }
    
}