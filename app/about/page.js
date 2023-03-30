"use client"
import React from 'react'
import { useSearchParams, usePathname } from 'next/navigation'

const About = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const name=searchParams.get("name");
    const surname=searchParams.get("surname");
    console.log("name",name);
    console.log("surname",surname);
    console.log("pathname",pathname);
    return (
        <div>About Page</div>
    )
}

export default About