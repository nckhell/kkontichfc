import * as R from "ramda";

export const Path = ["outcome", "homeTeamGoals"];

export const homeTeamGoalsLens = R.lensPath(Path);
