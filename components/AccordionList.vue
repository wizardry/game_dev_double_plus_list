<template>
  <div class="accordionList">
    <header @click="contentToggle">{{ label }} / {{isOpen}}</header>
    <div v-show="isOpen">
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
<style lang="scss">
</style>

