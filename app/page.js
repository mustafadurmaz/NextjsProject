import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
  return (
    <>
    <div>Home Page</div>
    <Link href="about">Link 1</Link>
    <Link href="about?name=mustafa&surname=durmaz">Link 2</Link>
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
    </>
  )
}

export default Home