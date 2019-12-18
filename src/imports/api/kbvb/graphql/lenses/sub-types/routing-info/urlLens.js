import * as R from "ramda";
import { Path as staticRoutingInfoPath } from "./staticRoutingInfoPath";

export const Path = [...staticRoutingInfoPath, "url"];

export const urlLens = R.lensPath(Path);
