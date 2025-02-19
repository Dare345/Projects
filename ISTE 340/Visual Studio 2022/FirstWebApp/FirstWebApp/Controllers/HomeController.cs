using FirstWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace FirstWebApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult DarrenNoModel()
        {
            return View();
        }

        public IActionResult DarrenModel()
        {
            //get the Mode! (access because of the using up top!)
            var getDarrenModel = new DarrenModel();
            //populate
            getDarrenModel.Title = "Some hard coded title for now...";
            getDarrenModel.Description = "lots and lots of words, repeated to like content...";
            getDarrenModel.PageTitle = "Up top text";
            getDarrenModel.HowMany = 75;
            return View(getDarrenModel);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
