<template>
  <div class="tabs" :class="`tabs--${styled ? 'styled' : 'default'}`">
    <nav v-if="!disableMenu" class="tabs__nav">
      <slot name="nav">
        <ul class="tabs__list">
          <li
            v-for="tab in dynamicTabs"
            :key="tab.id"
            class="tabs__list-item"
            :class="'layer' + tab.id"
          >
            <a
              :aria-selected="activeTabData == tab.id"
              class="list-item__link"
              :class="{
                                'active': activeTabData == tab.id,
                                'locked': isTabLocked(tab.id),
                            }"
              role="tab"
              @click.prevent="tabClick(tab.id)"
            >{{ tab.name }}</a>
          </li>
        </ul>
      </slot>
    </nav>
    <div class="tabs__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabNames: {
      type: Array,
      default: () => []
    },
    setActiveTab: [Number, String],
    tabText: String,
    activeTabProp: [Number, String],
    lockedStep: Number,
    lockedTab: Number,
    styled: Boolean,
    disableMenu: Boolean
  },
  data() {
    return {
      tabs: [],
      activeTabData: 1
    };
  },
  computed: {
    dynamicTabs() {
      return this.tabNames
        ? this.tabNames.map((name, index) => ({ id: index + 1, name }))
        : this.tabs.map((tab, index) => ({
            name: (this.tabText ? `${this.tabText} ` : "TAB ") + (index + 1),
            id: index + 1
          }));
    },
    activeTab() {
      const { setActiveTab, activeTabProp, activeTabData } = this;
      return setActiveTab == null
        ? activeTabProp == null
          ? activeTabData
          : activeTabProp
        : setActiveTab;
    },
    activeStyle() {
      return this.styled ? "--styled" : "--default";
    }
  },
  mounted() {
    this.tabs = this.$children;
  },
  methods: {
    isTabLocked(index) {
      const { lockedStep, lockedTab } = this;
      return (
        (lockedTab != null && lockedTab == index) ||
        (lockedStep != null && !(index < lockedStep))
      );
    },
    tabClick(index) {
      this.activeTabData = index;
      this.$emit("click", index);
    }
  },
  provide() {
    const tabData = {};
    Object.defineProperty(tabData, "activeTab", {
      enumerable: true,
      get: () => this.activeTab
    });
    return { tabData };
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
}

.tabs__list {
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
}

.tabs__list-item {
  .list-item__link {
    cursor: pointer;
    display: block;
    font-size: 15px;
    padding: 6px 15px;
    text-align: center;
    position: relative;
  }
}

.tabs__content {
  position: relative;
  // overflow: hidden;
}

.tabs--default {
  .tabs__list {
    justify-content: center;
  }
  .tabs__list-item {
    margin: 0 15px;
  }
  .list-item__link {
    border-bottom: 2px solid transparent;
    color: rgba(255, 255, 255, 0.65);
    &:hover {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.9);
    }
    &.active {
      border-color: rgb(94, 96, 155);
    }
    &.locked {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  .tabs__content {
    margin-top: 15px;
  }
}

.tabs--styled {
  .tabs__nav {
    position: relative;
    padding-bottom: 15px;
  }
  .tabs__nav:after {
    content: "";
    position: absolute;
    left: 0;
    top: 32px;
    right: 0;
    height: 15px;
    background: #3e3e5c;
    z-index: 10;
    border-radius: 0 8px 0 0;
  }
  .tabs__content {
    padding: 15px 10px 10px;
    margin-top: -5px;
    border-radius: 0 0 10px 10px;
    background: #3e3e5c;
  }
  .tabs__list-item {
    margin-right: 20px;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    &:not(:first-child) {
      .list-item__link:before {
        content: "";
        position: absolute;
        height: 23px;
        bottom: 0;
        right: calc(100% - 2px);
        border: 15px solid transparent;
        border-bottom: 15px solid #393955;
        border-right: 15px solid #393955;
        -webkit-filter: drop-shadow(-5px 0px 3px rgba(0, 0, 0, 0.15));
        filter: drop-shadow(-5px 0px 3px rgba(0, 0, 0, 0.1));
      }
    }
    .list-item__link {
      border-radius: 8px 8px 0 0;
      background-color: #393955;
      color: #606079;
      &.active {
        background-color: #3e3e5c;
        color: #fff;
        z-index: 8;
        &:after {
          border-bottom-color: #3e3e5c;
          border-left-color: #3e3e5c;
        }
        &:before {
          border-bottom-color: #3e3e5c;
          border-right-color: #3e3e5c;
        }
      }
      &:after {
        content: "";
        position: absolute;
        height: 23px;
        bottom: 0;
        left: calc(100% - 2px);
        border: 15px solid transparent;
        border-bottom: 15px solid #393955;
        border-left: 15px solid #393955;
        -webkit-filter: drop-shadow(5px -2px 3px rgba(0, 0, 0, 0.15));
        filter: drop-shadow(5px -2px 3px rgba(0, 0, 0, 0.14));
      }
    }
  }
  .tabs__content {
    background-color: #3e3e5c;
    border-radius: 0 5px 5px 5px;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
    padding: 15px;
  }
  .layer1 a {
    z-index: 7;
  }
  .layer2 a {
    z-index: 6;
  }
  .layer3 a {
    z-index: 5;
  }
  .layer4 a {
    z-index: 4;
  }
}

@keyframes rotate-in {
  0% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0);
  }
}
</style>

