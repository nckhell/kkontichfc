import * as R from "ramda";
import { Path as StatisticsPath } from "./statisticsPath";

export const Path = [...StatisticsPath, "numberOfGoals"];

export const numberOfGoalsLens = R.lensPath(Path);
