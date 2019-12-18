import * as R from "ramda";

export const Path = ["series", "name"];

export const seriesNameLens = R.lensPath(Path);
