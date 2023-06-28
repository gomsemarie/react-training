import { Route, Routes } from "react-router-dom";
import * as MainPage from "./pages/main";

import "./App.scss";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage.Root />} />

        <Route element={<DefaultLayout />}>
          <Route path="/q1" element={<MainPage.Q1 />} />
          <Route path="/q2" element={<MainPage.Q2 />} />
          <Route path="/q3" element={<MainPage.Q3 />} />
          <Route path="/q4" element={<MainPage.Q4 />} />
        </Route>

        <Route path="/sample" element={<MainPage.Sample />} />
      </Routes>
    </div>
  );
}

export default App;
