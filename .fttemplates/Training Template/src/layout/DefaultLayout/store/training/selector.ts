import { selector } from "recoil";
import { trainingState, ITrainingState } from "./atom";

export namespace TrainingSelector {
  export const nowStageSelector = selector<ITrainingState["nowStage"]>({
    key: "trainingSelector.nowStageSelector",
    get: ({ get }) => {
      const data = get(trainingState);
      return data.nowStage;
    },
    set: ({ set }, newValue) => {
      set(trainingState, (s) => {
        if ((newValue as number) < 0) {
          newValue = 0;
        }

        return {
          ...s,
          nowStage: newValue as number,
        };
      });
    },
  });

  export const key2Selector = selector<ITrainingState["key2"]>({
    key: "trainingSelector.key2Selector",
    get: ({ get }) => {
      const data = get(trainingState);
      return data.key2;
    },
    set: ({ set }, newValue) => {
      set(trainingState, (s) => {
        return {
          ...s,
          key2: newValue as string,
        };
      });
    },
  });
}
