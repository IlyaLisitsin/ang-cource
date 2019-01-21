import { SharedEffects } from "../shared/store/effects";
import { HomeEffects } from "../home/store/effects";

export const AppEffects = [
  ...SharedEffects,
  ...HomeEffects,
];
