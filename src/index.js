module.exports = function check(str, bracketsConfig) {
	let stack = [];
    for (i = 0; i <= str.length - 1; i++){
        for (j = 0; j <= bracketsConfig.length - 1; j++){
           if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1]){
                if (stack[stack.length -1] === str[i]){
                    stack.pop(str[i])
                } else stack.push(str[i])
            } else if ((str[i] === bracketsConfig[j][0])){
                stack.push(str[i])
            } else if (str[i] === bracketsConfig[j][1]){
                if (stack[stack.length -1] === bracketsConfig[j][0]){
                    stack.pop(str[i])
                } else return false
            } 
        }
    }
    return stack.length === 0
}
