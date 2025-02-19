// Darren Yang
// 6/18/2024
// ISTE240 Exercise 4 - JavaScript Part 1
function jsStyle() {
    // function to change style
    // Change the color and the size of the font
    // in the paragraph with id='text'
    document.getElementById("text").style.fontSize = "1.2em";
    document.getElementById("text").style.color = "blue";
}

function getFormValues() {
    // function to send first and last names
    // to an 'alert' message.
    var first = document.getElementById("fname").value;
    var last = document.getElementById("lname").value;
    alert(first + " " + last);
}

function getOptions() {
	// function to display the number of options in an alert()
	var num = document.getElementById("mySelect").options.length;
	alert("There are " + num + " options available.");
}

//put a mouseover and a mouseout event on the p tag below

	//create a function that is called on the mouseover that turns the text red
	function over(){
		document.getElementById("rb").style.color = "red";
	}

	//create a function that is called on the mouseout that turns the text black
	function out(){
		document.getElementById("rb").style.color = "black";
	}

// code two functions multiply and divide functions here
	//hints:
		//when you get a value out of an input, you are getting a string.  To get a number, use parseInt()
		//When you want to output something into the HTML you can use .innerHTML - like document.getElementById("result").innerHTML= "fred";

        function divide(){
            var num1 = parseInt(document.getElementById("firstoperand").value);
            var num2 = parseInt(document.getElementById("secondoperand").value);
    
            document.getElementById("result").innerHTML = num1 / num2;
        }
    
        function multiply(){
            var num1 = parseInt(document.getElementById("firstoperand").value);
            var num2 = parseInt(document.getElementById("secondoperand").value);
    
            document.getElementById("result").innerHTML = num1 * num2;
        }