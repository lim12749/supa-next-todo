//api를 가져오는 코드
"use client"; //브라우저 안에서 동작할수있게 하는 파일로 정의

//todolist 가져오기
import { createSupabaseBrowserClient } from "@/lib/client/supabase";

export const getTodos = async () => {
    const supabase = createSupabaseBrowserClient();
    const result = await supabase
        .from("todos_no_rls")
        .select("*")
        .is("deleted_at", null)
        .order("id", {
            ascending: false,
        });

    return result.data;
};

//아이디로 가져오기
export const getTodosById = async (id: number) =>{
    const supabase = createSupabaseBrowserClient();
    const result =await supabase
        .from("todos_no_rls")
        .select("*")
        .is("deleted_at", null)
        .eq("id",id); //eq는 이퀄 같은지를 물어보는것
    return result.data;
};

//투두 가져오기 + 서치
export const getTodosBySearch  = async (terms :string)=>{
    const supabase = createSupabaseBrowserClient();
    const result =await supabase
        .from("todos_no_rls")
        .select("*")
        .is("deleted_at", null)
        .ilike("content",`%${terms}`)//terms는검색어 콘텐츠 안에있으면 가져와 달라.
        .order("id",{ascending:false}) //ascentding 대소문자 구별하지 않음
        .limit(500); //리밋은 만약에 너무 많은 데이터 가 있으면 적절하게 사용자에게 전달하는 값을 끊어줄수있다.
    return result.data;
}
//투두 생성하기
// todoList 생성하기
export const createTodos = async (content: string) => {
    const supabase = createSupabaseBrowserClient();
    const result = await supabase
        .from("todos_no_rls")
        .insert({
            content,
        })
        .select();

    return result.data;
};

//투두 리스트 업데이트 하기
export const updateTodos = async (id:number,content:string)=>{
    const supabase = createSupabaseBrowserClient();
    const result =await supabase
        .from("todos_no_rls")
        .update({
            content,
            updated_at: new Date().toISOString(),
        })
        .eq("id",id)
        .select();
    return result.data;
}

//투두 리스트 소프트 딜리스
export const deleteTodoSoft = async (id:number)=>{
    const supabase = createSupabaseBrowserClient();
    const result =await supabase
        .from("todos_no_rls")
        .update({
            deleted_at: new Date().toISOString(),
        })
        .eq("id",id)
        .select();
    return result.data;
}

export const deleteTodoHard = async (_id:number)=>{
    const supabase = createSupabaseBrowserClient();
    const result =await supabase
        .from("todos_no_rls")
        .delete().eq("id",_id);

    return result.data;
}
//투두 하드딜리트