const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getFolderName:(folder) => {
    //画面から選択したフォルダ名をメインに通知するイベント
    ipcRenderer.send('get-folder', folder);
  },
  returnFiles:(callback) => {
    //メインから画面にファイル一覧を返すイベント
    ipcRenderer.on('return-files', callback)
  }
});