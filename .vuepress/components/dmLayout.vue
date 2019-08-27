<template>
  <div>
    <Layout/>
  </div>
</template>

<script type='text/ecmascript-6'>
  import copy from 'copy-text-to-clipboard';
  export default {
    data() {
      return {}
    },
    mounted() {
     var pres = document.querySelectorAll("pre.language-js");
     pres = Array.from(pres);
     pres.forEach(function(pre){
       copy("123")
     })
    }
  }
</script>

<style lang='scss' scoped='' type='text/css'>

</style>