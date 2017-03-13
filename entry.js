
require("./css/style.css")
require("./iconfont/iconfont.css")

var $=require ("./js/lib/jquery.min.js")
var Echarts=require ("./js/com/echarts.min.js")


var s = '我是一个性格幽默、做事认真，热爱运动的人。 我喜欢研究所碰到的各种技术，热衷解决碰到的任何程序问题，不给自己设边界，有 Geek 精神。我有时间概念，能在约定时间内保证完成任务。 我正在寻找一家公司希望加入一个以技术为驱动，从事前端开发工作，并且可以提升大型项目的驾驭能力，希望新工作有成长空间，技术上有挑战性，技术氛围够Geek，使人有成就感的互联网公司。';
		var con = $('.typer');
		var index = 0;
		var length = s.length;
		var tId = null;

		function start(){
		  con.text('');
		  
		  tId=setInterval(function(){
		    con.append(s.charAt(index));
		    if(index++ === length){
		    clearInterval(tId);
		    }
		  },50);
		}

		start();

// var Carousel=require("./js/com/carousel.js"),
// 	GoTop=require("./js/com/gotop.js"),
// 	Exposure=require("./js/com/exposure.js"),
// 	WaterFall=require("./js/com/waterfall.js"),
// 	Ajax=require("./js/com/ajax.js");


// 	$(".carousel").each(function(){
// 		 new Carousel($(this));
// 	 })

// 	GoTop.init();

// 	Exposure.one($('.about-ul>li'), function(){
// 		var $this = $(this);
// 		$this.css({"opacity":"1"});
// 	 });

// 	WaterFall.init($('.portfolio ul'));

// 	Ajax.init($(".load"));


	var navArr=['.information-nav' ,'.works-nav','.skills-nav','.contact-nav'],
		contentArr=['.information' ,'.works','.skills','.contact'];

	$(window).on('scroll',function(){
		for(var i=0; i<navArr.length; i++){
			$(navArr[i]).removeClass('nav-active');
			if(halfVisible($(contentArr[i]))){
				$(navArr[i]).addClass('nav-active');
			}
		}
	})


	function halfVisible($target){
		var winH=$(window).height(),
		    scrollTop=$(window).scrollTop(),
		    offsetTop=$target.offset().top,
		    $targetH=$target.outerHeight(true);
		return ((scrollTop+winH/2>=offsetTop)&&(offsetTop+$targetH>scrollTop+winH/2))
	}


	for(var i=0; i<navArr.length; i++){
			(function(i){
				$(navArr[i]).on('click',function(){
					$('html,body').animate({scrollTop: $(contentArr[i]).offset().top-80}, 800);
				})
			})(i)
		}


var option = {
    title: {
        text: ''
    },
    tooltip: {},
    legend: {
        data: ['能力', '兴趣']
    },
    radar: {
        // shape: 'circle',
        indicator: [
           { name: 'HTML&HTML5', max: 100},
           { name: 'CSS&CSS3', max: 100},
           { name: 'JS', max: 100},
           { name: 'jQuery', max: 100},
           { name: 'LESS&SASS', max: 100},
           { name: 'Bootstrap', max: 100},
           { name: 'Gulp',max:100},
           { name: 'React JS', max:100}
           
        ]
    },
    series: [{
        name: '能力 vs 兴趣（skill vs interesting）',
        type: 'radar',
        data : [
            {
                value : [90, 80, 70, 75, 60, 70, 70, 60],
                name : '能力'
            },
            {
                value : [80, 100, 80, 85, 60, 75, 80, 100],
                name : '兴趣'
            }
        ]
    }]
};

var myChart = Echarts.init(document.getElementsByClassName('echarts')[0]);
myChart.setOption(option);


	



	

	
