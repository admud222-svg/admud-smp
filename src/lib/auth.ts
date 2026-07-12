import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
const key=()=>new TextEncoder().encode(process.env.AUTH_SECRET || 'development-only-change-this-secret');
export async function createAdminToken(){return new SignJWT({role:'admin'}).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('8h').sign(key())}
export async function isAdmin(){const token=(await cookies()).get('admud_admin')?.value;if(!token)return false;try{const {payload}=await jwtVerify(token,key());return payload.role==='admin'}catch{return false}}
