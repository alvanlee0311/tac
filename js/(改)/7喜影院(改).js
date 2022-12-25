var rule={
    title:'7喜影院',
    host:'https://7xi.tv',
    // host:'https://zaoii.com',
    // homeUrl:'/',
    //url:'/vodshow/fyfilter------fypage---{{fl.year}}/',
    url:'/vodshow/fyclass--------fypage---.html[/vodshow/fyfilter------fypage---{{fl.year}}.html]',
    searchUrl:'/vodsearch/**----------fypage---/',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // 'Cookie': 'searchneed=ok'
    },
    //class_parse:'.conch-nav&&ul&&li;a&&Text;a&&href;./(\\d+).html',
    //cate_exclude:'',
    class_name:'电影&电视剧&综艺&动漫',
    class_url:'1&2&3&4',

    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'body&&.hl-list-wrap;ul&&li;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.hl-vod-list&&li;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
    二级:{'title':'.hl-dc-title&&Text;.hl-col-xs-12&&em&&.hl-text-muted:eq(-2)&&Text','img':'.hl-lazy&&data-original','desc':';;.hl-col-xs-12:eq(2)&&Text;.hl-col-xs-12:eq(3)&&Text;.hl-col-xs-12:eq(4)&&Text','content':'.hl-content-text&&Text','tabs':'.hl-plays-from a','lists':'.hl-plays-list:eq(#id) li'},
    搜索:'.hl-list-wrap&&ul&&li;.hl-item-thumb&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
        filter:{
	1:[{'key':'id','name':'类型','value':[{'n':'👉點我先⭕','v':'1'},{'n':'喜剧','v':'6'},{'n':'爱情','v':'7'},{'n':'犯罪','v':'8'},{'n':'恐怖','v':'9'},{'n':'战争','v':'10'},{'n':'动作','v':'11'},{'n':'科幻','v':'12'},{'n':'悬疑','v':'20'},{'n':'记录片','v':'21'},{'n':'剧情片','v':'41'}]},    
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'%E5%A4%A7%E9%99%86'},{'n':'香港','v':'%E9%A6%99%E6%B8%AF'},{'n':'台湾','v':'%E5%8F%B0%E6%B9%BE'},{'n':'美国','v':'%E7%BE%8E%E5%9B%BD'},{'n':'法国','v':'%E6%B3%95%E5%9B%BD'},{'n':'英国','v':'%E8%8B%B1%E5%9B%BD'},{'n':'日本','v':'%E6%97%A5%E6%9C%AC'},{'n':'韩国','v':'%E9%9F%A9%E5%9B%BD'},{'n':'德国','v':'%E5%BE%B7%E5%9B%BD'},{'n':'泰国','v':'%E6%B3%B0%E5%9B%BD'},{'n':'印度','v':'%E5%8D%B0%E5%BA%A6'},{'n':'意大利','v':'%E6%84%8F%E5%A4%A7%E5%88%A9'},{'n':'西班牙','v':'%E8%A5%BF%E7%8F%AD%E7%89%99'},{'n':'加拿大','v':'%E5%8A%A0%E6%8B%BF%E5%A4%A7'},{'n':'其他','v':'%E5%85%B6%E4%BB%96'}]},
	    {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
	2:[{'key':'id','name':'类型','value':[{'n':'👉點我先⭕','v':'2'},{'n':'国产剧','v':'13'},{'n':'港台剧','v':'14'},{'n':'日韩剧','v':'15'},{'n':'欧美剧','v':'16'},{'n':'海外剧','v':'22'}]},
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'内地','v':'%E5%86%85%E5%9C%B0'},{'n':'韩国','v':'%E9%9F%A9%E5%9B%BD'},{'n':'香港','v':'%E9%A6%99%E6%B8%AF'},{'n':'台湾','v':'%E5%8F%B0%E6%B9%BE'},{'n':'日本','v':'%E6%97%A5%E6%9C%AC'},{'n':'美国','v':'%E7%BE%8E%E5%9B%BD'},{'n':'泰国','v':'%E6%B3%B0%E5%9B%BD'},{'n':'英国','v':'%E8%8B%B1%E5%9B%BD'},{'n':'新加坡','v':'%E6%96%B0%E5%8A%A0%E5%9D%A1'},{'n':'其他','v':'%E5%85%B6%E4%BB%96'}]},
	    {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
	3:[{'key':'id','name':'类型','value':[{'n':'👉點我先⭕','v':'3'}]},    
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'内地','v':'%E5%86%85%E5%9C%B0'},{'n':'港台','v':'%E6%B8%AF%E5%8F%B0'},{'n':'日韩','v':'%E6%97%A5%E9%9F%A9'},{'n':'欧美','v':'%E6%AC%A7%E7%BE%8E'}]},
	    {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
	4:[{'key':'id','name':'类型','value':[{'n':'👉點我先⭕','v':'4'}]},    
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'国产','v':'%E5%9B%BD%E4%BA%A7'},{'n':'日本','v':'%E6%97%A5%E6%9C%AC'},{'n':'欧美','v':'%E6%AC%A7%E7%BE%8E'},{'n':'其他','v':'%E5%85%B6%E4%BB%96'}]},
	    {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
	23:[{'key':'id','name':'类型','value':[{'n':'👉點我先⭕','v':'23'}]},    
        {'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'%E5%A4%A7%E9%99%86'},{'n':'香港','v':'%E9%A6%99%E6%B8%AF'},{'n':'台湾','v':'%E5%8F%B0%E6%B9%BE'},{'n':'美国','v':'%E7%BE%8E%E5%9B%BD'},{'n':'法国','v':'%E6%B3%95%E5%9B%BD'},{'n':'英国','v':'%E8%8B%B1%E5%9B%BD'},{'n':'日本','v':'%E6%97%A5%E6%9C%AC'},{'n':'韩国','v':'%E9%9F%A9%E5%9B%BD'},{'n':'德国','v':'%E5%BE%B7%E5%9B%BD'},{'n':'泰国','v':'%E6%B3%B0%E5%9B%BD'},{'n':'印度','v':'%E5%8D%B0%E5%BA%A6'},{'n':'意大利','v':'%E6%84%8F%E5%A4%A7%E5%88%A9'},{'n':'西班牙','v':'%E8%A5%BF%E7%8F%AD%E7%89%99'},{'n':'加拿大','v':'%E5%8A%A0%E6%8B%BF%E5%A4%A7'},{'n':'其他','v':'%E5%85%B6%E4%BB%96'}]},
	    {'key':'year','name':'年代','value':[{'n':'全部','v':''},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2000之前','v':'lt|2000'}]},
        {'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}]
	        },
    filter_url:'{{fl.id}}-{{fl.area}}-{{fl.by}}',
};
