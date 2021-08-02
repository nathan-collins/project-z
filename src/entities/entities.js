const Character = (me) => {
  debugger;
  me.entity.extend({
    init: (x, y) => {
      debugger;
      const settings = {};
      settings.image = "character";

      this._super(entity, "init", [x, y, settings]);
    },

    onCollision: () => {},

    update: () => {},
  });
};

export { Character };
