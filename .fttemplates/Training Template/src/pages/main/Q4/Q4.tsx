/*------------------------------------------------------------------------------------------------------------------------------------------
 * Q4.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from "react";
import "./Q4.scss";
import { useRecoilState, useSetRecoilState } from "recoil";
import { TrainingSelector } from "@/layout/DefaultLayout/store/training/selector";
import { MainTextSelector } from "./store/main-text/selector";
import Sample from "../Sample";

function Q4() {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* State ――――― */
  const setTrainingStage = useSetRecoilState(TrainingSelector.nowStageSelector);
  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */
  React.useEffect(() => {
    setTrainingStage(4);
  }, []);

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-page="q4">
      <div><Q4.RecoilTextArea /></div>
      <div className="sample-page-box">
        <p>Sample Page 미리보기</p>
        <Sample />
      </div>
    </div>
  );
}

namespace Q4 {
  interface RecoilTextAreaProps {}
  export function RecoilTextArea(props: RecoilTextAreaProps) {
    return (
      <div data-component="q4.recoilTextarea">
        <p>Textarea</p>
        <textarea placeholder="Recoil state 연동!!" />
      </div>
    );
  }
}

export default Q4;
