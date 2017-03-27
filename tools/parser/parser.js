const set = require('lodash/set');

export default function (str) {
  const res = {};
  str.split('\n').forEach((option) => {
    const [path, value] = option.split('=');
    if (!path) return;
    set(res, path, value);
  });
  return res;
}
