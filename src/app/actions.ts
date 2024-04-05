"use server"
import { cookies } from 'next/headers';
import PocketBase from 'pocketbase'
const conn = new PocketBase(process.env.POCKETBASE_URL);

export async function getPosts(page: number){
    return await conn.collection('posts').getList(page, 10, {
        sort:'-created',
        expand: 'tags'
    })
}

export async function toggleThemeCookie(){
    const theme = cookies().get('theme')
    if(theme?.value === 'dark'){
        cookies().set('theme', 'light')
        return 'light'
    } else {
        cookies().set('theme', 'dark')
        return 'dark'
    }
}