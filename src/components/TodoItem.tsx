import { Todo } from '@/hooks/useTodos';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onToggle(todo.id)}
        className={cn(
          "h-8 w-8 rounded-full",
          todo.completed && "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        <Check className="h-4 w-4" />
      </Button>
      <span
        className={cn(
          "flex-1 text-lg",
          todo.completed && "line-through text-muted-foreground"
        )}
      >
        {todo.text}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="h-8 w-8 text-destructive hover:text-destructive-foreground hover:bg-destructive"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}