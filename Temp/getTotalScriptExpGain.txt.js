import { jsonReplacer } from 'utilites/dependacy/helpers.js'
export async function main(ns) { let r;try{r=JSON.stringify(
    ns.getTotalScriptExpGain()
, jsonReplacer);}catch(e){r="ERROR: "+(typeof e=='string'?e:e?.message??JSON.stringify(e));}
const f="/Temp/getTotalScriptExpGain.txt"; if(ns.read(f)!==r) ns.write(f,r,'w') }