async function addItem(client,obj) {
    try {
      const db = client.db("storage");
      const collectionn = db.collection("inventory");
  
      await collectionn.insertOne(obj);
  
    } catch (error) {
      console.error("An error occurred in adding data to mongoDB:", error);
    }
  }

  async function fetchItems(client) {
    try {
      const db = client.db("storage");
      const collectionn = db.collection("inventory");
  
  
      const result = await collectionn.find().toArray();
  
  
      return result;
    } catch (error) {
      console.error("An error occurred in fetching mongoDB data : ", error);
    }
  }
  
  
  module.exports = {addItem,fetchItems}