import * as R from "ramda";

export const Path = ["data", "teamMembers", "players"];

export const topscorersLens = R.lensPath(Path);
