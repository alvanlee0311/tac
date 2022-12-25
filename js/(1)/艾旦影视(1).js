var rule = Object.assign(muban.海螺3,{
title:'艾旦影视',
host:'https://www.lovedan.net',
url:'/vodshow/fyclass--------fypage---.html[/vodshow/fyfilter------fypage---{{fl.year}}.html]',
//url:'/vodshow/fyclass--------fypage---.html[/vodshow/fyfilter------fypage---{{fl.year}}.html]',
searchUrl:'/vodsearch/**----------fypage---.html',
class_name:'電影&電視劇&綜藝&動漫&福利視頻&福利圖片',
class_url:'1&2&3&4&5&6',
cate_exclude: '电视剧|综艺|动漫|福利视频|福利图片|最新|排行',
filter:{
	1:[{'key':'id','name':'类型','value':[{'n':'全部','v':'1'},{'n':'动作片','v':'6'},{'n':'喜剧片','v':'7'},{'n':'爱情片','v':'8'},{'n':'科幻片','v':'9'},{'n':'恐怖片','v':'10'},{'n':'犯罪片','v':'11'},{'n':'战争片','v':'12'},{'n':'动画电影','v':'20'},{'n':'剧情片','v':'21'},{'n':'纪录片','v':'22'}]},
        //{'key':'clyss','name':'剧情','value':[]},
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'%E5%A4%A7%E9%99%86'},{'n':'香港','v':'%E9%A6%99%E6%B8%AF'},{'n':'台湾','v':'%E5%8F%B0%E6%B9%BE'},{'n':'美国','v':'%E7%BE%8E%E5%9B%BD'},{'n':'法国','v':'%E6%B3%95%E5%9B%BD'},{'n':'英国','v':'%E8%8B%B1%E5%9B%BD'},{'n':'日本','v':'%E6%97%A5%E6%9C%AC'},{'n':'韩国','v':'%E9%9F%A9%E5%9B%BD'},{'n':'德国','v':'%E5%BE%B7%E5%9B%BD'},{'n':'泰国','v':'%E6%B3%B0%E5%9B%BD'},{'n':'印度','v':'%E5%8D%B0%E5%BA%A6'},{'n':'意大利','v':'%E6%84%8F%E5%A4%A7%E5%88%A9'},{'n':'西班牙','v':'%E8%A5%BF%E7%8F%AD%E7%89%99'},{'n':'加拿大','v':'%E5%8A%A0%E6%8B%BF%E5%A4%A7'},{'n':'其他','v':'%E5%85%B6%E4%BB%96'}]},
        {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
	2:[{'key':'id','name':'类型','value':[{'n':'全部','v':'2'},{'n':'全部','v':''},{'n':'海外剧','v':'30'},{'n':'国产剧','v':'13'},{'n':'港台剧','v':'14'},{'n':'日韩剧','v':'15'},{'n':'欧美剧','v':'16'}]},
        //{'key':'clyss','name':'剧情','value':[]},
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'内地','v':'%E5%86%85%E5%9C%B0'},{'n':'韩国','v':'%E9%9F%A9%E5%9B%BD'},{'n':'香港','v':'%E9%A6%99%E6%B8%AF'},{'n':'台湾','v':'%E5%8F%B0%E6%B9%BE'},{'n':'日本','v':'%E6%97%A5%E6%9C%AC'},{'n':'美国','v':'%E7%BE%8E%E5%9B%BD'},{'n':'泰国','v':'%E6%B3%B0%E5%9B%BD'},{'n':'英国','v':'%E8%8B%B1%E5%9B%BD'},{'n':'新加坡','v':'%E6%96%B0%E5%8A%A0%E5%9D%A1'},{'n':'其他','v':'%E5%85%B6%E4%BB%96'}]},
        {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
	3:[{'key':'id','name':'类型','value':[{'n':'全部','v':'3'},{'n':'日韩综艺','v':'23'},{'n':'港台综艺','v':'24'},{'n':'欧美综艺','v':'25'},{'n':'大陆综艺','v':'31'}]},
        //{'key':'clyss','name':'剧情','value':[]},
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'中国大陆','v':'%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86'},{'n':'内地','v':'%E5%86%85%E5%9C%B0'},{'n':'港台','v':'%E6%B8%AF%E5%8F%B0'},{'n':'日韩','v':'%E6%97%A5%E9%9F%A9'},{'n':'欧美','v':'%E6%AC%A7%E7%BE%8E'}]},
        {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
	4:[{'key':'id','name':'类型','value':[{'n':'全部','v':'4'},{'n':'国产动漫','v':'26'},{'n':'日韩动漫','v':'27'},{'n':'欧美动漫','v':'28'},{'n':'海外动漫','v':'29'}]},
        //{'key':'clyss','name':'剧情','value':[]},
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'国产','v':'%E5%9B%BD%E4%BA%A7'},{'n':'日本','v':'%E6%97%A5%E6%9C%AC'},{'n':'欧美','v':'%E6%AC%A7%E7%BE%8E'},{'n':'其他','v':'%E5%85%B6%E4%BB%96'}]},
        {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
	5:[{'key':'id','name':'类型','value':[{'n':'全部','v':'5'},{'n':'三级伦理','v':'17'},{'n':'网红主播','v':'18'},{'n':'海外抖音','v':'37'}]},
        //{'key':'clyss','name':'剧情','value':[]},
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'%E5%A4%A7%E9%99%86'},{'n':'香港','v':'%E9%A6%99%E6%B8%AF'},{'n':'台湾','v':'%E5%8F%B0%E6%B9%BE'},{'n':'美国','v':'%E7%BE%8E%E5%9B%BD'},{'n':'法国','v':'%E6%B3%95%E5%9B%BD'},{'n':'英国','v':'%E8%8B%B1%E5%9B%BD'},{'n':'日本','v':'%E6%97%A5%E6%9C%AC'},{'n':'韩国','v':'%E9%9F%A9%E5%9B%BD'},{'n':'德国','v':'%E5%BE%B7%E5%9B%BD'},{'n':'泰国','v':'%E6%B3%B0%E5%9B%BD'},{'n':'印度','v':'%E5%8D%B0%E5%BA%A6'},{'n':'意大利','v':'%E6%84%8F%E5%A4%A7%E5%88%A9'},{'n':'西班牙','v':'%E8%A5%BF%E7%8F%AD%E7%89%99'},{'n':'加拿大','v':'%E5%8A%A0%E6%8B%BF%E5%A4%A7'},{'n':'其他','v':'%E5%85%B6%E4%BB%96'}]},
        {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
	6:[{'key':'id','name':'类型','value':[{'n':'全部','v':'6'},{'n':'福利图片','v':'/art/index'},{'n':'爱蜜社','v':'/arttype/34'},{'n':'头条女神','v':'/arttype/35'},{'n':'美媛馆','v':'/arttype/36'},{'n':'嗲囡囡','v':'/arttype/38'},{'n':'波萝社','v':'/arttype/39'},{'n':'秀人网','v':'/arttype/42'},{'n':'魅妍社','v':'/arttype/40'},{'n':'爱尤物','v':'/arttype/41'},{'n':'尤果网','v':'/arttype/43'},{'n':'推女神','v':'/arttype/44'},{'n':'DGC套图','v':'/arttype/45'},{'n':'尤蜜荟','v':'/arttype/46'},{'n':'模范学院','v':'/arttype/47'},{'n':'尤物馆','v':'/arttype/48'},{'n':'优星馆','v':'/arttype/49'},{'n':'蜜桃社','v':'/arttype/50'},{'n':'影私荟','v':'/arttype/51'},{'n':'顽味生活','v':'/arttype/52'},{'n':'花の颜','v':'/arttype/54'},{'n':'御女郎','v':'/arttype/55'}]},
       // {'key':'clyss','name':'剧情','value':[]},
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'%E5%A4%A7%E9%99%86'},{'n':'香港','v':'%E9%A6%99%E6%B8%AF'},{'n':'台湾','v':'%E5%8F%B0%E6%B9%BE'},{'n':'美国','v':'%E7%BE%8E%E5%9B%BD'},{'n':'法国','v':'%E6%B3%95%E5%9B%BD'},{'n':'英国','v':'%E8%8B%B1%E5%9B%BD'},{'n':'日本','v':'%E6%97%A5%E6%9C%AC'},{'n':'韩国','v':'%E9%9F%A9%E5%9B%BD'},{'n':'德国','v':'%E5%BE%B7%E5%9B%BD'},{'n':'泰国','v':'%E6%B3%B0%E5%9B%BD'},{'n':'印度','v':'%E5%8D%B0%E5%BA%A6'},{'n':'意大利','v':'%E6%84%8F%E5%A4%A7%E5%88%A9'},{'n':'西班牙','v':'%E8%A5%BF%E7%8F%AD%E7%89%99'},{'n':'加拿大','v':'%E5%8A%A0%E6%8B%BF%E5%A4%A7'},{'n':'其他','v':'%E5%85%B6%E4%BB%96'}]},
        {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}]

        },
filter_url:'{{fl.id}}-{{fl.area}}-{{fl.by}}',
//filter_url:'{fl.id}}-{{fl.area}}-{{fl.by}}',

});
