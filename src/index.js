module.exports = function check(str, bracketsConfig) {
  // your solution
  
    const closeBrackets = bracketsConfig.map((x) => x[1]);
    const bracketsPair = new Map(bracketsConfig.map((x) => x.reverse()));
    let stack = [];
    
    // console.log(closeBrackets);
    // console.log(bracketsPair);
        
    for (let i = 0; i < str.length; i++) {
    		// console.log(i, stack , str[i]);
        if(stack.length === 0) {
            if(closeBrackets.includes(str[i]))
                if(bracketsPair.get(str[i]) === str[i])
                    stack.push(str[i]);
                else    
                    return false;
            else
                stack.push(str[i]);
        } else if (closeBrackets.includes(str[i])) {
        		// console.log(bracketsPair.get(str[i]),stack[stack.length-1]);
            if(bracketsPair.get(str[i]) === stack[stack.length-1])
                stack.pop();
            else
                if(bracketsPair.get(str[i]) === str[i])
                    stack.push(str[i]);
                else    
                    return false;           
        } else 
            stack.push(str[i]);
 			// console.log(stack);           
        
    }
    // console.log(stack.length === 0);
    return stack.length === 0;
}

