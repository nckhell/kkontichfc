import * as R from "ramda";

export const Path = ["outcome", "awayTeamGoals"];

export const awayTeamGoalsLens = R.lensPath(Path);
