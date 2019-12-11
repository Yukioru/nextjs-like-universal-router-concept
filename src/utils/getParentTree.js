export default (key) => {
  const [, ...arr] = key.split('/').filter(e => !e.includes('index')).map((e) => {
    let el = e;
    if (el.includes('[') && el.includes(']')) {
      el = `:${el.match(/(\w+)/)[1]}`;
    }
    return `/${el}`;
  });
  arr.pop();
  return arr;
}