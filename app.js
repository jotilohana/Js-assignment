//Chapter 1

//task 1
alert("Have a good day.");

//task 2
alert("Error! Please enter a valid password.");

//task 3
alert("Welcome to Js land...\nHappy Coding!");

//task 4
alert("Welcome to Js land...");
alert("Happy Coding!");

//task 5
console.log("Hello! I can run JS through my browser's console.");

//task 6,7 in index.html


//Chapter 2

//task 1
var username;

//task 2
var myname="Joti kumari Bai";

//task 3
var message="Hello World!";
alert(message);

//task 4
var name="john"
var age=20;
var certified="Certified Web Application Development"
alert(name);
alert(age);
alert(certified);

//task 5
var p="PIZZA\nPIZZ\nPIZ\n\PI\nP";
alert(p);

//task 6
var email="example@example.com";
alert("My email address is "+email);

//task 7
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the book "+book);

//task 8
document.write("Yah! I can write HTML content through Javasrcipt<br><br>");

//task 9
var str="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”<br><br>";
alert(str);
document.write(str);

//Chapter 3

//task1
var age=15;
alert("I am "+ age +" years old");

//task2
var N=14;
alert("You have visited "+N+" times");


//task 3
var birthYear=2000;
document.write("My birth year is "+birthYear+"<br>Data type of my declared variable is number<br><br>");

//task 4
var visiter_name=prompt("Enter your name");
var product_title=prompt("Enter product title");
var quality=prompt("Enter number of products");
document.write(visiter_name+" ordered "+quality+" "+product_title+" on XYZ store<br><br>");

//Chapter 4

//task 1
var a,b,c;

//task 2
//legal
var age;
var $age;
var _age;
var age_1;
var $age_12;

//illegal
// var 123age;
// var "age";
// var  var;
// var <age>;
// var age age;

//task 3
document.write("A heading stating Rules for naming JS variables. For example : $my_1stVariable<br>Variable names can only contain number, underscore, dollar sign and letter.<br>Variables must begin with a underscore, dollar sign, letter. For example $name, _name or name<br>Variable names are case sensitive.<br>Variable names should not be JS keywords.<br>");


//Chapter 5

//task 1
var first_value=+prompt("Enter first value");
var second_value=+prompt("Enter 2nd value");
var result=first_value+second_value;
document.write("<br>sum of "+first_value +" and "+second_value+" is "+result+"<br>");

//task 2
var result1=first_value-second_value;
document.write("substraction of "+first_value +" and "+second_value+" is "+result1+"<br>");

var result2=first_value*second_value;
document.write("Product of "+first_value +" and "+second_value+" is "+result2+"<br>");

var result3=first_value/second_value;
document.write("Ratio of "+first_value +" and "+second_value+" is "+result3+"<br>");

var result4=first_value%second_value;
document.write("modules of "+first_value +" and "+second_value+" is "+result4+"<br>");

//task 3
var value;
document.write("<br>Value after variable declaration is undefined<br>");
value=5;
document.write("Initial value is "+value +"<br>");
++value;
document.write("Value after increment is "+value+"<br>");
value=value+7;
document.write("Value after addition is "+value+"<br>");
--value;
document.write("Value after decrement is "+value+"<br>");
document.write("The remainder is "+(value%3)+"<br>");

// task 4
var ticket_price=600;
document.write("Total cost to buy 5 tickets to a movie is "+600*5+"<br>");

//task 5
for (var a = 1; a < 11; a++) {
    document.write("8 * " + a + " = " + (8 * a) + "<br>");
}

//task 6
var celsius_temp = 30;
document.write("<br>" + celsius_temp + "C is " + ((celsius_temp * 9 / 5) + 32) + "F<br>");
var Fahrenheit_temp = 70;
var celsius_temp1 = (Fahrenheit_temp - 32) * 5 / 9;
document.write(Fahrenheit_temp + "F is " + ((Fahrenheit_temp - 32) * 5 / 9) + "C<br>");

//task 7
var price_item1 = 650;
var price_item2 = 100;
var quantity_1 = 3;
var quantity_2 = 7;
var charges = 100;
var total = (650 * 3) + (100 * 7) + 100;
document.write("Total cost of your order is " + total + "<br>");

//task 8
var total_marks = 980;
var marks_obtained = 804;
document.write("<br>Total marks " + total_marks);
document.write("<br>marks obtained " + marks_obtained);
document.write("<br>Your percentage is " + marks_obtained / total_marks * 100 + "% <br>");

//task 9
var us_dollers = 10;
var saudi_riyals = 25;
var total_c = (us_dollers * 104.80) + (saudi_riyals * 28);
document.write("Total currency in PKR " + total_c);

//task 10
var num = 10;
num = ((num + 5) * 10) / 2
document.write("<br><br>Result after multiple operations: " + num);

//task 11
var this_year = 2016;
var birth_year = 1992;
var current_age = 2016 - 1992;
document.write("<br><br>Your age is " + current_age);

//task 12
var radius = 20;
document.write("<br><br>Radius is " + radius);
var circum = 2 * 3.142 * radius;
document.write("<br>circumference is " + circum);
var area = 3.142 * radius * radius;
document.write("<br>Area is " + area);

//task 13
var snack = "kurkure";
var c_age = 20;
var max_age = 70;
var no_of_snacks = 2;
var total_snacks = (70 - 20) * 2;
document.write("<br><br>You need " + total_snacks + " snacks till your lyf");

//Chapter 6-9

//task 1
var m = 10;
document.write("Result: <br> The value of m is " +m+"<br> The value of ++m is "+ (++m) +"<br>Now the value of m is " + m+ "<br>The value of m++ is " +(m++)+ "<br>Now the value of m is " + m+ "<br> The value of m-- is "+ (m--) +"<br>Now the value of m is " + m+ "<br>The value of --m is " +(--m)+"<br>Now the value of m is " + m);

//task 2
var a1=2;
var b1=1;
var result=--a - --b + ++b +b--;
//--A = 1
// --A - --B =  1 - 0 = 2
// --A - --B  + ++B = 1-0+1 = 2
// --A - --B + ++B + B-- = 1-0+1+1 = 3
document.write("<br> Value of a = " + A + "<br>Value of b = "  + B + "Result  = "  +result);


//task 3
var user_name = prompt("Enter Your name");
alert("Welcome " + user_name);

//task 5
var table_no = prompt("Enter a number");
if (table_no === "") {
    for (var a = 1; a < 11; a++) {
        document.write("5 * " + a + " = " + (5 * a) + "<br>");
    }
}
else {
    for (var a = 1; a < 11; a++) {
        document.write( table_no+ " * " + a + " = " + ( table_no* a) + "<br>");
    }
}

//Task 06
var s1 = prompt("Enter first subject");
var s2 = prompt("Enter second subject"); 
var s3 = +prompt("Enter third subject");
var totalEach = 100;
var o1 = +prompt("Enter obtained marks in first subject");
var o2 = +prompt("Enter obtained marks in second subject"); 
var o3 = +prompt("Enter obtained marks in third subject");
document.write("<br>'<table><tr><th>Subjects</th><th>Total Marks</th><th>Obtain Marks</th><th>Percenatge</th></tr><tr><td>" +s1+ "</td><td> 100 </td><td> " +o1 + "</td><td> "+(o1)+"%</td></tr><tr><td>" +s2+ "</td><td> 100 </td><td> " +o2 + "</td><td> "+(o2)+"%</td></tr><tr><td>" +s3+ "</td><td> 100 </td><td> " +o3 + "</td><td> "+(o3)+"%</td></tr></table>'");



//Chapter 9-11

//task 1
var city=prompt("Enter your city:");
city=city.toLocaleLowerCase();
if(city=="karachi"){
    alert("Welcome to city of lights");
}

//task 2
var gender=prompt("Enter your gender");
gender=gender.toLocaleLowerCase();
if(gender=="male"){
    alert("Good Morning Sir");
}
else if(gender=="female"){
    alert("Good Morning Ma'am");
}

//task 3
var color=prompt("Enter color of road traffic signal");
color=color.toLocaleLowerCase();
if(color=="red"){
    alert("Must Stop");
}
else if(color=="yellow"){
    alert("Ready to Move");
}
else if(color=="green"){
    alert("Move now");
}

//task 4
var fuel=prompt("Enter fuel in liters");
if(fuel<0.25){
    alert("Please refill the fuel in your car");
}

//task 5
var a;
alert("given condition for variable a is true");
//b condition is false
alert("");
//c
alert("Condition 3 is true ");
//d
alert("The cost equals");
//e
    alert("True");
//f
alert("car is smaller than cat");

//task 6
var marks_of_sub=prompt("Enter marks of 3 subjects");
var totalmarks=prompt("Enter Total marks");
var percent=marks_of_sub/totalmarks *100;
document.write("Marks Sheet<br><br>");
document.write("Total marks : "+totalmarks);
document.write("<br>Obtained marks : "+marks_of_sub);
document.write("<br> Percentage : "+percent+"%");
if(percent>=80){
    document.write("<br>Grade : A-one<br>");
    document.write("Excellent<br>");
}
else if(percent>=70){
    document.write("<br>Grade : A<br>");
    document.write("Good<br>");
}
else if(percent>=60){
    document.write("Grade : B<br>");
    document.write("You need to improve<br>");
}
else if(percent<60){
    document.write("Grade : fail<br>");
    document.write("sorry<br>");
}

//task 7
var secret_value=5;
var guess_value=prompt("Enter guess value");
if(guess_value==secret_value){
    alert("Bingo! Correct answer");
}
else if(guess_value==(secret_value-1)){
    alert("Close enough to the correct answer");
}

//task 8
var given_value = prompt("Enter a value");
if (given_value % 3 == 0) {
    alert("the number is divisible by 3");
}

//task 9
if (given_value % 2 == 0) {
    alert("number is even");
}
else if (given_value % 2 != 0) {
    alert("number is odd");
}

//task 10
var temp = prompt("Enter temperature");
if (temp > 40) {
    alert("it's too hot");
}
else if (temp > 30) {
    alert("The Weather today is Normal");
}
else if (temp > 20) {
    alert("Today’s Weather is cool");
}
else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

//task 11
var f_value = +(prompt("Enter 1st value"));
var l_value = +(prompt("Enter 2nd value"));
var s = prompt("Enter sign value");
if (s === '+') {
    alert("Result is " + (f_value + l_value));
}
else if (s === '-') {
    alert("Result is " + (f_value - l_value));
}
else if (s === '*') {
    alert("Result is " + (f_value * l_value));
}
else if (s === '/') {
    alert("Result is " + (f_value / l_value));
}
else if (s === '%') {
    alert("Result is " + (f_value % l_value));
}


//Chapter 12-13

//task 1
var ch = prompt("Enter character");
if (ch >= 'A' && ch <= 'Z') {
    alert("Character is a capital letter");
}
else if (ch >= 'a' && ch <= 'z') {
    alert("Character is a small letter");
}
else if (ch >= 1 && ch <= 9) {
    alert("Character is a number");
}

//task 2
if(f_value>l_value){
    alert(f_value);
}
else if(f_value<l_value){
    alert(l_value);
}
else{
    alert("both values are equal");
}

//task 3
var inp1=prompt("enter a number");
if(inp1<0){
    alert("Value is negative");
}
else if(inp1>0){
    alert("Value is Positive");
}
else if(inp1==0){
    alert("Value is Zero");
}

//task 4
var alp = prompt("Enter an alphabet");
    alp=alp.toLocaleLowerCase();
    if (alp=='a' || alp=='e' ||alp =='i' || alp=='o' || alp=='u') {
        alert("True");
    }
    else{
        alert("False");
    }


//task 5
var correct_pass="helloworld";
var pass=prompt("Enter Your Password");
if(pass==""){
    alert(" Please enter your password");
}
else if(pass==correct_pass){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}

//task 6
var greeting = "";
var hour = 13;
if (hour < 18) {
    alert(greeting = "Good day");
}
else {
    alert(greeting = "Good evening");
}

//task 7
var time=prompt("Enter time in 24 format");
if(time>=0000 && time<1200){
    alert("Good Morning");
}
else if(time>=1200 && time<1700){
    alert("Good Afternoon");
}
else if(time>=1700 && time<2100){
    alert("Good evening");
}
else if(time>=2100 && time<=2359){
    alert("Good Night");
}
//Chapter 14-16

//task 1
var student_name=[];

//task 2
var student_names=new Array();

//task 3
var string_A=["cat","dog"];

//task 4
var number_A=[1,2,3,4];

//task 5
var bool=["true"];

//task 6
var mix=["black", 1,"true",18];

//task 7
document.write("Qualification");
var qual=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"];
for(var i=0;i=qual.length-1;i++){
    document.write("1) "+qual[i]+"<br>");
}

//task 8
var student=["Michael","john","tony"];
var student_marks=[320,230,480];
for(var j=0;j<student.length;j++){
    document.write("Score")
}

//Task 9
var colorName = ["black", "white", "blue"];
document.write("<br>Original array : " +colorName);
var color1 = prompt("<Enter the color to be added in the beginning of the array ");
colorName.unshift(color1);
document.write("<br> " +color1+" is added in the beginning. <br>Updated Array : " +colorName);
var color2 = prompt("Enter the color to be added in the last of the array ");
colorName.push(color2);
document.write("<br> " +color2+" is added in last.<br>Updated Array : " +colorName);
document.write("<br>Adding two more colors in the beginning of the array");
colorName.unshift("Maroon", "Pink");
document.write("<br>Updated Array : " +colorName);
document.write("<br>Deleting first element of the array");
colorName.shift();
document.write("<br>Updated Array : " +colorName);
document.write("<br>Deleting last element of the array");
colorName.pop();
document.write("<br>Updated Array : " +colorName);
document.write("<br>Write the color and index of the color you want to add in the array ");
var color3 = prompt("Enter the color to be added ");
var Index = prompt("Enter at which index you want " +color3 + "to be added" );
colorName.splice(Index,0,color3);
document.write("<br>Updated Array : " +colorName);
var Index1 =  prompt("From whixh index you want to delete elments from the array ",1);
var Numbers = prompt("How many elements you want to delete" );
colorName.splice(Index1,Numbers);
document.write("<br>Updated Array : " +colorName);


//Task 10
var arr = [320,230,480,120]
var arr2 = arr.sort();
document.write("<br>Scores of student: " +arr);
document.write("<br>Sorted scores of student: " +arr2);

//Task 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawer"];
var selectedCities = cities.push(cities[0],cities[3],cities[4]);
document.write("<br> Cities list : " +cities +"<br><br> Selected Cities: " +selectedCities);
 //Task 12
 var Arr = ["This", "is", "my", "Cat"];
 var stringFromArray = Arr.join();
 document.write("<br> Array: " +Arr +"<br><br> String " +stringFromArray);

 //Task 13
 var Devices = ["Keybord", "Mouse", "Printer", "Monitor"];
 document.write("<br> Devices: " +Devices);
 for (var l = 0; l<Devices.length; l++){
     document.write("<br> Out: "+Devices[l]);
 }

 //Task 14

 var Devices = ["Keybord", "Mouse", "Printer", "Monitor"];
 document.write("<br> Devices: " +Devices);
 for (var i = Devices.length-1; i>=0; i++){
     document.write("<br> Out: "+Devices[i]);
 }

 //Task 15

 var PhoneManufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
 document.write("<br>Select one Phone Manufacturer from the background");
 document.write("<select>");
 for (var i =0; i <PhoneManufacturer.length; i++){
 document.write("<option>" +PhoneManufacturer[i]+ "</option>" );
}
document.write("</select>");

//Chapter 17-20

//Task 1
var multiArray = [[]];

//Task 2
multiArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// Task 3
for(var i = 1; i<=10; i++){
    document.write("<br>"+i);
}

//Task 4

var  TableToPrint = +prompt("Enter a number to show its multiplication table");
var TableLength = +prompt("Enter length of multiplication table");
document.write("<br> Multiplication of " +TableToPrint+ "<br> Length of table " +TableLength);
for(var i = 1; i<=TableLength; i++){
    document.write(TableToPrint + " * " +i+ " = " +(TableToPrint*i)+"<br>");
}

//Task 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i = 0; i<fruits.length; i++){
    document.write("<br>"+fruits[i]);
} 
for(var i = 0; i<fruits.length; i++){
    document.write("<br> Element at index " +i+ " is " +fruits[i]);
} 

//Task 6
document.write("<br> Counting: <br><br>");
for(var i =1; i<=15; i++){
    document.write(i+ ",");
}

document.write("<br> Reverse Counting: <br><br>");
for(var i =10; i>=1; i++){
    document.write(i+ ",");
}

document.write("<br> Even: <br><br>");
for(var i =0; i<=20; i=i+2){
    document.write(i+ ",");
}

document.write("<br> Odd: <br><br>");
for(var i =1; i<=20; i=i+2){
    document.write(i+ ",");
}

document.write("<br> Series: <br><br>");
for(var i =2; i<=20; i=i+2){
    document.write(i+ "K,");
}
 //Task 7
 var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
 var itemToSearch = prompt("Wellcome to Saylani Bakery. What do you want to order sir/ma'am");
 itemToSearch = itemToSearch.toLowerCase();
 for (var i = 0; i<bakery.length ; i++){
    if(itemToSearch === bakery[i]){
        break;
    }
 }
 if(i===bakery.length){
     document.write("<br> We are sorry! "+itemToSearch+ " is not available in our bakery.");
 }
 else{
    document.write("<br>" + itemToSearch+ "is present at index " +i);
 }

 //Task 8
 var X = [24,53,78,91,12];
 var max = X[0];
 document.write("<br> Array Elements: "+X + "<br> The largest number is ");
 for(var i =0; i<X.length; i++){
    if(X[i]>max){
        max = X[i];
    }
 }
 document.write(max);

//Task 9
var Y = [24,53,78,91,12];
var min = Y[0];
document.write("<br> Array Elements: "+ Y + "<br> The Smallest number is ");
for(var i =0; i<Y.length; i++){
   if(Y[i]<min){
       min = Y[i];
   }
}
document.write(min +"<br>");

//Task 10

for (var i =1; i<100; i++){
    if(i%5 === 0){
        document.write(i);
    }
}

//Chapter 21-25

// task1
var f_name=prompt("Enter Your First name");
var l_name=prompt("Enter Your Last name");
var full_name= f_name+l_name;
alert("Welcome "+ full_name);

//task 2
var m_model=prompt("Enter your favorite mobile model ");
alert("My favorite mobile is "+m_model + "\nLength of String: "+m_model.length);

//task 3
var country="pakistan";
alert("String: "+country);
alert("Index of n "+country.indexOf("n"));

//task 4
var str="Hello World";
document.write("String: "+str+"<br>Last Index of l"+str.lastIndexOf("l"));

//task 5
document.write("String: " +country+"<br>Character at Index 3: "+country[3]);

//task 6
document.write("Welcome "+f_name+" "+l_name);

//task 7
var city="Hyderabad";
document.write("City: "+city+"<br>After Replacement: " +city.replace("Islamabad"));

//task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
message=message.replace(/and/g,"&");
document.write(message);

//task 9
var Value="472";
document.write("Value "+Value+"<br>Type :"+typeof(Value)+"<br>Value "+Value+"<br>Type: "+typeof(value=Number(Value)))

//task 10
var dish=prompt("Enter Your favorite dish");
alert("User input: " +dish+ "\nUpper Case : "+ dish.toUpperCase());

//task 11
var f_char=dish.slice(0,1);
var l_char=dish.slice(1);
var dish1=f_char.toUpperCase()+l_char.toLowerCase();
alert("User input: "+dish+"\nTitle case: "+dish1);

//task 12
var num=35.36;
num=num.toString();
s=num.replace(".","");
document.write(s);

//task 13
var ur_name=prompt("Enter Your name");
for(var i=0;i<ur_name.length;i++){
    if(ur_name[i]==='@' ||ur_name[i]=='.' ||ur_name[i]==','||ur_name[i]=='!'){
        alert("Please enter a valid username");
    }
}

//task 14
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var order=prompt("Welcome to abc Company, what you want to order??");
order=order.toLowerCase();
for(var i=0;i<bakery.length;i++){
    if(bakery.indexOf(order)!=-1){
        alert(order+" is available at index "+bakery.indexOf(order)+" in our bakery!");
        break;
    }
    else{
        alert("We are sorry, "+order+" is not present in our bakery");
    }
}

//task 15
var password = prompt("Enter password");
var count = 0;
var count2 = 0;
var check = 0;
document.write("<br>Entered Password: "+password);
for(var i = 0; i<password.length; i++){
    if((password[i]>='A'&&password[i]<='Z')||(password[i]>='a'&&password[i]<='z')){
        count++;
    }
    if(password[i]>='0'&&password[i]<='9'){
        count2++;
    }
}
if(password.length<6){
    document.write("<br> Length of password cannot be less than 6");
    check++;
}
if((password[0]>='0'&&password[0]<='9')){
    document.write("<br> Password cannot begin with a number");
    check++;
}
if(count===0){
    document.write("<br> Password must contain alphabet");
    check++;
}
if(count2===0){
    document.write("<br> Password must contain number");
    check++;
}
if(check!=0){
    document.write("<br> Please Enter a valid Password")
}

//task 16
var university = "University of Karachi";
var uni=university.split('');
for(var i=0;i<uni.length;i++){
document.write(uni[i]+"<br>");
}

// task 17
var c=prompt("Enter your country name");
var l=c.length;
document.write(c.charAt(l-1));

//task 18
var count=0;
var f_d="The quick brown fox jumps over the lazy dog";
for(i=0;i<f_d.length;i++){
  if(f_d.slice(i,i+3)==="the" ||f_d.slice(i,i+3)==="The"){
      count++;
  }}
  alert(count);


//chapter 26-30

//task 1
var number=prompt("Enter a positive number");
document.write(number+"<br>"+Math.round(number)+"<br>"+Math.floor(number)+"<br>"+Math.ceil(number));

//task 2
var neg_number=prompt("Enter a negative number");
document.write("<br>"+neg_number+"<br>"+Math.round(neg_number)+"<br>"+Math.floor(neg_number)+"<br>"+Math.ceil(neg_number));

//task 3
var absolute=prompt("Enter a number");
if(absolute>0){
    document.write("-"+absolute);
}
else if(absolute<0){
    document.write(-1*absolute);
}
else{
    document.write(absolute);
}

//task 4
var random=Math.random();
document.write("<br>Random dice value"+Math.round(random*6+1));

//task 5
var toss=Math.random()*2;
var result=Math.ceil(toss);

if(result===2){
    document.write(result);
    document.write("<br>Random coin value heads");
}
else if(result===1){
        document.write(result);
        document.write("<br>Random coin value tails");
    }

//task 6
var ran=Math.random()*100+1;
ran=Math.floor(ran);
document.write("Random Number between 1 to 100: "+ran)

//task 7
var weight=prompt("Enter your weigth");
document.write(parseFloat(weight+" kilograms"));

//task 8
var secret_number= 5;
var secret=+prompt("Enter a number from 1 to 10");
    if(secret_number===secret){
        alert("Congratulation Your answer is correct");
    }
    else{
        alert("Try Next tym");
    }


//chapter 31-34

//task 1
var date=new Date();
document.write(date);

//task 2
var months=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
var m=new Date();
alert("Current month is "+months[m.getMonth()]);

//task 3
var months=["sat","sun","mon","tue","wed","thu","fri"];
var d=new Date();
var day=months[d.getDay()]
alert("Today is "+day);

//task 4
if(day==="sun" ||day==="sat"){
    alert("It's Fun day");
}

//task 5
var f_l=new Date();
var date=f_l.getDate();
if(date<=15){
    alert("First fifteen days of the month");
}
else{
    alert("Last days of the month");
}

//task 6
var d=new Date;
document.write("<br>Current date: "+d);
var mili=d.getTime();
document.write("<br>Milli seconds: "+mili);
var min=("<br>Minutes: "+mili/(1000*60*60));
document.write(min);

//task 7
 var hours=new Date().getHours();
 if(hours<=12){
     alert("its am");
 }
 else {
     alert("its pm");
 }


//task 8
var currentmonth=new Date().getMonth();
var later_date =new Date();
later_date.setMonth(currentmonth-1,later_date.getDate())
document.write(later_date);



//task 9
function ramzan(){
    var ram=new Date("june 18, 2015");
    var rammili=ram.getTime();
    var today=new Date();
    var todaymili=today.getTime();
    var diff=todaymili-rammili;
    var days=Math.floor((diff/(1000*60*60*24)));
    document.write(days+" days has passed since 2015<br>");
   }
   ramzan();


//task 10
var ref=new Date("dec 5, 2015");
var beg=new Date("jan 1, 2015");
var refmili=ref.getTime();
var begmili=beg.getTime();
var sec=refmili-begmili;
document.write(sec/(1000*60));

//task 11
var date=new Date();
document.write(date);
var currenthour=new Date().getHours();
date.setHours(currenthour-1);
document.write("<br>1 hour ago its was "+date+"<br>");

//task 12
var date=new Date();
var currentyear=new Date().getFullYear();
date.setFullYear(currentyear-100);
alert("<br>100 years ago its was "+date);

//task 13
var age=prompt("Enter your age:");
var currentyear=new Date().getFullYear();
var birthyear=currentyear-age;
document.write(birthyear);

//task 14
var customer_name="ABC";
var month=new Date().getMonth();
var no_of_units=410;
var charges=16;
var net_payable=no_of_units*charges;
var net_charges=350;
var after_due=net_payable+net_charges;

document.write("<br>Customer: "+customer_name+"<br>Month: "+month+"<br>No: of units: "+no_of_units+"<br>Charges: "+charges+"<br><br>Net Payable Amount(within due date): "+net_payable+"<br>Net Payable Charges: "+net_charges+"<br>Gross Amount Payable(after due): "+after_due)

//chapter 35-38

//task 1
function date(){
    var d=new Date();
    document.write(d);
}
date();

//task 2
function greeting() {
    var f_name = prompt("Enter first name");
    var l_name = prompt("Enter last name");
    alert(" welcome " + f_name + " " + l_name)
}
greeting();

//task 3
function add() {
    a = +prompt("enter 1st number");
    b = +prompt("enter 2nd number");
    alert(a + b);
}
add();

//task 4
function cal(a, b, c) {
    if (c === '+') {
            return a+b;
        }
        else if (c === '-') {
            return a-b;
        }
        else if (c === '*') {
            return a*b;
        }
        else if (c === '/') {
            return a/b;
        }
        else if (c === '%') {
            return a%b;
        }
}
document.write(cal(1,2,"+"));

//task 5
function square(a){
    return a*a;
}
document.write("<br>"+square(5));

//task 6
var answer=1;
function fac(n){
    for(var i=n;i>=1;i--){
          answer=answer*(i);   
             }
     return answer;
 }
 document.write(fac(5)+"<br>");

 //task 7
 function num(){
     var s=prompt("Enter starting number");
     var l=prompt("Enter last number");
     for(var i=s;i<=l;i++){
         document.write("<br>"+i);
     } }
num();

//task 8
function calculateHypotenuse(){
    hypotenuse=Math.sqrt(calculateSquare(1,1));
    return (hypotenuse.toFixed(3));
        function calculateSquare(perp,base){
        var perpsq=perp*perp;
        var basesq=base*base;
        return (perpsq+basesq);
    }
}
document.write(calculateHypotenuse());

//task 9
function area(width,height){
    area=width*height
    return area;
}
document.write("<br>"+area(4,6));

var width=5;
var height=5;
function area1(width,height){
    area1=width*height;
    return area1;
}
document.write("<br>"+area1(width,height));

//task 10

function palindrome(){
    var a = prompt("enter a word");
    var word = "";
    for (var i = a.length - 1; i >= 0; i--){
        word += a[i];
    }
    if (a === word) {
        document.write(word + " is a palimdrome");
    }
    else {
        document.write(a + " is not a palimdrome");
    }}
palindrome();

//task 11

function Uppercase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }

 document.write(Uppercase("the quick brown fox"));

 //task 12
 function l_Word(string) {
    var str = string.split(" ");
    var long = 0;
    var word = null;
    for (var i = 0; i < str.length ; i++) {
        if (long < str[i].length) {
            long = str[i].length;
            word = str[i];
        }
    }
    return word;
}
document.write(l_Word("Web Development Tutorial"));


 //task 13
 var str=prompt("Enter a string");
 var l=prompt("Enter a letter");
 count=0;
 function find(str,l){
    for(var i=0;i<str.length;i++){
        if(str.charAt(i)===l){
            count++;
        }
    }
    return count;
 }
 document.write(find(str,l));

 //task 14
 function calcCircumference(radius){
     return (2*3.142*radius);
 }
 function calcArea(radius){
    return (3.142*radius*radius);
 }
 document.write("<br>The circumference is "+calcCircumference(4));
 document.write("<br>The area is "+calcArea(4));


//chp 38-42
//task 1
function power(a,b){
    document.write(" <br>"+a+" raised to the power "+b+ " is "+(Math.pow(a,b)))
}
power(2,3);
// task 2
function leap_year(year){
    if(year %4 === 0 || year % 100 !==0 && year % 400===0 ){
       alert("It is a leap year");
    }
    else{
        alert("Not a leap year");
    }
    }
var year =+prompt("Enter any year");
leap_year(year);

// task  # 03  
function S(a,b,c){
    return (a+b+c)/2;
}
function area(a,b,c){
    var S = S(a,b,c);
    return S*(S-a)(S-b)(S-c);
}
document.write("<br> Area of triangle whose sides are 6,10,3 cm length are "+area(6,10,3)+" cm sq.");

//task 4
 function percentage(d,e,f){
    return ((d+e+f)/300)*100;
 }
 function average(d,e,f){
    return (d+e+f)/3
 }
 function mainFunction(d,e,f){
    document.write("<br> Marks in 1st subject =" +d+" <br> Marks in second subject = "+e+ " <br> Marks in third subject = "+f+" <br> Total marks = "+(m1+m2+m3)+"<br> Average Marks = "+average(m1,m2,m3)+" <br> Percetntage = "+percentage(m1,m2,m3)+"%");
 }
 mainFunction(85,90,79);

 //task 5  
 function customIndexOf(st,ch){
     // ch is character to be searched in string st
    var index;
    for (var i = 0;i<st.length;i++){
        if(st[i]==ch){
            index = i;
            break;
        }
        else{
            index = -1
        }
    }
    return index;
 }

 //task 6
 function removeVowels(sen){
     for(var i = 0; i<sen.length;i++){
        if(sen[i]==='A'||sen[i]==='E'||sen[i]==='e'||sen[i]=='a'||sen[i]==='I'||sen[i]==='i'||sen[i]==='O'||sen[i]==='o'||sen[i]==='U'||sen[i]==='u'){
            sen = sen.slice(0,i)+sen.slice(i+1)
        }
    }
    document.write("<br> "+sen);
}
removeVowels("Web development");
// task 7
function countSuccessiveVowels(sen){
    var st = "",count =0;
    for(var i = 0;i<sen.length;i++){
        (sen[i]+sen[i+1]).toLowerCase();
        switch(sen[i]+sen[i+1]){
            case 'ae':
            case 'ai':
            case 'ao':
            case 'au':
            case 'aa':
               
            case 'ea':
            case 'ei':
            case 'eo':
            case 'ee':
            case 'eu':
            
            case 'ia':
            case 'ie':
            case 'io':
            case 'iu':
            case 'ii':
            case 'oa':
            case 'oe':
            case 'oi':
            case 'ou':
            case 'oo':
            
            case 'ua':
            case 'ui':
            case 'uo':
            case 'uu':
            case 'ue':
            st = st+sen[i]+sen[i+1]+",";    
            count++;
            break;
            default:
                continue;
        }
    }
    document.write( "<br> Successive vowels in sentence" +sen+"are "+st+"Total"+count);
}
countSuccessiveVowels(" Keep your goals away from the trolls ");

// task 8
var distance = +prompt("Enter distance in km");
function feet(dis){
    document.write("<br>"+"Distance in feets is " +(dis*1000*3.2)+"ft");
}
function meter(dis){
    document.write("<br>"+"Distance in metres is " +(dis*1000)+"metres");
}
function cm(dis){
    document.write("<br>"+"Distance in centimeters is " +(dis*1000*100)+" cm");
}
function inch(dis){
    document.write("<br>"+"Distance in inches is " +(dis*1000*39.37)+" inch");
}
feet(distance);
meter(distance);
cm(distance);
inch(distance);

//task 9.
var workhours = +prompt("Enter how many hours employ have worked");
var overtime = (workhours)-40;
var overtimepay = overtime*12;
if(overtime<=0){
    document.write("<br> No overtime");
}
else{
    document.write("<br> Overtime pay is "+overtimepay+" RS");
}

//task 10
var cash = +prompt("Enter amount to be withdrawn");
var h=0,f=0,t=0;
if(cash<10){
    alert("Amount is less than 10");
}
else{
    for(var i =0; cash>=10;i++){
        if(cash>=100){
            h++;
            cash = cash-100;
        }
        else if(cash>=50){
            f++;
            cash = cash-50;
        }
        else if(cash>=10){
            t++;
            cash = cash-10;
        }
    }
}
document.write("<br>Cashier will give "+h+" Hundred notes "+f+" fifty Rs notes and "+t+" ten Rs notes");

//chapter 43-48
//task 1
function box(){
    alert("Hello");
}
//task 2
function mobile(){
    alert("Thanks for purchasing mobile");
}
//task 3
function student_delete(r){
    var i = r.parentNode.parentNode.rowIndex; 
    document.getElementById("table").deleteRow(i);
}
// task 5
var click=0;
 function click_increase(){
     click++;
     document.getElementById('click').innerHTML=click;
 }
 function click_decrease(){
    click-=1;
    document.getElementById('click').innerHTML=click;
}

//chapter 49-52
//task 1
function submission(){
    var email=document.getElementById('email').value;
    var pass=document.getElementById('pass').value;
    document.write("Email: "+email);
    document.write("<br>Password: "+pass);
}
//task 2
function readMore(){
var text='<ul><li>Clothes</li><li>Shoes</li><li>TV</li><li>Refrigerator</li></ul>';
var item=document.getElementById('item');
item.innerHTML=text;
}
//task 3 
function add() {
    var table = document.getElementById("data");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = document.getElementById("index").value;
    cell2.innerHTML = document.getElementById("name").value;
    cell3.innerHTML = document.getElementById("level").value;
    cell4.innerHTML = "<button id='edit' type='button' onclick='edit(this)'>Edit</button>";
    cell5.innerHTML = "<button id='del' type='button' onclick='del(this)'>Delete</button>";
}
function del(cell){
    var row = cell.parentNode.parentNode;
    row.parentNode.removeChild(row);

}
function edit(cell){
    var row = cell.parentNode.parentNode;
    document.getElementById("index").value = row.cells[0].innerHTML;
    document.getElementById("name").value = row.cells[1].innerHTML;
    document.getElementById("level").value = row.cells[2].innerHTML;
}

//chp 52-57
//task 1
var i = document.getElementById("i");
var p = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.png", "img/5.jpg", "img/6.jpg", "img/7.png", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.png", "img/15.jpg"];
for (var i = 0; i < p.length; i++) {
    images.innerHTML += "<img class = 'format' src=" + p[i] + " alt='imageError' onclick='getModel(this)'>";
}
function getModel(p) {
    var modal = document.getElementById('modal');
    modal.classList.add('modal-open');
    modal.classList.remove('modal-close');
    modal.style.display= "block";
    document.getElementById("modal-img").src = p.src;
}
function onClosedImagModal(){
    var modal = document.getElementById('modal');
    modal.classList.remove('modal-open');
    modal.classList.add('modal-close');
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
}
// task 2
p.style.fontSize = "10px";
function zin(){
    var p = document.getElementById("p");
    p.style.fontSize = (parseFloat(p.style.fontSize)+10)+"px";
}

function zout(){
    var p = document.getElementById("p");
    p.style.fontSize = (parseFloat(p.style.fontSize)-10)+"px";
}
//chp 58-67
// task 1 
//i Get element of id “main-content” and assign them in a variable.
main = document.getElementById('main-content');
//ii Display all child elements of “main-content” element
var nod = document.getElementById('main-content').childNodes;
console.log(nod);
// iii  Get all elements of class “render” and show their innerHTML in browser. 
var rend = document.getElementsByClassName('render');
for(var i =0; i<rend.length;i++){
    document.write(rend[i].innerHTML);
}
//iv Fill input value whose element id first-name using javascript. 
document.getElementById('first-name').value = "Abc"
//v  Repeat part iv for id ”last-name” and “email”.
document.getElementById('last-name').value = 'xyz';
document.getElementById('email').value = 'hello@gmail.com';

//task 2
// i. What is node type of  element having id “form-content”.
document.write(document.getElementById('form-content').nodeType);
//ii Show node type of element having id “lastName” and its child node.
document.write(document.getElementById('last-name').nodeType);
var cNodes = document.getElementById('last-name').childNodes;
for(var i =0; i<cNodes.length;i++){
    document.write(cNodes[i].nodeType);
}
//iii Update child node of element having id “lastName”
var cn = document.getElementById('last-name');
cn.childNodes= 'p'
//iv Get First and last child of id “main-content”.
document.write(document.getElementById('main-content').firstChild);
document.write(document.getElementById('main-content').lastChild);
//v Get next and previous siblings of id “lastName”. 
document.write(document.getElementById('last-name').nextSibling);
document.write(document.getElementById('last-name').previousSibling);
//vi Get parent node and node type of element having id “email”
document.write(document.getElementById('email').parentNode);
document.write(document.getElementById('email').nodeType);



