const types = require('@babel/types')
const isIdentifier = (node, config) => {
  return types.isIdentifier(node, config)
}
module.exports = function () {
  return {
    visitor: {
      // MemberExpression(path, state){
      //   console.log(path.node.object.name)
      //   console.log(path.node.property.name)
      //   if (isIdentifier(path.node.object, {name: 'console'}) && isIdentifier(path.node.property, {name: 'log'})){
      //     console.log(1)
      //     path.remove()
      //   }
      // }
      CallExpression(path, state){
        if (isIdentifier(path.node.callee.object, {name: 'console'}) && isIdentifier(path.node.callee.property, {name: 'log'})){
          path.remove();
          // path.remove();
        }
      },
    }
  };
};
