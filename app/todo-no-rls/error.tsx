//페이지에 지시문이 없으면 기본적으로 서버 클라이언트로 동작한다.
//에러는 클라이언트 컴포넌트로 바꿔야한다. 서버가 아닌 브라우저에서 처리되는 컴포넌트로 변경해야함.
"use client";

import React from 'react'
import { BounceLoader } from "react-spinners"
const Error = () =>{
  return(
      <div className="flex flex-col items-center mt-12">
        <div>
          <BounceLoader />
        </div>
          <div className="font-bold my-2" > error... </div>
      </div>
  )
}

export default Error;