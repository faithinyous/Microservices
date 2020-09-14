import  cassandra from 'cassandra-driver';
import assert from "assert";

let authProvider = new cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra');
//Replace PublicIP with the IP addresses of your clusters
let contactPoints = ['127.0.0.1:9042'];
let localDataCenter ='datacenter1';

let cassandraClient = new cassandra.Client({contactPoints: contactPoints, authProvider: authProvider, keyspace:'databaseTesla',localDataCenter:localDataCenter});
//Ensure all queries are executed before exit
const cassandraExe =(query:any, params:any, callback:any)=> {
  return new Promise((resolve, reject) => {
    cassandraClient.execute(query, params, (err:any, result:any) => {
      if(err) {
        console.log(err)
        reject()
      } else {
        callback(err, result);
        resolve()
      }
    });
  });
}
//Execute the queries


export {cassandraClient, cassandraExe}