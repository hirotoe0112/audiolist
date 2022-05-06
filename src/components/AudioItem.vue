<template>
  <div class="item">
    <div class="filename">{{ filename }}</div>
    <div class="path">{{ path }}</div>
  </div>
</template>

<script>
  export default{
    props:{
      filename: String,
      path: String
    }
  }
</script>

<style scoped>
div.item{
  border:1px solid #cccccc;
  padding:5px;
  margin-bottom: 1px;
}
div.filename{
  font-size: 1.1em;
  font-weight: bold;
  word-break: break-all;
}
div.path{
  font-size: 0.8em;
  word-break: break-all;
}
</style>