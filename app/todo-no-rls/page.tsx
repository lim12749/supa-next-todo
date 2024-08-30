import React from "react";
import {sleep} from "@/lib/utils";
import TodoContainer from "@/app/todo-no-rls/components/TodoContainer";

const page = async () =>{
    //에러페이지 클라이언트 페이지를 확인하려면
    //throw new Error("custom error");
    //await sleep(1500);
    return (
        <div>
            page
            <TodoContainer />
        </div>
    );
};

export  default  page;