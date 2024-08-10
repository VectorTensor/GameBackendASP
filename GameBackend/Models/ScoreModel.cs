using Microsoft.AspNetCore.Identity;

namespace GameBackend.Models;

public class ScoreModel
{

    public int Id { get; set; }
    public int Score { get; set; }
    public string Name { get; set; }
    public string UserId { get; set; }
    public IdentityUser User { get; set; }

   
    
}