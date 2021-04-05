//This approach is called the sliding window
//Complexity: O(n)

const tests = ['abcabcbb', 'akiecmcwick', 'bbbbb', 'pwwkew', 'eidjmmclspq[q[pdkm,cvkkdkjoqoahdsfajk;']

//Find the length of the longest substring of a string
function lengthOfLongestSubstringWithNonRepeatingCharacters(str) {
  let longestSubstringLength = 0;
  const currentIndexesOfLetter = {};
  let trailingIndex = 0;

  //iterate through each index in str
  for (let leadingIndex = 0; leadingIndex < str.length; leadingIndex++) {
    const char = str[leadingIndex];

    //if the current character is in the memo, the trailing index is set to the larger value between the trailing index and the value for the character in the memo
    if (currentIndexesOfLetter[char]) trailingIndex = Math.max(currentIndexesOfLetter[char], trailingIndex);
    
    currentIndexesOfLetter[char] = leadingIndex + 1;

    longestSubstringLength = Math.max(longestSubstringLength, leadingIndex - trailingIndex + 1);
  }

  return longestSubstringLength;
}

console.log('lengthOfLongestSubstring------------------------------------------------');
console.log(lengthOfLongestSubstringWithNonRepeatingCharacters(tests[0]))   //3
console.log(lengthOfLongestSubstringWithNonRepeatingCharacters(tests[1]))   //3
console.log(lengthOfLongestSubstringWithNonRepeatingCharacters(tests[2]))   //1
console.log(lengthOfLongestSubstringWithNonRepeatingCharacters(tests[3]))   //3
console.log(lengthOfLongestSubstringWithNonRepeatingCharacters(tests[4]))   //0


//Return the substring of a string with the longest length
function longestSubstringWithNonRepeatingCharacters(str) {
  let longestSubstringIndexes = {leadingIndex: 0, trailingIndex: 0};
  const currentIndexesOfLetter = {};
  let trailingIndex = 0;

  for (let leadingIndex = 0; leadingIndex < str.length; leadingIndex++) {
    const char = str[leadingIndex];

    //if the current character is in the memo, the trailing index is set to the larger value between the trailing index and the value for the character in the memo
    if (currentIndexesOfLetter[char]) {
      const currentSubStringLength = Math.abs(leadingIndex - trailingIndex);
      const longestSubstringLength = Math.abs(longestSubstringIndexes.leadingIndex - longestSubstringIndexes.trailingIndex);

      if (currentSubStringLength > longestSubstringLength ) {
        longestSubstringIndexes.leadingIndex = leadingIndex;
        longestSubstringIndexes.trailingIndex = trailingIndex;
      }

      trailingIndex = Math.max(currentIndexesOfLetter[char], trailingIndex);
    }
    
    currentIndexesOfLetter[char] = leadingIndex + 1;
  }
  return str.slice(longestSubstringIndexes.trailingIndex, longestSubstringIndexes.leadingIndex);
}

console.log('longestSubstringWithNonRepeatingCharacters------------------------------------------------');
console.log(longestSubstringWithNonRepeatingCharacters(tests[0]))   //3
console.log(longestSubstringWithNonRepeatingCharacters(tests[1]))   //8
console.log(longestSubstringWithNonRepeatingCharacters(tests[2]))   //1
console.log(longestSubstringWithNonRepeatingCharacters(tests[3]))   //3
console.log(longestSubstringWithNonRepeatingCharacters(tests[4]))   //0






