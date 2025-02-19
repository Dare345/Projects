using System;

namespace ConsoleApp1{
    class Program{
        static void Main(string[] args)
        {

            Console.WriteLine("Hello Again...");
            Console.WriteLine("What is your name...?");
            var name = Console.ReadLine();
            Console.WriteLine($"{Environment.NewLine}Hello, {name}");
        }
    }
}
