import Image from "next/image";
import logoImage from '@/assets/bandeira-black.png'

export default function Logo(){
    return(
        <Image alt="logo" src={logoImage} className="w-[130px] hidden dark:block"/>
    )
}