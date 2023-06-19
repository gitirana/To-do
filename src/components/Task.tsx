import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { useState } from "react";

interface Task {
  isChecked: boolean;
  content: string;
}

interface Props {
  task: Task;
  onDeleteTask: (index: number) => void;
  onCheckTask: (task: Task, index: number) => void;
  index: number;
}

export function Task({ task, onDeleteTask, onCheckTask, index }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(index);
  }

  function handleCheckTask() {
    const newIsCheckedValue = !isChecked;

    setIsChecked(newIsCheckedValue);

    onCheckTask({ ...task, isChecked: newIsCheckedValue }, index);
  }

  return (
    <div className={styles.container}>
      {isChecked ? (
        <CheckCircle
          size={24}
          weight="fill"
          className={styles.checkedTask}
          onClick={handleCheckTask}
        />
      ) : (
        <Circle
          size={24}
          weight="bold"
          className={styles.uncheckedTask}
          onClick={handleCheckTask}
        />
      )}
      <span
        className={
          isChecked ? styles.checkedTaskText : styles.uncheckedTaskText
        }
      >
        {task.content}
      </span>

      <div className={styles.trashCan} onClick={handleDeleteTask}>
        <Trash size={20} weight="bold" />
      </div>
    </div>
  );
}
