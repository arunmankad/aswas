const {app, BrowserWindow} = require('electron')

const electron = require('electron');
const ipc = electron.ipcMain;
const dialog = electron.dialog;

let win;

// initilaizing the knex object
let knex = require("knex")({
    client:"sqlite3",
    connection: {
        filename:"./database.sqlite3"
    }
})

const myArray = ['India', 'US', 'UK'];

let server = require('./server/server');
// referenced in below code to create a window - electron-js boiler plate stuff
function createWindow(){
    win = new BrowserWindow({
        width:600,
        height:600,
        backgroundColor: '#ffffff',
        icon: 'file://${_dirname}/dist/assests/logo.png'

    })

    

    win.loadURL(`file://${__dirname}/dist/index.html`)    

    

    win.webContents.openDevTools()
    win.maximize();
    win.setFullScreen(true);
    win.on('closed', function(){
        win = null
    })
    
}

// ipc testing - neeed not be part of actual app

ipc.on('open-error-dialog', function(error,arg){
    console.log('open-error-dialog - arg is '+arg);
    dialog.showErrorBox("Title", "Body of the dialog");
    let res = []; 
   /* server.getDB(arg).then(function(response){
        //console.log(response);
        res = response;
        
        error.sender.send('open-error-dialog',response);
    }).catch(function(){
    
    }) */

    let result = knex.select("*").from("ipsum")
    result.then(function(rows){
        console.log(rows)
        error.sender.send('open-error-dialog',rows);
    }).catch((err)=> {
        console.log("KNEX ERROR = "+err)
    })
    
    
})
// for testing the ipc sync-message,need not be the part of actual app, may have refrence in the home screen
ipc.on('sync-message', function(error,arg){
    console.log(arg);
    //dialog.showErrorBox("Title", "Body of the dialog");
    //error.sender.send('open-error-dialog',myTestFunction());
    let result = knex.select("funfo").from("ipsum")
    result.then(function(rows){
        error.returnValue = rows;
    })
    
    
})
// for autocompleting the products list in products page - now in sales page from testing
ipc.on('autofill-products', function(error,arg){
    console.log(arg);
    //dialog.showErrorBox("Title", "Body of the dialog");
    //error.sender.send('open-error-dialog',myTestFunction());
    let result = knex.select("*").from("products_table")
    result.then(function(rows){
        error.returnValue = rows;
    })
})

// for testing insert into sqlite db using knex, need not be part of actual app

ipc.on('insert-purchase-details', function(error,arg){
    console.log('insert-purchase-details- arg is '+arg);
    var insert1 = {funfo: "a4"};
    var insert2 = {funfo: "b4"};
    knex.insert([insert1, insert2]).into("ipsum").then(function (id) {
        console.log("And the ID is - "+id);
      })
      .finally(function() {
        //knex.destroy();
    
      });
})
//code as part of standard electron-js app 
app.on('ready', createWindow)

// condition check for darwin was commented since the process was still running despite the app being closed
app.on('window-all-closed', function(){
    //if(process.platform !== 'darwin'){
        app.quit()
    //}
})

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database.sqlite3');
let path = require('path');

console.log(path);

/*
var readRecordsFromMediaTable = function(){
    return new Promise(function (resolve, reject) {
      var responseObj;
      db.all("SELECT * FROM lorem", null, function cb(err, rows) {
        if (err) {
          responseObj = {
            'error': err
          };
          reject(responseObj);
        } else {
          responseObj = {
            statement: this,
            rows: rows
          };
          resolve(responseObj);
        }
        db.close();
      });
    });
  }

readRecordsFromMediaTable(); */