import { AddTodo } from "@/components/AddTodo";
import { TodoList } from "@/components/TodoList";
import { useTodos } from "@/hooks/useTodos";

const Index = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          Todo App
        </h1>
        <AddTodo onAdd={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
};

export default Index;