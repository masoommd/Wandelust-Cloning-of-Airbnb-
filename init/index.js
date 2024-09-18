const mongoose = require("mongoose");
const initData =  require("./data.js");
const Listing = require("../models/listing.js");

let MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then((res) =>{
    console.log("Connected to DB");
}).catch((err) =>{
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL);
}

let initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj,owner:"66e6e9fb5672b7a2c9934da1"}));
    await Listing.insertMany(initData.data); // because initData is object which contain all the information in data key 
    console.log("Data was saved successfully");
}

initDB();