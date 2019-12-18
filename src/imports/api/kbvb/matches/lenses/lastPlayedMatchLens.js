import * as R from "ramda";

export const Path = ["data", "lastPlayedMatch"];

export const lastPlayedMatchLens = R.lensPath(Path);
