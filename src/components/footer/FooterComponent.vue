<template>
  <!-- Footer 2 - Bootstrap Brain Component -->
  <footer class="footer">

    <!-- Widgets - Bootstrap Brain Component -->
    <WidgetsComponentVue />

    <!-- Copyright - Bootstrap Brain Component -->
    <CopyrightComponent />

  </footer>
</template>

<script>
  import CopyrightComponent from './CopyrightComponent.vue';
  import WidgetsComponentVue from './WidgetsComponent.vue';
  import * as PIXI from 'pixi.js';

  export default {
    components: {
      CopyrightComponent,
      WidgetsComponentVue
    },

    mounted() {
      const app = new PIXI.Application({
        view: this.$refs.pixiContainer,
        width: 300, 
        height: 300, 
        backgroundColor: 0xFFFFFF,
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