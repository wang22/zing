<template>
    <Table 
        :data="this.data"
        :columns="this.columns"
        :size="this.size"
        :width="this.width"
        :height="this.height"
        :stripe="this.stripe"
        :border="this.border"
        :showHeader="this.showHeader"
        :highlightRow="this.highlightRow"
        :rowClassName="this.rowClassName"
        :context="this.context"
        :noDataText="this.noDataText"
        :noFilteredDataText="this.noFilteredDataText"
        :disabledHover="this.disabledHover"
        :loading="this.loading" 
        class="z-table">
    </Table>
</template>

<style lang="css" scoped>
.z-table {
  border: 0;
  margin-top: 20px;
}
.z-table >>> .ivu-table:after {
  width: 0;
}
.z-table >>> .ivu-table-border td, .ivu-table-border th {
  border-right: 0;
}
.z-table >>> .ivu-table th {
  background-color: #fff;
  font-size: 15px;
  height: 50px;
  font-weight: 500;
  color: #495057;
  border-bottom-width: 2px;
}
.z-table >>> .ivu-table th {
  border: 0;
}
.z-table >>> .ivu-table-header {
  border-top: 1px solid #e8eaec;
  border-bottom: 2px solid #e8eaec;
}
.z-table >>> .ivu-table-row-hover td{
  background-color: #eff2f8;
}
.z-table >>> .ivu-checkbox .ivu-checkbox-inner {
  border-color: #e6ebf4;
  background-color: #e6ebf4;
}
.z-table >>> .ivu-checkbox-checked .ivu-checkbox-inner{
  background-color: #0060d0;
  border-color: #0060d0;
}
</style>


<script>
import { oneOf, getStyle, deepCopy, getScrollBarSize } from 'iview/src/utils/assist';

export default {
  name: 'ZTable',
  props: {
    data: {
        type: Array,
        default () {
            return [];
        }
    },
    columns: {
        type: Array,
        default () {
            return [];
        }
    },
    size: {
        validator (value) {
            return oneOf(value, ['small', 'large', 'default']);
        },
        default () {
            return this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
        }
    },
    width: {
        type: [Number, String]
    },
    height: {
        type: [Number, String]
    },
    stripe: {
        type: Boolean,
        default: false
    },
    border: {
        type: Boolean,
        default: false
    },
    showHeader: {
        type: Boolean,
        default: true
    },
    highlightRow: {
        type: Boolean,
        default: false
    },
    rowClassName: {
        type: Function,
        default () {
            return '';
        }
    },
    context: {
        type: Object
    },
    noDataText: {
        type: String
    },
    noFilteredDataText: {
        type: String
    },
    disabledHover: {
        type: Boolean
    },
    loading: {
        type: Boolean,
        default: false
    }
}
}
</script>