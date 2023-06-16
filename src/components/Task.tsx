import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface Props {
  isChecked?: boolean;
}

export function Task({ isChecked = false }: Props) {
  return (
    <div className={styles.container}>
      {isChecked ? (
        <CheckCircle size={24} weight="fill" className={styles.checkedTask} />
      ) : (
        <Circle size={24} weight="bold" className={styles.uncheckedTask} />
      )}
      <span
        className={
          isChecked ? styles.checkedTaskText : styles.uncheckedTaskText
        }
      >
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>

      <div className={styles.trashCan}>
        <Trash size={20} weight="bold" />
      </div>
    </div>
  );
}
