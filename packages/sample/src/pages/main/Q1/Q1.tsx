/*------------------------------------------------------------------------------------------------------------------------------------------
 * Q1.tsx
 * WRITER : 최정근
 * DATE : 2023-06-28
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from "react";
import "./Q1.scss";
import { useSetRecoilState } from "recoil";
import { TrainingSelector } from "@/layout/DefaultLayout/store/training/selector";

function Q1() {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* State ――――― */
  const setTrainingStage = useSetRecoilState(TrainingSelector.nowStageSelector);
  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */
  React.useEffect(() => {
    setTrainingStage(1);
  }, []);

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-page="q1">
      <a className="link">Go Sample Page</a>
    </div>
  );
}

namespace Q1 {}

export default Q1;
