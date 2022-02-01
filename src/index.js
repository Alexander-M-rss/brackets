module.exports = function check(str, bracketsConfig) {
  // your solution
  
  const closeBrackets = bracketsConfig.map((x) => x[1]);
  const bracketsPair = {};
  let stack = [];
  
  for(let x of bracketsConfig)
      bracketsPair[x[1]] = x[0];

  // console.log(closeBrackets);
  // console.log(bracketsPair);
      
  for (let i = 0; i < str.length; i++) {
      // console.log(i, stack , str[i]);
      if(stack.length === 0) {
          if(closeBrackets.includes(str[i]))
              if(bracketsPair[str[i]] === str[i])
                  stack.push(str[i]);
              else    
                  return false;
          else
              stack.push(str[i]);
      } else if (closeBrackets.includes(str[i])) {
          // console.log(bracketsPair[str[i]],stack[stack.length-1]);
          if(bracketsPair[str[i]] === stack[stack.length-1])
              stack.pop();
          else
              if(bracketsPair[str[i]] === str[i])
                  stack.push(str[i]);
              else    
                  return false;           
      } else 
          stack.push(str[i]);
    //  console.log(stack);           
      
  }
  return stack.length === 0;
}

