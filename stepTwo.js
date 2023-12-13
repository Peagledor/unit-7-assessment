const addToZero = nums => {
    const seenNums = [];

    for(let i = 0; nums.length; i++) {
        const num = nums[i]

        if(seenNums.includes(-num)){
            return true;
        }
        seenNums.push(num);
    }
    return false
}


const hasUniqueChars = word => {
    const chars = []
    
    for(let i = 0; i < word.length; i++) {
        if(chars.includes(word[i])){
            return false
        }
        chars.push(word[i])
    }
    return true
}

const isPangram = str => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
    str = str.toLowerCase();

    if(alphabet.every(x => str.includes(x))) {
        return true 
    }
    return false
}

const findLongestWord = wordsArr => {
    let  longest = wordsArr[0].length;

    for(let i = 0; i < wordsArr.length; i++) {
        const current = wordsArr[i].length;

        if(current > longest){
            longest = current;
        }
    }
    return longest
}


console.log(addToZero([1, 2, 3, -2])); // I think this will take about 40 μs
console.log(hasUniqueChars('Moonday')); // I think this will take about 20 μs
console.log(isPangram('The quick brown fox jumps over the lazy dog!')); // I think this will take about 50 μs
console.log(findLongestWord(["hi", "hello", "it", "hello", "devmountain"])); // I think this will take about 70 μs
