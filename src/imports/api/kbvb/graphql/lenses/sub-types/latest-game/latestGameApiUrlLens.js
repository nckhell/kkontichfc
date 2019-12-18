import * as R from "ramda";

export const Path = ["latestGame", "url"];

export const latestGameApiUrlLens = R.lensPath(Path);
