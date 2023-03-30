"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const TestUseRrouter = () => {
  const routerRed=useRouter();
  console.log("Mustafa Test");
  return (
    <>
      <button onClick={()=>routerRed.push("/about")}>Push</button>
      <button onClick={()=>routerRed.back()}>Back</button>
      <button onClick={()=>routerRed.forward()}>Forward</button>
      <button onClick={()=>routerRed.refresh()}>Refresh</button>
    </>

  )
}

export default TestUseRrouter