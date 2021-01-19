class Animation {
  constructor(game) {
    Object.assign(this, { game });
    this.spritesheet = ASSET_MANAGER.getAsset("./picture.png");

    this.animations = [];

    // x, y, width, height, frameCount, frameDuration, spacing, reverse, loop
    this.animations.push(
      new Animator(this.spritesheet, 0, 0, 320, 250, 3, 0.2, 40, false, true)
    );
    this.animations.push(
      new Animator(this.spritesheet, 0, 0, 320, 250, 3, 0.25, 40, false, true)
    );
    this.animations.push(
      new Animator(this.spritesheet, 0, 0, 320, 250, 3, 0.5, 40, false, true)
    );
    this.animations.push(
      new Animator(this.spritesheet, 0, 0, 320, 250, 3, 0.4, 40, false, true)
    );
  }

  update() {}

  draw(ctx) {
    this.animations[0].drawFrame(this.game.clockTick, ctx, 50, 30, 1);
    this.animations[1].drawFrame(this.game.clockTick, ctx, 350, 30, 0.5);
    this.animations[2].drawFrame(this.game.clockTick, ctx, 450, 55, 0.75);
    this.animations[3].drawFrame(this.game.clockTick, ctx, 720, 35, 0.5);
  }
}

// x = 343
// y = 300
