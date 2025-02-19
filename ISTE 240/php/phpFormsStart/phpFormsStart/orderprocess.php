<?php
    $path="./";
    $page = 'Order Reciept';
    include $path.'assets/inc/header.php';
?>
<h2>Your Pizza Order</h2>

<!-- //Get user's info -->
<?php
 $cName = $_POST['customerName'];
 $cID = $_POST['customerID'];
 $pSize = $_POST['pizzaSize'];
 $pTop =  $_POST['topping'];


 if (empty($cID)){
    header('Location: orderform.php?name='.$cName);
 }else{
    if (!is_numeric($cID)){
        echo '<p>Customer ID ' . $cID .
        ' is not a valid ID ' .
        ' a non-numeric character.<p>';

        echo '<p><form action="orderform.php">' . 
        '<input type="hidden" name="name" value="'. $cName .
        '"/><input type="submit" value="ok"/></form></p>';
    }
    // Calculating Price based on Pizza Size and Pizza Cost
    else{
        switch ($pSize){
            case 'P':
                $pizzaCost = 7.99;
                $pizzaType = "Personal";
                break;
            case 'S':
                $pizzaCost = 10.99;
                $pizzaType = "Small";
                break;
            case 'M':
                $pizzaCost = 13.99;
                $pizzaType = "Medium";
                break;
            case 'L':
                $pizzaCost = 16.99;
                $pizzaType = "Large";
                break;
            default:
                $pizzaCost = 13.99;
                $pizzaType = "Medium";
                break;
        }
        //adding toppings costs
        switch($pTop){
            case '1':
                $topCost = 2.00;
                break;
            case '2':
                $topCost = 3.00;
                break;
            case '3':
                $topCost = 3.75;
                break;      
            default:
                $topCost = 0;
                break;
        }

        
        //Calculating Tax amount and Total Cost including the pizza and toppings
        $pizzaCost = $pizzaCost + $topCost;
        $taxAmount = $pizzaCost * .08;
        $totalCost = $pizzaCost + $taxAmount;

        //print the receipt
?>
            <div id='recipt'>
            <br/> Your Delicious Pizza Order!!
            <br/>
            <br/>Pizza Price:
        <?php
            $fmt = numfmt_create('en_US', NumberFormatter::CURRENCY);
            echo numfmt_format_currency($fmt, $pizzaCost, "USD");
            echo "<br>Topping Price: " . numfmt_format_currency($fmt, $topCost, "USD"); //added the toppings price
            echo "<br>Tax Amount: " . numfmt_format_currency($fmt, $taxAmount, "USD");
            echo "<br>Total Cost of your order is: " . numfmt_format_currency($fmt, $totalCost, "USD");
            echo "<br><br>Thank you for your order";
            echo ($cName == '')? '.': ", $cName.";
            echo "</div>";

    }
}
 ?>

<?php
    include $path.'assets/inc/footer.php';
?>

