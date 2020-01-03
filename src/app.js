import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Sider from './sider.vue'
import Toast from './toast.vue'
import plugin from './plugin'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsItem from './tabs-item.vue'
import TabsPane from './tabs-pane.vue'
import Popover from './popover.vue'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'
import Cascader from './cascader.vue'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-cascader', Cascader)

Vue.use(plugin)


const app = new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: true,
            loading3: false,
            message: 'hi',
            selectedTab: '2',
            source: [{
                name: '浙江',
                children: [
                    {
                        name: '杭州',
                        children: [
                            {name: '上城'},
                            {name: '下城'},
                            {name: '江干'}
                        ]
                    },
                    {
                        name: '嘉兴',
                        children: [
                            {name: '南湖'},
                            {name: '秀洲'},
                            {name: '嘉普'}
                        ]
                    }
                ]
            }, {
                name: '福建',
                children: [
                    {
                        name: '福州',
                        children: [
                            {name: '鼓楼'},
                            {name: '台江'},
                            {name: '仓山'}
                        ]
                    }
                ]
            }, {
                name: '安徽',
                children: [{
                    name: '合肥',
                    children: [{
                        name: '瑶海'
                    }, {
                        name: '庐阳'
                    }]
                }]
            }]
        }
    },
    created(){
        // setTimeout(() => {
        //     let event = new Event('change')
        //     // let inputElement = app.$el.querySelector('.input-change')
        //     // inputElement.dispatchEvent(event)
        //     console.log('hi')
        // }, 3000)

        // this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
        //     position: 'bottom',
        //     enableHtml: false,
        //     closeButton: {
        //         text: '已充值',
        //         callback(toast) {
        //             toast.log()
        //             console.log('他说已经充值智商了')
        //         }
        //     },
        //     autoClose: true,
        //     autoCloseDelay: 30
        // })

        // this.$toast('<strong>我是 message</strong>', {})
    },
    methods: {
        yyy() {
            console.log('yyy');
        },
        inputChange(e) {
            console.log(e)
        },
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
            m
        },
        showToast(position) {
            this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
                position,
                enableHtml: false,
                closeButton: {
                    text: '已充值',
                    callback(toast) {
                        toast.log()
                        console.log('他说已经充值智商了')
                    }
                },
                autoClose: true,
                autoCloseDelay: 3
            })
        }
    }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

try {
    const expect = chai.expect

//单元测试
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        })
        vm.$mount('#test')
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#icon-setting')
    }
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        vm.$mount() // 直接放在内存里
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#icon-loading')
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()

    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        //mock
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        })
        vm.$mount()
        let spy = chai.spy(function () {

        })
        vm.$on('click', spy)
        //希望这个函数被执行
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()

        vm.$el.remove()
        vm.$destroy()
    }
} catch (error) {
    window.errors = [error]
} finally {
    window.errors && window.errors.forEach(error => {
        console.error(error.message)
    })
}