module.exports = function (babel) {
  return {
    visitor: {
      ClassDeclaration(path, state) {
        if (path.node.id.name === "Person") {
          path.node.id.name = "Person1";
        }
        console.log(path.node.id.name);
      },
      CallExpression(path, state) {
        if (
          path.node.callee &&
          babel.types.isIdentifier(path.node.callee.object, { name: "console" })
        ) {
          path.remove();
        }
      },
    },
  };
};
