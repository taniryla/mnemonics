// Remember the acronym UPS check

// Step One (Understand). We have to understand the problem.
// 1. What is the unknown?
// reurns all mnemonics for this phone number
// in any order

// 2. What are the data inputs?
// a stringified phone number

// 3. Can you restate the problem in your own words?
// provide all combinations for every non-0 or non-1 number

// 4. Can the unknown be determined from the data inputs?
// yes

// 5. Is the data inputs sufficient to determine the unknown? Insufficient? Redundant? Contradictory?
// sufficient

// 6. How should I label important pieces of data input that are a part of the problem?
// phoneNumber

// 7. Draw a figure. Introduce suitable notation.

// Step Two (Plan). Come up with concrete examples to help you understand the problem better. Find a connection between the data inputs and the unknown. You may be obliged to consider auxiliary problems if an immediate connection cannot be found.
// 8.  Have you seen it before? Or have you seen the same problem in a slightly different form? Do you know a related problem?
// combinations

// 9.   Do you know a coding strategy that could be useful? Look at the unknown! And try to think of a familiar problem having the same or a similar unknown. Here is a problem related to yours and solve before. Could you use it? Could you use its result? Could you use its method?
// recursion helper function

// 10. Start with a simple example. Could you restate the problem? Could you restate it still differently?

// 11. What about examples with empty inputs? Any other edge case examples? What examples with invalid inputs?

// 12. Progress to more complex examples. What is your updated plan here to find a solution?
// 13. If you still cannot solve the proposed problem, try to solve first some related problem. Could you imagine a more accessible related problem? A more general problem? A more special problem? An analogous problem? Could you solve a part of the problem? Keep only a part of the data inputs, drop the other part; how far is the unknown then determined, how can it vary? Could you derive something useful from the data? Could you think of other data appropriate to determine the unknown? Could you change the unknown or the data, or both if necessary, so that the new unknown and the new data are nearer to each other? Did you use all the data? Did you use the whole of the data inputs? Have you taken into account all essential notions involved in the problem?

// Step Three (Solve). Carry out your plan of the solution and check each one of your steps in pseudocode.
// 14.  Can you see clearly that the step is correct?

// seen pseudocdoe below

// IV. 	Step Four (Check). Examine the solution obtained and refactor.
// 15.  Can you check your result?
// 16.  Can you check the argument?
// 17.  Can you derive the result differently?
// 18.  Can you see it at a glance?
// 19.  Can you make the code DRYer and refactor?
// 20.  Can you improve the performance?
// 21.   How have other people solved this problem?

function phoneNumberMnemonics(phoneNumber) {
  let combs = [];
  let newArr = [];
  // create array for each number
  let two = ["a", "b", "c"];
  let three = ["d", "e", "f"];
  let four = ["g", "h", "i"];
  let five = ["j", "k", "l"];
  let six = ["m", "n", "l"];
  let seven = ["p", "q", "r", "s"];
  let eight = ["t", "u", "v"];
  let nine = ["w", "x", "y", "z"];
  // split phone number into individual digits
  let digits = phoneNumber.toString().split("");
  for (let key in digits) {
    // convert non-0 or non-1 number into full text word
    if (digits[key] === 0) {
      newArr.push(1);
    } else if (phoneNumber[key] === 0) {
      newArr.push(0);
    } else if (phoneNumber[key] === 2) {
      newArr.push(helper(two, newArr, combs));
    } else if (phoneNumber[key] === 3) {
      newArr.push(helper(three, newArr, combs));
    } else if (phoneNumber[key] === 4) {
      newArr.push(helper(four, newArr, combs));
    } else if (phoneNumber[key] === 5) {
      newArr.push(helper(five, newArr, combs));
    } else if (phoneNumber[key] === 6) {
      newArr.push(helper(six, newArr, combs));
    } else if (phoneNumber[key] === 7) {
      newArr.push(helper(seven, newArr, combs));
    } else if (phoneNumber[key] === 8) {
      newArr.push(helper(eight, newArr, combs));
    } else if (phoneNumber[key] === 9) {
      newArr.push(helper(nine, newArr, combs));
    }

    function helper(array, set, combs) {
      // base case from recursion stack
      if (set.length === 0) {
        newArr = [];
        return;
      }
      // iterate through each element in the "eight" variable
      for (let x of combs) {
        for (let idx of array) {
          // iterate through each array and set.push(newArr[idx])
          set.push(array[idx]);
        }
        // combs.push(set) push the array into the combs array
        combs.push(set[x]);
      }
    }
  }
  return combs;
}
