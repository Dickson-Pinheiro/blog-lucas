import Image from "next/image";
import logoImage from '@/assets/bandeira-black.png'

export default function Logo(){
    return(
        <>
            <h1 className="dark:text-primary-500 border-none text-3xl font-bold hidden dark:block">Lucas Alvez</h1>
            <h1 className="text-primary-950 border-none text-3xl font-bold dark:hidden">Lucas Alvez</h1>
        </>
    )
}