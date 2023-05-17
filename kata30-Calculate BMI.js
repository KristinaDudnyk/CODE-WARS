function bmi(weight, height) {
  sum = weight / (height*height)
  
  if(sum <= 18.5){
    return  "Underweight"
    }
    else if(sum <= 25.0 ){
      return "Normal"
      }
    else if(sum <= 30.0){
      return  "Overweight";
    }
    else if(sum > 30){
     return "Obese";
  }
   
}