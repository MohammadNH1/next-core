import { NextRequest, NextResponse } from "next/server";

export const usersData = [
    {
        id: '1',
        name:'Rahim'
    },
    {
        id:'2',
        name:'Karim'
    }
]

export async function GET(request:NextRequest){
    return NextResponse.json({data: usersData, message:'ALl Users',status:200})

}


export async function POST(request:NextRequest){
    const data = await request.json()
    usersData.push(data)
  return  NextResponse.json({message:'Users data post',status:201})
}