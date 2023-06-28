/*------------------------------------------------------------------------------------------------------------------------------------------
 * Q2.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from "react";
import "./Q2.scss";
import { useSetRecoilState } from "recoil";
import { TrainingSelector } from "@/layout/DefaultLayout/store/training/selector";

function Q2() {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* State ――――― */
  const setTrainingStage = useSetRecoilState(TrainingSelector.nowStageSelector);
  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */
  React.useEffect(() => {
    setTrainingStage(2);
  }, []);

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return <div data-page="q2">해 줘</div>;
}

namespace Q2 {}

export default Q2;
