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