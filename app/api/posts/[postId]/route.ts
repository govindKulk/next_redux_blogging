import { Art_Delay, Post } from '@/lib/redux'
import data from 'data.json'
import { NextResponse } from 'next/server'
type routeParams = {postId: string}
import fs from 'node:fs/promises'
export async function POST(req: Request, {params}: {params: routeParams}){
    
    await new Promise((r) => setTimeout(r, Art_Delay))
    if(!params.postId){
        return NextResponse.json({message: "Invlaid post id!"})
    }
    const filteredData = data.filter(post => {
        if(post.post_id === Number(params.postId)){
            post.likes++;
        }
        return post;
    })

    try{
        await fs.writeFile('data.json', JSON.stringify(filteredData));
        return NextResponse.json({message: "ok"});
    }catch(err){
        console.log(err)
        return NextResponse.json({err: "Something went wrong while writing to db file!"}, {status: 400})
    }

    
    

}
export async function PATCH(req: Request){
    
    await new Promise((r) => setTimeout(r, Art_Delay))
    const body: Partial<Post> = await req.json();
    let idx = 0;
    const filteredData = data.map((post, i) => {
        if(post.post_id === Number(body.post_id)){
            idx = i;
   
            console.log({
                ...post,
                ...body
            })
            return {
                ...post,
                ...body
            }
        }else{

            return post;
        }
    })

    console.log(filteredData[idx]);

    try{
        await fs.writeFile('data.json', JSON.stringify(filteredData));
        return NextResponse.json({data: filteredData});
    }catch(err){
        console.log(err)
        return NextResponse.json({err: "Something went wrong while writing to db file!"}, {status: 400})
    }

    
    

}