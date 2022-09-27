module.exports = function () {
  return {
    visitor: {
      ClassDeclaration(path) {
        if (path.node.id.name === "Person") {
          path.node.id.name = "Person1";
        }
        console.log(path.node.id.name);
      },
    },
  };
};
