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
  interface DropdownProps<T> {
    list: {value: T, label: string}[];
    defaultValue?: T; 
    onChange?: (value: T) => void;
  }

  export type DropdownList<T extends StrOrNum = StrOrNum> = {value: T, label: string}[];
  export type StrOrNum = string | number;

  // Dropdown component
  export function Dropdown<T extends StrOrNum = StrOrNum>(props: DropdownProps<T>) {
    const { list, defaultValue, onChange } = props;

    const [value, setValue] = React.useState<T>();
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    /**
     * [ko] Dropdown 바깥 영역 클릭 시 Dropdown이 닫히도록 하기 위한 처리입니다.
     * [en] Processing to close the dropdown when clicking outside the dropdown area.
     */
    const ref = React.useRef<HTMLDivElement>(null);
    // ★ Please write your code here - (hint: useOnClickOutside)

    function printList () {
      // ★ Please write your code here - (hint: Array.map, <li key={} className={} onClick={}>)
      return <></>
    }

    React.useEffect(() => {
      // ★ Please write your code here
    }, []);

    React.useEffect(() => {
      // ★ Please write your code here
    }, [value]);

    // ★ Please write your code here
    return <div data-component="q5.dropdown" ref={ref}>
      <button type='button'>
        <p>{}</p>
        <i className="down fa-solid fa-caret-down" /> 
        {/* <i className="up fa-solid fa-caret-up" /> */}
      </button>
      {/* 
      <ul>
        {printList()}
      </ul>
      */}
    </div>
  }
};

export default Q5;
