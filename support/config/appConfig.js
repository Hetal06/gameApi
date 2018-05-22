/*
File: appConfig.js
App Name: Venus Stock Manager
Purpose: Configuration Part for Server and Database
Created By: Hetal Thakkar */

'use strict'
module.exports ={
  "db" :{           //Database Configuration
          "port"		: 27017,
          "dbName"	: 'LudoGame',
          "authDb"	: 'admin',
          "url"		  : 'mongodb://localhost:27017/meandemo',
          "host"    : 'localhost',
          // "host"		: '52.66.157.107',
          // "user"		: "venus",
          // "passkey"	: "venusBardoli",
        },
  "server": {       //Server Configuration
          // "name":"Venus Stock Manager",
          "port":4000
        },
  // "token": {
  //         "secret": "venusjewellery"
  //       }
}
