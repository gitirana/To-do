import { Task } from "./Task";
import { EmptyTaskList } from "./EmptyTaskList";

import { PlusCircle } from "phosphor-react";
import { useState } from "react";

import styles from "./Main.module.css";

interface Task {
  isChecked: boolean;
  content: string;
}

export function Main() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({
    isChecked: false,
    content: "",
  });
  const [counter, setCounter] = useState(0);

  function handleCreateNewTask() {
    event?.preventDefault();

    setTasks([...tasks, newTask]);

    setNewTask({
      isChecked: false,
      content: "",
    });
  }

  function handleNewTaskChange() {
    const target = event?.target as HTMLInputElement;
    setNewTask({ isChecked: false, content: target?.value });
  }

  function deleteTask(taskToDelete: Task) {
    const newTasksList = tasks.filter((task) => {
      return task.content !== taskToDelete.content;
    });

    setTasks(newTasksList);
  }

  function checkTask(taskToCheck: Task) {
    /*tasks.filter((task) => {
      task === taskToCheck && setCounter(counter + 1);
    });
    console.log(counter); */

    tasks.filter((task) => {
      if (task === taskToCheck) {
        task = {
          isChecked: taskToCheck.isChecked,
          content: taskToCheck.content,
        };

        task.isChecked && setCounter(counter + 1);
        console.log(task);
      }
    });
  }

  return (
    <>
      <form className={styles.container} onSubmit={handleCreateNewTask}>
        <input
          placeholder="Adicione uma nova tarefa"
          className={styles.input}
          onChange={handleNewTaskChange}
          value={newTask.content}
        />

        <button type="submit" className={styles.button}>
          <PlusCircle weight="bold" />
          Criar
        </button>
      </form>

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.createTask}>
            <strong>Tarefas criadas</strong>

            <div className={styles.badge}>
              <strong>{tasks.length}</strong>
            </div>
          </div>

          <div className={styles.doneTasks}>
            <span>Concluídas</span>

            <div className={styles.badge}>
              <strong>
                {tasks.length === 0 ? `0` : `${counter} de ${tasks.length}`}
              </strong>
            </div>
          </div>
        </div>

        <div className={styles.tasksList}>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task
                key={task.content}
                task={task}
                onDeleteTask={deleteTask}
                onCheckTask={checkTask}
              />
            ))
          ) : (
            <EmptyTaskList />
          )}
        </div>
      </div>
    </>
  );
}
