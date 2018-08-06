import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/IndexPage'
import BaseForm from '@/pages/form/BaseForm'
import StepForm from '@/pages/form/StepForm'
import QueryTable from '@/pages/table/QueryTable'
import BaseTable from '@/pages/table/BaseTable'
import CardTable from '@/pages/table/CardTable'
import BasePage from '@/pages/page/BasePage'
import SeniorPage from '@/pages/page/SeniorPage'
import FailResult from '@/pages/result/FailResult'
import SuccessResult from '@/pages/result/SuccessResult'
import Page404 from '@/pages/error/Page404'
import Page500 from '@/pages/error/Page500'
import AppEmail from '@/pages/app/Email'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/form/base',
      name: 'BaseForm',
      component: BaseForm
    },
    {
      path: '/form/step',
      name: 'StepForm',
      component: StepForm
    },
    {
      path: '/table/query',
      name: 'QueryTable',
      component: QueryTable
    },
    {
      path: '/table/base',
      name: 'BaseTable',
      component: BaseTable
    },
    {
      path: '/table/card',
      name: 'CardTable',
      component: CardTable
    },
    {
      path: '/page/base',
      name: 'BasePage',
      component: BasePage
    },
    {
      path: '/result/fail',
      name: 'FailResult',
      component: FailResult
    },
    {
      path: '/result/success',
      name: 'SuccessResult',
      component: SuccessResult
    },
    {
      path: '/error/404',
      name: 'Page404',
      component: Page404
    },
    {
      path: '/error/500',
      name: 'Page500',
      component: Page500
    },
    {
      path: '/app/email',
      name: 'AppEmail',
      component: AppEmail
    }
  ]
})
