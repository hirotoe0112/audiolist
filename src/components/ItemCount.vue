<template>
  <div>
    search results：{{ filescount }} items
  </div>
</template>

<script>
  export default{
    props:{
      filescount: Number
    }
  }
</script>

<style scoped>
</style>