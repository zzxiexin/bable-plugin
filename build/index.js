const babel = require("@babel/core");
const fs = require("fs");
const path = require("path");
const dirName = path.resolve("./src");
const babelPlugin = require("../plugins/index");
const judgeIsDirectory = (fileNameStr) => {
  return fs.lstatSync(fileNameStr).isDirectory();
};
const getAllFiles = (fileOrDir) => {
  let result = [];
  if (judgeIsDirectory(fileOrDir)) {
    const files = fs.readdirSync(fileOrDir);
    files.forEach((file) => {
      if (judgeIsDirectory(path.resolve(fileOrDir, file))) {
        result = [...result, ...getAllFiles(path.resolve(fileOrDir, file))];
      } else {
        result.push(path.resolve(fileOrDir, file));
      }
    });
  } else {
    result.push(path.resolve(fileOrDir));
  }
  return result;
};

const allChangeFiles = getAllFiles(dirName);
allChangeFiles.forEach((file) => {
  fs.readFile(file, (err, data) => {
    const code = data.toString();
    const changedCode = babel.transformSync(code, {
      plugins: [babelPlugin()],
    });
    fs.writeFile(
      `${file.replace("src", "dist")}`,
      changedCode.code,
      function (err) {
        console.log(err);
      }
    );
    console.log(changedCode.code);
  });
});
