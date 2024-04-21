'use server'
import PocketBase from 'pocketbase'
const conn = new PocketBase(process.env.POCKETBASE_URL);

export async function getBlogById(id: string){
    return await conn.collection('posts').getOne(id, {
        expand: "tags, author"
    })
}