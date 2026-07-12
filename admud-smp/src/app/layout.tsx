import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Admud SMP — Bedrock Survival',description:'Server Minecraft Bedrock survival semi-economy yang seru dan ramah free-to-play.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body>{children}</body></html>}
