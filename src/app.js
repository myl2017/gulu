import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

const app = new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: true,
            loading3: false
        }
    }
})

import chai from 'chai'

const expect = chai.expect

//单元测试
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-setting')
}

