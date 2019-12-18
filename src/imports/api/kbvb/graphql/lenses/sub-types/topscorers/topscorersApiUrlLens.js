import * as R from "ramda";

export const Path = ["topscorers", "url"];
export const MongoDBPath = Path.join(".");

export const topscorersApiUrlLens = R.lensPath(Path);
