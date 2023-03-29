import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter, Roboto } from 'next/font/google';
import { cookies } from 'next/headers'
import Test from './test';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const Home = async () => {
    await sleep(3000)
    const newCookies = cookies();
    console.log(newCookies.getAll());
    return (
        <>
            <div>Home Page</div>
            <Link className={inter.className} href="about">Link 1</Link>
            <Link className={roboto.className} href="about?name=mustafa&surname=durmaz">Link 2</Link>
            <Link href={{
                pathname: "about",
                query: {
                    name: "mustafa",
                    surname: "durmaz"
                }
            }}>Link 3</Link>

            <Image
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                width={300}
                height={300}
            />
            <Test/>
        </>
    )
}

export default Home