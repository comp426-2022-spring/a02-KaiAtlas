/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

export function coinFlip() {
  let flip = Math.random();
  let result = '';
  if (flip<0.5){
    result = 'heads'
  }
  else{
    result = 'tails'
  }
  return result;
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

export function coinFlips(flips) {
  const coins = [];
  for (let i = 0; i<flips; i++){
    coins[i] = coinFlip();
  }
  return coins;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  let Hnum = 0;
  let Tnum = 0;
  for (let i = 0; i<array.length; i++){
    if (array[i].localeCompare('heads') == 0){
      Hnum ++;
    }
    else{
      Tnum ++;
    }
  }
  return {tails:Tnum,heads: Hnum};
}

//let sample = coinFlips(10);
//console.log(countFlips(sample));

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  let result = '';
  let oneFlip = coinFlip();
  if (oneFlip.localeCompare(call) == 0){
    result = 'win';
  }
  else{
    result = 'lose';
  }
  return {call:call, flip: oneFlip, result: result};
}

//console.log(flipACoin('heads'))


/** Export 
 * 
 * Export all of your named functions
*/
