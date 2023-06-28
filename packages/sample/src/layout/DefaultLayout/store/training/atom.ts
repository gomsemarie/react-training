import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface ITrainingState {
  nowStage: number;
}

const INIT_TRAINING_STATE: ITrainingState = {
  nowStage: 1,
};

const trainingState = atom<ITrainingState>({
  key: "trainingState",
  default: INIT_TRAINING_STATE,
  effects_UNSTABLE: [persistAtom],
});

export { trainingState };
