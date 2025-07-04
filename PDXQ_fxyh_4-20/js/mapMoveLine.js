///地图线点的数据
var moveLineData = [];
//添加飞线数据
/**
 * 添加飞线数据
 * @param {Array} fromLngLat
 * @param {string} fromStr
 * @param {Array} toLngLat
 * @param {string} toStr
 */
function moveLineDataPush(fromLngLat, fromStr, toLngLat, toStr, color) {
    var obj = {
        from: {
            city: fromStr,
            lnglat: fromLngLat,
            type: 'circle',
            speed: 0.01,
            color: color
        },
        to: {
            city: toStr,
            lnglat: toLngLat,
            type: 'ellipse',
            speed: 0.02,
            color: color,
            max: 40
        }
    };
    moveLineData.push(obj);
}

///地图飞线函数
function moveLineOn() {
    var moveLine = new MoveLine(map, {
        //marker点半径
        markerRadius: 1,
        //marker点颜色,为空或null则默认取线条颜色
        markerColor: null,
        //线条类型 solid、dashed、dotted
        lineType: 'solid',
        //线条宽度
        lineWidth: 1,
        //线条颜色
        //colors: ['#ff0000', '#33ccff', '#94E08A', '#4ECDA5', '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', '#ff0000', '#33ccff', '#94E08A', '#4ECDA5', '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', '#ff0000', '#33ccff', '#94E08A', '#4ECDA5', '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
        colors: ['#ff0000'],
        //移动点半径
        moveRadius: 1,
        //移动点颜色
        fillColor: '#fff',
        //移动点阴影颜色
        shadowColor: '#fff',
        //移动点阴影大小
        shadowBlur: 5,
        data: moveLineData
    });

    //var options = {
    //    //移动点半径
    //    moveRadius: 1,
    //    //移动点颜色
    //    fillColor: '#fff',
    //    //移动点阴影颜色
    //    shadowColor: '#fff',
    //    //移动点阴影大小
    //    shadowBlur: 5
    //};

    var options = {
        //marker点半径
        markerRadius: 0,
        //marker点颜色,为空或null则默认取线条颜色
        markerColor: '#fff',
        //线条宽度
        lineWidth: 1,
        //移动点半径
        moveRadius: 1,
        //移动点颜色
        fillColor: '#fff',
        //移动点阴影颜色
        shadowColor: '#fff',
        //移动点阴影大小
        shadowBlur: 5,
    };

    function finished() {
        moveLine.update(options);
    }
    finished();

}

let dataSource = [{
        "type": "水",
        "LineColor": "red",
        "Longitude": 121.6184,
        "Latitude": 31.227224,
    },
    {
        "type": "水",
        "LineColor": "red",
        "Longitude": 121.6184,
        "Latitude": 31.253558,
    },
    {
        "type": "水",
        "LineColor": "red",
        "Longitude": 121.625031,
        "Latitude": 31.348307,
    },
    {
        "type": "水",
        "LineColor": "red",
        "Longitude": 121.623963,
        "Latitude": 31.35473,
    },
    {
        "type": "水",
        "LineColor": "red",
        "Longitude": 121.672158,
        "Latitude": 31.259963,
    },
    {
        "type": "水",
        "LineColor": "red",
        "Longitude": 121.615849,
        "Latitude": 31.352482,
    },
    {
        "type": "环境",
        "LineColor": "blue",
        "Longitude": 121.754354,
        "Latitude": 31.227224,
    },
    {
        "type": "环境",
        "LineColor": "blue",
        "Longitude": 121.854354,
        "Latitude": 31.05157,
    },
    {
        "type": "环境",
        "LineColor": "blue",
        "Longitude": 121.576097,
        "Latitude": 31.19509,
    },
    {
        "type": "环境",
        "LineColor": "blue",
        "Longitude": 121.867594,
        "Latitude": 31.05046,
    },
    {
        "type": "环境",
        "LineColor": "blue",
        "Longitude": 121.910092,
        "Latitude": 31.060467,
    },
    {
        "type": "环境",
        "LineColor": "blue",
        "Longitude": 121.754354,
        "Latitude": 31.227224,
    },
    {
        "type": "环境",
        "LineColor": "blue",
        "Longitude": 121.874925,
        "Latitude": 31.047374,
    },
    {
        "type": "地产",
        "LineColor": "yellow",
        "Longitude": 121.640887,
        "Latitude": 31.033024,
    },
    {
        "type": "地产",
        "LineColor": "yellow",
        "Longitude": 121.510449,
        "Latitude": 31.237037,
    },
    {
        "type": "地产",
        "LineColor": "yellow",
        "Longitude": 121.50572,
        "Latitude": 31.244826,
    },
    {
        "type": "地产",
        "LineColor": "yellow",
        "Longitude": 121.867594,
        "Latitude": 31.05046,
    },
    {
        "type": "地产",
        "LineColor": "yellow",
        "Longitude": 121.910092,
        "Latitude": 31.060467,
    }
];

let targetLnglat = [121.455349, 31.207906];

for (var i = 0; i < dataSource.length; i++) {
    let model = dataSource[i];
    moveLineDataPush([model.Longitude, model.Latitude], '', targetLnglat, '', model.LineColor);
}