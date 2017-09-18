$(document).ready(function () {
    loadBaiduMap();
});
//初始化百度地图
function initialize() {
    var map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(116.340473, 39.993776), 17);
    // map.enableScrollWheelZoom();
    var pt = new BMap.Point(116.340473, 39.993776);
    var myIcon = new BMap.Icon("images/about/green.png", new BMap.Size(60,60));
    var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
    map.addOverlay(marker2);
}

//异步加载百度地图API
function loadBaiduMap() {
    var script = document.createElement("script");
    script.src = "http://api.map.baidu.com/api?v=1.5&ak=SnCnB1PQ6aE9eedCPT4YLcUg&callback=initialize";
    document.body.appendChild(script);
}
