console.log("HELLO0000000000000 from index js");
const electron = require('electron');
const ipc = electron.ipcRenderer

const errorBtn = document.getElementById('errorBtn');

errorBtn.addEventListener('click', function(){
    ipc.send('open-error-dialog',111);
})
ipc.on('open-error-dialog', function(error, ar){

  //console.log('ARGS 1= '+ar);

})