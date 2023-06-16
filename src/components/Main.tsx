import { TasksContainer } from "./TasksContainer";

import styles from "./Main.module.css";

export function Main() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.createTask}>
          <strong>Tarefas criadas</strong>

          <div className={styles.badge}>
            <strong>0</strong>
          </div>
        </div>

        <div className={styles.doneTasks}>
          <span>Concluídas</span>

          <div className={styles.badge}>
            <strong>0</strong>
          </div>
        </div>
      </div>

      <TasksContainer />
    </div>
  );
}
