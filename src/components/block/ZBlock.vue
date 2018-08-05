<template>
    <div class="z-block">
        <div class="z-block-body"><slot></slot></div>
    </div>
</template>

<script>
    export default {
        name: 'ZBlock',
        mounted () {
        }
    };
</script>

<style lang="less" scoped>
.z-block {
  display: inline-block;
  background: #fff;
  border-radius: 3px;
  padding-bottom: 20px;
  width: 100%;
  .z-block-body {
    padding: 20px;
  }
}
</style>