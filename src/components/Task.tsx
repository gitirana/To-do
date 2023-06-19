import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { useState } from "react";

interface Task {
  isChecked: boolean;
  content: string;
}

interface Props {
  task: Task;
  onDeleteTask: any;
  onCheckTask: any;
}

export function Task({ task, onDeleteTask, onCheckTask }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  function handleCheckTask() {
    setIsChecked(!isChecked);

    onCheckTask(task);
  }
  //className={onCheck ? styles.checkedTaskText : styles.uncheckedTaskText}

  /*{onCheck ? (
        <CheckCircle
          size={24}
          weight="fill"
          className={styles.checkedTask}
          onClick={handleCheckTask}
        />
      ) : (
        <Circle size={24} weight="bold" className={styles.uncheckedTask} />
      )} */

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
      <span className={styles.uncheckedTaskText}>{task.content}</span>

      <div className={styles.trashCan} onClick={handleDeleteTask}>
        <Trash size={20} weight="bold" />
      </div>
    </div>
  );
}
