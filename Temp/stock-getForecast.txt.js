import { jsonReplacer } from 'utilites/dependacy/helpers.js'
export async function main(ns) { let r;try{r=JSON.stringify(
    Object.fromEntries(ns.args.map(sym => [sym, ns.stock.getForecast(sym)]))
, jsonReplacer);}catch(e){r="ERROR: "+(typeof e=='string'?e:e?.message??JSON.stringify(e));}
const f="/Temp/stock-getForecast.txt"; if(ns.read(f)!==r) ns.write(f,r,'w') }