import { NextResponse } from "next/server";
import connect from "@/app/DataBase/lib/dbConnect";

export async function POST(req) {
    await connect()


    return NextResponse.json({token:"reberbe"});
}