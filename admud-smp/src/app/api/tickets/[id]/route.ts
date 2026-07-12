import {NextResponse} from 'next/server';import {getDb} from '@/lib/db';
export async function GET(_:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;const t=await getDb().ticket.findUnique({where:{publicToken:id},include:{messages:{orderBy:{createdAt:'asc'}}}});if(!t)return NextResponse.json({error:'Ticket tidak ditemukan.'},{status:404});return NextResponse.json(t)}
