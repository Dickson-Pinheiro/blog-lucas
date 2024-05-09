import type { Metadata } from "next";
import "./globals.css";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Blog Lucas Alvez",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get('theme')
  return (
    <html lang="pt-br" className={`${theme?.value ? theme.value : 'light'}`} style={{scrollBehavior: 'smooth'}}>
      <body className='bg-gray-100  dark:bg-gray-950'>{children}</body>
    </html>
  );
}
