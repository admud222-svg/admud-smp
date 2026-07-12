'use client';
import {Check,Copy} from 'lucide-react';import {useState} from 'react';import {motion} from 'framer-motion';
export default function CopyField({label,value}:{label:string,value:string}){const [ok,setOk]=useState(false);async function copy(){await navigator.clipboard.writeText(value);setOk(true);setTimeout(()=>setOk(false),1600)}return <div className="copy-field"><div><small>{label}</small><strong>{value}</strong></div><motion.button whileTap={{scale:.9}} whileHover={{scale:1.04}} onClick={copy}>{ok?<Check/>:<Copy/>}<span>{ok?'Tersalin':'Salin'}</span></motion.button></div>}
