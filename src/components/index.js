import ZMenu from './zmenu/ZMenu'
import ZBlock from './block/ZBlock'
import ZTable from './table/ZTable'
import ZScrollBlock from './scroll/ZScrollBlock'
import ZBreadcrumb from './breadcrumb/ZBreadcrumb'
import ZContent from './content/ZContent'
import ZQueryblock from './queryblock/ZQueryblock'

const zComponents = {
    ZMenu,
    ZBlock,
    ZTable,
    ZScrollBlock,
    ZBreadcrumb,
    ZContent,
    ZQueryblock
}

const install = function(Vue){
    Object.keys(zComponents).forEach(key => {
        Vue.component(key, zComponents[key]);
    });
}

const ZAPI = {
    install
};

export default ZAPI;