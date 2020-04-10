export default function isMultipleOfSix(number){
  if(number % 6 === 0 && number !== 1){
    return true;
  }else{
    return false;
  }
}