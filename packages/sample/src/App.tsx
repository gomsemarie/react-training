import { Route, Routes } from "react-router-dom";
import * as MainPage from "./pages/main";

import "./App.scss";
import DefaultLayout from "./layout/DefaultLayout";
import SampleLayout from "./layout/SampleLayout";

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
          <Route path="/q5" element={<MainPage.Q5 />} />
        </Route>

        <Route element={<SampleLayout />}>
          <Route path="/sample" element={<MainPage.Sample />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
