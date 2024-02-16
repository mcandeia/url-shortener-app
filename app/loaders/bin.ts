import { AppContext } from "../mod.ts";
export interface Props {
  status: number;
}

export interface MyReturn {
  myName: string;
}
export default function GetBin(
  { status }: Props,
  _req: Request,
  ctx: AppContext,
): MyReturn {
  return { myName: "Candeia Community Call" };
}
