// Place your FizzBuzz code here. 

function fizzBuzz(){
  for(i=1; i<21; i++){
    if(i%3===0 && i%5===0){  // Check if the number is divisible by 3 and 5
      console.log(i+" FizzBuzz");
      document.write(i+" FizzBuzz" + "<br>");
    }
    else if(i%3===0){  // Check if the number is divisible by 3
      console.log(i+" Fizz");
      document.write(i+" Fizz" + "<br>");
    }   
    else if(i%5===0){  // Check if the number is divisible by 5
      console.log(i+" Buzz");
      document.write(i+" Buzz" + "<br>");
    }
    else {
      console.log(i);
      document.write(i + "<br>");
    }
  }
}

fizzBuzz();