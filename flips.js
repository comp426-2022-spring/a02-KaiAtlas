import { coinFlips } from "./modules/coin.mjs";
import { countFlips } from "./modules/coin.mjs";
var args = process.argv.slice(2);
let coins = coinFlips(args[2]);
let count = countFlips(coins);
if (args[2] == null){
    coins = coinFlips(1);
    if (coins == 'heads'){
        count = {heads:1};
    }
    else{
        count = {tails:1};
    }
}
console.info(coins);
console.log(count);
