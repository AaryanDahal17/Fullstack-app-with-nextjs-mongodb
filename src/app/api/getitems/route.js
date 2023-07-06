import { fetchItems } from "../dbfetch";
import getClient from "../dbconnect";
import { NextResponse } from "next/server";


export async function GET(request) {

    console.log(request)
    const items = {}
  await fetchItems(getClient()).then((dataa)=>{
    items.data = dataa;
  })

  return NextResponse.json(items,{
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })

}