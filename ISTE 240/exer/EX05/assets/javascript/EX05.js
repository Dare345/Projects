// Darren Yang
// 6/23/2024
// ISTE240 Exercise 5 - JavaScript Part 2
function jsStyle() {
    // function to move the text right by 10px
    document.getElementById("text").style.left = parseInt(document.getElementById("text").style.left) + 10 + 'px';
}

function howmany() {
    // function to send the total number of inputs and type text 
    // to an 'alert' message.
    const first = document.getElementById("regForm");
    const total = first.getElementsByTagName("input").length;
    const text = first.querySelectorAll("input[type='text']").length;
    alert("Total inputs: " + total + "\n" +
        "Total text elements: " + text);
}

function colorchanger() {
	// function to change the background color
	document.getElementById("ex5c").style.backgroundColor = document.getElementById("mySelect").value;
}

//put a mouseover and a mouseout event on the p tag below

	//create a function that is called on the mouseover that turns the text to the color selected in ex 5c
	function over(){
		document.getElementById("rb").style.color = document.getElementById("mySelect").value;
	}

	//create a function that is called on the mouseout that turns the text black
	function out(){
		document.getElementById("rb").style.color = "black";
	}

// code two functions multiply and divide functions here
	//hints:
		//when you get a value out of an input, you are getting a string.  To get a number, use parseInt()
		//When you want to output something into the HTML you can use .innerHTML - like document.getElementById("result").innerHTML= "fred";

        // Added text node to both divide and multiply functions

        function divide(){
            const num1 = parseInt(document.getElementById("firstoperand").value);
            const num2 = parseInt(document.getElementById("secondoperand").value);
            
            const node = document.createTextNode(num1 / num2);
            document.getElementById("result").append(node);


        }
    
        function multiply(){
            const num1 = parseInt(document.getElementById("firstoperand").value);
            const num2 = parseInt(document.getElementById("secondoperand").value);
            
            const node = document.createTextNode(num1 * num2);
            document.getElementById("result").append(node);
        }