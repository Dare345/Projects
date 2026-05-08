using System.Net.Http.Headers;

namespace DarrenP3.Services
{
    public class DataRetrieval
    {
        public async Task<string> GetData(string d)
        {
            /*
             *Task vs Thread
             *Task has async/await and a return value (no direct way to return from a thread)
             *Task can do multiple things at once (thread can do one)
             * Task is a higher level concept than a thread
             */

            using (var client = new HttpClient())
            {
                //using statement - at end of using it automatically calls the disposal method
                client.BaseAddress = new Uri("https://ischool.gccis.rit.edu/api/");
                client.DefaultRequestHeaders.Accept.Clear();
                //add new request header for what I want back
                client.DefaultRequestHeaders.Accept.Add(
                    new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue
                    ("application/json"));
                try
                {
                    //build something to hold the response
                    HttpResponseMessage response = await client.GetAsync(d, HttpCompletionOption.ResponseHeadersRead);
                    //ensure goodness
                    response.EnsureSuccessStatusCode();
                    //go get it
                    var data = await response.Content.ReadAsStringAsync();
                    return data;
                }
                catch (HttpRequestException hre)
                {
                    var msg = hre.Message;
                    return "HttpRequest: " + msg;
                }
                catch (Exception e)
                {
                    var msg = e.Message;
                    return "Ex: " + msg;
                }
            }
        }
    }
}
