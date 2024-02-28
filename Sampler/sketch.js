
let D


let sounds = new Tone.Players({

  Falcon: "assets/Falcon.mp3",
  Frog: "assets/Frog.mp3",
  Flow:"assets/Flow.mp3",
  Reindeer:"assets/Reindeer.mp3"


});

let delAmt= new Tone.FeedbackDelay("8n", 0.5); //adds delay
let crusher = new Tone.BitCrusher(8);
let chorusAmt= new Tone.Chorus(4,2.5,0.5);
let chorusSlider;
let eightBitSlider;
let delaySlider;
let button1,button2,button3,button4;


sounds.connect(delAmt);
//delAmt.connect(crusher);
delAmt.toDestination();


function setup() {
  createCanvas(400, 400);
  
  button1= createButton('Falcon');
  button1.position(85,150);
  button1.mousePressed(() => sounds.player("Falcon").start());

  button2= createButton('Frog');
  button2.position(205,150);
  button2.mousePressed(() => sounds.player("Frog").start());

  
  button3= createButton('Flow');
  button3.position(205,100);
  button3.mousePressed(() => sounds.player("Flow").start());

  
  button4= createButton('Reindeer');
  button4.position(85,100);
  button4.mousePressed(() => sounds.player("Reindeer").start());

  delaySlider = createSlider(0,1,0,0.05);
  delaySlider.position(120,200);
  delaySlider.mouseMoved(()=>delAmt.delayTime.value = delaySlider.value());

  /*eightBitSlider=createSlider(0,1,0,0.05);
  eightBitSlider.position(120,250);
  eightBitSlider.mouseMoved(()=>crusher.bits.value=eightBitSlider.value());
  
  chorusSlider=createSlider(0,1,0,0.05);
  chorusSlider.position(120,300);
  chorusSlider.mouseMoved(()=>chorusAmt.feedback=chorusSlider.value());
  */
}

function draw() {
  background(220);
}
