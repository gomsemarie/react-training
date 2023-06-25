import { Route, Routes } from "react-router-dom";
import * as MainPage from "./pages/main";

import "./App.scss";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<MainPage.Root />} />
        </Route>

        <Route path="/sample" element={<MainPage.Sample />} />
      </Routes>
    </div>
  );
}

export default App;
