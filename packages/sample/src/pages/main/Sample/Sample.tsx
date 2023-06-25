/*------------------------------------------------------------------------------------------------------------------------------------------
 * Sample.tsx
 * WRITER : 최정근
 * DATE : 2023-06-25
 * DISCRIPTION : Sample 페이지
 * TYPE : Component
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from 'react';
import "./Sample.scss";

interface SampleProps {};

function Sample (props: SampleProps) { 
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* Props ――――― */
  const {} = props;
  /* State ――――― */
  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-component='sample'>
      <p className='title'>Sample Page</p>
    </div>
  );
};

namespace Sample {};

export default Sample;