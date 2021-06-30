import * as me from "https://melonjs-builds.s3.amazonaws.com/artifacts/master/2839/build/melonjs-module.js";

const game = {
  resources: [{ name: "bg", type: "image", src: "assets/images/bg.jpeg" }],

  onload: () => {
    if (
      !me.video.init(1280, 1280, {
        wrapper: "screen",
        scale: "auto",
        scaleMethod: "flex",
      })
    ) {
      alert("Your browser does not support HTML5 canvas.");
      return;
    }

    me.audio.init("mp3,ogg");
    debugger;

    me.loader.preload(game.resources, game.loaded.bind(game));
  },

  loaded: () => {
    debugger;
    me.input.bindKey(me.input.KEY.F, "toggleFullscreen");

    me.event.subscribe(me.event.KEYDOWN, (action, keyCode, edge) => {
      debugger;
      if (action !== "toggleFullscreen") return;
      if (!me.device.isFullscreen) {
        me.device.requestFullscreen();
      }
      me.device.exitFullscreen();
    });

    me.game.world.addChild(new me.ColorLayer("background", "#000000"));

    me.game.world.addChild(
      new me.Text(700, 100, {
        font: "Arial",
        size: 160,
        fillStyle: "#FFFFFF",
        textBaseline: "middle",
        textAlign: "center",
        text: "New Title!",
      })
    );
  },
};

me.device.onReady(() => {
  game.onload();
});
