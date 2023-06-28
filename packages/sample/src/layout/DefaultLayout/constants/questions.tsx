import { TrainingType } from "../entity/training";

export const TRAINING_QUESTIONS: TrainingType[] = [
  {
    name: "Q1",
    title: `Q1. Sample page 바로가기를 만들어주세요.`,
    desc: [
      `1. "Go Sample Page" <a> 태그를 클릭하면 /sample 로 이동하도록 해주세요`,
      `2. /sample 로 이동하면 화면에 "Sample Page"문구가 보이도록 해주세오`,
      `3. useNavigate를 사용해서 구현해 주세요`,
    ],
    hint: [`이걸 보는 너는 바보다`, `이걸 보는 너는 멍충멍충이다`],
  },
  {
    name: "Q2",
    title: `Q2. Sample page에 "SampleLayout"을 적용해 주세요.`,
    desc: [
      `1. Routing을 사용해 Root page에 "DefaultLayout"이 적용될 수 있도록 "DefaultLayout.tsx"와 "App.tsx"를 수정해 주세요`,
      `2. DefaultLayout 적용 시 상단에 "Default Layout" 문구와 기존 Root page 내용이 화면에 나타나야 합니다`,
    ],
  },
  {
    name: "Q3",
    title: `Q3. "Counter" 컴포넌트를 만들어 주세요.`,
    desc: [
      `1. Counter를 컴포넌트로 만들고 적용해 주세요.("Root.tsx" 하단에 만들어둔 Counter 컴포넌트를 껍데기를 사용해 주세요)`,
      `2. props로 amount 값을 받아 '+', '-' 버큰 클릭 시 amount만큼 증가, 감소 하도록 구현해 주세요.`,
      `3. '0' 버튼을 클릭하면 counter 값이 0으로 초기화 되도록 해주세요.`,
    ],
  },
  {
    name: "Q4",
    title: `Q4. Recoil을 사용하여 Root page에서 작성한 내용을 Sample page에서 보여주세요.`,
    desc: [
      `1. src/pages/main/Root/store/main-text 폴더에 만들어진 Recoil state를 수정해서 구현해 주세요`,
      `2. Root page의 Textarea에 Recoil state를 연동해 주세요`,
      `3. Textarea의 내용을 변경했을 때 Sample page에 적용되도록 Sample page를 수정해 주세요`,
    ],
  },
  {
    name: "Q5",
    title: `Q4. Recoil을 사용하여 Root page에서 작성한 내용을 Sample page에서 보여주세요.`,
    desc: [
      `1. src/pages/main/Root/store/main-text 폴더에 만들어진 Recoil state를 수정해서 구현해 주세요`,
      `2. Root page의 Textarea에 Recoil state를 연동해 주세요`,
      `3. Textarea의 내용을 변경했을 때 Sample page에 적용되도록 Sample page를 수정해 주세요`,
    ],
  },
];
