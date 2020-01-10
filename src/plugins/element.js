import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Header,
    Container,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItem
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
    // 登录信息提示全局挂载
Vue.prototype.$message = Message