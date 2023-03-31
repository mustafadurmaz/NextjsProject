import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter, Roboto } from 'next/font/google';
import { cookies } from 'next/headers'
import Test from './test';
import {redirect} from 'next/navigation'
import TestUseRrouter from './testUseRouter';

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

const fetchData1=async ()=>{
    const res=await fetch("https://restcountries.com/v3.1/name/turkey")
    return res.json();
}

const fetchData2=async ()=>{
    const res=await fetch("https://restcountries.com/v3.1/name/germany")
    return res.json();
}

const Home = async () => {
    await sleep(3000)
    const newCookies = cookies();
    let nav1 = false;

    if (nav1) {
        redirect("/about")
    }

    // const data1=await fetchData();

    const data1=fetchData1();
    const data2=fetchData2();

    const resultData=await Promise.all([
        data1, data2
    ]);
    
    console.log(resultData);

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
            <Test />
            <TestUseRrouter />
        </>
    )
}

export default Home