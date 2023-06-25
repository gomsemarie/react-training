/*------------------------------------------------------------------------------------------------------------------------------------------
 * Sample.tsx
 * WRITER : <FTName | camelcase>
 * DATE : 2023-xx-xx
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