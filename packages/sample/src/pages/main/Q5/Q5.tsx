/*------------------------------------------------------------------------------------------------------------------------------------------
 * Q5.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
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
  const setTrainingStage = useSetRecoilState(TrainingSelector.nowStageSelector);
  /* Const ――――― */
  const list: Q5.DropdownList = [
    { value: 0, label: 'John' },
    { value: 1, label: 'Kuber' },
    { value: 2, label: 'Kuma' }
  ];
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */
  React.useEffect(() => {
    setTrainingStage(5);
  }, []);

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return <div data-page="q5">
    <p>문제를 만들고 보니 너무 어렵습니다. 10분 이상 고민하실 것 같다면 Run 해주세요</p>
    <Q5.Dropdown list={list} defaultValue={2} onChange={() => {console.log('Change!!')}} />
  </div>;
};

namespace Q5 {
  interface DropdownProps<T> {
    list: {value: T, label: string}[];
    defaultValue?: T;
    onChange?: (value: T) => void;
  }

  export type DropdownList<T extends StrOrNum = StrOrNum> = {value: T, label: string}[];
  export type StrOrNum = string | number;

  export function Dropdown<T extends StrOrNum = StrOrNum>(props: DropdownProps<T>) {
    const { list, defaultValue, onChange = (value: T) => {} } = props;
    const [value, setValue] = React.useState<T>();
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const ref = React.useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => {
      setIsOpen(false);
    })
    

    function printList () {
      return list.map((ele) => {
        // <li> 태그를 사용해서 구현해 주세요
        return <li key={ele.value} className={value === ele.value ? 'selected' : ''} onClick={() => {
          setValue(ele.value);
          setIsOpen(false);
        }}>{ele.label}</li>
      })
    }

    // defaultValue가 undefined가 아닐 경우 최초 생성시 <button>에 defaultValue를 넣어주고 undefined일 경우 blank string을 넣어주세요.
    React.useEffect(() => {
      if (defaultValue !== undefined) {
        setValue(defaultValue);
      } 
    }, []);

    // onChange 함수를 props로 받았을 경우 Dropdown의 value가 변경되면 parameter로 value를 넘겨주고 onChange 함수를 실행해 주세요.
    React.useEffect(() => {
      if (value !== undefined) {
        onChange(value);
      }
    }, [value]);

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
