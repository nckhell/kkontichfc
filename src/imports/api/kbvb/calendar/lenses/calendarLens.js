import * as R from "ramda";

export const Path = ["data", "teamCalendar"];

export const calendarLens = R.lensPath(Path);
