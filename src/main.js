import { Character } from "./entities/entities.js";
import { PlayScreen } from "./screens/play.js";

// quickly create a 640x480 canvas, returning a handle containing all kaboom functions
const k = kaboom();

// all kaboom functions are on this handle now
k.vec2();
k.scene();
k.add([k.text("oh hi", 32), k.pos(100, 100)]);

// options
kaboom({
  global: true, // import all kaboom functions to global namespace
  width: 1000, // width of canvas
  height: 700, // height of canvas
  canvas: document.getElementById("game"), // use custom canvas
  scale: 2, // pixel size (for pixelated games you might want smaller size with scale)
  clearColor: [0, 0, 1, 1], // background color (default is a checker board background)
  fullscreen: true, // if fullscreen
  crisp: true, // if pixel crisp (for sharp pixelated games)
  debug: false, // debug mode
});

// with 'global' flag, all kaboom functions are in global namespace
vec2();
scene();
add();

// if "debug" is enabled, your game gets some special key bindings
// - f1: toggle debug.inspect
// - f2: debug.clearLog()
// - f8: toggle debug.paused
// - f7: decrease debug.timeScale
// - f9: increase debug.timeScale
// - f10: debug.stepFrame()
// see more in the debug section below
