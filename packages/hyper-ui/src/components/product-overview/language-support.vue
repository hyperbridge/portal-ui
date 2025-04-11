<template>
  <Block
    title="Language Support"
    :noGutter="true"
    :bgGradient="true"
    :onlyContentBg="true"
  >
    <template #heading-bar>
      <i class="fas fa-laptop title-icon" />
    </template>
    <table class="language-support__table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Interface</th>
          <th>Audio</th>
          <th>CC</th>
        </tr>
      </thead>
      <tbody>
        <transition-group
          v-for="(lang, index) in orderLang"
          v-if="lang.show === 'default' || show || index < 5"
          :key="index"
          name="fadeLeft"
          tag="tr"
          :class="['tr-order-' + lang.order]"
        >
          <template v-for="(value, property) in lang">
            <td v-if="property === 'name'" :key="property">
              {{ value }}
            </td>
            <td v-else-if="property !== 'code'" :key="property2">
              <i
                v-if="value"
                class="fas"
                :class="`fa-${optionsIcons[property]}`"
              />
            </td>
          </template>
        </transition-group>
        <tr v-if="languages.length > 5" style="background: transparent">
          <td colspan="10" class="text-center">
            <transition v-if="!show" name="fade">
              <div class="language-support__toggle-btn" @click="toggleLang">
                Show {{ languages.length - 5 }} more languages
                <i class="fas fa-angle-double-down" />
              </div>
            </transition>
            <transition v-else name="fade">
              <div class="language-support__toggle-btn" @click="toggleLang">
                Hide languages <i class="fas fa-angle-double-up" />
              </div>
            </transition>
          </td>
        </tr>
      </tbody>
    </table>
  </Block>
</template>
<script setup>
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import Block from "~/components/Block.vue";

const props = defineProps({
  languages: {
    type: Array,
    required: true,
  },
});

const store = useStore();
const optionsIcons = {
  subtitles: "closed-captioning",
  interface: "language",
  fullAudio: "volume-off",
};
const show = ref(false);
const langList = ref([]);
const userLang = ref("");

const orderLang = computed(() =>
  langList.value.sort((a, b) => a.order - b.order)
);

onMounted(() => {
  const lang =
    store.state.application.account && store.state.application.account.meta
      ? store.state.application.account.meta.language
      : { name: "English" };
  const arr = props.languages;

  userLang.value = lang.name.toLowerCase();
  arr.forEach((el) => {
    if (el.name) {
      if (userLang.value.includes(el.name.toLowerCase())) {
        el.order = 0;
        el.show = "default";
        langList.value.push(el);
      } else {
        el.order = 1;
        langList.value.push(el);
      }
    } else {
      if (el.name === "English") {
        el.order = 0;
        el.show = "default";
      }
      langList.value.push(el);
    }
  });
});

const toggleLang = () => {
  show.value = !show.value;
};
</script>
<style lang="scss" scoped>
.language-support__table {
  width: 100%;
  th:first-child {
    width: 60%;
  }
  th:not(:first-child),
  td:not(:first-child) {
    text-align: center;
    width: 15%;
  }
  th:not(:first-child):not(:last-child) {
    padding: 0 5px;
  }
  tbody tr:nth-child(even) {
    background-color: #353551;
  }
  tr {
    &.hide-tr {
      display: none;
    }
  }
}
.language-support__toggle-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 5px 10px;
  position: relative;
  margin-top: 5px;
  transition: all 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -20px;
    height: 1px;
    width: 20px;
    background: #fff;
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: -20px;
    height: 1px;
    width: 20px;
    background: #fff;
  }
  i {
    margin-left: 10px;
  }
  &:hover {
    cursor: pointer;
    transition: all 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
    padding: 5px 20px;
  }
}
</style>
