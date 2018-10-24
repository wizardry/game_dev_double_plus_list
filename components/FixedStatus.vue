<template>
  <div class="fixedStatus">
    <dl>
      <dt>内容解放条件</dt>
      <dd>{{ jobName }}Lv{{ jobLeavel }} / {{ training }}</dd>
    </dl>
    <dl>
      <dt>ジャンル解放条件</dt>
      <dd>{{ jobName }}Lv{{ jobLeavel }}</dd>
    </dl>
  </div>
</template>
<script>
export default {
  computed: {
    jobName() {
      return 'aaa';
    },
    jobLeavel() {
      return 'bbb';
    },
    training() {
      return 'それな';
    }
  },
  mounted() {
    console.log(0)
  }
}
</script>

<style>
.fixedStatus {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 8px;
  background: rgba(0, 0, 0, .8);
  color: #fcfcfc;
  font-size: 12px;
  text-align: left;
}

dt {
  display: inline-block;
}
dd {
  display: inline-block;
}
</style>

