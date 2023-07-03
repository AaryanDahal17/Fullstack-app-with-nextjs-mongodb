async function gettheItems(){

    const resp = await fetch('http://localhost:3000/api/getitems')
    
    const data = await resp.json()

    return data;
}


async function addtheitem(obj){
    const res = await fetch('http://localhost:3000/api/additem', {
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
