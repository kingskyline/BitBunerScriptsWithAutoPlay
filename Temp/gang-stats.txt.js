import { jsonReplacer } from 'utilites/dependacy/helpers.js'
export async function main(ns) { let r;try{r=JSON.stringify(
    ns.gang.inGang() ? ns.gang.getGangInformation() : false
, jsonReplacer);}catch(e){r="ERROR: "+(typeof e=='string'?e:e?.message??JSON.stringify(e));}
const f="/Temp/gang-stats.txt"; if(ns.read(f)!==r) ns.write(f,r,'w') }