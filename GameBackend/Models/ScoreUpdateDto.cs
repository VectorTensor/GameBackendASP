namespace GameBackend.Models;

public class ScoreUpdateDto
{

    public int Score { get; set; }
    public string name { get; set; }

    public ScoreUpdateDto(int s , string n)
    {

        Score = s;
        name = n;

    }

    public ScoreUpdateDto()
    {
        
    }
    
}