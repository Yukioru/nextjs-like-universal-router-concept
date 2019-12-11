import createAction from './createAction';
import createPath from './createPath';
import getParentTree from './getParentTree';
// import convertToNested from './convertToNested';

export default (req) => {
  const keys = req.keys();
  let arr = keys.map(req).map((component, index) => {
    const key = keys[index];
    const Component = component.default;

    const path = createPath(key);
    const action = createAction(Component);
    const parentTree = getParentTree(key);

    const parentPath = parentTree[parentTree.length - 1];
    const parentIndex = parentTree.indexOf(parentPath);
    const parent = {
      tree: parentTree,
      index: parentIndex,
      path: parentPath,
    };
    console.log(path, parent);
    const route = {
      path,
      action,
      ...(parentPath ? { _p: parent } : {}),
    };
    return route;
  });
  // const kek = convertToNested(arr);
  // console.log(kek);
  return arr;
};