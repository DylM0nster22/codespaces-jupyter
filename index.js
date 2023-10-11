// index.js

const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World; 
const Bodies = Matter.Bodies;

const engine = Engine.create();

const render = Render.create({
  element: document.body,
  engine: engine 
});

const ball = Bodies.circle(400, 0, 60, {
  render: {
    fillStyle: 'red'
  }
});