
function preload(){
  slap = loadImage ('assets/SLAP.jpg')
}

const noise = new Tone.Noise("white").start();
const filter = new Tone.Filter({
    type: "lowpass",
    frequency: 1000, 
});
const noiseEnvelope = new Tone.AmplitudeEnvelope({
    attack: 0.01,
    decay: 0.1,
    sustain: 0,
    release: 0.1,
}).toDestination();
const lfo = new Tone.LFO({
    type: "sine",
    min: 500,
    max: 1500,
    frequency: "8n", 
}).start();
const oscillator = new Tone.Oscillator({
    type: "sine",
    frequency: 60, 
}).start();
const oscEnvelope = new Tone.AmplitudeEnvelope({
    attack: 0.01,
    decay: 0.2,
    sustain: 0,
    release: 0.1,
}).toDestination();


noise.connect(noiseEnvelope).connect(filter);
lfo.connect(filter.frequency);
oscillator.connect(oscEnvelope);

// Function to play the slap sound
function mousePressed() {
   
  Tone.start(); 
  noiseEnvelope.triggerAttackRelease("8n");
  oscEnvelope.triggerAttackRelease("8n");
}

function setup() {
  createCanvas(400, 400); 
}

function draw() {
  if (mouseIsPressed ===true){
    background(slap);
  } else if (mouseIsPressed === false){
    background (240);
    text ('press and hold to slap this dude in his dumb face', 140, height/3);
  }
}

   



  
