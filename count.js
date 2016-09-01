
function count(input){
  if(arguments.length != 1){
    throw "provide a single arguemnt";
  }
  onesNzerosArray = input.split("");

  if (onesNzerosArray.length != 10){
    throw "invalid argument provide a 10 digit string"
  }

  let result = 0;
  for (let i = 0; i < onesNzerosArray.length; i++){
    if(onesNzerosArray[i] != 1 && onesNzerosArray[i] != 0){
      throw "Invalid arguemnt, all digits of input must get 1s or 0s";
    }
    if(i ==4 && onesNzerosArray[i] == 1){
      result += 50;
    }
    if(i ==5 && onesNzerosArray[i] == 1){
      result += 5;
    }
    if(i ==3 && onesNzerosArray[i] == 1){
      result += 10;
    }
    if(i ==6 && onesNzerosArray[i] == 1){
      result += 1;
    }
  }


  /*
  0 - left pinky
  1 - left ring
  2 - left middle
  3 - left index
  4 - left thumb
  5 - right thumb
  6 - right index
  7 - right middle
  8 - right ring
  9 - right pinky
  */


  for (let left = 2,  right = 7; right < 10; right ++, left --){
    if(onesNzerosArray[left] ==1 ){
      if(onesNzerosArray[left + 1 ] == 0 ){
        throw "invalid number";
      }
      else {
        result += 10;
      }
    }
    if(onesNzerosArray[right] ==1){
      if(onesNzerosArray[right - 1 ] ==0){
        throw "invalid number";
      }
      else {
        result += 1;
      }
    }

  }

  return result;

}

console.log(count("0000110000"));
