async function gettheItems(){

    const resp = await fetch("https://food-loan-tracking.vercel.app/api/getitems", {cache:"no-store"})
    
    const data = await resp.json()

    return data;
}


async function addtheitem(obj){
    const res = await fetch('https://food-loan-tracking.vercel.app/api/additem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })

    const data = await res.json()
    return data;
}


module.exports = {gettheItems,addtheitem}
