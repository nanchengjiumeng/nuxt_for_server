<template>
  <div>
    <Layout/>
  </div>
</template>

<script type='text/ecmascript-6'>
 
  
  export default {
    data() {
      return {}
    },
    updated() {
      var pres = document.querySelectorAll(".language-js.extra-class");
      var _this = this;
      
      pres.forEach(function(pre, item) {
        pre.addEventListener("click", function(e) {
          var text = pre.innerText;
          _this.$copy(text);
          _this.$message.info('代码复制成功');
        })
      })
    }
  }
</script>

<style lang='scss' scoped='' type='text/css'>

</style>