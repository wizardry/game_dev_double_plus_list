<template>
  <div class="dataList">
    <div v-if="type == 'masterpiece'">
      <div v-for=" d in data" :key="d.genre_id">
        <h3>{{ d.genre.name }} / 人気度: {{ popularityText(d.genre.popularity) }}</h3>
        <table>
          <tbody>
            <tr v-for="(content_id) in d.content_ids" :key="content_id">
              <td>{{getContent(content_id).name}}</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    }
  },
  computed: {
    title() {
      return 'title';
    },
    data() {
      return this.$store.getters['data/masterpieces']
    },
  },
  methods: {
    popularityText(popularityLv) {
      const popularityString = ['低', '中', '高'];
      return popularityString[popularityLv];
    },
    getContent(content_id) {
      return this.$store.getters['data/getContentById'](content_id);
    }
  },
  mounted() {
    this.data.forEach((d) => {
      console.log(d);
      d.content_ids.forEach(content => {
        console.log(this.getContent(content.id));
      });
    });
    console.log()
  }
}
</script>
<style>
</style>

