var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./picture.png");
ASSET_MANAGER.queueDownload("./grass.png");

ASSET_MANAGER.downloadAll(function () {
  var canvas = document.getElementById("gameWorld");
  var ctx = canvas.getContext("2d");

  var animation = new Animation(gameEngine);
  gameEngine.init(ctx);
  gameEngine.addEntity(animation);
  gameEngine.start();
});
