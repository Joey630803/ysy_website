import React from 'react'
const Rem=(function (){
    /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
        var html = document.getElementsByTagName('html')[0];
        /*取到屏幕的宽度*/
        var width = window.innerWidth;

        /* 640 100  320 50 */
        var fontSize = 10/640*width;

        /*设置fontsize*/
        html.style.fontSize = fontSize +'px';

        window.onresize = function(){
            var html = document.getElementsByTagName('html')[0];
            /*取到屏幕的宽度*/
            var width = window.innerWidth;

            /* 640 100  320 50 */
            var fontSize = 10/640 * width;
            /*设置fontsize*/
            html.style.fontSize = fontSize +'px';   
        }
})()

export default Rem