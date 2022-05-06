const fs = require('fs');
const path = require('path');
let files = [];

class RootFolder{
  constructor(folder){
    this.folder = folder;
  }
  getFiles(){
    files = [];
    this.searchDirectoryFiles(this.folder);
    return files;
  }
  searchDirectoryFiles(root){
    const allDirents = fs.readdirSync(root, {withFileTypes: true});

    for(const dirent of allDirents){
      if(dirent.isDirectory()){
        //フォルダの場合はサブフォルダを再帰的にチェック
        const fp = path.join(root, dirent.name);
        this.searchDirectoryFiles(fp);
      }else if(/.*\.(mp3|wav)$/.test(dirent.name)){
        const file = {};
        file.dir = root;
        file.name = dirent.name;
        files.push(file);
      }
    }
  }
}

module.exports = RootFolder;