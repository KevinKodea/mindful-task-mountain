import { Todo } from '@/hooks/useTodos';
import { TodoItem } from './TodoItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        No todos yet. Add one above!
      </div>
    );
  }

  return (
    <TransitionGroup className="flex flex-col gap-2">
      {todos.map((todo) => (
        <CSSTransition key={todo.id} timeout={300} classNames="todo-item">
          <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}