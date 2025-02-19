using Microsoft.AspNetCore.Mvc;

namespace endPoint.Controllers
{
    public class NewController : Controller
    {
        public IActionResult IndexDiff()
        {
            return View();
        }
    }
}
