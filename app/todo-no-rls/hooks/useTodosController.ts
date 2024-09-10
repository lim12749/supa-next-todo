import  {useState, useEffect} from "react";
import {createTodos, deleteTodoSoft, getTodos, getTodosBySearch, updateTodos} from "@/apis/todos-no-rls";
import {Database} from "@/types/supabase";
import {tsParseMaybeAssignWithJSX} from "sucrase/dist/types/parser/plugins/typescript";

//투두 컨트롤러 훅은  유즈 스테이트를 통해서 생성 추가 삭제등 기능으로 사용하려고함
type TodoDto = Database["public"]["Tables"]["todos_no_rls"]["Row"]
const useTodosController =()=>{
    //로딩상태를 가질거임
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState<TodoDto[]>([]);

    const onGetTodos = async()=>{

        setLoading(true);

        try{
            const resultTodos = await getTodos();
            if(resultTodos) setTodos(resultTodos);
        }
        catch(err){
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        onGetTodos();
    },[])

    //비어있는 투두 생성
    const  onCreateEmptyTodos = async ()=>{
        await  createTodos(""); //비어있는 투두를 생성시 두번호출하게 됨
        await  onGetTodos(); //위아래 한쌍으로 묶인 함수 생성
    };
    const onUpdateTodos = async (id:number, content:string)=>{
        await updateTodos(id,content);
        await onGetTodos();//업데이트해서 불러와야합니다.
    };
    const onDeleteTodos = async (id:number)=>{
        await deleteTodoSoft(id);
        await onGetTodos();
    };
    const onSearchTodos = async (terms:string)=>{
        const todoResult = await getTodosBySearch(terms);
        if(todoResult)
            setTodos(todoResult);
        else
            await onGetTodos();
    };
    return {loading, todos,onCreateEmptyTodos,onUpdateTodos,onDeleteTodos,onSearchTodos};
}


export default  useTodosController;