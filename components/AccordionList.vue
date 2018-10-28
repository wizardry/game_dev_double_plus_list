<template>
  <div class="accordionList" :class="{accordionListCurrent: isOpen}">
    <header @click="contentToggle">{{ label }} / {{isOpen}}</header>
    <div v-show="isOpen" class="accordionListContent">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: { type: String, required: true },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    contentToggle() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>
<style lang="scss" scoped="">
.accordionList {
  header {
    position: relative;
    padding: 8px 16px;
    border-bottom: 1px solid #ccc;

    &::after {
      content: '';
      border-right: 1px solid #6f6f6f;
      border-top: 1px solid #6f6f6f;
      position: absolute;
      transform: translateY(-50%) rotate(135deg);
      right: 16px;
      top: 50%;
      width: 10px;
      height: 10px;
      transition: transform .3s ease;
    }

  }

  &.accordionListCurrent {
    border-bottom: 1px solid #ccc;

    header {
      &::after {
        content: '';
        transform:rotate(-45deg);
      }
    }
  }

  .accordionListContent {
    padding: 16px;
  }
}
</style>

