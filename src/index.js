module.exports = function check(str, bracketsConfig) {
  // your solution
    stackBrackets = [];
    sameBrackets = "";
    openBrackets = "";
    closeBrackets = "";
    for (i=0; i<bracketsConfig.length; i++) {
        openBracket = bracketsConfig[i][0];
        closeBracket = bracketsConfig[i][1]
        if (openBracket == closeBracket) {
            sameBrackets = sameBrackets + openBracket;
        } else {
            openBrackets = openBrackets + openBracket;
            closeBrackets = closeBrackets + closeBracket;
        }       
    }

    sameBracketsCountMap = new Map();
    for (i=0; i<str.length; i++) {
        ch = str[i];
        indexOpenBracket = openBrackets.indexOf(ch);
        indexCloseBracket = closeBrackets.indexOf(ch);
        indexSameBracket = sameBrackets.indexOf(ch);

        if (indexSameBracket != -1) {
            sameBracketValue = sameBracketsCountMap.get(ch);
            if ((sameBracketValue == undefined)||(sameBracketValue == 0)) {
                stackBrackets.push(ch);
                sameBracketsCountMap.set(ch, 1);
            } else if (sameBracketValue == 1) {
                sameBracketsCountMap.set(ch, 0);
                lastBracket = stackBrackets.pop();
                if (lastBracket != ch) {
                    return false;
                } 
            }
        }

        if (indexOpenBracket != -1) {
            stackBrackets.push(ch);
        } else if (indexCloseBracket != -1) {
            lastBracket = stackBrackets.pop();
            if (lastBracket != openBrackets[indexCloseBracket]) {
                return false;
            } 
        }
    }

    if (stackBrackets.length != 0) {
        return false;
    }

    return true;
}
