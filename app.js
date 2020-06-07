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

// Chapter 9-11 - Task No. 7
document.write("<br><br>" + "Chapter 9-11 - Task No. 7" + "<br><br>")
var secretnum = 5;
var guessnum = +prompt("Please Guess the Number", "6")
if(secretnum === guessnum){
    document.write("Bingo! Correct Answer")
}
else if(guessnum === (secretnum+1)){
    document.write("Close Enough to Correct Answer")
}
else{
    document.write("Better Luck Next Time")
}

// Chapter 9-11 - Task No. 8
document.write("<br><br>" + "Chapter 9-11 - Task No. 8" + "<br><br>")
var userinput = +prompt("Please Enter Number to Check Divisible by 3", "6")
var verifying = userinput%3
document.write("Your Number is: " + userinput + "<br>")
if(verifying === 0){
    document.write("The Input Number is Divisible by 3")
}
else{
    document.write("The Given Number is not divisible by 3")
}


// Chapter 9-11 - Task No. 9
document.write("<br><br>" + "Chapter 9-11 - Task No. 8" + "<br><br>")
var userinput = +prompt("Please Enter Number to Check Even & Odd", "6")
var verifying = userinput%2
document.write("Your Number is: " + userinput + "<br>")
if(verifying === 0){
    document.write("The Given Number is Even Number")
}
else{
    document.write("The Given Number is Odd Number")
}

// Chapter 9-11 - Task No. 10
document.write("<br><br>" + "Chapter 9-11 - Task No. 10" + "<br><br>")
var inputtemp = +prompt("Please Input Your Temperature","33")
if(inputtemp > 40){
    document.write("It is too hot outside")
}
else if(inputtemp >= 30 && inputtemp <= 40){
    document.write("The Weather today is Normal")
}
else if(inputtemp >=20 && inputtemp <= 30){
    document.write("Today's Weather is Cool")
}
else if(inputtemp >=10 && inputtemp <= 20){
    document.write("OMG! Today's Weather is so Cool")
}
else{
    document.write("Please input Correct Temperature")
}

// Chapter 9-11 - Task No. 11
document.write("<br><br>" + "Chapter 9-11 - Task No. 11" + "<br><br>")
var firstnumber = +prompt("Enter First Value", "10")
var operator = prompt("Please Input Operator i.e. +, -, *, /, %", "+")
var secondnumber = +prompt("Please Input Second Value", "15")
var result = 0
if(operator === "+"){
    result = firstnumber + secondnumber
    document.write("Selected Operation is: " + operator + "<br>")
    document.write("Result: " + result + "<br>")

}
else if(operator === "-"){
    result = firstnumber - secondnumber
    document.write("Selected Operation is: " + operator + "<br>")
    document.write("Result: " + result + "<br>")
}
else if(operator === "/"){
    result = firstnumber / secondnumber
    document.write("Selected Operation is: " + operator + "<br>")
    document.write("Result: " + result + "<br>")
}
else if(operator === "*"){
    result = firstnumber * secondnumber
    document.write("Selected Operation is: " + operator + "<br>")
    document.write("Result: " + result + "<br>")
}
else if(operator === "%"){
    result = firstnumber % secondnumber
    document.write("Selected Operation is: " + operator + "<br>")
    document.write("Result: " + result + "<br>")
}
else{
    document.write("Please Input Correct Number and Operator")
}

// Chapter 12-13 - Task No. 1
document.write("<br><br>" + "Chapter 12-13 - Task No. 1" + "<br><br>")
var checking = prompt("Please Input Character to Check", "a")
var checked = checking.charCodeAt(0)

if(checked >= 97 && checked <= 122){
    document.write("You Input: " + checking + "<br>")
    document.write("Given Character is a Lower Case Letter")
}
else if(checked >= 65 && checked <= 90){
    document.write("You Input: " + checking + "<br>")
    document.write("Given Character is a Upper Case Letter")
} 
else if(checked >= 48 && checked <= 57){
    document.write("You Input: " + checking + "<br>")
    document.write("Given Character is a Numeric Value")
}
else{
    document.write("Please Input Only Numbers and Alphabets")
}

// Chapter 12-13 - Task No. 2
document.write("<br><br>" + "Chapter 12-13 - Task No. 2" + "<br><br>")
var int1 = +prompt("Please Enter First Integer", "10")
var int2 = +prompt("Please Input Second Integer", "45")

if(int1 > int2){
    document.write("First Integer is Larger then Second Integer: " + int1 + "<br>")
}
else if(int1 < int2){
    document.write("Second Integer is Larger then First Integer: " + int2 + "<br>")
    
}
else{
    document.write("Both Integers are Equal")
}

// Chapter 12-13 - Task No. 3
document.write("<br><br>" + "Chapter 12-13 - Task No. 3" + "<br><br>")

var checkint = +prompt("Please Input an Integer")
if(checkint > 0){
    document.write("Given Integer is Postive: " + checkint)
}
else if(checkint < 0){
    document.write("Given Integer is Negative: " + checkint)
}
else{
    document.write("Given Integer is Zero")
}

// Chapter 12-13 - Task No. 4
document.write("<br><br>" + "Chapter 12-13 - Task No. 1" + "<br><br>")
var vowel = prompt("Please Input a Character", "s")
if(vowel[0] === "A" || vowel[0] === "E" || vowel[0] === "I" || vowel[0] === "O" || vowel[0] === "U" || vowel[0] === "a" || vowel[0] === "e" || vowel[0] === "i" || vowel[0] === "o" || vowel[0] === "u"){
    document.write("Given Character is Vowel")
}
else{
    document.write("Given Character is not Vowel")
}

// Chapter 12-13 - Task No. 5
document.write("<br><br>" + "Chapter 12-13 - Task No. 5" + "<br><br>")
var pass = "abcd"
var userpass = prompt("Plesae Enter Password", "abcd")

if(userpass === pass){
    document.write("Correct! The Password you entered matches the Orginal Password")
}
else if(userpass != pass){
    document.write("Incorrect Password")
}
else if(userpass.length === 0){
    document.write("Please Enter Password")
}
else{
    document.write("Bye Bye")
}

// Chapter 12-13 - Task No. 6
document.write("<br><br>" + "Chapter 12-13 - Task No. 6" + "<br><br>")
var hour = 13
if(hour < 18){
    document.write("Good Day")
}
else{
    document.write("Good Evening")
}

// Chapter 12-13 - Task No. 7
document.write("<br><br>" + "Chapter 12-13 - Task No. 7" + "<br><br>")
var time = +prompt("Please Enter Time in 24 Hours Format i.e. 1900 = 7 pm", "1900")
if(time >= 0000 && time < 1200){
    document.write("Good Morning!")
}
else if(time >= 1200 && time < 1700){
    document.write("Good Afternoon!")
}
else if(time >= 1700 && time < 2100){
    document.write("Good Evening!")
}
else if(time >= 2100 && time <= 2359){
    document.write("Good Night!")
}
else{
    document.write("Please Input Correct Time")
}

// Chapter 14-16 - Task No. 1
document.write("<br><br>" + "Chapter 14-16 - Task No. 1" + "<br><br>")
var arr1 = []

// Chapter 14-16 - Task No. 2
document.write("<br><br>" + "Chapter 14-16 - Task No. 2" + "<br><br>")
document.write("Didnt COvered Yet")

// Chapter 14-16 - Task No. 3
document.write("<br><br>" + "Chapter 14-16 - Task No. 3" + "<br><br>")
var arr1 = ["ABC", "DEF", "GHI", "JKL"]
document.write(arr1 + "<br>")

// Chapter 14-16 - Task No. 4
document.write("<br><br>" + "Chapter 14-16 - Task No. 4" + "<br><br>")
var arr1 = [123, 456, 789 ]
document.write(arr1 + "<br>")

// Chapter 14-16 - Task No. 5
document.write("<br><br>" + "Chapter 14-16 - Task No. 5" + "<br><br>")
var arr1 = [true, true, false ]
document.write(arr1 + "<br>")

// Chapter 14-16 - Task No. 6
document.write("<br><br>" + "Chapter 14-16 - Task No. 6" + "<br><br>")
var arr1 = [123, "abc", true ]
document.write(arr1 + "<br>")

// Chapter 14-16 - Task No. 7
document.write("<br><br>" + "Chapter 14-16 - Task No. 7" + "<br><br>")
var arr1 = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M", "M.Phil", "PhD"]
document.write("Qualifications" + "<br>")
for(i = 0; i < arr1.length ; i++){
    document.write(i + ")" + " " + arr1[i] + "<br>")
}

// Chapter 14-16 - Task No. 8
document.write("<br><br>" + "Chapter 14-16 - Task No. 8" + "<br><br>")
var arr1 = ["Shahzeb", "Mohsin", "Talha"]
var arr2 = [457, 490, 432]
for(i = 0; i < arr1.length; i++){
    document.write("Score of " + arr1[i] + " is " + arr2[i] + ". Percentage: " + arr2[i]/500*100 + "%" + "<br>")
}

// Chapter 14-16 - Task No. 9
document.write("<br><br>" + "Chapter 14-16 - Task No. 9" + "<br><br>")

var arr1 = ["Yellow" , "Black" , "White"]
document.write(arr1 + "<br><br>")
var color1 = prompt("Please Enter a Color to Add in the begining", "Pink")
arr1.unshift(color1)
document.write("After Adding User Defined Color in the Begining" + "<br>")
document.write(arr1 + "<br><br>")
var color2 = prompt("Please Enter a color to Add at the End", "Blue")
arr1.push(color2)
document.write("After Adding User Defined Color in the end" + "<br>")
document.write(arr1 + "<br><br>")
var color3 = prompt("Please Enter a Color to Add in the begining", "Magenta")
var color4 = prompt("Please Enter a Color to Add in the begining", "Orange")
arr1.unshift(color3, color4)
document.write("After Adding User Defined Color in the Begining" + "<br>")
document.write(arr1 + "<br><br>")
arr1.shift()
document.write("After Deleting First Color" + "<br>")
document.write(arr1 + "<br><br>")
arr1.pop()
document.write("After Deleting Last Color" + "<br>")
document.write(arr1 + "<br><br>")
var indexcolor = +prompt("Please Enter Index Number Where to add a Color", 2)
var color5 = prompt("Please Input Color to Add at the Specified Index No.", "Green")
arr1.splice(indexcolor, 0, color5)
document.write("After Adding Color at Specified Index" + "<br>")
document.write(arr1 + "<br><br>")
var indexdelete = +prompt("Enter From Where You Want to Delete Colors", "2")
var deletecount = +prompt("Enter How Many You Want to Delete From the Starting Index?", "1")
arr1.splice(indexdelete , deletecount)
document.write("After Deleteing Color at Specified Index" + "<br>")
document.write(arr1 + "<br><br>")

// Chapter 14-16 - Task No. 10
document.write("<br><br>" + "Chapter 14-16 - Task No. 10" + "<br><br>")

var students = [320, 230, 480, 120]
document.write("Score of Students = " + students + "<br>")
students.sort()
document.write("Ordered Score of Students = " + students + "<br>")


// Chapter 14-16 - Task No. 11
document.write("<br><br>" + "Chapter 14-16 - Task No. 11" + "<br><br>")
var cities = ["Karachi", "Islamabad", "Lahore", "Quetta", "Peshawar"]
document.write("List of Cities: " + cities + "<br>")
var selectedcities = cities.slice(1,4)
document.write("List of Selected Cities: " + selectedcities + "<br>")

// Chapter 14-16 - Task No. 12
document.write("<br><br>" + "Chapter 14-16 - Task No. 12" + "<br><br>")
var arr3 = ["This" , "is" , "my" , "cat"]
var sent = arr3.join(" ")
document.write("Array: " + "<br>" + arr3)
document.write("<br>" + "String: " + "<br>" + sent)

// Chapter 14-16 - Task No. 13
document.write("<br><br>" + "Chapter 14-16 - Task No. 13" + "<br><br>")

var compt = ["Keyboard", "Mouse", "Printer", "Monitor"]
for(i = 0; i < compt.length; i++){
    document.write("Out: " + "<br>" + compt[i] + "<br>")
}

// Chapter 14-16 - Task No. 14
document.write("<br><br>" + "Chapter 14-16 - Task No. 14" + "<br><br>")
var compt = ["Keyboard", "Mouse", "Printer", "Monitor"]
for(i = compt.length-1; i >= 0; i--){
    document.write("Out: " + "<br>" + compt[i] + "<br>")
}

// Chapter 14-16 - Task No. 15
document.write("<br><br>" + "Chapter 14-16 - Task No. 15" + "<br><br>")
document.write("Didn't Studied DOM Yet")

// Chapter 17-20 - Task No. 1
document.write("<br><br>" + "Chapter 17-20 - Task No. 1" + "<br><br>")
var arr = [[],[]]

// Chapter 17-20 - Task No. 2
document.write("<br><br>" + "Chapter 17-20 - Task No. 2" + "<br><br>")
var arr = [ [0,1,1,0], 
[1,0,0,1], 
[1,0,0,1], 
[0,1,1,0]]
document.write(arr)