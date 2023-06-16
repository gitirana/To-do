//import { EmptyTaskList } from "./EmptyTaskList";
import { Task } from "./Task";

import styles from "./TasksContainer.module.css";

export function TasksContainer() {
  return (
    <div className={styles.container}>
      <Task />
      <Task isChecked />
    </div>
  );
}
