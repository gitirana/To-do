import { PlusCircle } from "phosphor-react";

import styles from "./CreateTask.module.css";

export function CreateTask() {
  return (
    <div className={styles.container}>
      <input placeholder="Adicione uma nova tarefa" className={styles.input} />
      <button className={styles.button}>
        <PlusCircle weight="bold" />
        Criar
      </button>
    </div>
  );
}
