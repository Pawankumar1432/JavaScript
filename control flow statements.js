
//Control flow Statements
// 1)Conditional Control Statements
// 2)Looping Statements
// 3)Jumping Statemnts

// Conditional Statements
// 1)if
var a=2
var b=4
if (a<b)
{
    console.log("B is greater than A")
}

// 2)if-else
var c=15
var d=9
if (c>d)
{
    console.log("A is greater than B")
}
else
{
    console.log("B is grater than A")
}

// 3)Switch
var color="blue"
switch (color){
    case "pink":
        console.log("The color choosed is pink")
        break;
    case "black":
        console.log("The color choosed if black")
        break;
    case "blue":
        console.log("The choosed color is blue")
        break;
    default:
        console.log("Non of the color is matched")

}




//Looping Control Statements
//1)While
//2)do-while
//3)for
//a)for of
//b)for in 

//1)While
a=10
while (a!=0)
{
    console.log(a)
    a=a-1
}
//2)do-while
a=1
do
{
    console.log(a)
    a++
}
while (a<=10);
 
// //3)for
for (var a=1;a<=5;a++)
{
    console.log(a)
}
//3)a)for of
var a=[9,8,7,6]
for (var res of a)
{
    console.log(res)
}
//3)b)for in 
var b={
    name:"Pavan kuamr",
    age:22
}
for (var res1 in b)
{
    console.log(b[res1])
}
















