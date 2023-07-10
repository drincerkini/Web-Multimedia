<template>
    <canvas ref="pixiContainer"></canvas>
  </template>

  <script>
  import * as PIXI from 'pixi.js';

  export default {
    mounted() {
      const app = new PIXI.Application({
        view: this.$refs.pixiContainer,
        width: 120, 
        height: 100, 
        backgroundColor: 0xffffff,
      });

      const sprite = PIXI.Sprite.from(
        'https://content.kaspersky-labs.com/se/com/content/en-global/images/product-icon-ksos/product-icon-ksos.png'
      );
      sprite.anchor.set(0.5);

      sprite.position.set(app.screen.width / 2, app.screen.height / 2);

      const maxDimension = Math.max(sprite.width, sprite.height);
      const scaleFactor = Math.min(app.screen.width, app.screen.height) / maxDimension;
      sprite.scale.set(scaleFactor);

      app.stage.addChild(sprite);

      app.ticker.add(() => {
        sprite.rotation += 0.01;
      });
    },
  };
  </script>