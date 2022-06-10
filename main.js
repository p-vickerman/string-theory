// console.log('\n**xify**\n');
// // `xify` - returns the same string, but with every character replaced by an 'x'
//  // * Examples:
//  // * xify('hello') -> 'xxxxx'
//  // xify('hi there') -> 'xxxxxxxx'

//      console.log(xify("hi there"));

//      function xify(str){
//          let strX = "";
//          for (let count = 0; count < str.length; count++){
//              strX += "x";
//          }
//          return strX;
         
//         }
// console.log("\n*********************************************")

// console.log('\n**yellingChars**\n');
//  //`yellingChars` - returns the given string with an exclamation point after each character
//  // Examples:
//  //     * yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
//  //     * yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
//  //   * Hints:
//  //     * We can add more than one thing to the string each time through the loop. In this case, it's the current character AND an exlamation point.
//     // console.log(yellingChars("goodness"))
//     //  console.log(yellingChars("oh hello"));

//     function yellingChars(str){
//          let strX = "";
//          for (let i of str){
//              strX += i
//              strX += "!"
//          }
//          console.log(strX);
//      }

//      let str1 = "googdness";
//      yellingChars(str1);

//      let str2 ="oh hello"
//      yellingChars(str2);

//      console.log("\n*********************************************")

// console.log('\n**indexedChars**\n');
//      // `indexedChars` - adds the index of each character before that character in the given string
//  //   * Examples:
//  //     * indexedChars('hello') -> '0h1e2l3l4o'
//  //     * indexedChars('bye') -> '0b1y2e'
//  //   * Hints: 
//  //     * We can add something BEFORE the current character as well!
//  function indexedChars(str) {
//      let answer = '';

//      for(let i = 0; i < str.length; i++) {
//          answer += i + str[i];
//      }
//      return answer;
//  }

//  console.log(indexedChars('HoustonTexas'));

//  console.log("\n*********************************************")

//  console.log('\n**exclaim**\n');
//  // * `exclaim` - returns the given sentence with every question mark or period changed to an exclamation point
//  //   * Examples:
//  //     * exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
//  //     * exclaim('This is fine.') -> 'This is fine!'

//  console.log(exclaim("What are you Doing? Are you a Fool? "));
//  console.log(exclaim("This is fine. "))

//  function exclaim(str){
//      let strX = " ";
//      for (let i = 0; i < str.length; i++){
//          if (str[i] === '?' || str[i] === '.') {
//              strX += '!';
//          } 
//          else strX += str[i];
//      } 
//      return strX;
//  }
//  console.log("\n*********************************************")

// console.log('\n**truncate**\n');
//  // * `truncate` - shortens a long string to 15 characters plus an ellipsis (...)
//  //   * Examples:
//  //     * truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
//  //     * truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."
//  function truncate(str) {
//      let newStr = " "
//      for (let count = 0; count < 15; count++) {
//          newStr = newStr + str[count]
//      }
//      return console.log(newStr + "...")
//  }    
//  truncate("The Fault, Dear Brutus, is not in our Stars, but in Ourselves.");
//  truncate("Well, That's Just, Like, Your Opinion Man.");

//  console.log("\n*********************************************")

//  console.log('\n**ciEmailify**\n');
//  // * `ciEmailify` - creates an email from a two-part name
//  //   * Examples:
//  //     * ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
//  //     * ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'
//  function ciEmailify(str){

//      let solution = " ";
//      let email = "@codeimmersives.com";
//      let period = ".";

//      for(let i = 0; i < str.length; i++){
//          if (str[i] === " "){
//          solution += period
//          }
//          else {
//              solution += str[i]
//          }
//      }
//      return solution + email;
//  }
//  console.log(ciEmailify("colin jaffe"));
//  console.log(ciEmailify("Anthony DeRosa"));

//  console.log("\n*********************************************")

//  console.log('\n**reverse**\n');
//  // * `reverse` - reverses the given string
//  //   * Examples:
//  //     * reverse('colin') -> 'niloc'
//  //     * reverse('mesuara') -> 'arausem'

//  function reverse(str) {
//      //Set variable for strA to empty string
//      let strA = "";
//      //Set count to start at the last character in the string, and count backwards logging each character in 'reverse' order.
//      for (let count = str.length-1; count >= 0; count--) {
//         strA = strA + str[count];
//      }
//      return console.log(strA);
//  }

//  reverse('colin');
//  reverse('mesuara');


//  console.log("\n*********************************************")

//  console.log('\n**onlyVowels**\n');
//  // * `onlyVowels` - returns only the vowels from a word
//  //   * Examples:
//  //     * onlyVowels('Colin Jaffe') -> 'oiae'
//  //     * onlyVowels('quickly') -> 'ui'
//  //     * onlyVowels('Anthony DeRosa') -> 'Aoeoa'

//  function onlyVowels(str) {

//      let newStr = " "

//      for (let count = 0; count < str.length; count++) {

//          if (str[count] === "a" || str[count] === "A" ||  str[count] === "e" || str[count] === "E" || str[count] === "i" || str[count] === "I" || str[count] === "o" || str[count] === "O" || str[count] === "u" || str[count] === "U") {
//              newStr = newStr + str[count];
//          }
//      }
//      return console.log(newStr);
//  }
//  onlyVowels('Colin Jaffe');
//  onlyVowels('quickly');
//  onlyVowels('Anthony DeRosa');