<template>
  <div class="banner" :style="{ 'background-image': 'url(' + imgSrc + ')' }">
    <Button status="none" :to="to" :href="link" class="block-link">
      <div class="d-flex align-items-center">
        <div class="banner__text">
          <div>
            <slot />
          </div>
          <div class="banner__action">
            <Button
              tag="div"
              status="info"
              iconHide
              size="lg"
              :to="to"
              :href="link"
            >
              JOIN NOW
            </Button>
          </div>
        </div>
      </div>
    </Button>
  </div>
</template>

<script setup>
import { defineProps, defineAsyncComponent } from "vue";

const Button = defineAsyncComponent(() =>
  import("../../").then((m) => m.Button)
);

const props = defineProps({
  imgSrc: String,
  link: String,
  to: String,
});
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  transition: all 0.3s ease;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  align-items: center;
  background-size: cover;
  backdrop-filter: blur(2px);
  opacity: 0.9;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
    will-change: transform;
    transform: perspective(300px) rotateX(0deg) rotateY(0deg) scale(1.03);
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.2);
    transition: transform 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
  }
}
.block-link {
  width: 100%;
  text-decoration: none;
  display: flex;
  height: 100%;
  padding: 25px !important;
}
.banner__text {
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  p {
    font-size: 1.5em;
    padding: 0;
    margin: 0;
  }
}
</style>
