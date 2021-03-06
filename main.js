const electron = require("electron");

const { app, BrowserWindow } = electron;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({width: 1281, height: 800, minWidth: 1281, minHeight:800})
    //load the index.html of the app
    mainWindow.loadURL(`file://${__dirname}/index.html`)

    //Open the Devtools
    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', ()=> {
        mainWindow = null;
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)


  // Quit when all windows are closed.
app.on('window-all-closed', ()=> {
    // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q

    if (process.platform !== 'darwin') {
        app.quit()
    }
})

 // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
app.on('activate', ()=> {
    if (mainWindow === null) {
        createWindow()
    }
})