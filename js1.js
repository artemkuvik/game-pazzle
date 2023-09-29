//
let wrapperGame = document.createElement('div');
document.body.prepend(wrapperGame);
wrapperGame.style.display = 'flex';
wrapperGame.style.justifyContent = 'center';
wrapperGame.style.background = 'white'

let game = document.createElement('div');
wrapperGame.prepend(game)
game.style.margin = "10px";
game.style.background = 'black';
game.style.position = 'relative';
game.style.cursor = 'pointer';

game.style.width = '450px';
game.style.height = '450px'; 

let arr = [[10, 10], [120, 10], [230, 10], [340, 10], [10, 120], [120, 120], [230, 120]
  ,[340, 120], [10, 230], [120, 230], [230, 230], [340, 230], [10, 340], [120, 340], [230, 340], [340, 340]];

  const shuffle = (arr) => {
    let m = arr.length, t, i;
  
   
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }
  
    return arr;
  }
  
  shuffle(arr)

  function addElem(color,number, x, y) {
    let elem = document.createElement('div');
    game.prepend(elem);
    elem.style.position = "absolute";
    elem.style.top = y + 'px';
    elem.style.left = x + 'px';
    elem.style.background = color;
    elem.style.width = '100px';
    elem.style.height = '100px';
    elem.innerHTML = number;
    elem.style.color = "white";
    elem.style.fontSize = "60px";
    elem.style.display = 'flex';
    elem.style.alignItems = "center";
    elem.style.justifyContent = "center";
    elem.id = 'cell';
    elem.onmousedown = () => false;
  }


let cell_1 = addElem( "blue", 1, arr[0][0], arr[0][1]);
let cell_2 = addElem( "blue", 2, arr[1][0], arr[1][1]);
let cell_3 = addElem( "blue", 3, arr[2][0], arr[2][1]);
let cell_4 = addElem( "blue", 4, arr[3][0], arr[3][1]);
let cell_5 = addElem( "blue", 5, arr[4][0], arr[4][1]);
let cell_6 = addElem( "blue", 6, arr[5][0], arr[5][1]);
let cell_7 = addElem( "blue", 7, arr[6][0], arr[6][1]);
let cell_8 = addElem( "blue", 8, arr[7][0], arr[7][1]);
let cell_9 = addElem( "blue", 9, arr[8][0], arr[8][1]);
let cell_10 = addElem( "blue", 10, arr[9][0], arr[9][1]);
let cell_11 = addElem( "blue", 11, arr[10][0], arr[10][1]);
let cell_12 = addElem( "blue", 12, arr[11][0], arr[11][1]);
let cell_13 = addElem( "blue", 13, arr[12][0], arr[12][1]);
let cell_14 = addElem( "blue", 14, arr[13][0], arr[13][1]);
let cell_15 = addElem( "blue", 15, arr[14][0], arr[14][1]);



let audio = new Audio("https://zvukogram.com/index.php?r=site/download&id=77778");
let audio_2 = new Audio("https://zvukogram.com/index.php?r=site/download&id=85679");

let wrapperButton = document.createElement('div');
document.body.prepend(wrapperButton);
wrapperButton.style.display = 'flex';
wrapperButton.style.justifyContent = 'space-between';
wrapperButton.style.margin = "0 auto";
wrapperButton.style.maxWidth = "450px"



let buttonShuffleAndStart = document.createElement('button');
buttonShuffleAndStart.innerHTML = 'Shuffle and start';
wrapperButton.append(buttonShuffleAndStart)
buttonShuffleAndStart.style.display = "block"
buttonShuffleAndStart.style.padding = "5px";
buttonShuffleAndStart.style.background = 'blue';
buttonShuffleAndStart.style.fontSize = "20px";
buttonShuffleAndStart.style.color = "white";

let buttonStop = document.createElement('button');
buttonStop.innerHTML = 'Stop';
wrapperButton.append(buttonStop)
buttonStop.style.display = "block"
buttonStop.style.padding = "5px";
buttonStop.style.background = 'blue';
buttonStop.style.fontSize = "20px";
buttonStop.style.color = "white";

let buttonSave = document.createElement('button');
buttonSave.innerHTML = 'Save';
wrapperButton.append(buttonSave)
buttonSave.style.display = "block"
buttonSave.style.padding = "5px";
buttonSave.style.background = 'blue';
buttonSave.style.fontSize = "20px";
buttonSave.style.color = "white";

let buttonResult = document.createElement('button');
buttonResult.innerHTML = 'Result';
wrapperButton.append(buttonResult)
buttonResult.style.display = "block"
buttonResult.style.padding = "5px";
buttonResult.style.background = 'blue';
buttonResult.style.fontSize = "20px";
buttonResult.style.color = "white";

let buttonSound = document.createElement('button');
buttonSound.innerHTML = 'Sound';
wrapperButton.append(buttonSound)
buttonSound.style.display = "block"
buttonSound.style.padding = "5px";
buttonSound.style.background = 'blue';
buttonSound.style.fontSize = "20px";
buttonSound.style.color = "white";



buttonSound.onclick = function() {
  if(buttonSound.style.background === 'blue') {
    buttonSound.style.background = 'yellow';
    audio = new Audio();
    audio_2 = new Audio();
  }
   else{
    buttonSound.style.background ='blue';
    audio = new Audio("https://zvukogram.com/index.php?r=site/download&id=77778");
    audio_2 = new Audio("https://zvukogram.com/index.php?r=site/download&id=85679");
  }
}

let counter = 0;

wrapperCounter = document.createElement('div');
wrapperButton.after(wrapperCounter);
wrapperCounter.style.display = 'flex';
wrapperCounter.style.margin = "0 auto"
wrapperCounter.style.maxWidth = "380px";
wrapperCounter.style.justifyContent = 'space-between';

let counterDiv = document.createElement('div');
      counterDiv.innerHTML = 'Moves:' + counter;
      wrapperCounter.prepend(counterDiv);
      counterDiv.style.padding = '5px';
      counterDiv.style.fontSize = "30px";

      let min = 0;
      let hour = 0;
      let sec = 0;
let timer = document.createElement('div');
wrapperCounter.append(timer);
timer.innerHTML = "Time: " + '0' + hour + ':0' + min + ':0' + sec;
timer.style.padding = '5px';
timer.style.fontSize = "30px";
      
      let init = setInterval(tick, 1000);
      
     
     
      function tick() {
          sec++;
          if (sec >= 60) { 
              min++;
              sec = sec - 60;
          }
          if (min >= 60) {
              hour++;
              min = min - 60;
          }
          if (sec < 10) { 
              if (min < 10) {
                  if (hour < 10) {
                      timer.innerHTML ="Time: " +'0' + hour + ':0' + min + ':0' + sec;
                  } else {
                      timer.innerHTML ="Time: " + hour + ':0' + min + ':0' + sec;
                  }
              } else {
                  if (hour < 10) {
                      timer.innerHTML ="Time: " +'0' + hour + ':' + min + ':0' + sec;
                  } else {
                      timer.innerHTML ="Time: " + hour + ':' + min + ':0' + sec;
                  }
              }
          } else {
              if (min < 10) {
                  if (hour < 10) {
                      timer.innerHTML = "Time: " +'0' + hour + ':0' + min + ':' + sec;
                  } else {
                      timer.innerHTML ="Time: " + hour + ':0' + min + ':' + sec;
                  }
              } else {
                  if (hour < 10) {
                      timer.innerHTML ="Time: " + '0' + hour + ':' + min + ':' + sec;
                  } else {
                      timer.innerHTML ="Time: " + hour + ':' + min + ':' + sec;
                  }
              }
          }
      }

let buttonStopState = 0;
buttonStop.onclick = function() {
  if(buttonStop.innerHTML == 'Stop') {
    buttonStop.innerHTML = 'Start';
    clearInterval(init)
  }
 else if(buttonStop.innerHTML == 'Start') {
    buttonStop.innerHTML = 'Stop';
    init = setInterval(tick, 1000)
  }
}


let cellList = document.querySelectorAll('#cell');
for(let cell of cellList) {
  cell.style.transition = "top 0.3s, left 0.3s";
 }
 
let clickable = true;
document.onclick = function(event){
  if(event.target.id === 'cell') {
    if (clickable) {
      clickable = false;
      
    let coords = event.target.getBoundingClientRect();
    let elemRight = document.elementFromPoint(coords.left + 150, coords.top);
    let elemLeft = document.elementFromPoint(coords.left - 20, coords.top);
    let elemTop = document.elementFromPoint(coords.left, coords.top - 50);
    let elemBot = document.elementFromPoint(coords.left, coords.top + 130);
   

     nameResult = ['left', 'right', 'top', 'bot'];
    let result = [elemLeft, elemRight, elemTop, elemBot].findIndex(item => item.style.background === 'black');
    result = nameResult[result];
    if(result === 'top') {
      counter++
      counterDiv.innerHTML = 'Moves:' + counter;
      event.target.style.top = parseInt(event.target.style.top) - 110 + "px";
      audio.play();
      
    }
    if(result === 'left') {
      counter++
      counterDiv.innerHTML = 'Moves:' + counter;
      event.target.style.left = parseInt(event.target.style.left) - 110 + "px";
      audio.play();
    }
    if(result === 'right') {
      counter++
      counterDiv.innerHTML = 'Moves:' + counter;
      event.target.style.left = parseInt(event.target.style.left) + 110 + "px";
      audio.play();
    }
    if(result === 'bot') {
      counter++
      counterDiv.innerHTML = 'Moves:' + counter;
      event.target.style.top = parseInt(event.target.style.top) + 110 + "px";
      audio.play();
     }
    setTimeout(function() { 
      clickable = true; 
    }, 300); 
  }
  }
}


buttonShuffleAndStart.onclick = function() {
  let cellList = document.querySelectorAll('#cell');
  for(let cell of cellList) {
    cell.remove();
   }
   audio_2.play();
shuffle(arr);
cell_1 = addElem( "blue", 1, arr[0][0], arr[0][1]);
cell_2 = addElem( "blue", 2, arr[1][0], arr[1][1]);
cell_3 = addElem( "blue", 3, arr[2][0], arr[2][1]);
cell_4 = addElem( "blue", 4, arr[3][0], arr[3][1]);
cell_5 = addElem( "blue", 5, arr[4][0], arr[4][1]);
cell_6 = addElem( "blue", 6, arr[5][0], arr[5][1]);
cell_7 = addElem( "blue", 7, arr[6][0], arr[6][1]);
cell_8 = addElem( "blue", 8, arr[7][0], arr[7][1]);
cell_9 = addElem( "blue", 9, arr[8][0], arr[8][1]);
cell_10 = addElem( "blue", 10, arr[9][0], arr[9][1]);
cell_11 = addElem( "blue", 11, arr[10][0], arr[10][1]);
cell_12 = addElem( "blue", 12, arr[11][0], arr[11][1]);
cell_13 = addElem( "blue", 13, arr[12][0], arr[12][1]);
cell_14 = addElem( "blue", 14, arr[13][0], arr[13][1]);
cell_15 = addElem( "blue", 15, arr[14][0], arr[14][1]);
  counter = 0;
  counterDiv.innerHTML = 'Moves:' + counter;
  min = 0;
  sec = 0;
  cellList = document.querySelectorAll('#cell');
for(let cell of cellList) {
  cell.style.transition = "top 0.3s, left 0.3s";
 }
}

















