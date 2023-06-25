/*------------------------------------------------------------------------------------------------------------------------------------------
 * DefaultLayout.tsx
 * WRITER : <FTName | camelcase>
 * DATE : 2023-xx-xx
 * DISCRIPTION : Header가 포함된 Layout 입니다
 * TYPE : Layout
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
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
      <article className='content-area'></article>
    </div>
  );
};

namespace DefaultLayout {};

export default DefaultLayout;