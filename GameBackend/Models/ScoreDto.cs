namespace GameBackend.Models;

public class ScoreDto
{
    
    public int Score { get; set; }
    public string Name { get; set; }

    public ScoreDto(int s, string n)
    {

        Score = s;
        Name = n;

    }
    public ScoreDto() { }

}