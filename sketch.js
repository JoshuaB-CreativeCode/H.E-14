let unkilliax;
let reno;
let mana;
let factory;
let hearthstoneBoard;
let cursorX = 20;
let cursorY = 20;

function preload() {
  unkilliax = loadImage("/Images/Unkilliax.png");
  reno = loadImage("/Images/RENO.png");
  mana1 = loadImage("/Images/4 mana Fixed.png");
  factory = loadImage("/Images/Bot Fixed.png");
  hearthstoneBoard = loadImage("/Images/Hearthstone Board.png");
  song = loadSound("/Sounds/Music.mp3");
  manaSound = loadSound("/Sounds/4 mana.mp3");
  unkilliaxSound = loadSound("/Sounds/Unkilliax.mp3");
  renoSound = loadSound("/Sounds/Reno.mp3");
  botSound = loadSound("/Sounds/Assembly bot.mp3");
  mana2 = loadImage("/Images/4 mana 2.png");
}

function setup() {
  let board = createCanvas(1200, 1200);
  board.parent = "board-holder";
  rectMode(CENTER);
  image(hearthstoneBoard, 0, 0, 1200, 1200);
  let button1 = createButton("Unkilliax");
  let button2 = createButton("4 Mana 7/7");
  let button3 = createButton("Factory Assemblybot");
  let button4 = createButton("Clear board without Reno");
  let button5 = createButton("Play Music");
  let button6 = createButton("Screenshot");
  button1.parent("buttonUnkilliax");
  button2.parent("buttonMana");
  button3.parent("buttonFactory");
  button4.parent("buttonClear");
  button5.parent("buttonMusic");
  button6.parent("buttonScreen");
  button1.mousePressed(unkilliaxFunction);
  button2.mousePressed(manaFunction);
  button3.mousePressed(factoryFunction);
  button4.mousePressed(clearScreen);
  button5.mousePressed(musicPlayer);
  button6.mousePressed(screenshotFunction);
}

function draw() {}

function unkilliaxFunction() {
  unkilliaxSound.play();
  image(unkilliax, random(0, 800), random(500, 700), 500, 500);
}

function manaFunction() {
  let manaSelector = [mana1, mana2];
  imagePicker = random(manaSelector);
  manaSound.play();
  image(imagePicker, random(0, 800), random(500, 700), 500, 500);
}

function factoryFunction() {
  botSound.play();
  image(factory, random(0, 800), random(500, 700), 500, 500);
}

function clearScreen() {
  image(hearthstoneBoard, 0, 0, 1200, 1200);
}

function mousePressed() {
  if (mouseX > 0 && mouseY > 0) {
    image(hearthstoneBoard, 0, 0, 1200, 1200);
    renoSound.play();
    renoDisplay();
  }
}

function renoDisplay() {
  cursorX = mouseX;
  cursorY = mouseY;
  image(reno, cursorX - 200, cursorY - 200, 500, 500);
}

function musicPlayer() {
  song.loop();
}

function screenshotFunction() {
  saveCanvas("myboard.png");
}
