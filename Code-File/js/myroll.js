let myroll=02;
var linebreak="<br/>"
document.write("myroll++ = ")
document.write(myroll++)
document.write(linebreak)

document.write("myroll++ = ")
document.write(myroll++)
document.write(linebreak)

document.write("myroll++ = ")
document.write(myroll)
document.write(linebreak)

document.write("myroll++ = ")
document.write(myroll++)
document.write(linebreak)
myroll++

document.write("myroll = ")
document.write(myroll)
document.write(linebreak)

//----------------

document.write("myroll-- = ")
document.write(myroll--)
document.write(linebreak)

document.write("myroll-- = ")
document.write(myroll--)
document.write(linebreak)

document.write("myroll-- = ")
document.write(myroll)
document.write(linebreak)

document.write("myroll-- = ")
document.write(myroll--)
document.write(linebreak)
myroll--

document.write("myroll = ")
document.write(myroll)
document.write(linebreak)

//---------------------

document.write("++myroll = ")
document.write(++myroll)
document.write(linebreak)

document.write("myroll-- = ")
document.write(myroll--)
document.write(linebreak)

document.write("myroll-- = ")
document.write(myroll)
document.write(linebreak)

document.write("myroll-- = ")
document.write(myroll--)
document.write(linebreak)
myroll--

document.write("myroll = ")
document.write(myroll)
document.write(linebreak)

let age=18;
if(age>=18)
{
    document.write("Voter")
}
else
{
    document.write("Not a Voter")
}
document.write(linebreak)
let number=18
// find if the number is odd
if(number%2==1)
{
    document.write("\odd")
}
else
{
    document.write("even")
}

// 58 not a multiplier 

// 26 a multiplier

document.write(linebreak)
document.write(linebreak)
let find=126
// find if the number is odd
if(find % 13 ==0)
{
    document.write(find,"a multiplier")
}
else
{
    document.write(find,"not a multiplier")
}
//-----------
document.write(linebreak)
document.write(linebreak)
let ans=126
// find if the number is odd
if(ans % 13 ==0 || ans%2==0)
{
    document.write(ans,"a multiplier")
}
else
{
    document.write(ans,"not a multiplier")
}


//-----------
document.write(linebreak)
document.write(linebreak)

let sajidd=130
number2=sajidd
let digit1,digit2,digit3;
digit1=sajidd&10
document.write(digit1)
document.write("<br>")
sajidd=sajidd/10

digit2=sajidd%10
sajidd=sajidd/10

digit3=sajidd%10

// find if the number is odd
if(digit1**3+digit2**3+digit3**3==number2)
{
    document.write(sajidd,"Arsstring number")
}
else
{
    document.write(sajidd,"not a Arnsstring number")
}