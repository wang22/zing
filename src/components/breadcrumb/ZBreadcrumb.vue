<template>
    <div class="z-justify">
        <Breadcrumb style="float:right">
            <BreadcrumbItem to="/">Home</BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
        <h1>高级表单</h1>
        <p>高级表单常见于一次性输入和提交大批量数据的场景。</p>
    </div>
</template>

<style>
.z-justify {
  background-color: #f9fafc!important;
  border-bottom: 1px solid #e8e8e8;
  height: 100px;
  padding:20px 50px;
}
.z-justify h2 {
  margin-top: 5px;
}
.z-justify p {
  margin-top: 5px;
}
</style>


<script>
import { oneOf, getStyle, deepCopy, getScrollBarSize } from 'iview/src/utils/assist';

export default {
  name: 'ZTable',
  props: {
    breadcrumb: {
        type: Array,
        default () {
            return [];
        }
    },
    title: {
        type: String,
        default: ""
    },
    smallTitle: {
        type: String,
        default: ""
    }
  }
}
</script>