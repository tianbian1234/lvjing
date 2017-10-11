$(document).ready(function () {
    loadBaiduMap();
    $(".team-card1").mouseenter(function(){
        $(".over-loop1").animate({top:'0px'});
    })
    $(".team-card1").mouseleave(function(){
        $(".over-loop1").animate({top:'300px'});
    })


    $(".team-card2").mouseenter(function(){
        $(".over-loop2").animate({top:'0px'});
    })
    $(".team-card2").mouseleave(function(){
        $(".over-loop2").animate({top:'300px'});
    })

    $(".team-card3").mouseenter(function(){
        $(".over-loop3").animate({top:'0px'});
    })
    $(".team-card3").mouseleave(function(){
        $(".over-loop3").animate({top:'300px'});
    })

    $(".team-card4").mouseenter(function(){
        $(".over-loop4").animate({top:'0px'});
    })
    $(".team-card4").mouseleave(function(){
        $(".over-loop4").animate({top:'300px'});
    })
});
//初始化百度地图
function initialize() {
    var map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(116.824587,38.297058), 17);
    // map.enableScrollWheelZoom();
    var pt = new BMap.Point(116.824587,38.297058);
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
