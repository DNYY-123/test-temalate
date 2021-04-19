const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,

  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.permission.name,
  info: state => state.user.name,
  getUser: state => state.user.user,

  roles: state => state.user.roles,
  menus: state => state.permission.menus
}
export default getters
