<template>
  <div>
      <ZBreadcrumb></ZBreadcrumb>
      <ZContent>
        <ZBlock>
            <ZQueryblock>
                <FormItem label="请输入年龄">
                    <Input placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="姓名">
                    <Input placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="请输入城市">
                    <Input placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="国家">
                    <Select>
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
                <FormItem label="城市">
                    <Input placeholder="Enter something..."></Input>
                </FormItem>
            </ZQueryblock>
            <br>
            <Button type="primary"><Icon type="md-add" size="13" /> 新建</Button>
            <Button >Loading</Button>
            <Dropdown>
                <Button>
                    批量操作
                    <Icon type="ios-arrow-down"></Icon>
                </Button>
                <DropdownMenu slot="list">
                    <DropdownItem>批量审批</DropdownItem>
                    <DropdownItem>批量删除</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <ZTable border ref="selection" :columns="columns4" :data="data1"></ZTable>
            <Page :total="100" style="margin-top:20px; float:right" show-sizer show-elevator />
        </ZBlock>
      </ZContent>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
      return {
          columns4: [
              {
                  type: 'selection',
                  width: 60,
                  align: 'center'
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
              }
          ]
      }
  }
}
</script>