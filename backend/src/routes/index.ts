import { Router } from "express"
import { getTodos, addTodos, updateTodo, deleteTodo } from "../controllers/todos"

const router: Router = Router()

router.get("/todos", getTodos);
router.post("/add-todo", addTodos);
router.put("/edit-todo", updateTodo);
router.delete("/delete-todo", deleteTodo);

export default router;
