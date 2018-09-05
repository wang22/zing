import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/IndexPage'
import BaseForm from '@/pages/form/BaseForm'
import StepForm from '@/pages/form/StepForm'
import QueryTable from '@/pages/table/QueryTable'
import BaseTable from '@/pages/table/BaseTable'
import BasePage from '@/pages/page/BasePage'
import FailResult from '@/pages/result/FailResult'
import SuccessResult from '@/pages/result/SuccessResult'
import Page404 from '@/pages/error/Page404'
import Page500 from '@/pages/error/Page500'
import AppEmail from '@/pages/app/Email'
import Login from '@/pages/auth/Login'

import IndexLayout from '@/layout/index'
import AuthLayout from '@/layout/auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/auth',
      name: 'AuthLayout',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login,
        }
      ]
    },
    {
      path: '/',
      name: 'IndexLayout',
      component: IndexLayout,
      children: [
        {
          path: '/',
          name: 'IndexPage',
          component: IndexPage,
        },
        {
          path: 'form/base',
          name: 'BaseForm',
          component: BaseForm
        },
        {
          path: 'form/step',
          name: 'StepForm',
          component: StepForm
        },
        {
          path: 'table/query',
          name: 'QueryTable',
          component: QueryTable
        },
        {
          path: 'table/base',
          name: 'BaseTable',
          component: BaseTable
        },
        {
          path: 'page/base',
          name: 'BasePage',
          component: BasePage
        },
        {
          path: 'result/fail',
          name: 'FailResult',
          component: FailResult
        },
        {
          path: 'result/success',
          name: 'SuccessResult',
          component: SuccessResult
        },
        {
          path: 'error/404',
          name: 'Page404',
          component: Page404
        },
        {
          path: 'error/500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'app/email',
          name: 'AppEmail',
          component: AppEmail
        }
      ]
    }
  ]
})
