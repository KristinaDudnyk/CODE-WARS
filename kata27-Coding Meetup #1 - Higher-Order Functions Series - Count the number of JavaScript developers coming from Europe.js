function countDevelopers(list) {
  let result = 0;
  for(let objOfList of list){
    if(objOfList.continent=== 'Europe' && objOfList.language === 'JavaScript')
      result += 1;
  }
 return result ;
}