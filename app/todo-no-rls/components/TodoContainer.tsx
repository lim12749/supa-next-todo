"use client";
import {createTodos, deleteTodoHard, deleteTodoSoft, getTodos, getTodosById} from "@/apis/todos-no-rls";
import React, { useEffect } from "react";

const TodoContainer = () => {
    useEffect(() => {
        //getTodos();
        //deleteTodoHard(7);
    }, []);

    return <div>TodoContainer</div>;
};

export default TodoContainer;