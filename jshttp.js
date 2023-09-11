//./jshttp(改).js
{
//"spider":"./top98_1.jar",
"sites" : [
{"key":"drpy","name":"豆瓣🍭🔎(简体)","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/豆瓣.js"},
{"key":"ikanbotsq","name":"🈵爱看机器人sq(简体)","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/ikanbotsq.js"},
{"key": "星星","name": "🏆星星(简体)","type": 3,"api": "csp_Star","searchable": 1,"jar":"./FongMi_custom_spider.jar"},
{"key":"欧乐影院","name":"🛩歐樂影院(简体)","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/(改)/欧乐影院(改).js"},
{"key":"独播库","name":"🛩独播库🔎(简体)","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/独播库[飞].js","playerType":"1"},
{"key":"欧帝影院","name":"🛩欧帝影院🔎(简体)","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/欧帝影院.js"},
{"key":"優質资源网","name":"🏆優質资源1080(简体)","type":0,"api":"https://api.1080zyku.com/inc/api.php","searchable":1,"quickSearch":1,"filterable":1},
{"key":"暴风影视","name":"🏆暴风影视(简体)","type":1,"api":"https://bfzyapi.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"大漠影视e","name":"🏆大漠影视(简体)","type":1,"api":"https://damozy.com/api.php/provide/vod/from/M3U8/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"金鹰影视e","name":"🏆金鹰影视(简体)","type":1,"api":"https://jinyingzy.com/provide/vod/from/jinyingm3u8/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"极速影视e","name":"🏆极速影视(简体)","type":1,"api":"https://jszyapi.com/api.php/provide/vod/from/jsm3u8/","searchable":1,"quickSearch":1,"filterable":1},
//{"key":"oletv資源f","name":"🏆oletv資源(海外)(简体)","type":1,"api":"https://olevod1.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"taopian資源f","name":"🏆taopian資源(淘片)(简体)","type":1,"api":"https://taopianapi.com/cjapi/mc/vod/json/m3u8.html","searchable":1,"quickSearch":1,"filterable":1},
{"key":"淘片资源网","name":"🏆淘片资源tp(简体)","type":0,"api":"https://taopianapi.com/home/cjapi/as/mc/vod/xml","searchable":1,"quickSearch":1,"filterable":1},
{"key":"非凡资源网","name":"🏆非凡资源ff(简体)","type":0,"api":"http://cj.ffzyapi.com/api.php/provide/vod/from/ffm3u8/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"天空资源网","name":"🏆天空资源网tk(简体)","type":0,"api":"https://api.tiankongapi.com/api.php/provide/vod/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"量子资源網","name":"🏆量子资源lz(简体)","type":1,"api":"http://cj.lziapi.com/api.php/provide/vod/","playUrl":"","searchable":1,"quickSearch":1,"categories":["国产剧","国产动漫","泰国剧","台湾剧","香港剧","欧美剧","韩国剧","日本剧","动漫","体育","剧情片","动作片","爱情片","喜剧片"]},
{"key":"ikun资源网","name":"🏆ikun资源(简体)","type":0,"api":"https://ikunzyapi.com/api.php/provide/vod/from/ikm3u8/at/xml","searchable":1,"quickSearch":1,"filterable":1},
{"key":"飞速资源","name":"🏆飞速资源(简体)","api":"https://www.feisuzy.com/api.php/provide/vod","type":1,"searchable":1,"quickSearch":1,"filterable":1},
//{"key":"海外看资源网","name":"🏆海外看haiwaikan(简体)","type":0,"api":"https://haiwaikan.com/api.php/provide/vod/at/xml/?ac=list","searchable":1,"quickSearch":1,"filterable":1},
{"key":"77韩剧","name":"🏆77韩剧(简体)","api":"https://www.77hanju.com/api.php/provide/vod","type":1,"searchable":1,"quickSearch":1,"filterable":1},
{"key":"韩剧资源","name":"🏆韩剧资源(简体)","api":"http://www.hanjuzy.com/inc/apijson_vod.php","type":1,"searchable":1,"quickSearch":1,"filterable":1},
{"key":"U酷资源網","name":"🏆U酷资源(简体)","type":1,"api":"https://api.ukuapi.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"shoujihanju資源f","name":"🌟shoujihanju(韓劇)(简体)","type":1,"api":"https://77hanju.com/api.php/provide/vod/from/mkm3u8/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"奇虎影视e","name":"🌟奇虎影视(简体)","type":1,"api":"https://caiji.qhzyapi.com/api.php/provide/vod/from/qhm3u8/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"飛速资源网","name":"🌟飛速资源fe(简体)","type":0,"api":"https://www.feisuzyapi.com/api.php/provide/vod/from/fsm3u8/at/xml","searchable":1,"quickSearch":1,"filterable":1},
{"key":"快播资源網","name":"🌟快播资源kb(简体)","type":1,"api":"http://www.kuaibozy.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"快车资源網","name":"🌟快车资源kc(简体)","type":1,"api":"https://caiji.kczyapi.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"厂长资源","name":"🎯厂长资源(简体)","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/厂长资源.js"},
{"key":"电影先生","name":"🎯电影先生(简体)","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/电影先生.js"},
{"key":"南瓜影视","name":"🎯南瓜影视(简体)","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/南瓜影视.js"},
{"key":"樱花资源網","name":"🌟樱花资源yh(简体)","type":1,"api":"https://m3u8.apiyhzy.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"68资源网","name":"🌟68资源68(简体)","type":0,"api":"https://caiji.68zyapi.com/api.php/provide/vod/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"if101","name":"🌟if101(简体)","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/if101.js"},
{"key":"CK资源采集网","name":"🏆CK资源采集网(简体)","type":1,"api":"https://ckzy.me/api.php/provide/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":1},
{"key":"CK资源(VPN)","name":"🛩CK资源(VPN)(简体)","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/ck资源.js"},
{"key":"快看资源网","name":"🏆快看资源(简体)","type":0,"api":"https://kuaikan-api.com/api.php/provide/vod/at/xmlsea","searchable":1,"quickSearch":1,"filterable":1},
{"key":"泥巴","name":"🏆泥巴🔎(简体)","type":3,"api":"csp_Nbys","searchable":1,"filterable":1,"jar":"./top98_1.jar"},
{"key":"八戒资源网","name":"🏆八戒资源网(简体)","type":1,"api":"http://cj.bajiecaiji.com/inc/apijson_vod.php","searchable":1,"quickSearch":1,"filterable":1},
{"key":"农民","name":"💬評分 農民","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/农民影视.js"},
{"key":"一起看","name":"💬評分/集數 一起看","type":"3","api":"csp_Dora","changeable":"0","searchable":"1","quickSearch":"1","filterable":"1","ext":"8e3aefcba838d8dc5102ac786719d837","jar":"./t.jar"},
{"key":"乐鱼影视","name":"💬集數 乐鱼影视","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/乐鱼影视.js"},
{"key":"drpy_js_360影视","name":"官源🏛360","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/360影视.js"},
{"key":"MGT","name":"🥭芒果(官)","type":3,"api":"csp_Mtv","searchable":1,"quickSearch":1,"filterable":1,"jar":"./xm.jar"},
{"key":"SPIQY","name":"🥝愛奇藝(SP)","type":3,"api":"csp_Itv","searchable":1,"quickSearch":1,"filterable":1,"jar":"./xm.jar"},
{"key":"SPQQ","name":"🐧腾讯(官)","type":3,"api":"csp_Qtv","searchable":1,"quickSearch":1,"filterable":1,"jar":"./xm.jar"},
{"key":"drpy_js_百忙无果","name":"官源🏛芒果🔎","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/百忙无果.js"},
{"key":"drpy_js_奇珍异兽","name":"官源🏛爱奇艺🍭🔎","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/奇珍异兽.js"},
{"key":"drpy_js_腾云驾雾","name":"官源🏛腾讯🔎","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/腾云驾雾.js"},
//{"key":"豆瓣","name":"豆瓣2🍭🔎","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/drpy.js"},
{"key":"drpy2","name":"豆瓣2🍭🔎","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/drpy.js"},
{"key":"drpy__豆瓣","name":"豆瓣🏛[DRPY]🔎","type":3,"api":"https://raw.githubusercontent.com/hjdhnx/dr_py/main/libs/./lib/drpy2.min.sq.js","ext":"https://raw.githubusercontent.com/hjdhnx/dr_py/main/js/drpy.js"},
{"key":"drpy_js_优酷","name":"官源🏛优酷🔎","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/优酷.js"},
{"key":"爱看机器人","name":"爱看机器人1","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/爱看机器人.js"},
{"key":"ikanbot2","name":"爱看机器人2","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/ikanbot2.js"},
{"key":"ikanbot3","name":"爱看机器人3","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/ikanbot3.js"}

],
"lives": [
    {
      "name": "直播源",
      "type": 0,
      "url": "./直播源(1).txt",
      "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
      "logo": "https://epg.112114.xyz/logo/{name}.png"
    },    
    {
      "name": "FongMi",
      "type": 1,
      "url": "https://raw.githubusercontent.com/FongMi/CatVodSpider/main/json/live.json",
      "epg": "http://epg.51zmt.top:8000/api/diyp/?ch={epg}&date={date}",
      "logo": "http://epg.51zmt.top:8000/{logo}"
    },
    {
      "name": "台灣",
      "type": 0,
      "url": "./live.txt",
      "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
      "logo": "https://epg.112114.xyz/logo/{name}.png"
    },
        {
      "name": "直播1",
      "type": 0,
      "url": "http://home.jundie.top:81/Cat/tv/live.txt",
      "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
      "logo": "https://epg.112114.xyz/logo/{name}.png"
    },
    {
      "name": "直播2",
      "type": 0,
      "url": "https://dashu0754.com/api/v3/file/get/111/%E6%82%9F%E7%A9%BA.txt?sign=Vh_6WlBWzq1GeV88r1QjRQE9DCNcz5rBZpmSMo_q_y8%3D%3A0",
      "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
      "logo": "https://epg.112114.xyz/logo/{name}.png"
    }
  ],
"doh":[{"name":"Google","url":"https://dns.google/dns-query","ips":["8.8.4.4","8.8.8.8"]},{"name":"Cloudflare","url":"https://cloudflare-dns.com/dns-query","ips":["1.1.1.1","1.0.0.1","2606:4700:4700::1111","2606:4700:4700::1001"]},{"name":"AdGuard","url":"https://dns.adguard.com/dns-query","ips":["94.140.14.140","94.140.14.141"]},{"name":"DNSWatch","url":"https://resolver2.dns.watch/dns-query","ips":["84.200.69.80","84.200.70.40"]},{"name":"Quad9","url":"https://dns.quad9.net/dns-quer","ips":["9.9.9.9","149.112.112.112"]}],
"rules":[
{"name":"星星","hosts":["aws.ulivetv.net"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:8,[\\s\\S]*?#EXT-X-DISCONTINUITY"]},
{"name":"海外看","hosts":["haiwaikan"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:9.000000,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:9.175832,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:9.175833,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.716667,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:9,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"]},
{"name":"量子廣告","hosts":["vip.lz","hd.lz"],"regex":[
"#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.433333,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"
]},
{"name":"非凡廣告","hosts":["vip.ffzy","hd.ffzy"],"regex":[
"#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.666667,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"
]},
{"name":"暴风廣告","hosts":["bfzy"],"regex":[
"#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:3,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"
]},
{"name":"火山嗅探","hosts":["huoshan.com"],"regex":["item_id="]},
{"name":"抖音嗅探","hosts":["douyin.com"],"regex":["is_play_url="]}
],
"parses":[
//{"name":"超解","type":4,"url":"12"},
//{"name":"聚合1","type":3,"url":"Demo"},
//{"name":"聚合0","type":3,"url":"Web"},
{"name":"777","type":0,"url":"https://jx.777jiexi.com/player/?url="},
{"name":"杰森","type":0,"url":"https://jx.jsonplayer.com/player/?url="}, 
{"name":"战狼","type":0,"url":"https://jx.zhanlangbu.com/?url="},
{"name":"ok","type":0,"url":"https://okjx.cc/?url="},
{"name":"bozrc","type":0,"url":"https://jx.bozrc.com:4433/player/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","leshi","LS","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":""}}},
{"name":"不累","type":0,"url":"https://blbfq.f3322.net/player/analysis.php?v=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"cod","type":0,"url":"https://ksksl.codjx.com/?url="},
{"name":"byg解析","type":0,"url":"https://byg.ziqj5.shop/?url="},
{"name":"xmflv","type":0,"url":"https://jx.xmflv.com/?url="},
{"name":"365","type":0,"url":"https://chaxun.truechat365.com/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"26db","type":0,"url":"http://vip.26db.cn/g/?url="},
{"name":"看看","type":0,"url":"https://jx.m3u8.pw/?url="},
{"name":"FreeOK","type":0,"url":"https://play.86516.tk/OKPlayer/?url="},
{"name":"free","type":0,"url":"https://h5.freejson.xyz/player/?url="},
{"name":"優酷","type":1,"url":"http://27.124.4.42:4567/jhjson/ceshi.php?url="},
{"name":"騰訊","type":1,"url":"http://xn--wnup5g.xn--z7x900a.love:63/Art1/analysis.php?v=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"]}},
{"name":"6号线","type":0,"url":"https://jx.parwix.com:4433/player/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"7号线","type":0,"url":"https://jx.parwix.com:4433/player/analysis.php?v=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"9号线","url":"https://www.8090g.cn/?url="},
{"name":"10号线","type":1,"url":"http://json.youguo520.top/fufeng/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":"Dart/2.14(dart:io)"}}},
{"name":"11号线","type":1,"url":"https://jx.4kdv.com/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"12号线","type":0,"url":"https://jx.m3u8.tv/jiexi/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"13号线","type":0,"url":"https://www.ckmov.com/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"14号线","type":1,"url":"https://api.jiexi.la/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"15号线","type":0,"url":"https://www.nxflv.com/?url="},
{"name":"17号线","type":0,"url":"https://www.yemu.xyz/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"18号线","type":0,"url":"https://jx.ccabc.cc/byg/?url="},
{"name":"19号线","type":0,"url":"https://jx.zhanlangbu.com/?url=","ext":{"header":{"User-Agent":"okhttp/4.1.0"},"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"20号线","type":1,"url":"http://lanlan.ckflv.cn/?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"22号线","type":0,"url":"http://jx.ivito.cn/?url="},
{"name":"23号线","type":0,"url":"https://dm.xbqgx.com/?url="},
{"name":"24号线","type":0,"url":"https://vip.bljiex.com/?v="},
{"name":"A01","type":0,"url":"http://api.apii.top/?v="},
{"name":"A02","type":0,"url":"https://jx.aidouer.net/?url="},
{"name":"A03","type":0,"url":"http://vip.xxphp.cn/player.html?url="},
{"name":"A04","type":0,"url":"https://55o.co/?url="},
{"name":"A05","type":0,"url":"http://www.wpsseo.cn/line.php?n=7&url="},
{"name":"A06","type":0,"url":"https://player.nineqing.net/jx/?url="},
{"name":"A07","type":0,"url":"https://player.nineqing.com/?url="},
{"name":"A08","type":0,"url":"https://jx.videojx.cn:5656/?url="},
{"name":"A09","type":0,"url":"https://www.1717yun.com/1717yun/?url="},
{"name":"A10","type":0,"url":"https://freejx.rx88.top:1234/?url="},
{"name":"A11","type":0,"url":"https://player.maqq.cn/?url="},
{"name":"A12","type":0,"url":"https://jx.quankan.app/?url="},
{"name":"A13","type":0,"url":"https://lziplayer.com/?url="},
{"name":"A14","type":0,"url":"https://www.pangujiexi.com/pangu/?url="},
{"name":"25号线","type":0,"url":"http://pandown.pro/app/ysmjx.php?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":"okhttp/4.1.0"}}}],

"flags":["youku","qq","iqiyi","qiyi","letv","sohu","tudou","pptv","mgtv","wasu"],
"wallpaper":"./黑色.jpeg"

}