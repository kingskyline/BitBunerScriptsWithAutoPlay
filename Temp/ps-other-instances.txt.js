import { jsonReplacer } from 'utilites/dependacy/helpers.js'
export async function main(ns) { let r;try{r=JSON.stringify(
    ns.ps(ns.args[0]).filter(p => p.filename == ns.args[1]).map(p => p.pid)
, jsonReplacer);}catch(e){r="ERROR: "+(typeof e=='string'?e:e?.message??JSON.stringify(e));}
const f="/Temp/ps-other-instances.txt"; if(ns.read(f)!==r) ns.write(f,r,'w') }