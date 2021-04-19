import { getInfo, getNewUserMenu, logout, getUserDataByTicket } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import Cookies from 'js-cookie'
import Vue from 'vue'
const getDefaultState = () => {
  return {
    token: getToken(),
    name: {},
    avatar: '',

    data: {},
    btns: []
  }
}
const state = getDefaultState()
const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USER_ROUTE(state, data) {
    state.routes = data
  },
  // 存储用户信息
  FETCH_USER_SUCCESS(state, data) {
    state.user = data
  }
}

const actions = {
  setToken({ commit }, data) {
    setToken(data.authToken)
    commit('SET_TOKEN', data.authToken)
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }
        Vue.prototype.$myUserId = data.userId
        commit('SET_NAME', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // user menu
  getUserMenu({ commit, state }) {
    return new Promise((resolve, reject) => {
      getNewUserMenu().then(res => {
        commit('SET_USER_ROUTE', res.data)
        resolve(res.data)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout().then(res => {
        commit('SET_TOKEN', '')
        removeToken()
        // localStorage.removeItem('user_id')
        resolve()
      })
    })
  },
  getUserData({ commit }, data) {
    const { ticket } = data
    // console.log(ticket)
    return new Promise((resolve, reject) => {
      getUserDataByTicket({ ticket })
        .then(({ data }) => {
          if (data.token) {
            commit('FETCH_USER_SUCCESS', data)
            setToken(data.token)
            commit('SET_TOKEN', data.token)
            Cookies.set('user', data.email.split('@')[0])
          }
          resolve(data)
        })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
