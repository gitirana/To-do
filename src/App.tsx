import { Header } from "./components/Header";
import { CreateTask } from "./components/CreateTask";
import { Main } from "./components/Main";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <CreateTask />
        <Main />
      </div>
    </>
  );
}
