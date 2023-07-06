import { NextResponse } from "next/server";
import { addItem } from "../dbfetch";
import getClient from "../dbconnect";

export async function POST(req,res) {

  let obj = await req.json();
  await addItem(getClient(), obj);
  return NextResponse.json({ success: "true" },{
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
