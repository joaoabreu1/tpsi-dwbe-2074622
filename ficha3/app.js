var start = function start() {
  console.log('Started Download');
}

var update = function update(valor) {
  console.log('Downloaded '+ valor +'%');
}

var complete = function complete() {
  console.log('Download Completed');
}



function performdownload(start, update, complete) {
  start();
  for (var i=0; i<100; i++) {
    update(i);
  }
  complete();
}

// performdownload(start, update, complete);

var arrayutils = require ('./ArrayUtils.js');

var array = [1,2,3,4];

var empty = arrayutils.isEmpty(array);
var max = arrayutils.max(array);
var min = arrayutils.min(array);
var med = arrayutils.average(array);

function showdata(empty, max, min) {
  console.log('Array is empty: ' + empty);
  console.log('Max value: ' + max);
  console.log('Min value: ' + min);
  console.log('Average value: ' + med);
}

showdata(empty, max, min, med);
