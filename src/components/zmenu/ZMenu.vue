<template>
    <div class="z-menu">
        <Menu theme="light" active-name="1" width="200" mode="vertical" :accordion="this.accordion">
            <MenuItem name="1" class="z-only-out">
                <Icon type="ios-bug-outline" />
                首页
                <Badge :count="10" class-name="z-menu-badge"></Badge>
            </MenuItem>
            <MenuGroup title="BASE">
              <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-create-outline" />
                        表单页面
                    </template>
                    <MenuItem name="2-1" to="/form/base">基础表单</MenuItem>
                    <MenuItem name="2-2" to="/form/step">分步表单</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-list-box-outline" />
                        表格页面
                    </template>
                    <MenuItem name="3-1" to="/table/query">查询列表</MenuItem>
                    <MenuItem name="3-2" to="/table/base">标准列表</MenuItem>
                    <MenuItem name="3-3" to="/table/card">卡片列表</MenuItem>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="ios-paper-outline" />
                        详情页面
                    </template>
                    <MenuItem name="4-1" to="/page/base">基础详情</MenuItem>
                    <MenuItem name="4-2" to="/page/senior">高级详情</MenuItem>
                </Submenu>
            </MenuGroup>
            <MenuGroup title="RESULT">
                <MenuItem name="10" to="/result/success">
                    <Icon type="ios-checkmark-circle-outline" />
                    成功
                </MenuItem>
                <MenuItem name="11" to="/result/fail">
                    <Icon type="ios-close-circle-outline" />
                    失败
                </MenuItem>
                <Submenu name="12">
                    <template slot="title">
                        <Icon type="ios-alert-outline" />
                        异常页面
                    </template>
                    <MenuItem name="12-1" to="/error/404">404</MenuItem>
                    <MenuItem name="12-2" to="/error/500">500</MenuItem>
                </Submenu>
            </MenuGroup>
            <MenuGroup title="APPLICATION">
                <MenuItem name="6" to="/app/email">
                    <Icon type="ios-mail-outline" />
                    邮件
                </MenuItem>
            </MenuGroup>
            <MenuGroup title="DOCUMENT">
                <MenuItem name="8">
                    <Icon type="md-link" />
                    API
                </MenuItem>
                <Submenu name="9">
                    <template slot="title">
                        <Icon type="ios-flask-outline" />
                        组件文档
                    </template>
                    <MenuItem name="9-1">ZMenu</MenuItem>
                    <MenuItem name="9-2">BTree</MenuItem>
                </Submenu>
            </MenuGroup>
        </Menu>
    </div>
</template>

<script>
    export default {
        name: 'ZMenu',
        data () {
            return {
                accordion: true
            }
        }
    };
</script>

<style lang="css" scoped>
  .z-menu >>> .ivu-menu-vertical.ivu-menu-light:after,
  .z-menu >>> .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
    background-color: #fff;
    width: 0;
  }
  .z-menu >>> .ivu-menu-item-group-title {
    color: #869099;
    font-size: 15px;
    padding-left: 8px;
  }
  .z-menu .z-only-out {
    padding-left: 0;
  }
  .z-menu >>> .ivu-menu-submenu,
  .z-menu >>> .ivu-menu-item {
    color: #495057;
    border-radius: 4px;
    padding: 8px 10px;
    margin: 1px 0;
    width: 100%;
    position: relative;
  }
  .z-menu >>> .ivu-menu-submenu {
    padding: 0;
  }
  .z-menu >>> .ivu-menu-submenu .ivu-menu-submenu-title {
    padding: 8px 10px;
    border-radius: 4px;
  }
  .z-menu >>> .ivu-menu-submenu .ivu-menu-item:hover{
    background-color: #f5faff;
    border-radius: 4px;
    z-index: 3;
  }
  .z-menu >>> .ivu-menu-submenu .ivu-menu-submenu-title:hover,
  .z-menu >>> .ivu-menu-item:hover {
    color: #000;
    background-color: #e1effe;
  }
  .z-menu >>> .ivu-menu-opened {
    background: #f5faff;
  }
  .z-menu >>> .ivu-menu-opened .ivu-menu-submenu-title {
    color: #000;
    border-radius: 4px;
  }
  .z-menu >>> .ivu-menu-opened .ivu-menu .ivu-menu-item {
    padding-left: 20;
  }
  .z-menu >>> .ivu-menu-opened .ivu-menu-submenu-title {
    background: #e1effe;
    border-radius: 4px;
  }
  .z-menu >>> .ivu-menu-submenu .ivu-menu-submenu-title .ivu-icon {
    color: #0665d0;
    margin-right: 10px;
    font-weight: 500;
    font-size: 18px;
  }
  .z-menu >>> .ivu-menu-submenu .ivu-menu-submenu-title .ivu-icon-ios-arrow-down {
    font-size: 13px;
  }
  .z-menu >>> .ivu-menu-item .ivu-icon {
    color: #0665d0;
    font-size: 18px;
    margin-right: 10px;
    font-weight: 500;
  }
  .z-menu >>> .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #000;
    background-color: #e1effe;
  }
  .z-menu >>> .ivu-badge-count {
    background: #5cb85c !important;
  }
  .z-menu >>> .ivu-badge {
    position: absolute;
    right: 8px;
  }
</style>