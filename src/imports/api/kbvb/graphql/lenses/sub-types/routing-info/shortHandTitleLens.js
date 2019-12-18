import * as R from "ramda";
import { Path as staticRoutingInfoPath } from "./staticRoutingInfoPath";

export const Path = [...staticRoutingInfoPath, "shortHandTitle"];

export const shortHandTitleLens = R.lensPath(Path);
