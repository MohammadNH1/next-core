import { usersData } from "../route"
import { NextResponse } from "next/server"
export async function GET(request:Request,{params}:{params:{id:string}}){
    const {id} = await params;
   const converIdToNumber = parseInt(id)
    const user = usersData.find((user)=>user.id===converIdToNumber)
    if(!user) return NextResponse.json({message:'User not found!',status:404})

    return NextResponse.json({
        user,
        message:'User found',
        status:200
    })

}


export async function DELETE(request:Request,{params}:{params:{id:string}}){
    const {id} = await params;
    console.log('id',id)
const converIdToNumber = parseInt(id);
const user = usersData.find((user)=>user.id===converIdToNumber)
console.log('user',user)
    if(!user) return NextResponse.json({message:'User not found',status:404})

    const data = usersData.filter((user)=>user.id !==converIdToNumber)

    return NextResponse.json({message:'User deleted!',status:200})
}


export async function PUT(request:Request,{params}:{params:{id:string}}){
    const {id} = await params;
    const converIdToNumber = parseInt(id);
    const dataToUpdate = await request.json();

    const user = usersData.find((user)=>user.id===converIdToNumber)
    if(!user) return NextResponse.json({message:'User not found',status:404})

    const updatedUser = usersData.map((user)=>user.id===converIdToNumber?{...dataToUpdate}:user)
    return NextResponse.json({message:'User updated!',status:201,user:updatedUser})

    


}