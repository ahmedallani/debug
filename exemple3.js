function getMinPos(arr) {
  minPos = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minPos]) {
      minPos = i;
    }
  return minPos;
  }
}
function sort(arr) {
  var rtn = [];
  while (arr.length > 0) {
    var minPos = getMinPos(arr);
    rtn.push(arr[minPos]);
    arr.splice(minPos, 1);
  }
  return rtn;
}

console.log(sort([8, 4, 5, 1]));
