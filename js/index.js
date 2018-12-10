$(function(){
   $("img").lazyload({effect: "fadeIn",placeholder : "img/lazyload.gif",});
	$('.xmhouse_li>li').mouseenter(function(){
		var xuhao = $(this).index();
		$(this).parents('.xm_fl_hd').siblings('.xm_bg').find('.xm_bg_rh').eq(xuhao).show().siblings().hide()
		
		//下面不能删除
	})
	
	//健康  热门 酷玩 路由器 出行
		$('.xmhouse_li2>li').mouseenter(function(){
		var xuhao = $(this).index();
		$(this).parents('.xm_fl_hd').siblings('.xm_bg').find('.xm_bg_rh').eq(xuhao).show().siblings().hide()
		
		//下面不能删除
	})
	//热门 耳机音响 电源  电池储蓄卡
	$('.xmhouse_li3>li').mouseenter(function(){
		var xuhao = $(this).index();
		$(this).parents('.xm_fl_hd').siblings('.xm_bg').find('.xm_bg_rh').eq(xuhao).show().siblings().hide()
		
		//下面不能删除
	})
	
	//热门 耳机音响 电源  电池储蓄卡
	$('.xmhouse_li5>li').mouseenter(function(){
		var xuhao = $(this).index();
		$(this).parents('.xm_fl_hd').siblings('.xm_bg').find('.xm_bg_rh').eq(xuhao).show().siblings().hide()
		
		//下面不能删除
	})
	//热门 耳机音响 电源  电池储蓄卡
	$('.xmhouse_li6>li').mouseenter(function(){
		var xuhao = $(this).index();
		$(this).parents('.xm_fl_hd').siblings('.xm_bg').find('.xm_bg_rh').eq(xuhao).show().siblings().hide()
		
		//下面不能删除
	})
				var num = 0;

//          定时函数
				function run(){
					num++;
					if(num>4){
						num=0;
					}
					// 找到图片，隐藏全部图片，显示一张图片
		        $('.bannerlb>img').eq(num).fadeIn(800).siblings('img').fadeOut(800);
				$('.bnnerul>li').eq(num).addClass('active').siblings().removeClass('active');	

				}
				
			
				//设置定时器
				var timer = setInterval(run,2000);
			//  鼠标放上去定时器 
			   $('.bannerlb').hover(function(){
			   	clearInterval(timer);
			   },function(){
			   	timer = setInterval(run,2000);
			   })
			   
			 // 鼠标移入小点效果
			 $('.bnnerul>li').mouseenter(function(){
			 	//获得下标
			 	
			 	xh = $(this).index();
			 	$('.bnnerul>li').eq(xh).addClass('active').siblings().removeClass('active');
			 	$('.bannerlb>img').eq(xh).fadeIn(2000).siblings('img').fadeOut(2000);
			
			  });
			 // 鼠标右击效果
			   $('.left').click(function(){
			   
			   	num--;
			   	if(num<0){
			   		num =4;
			   	}
			   $('.bannerlb>img').eq(num).stop().fadeIn(1000).siblings('img').fadeOut(1000);
			   $('.bnnerul>li').eq(num).addClass('active').siblings().removeClass('active');
			   	
			 	
			   })
			   // 鼠标右机效果
			   $('.right').click(function(){
			   	run();
			   })
	//下面是结束符
	
		// 自定义时间
			// 月份的取值范围是0-11
			var w = new Date(2019,1,4,0,0,0);
			
			// 获取未来时间的时间节点
			var endTime = w.getTime()
			
			// 设置定时器
				setInterval(function(){
					// 获取当前时间
					var timer = new Date();
					// 将当前时间传换为时间节点
					var startTime = timer.getTime()
					
					// 计算时间差
					var stepTime = endTime - startTime;
					// 计算时间差中有多少天
					var DTime = parseInt(stepTime/(24*60*60*1000));
					// 计算时间差中的小时数	
					var HTime =parseInt(stepTime%(24*60*60*1000)/(60*60*1000));
					
					// 计算分钟数
					var MTime = parseInt(stepTime%(60*60*1000)/(60*1000))
					
					// 计算秒数
					var STime = parseInt(stepTime%(60*1000)/1000)
					
					
					h.innerHTML = HTime
					m.innerHTML = MTime
					s.innerHTML = STime
					
				},1000)
				
				// 返回顶部
				$('.gdw_jz_active').click(function(){
					$('body,html').animate({'scrollTop':'0'})
					
				})
				// 设置出现底部出现时间
				$(document).scroll(function(){
					//创建一个变量 获得当前滚动条的值
				var sTop = $(document).scrollTop();
				
					// 判断滚动条大于距离显示
				if(sTop>600){
					$('.gdw_jz_active').stop().fadeIn(300);
				}else{
					// 判断滚动条小于距离隐藏
					$('.gdw_jz_active').stop().fadeOut(300);
				}
				})
				
			// 点击左边滑动
			var dj=0;
			if(dj==0){
				$('.xm_left').css('color','rgb(224, 224, 224)');
			}
			$('.xm_left').click(function(){	
				$('.xm_right').css('color','black');
				$('.sp_show_li').stop().animate({'left':'0px'},800)
				$('.xm_left').css('color','rgb(224, 224, 224)');
			})
			// 点击右边滑动
			$('.xm_right').click(function(){
				
				$('.xm_left').css('color','black');
				$('.sp_show_li').stop().animate({'left':'-744px'},800)
				$('.xm_right').css('color','rgb(224, 224, 224)');
			})
		// 为你推荐点击右边效果
		//  定义一个下标
		   		var tjdj=0;
		   		// 判断下标为零，做点图标是暗色的
		   		if(tjdj==0){
		   				$('.xmhouse_left').css('color','#e0e0e0');
		   				
		   		}
		 
		   		// 点击鼠标点击效果
			$('.xmhouse_left').click(function(){
			$('.xmhouse_right').css('color','black');
				tjdj--;
				
				if(tjdj==0){
						// 当点击第二下的时候右键变灰色
					$('.xmhouse_left').css('color','#e0e0e0');
	
					}
				if(tjdj<0){
					tjdj=0;
					
				}
				$('.two4').stop().animate({'left':tjdj*-1226+'px'},1000)
				})
			//点击鼠标右边点击效果
			// 点击鼠标点击效果
			
			$('.xmhouse_right').click(function(){
				//鼠标有点击的时候图标变色
					$('.xmhouse_left').css('color','black');
				tjdj++;
				if(tjdj==2){
						// 当点击第二下的时候右键变灰色
						$('.xmhouse_right').css('color','#e0e0e0');
	
					}
				
				// 判断鼠标点击为二的时候停止点击
				if(tjdj>2){
				
					tjdj=2;
					
				}
				// 点击往左边移动距离
				$('.two4').stop().animate({'left':tjdj*-1226+'px'},1000)
			
				
			})
			// 导航栏菜单
			$('.ul_first').hover(function(){
				$(this).find('.xm_xlcd').stop().animate({height:229},300)
			},function(){
				
				$(this).find('.xm_xlcd').stop().animate({height:0},300)
			})
			
			
		// 
			// 抓取元素
			$('.ul_first>li').mouseenter(function(){
					var xuhao = $(this).index();
					$(this).siblings('.xm_xlcd').find('.xm_xl').eq(xuhao).show().siblings().hide();
			})
		//内容抓取
		
		 var a=0;
		 var b=0;
		$('.gy_kuandu>li').each(function(){
			//获取js原生对象 
			var jqthis = $(this)[0];
			// 定义定义总管变量
			jqthis.nrdj=0;
		})
			// 鼠标点击右键开始
			$('.right1').click(function(){
				// 让序号自增
			
			var jqthis=	$(this).parents('li')[0];
				
			jqthis.nrdj++;
			var len = $(this).parents('.kuandu_a').siblings('.two5').find('li').length;
			
			if(jqthis.nrdj>len-1){
				jqthis.nrdj=len-1;
			}
			// 每次点击图片，进行滑动
			$(this).parents('.kuandu_a').siblings('.two5').stop().animate({'left':jqthis.nrdj*-296+'px'},1000,function(){
							b=0;
			})
			// 每次点击图片小点进行滑动

			$(this).parents('.kuandu_a').siblings('.bnnerul2').find('li').stop().eq(jqthis.nrdj).addClass('active').siblings().removeClass('active');
			b=1;
		})
			
		// 鼠标点击左边
		
		
		$('.left1').click(function(){
			var jqthis=	$(this).parents('li')[0];
			jqthis.nrdj--;
			// 让图片回到第一个
			if(jqthis.nrdj<0){
				jqthis.nrdj=0;
			}
			// 获取图片长度
			
			// 每次点击图片，进行滑动
			$(this).parents('.kuandu_a').siblings('.two5').stop().animate({'left':jqthis.nrdj*-296+'px'},1000,function(){
							b=0;
			})
			// 每次点击图片小点进行滑动
			$(this).parents('.kuandu_a').siblings('.bnnerul2').find('li').stop().eq(jqthis.nrdj).addClass('active').siblings().removeClass('active');
			b=1;
		})
		
  
  //下面不能删除
  // 控制鼠标经过列表出现上滑效果
  $('.xm_bg_bj_h>li').hover(function(){
  		$(this).find('.review-wrapper').animate({'top':'220px'},300)
  },function(){
  	$(this).find('.review-wrapper').animate({'top':'300px'},300)
  })
  
  // 懒加载
  
  	
  
})
