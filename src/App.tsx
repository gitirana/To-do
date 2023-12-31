import { Header } from "./components/Header";
import { Main } from "./components/Main";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Main />
      </div>
    </>
  );
}
