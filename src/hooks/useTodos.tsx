import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    toast({
      title: "Todo added",
      description: "Your new todo has been created.",
    });
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    toast({
      title: "Todo deleted",
      description: "The todo has been removed.",
      variant: "destructive",
    });
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
}