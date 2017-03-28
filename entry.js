
require("./css/style.css")
require("./iconfont/iconfont.css")

var $=require ("./js/lib/jquery.min.js")
var Echarts=require ("./js/com/echarts.min.js")


var s = '我是一个喜欢钻研，有自主学习能力的人。 工作认真，能接受挑战也能承受压力。'
		+'喜欢研究所碰到的各种技术问题，并且执行力强，有新的想法就马上付诸行动去实现。'
		+'我有时间概念，能在约定时间内保证完成任务。'+
		'希望在一个以技术为驱动、有成长空间的公司里从事前端开发工作，不断迎接技术上的挑战，提升自己驾驭大型项目的能力。';
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


$(".minbtn-wrap").on("click",function(){
	$("aside").toggleClass('active')
})
$(".myname").on("click",function(){
	$('html,body').animate({scrollTop: 0}, 800);
})


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

	for(var i=0; i<navArr.length; i++){
			(function(i){
				$(navArr[i]).on('click',function(){
					$('html,body').animate({scrollTop: $(contentArr[i]).offset().top-80}, 800);
				})
			})(i)
		}



	function halfVisible($target){
		var winH=$(window).height(),
		    scrollTop=$(window).scrollTop(),
		    offsetTop=$target.offset().top,
		    $targetH=$target.outerHeight(true);
		return ((scrollTop+winH/2>=offsetTop)&&(offsetTop+$targetH>scrollTop+winH/2))
	}


	


var option = {
    title: {
        text: ''
    },
    tooltip: {},
    // legend: {
    //     data: ['能力', '兴趣']
    // },
    radar: {
        // shape: 'circle',
        indicator: [
           { name: 'HTML&HTML5', max: 100},
           { name: 'CSS&CSS3', max: 100},
           { name: 'JS', max: 100},
           { name: 'jQuery', max: 100},
           { name: 'LESS&SASS', max: 100},
           { name: 'Bootstrap', max: 100},
           { name: 'webpack',max:100},
           { name: 'Vue', max:100}
           
        ]
    },
    series: [{
        name: '能力 vs 兴趣（skill vs interesting）',
        type: 'radar',
        data : [
            {
                value : [90, 80, 75, 80, 60, 70, 70, 60],
                name : '能力'
            },
        ]
    }]
};

var myChart = Echarts.init(document.getElementsByClassName('echarts')[0]);
myChart.setOption(option);


	



	

	
