using GameBackend.Data;
using GameBackend.Models;
using Microsoft.AspNetCore.Mvc;
using GameBackend.ObjectModels;
using Microsoft.EntityFrameworkCore;

namespace GameBackend.Controllers;

public class ScoreController : Controller
{

    private DbContext _appdb;
    public ScoreController(ScoreAppDbContext db)
    {
        _appdb = db;
    }
    // GET
    [HttpGet("/score")]
    public List<ScoreModel> Index()
    {
        var score = _appdb.Set<ScoreModel>().ToList();
        return score;
    }
    

}