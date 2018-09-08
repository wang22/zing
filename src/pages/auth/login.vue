<template>
    <div>
        <div class="logo"><span>Zing</span>CMS</div>
        <Form ref="formCustom">
            <FormItem>
                <Input type="text" prefix="ios-contact-outline"></Input>
            </FormItem>
            <FormItem>
                <Input type="password" prefix="ios-key-outline"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" long>Submit</Button>
            </FormItem>
        </Form>
    </div>
</template>
<style lang="less" scoped>
.logo {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 600;
    color: #0665d0!important;
    text-align: center;
    span {
        color: #343a40!important;
    }
}
</style>
