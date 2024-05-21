// var age =19;
var age = prompt("tor age koto");
var name;
if(age>=0 && age<=2)
{
    name = "Baby";
}
else if(age>=3 && age<=5)
{
    name = "Toddler";
}
else if(age>=6 && age<=12)
{
    name = "Child";
}
else if(age>=13 && age<=17)
{
    name = "Teen";
}
else if(age>=18 && age<=21)
{
    name = "Young";
}

else 
{
    name ="Old";
}
// console.log(name);
document.write(name);

// function 

function display()
{
    var number=document.getElementById("mark").value;
    var grade;
    if(number>=80 && number<=100)
    {
        grade = "You have got A+";
    }
    else if (number>=60 && number<=79)
    {
        grade = "You have got B";
    }
    else {
        grade = "You have failed";
    }
    alert(grade);
}


