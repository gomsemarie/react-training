/*------------------------------------------------------------------------------------------------------------------------------------------
 * Root.tsx
 * WRITER : 최정근
 * DATE : 2023-06-25
 * DISCRIPTION : React 기초 예제
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import "./Root.scss";
import { useNavigate } from "react-router-dom";

interface RootProps {}

function Root(props: RootProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* Props ――――― */
  const {} = props;
  const navigate = useNavigate();
  /* State ――――― */

  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-page="root">
      <button onClick={() => navigate("/q1")}>Go Training</button>
    </div>
  );
}

namespace Root {}

export default Root;
