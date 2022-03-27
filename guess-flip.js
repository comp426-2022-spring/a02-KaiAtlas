import { flipACoin } from "./modules/coin.mjs";

var args = process.argv.slice(2);
if (args.length == 0){
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
}
else if (args!='--call=tails' && args!='--call=heads'){
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
}
else{
    if (args == '--call=tails'){
        console.log(flipACoin('tails'))
    }
    else{
        console.log(flipACoin('heads'))
    }
    //console.log(args)
}