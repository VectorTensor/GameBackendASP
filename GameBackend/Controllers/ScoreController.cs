using GameBackend.Data;
using GameBackend.Models;
using Microsoft.AspNetCore.Mvc;
using GameBackend.ObjectModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

namespace GameBackend.Controllers;

public class ScoreController : Controller
{

    private DbContext _appdb;

    public ScoreController(UserDataContext db)
    {
        _appdb = db;
    }

    // GET
    [HttpGet("/score"),Authorize]
    public List<ScoreModel> Index()
    {
        var score = _appdb.Set<ScoreModel>().ToList();
        return score;
    }

    [HttpPost("/score")]
    public IActionResult Create([FromBody] ScoreDto score)
    {
        if (score == null) return NotFound();
        ScoreModel scoreModel = new ScoreModel
        {
            Score = score.Score,
            Name = score.Name
        };
        _appdb.Set<ScoreModel>().Add(scoreModel);
        _appdb.SaveChanges();
        return Ok(scoreModel);
    }


}