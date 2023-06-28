/*------------------------------------------------------------------------------------------------------------------------------------------
 * Q5.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from 'react';
import './Q5.scss';
import { useSetRecoilState } from 'recoil';
import { TrainingSelector } from '@/layout/DefaultLayout/store/training/selector';

function Q5 () { 
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* State ――――― */
  const setTrainingStage = useSetRecoilState(TrainingSelector.nowStageSelector);
  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */
  React.useEffect(() => {
    setTrainingStage(5);
  }, []);

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return <div data-page="q5">New Page</div>;
};

namespace Q5 {};

export default Q5;
