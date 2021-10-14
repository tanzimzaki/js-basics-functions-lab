console.log("Scuber - The transportation company");

function distanceFromHqInBlocks (location) {
  return Math.abs(48-location); 
}

function distanceFromHqInFeet (location) {      
  return distanceFromHqInBlocks(location)*264;  
}

function distanceTravelledInFeet (start, stop) {
  return Math.abs(start-stop)*264;
}

function calculatesFarePrice (start, stop) {
  let travelled = distanceTravelledInFeet(start, stop)
  
    if (travelled<400) {
    
      return 0;
      
  } else if (travelled>400 && travelled<=2000) {
      
      return (travelled-400)*0.02;
  
  } 
  else if (travelled>2000 && travelled<=2500) {
  
      return 40; 
  
  } 
  else {
  
      return "Cannot travel that far";
    
  }
}

console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInFeet(50));
console.log("$" + calculatesFarePrice(60, 62));















