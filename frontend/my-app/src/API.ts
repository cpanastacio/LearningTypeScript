import axios, { AxiosResponse } from "axios"
const baseUrl: string = "http://localhost:4000"

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todos: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + "/todos"
        );
        return todos;
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Receives the data entered by the user as an argument and returns a promise, we need to
 * omit the id property, because its created by mongoDb on the fly
 */
export const addTodo = async (
    FormData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todo: Omit<ITodo, "_id"> = {
            name: FormData.name,
            description: FormData.description,
            status: false,
        }
        const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + "/add-todo",
            todo
        );
        return saveTodo;
    } catch (error) {
        throw new Error(error)
    }
}

export const updateTodo = async (
    
)