// Progression #1: Greatest of the two numbers
greatestOfTwoNumbers=(a,b) => {
  if(a>b)
  {
    return a;
  }
  else
  {
   return b;
  }

  
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
 findScaryWord=(words)=>
{
  let lengthy_word;
  let maxlength=0;
  if(words.length==0)
     return null;
  for(var i=0;i<words.length;i++)
  {
    if( words[i].length>maxlength)
    {
    maxlength =  words[i].length;
    lengthy_word=words[i];
  }
}
  return lengthy_word;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
netPrice = (numbers) => {
  var sum=0;
  for(var i=0;i<numbers.length;i++)
  {
  sum+=numbers[i];
  }
  return sum;
}
//Progression #3.1 (Bonus): A generic sum() function
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
add = (mixedArr) => {
  var sum = 0;
  if(mixedArr.length==0)
  {
    return 0;
  }
  else
  {
  for(var i=0;i<mixedArr.length;i++)
  {
    if(typeof(mixedArr[i])=="number")
    {
      sum +=mixedArr[i];
    }
    else if(typeof(mixedArr[i])=="string")
    {
      sum+=mixedArr[i].length;
    }
    else if(typeof(mixedArr[i])=="boolean")
    {
       sum+=mixedArr[i]/1;
    }
    else
    throw "unsupported data type";
}
}
return sum;
}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
midPointOfLevels=(numbersAvg)=>{
  var sum = 0;
  if(numbersAvg.length==0)
  {
    return null;
  }
  for(var i=0;i<numbersAvg.length;i++)
  {
     sum+=numbersAvg[i];
  }
  return sum/numbersAvg.length;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
averageWordLength=(wordsArr)=>{
  var sum = 0;
  if(wordsArr.length==0)
  {
    return null;
  }
  for(var i=0;i<wordsArr.length;i++)
  {
     sum+=wordsArr[i].length;
  }
  return sum/wordsArr.length;
}

//Progression #4.3 (Bonus): A generic avg() function
const arr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
avg= (arr) => {
  var sum = 0;
  if(arr.length==0)
  {
    return null;
  }
  else
  {
  for(var i=0;i<arr.length;i++)
  {
    if(typeof(arr[i])=="number")
    {
      sum +=arr[i];
    }
    else if(typeof(arr[i])=="string")
    {
      sum+=arr[i].length;
    }
    else if(typeof(arr[i])=="boolean")
    {
       sum+=arr[i]/1;
    }
    else
    throw "unsupported data type";
}
return sum/arr.length
}
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
 uniqueArray=(wordsUnique)=>{
  if(wordsUnique.length == 0){
    return null;
  }
  return wordsUnique.filter((value, index) => wordsUnique.indexOf(value) === index);
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
searchElement=(wordsFind,word)=>{
if(wordsFind.length==0)
return null;
for(i=0;i<wordsFind.length;i++)
if(wordsFind[i]===word)
return true;
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
howManyTimesElementRepeated =(wordsCount,word)=>{
  let count = 0;
  if(wordsCount.length==0)
  return 0;
  for(i=0;i<wordsCount.length;i++)
  {
  if(wordsCount[i]===word)
  count++;
  }
  return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
maximumProduct=(matrix)=>{
  var max=0;
  var result;
  for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
      if((j-3)>=0)
        result=matrix[i][j]*matrix[i][j-1]*matrix[i][j-2]*matrix[i][j-3];
        if(max<result)
        max=result;
      }
      if((i-3)>=0){
        result=matrix[i][j]*matrix[i-1][j]*matrix[i-2][j]*matrix[i-3][j];
        if(max<result)
        max=result;
      }
}
return max;
  }