function nice(name){
    console.log("Hey " + name + " yor are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " you are beautiful!")
    console.log("Hey " + name + " you are skirt is nice!")
}


function sum(a,b, c =3){
    // console.log(a +b)
    console.log(a,b,c)
    return a + b +c
}

result1=sum(3,6)
result2=sum(7,5)
result3=sum(3,13,2)

console.log("The sum of these numbers is: " ,result1)
console.log("The sum of these numbers is: " ,result2)
console.log("The sum of these numbers is: " ,result3)

const func1 =(x)=>{
    console.log("I an an arrow function",x);
}
const func2 =(x)=>{
    console.log("I an an arrow function",x);
}
const func3 =(x)=>{
    console.log("I an an arrow function",x);
}

func1(34);
func2(45);
func3(65);

