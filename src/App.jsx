import Login from "./components/login/login";
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maker from "./components/maker/maker";

// 서비스전에 컴포넌트를 먼저 전달한다
function App({ FileInput, authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="/maker"
            element={<Maker FileInput={FileInput} authService={authService} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
