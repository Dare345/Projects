using DarrenP3.Models;
using Microsoft.AspNetCore.Mvc;
using DarrenP3.Services;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Dynamic;


namespace DarrenP3.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        
        public async Task<IActionResult> Index()
        {
            return View(); 
        }

        public async Task<IActionResult> People()
        {
            DataRetrieval dr = new DataRetrieval();
            var stringPeople = await dr.GetData("people/");

            var peopleModel = JsonConvert.DeserializeObject<PeopleModel>(stringPeople);
            peopleModel.pageTitle = "Our People";

            return View(peopleModel);
        }
        public async Task<IActionResult> About()
        {
            //let's see if my data is retriveable?
            DataRetrieval dr = new DataRetrieval();
            var stringAbout = await dr.GetData("about/");
            //now what?

                //cast to json (string currently)
                //create a model
                //put the json into the model
            var aboutModel = JsonConvert.DeserializeObject<AboutModel>(stringAbout);
            aboutModel.pageTitle = "About the iSchool";
            //feed the model to the view
            return View(aboutModel);
        }

        public async Task<IActionResult> Degree()
        {
            DataRetrieval de = new DataRetrieval();
            //first retrieval for undergrad
            var loadedDegrees = await de.GetData("degrees/");

            var degreeModel = JsonConvert.DeserializeObject<DegreeModel>(loadedDegrees);
            degreeModel.pageTitle = "Degrees";

            return View(degreeModel);
        }

        public async Task<IActionResult> Minor()
        {
            //load the data...
            DataRetrieval dataR = new DataRetrieval();
            //tell the instance to go get the data
            var loadedMinors = await dataR.GetData("minors/");
            //Cast it to json and the object we want.
            var minors = JsonConvert.DeserializeObject<MinorModel>(loadedMinors);
            //using System.dynamic
            dynamic expando = new ExpandoObject();
            var comboModel = expando as IDictionary<string, object>;

            //
            comboModel.Add("Minor", minors);
            foreach ( var m in minors.UgMinors)
            {
                foreach(var c in m.courses)
                {
                    var course = await dataR.GetData("course/courseID=" + c);
                    var convert = JsonConvert.DeserializeObject<CourseModel>(course);

                    if (!(comboModel.ContainsKey(c.Replace("-","")))) { 
                        comboModel.Add(c.Replace("-",""), convert);
                    }
                }
            }
            
            comboModel.Add("pageTitle", "Minors");

            return View(comboModel);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        public async Task<IActionResult> Employment()
        {
            DataRetrieval dr = new DataRetrieval();
            var stringEmploy = await dr.GetData("employment/");

            var employmentModel = JsonConvert.DeserializeObject<EmploymentModel>(stringEmploy);
            employmentModel.pageTitle = "Employment";
            return View(employmentModel);
        }
    }
}
