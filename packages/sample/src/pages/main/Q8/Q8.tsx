/*------------------------------------------------------------------------------------------------------------------------------------------
 * Q8.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from 'react';
import './Q8.scss';
import { useSetRecoilState } from 'recoil';
import { TrainingSelector } from '@/layout/DefaultLayout/store/training/selector';

function Q8 () { 
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* State ――――― */
  const setTrainingStage = useSetRecoilState(TrainingSelector.nowStageSelector);
  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */
  React.useEffect(() => {
    setTrainingStage(8);
  }, []);

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return <div data-page="q8">New Page</div>;
};

namespace Q8 {};

export default Q8;
