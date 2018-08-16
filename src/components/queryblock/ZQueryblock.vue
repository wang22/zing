<template>
    <Form ref="form" :label-width="90" class="flex-form">
        <slot :is="FormItem"></slot>
        <div :class="isFlex ? 'query-btn query-btn-right' : 'query-btn'" ref="opts">
            <Button style="margin-left: 16px" type="primary">搜索</Button>
            <Button style="margin-left: 8px">重置</Button>
            <Button ref="flexBtn" :style="{display: showFlexBtn}" style="margin-left: 8px" type="dashed" @click="flexForm()">{{flexButtonText}} <Icon :type="flexButtonIcon" /></Button>
        </div>
    </Form>
</template>

<script>
import $ from 'jQuery'
export default {
  name: 'ZQueryblock',
  data() {
      return {
          flexButtonIcon: "ios-arrow-down",
          flexButtonText: "展开",
          isFlex: false,
          showFlexBtn: 'display'
      }
  },
  methods: {
      flexForm(){
          if(this.isFlex){
            this.flexHide();
            this.isFlex = false;
          } else {
            this.flexShow();
            this.isFlex = true;
          }
      },
      flexShow(){
        let items = $(this.$refs.form.$el).find('.ivu-form-item');
        for(let i=0;i<items.length;i++){
            if(i > 1){
                $(items[i]).show();
            }
        }
        this.flexButtonIcon = "ios-arrow-up";
        this.flexButtonText = "收起";
      },
      flexHide(){
        let items = $(this.$refs.form.$el).find('.ivu-form-item');
        for(let i=0;i<items.length;i++){
            if(i > 1){
                $(items[i]).hide();
            }
        }
        this.flexButtonIcon = "ios-arrow-down";
        this.flexButtonText = "展开";
      }
  },
  mounted () {
      let items = $(this.$refs.form.$el).find('.ivu-form-item');
      if(items.length < 3){
        this.showFlexBtn = 'none'
        return ;
      }
      this.flexHide();
  }
}
</script>

<style lang="css" scoped>
.flex-form {
    display: inline-block;
    width: 100%;
    /* border:1px dashed #ddd;  */
    /* padding: 20px 20px 0 20px;  */
    /* margin-bottom: 20px; */
    /* border-radius: 4px; */
}
.flex-form .query-btn {
    display: inline-block;
    width: 33%;
}
.flex-form .query-btn-right {
    /* text-align: right; */
    padding-left: 75px;
}
.flex-form >>> .ivu-form-item {
    display: inline-block;
    width: 33%;
}
</style>
