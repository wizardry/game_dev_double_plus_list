<template>
  <section>
    <div class="officeFilterBox">
      <filter-selector type="offices"/>
    </div>
    <hr />
    <div>
      <accordion-list
        label="傑作一覧"
      >
        <ul class="filterSelectorList">
          <li><filter-selector type="genres" /></li>
          <li><filter-selector type="contents" /></li>
        </ul>
        <data-list type="masterpiece" />
      </accordion-list>
      <accordion-list
        label="内容解放方法"
      >
        <filter-selector type="jobs"/>
        <data-list type="releaseContents" />
      </accordion-list>
      <fixed-status/>
    </div>
  </section>
</template>

<script>
import FixedStatus from '~/components/FixedStatus.vue'
import AccordionList from '~/components/AccordionList.vue'
import DataList from '~/components/DataList.vue'
import JobSelector from '~/components/JobSelector.vue'
import FilterSelector from '~/components/FilterSelector.vue'
import OfficeFilter from '~/components/OfficeFilter.vue'
import PopularityFilter from '~/components/PopularityFilter.vue'

export default {
  components: {
    FixedStatus,
    AccordionList,
    OfficeFilter,
    DataList,
    FilterSelector,
    JobSelector,
    PopularityFilter,
  },
  mounted() {
    this.$store.commit('data/init');
  }
}
</script>

<style lang="scss">
select {
  padding: 16px;
  width: 100%;
  display: block;
}

.officeFilterBox {
  padding: 16px;
  background: url("~assets/images/top.gif");
  background-size: cover;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.filterSelectorList {
  padding: 0;
  margin: 0 -8px;
  list-style: none;
  display: flex;

  li {
    width: 50%;
    margin:0 8px;

  }
}


.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

