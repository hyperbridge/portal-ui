<template>
  <div class="landing-gradient-block">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: "GradientBlock",
  },
});
</script>

<style lang="scss" scoped>
@mixin gradient_center($start_color, $center_color, $end_color) {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#2989d8+50,5ea72b+50,5ea72b+50&0+0,1+45,1+53,0+100 */
  background: linear-gradient(
    to right,
    $start_color 0%,
    $center_color 50%,
    $end_color 100%
  ); /* Chrome10-25,Safari5.1-6 */
}

.landing-gradient-block {
  padding: 20px 60px;
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  @include gradient_center(
    rgba(94, 167, 43, 0),
    rgba(94, 167, 43, 1),
    rgba(94, 167, 43, 0)
  );
  &:before {
    content: "";
    position: absolute;
    height: 2px;
    top: 0;
    left: 0;
    width: 100%;
    @include gradient_center(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0)
    );
  }
}
</style>
