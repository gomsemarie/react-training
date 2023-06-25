/*------------------------------------------------------------------------------------------------------------------------------------------
 * DefaultLayout.tsx
 * WRITER : 최정근
 * DATE : 2023-06-25
 * DISCRIPTION : Header가 포함된 Layout 입니다
 * TYPE : Layout
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import { Outlet } from 'react-router-dom';
import './DefaultLayout.scss';

interface DefaultLayoutProps {};

function DefaultLayout (props: DefaultLayoutProps) { 
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
    <div data-layout='defaultLayout'>
      <header className='top-menu-area'>
        <p>Default Layout</p>
      </header>
      <article className='content-area'><Outlet /></article>
    </div>
  );
};

namespace DefaultLayout {};

export default DefaultLayout;