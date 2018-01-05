export default {
    '/threeTabs': ({ params }) => {
        const Tabs = [
            {
                img:'./src/images/home_icon_computer_nor.png',
                imgActive:'./src/images/home_icon_computer_sel.png',
                title:'供应服务平台',
                text:'统一的申请系统、实时的安全库存预警、集中的采购管理、及时的物流配送、可追溯的患者使用'
            },
            {
                img:'./src/images/home_icon_manage_nor.png',
                imgActive:'./src/images/home_icon_manage_sel.png',
                title:'医商云',
                text:'资质证照数据化、动态化、可视化的管理人性化的预警与提醒可实现资质的层级管理、实效管理及动态提醒'
            },
            {
                img:'./src/images/home_icon_qualifications_nor.png',
                imgActive:'./src/images/home_icon_qualifications_sel.png',
                title:'医商云标',
                text:'标准产品信息库、一物一码，从需求到使用全程一码跟踪结合条形码、二维码识别技术、完成扫码备货、扫码验收、扫码计费，降低失误概率'
            }
        ]
    //     let filtered;
    // if ('undefined' !== typeof params) {
    //   filtered = Tabs.filter(item => {
    //     let result = true;
    //     const keys = Object.keys(params);
    //     keys.forEach(key => {
    //       const param = params[key];

    //       if (item[key] && item[key] !== param) {
    //         result = false;
    //       }
    //     });
        
    //     return result;
    //   });
    // } else {
    //   filtered = Tabs;
    // }
    return Tabs;
    }
}
