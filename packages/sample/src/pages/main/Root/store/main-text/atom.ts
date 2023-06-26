import { atom } from "recoil";

export interface IMainTextState {
  text: string;
}

const INIT_MAIN_TEXT_STATE: IMainTextState = {
  text: "",
};

const mainTextState = atom<IMainTextState>({
  key: "mainTextState",
  default: INIT_MAIN_TEXT_STATE,
});

export { mainTextState };
