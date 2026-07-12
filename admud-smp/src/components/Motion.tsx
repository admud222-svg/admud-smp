'use client';
import { motion } from 'framer-motion';
export const Reveal=({children,className='',delay=0}:{children:React.ReactNode,className?:string,delay?:number})=><motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.65,delay}}>{children}</motion.div>;
export const Float=({children,className=''}:{children:React.ReactNode,className?:string})=><motion.div className={className} animate={{y:[0,-10,0],rotate:[0,1.5,0]}} transition={{duration:5,repeat:Infinity,ease:'easeInOut'}}>{children}</motion.div>;
