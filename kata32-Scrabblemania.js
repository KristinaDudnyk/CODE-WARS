function wordscore(word) {
  const scores = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10,
  };

  let total = 0;
  word = word.split("");
  console.log(word);

  for (let element of word) {
    total += scores[element];
  }
  console.log(word);
  total *= word.length;

  if (word.length === 7) {
    total += 50;
  }
  console.log(word);

  return total;
}

function wordscore(word) {
  let obj = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10,
  };
  return (
    word.split(``).reduce((a, b) => a + obj[b], 0) * word.length +
    (word.length >= 7 ? 50 : 0)
  );
}
