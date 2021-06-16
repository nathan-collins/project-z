import * as me from "https://melonjs-builds.s3.amazonaws.com/artifacts/master/2839/build/melonjs-module.js";
me.device.onReady(() => {
  if (!me.video.init(1024, 768, { scaleMethod: "flex" })) {
    alert("Your browser does not support HTML5 canvas.");
    return;
  }

  me.game.world.addChild(new me.ColorLayer("background", "#000000"));

  me.game.world.addChild(
    new me.Text(609, 201, {
      font: "Arial",
      size: 160,
      fillStyle: "#FFFFFF",
      textBaseline: "middle",
      textAlign: "center",
      text: "New Title!",
    })
  );
});
