<template>
    <canvas ref="canvas"></canvas>
  </template>

  <script>
  import * as PIXI from 'pixi.js';

  export default {
    mounted() {
      const app = new PIXI.Application({
        view: this.$refs.canvas,
        width: 1200,
        height: 150,
        backgroundColor: 0xffffff,
      });

      const text = new PIXI.Text('LET US INTRODUCE YOU, THE BEST!', {
        fontFamily: 'Arial',
        fontSize: 48,
        fill: 'brown',
      });
      text.anchor.set(0.5);
      text.position.set(app.screen.width / 2, app.screen.height / 2);
      app.stage.addChild(text);

      const speed = 2;

      app.ticker.add(() => {
        text.position.x += speed;
        if (text.position.x > app.screen.width + text.width / 2) {
          text.position.x = -text.width / 2;
        }
      });
    },
  };
  </script>
