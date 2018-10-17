var MockGaleria = require('../MocKImagen');
var MongoClient = require('mongodb').MongoClient;
var db;
var collection;

MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true, poolSize: 10 }).then(client => {
    db = client.db('Imagen');
    collection = db.collection('Imagen');
}).catch(error => console.error(error));

function GetTodos(){
    return collection.find({}).toArray();
}

function GetID(id){
    console.log(id)
    return collection.find({ id: id}).toArray();
}

function PostData(data){
    return collection.insertOne(data);
}

function PutData(data, id){
    return collection.updateOne({ id: id}, { $set: data });
}
function DeleteData( id){
    return collection.deleteOne({ id: id });
}


module.exports = {
    GetTodos: GetTodos,
    GetID: GetID,
    PostData: PostData,
    PutData: PutData,
    DeleteData: DeleteData
}
