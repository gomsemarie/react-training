/*------------------------------------------------------------------------------------------------------------------------------------------
 * Q7.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from 'react';
import './Q7.scss';
import { useSetRecoilState } from 'recoil';
import { TrainingSelector } from '@/layout/DefaultLayout/store/training/selector';

function Q7 () { 
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* State ――――― */
  const setTrainingStage = useSetRecoilState(TrainingSelector.nowStageSelector);
  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */
  React.useEffect(() => {
    setTrainingStage(7);
  }, []);

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return <div data-page="q7">New Page</div>;
};

namespace Q7 {};

export default Q7;
