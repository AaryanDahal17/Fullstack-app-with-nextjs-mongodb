import { fetchItems } from "../dbfetch";
import getClient from "../dbconnect";
import { NextResponse } from "next/server";


export async function GET() {

    const items = {}
  await fetchItems(getClient()).then((dataa)=>{
    items.data = dataa;
  })

  return NextResponse.json(items)

}