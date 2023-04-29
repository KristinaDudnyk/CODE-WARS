// Well of Ideas - Harder Version

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// The sub arrays may not be the same length.

// The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.

function well(arrs){
  // always on the longer tests look at the ARGUMENT they give
  // console.log(arrs);

  // it needs to deal with NUMBERS AND NUMBERS AS STRINGS eg. 6 and "6"

  // this is doing a REDUCE by taking EACH subArray 
  // subArray one => [ 6, 'DAB', 'CAPS', 16, 'RAD' ]
  // filter this down to how many goods there are... 
  // (so it will be an empty array [] because there are no "good")
  // then get its LENGTH (which returns a NUMBER) 
  // (which is 0 because there are no elements in the array)
  // ADD THAT NUMBER to the reduce total (the total starts at 0) so 0 + 0
  // current total is 0

  // do it again for all subArrays..

  // subArray two => [ 8, 'bad', 'bAd', 'CoNcenTraTe', 'GOOD', 3, 'bad' ]
  // filter it down to how many goods there are...
  // (so it will be an array with ["GOOD"] in it *THE FILTER DOES NOT TRANSFORM IT*)
  // then get its LENGTH (which returns a NUMBER)
  // (which is 1 because is 1 element in the array)
  // ADD THAT NUMBER to the reduce total (the total starts at 0) so 0 + 1
  // current total is 1

  // subArray three => [ 'TEST', '6', 'bAd', 'bAd', 'six' ]
  // filter this down to how many goods there are... 
  // (so it will be an empty array [] because there are no "good")
  // then get its LENGTH (which returns a NUMBER) 
  // (which is 0 because there are no elements in the array)
  // ADD THAT NUMBER to the reduce total (the total starts at 0) so 1 + 0
  // current total is 1

  // the reduce looks like this:

  // reduceLoop subArray.length total
  // 1            0             0
  // 2            1             1
  // 3            0             1
  // the reduce returns the total which is 1^

  // and finally reduce returns some number which is stored in count
  const totalGood = arrs.reduce((total, subArray) => total + subArray.filter((subelement) => subelement.toString().toLowerCase() === "good").length, 0);

  // this is basically like [].reduce((total, currentValue) => total + currentValue, 0);
  // but we need to make sure the currentValue is a number
  // and at the start the currentValue is an Array
  // so we filter that Array down to X number of "goods" 
  // and then get its LENGTH
  // and so in the end its a number
  // which we can then add to Total

  // this is a dumb fancy if else if else
  return totalGood > 2 ? 'I smell a series!' : totalGood > 0 ? 'Publish!' : 'Fail!';
} 

console.log(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]));
// 'Fail!' 0 Good
console.log(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]));
// 'Publish!' 2 Good
console.log(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]));
// 'I smell a series!' 3 Good
console.log(well([ [ 6, 'DAB', 'CAPS', 16, 'RAD' ], [ 8, 'bad', 'bAd', 'CoNcenTraTe', 'GOOD', 3, 'bad' ], [ 'TEST', '6', 'bAd', 'bAd', 'six' ]]));
// 'Publish!' 1 Good
function well(arrays) {
  let totalGoods = 0;
  
//   for (let i = 0; i < arrays.length; i++) {
//     // console.log("arrays[i]:", arrays[i]);
//     for (let j = 0; j < arrays[i].length; j++) {
//     // console.log("arrays[0][0]:", arrays[i][j]);
//       if (arrays[i][j].toString().toLowerCase() === "good") {
//         totalGoods += 1;
//       }
//     }
//   }

  for (const subArray of arrays) {
      for (const element of subArray) {
        if (element.toString().toLowerCase() === "good")  {
          totalGoods += 1;
        }
    }
  }
  
  if (totalGoods > 2) {
    return  'I smell a series!';
  } else if (totalGoods > 0) {
    return  'Publish!';
  } else {
    return  'Fail!';
  }
} 