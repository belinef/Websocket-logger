// filter DOM massage
var filterMSG = document.getElementById('filterValue');
// filter on = 1 ; off = 0;
var filter = 0;
// helper function: log message to screen
var log = function (msg){
  var searchInput = document.getElementById('search');
  if (filter === 1) {
    if(msg.includes(searchInput.value)){
      document.getElementById('log').innerHTML += msg.replace(searchInput.value,'<strong class="needed">' + searchInput.value + '</strong>') + '\n';
    }
  } else {
    document.getElementById('log').innerHTML += msg + '\n';
  }
};

function filterToggle(option){
  if(option === 'on'){
    filter = 1;
  } else {
    filter = 0;
  }
}


document.getElementById('filterOn').addEventListener('click',function(){
  filterToggle('on');
  filterMSG.textContent = 'Filter is on';
});
document.getElementById('filterOff').addEventListener('click',function(){
  filterToggle('off');
  filterMSG.textContent = 'Filter is off';
});

//
document.getElementById('showLog').addEventListener('click',function(){
  var url = document.getElementById('url');
  ws = new WebSocket(url.value);
  // setup websocket with callbacks
  ws.onopen = function() {
    log('CONNECT');
  };
  ws.onclose = function() {
    log('DISCONNECT');
  };
  ws.onmessage = function(event) {
    log('MESSAGE: ' + event.data);
  };
});