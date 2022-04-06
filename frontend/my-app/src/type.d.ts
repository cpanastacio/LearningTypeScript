/**
 * Interface needs to mirror the shape of data from the API
 */
interface ITodo {
    _id: string
    name: string
    description: string
    status: boolean
    createdAt: string
    updatedAt: string
}

interface TodoProps {
    todo: ITodo
}

type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todos?: ITodo
}