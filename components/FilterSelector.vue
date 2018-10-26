<template>
  <div class="FilterSelector">
    <select @change="onChange">
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >{{ option.label }}</option>
    </select>
  </div>
</template>
<script>
const offices = [
  { id: 0, name: '小規模オフィス' },
  { id: 1, name: '中規模オフィス' },
  { id: 2, name: '大規模オフィス' },
];
export default {
  props: {
    type: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      selectedOffice: this.$store.state.filter.selectedOffice,
    }
  },
  computed: {
    options() {
      console.log('a');
      const options = {
        contents: this.$store.getters['data/filterContentByOfficeLv'].map((content)=> {
          return { name: content.content.name, id:content.content_id };
        }),
        genres: this.$store.state.data.genres,
        jobs: this.$store.state.data.jobs,
        trainings: this.$store.state.data.trainings,
        offices,
      };

      if (!Array.isArray(options[this.type])) {
        return [];
      }
      return options[this.type].map((state) => {
        return {
          value: state.id,
          label: state.name
        };
      });
    }
  },
  methods: {
    onChange(e) {
      this.$store.commit('filter/change', {value: parseInt(e.target.value), type: this.type});
    },
  },

}
</script>
<style>
</style>

