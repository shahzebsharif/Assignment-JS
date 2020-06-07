// Chapter 1 - Task No. 1

alert("Hello to JS World!")


// Chapter 1 - Task No. 2

alert("Error! Please Enter a Valid Password.")

// Chapter 1 - Task No. 3

alert('Welcome to JS Land.... \nHappy Coding!')

// Chapter 1 - Task No. 4

alert('Welcome to JS Land')
alert('Happy Coding!')

// Chapter 1 - Task No. 5

alert('Hello I Can Run JS through my Web Browser console')
console.log(alert)

// Chapter 2 - Task No. 1

var username = "Shahzeb Sharif";

// Chapter 2 - Task No. 2

var myName = username;

// Chapter 2 - Task No. 3

var message = "Hello World";
alert(message);

// Chapter 2 - Task No. 4

var studentname = "John Doe"
var age1 = 15
var qualification = "Certified Mobile Application Development"

alert(studentname);
alert(age1 + " years old");
alert(qualification);

// Chapter 2 - Task No. 5

var pizza = "PIZZA";
alert(pizza + '\n' + pizza[0] +  pizza[1] +  pizza[2] +  pizza[3] + '\n' + pizza[0] +  pizza[1] +  pizza[2] + '\n' + pizza[0] +  pizza[1] + '\n' + pizza[0])

// Chapter 2 - Task No. 6

var email = "shahzaib.sharif2013@gmail.com"
alert("My Email Address is " + email)

// Chapter 2 - Task No. 7

var book = "A Smarter Way to Learn JavaScript"
alert("I am Trying to Learn from the Book " + book)

// Chapter 2 - Task No. 8

document.write("Chapter 2 - Task No. 8" + "<br><br>")
document.write("Yah! I can write HTML content through JavaScript")

// Chapter 2 - Task No. 9
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

// Chapter 3 - Task No. 1

var age = 15;
alert("I am " + age + " years old") 

// Chapter 3 - Task No. 2

var N = 14;
alert("You have visited this Site " + N + " Times")

// Chapter 3 - Task No. 3

var birthyear = 1995
alert("My Birth Year is " + birthyear + '\n' + "Data Type of my Declared variable is number") 

// Chapter 3 - Task No. 4
var Customer = prompt("Enter Customer Name", "John Doe")
var product = prompt("Enter Product Purchased", "T-Shirt")
var Qty = +prompt("Enter Quantity", "5")

document.write("<br><br>" + "Chapter 3 - Task No. 4" + "<br><br>")
document.write(Customer + " ordered " + Qty + " " + product + "(s)" + "on XYZ Clothing Store")

// Chapter 4 - Task No. 1

var Var1 = "Variable 1", Var2 = "Varibale 2", Var3 = "1";

// Chapter 4 - Task No. 2

var Var1 = "Variable 1", Var2 = "Varibale 2", Var3 = "Varibale 3", Var4 = "Variable 4", Var5 = "Variable 5";
// Illegal Varible Cannot be delcare
// var 12var = "Illegal Variable", @Var = "Illegal Varibale", %var = "Illegal Variable", ?var = "Ilelgal Variable", <var = "Illegal Varibabl"

// Chapter 4 - Task No. 3
document.write("<br><br>" + "Chapter 4 - Task No. 3" + "<br><br>")
document.write("Rules for Naming JS Variables" + "<br>")
document.write("Variable Name Can Only Contain, Numbers, $ and _. For Example: $my_1stVariable." + "<br>")
document.write("Variable Must Begin With a letter, $ or _. For Example : $name, _name or name" + "<br>")
document.write("Variables Name are Case Sensitive" + "<br>")
document.write("Variables Should not be JS Keywords")


// Chapter 5 - Task No. 1
var number1 = +prompt("Please Enter Value 1", "10")
var number2 = +prompt("Please Enter Value 2", "13")
var total = number1 + number2
document.write("<br><br>" + "Chapter 5 - Task No. 1" + "<br><br>")
document.write("Sum of " + number1 + " and " + number2 + " is " + total)

// Chapter 5 - Task No. 2
var number1 = +prompt("Please Enter Value 1", "10")
var number2 = +prompt("Please Enter Value 2", "13")
var total = number1 - number2
document.write("<br><br>" + "Chapter 5 - Task No. 2" + "<br><br>")
document.write("Substraction of " + number1 + " and " + number2 + " is " + total + "<br>")
var total = number1 * number2
document.write("Multiplication of " + number1 + " and " + number2 + " is " + total + "<br>")
var total = number1 / number2
document.write("Division of " + number1 + " and " + number2 + " is " + total + "<br>")
var total = number1 % number2
document.write("Modulus of " + number1 + " and " + number2 + " is " + total)

// Chapter 5 - Task No. 3
var ininumber;
document.write("<br><br>" + "Chapter 5 - Task No. 3" + "<br><br>")
document.write("value after variable declration is: " + ininumber + "<br>")
ininumber = 10;
document.write("Initial Value: " + ininumber + "<br>")
ininumber++;
document.write("Value After Increment is: " + ininumber + "<br>")
ininumber = ininumber + 7;
document.write("Value after addition is: " + ininumber + "<br>")
ininumber--;
document.write("Value After Decrement is: " + ininumber + "<br>")
ininumber = ininumber % 3;
document.write("The Reminder is: " + ininumber)

// Chapter 5 - Task No. 4
var qtyticket = 5;
var ticketprice = 600;
var totalprice = qtyticket * ticketprice
document.write("<br><br>" + "Chapter 5 - Task No. 4" + "<br><br>")
document.write("Total cost to buy " + qtyticket + " tickets to a movie is " + totalprice + "PKR")

// Chapter 5 - Task No. 5
document.write("<br><br>" + "Chapter 5 - Task No. 5" + "<br><br>")
document.write(" 5 " + " X " + " 1 " + " = " + 5*1  + "<br>")
document.write(" 5 " + " X " + " 2 " + " = " + 5*2  + "<br>")
document.write(" 5 " + " X " + " 3 " + " = " + 5*3  + "<br>")
document.write(" 5 " + " X " + " 4 " + " = " + 5*4  + "<br>")
document.write(" 5 " + " X " + " 5 " + " = " + 5*5  + "<br>")
document.write(" 5 " + " X " + " 6 " + " = " + 5*6  + "<br>")
document.write(" 5 " + " X " + " 7 " + " = " + 5*7  + "<br>")
document.write(" 5 " + " X " + " 8 " + " = " + 5*8  + "<br>")
document.write(" 5 " + " X " + " 9 " + " = " + 5*9  + "<br>")
document.write(" 5 " + " X " + " 10 " + " = " + 5*10  + "<br>")

// Chapter 5 - Task No. 6
document.write("<br><br>" + "Chapter 5 - Task No. 6" + "<br><br>")
var inputcelsius = +prompt("Please Enter Temperature in Celcius", "39")
var outputfahrenheit = ((inputcelsius*9/5)+32)
document.write(inputcelsius + " C is " + outputfahrenheit + " F " + "<br>")
var inputfahrenheit = +prompt("Please Enter Temperature in Fahrenheit", "104")
var outputcelcius = ((inputfahrenheit - 32)*5/9)
document.write(inputfahrenheit + " F is " + outputcelcius + " C " + "<br>")

// Chapter 5 - Task No. 7
document.write("<br><br>" + "Chapter 5 - Task No. 7" + "<br><br>")
var price1 = +prompt("Enter Amount of Item 1", "250")
var qty1 = +prompt("Enter Qty of Item 1", "3")
var price2 = +prompt("Enter Amount of Item 2", "667")
var qty2 = +prompt("Enter Qty of Item 2", "2")
var shipping = +prompt("Enter Shipping Charges", "250")
var totalcost = (price1*qty1)+(price2*qty2)+(shipping)

document.write("Shopping Cart" + "<br><br>")
document.write("Price of item 1 is " + price1 + "<br>")
document.write("Quantity of Item 1 is " + qty1 + "<br>")
document.write("Price of item 2 is " + price2 + "<br>")
document.write("Quantity of Item 2 is " + qty2 + "<br>")
document.write("Shipping Charges is " + shipping + "<br><br>")
document.write("Total Cost of Your order is " + totalcost)

// Chapter 5 - Task No. 8
document.write("<br><br>" + "Chapter 5 - Task No. 8" + "<br><br>")
var totalmarks = 850
var obtainedmarks = 704
var percen = (704/850)*100
document.write("Total Marks: " + totalmarks + "<br>")
document.write("Obtained Marks: " + obtainedmarks + "<br>")
document.write("Percentage: " + percen) 

// Chapter 5 - Task No. 9
document.write("<br><br>" + "Chapter 5 - Task No. 9" + "<br><br>")
var dollars = 10, saudiriyal = 25
var pakistanirupee = (dollars*104.80)+(saudiriyal*28)
document.write("Total Currency in PKR: " + pakistanirupee)

// Chapter 5 - Task No. 10
document.write("<br><br>" + "Chapter 5 - Task No. 10" + "<br><br>")
var number3 = 10
number3 = (((number3 + 5)*2)/2)
document.write("After Calculation final value is: " + number3)

// Chapter 5 - Task No. 11
document.write("<br><br>" + "Chapter 5 - Task No. 11" + "<br><br>")
var currentyear = +prompt("Enter Current Year", "2020")
var birthyear = +prompt("Enter Birthyear", "1995")
var calage = currentyear-birthyear

document.write("Age Calculator" + "<br><br>")
document.write("Current Year: " + currentyear + "<br>")
document.write("Birth Year: " + birthyear + "<br>")
document.write("Your Age is: " + calage + "<br>")

// Chapter 5 - Task No. 12
document.write("<br><br>" + "Chapter 5 - Task No. 12" + "<br><br>")
var radious = +prompt("Enter Radius of a Circle", "20")
var circum = 2*3.142*radious
var cirarea = 3.142*(radious*radious)
document.write("The Geometrizer" + "<br><br>")
document.write("Radius of a Circle is: " + radious + "<br>")
document.write("The Circumference is: " + circum + "<br>")
document.write("The area is: " + cirarea + "<br>")

// Chapter 5 - Task No. 13
document.write("<br><br>" + "Chapter 5 - Task No. 13" + "<br><br>")
var favsnack = prompt("Please Enter your Favourite Snack", "Oreo")
var currentage = +prompt("Please Enter Your Current Age", "25")
var maxage = +prompt("Please Enter your Maximum Age", "80")
var estperday = +prompt("Please Enter Estimated Amount Per Day Consumed", "3")
var totalreq = (((maxage-currentage)*365)*estperday)
document.write("The Lifetime Supply Calculator" + "<br><br>")
document.write("Favourite Snack : " + favsnack + "<br>")
document.write("Current Age : " + currentage + "<br>")
document.write("Estimated Maximum Age : " + maxage + "<br>")
document.write("Amount of Snacks Per Day : " + estperday + "<br>")
document.write("You Will need " + totalreq + " " + favsnack + " to last you until the ripe old age of " + maxage)

// Chapter 6-9 - Task No. 1
document.write("<br><br>" + "Chapter 6-9 - Task No. 1" + "<br><br>")
var a = +prompt("Enter Value of Variable a", "10")
document.write("Result" + "<br>")
document.write("The Value of Variable a is: " + a + "<br>")
document.write("-------------------------------------" + "<br><br>")
a = ++a
document.write("The Value of ++a is: " + a + "<br>")
document.write("Now the Value of ++a is: " + a + "<br><br>")
a = a++ 
document.write("The Value of a++ is: " + a + "<br>")
a = a + 1
document.write("Now the Value of a is: " + a + "<br><br>")
a = --a 
document.write("The Value of --a is: " + a + "<br>")
document.write("Now the Value of a is: " + a + "<br><br>")
a = a--
document.write("The Value of --a is: " + a + "<br>")
a = a - 1
document.write("Now the Value of a is: " + a + "<br><br>")


// Chapter 6-9 - Task No. 2
document.write("<br><br>" + "Chapter 6-9 - Task No. 2" + "<br><br>")
var a = 2, b = 1;
document.write("Value of a is: " + a + "<br>")
document.write("Value of b is: " + b + "<br>")
var result = --a - --b + ++b + b--
document.write("Value of --a at first stage is: 1" + "<br>")
document.write("Value of --b at Second stage is: 0" + "<br>")
document.write("Value of --a - --b at Second stage is: 1" + "<br>")
document.write("Value of --a - --b + ++b at Third stage is: 2" + "<br>")
document.write("Value of --a - --b + ++b + b-- at forth stage is: 3" + "<br>")
document.write("Final Result is: " + result)

// Chapter 6-9 - Task No. 3
document.write("<br><br>" + "Chapter 6-9 - Task No. 3" + "<br><br>")
var nameuser = prompt("Please Enter Your Name", "Shahzeb")
document.write("Welcome " + nameuser)

// Chapter 6-9 - Task No. 5
document.write("<br><br>" + "Chapter 6-9 - Task No. 5" + "<br><br>")
var tablenum = +prompt("Please Enter Number for what Multiplication Table is Required", "5")
for(i = 1; i <= 10; i++){
    document.write(tablenum + " X " + i + " = " + tablenum*i + "<br>")
}

// Chapter 6-9 - Task No. 6
document.write("<br><br>" + "Chapter 6-9 - Task No. 6" + "<br><br>")
var subject1 = prompt("Enter Name of Subject 1", "Maths")
var subject2 = prompt("Enter Name of Subject 2", "Physics")
var subject3 = prompt("Enter Nmae of Subject 3", "Chemistry")
var marks = 100
var obtsubject1 = +prompt("Enter Marks of Subject 1", "76")
var obtsubject2 = +prompt("Enter Marks of Subject 2", "87")
var obtsubject3 = +prompt("Enter Marks of Subject 3", "75")
var totalmarks = marks*3
var totalobt = obtsubject1+obtsubject2+obtsubject3
var percenttotal = (totalobt/totalmarks)*100
var persubject1 = (obtsubject1/marks)*100
var persubject2 = (obtsubject2/marks)*100
var persubject3 = (obtsubject3/marks)*100

document.write("Subject    Total Marks    Obtained Marks    Percentage " + "<br>")
document.write(subject1 + " " + marks + " " + obtsubject1 + " " + persubject1 + "%" + "<br>")
document.write(subject2 + " " + marks + " " + obtsubject2 + " " + persubject2 + "%" + "<br>")
document.write(subject3 + " " + marks + " " + obtsubject3 + " " + persubject3 + "%" + "<br>")
document.write( " " + totalmarks + " " + totalobt + " " + percenttotal + "%" + "<br>")

// Chapter 9-11 - Task No. 1
document.write("<br><br>" + "Chapter 9-11 - Task No. 1" + "<br><br>")
var city = prompt("Please Enter City Name", "Karachi")
if(city === "Karachi"){
    document.write("Welcome to City of Lights")
}

// Chapter 9-11 - Task No. 2
document.write("<br><br>" + "Chapter 9-11 - Task No. 2" + "<br><br>")
var gender = prompt("Please Enter Your Gender", "Male")
if(gender === "Male"){
    document.write("Good Morning Sir")
}
else if(gender === "Female"){
    document.write("Good Morning Ma'am")
}
else{
    document.write("Please Input Right Gender")
}

// Chapter 9-11 - Task No. 3
document.write("<br><br>" + "Chapter 9-11 - Task No. 3" + "<br><br>")
var colorsignal = prompt("Please Enter Signal Light Color", "Red")
if(colorsignal === "Red"){
    document.write("Must Stop")
}
else if(colorsignal === "Yellow"){
    document.write("Ready to Move")
}
else if(colorsignal === "Green"){
    document.write("Move Now")
}
else{
    document.write("Input Correct Value")
}

// Chapter 9-11 - Task No. 4
document.write("<br><br>" + "Chapter 9-11 - Task No. 4" + "<br><br>")
var litres = +prompt("Please Enter Remaining Fuel Level", ".24")
if(litres <= 0.25){
    document.write("Please Refill Your Tank" + "<br>")
}
else{
    document.write("Your Good To Go!!!" + "<br>")
}

// Chapter 9-11 - Task No. 5
document.write("<br><br>" + "Chapter 9-11 - Task No. 5" + "<br><br>")
var a = 4;
document.write("a. Condition ++a === 5" + "<br>" + "<br>")
if(++a === 5){
    document.write("given condition for variable is true" + "<br>")
}
else{
    document.write("Given Condition is False" + "<br>")
}

var b = 82;
document.write("b. Condition b++ === 83" + "<br>")
if(b++ === 83){
    document.write("given condition for variable is true" + "<br>")
}
else{
    document.write("Given Condition is False" + "<br>")
}


var c = 12;
document.write("c. Multiple Conditions" + "<br>")
if(c++ === 13){
    document.write("Condition 1 is true" + "<br>")
    if(c === 13){
        document.write("Condition 2 is true" + "<br")
        if(++c < 14){
            document.write("Condition 3 is true" + "<br>")
            if( c===14){
                document.write("Condition 4 is true" + "<br>")
            }
        }
    }
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
document.write("d. totalCost = laborCost + materialCost" + "<br>")
if(totalCost === laborCost + materialCost){
    document.write("The Cost is Equal" + "<br>")
}

document.write("e. if(true)" + "<br>")
if(true){
    document.write("True" + "<br>");
}
if(false){
    document.write("False" + "<br>")
}

document.write("f. if car < cat")
if("car" < "cat"){
    document.write("car is smaller than cat" + "<br>")
}

// Chapter 9-11 - Task No. 6
document.write("<br><br>" + "Chapter 9-11 - Task No. 6" + "<br><br>")
var marks = 100
var obtsubject1 = +prompt("Enter Marks of Subject 1", "76")
var obtsubject2 = +prompt("Enter Marks of Subject 2", "87")
var obtsubject3 = +prompt("Enter Marks of Subject 3", "75")
var totalmarks = marks*3
var totalobt = obtsubject1+obtsubject2+obtsubject3
var percenttotal = (totalobt/totalmarks)*100
document.write("Total Marks: " + totalmarks + "<br>")
document.write("Marks Obtained: " + totalobt + "<br>")
document.write("Percentage: " + percenttotal + "%" + "<br>")
if(percenttotal >= 80 && percenttotal <= 100){
    document.write("Grade: A-One" + "<br>")
    document.write("Remarks: Excellent" + "<br>")
}
else if(percenttotal >= 70 && percenttotal <= 80){
    document.write("Grade: A" + "<br>")
    document.write("Remarks: Good")
}
else if(percenttotal >= 60 && percenttotal <= 70){
    document.write("Grade: B" + "<br>")
    document.write("Remarks: You Need to Improve")
}
else if(percenttotal < 60){
    document.write("Grade: Fail" + "<br>")
    document.write("Remarks: Sorry")
}
else{
    document.write("Input Correct Values")
}

