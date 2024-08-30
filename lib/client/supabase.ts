//브라우저 클라이언트라는 함수를 /브라우저의 클라이언트를 말함 넥스트 js가 웹브라우저에 전달해서 웹이 돌게하는건데 ajx요청을 할때 클라이언트 함수를 호출할때.사용
//@ = root 경로를 말하고 루트에서 경로를 찾는거입니다.
import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@/types/supabase";

//데이터베이스의 인자를 지금 넘겨주는 작업을 한다.
//process.env를 설정을 안해주면 언디파인드가 날수있으니 주의 그래서 만약 에러가나지만 설정 .env를 했다면 !표를 뒤에 붙여 보자
//!를 붙이면 확실하게 있으니까 강조하게 된다.
export const createSupabaseBrowserClient = () =>
    createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );