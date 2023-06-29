/*------------------------------------------------------------------------------------------------------------------------------------------
 * Q5.tsx
 * WRITER : 최정근
 * DATE : 2023-06-29
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React  from 'react';
import './Q5.scss';
import { useSetRecoilState } from 'recoil';
import { TrainingSelector } from '@/layout/DefaultLayout/store/training/selector';
import { useOnClickOutside } from 'usehooks-ts'

function Q5 () { 
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* State ――――― */
  /**
   * [ko] 무시해주세요
   * [en] please ignore
   */
  const setTrainingStage = useSetRecoilState(TrainingSelector.nowStageSelector);
  /* Const ――――― */
  /**
   * [ko] Dropdown 컴포넌트에 출력될 값 목록 입니다
   * [en] This is a list of values ​​to be displayed in the Dropdown component.
   */
  const list: Q5.DropdownList = [
    { value: 0, label: 'John' },
    { value: 1, label: 'Kuber' },
    { value: 2, label: 'Kuma' }
  ];
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */
  /**
   * [ko] 무시해주세요
   * [en] please ignore
   */
  React.useEffect(() => {
    setTrainingStage(5);
  }, []);

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return <div data-page="q5">
    <p>[ko] 문제를 만들고 보니 너무 어렵습니다. 30분 이상 걸릴 것 같다면 Sample package에 자세한 설명이 있으니 열심히 읽어주세요...</p>
    <p>[en] It's so hard to make a problem. If you think it will take more than 30 minutes, please read carefully because there is a detailed explanation in the sample package...</p>
    <Q5.Dropdown list={list} defaultValue={2} onChange={() => {console.log('Change!!')}} />
  </div>;
};

namespace Q5 {
  /**
   * [ko] 여러분이 수정하실 Dropdown 컴포넌트 입니다. 
   * [en] This is the Dropdown component you will be modifying.
   */

  // Dropdown props
  /** 
   * [ko] 'T'는 어떤 type을 넣어주는지에 따라 'T'를 사용한 부분의 type을 결정합니다. 
   * [en] 'T' determines the type of the part using 'T' depending on which type is entered.
   */
  interface DropdownProps<T> {
    list: {value: T, label: string}[]; /* [ko] Dropdown 컴포넌트에 출력될 값 목록 입니다.  [en] This is a list of values ​​to be displayed in the Dropdown component. */
    defaultValue?: T;                  /* [ko] 컴포넌트 생성시 기본적으로 보여질 값 입니다. [en] This is the value to be displayed by default when creating a component. */
    onChange?: (value: T) => void;     /* [ko] Dropdown 값이 변경되면 호출 될 함수 입니다. [en] A function to be called when the dropdown value changes. */
  }

  export type DropdownList<T extends StrOrNum = StrOrNum> = {value: T, label: string}[];
  export type StrOrNum = string | number;

  // Dropdown component
  export function Dropdown<T extends StrOrNum = StrOrNum>(props: DropdownProps<T>) {
    /**
     * [ko] onChange 함수는 optional한 값이기 때문에 기본값을 설정했습니다. 
     * [en] Since the onChange function is optional, we set a default value.
     */
    const { list, defaultValue, onChange = (value: T) => {} } = props;

    const [value, setValue] = React.useState<T>();              /* [ko] Dropdown에서 현재 선택된 값을 의미합니다.       [en] Indicates the currently selected value in the dropdown. */
    const [isOpen, setIsOpen] = React.useState<boolean>(false); /* [ko] Dropdown이 열려있는지 여부를 나타내는 값 입니다. [en] A value indicating whether the dropdown is open. */

    /**
     * [ko] Dropdown 바깥 영역 클릭 시 Dropdown이 닫히도록 하기 위한 처리입니다.
     * [en] Processing to close the dropdown when clicking outside the dropdown area.
     */
    const ref = React.useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => {
      setIsOpen(false);
    })

    /**
     * [ko] Dropdown의 값 목록을 출력하기 위한 함수입니다 ul 태그 내부에서 사용되고 있습니다.
     * [en] This is a function to output the dropdown list of values. It is used inside the ul tag.
     */
    function printList () {
      return list.map((ele) => {
        const isSelected = value === ele.value;

        /**
         * [ko] 
         * - Array.map 함수를 통해 반복적으로 태그가 출력 될 경우 react에서는 반복되는 태그에 고유한 key 값을 넣어줘야 합니다.
         * - Dropdown list에서 선택된 값에 highlight color를 주도록 className을 설정했습니다.
         * - li 태그를 클릭 시 Dropdown list가 닫히고 선택된 value가 적용되도록 코드를 작성했습니다.
         * [en] 
         * - When tags are repeatedly output through the Array.map function, react needs to put a unique key value in the repeated tags.
         * - I set the className to give highlight color to the selected value in the dropdown list.,
         * - I wrote the code so that when the li tag is clicked, the dropdown list is closed and the selected value is applied.
         */
        return <li 
        key={ele.value} 
        className={isSelected ? 'selected' : ''} 
        onClick={() => {
          setValue(ele.value);
          setIsOpen(false);
        }}>{ele.label}</li>
      })
    }

    /**
     * [ko] defaultValue를 props로 받았을 경우 defaultValue를 value state에 넣어줍니다.
     * [en] If the defaultValue is received as props, the defaultValue is put into the value state.
     */
    React.useEffect(() => {
      if (defaultValue !== undefined) {
        setValue(defaultValue);
      } 
    }, []);

    /**
     * [ko] onChange 함수를 props로 받았을 경우 Dropdown의 value state가 변경되면 onChange 함수를 실행합니다.
     * [en] When the onChange function is received as a prop, the onChange function is executed when the value state of the dropdown changes.
     */
    React.useEffect(() => {
      if (value !== undefined) {
        onChange(value);
      }
    }, [value]);

    /**
     * [ko] 여기 좀 생소할 듯? React master 이지연 책임님에게 설명을 부탁해보세요!
     * [en] It's a bit difficult here, isn't it? Ask React master Jiyeon Lee for an explanation!
     */
    return <div data-component="q5.dropdown" ref={ref}>
      <button type='button' onClick={() => setIsOpen((s) => !s)}>
        <p>{ (list.find((ele) => ele.value === value) ?? {label: ''}).label }</p>
        <i className="down fa-solid fa-caret-down" style={{...(isOpen && { display: 'none' })}}/> 
        <i className="up fa-solid fa-caret-up" style={{...(!isOpen && { display: 'none' })}}/>
      </button>
      <ul style={{...(!isOpen && { display: 'none' })}}>
        {printList()}
      </ul>
    </div>
  }
};

export default Q5;
