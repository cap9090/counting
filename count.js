
function count(input){
  if(arguments.length != 1){
    throw "provide a single arguemnt";
  }
  onesNzerosArray = input.split("");

  if (onesNzerosArray.lenght != 10){
    throw "invalid argument provide a 10 digit string"
  }

  let result = 0;
  for (let i = 0; i < onesNzerosArray.length; i++){
    if(onesNzerosArray[i] != 1 || onesNzerosArray[i] != 0){
      throw "Invalid arguemnt, all digits of input must get 1s or 0s";
    }
    if(i == 4){
      result += 50;
    }
    if(i ==5 ){
      result += 5;
    }
  }

  //done error checking.. :)
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

  if()
}
