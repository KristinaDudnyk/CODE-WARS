function aliasGen(fname, lname){
  console.log(fname)
  console.log(lname)
  console.log(/^[A-Za-z]+$/.test(fname))
    if(!/^[A-Za-z]+$/.test(fname[0]) || !/^[A-Za-z]+$/.test(lname[0])){
      return "Your name must start with a letter from A - Z."
    }
  else if(/^[0-9]+$/.test(fname) || /^[0-9]+$/.test(lname)){
      return "Your name must start with a letter from A - Z."
    }
  
 else if(fname[0].toLowerCase() || lname[0].toLowerCase()){
    return firstName[fname.charAt(0).toUpperCase()]+" " + surname[lname.charAt(0).toUpperCase()] 
  }

}
// console.log(aliasGen(rfrrv, egfv))