import { db } from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET() { 
  try {
    const tags = await db.tag.findMany();
    return new NextResponse(JSON.stringify(tags), { status: 200 })
    
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message:"could not fetch tags" }, { status: 500 })
  }
}