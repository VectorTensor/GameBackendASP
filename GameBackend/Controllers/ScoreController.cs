using System.Runtime.InteropServices.JavaScript;
using System.Security.Claims;
using GameBackend.Data;
using GameBackend.Models;
using Microsoft.AspNetCore.Mvc;
using GameBackend.ObjectModels;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
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
    [HttpGet("/score")]
    [Authorize]
    public List<ScoreGetResponseDto> Index()
    {
        var score = _appdb.Set<ScoreModel>().ToList();
        var result = score.Select(s => new ScoreGetResponseDto()
        {
            Score = s.Score,
            name = s.Name
        });
        return result.ToList();
    }


    [HttpPost("/score")]
    [Authorize]
    public IActionResult Create([FromBody] ScoreDto score)
    {
        if (score == null) return NotFound();

        var user = HttpContext.User;
        var userId = user.Claims.FirstOrDefault(c=> c.Type == ClaimTypes.NameIdentifier)?.Value;

        if (userId == null) return NotFound();
        ScoreModel scoreModel = new ScoreModel
        {
            Score = score.Score,
            Name = score.Name,
            UserId = userId 
        };
        _appdb.Set<ScoreModel>().Add(scoreModel);
        _appdb.SaveChanges();
        return Ok(score);
    }


}