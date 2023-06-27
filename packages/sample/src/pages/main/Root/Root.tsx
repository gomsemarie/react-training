/*------------------------------------------------------------------------------------------------------------------------------------------
 * Root.tsx
 * WRITER : 최정근
 * DATE : 2023-06-25
 * DISCRIPTION : React 기초 예제
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from "react";
import "./Root.scss";
import { useNavigate } from "react-router-dom";
import { StyledText } from "@/components/StyledText/StyledText";
import { useRecoilState } from "recoil";
import { MainTextSelector } from "./store/main-text/selector";

type TrainingType = {
  title: string;
  desc: string[];
};
const tl: TrainingType[] = [
  {
    title: `Q1. Sample page 바로가기를 만들어주세요.`,
    desc: [
      `1. "Go Sample Page" <a> 태그를 클릭하면 /sample 로 이동하도록 해주세요`,
      `2. /sample 로 이동하면 화면에 "Sample Page"문구가 보이도록 해주세오`,
      `3. useNavigate를 사용해서 구현해 주세요`,
    ],
  },
  {
    title: `Q2. Root page에 "DefaultLayout"를 적용해 주세요.`,
    desc: [
      `1. Routing을 사용해 Root page에 "DefaultLayout"이 적용될 수 있도록 "DefaultLayout.tsx"와 "App.tsx"를 수정해 주세요`,
      `2. DefaultLayout 적용 시 상단에 "Default Layout" 문구와 기존 Root page 내용이 화면에 나타나야 합니다`,
    ],
  },
  {
    title: `Q3. "Counter" 컴포넌트를 만들어 주세요.`,
    desc: [
      `1. Counter를 컴포넌트로 만들고 적용해 주세요.("Root.tsx" 하단에 만들어둔 Counter 컴포넌트를 껍데기를 사용해 주세요)`,
      `2. props로 amount 값을 받아 '+', '-' 버큰 클릭 시 amount만큼 증가, 감소 하도록 구현해 주세요.`,
      `3. '0' 버튼을 클릭하면 counter 값이 0으로 초기화 되도록 해주세요.`,
    ],
  },
  {
    title: `Q4. Recoil을 사용하여 Root page에서 작성한 내용을 Sample page에서 보여주세요.`,
    desc: [
      `1. src/pages/main/Root/store/main-text 폴더에 만들어진 Recoil state를 수정해서 구현해 주세요`,
      `2. Root page의 Textarea에 Recoil state를 연동해 주세요`,
      `3. Textarea의 내용을 변경했을 때 Sample page에 적용되도록 Sample page를 수정해 주세요`,
    ],
  },
];

interface RootProps {}

function Root(props: RootProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* Props ――――― */
  const {} = props;
  const navigator = useNavigate();
  /* State ――――― */
  const [text, setText] = useRecoilState(MainTextSelector.textSelector);

  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */
  React.useEffect(() => {}, []);

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-page="root">
      <div className="title-box">
        <StyledText text={["React", "Training"]} />
      </div>
      <div className="content-box">
        <Root.Training title={tl[0].title} desc={tl[0].desc}>
          <a className="link" onClick={() => navigator("/sample")}>
            Go Sample Page
          </a>
        </Root.Training>
        <Root.Training title={tl[1].title} desc={tl[1].desc} />
        <Root.Training title={tl[2].title} desc={tl[2].desc}>
          <Root.Counter amount={10} />
        </Root.Training>
        <Root.Training title={tl[3].title} desc={tl[3].desc}>
          <div className="recoil-textarea">
            <p>Textarea</p>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Recoil state 연동!!"
            />
          </div>
        </Root.Training>
      </div>
    </div>
  );
}

namespace Root {
  interface TrainingProps extends TrainingType {
    children?: React.ReactNode;
  }
  export function Training(props: TrainingProps) {
    const { title, desc, children } = props;

    return (
      <div data-component="root.training">
        <p className="title">{title}</p>
        <div className="desc-box">
          {desc.map((d, i) => (
            <p key={`desc-${i}`}>{d}</p>
          ))}
        </div>
        <div className="content">{children}</div>
      </div>
    );
  }

  // Counter 컴포넌트
  interface CounterProps {
    amount: number;
  }
  export function Counter(props: CounterProps) {
    const { amount } = props;

    const [count, setCount] = React.useState<number>(0);

    function addCount(c: number) {
      // setCount(count + c); 보다 안전한 코드!!
      setCount((s) => {
        return s + c;
      });
    }

    return (
      <div data-component="root.counter">
        <div className="count-box">
          <input type="text" value={count} readOnly />
        </div>
        <div className="controller-box">
          <button onClick={() => addCount(-amount)}>-</button>
          <button onClick={() => addCount(amount)}>+</button>
          <button onClick={() => setCount(0)}>0</button>
        </div>
      </div>
    );
  }
}

export default Root;
