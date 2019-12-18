import * as R from "ramda";

export const Path = ["data", "seriesRankings", "rankings"];

export const rankingsLens = R.lensPath(Path);
