import { TrainingType } from "../entity/training";

export const TRAINING_QUESTIONS: TrainingType[] = [
  {
    name: "Q1",
    title: `Q1. Sample page 바로가기를 만들어주세요.`,
    desc: [
      `- "Go Sample Page" 버튼과 <a> 태그를 클릭하면 /sample 페이지로 이동하도록 코드를 작성해 주세요.`,
      `- sample 페이지 URL은 "/sample"입니다.`,
      `- Q1-1 은 react-router-dom의 useNavigate hook을 사용해서 구현해 주세요.`,
      `- Q1-2 는 react-router-dom의 <Link /> 태그를 사용해서 구현해 주세요.`
    ],
    hint: [`이걸 보는 너는 바보다`, `이걸 보는 너는 멍충멍충이다`],
  },
  {
    name: "Q2",
    title: `Q2. Sample 페이지에 react-router-dom의 <Route /> 태그를 사용하여 SampleLayout을 적용해 주세요.`,
    desc: [
      `- "App.tsx"에서 <Route /> 태그를 사용하여 SampleLayout을 적용해 주세요.`,
      `- sample 페이지 URL은 "/sample"입니다.`,
    ],
    hint: [
      `react-router-dom의 <Outlet /> 태그를 "SampleLayout.tsx"에 적용해야 Sample 페이지 내용이 표시됩니다. `
    ]
  },
  {
    name: "Q3",
    title: `Q3. "Counter" 컴포넌트를 완성해 주세요.`,
    desc: [
      `- Count 컴포넌트에 amount props를 추가해 해당 값 만큼 증가, 감소 하도록 구현해 주세요 `,
      `- '-' 버튼을 클릭하면 count 값이 amount 만큼 감소하도록 구현해 주세요`,
      `- '+' 버튼을 클릭하면 count 값이 amount 만큼 증가하도록 구현해 주세요`,
      `- '0' 버튼을 클릭하면 count 값이 0으로 초기화 되도록 해주세요.`,
    ],
  },
  {
    name: "Q4",
    title: `Q4. Recoil을 사용하여 Textarea에서 작성한 내용을 Sample page에서 보여주세요.`,
    desc: [
      `- ".../Q4/store/main-text/selector.tsx" 폴더 내의 "MainTextSelector.textSelector"를 사용해서 구현해 주세요.`,
      `- Textarea에 Recoil state를 연동해 주세요.`,
      `- Sample 페이지에는 이미 mainTextState가 연동되어 있어 별도로 수정하지 않아도 됩니다.`,
    ],
    hint: [
      `useRecoilState를 사용하면 됩니다.`
    ]
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
