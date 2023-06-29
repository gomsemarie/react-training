import { TrainingType } from "../entity/training";

export const TRAINING_QUESTIONS: TrainingType[] = [
  {
    name: "Q1",
    mainPoint: `React SPA에서 URL 이동`,
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
    mainPoint: `Routing 영역에서 공통 Layout 추가`,
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
    mainPoint: `React state, props 사용법`,
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
    mainPoint: `Recoil atom, selector 사용법`,
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
    mainPoint: `React에서 컴포넌트 만드는 방법`,
    title: `Q5. Dropdown 컴포넌트를 만들어 주세요.`,
    desc: [
      `- props에는 Dropdown의 값 목록인 list, 기본값인 defaultValue, onChange 함수가 있습니다.`,
      `- <ul> 태그 내부에 <li> 태그를 사용햐 Dropdown list를 출력해 주세요. (printList 함수 내부를 구현해 주시면 됩니다.)`,
      `- defaultValue가 undefined가 아닐 경우 최초 생성시 <button>에 defaultValue를 넣어주고 undefined일 경우 blank string을 넣어주세요. (useEffect를 사용해서 구현해 주세요.)`,
      `- <button> 클릭시 Dropdown list가 보이고 컴포넌트 바깥을 클릭하거나 <li>를 선택하면 list가 숨겨지도록 구현해 주세요. (useOnClickOutside hook을 사용해서 구현해 주세요.)`,
      `- onChange 함수를 props로 받았을 경우 Dropdown의 value가 변경되면 parameter로 value를 넘겨주고 onChange 함수를 실행해 주세요. (useEffect를 사용해서 구현해 주세요.)`,
    ],
  },
  {
    name: "Q6",
    mainPoint: ``,
    title: `Q6. 타이틀`,
    desc: [
      `- desc`,
    ],
  },
  {
    name: "Q7",
    mainPoint: ``,
    title: `Q7. 타이틀`,
    desc: [
      `- desc`,
    ],
  },
  {
    name: "Q8",
    mainPoint: ``,
    title: `Q8. 타이틀`,
    desc: [
      `- desc`,
    ],
  },
];
