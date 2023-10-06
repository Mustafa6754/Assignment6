var date = currentDate.toLocaleDateString();
var time = currentDate.toLocaleTimeString();

var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;

function square(number) {
    return number * number;
  }
  
  const result = square(5);
  console.log(result);

  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  function calculateHypotenuse(base, perpendicular) {
    function square(number) {
      return number * number;
    }
  

    const baseSquared = square(base);
    const perpendicularSquared = square(perpendicularSquared )
    const hypotenuse = Math.sqrt(baseSquared + perpendicularSquared);
  
    return hypotenuse;
  }
  
  // Example usage:
  const base = 3;
  const perpendicular = 4;
  const hypotenuse = calculateHypotenuse(base, perpendicular);
  console.log(`The hypotenuse of the right triangle is: ${hypotenuse}`);
  
  
