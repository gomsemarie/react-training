import { atom } from "recoil";

export interface IMainTextState {
  anyKey: string;
}

const INIT_MAIN_TEXT_STATE: IMainTextState = {
  anyKey: "",
};

const mainTextState = atom<IMainTextState>({
  key: "mainTextState",
  default: INIT_MAIN_TEXT_STATE,
});

export { mainTextState };
