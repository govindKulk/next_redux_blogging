import { Art_Delay } from "@/lib/redux";
import { NextResponse } from "next/server";
import data from 'data.json'
import fs from 'node:fs/promises'

export async function GET(req: Request, res: Response) {
    await new Promise(r => setTimeout(r, Art_Delay));
    
    const buffer = await fs.readFile('data.json');
    const posts = buffer.toString();
    if(posts){
        return NextResponse.json({data: JSON.parse(posts)}, {status: 200});
    }

    return NextResponse.json({error: "Server Error while reading post data"}, {status: 400});
}