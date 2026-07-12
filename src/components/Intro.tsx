'use client';
import { AnimatePresence,motion } from 'framer-motion';import {useEffect,useState} from 'react';
export default function Intro(){const [show,setShow]=useState(true);useEffect(()=>{const t=setTimeout(()=>setShow(false),1500);return()=>clearTimeout(t)},[]);return <AnimatePresence>{show&&<motion.div className="intro" exit={{opacity:0}} transition={{duration:.45}}><motion.div initial={{scale:.8,opacity:0}} animate={{scale:1,opacity:1}} className="intro-logo">WELCOME<br/><span>ADMUD SMP</span></motion.div></motion.div>}</AnimatePresence>}
