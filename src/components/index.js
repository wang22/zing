import ZMenu from './zmenu/ZMenu'
import ZBlock from './block/ZBlock'
import ZTable from './table/ZTable'
import ZScrollBlock from './scroll/ZScrollBlock'

const zComponents = {
    ZMenu,
    ZBlock,
    ZTable,
    ZScrollBlock
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