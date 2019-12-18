import * as R from "ramda";

export const Path = ["firstName"];

export const playerFirstNameLens = R.lensPath(Path);
