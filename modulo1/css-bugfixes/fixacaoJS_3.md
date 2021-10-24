´´´
function calculaNota(ex, p1, p2) {
  let mp = ((ex) + (p1 * 2) + (p2 * 3)) / 6
  console.log(mp)
  if(mp >= 9){
    return "A"
  }else if(mp < 9 && mp >= 7.5){
    return "B"
  }else if(mp < 7.5 && mp >= 6 ){
    return "C"
  }else{
    return "D"
  }
}

´´´