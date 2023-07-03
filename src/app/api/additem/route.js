import { NextResponse } from "next/server";
import { addItem } from "../dbfetch";
import getClient from "../dbconnect";

export async function POST(req,res) {

  let obj = await req.json();
  await addItem(getClient(), obj);
  return NextResponse.json({ success: "true" });
}
