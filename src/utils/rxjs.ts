import { filter } from "rxjs";
import { isNullOrUndefined } from "./common";

export const exists = filter((val: any) => !isNullOrUndefined(val));