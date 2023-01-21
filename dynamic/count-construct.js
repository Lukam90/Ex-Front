// O(n^m * m) -> O(n * m²) time
// O(m²) space

const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '')  return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);

            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount;

    return totalCount;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 2
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 1
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 0
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])); // 4