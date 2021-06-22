var canvas, backgroundImage;

var form, player, game;

var gameState = 0;
var playerCount;

var database;


function setup(){
  canvas = createCanvas(600,400);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  
}
