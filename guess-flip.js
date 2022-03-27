import { flipACoin } from "./modules/coin.mjs";

var args = process.argv.slice(2);
if (args.length == 0){
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
}
else if (args[2]!='tails' && args[2]!='heads'){
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
}
else{
    console.log(flipACoin(args[2]))
}