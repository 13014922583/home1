var windowWidth = $(window).width();

function viewportToPixels(value) {
    if (windowWidth <= 1920) {
        var parts = value.match(/([0-9\.]+)(vh|vw)/)
        var q = Number(parts[1])
        var side = window[
            ['innerHeight', 'innerWidth']
            [
                ['vh', 'vw'].indexOf(parts[2])
            ]
        ]
        return side * (q / 60)
    } else {
        var parts = value.match(/([0-9\.]+)(vh|vw)/)
        var q = Number(parts[1])
        var side = window[
            ['innerHeight', 'innerWidth']
            [
                ['vh', 'vw'].indexOf(parts[2])
            ]
        ]
        return side * (q / 100)
    }
}


var Ldect = echarts.init(document.getElementById('ldEct'));
var colors = [
    "#4D9DFF",
    "#FFAA4D",
    "#FF4D4D"
];
var names = ['低风险', '中风险', '高风险']
var optionld = {
    legend: {
        bottom: 5,
        x: 'center',
        data: names,
        textStyle: { //图例文字的样式
            color: '#fff',
            fontSize: 14
        }
    },
    tooltip: { //提示框，可以在全局也可以在
        trigger: 'item', //提示框的样式
        formatter: "{b}: {c} ({d}%)",
        color: 'rgba(36,37,41,0.8)', //提示框的背景色
        textStyle: { //提示的字体样式
            color: "#fff",
        }
    },
    series: [{
        type: 'pie',
        radius: '65%',
        center: ['50%', '50%'],
        label: { //饼图图形上的文本标签
            normal: {
                show: false,
                textStyle: {
                    fontWeight: 700,
                    fontSize: 13 //文字的字体大小
                },
                formatter: '{b}',
            }
        },
        data: [{
            value: 10,
            name: names[0],
            itemStyle: {
                normal: {
                    color: colors[0]
                }
            }
        }, {
            value: 32,
            name: names[1],
            itemStyle: {
                normal: {
                    color: colors[1]
                }
            }
        }, {
            value: 10,
            name: names[2],
            itemStyle: {
                normal: {
                    color: colors[2]
                }
            }
        }]
    }]
};

Ldect.setOption(optionld);