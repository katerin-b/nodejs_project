const { MongoClient } = require('mongodb');

// Connection URL
// Mongo использует свой протокол общения с приложением
// localhost или IP (если Mongo на другом компьютере)
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

exports.init = async function() {
    await client.connect();
}

exports.getAllCourses = async function(){
    const db = client.db('itmo_education');
    const collection = db.collection('courses');
    return await collection.find().toArray();
}

