(function() {
    function setFontSize(preWidth,preSize){
        const viewportWidth = document.documentElement.clientWidth;
        document.documentElement.style.fontSize = `${viewportWidth / preWidth *preSize}px`;
    }
    // 初始化调用一次
    setFontSize(750,1);
    // 浏览器窗口改变调用
    window.onresize = ()=>setFontSize(750,1);

})();
