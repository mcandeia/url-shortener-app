import { AppContext } from "../mod.ts";
export interface Props {
  status: number;
}
export default function GetBin(
  { status }: Props,
  _req: Request,
  ctx: AppContext,
): Promise<Response> {
  return fetch(`${ctx.url}/${status}`);
}
