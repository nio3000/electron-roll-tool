
const path = require('path');
const {BrowserWindow} = require('electron');
const url = require('url');
const config = require('../../config/index');

class IndexWindow {
    constructor() {
        // Create the browser window.
        this.indexWinow = new BrowserWindow({
            width: 1200, height: 800, autoHideMenuBar: true
        });

        // and load the index.html of the app.
        this.indexWinow.loadURL(url.format({
            pathname: path.join(__dirname, '../', 'views', 'index', 'index.html'),
            protocol: 'file:',
            slashes: true
        }));

        // Open the DevTools.
        if(config.isDebugMode){
            this.indexWinow.webContents.openDevTools();
        }

        // Emitted when the window is closed.
        this.indexWinow.on('closed', () => {
            this.indexWinow = null
        })
    }
}

module.exports = IndexWindow;