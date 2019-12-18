import * as R from "ramda";
import { Path as staticRoutingInfoPath } from "./staticRoutingInfoPath";

export const Path = [...staticRoutingInfoPath, "readableTitle"];

export const readableTitleLens = R.lensPath(Path);
