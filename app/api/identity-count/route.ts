/* Core */
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { amount = 1 } = body;

  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500));

  return NextResponse.json({ data: amount });
}


export async function GET(req: Request, res: Response){
  return NextResponse.json({message: "Basic Get request"});
}