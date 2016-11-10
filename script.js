function convertTemp(input,unit){
  if (unit==="C"){
    return (input-32)*(5/9);
  }else if(unit==="F"){
    return (input+32)*(9/5);
  }else{
    console.log("Specify a unit")
  }
}

var temp = convertTemp(212, "C");
var temp1 = convertTemp(32, "C");
var temp2 = convertTemp(65, "C");
var temp3 = convertTemp(-40, "F");
console.log(temp)
console.log(temp1)
console.log(temp2)
console.log(temp3)
