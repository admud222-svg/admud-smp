import {NextResponse} from 'next/server';import {isAdmin} from '@/lib/auth';import {getDb} from '@/lib/db';
export async function GET(){if(!await isAdmin())return NextResponse.json({error:'Unauthorized'},{status:401});return NextResponse.json(await getDb().ticket.findMany({include:{messages:{orderBy:{createdAt:'asc'}}},orderBy:{updatedAt:'desc'}}))}
