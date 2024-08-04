using System.Security.Claims;
using GameBackend.Data;
using GameBackend.Models;
using Microsoft.AspNetCore.Mvc;
using GameBackend.ObjectModels;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
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
    [HttpGet("/score")]
    [Authorize(Policy = "SpecificUser")]
    public List<ScoreModel> Index()
    {
        var score = _appdb.Set<ScoreModel>().ToList();
        return score;
    }

    [Authorize(Policy = "SpecificUser")]
    [HttpPost("/scoretest")]
    public async Task<IActionResult> PreProcess([FromBody] ScoreUpdateDto s)
    {
        var claimsIdentity = User.Identity as ClaimsIdentity;

        var claim = new Claim("NamePro", s.name);

        claimsIdentity.AddClaim(claim);
        await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity));

        return RedirectToAction("Index");


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