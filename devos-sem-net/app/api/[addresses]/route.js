import { NextResponse } from "next/server";


export async function GET(){
    return NextResponse.json({Answer: NEO4J_URI});
}