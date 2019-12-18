import * as R from "ramda";

export const Path = ["lastName"];

export const playerLastNameLens = R.lensPath(Path);
