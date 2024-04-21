"use server"
import { cookies } from 'next/headers';
import PocketBase from 'pocketbase'
const conn = new PocketBase(process.env.POCKETBASE_URL);

export async function getPosts(page: number, max: number){
    return conn.collection('posts').getList(page, max, {
        sort:'-created',
        expand: 'tags',
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

export async function getTags(){
    return conn.collection('posts').getFullList({
        sort:'-created',
        expand: 'tags',
        fields: 'expand'
    })
}

export async function getProjects(){
    return conn.collection('projects').getFullList({
        expand: "images",
        fields: "id, expand, Description, title, link, image"
    })
}