export default (path) => {
  const [, ...keys] = path.split('/');
  const file = keys[keys.length - 1];
  let [, key] = file.match(/(.+)\.jsx$/);
  if (key === 'index') {
    key = keys[keys.length - 2] || '';
  }
  if (key.includes('[') && key.includes(']')) {
    key = `:${key.match(/(\w+)/)[1]}`;
  }
  return `/${key}`;
};
