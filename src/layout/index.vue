<template>
  <Layout>
    <Sider hide-trigger :width="menuWidth" class="z-slider" :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <div class="z-logo">
        <div class="z-logo-body ">
          <span>Zing Admin</span>
        </div>
      </div>
      <ZScrollBlock class="z-left-menu" :height="menuHeight">
        <ZMenu></ZMenu>
      </ZScrollBlock>
    </Sider>
    <Layout>
        <Header class="z-header" :style="{position: 'fixed', width: '100%', marginLeft: menuWidth + 'px', zIndex: 200}">
          <Button type="primary" class="z-button"  @click="hideLeftMenu()"><Icon type="md-menu" size="22"></Icon></Button>
          <Button type="primary" class="z-button"><Icon type="md-search" size="22" /> <span>搜索</span></Button>
          <div class="z-right">
            <Button type="primary" class="z-button">
              <Badge dot>
                <Icon type="md-notifications-outline" size="22"></Icon>
              </Badge>
            </Button>
            <Dropdown>
              <Button type="primary" class="z-button">
                  <Icon type="md-happy" size="20" />
                  <span>Admin</span>
                  <Icon type="ios-arrow-down"></Icon>
              </Button>
              <DropdownMenu slot="list">
                  <DropdownItem>驴打滚</DropdownItem>
                  <DropdownItem>炸酱面</DropdownItem>
                  <DropdownItem disabled>豆汁儿</DropdownItem>
                  <DropdownItem>冰糖葫芦</DropdownItem>
                  <DropdownItem divided>北京烤鸭</DropdownItem>
              </DropdownMenu>
          </Dropdown>
          </div>
        </Header>
        <Content class="z-content" :style="{marginLeft: menuWidth + 'px', marginTop: '70px'}">
          <router-view/>
        </Content>
        <Footer class="z-footer">
          <a href="#">zing 1.3 </a> @ 2018
          <div style="float:right">Crafted by zing</div>
        </Footer>
    </Layout>
  </Layout>
</template>

<script>
  import $ from 'jQuery'
  export default {
    mounted () {
      const self = this;
      this.resizeHeight();
      $(window).resize(function(){
        self.resizeHeight();
      });
    },
    methods: {
      resizeHeight(){
        const minHeight = $(window).height() - 70;
        this.menuHeight = minHeight;
        $('.z-left-menu').css({"min-height": minHeight});
      },
      hideLeftMenu() {
        if (this.menuIsShow) {
          this.menuIsShow = false;
          this.menuWidth = 0;
        } else {
          this.menuIsShow = true;
          this.menuWidth = 240;
        }
      }
    },
    data() {
      return {
        menuHeight: 100,
        menuWidth: 240,
        menuIsShow: true
      }
    }
  }
</script>

<style lang="css" scoped>
.z-logo {
  height: 70px;
  background: #0665d0!important;
}
.z-logo .z-logo-body {
  width: 100%;
  height: 70px;
  background-color:rgba(255,255,255,.1)!important;
  line-height: 70px;
  font-size: 20px;
  font-weight: 500;
}
.z-logo .z-logo-body span {
  margin-left: 25px;
  color: rgba(255,255,255,.75)!important;
}
.z-header {
  background-color: #0665d0;
  height: 70px;
  line-height: 70px;
}
.z-header .z-button {
  background: #0665d0;
  border: 0;
  outline: 0;
  box-shadow: none;
  padding: 0 10px;
  height: 32px;
  line-height: 1;
  margin-right: 10px;
}
.z-header .z-button:hover {
  background: #054d9e;
}
.z-header .z-right {
  float: right;
}
.z-header .z-button span {
  font-size: 13px;
  font-weight: 500;
  margin-left: 3px;
}
.z-header >>> .ivu-dropdown-rel {
  line-height: 0;
}
.z-slider {
  background-color: #fff;
}
.z-slider .z-left-menu {
  padding: 20px;
}
.z-content {
  background-color: #f4f6fa!important;
}
.z-footer {
  background-color: #f9fafc;
  font-size: 15px;
}
</style>
