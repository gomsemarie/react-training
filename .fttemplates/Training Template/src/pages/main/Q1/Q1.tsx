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
import { Link, useNavigate } from "react-router-dom";

function aaa() {
  return <></>
}

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
      <div>
        <p>{`Q1-1. useNavigate를 사용해 주세요`}</p>
        <button>Go Sample Page</button>
      </div>
      <div>
        <p>{`Q1-2. <Link> 태그를 사용해 주세요`}</p>
        <a>Go Sample Page</a>
        
      </div>
    </div>
  );
}

namespace Q1 {}

export default Q1;
