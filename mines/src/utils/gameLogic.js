// const arr = ["x", "x", "x", "x", "n", "x", "x", "x", "x"];

function onclick(index, x, y) {
  let num;
  // שןרה עליונה
  if (index < x) {
    // פינה שמאלית
    if (index === 0) return topLeft(index, y);
    //פינה ימנית
    else if (index === x - 1) return topRight(index, y);
    // לא בפינה
    else return top(index, y);
  }

  //   שורה תחתונה
  else if (!x * y - x) {
    //פינה ימנית
    if (x * y - x === index) return bottomLeft(index, y);
    // פינה שמאלית
    else if (x * y - 1 === index) return bottomRight(index, y);
    // לא בפינה
    else return bottom(index, y);
  }

  // שורה שמאלית
  else if (!index % x) return left(index, y);
  //  שורה ימנית
  else if (index % x === x - 1) return right(index, y);
  //   center
  else return center(index, y);
}

function topLeft(index, y) {
  let n = 0;
  n += rightSweep(index, y);
  n += bottomSweep(index, y);
  n += bottomRightSweep(index, y);
  return n;
}

function top(index, y) {
  let n = 0;
  n += leftSweep(index, y);
  n += rightSweep(index, y);
  n += bottomSweep(index, y);
  n += bottomLeftSweep(index, y);
  n += bottomRightSweep(index, y);
  return n;
}

function topRight(index, y) {
  let n = 0;
  n += leftSweep(index, y);
  n += bottomSweep(index, y);
  n += bottomLeftSweep(index, y);
  return n;
}

function left(index, y) {
  let n = 0;
  n += topSweep(index, y);
  n += topRightSweep(index, y);
  n += rightSweep(index, y);
  n += bottomRightSweep(index, y);
  n += bottomSweep(index, y);
  return n;
}

function center(index, y) {
  let n = 0;
  n += topLeftSweep(index, y);
  n += topRightSweep(index, y);
  n += bottomRightSweep(index, y);
  n += bottomLeftSweep(index, y);
  n += topSweep(index, y);
  n += leftSweep(index, y);
  n += rightSweep(index, y);
  n += bottomSweep(index, y);
  return n;
}

function right(index, y) {
  let n = 0;
  n += topSweep(index, y);
  n += topLeftSweep(index, y);
  n += leftSweep(index, y);
  n += bottomLeftSweep(index, y);
  n += bottomSweep(index, y);
  return n;
}

function bottomLeft(index, y) {
  let n = 0;
  n += topSweep(index, y);
  n += topRightSweep(index, y);
  n += rightSweep(index, y);
  return n;
}

function bottom(index, y) {
  let n = 0;
  n += topSweep(index, y);
  n += topRightSweep(index, y);
  n += topLeftSweep(index, y);
  n += leftSweep(index, y);
  n += rightSweep(index, y);
  return n;
}
function bottomRight(index, y) {
  let n = 0;
  n += topLeftSweep(index, y);
  n += topSweep(index, y);
  n += leftSweep(index, y);
  return n;
}

function topLeftSweep(n, y) {
  return arr[n - y - 1] === "boom" && 1;
}
function topRightSweep(n, y) {
  return arr[n - y + 1] === "boom" && 1;
}
function bottomRightSweep(n, y) {
  return arr[n + y + 1] === "boom" && 1;
}
function bottomLeftSweep(n, y) {
  return arr[n + y - 1] === "boom" && 1;
}

// function middleSweep(n, y) {
//   return arr[n] === "boom" && 1;
// }

function topSweep(n, y) {
  return arr[n - y] === "boom" && 1;
}

function leftSweep(n, y) {
  return arr[n - 1] === "boom" && 1;
}
function rightSweep(n, y) {
  return arr[n + 1] === "boom" && 1;
}
function bottomSweep(n, y) {
  return arr[n + y] === "boom" && 1;
}
