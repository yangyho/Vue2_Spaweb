
//引入组件
import firstcomponent from '../../component/firstcomponent.vue'
import secondcomponent from '../../component/secondcomponent.vue'
import tree from '../../component/three.vue'
import four from '../../component/four.vue'
import five from '../../component/five.vue'

const routes = [{
    path: '/',
    component: firstcomponent //默认加载
}, {
    path: '/first',
    component: firstcomponent
}, {
    path: '/second',
    component: secondcomponent
}, {
    path: '/tree',
    component: tree,
}, {
    path: '/four',
    component: four
}, {
    path: '/five',
    component: five
}];

module.exports = routes;
