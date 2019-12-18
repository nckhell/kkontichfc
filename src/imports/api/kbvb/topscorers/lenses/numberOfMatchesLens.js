import * as R from "ramda";
import { Path as StatisticsPath } from "./statisticsPath";

export const Path = [...StatisticsPath, "numberOfMatches"];

export const numberOfMatchesLens = R.lensPath(Path);
