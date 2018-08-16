<template>
  <div>
      <ZBreadcrumb></ZBreadcrumb>
      <ZContent>
        <ZBlock>
            <ul class="task-list">
                <li>
                    <small>我的待办</small>
                    <h4>8个任务</h4>
                </li>
                <li>
                    <small>我的待办</small>
                    <h4>8个任务</h4>
                </li>
                <li>
                    <small>我的待办</small>
                    <h4>8个任务</h4>
                </li>
            </ul>
        </ZBlock>
        <ZBlock>
            <RadioGroup type="button">
                <Radio label="all">全部</Radio>
                <Radio label="ing">进行中</Radio>
                <Radio label="wait">等待中</Radio>
            </RadioGroup>
            <Input suffix="ios-search" placeholder="Enter text" style="width: 200px;margin-left: 15px;" />
            <ZTable border ref="selection" :columns="columns4" :data="data1" :show-header="false"></ZTable>
            <Page :total="100" style="margin-top:20px; float:right" show-sizer show-elevator />
        </ZBlock>
      </ZContent>
  </div>
</template>

<style scoped lang="css">
.task-list li{
    list-style: none;
    display: inline-block;
    width: 33%;
    text-align: center;
    border-right: 1px solid #e8e8e8;
}
.task-list li:last-child {
    border-right: 0;
}
.task-list li small {
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 22px;
}
.task-list li h4 {
    color: rgba(0,0,0,.85);
    font-size: 24px;
    line-height: 32px;
    font-weight: normal;
}
</style>


<script>
export default {
  name: 'HelloWorld',
  data () {
      return {
          columns4: [
              {
                title: 'Status',
                key: 'status',
                render: (h, params) => {
                    return h('Avatar', {
                        props: {
                            shape: 'square',
                            src: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png'
                        }
                    });
                },
                width: 70
              },
              {
                  title: 'Name',
                  key: 'name'
              },
              {
                  title: 'Age',
                  key: 'age'
              },
              {
                  title: 'Address',
                  key: 'address'
              }
          ],
          data1: [
              {
                  name: 'John Brown',
                  age: 18,
                  address: 'New York No. 1 Lake Park',
                  date: '2016-10-03'
              },
              {
                  name: 'Jim Green',
                  age: 24,
                  address: 'London No. 1 Lake Park',
                  date: '2016-10-01'
              },
              {
                  name: 'Joe Black',
                  age: 30,
                  address: 'Sydney No. 1 Lake Park',
                  date: '2016-10-02'
              },
              {
                  name: 'Joe Black',
                  age: 30,
                  address: 'Sydney No. 1 Lake Park',
                  date: '2016-10-02'
              },
              {
                  name: 'Joe Black',
                  age: 30,
                  address: 'Sydney No. 1 Lake Park',
                  date: '2016-10-02'
              },
              {
                  name: 'Joe Black',
                  age: 30,
                  address: 'Sydney No. 1 Lake Park',
                  date: '2016-10-02'
              }
          ]
      }
  }
}
</script>