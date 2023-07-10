<template>
    <canvas ref="canvas"></canvas>
  </template>

  <script>
  import * as PIXI from 'pixi.js';

  export default {
    mounted() {
      const app = new PIXI.Application({
        view: this.$refs.canvas,
        width: 600,
        height: 150,
        backgroundColor: 0xf8f9fa,
      });

      const text = new PIXI.Text('Why Choose Us?', {
        fontFamily: 'Times New Roman',
        fontSize: 48,
        fill: 'black',
      });
      text.anchor.set(0.5);
      text.position.set(app.screen.width / 2, app.screen.height / 2);
      app.stage.addChild(text);

      const speed = 3;

      app.ticker.add(() => {
        text.position.x += speed;
        if (text.position.x > app.screen.width + text.width / 2) {
          text.position.x = -text.width / 2;
        }
      });
    },
  };
  </script>
