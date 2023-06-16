import { Notepad } from "phosphor-react";
import styles from "./TasksContainer.module.css";

export function TasksContainer() {
  return (
    <div className={styles.container}>
      <Notepad size={56} />

      <div className={styles.textContainer}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
