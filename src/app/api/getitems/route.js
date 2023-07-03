import { fetchItems } from "../dbfetch";
import getClient from "../dbconnect";
import { NextResponse } from "next/server";


export async function GET() {

    const items = {}
  await fetchItems(getClient()).then((dataa)=>{
    items.data = dataa;
  })

  return NextResponse.json(items,{
    headers: {
      "Access-Control-Allow-Origin": "https://food-loan-tracking.vercel.app, https://moneyleftgive.netlify.app",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })

}