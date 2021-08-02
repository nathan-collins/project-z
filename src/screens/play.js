const PlayScreen = {
  init: () => {
    debugger;
  },

  onResetEvent: () => {
    me.game.reset();

    me.game.world.addChild(new BackgroundLayer("bg", 1));
  },
};

export { PlayScreen };
