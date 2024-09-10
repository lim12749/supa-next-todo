import React from "react";
import {sleep} from "@/lib/utils";
import TodoContainer from "@/app/todo-no-rls/components/TodoContainer";

const page = async () =>{

    return (
        <div>
            <TodoContainer />
        </div>
    );
};

export  default  page;