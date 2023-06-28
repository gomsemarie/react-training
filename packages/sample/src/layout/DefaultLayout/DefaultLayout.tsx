/*------------------------------------------------------------------------------------------------------------------------------------------
 * DefaultLayout.tsx
 * WRITER : 최정근
 * DATE : 2023-06-25
 * DISCRIPTION : Header가 포함된 Layout 입니다
 * TYPE : Layout
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import { Outlet, useNavigate } from "react-router-dom";
import "./DefaultLayout.scss";
import { StyledText } from "@/components/StyledText/StyledText";
import { useRecoilValue } from "recoil";
import { TrainingSelector } from "./store/training/selector";
import { TrainingType } from "./entity/training";
import { TRAINING_QUESTIONS as TQ } from "./constants/questions";

interface DefaultLayoutProps {}

function DefaultLayout(props: DefaultLayoutProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* Props ――――― */
  const {} = props;
  const navigator = useNavigate();
  /* State ――――― */
  const nowStage = useRecoilValue(TrainingSelector.nowStageSelector);
  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-layout="defaultLayout">
      <header className="top-menu-area">
        <div className="button-box">
          <button
            className={nowStage === 1 ? "disabled" : ""}
            onClick={() => navigator(`/${TQ[nowStage - 2].name.toLowerCase()}`)}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        </div>
        <div>
          <StyledText
            text={["React", "Training"]}
            style={{
              fontSize: "25px",
            }}
          />
        </div>
        <div className="button-box">
          <button
            className={TQ.length === nowStage ? "disabled" : ""}
            onClick={() => navigator(`/${TQ[nowStage].name.toLowerCase()}`)}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </header>
      <div className="quick-menu-area">
        <DefaultLayout.QuickMenu trainingQuestions={TQ} />
      </div>
      <div className="text-area">
        <DefaultLayout.Training {...TQ[nowStage - 1]} />
      </div>
      <article className="content-area">
        <Outlet />
      </article>
    </div>
  );
}

namespace DefaultLayout {
  interface QuickMenuProps {
    trainingQuestions: TrainingType[];
  }
  export function QuickMenu(props: QuickMenuProps) {
    const { trainingQuestions } = props;
    const navigator = useNavigate();
    const nowStage = useRecoilValue(TrainingSelector.nowStageSelector);

    return (
      <ul data-component="defaultLayout.quickMenu">
        {trainingQuestions.map((ele, i) => {
          return (
            <li
              className={nowStage - 1 === i ? "selected" : ""}
              key={`qm-${i}`}
              onClick={() => {
                navigator(`/${TQ[i].name.toLowerCase()}`);
              }}
            >
              {ele.name}
            </li>
          );
        })}
      </ul>
    );
  }

  interface TrainingProps extends TrainingType {}
  export function Training(props: TrainingProps) {
    const { title, desc, hint = [] } = props;

    return (
      <div data-component="defaultLayout.training">
        <p className="title">{title}</p>
        <div className="desc-box">
          {desc.map((d, i) => (
            <p key={`desc-${i}`}>{d}</p>
          ))}
        </div>
        <p className="title">HINT</p>
        <div className="hint-box">
          {hint.map((h, i) => (
            <p key={`hint-${i}`}>{h}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
