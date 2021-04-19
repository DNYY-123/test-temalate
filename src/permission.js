import router from './router'
import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie

import { toLogin } from '@/utils'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    next()
  } else {
    /* has no token*/
    if (to.query.ticket) {
      await store.dispatch('user/getUserData', to.query)
      // eslint-disable-next-line no-unused-vars
      const { ticket, ...newQuery } = to.query
      next({
        path: to.path,
        query: newQuery,
        params: to.params
      })
      NProgress.done()
    } else {
      toLogin()
      return
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

