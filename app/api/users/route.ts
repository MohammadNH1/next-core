import { NextResponse } from "next/server";

export const usersData = [
    {
        id: 1,
        name:'Rahim'
    },
    {
        id:2,
        name:'Karim'
    }
]

export async function GET(request:Request){
    return NextResponse.json({data: usersData, message:'ALl Users',status:200})

}


export async function POST(request:Request){
    const data = await request.json()
    usersData.push(data)
  return  NextResponse.json({message:'Users data post',status:201})
}