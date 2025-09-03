var backspaceCompare = function(s, t) {
  while (/[^#]#/.test(s)) {
    s = s.replace(/[^#]#/g, '');
  }
  while (/[^#]#/.test(t)) {
    t = t.replace(/[^#]#/g, '');
  }
  s = s.replace(/#/g, '');
  t = t.replace(/#/g, '');
  return s === t;
};
