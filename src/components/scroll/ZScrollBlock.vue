<template>
  <div ref="sc">
      <slot></slot>
  </div>
</template>

<script>
  import $ from 'jQuery'

  export default {
    name: 'ZBlock',
    props: {
      height: {
        type: Number,
        default: 0
      }
    },
    mounted () {
      require('jquery-slimscroll')
      this.showScroll(this.height);
    },
    methods: {
       showScroll: function(scHeight){
         $(this.$refs.sc).slimScroll({
           height: scHeight + 'px',
           color: "#000",
           size: "6px",
           opacity: .35,
           wheelStep: 15,
           distance: "2px",
           railVisible: !1,
           railOpacity: 1
         });
       }
    },
    watch: {
      height: function(newHeight,oldHeight){
        this.showScroll(newHeight);
      }
    }
  };
</script>