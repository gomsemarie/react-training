/*------------------------------------------------------------------------------------------------------------------------------------------
 * Q3.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from "react";
import "./Q3.scss";
import { useSetRecoilState } from "recoil";
import { TrainingSelector } from "@/layout/DefaultLayout/store/training/selector";

function Q3() {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* State ――――― */
  const setTrainingStage = useSetRecoilState(TrainingSelector.nowStageSelector);
  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */
  React.useEffect(() => {
    setTrainingStage(3);
  }, []);

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-page="q3">
      <Q3.Counter />
      {/* <Q2.Counter amount={10} /> */}
    </div>
  );
}

namespace Q3 {
  // Counter 컴포넌트
  interface CounterProps {}
  export function Counter(props: CounterProps) {
    return (
      <div data-component="q3.counter">
        <div className="count-box">
          <input type="text" value={0} readOnly />
        </div>
        <div className="controller-box">
          <button>-</button>
          <button>+</button>
          <button>0</button>
        </div>
      </div>
    );
  }
}

export default Q3;
