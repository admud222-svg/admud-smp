import { PrismaClient, ProductType } from '@prisma/client';
const db = new PrismaClient();
const products = [
 {slug:'wanderer',name:'Wanderer',type:ProductType.RANK,price:15000,image:'🧭',description:'Rank awal untuk petualang baru.',benefits:['Prefix chat Wanderer','/kit wanderer mingguan','2 home','Bonus 500 coins']},
 {slug:'guardian',name:'Guardian',type:ProductType.RANK,price:35000,image:'🛡️',description:'Lebih banyak fitur untuk pemain aktif.',benefits:['Prefix chat Guardian','/kit guardian mingguan','5 home','Akses /hat','Bonus 1.500 coins']},
 {slug:'mythic',name:'Mythic',type:ProductType.RANK,price:70000,image:'👑',description:'Rank premium dengan benefit kuat tapi tetap fair.',benefits:['Prefix animasi Mythic','/kit mythic mingguan','10 home','Akses /fly di lobby','Bonus 4.000 coins']},
 {slug:'shard-100',name:'100 Shards',type:ProductType.SHARD,price:10000,image:'💎',description:'Mata uang premium untuk cosmetic dan crate.',benefits:['100 Shards','Diproses maksimal 1x24 jam']},
 {slug:'shard-500',name:'500 Shards',type:ProductType.SHARD,price:40000,image:'✨',description:'Paket hemat untuk kolektor.',benefits:['500 Shards','Bonus 50 Shards']}
];
for (const p of products) await db.product.upsert({where:{slug:p.slug},update:p,create:p});
await db.$disconnect();
