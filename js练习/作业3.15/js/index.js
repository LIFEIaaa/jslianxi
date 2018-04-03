//banner效果
{
	let imgs=document.querySelectorAll(".imgBox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector("#banner");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	})
	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if(n===imgs.length){
			n=0;
		};
		if(n<0){
			n=imgs.length-1;
		};
		for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
		// console.log(n);
	};
	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	};
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		};
	};
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		};
	};
	imgs.forEach(function(ele){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})
}
//闪购部分效果
{
	const prev=document.querySelector(".star_btn1");
	const next=document.querySelector(".star_btn2");
	const inner=document.querySelector(".buy-inner");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-992*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			prev.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-992*n+"px";
	}
}
//内容区域
{
	function content(parent){
		const types=parent.querySelectorAll(".type");
		const goods=parent.querySelectorAll(".goodslist");
		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<types.length;i++){
					types[i].classList.remove("active");
					goods[i].classList.remove("active");
				}
				this.classList.add("active");
				goods[index].classList.add("active");
			}
		})
	}
	const contentlist=document.querySelectorAll(".content");
	contentlist.forEach(function(ele){
		content(ele);
	})
}

// 3.9开始
{
	function wheel(parent){
		let prev=parent.querySelector(".neirong_lbtn");  //按钮
		let next=parent.querySelector(".neirong_rbtn");
		let inner=parent.querySelector(".inner");    //长度最大的
		let contents=parent.querySelectorAll(".content-3" );      //图片
		let pagers=parent.querySelectorAll(".lbd1");
		let n=0;
		let l=contents.length;
		next.onclick=function(){
			n++;
			if(n===l){
				n=l-1;
				return;
			}
			inner.style.marginLeft=-296*n+"px";
			pagers[n].classList.add("active");
			pagers[n-1].classList.remove("active");
			obj=pagers[n];
		};
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.marginLeft=-296*n+"px";
			pagers[n].classList.add("active");
			pagers[n+1].classList.remove("active");
			obj=pagers[n];
		};
		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("active");
				this.classList.add("active");
				obj=this;
				inner.style.marginLeft=index*-296+"px";
				n=index;
			}
		})
	}
	let items=document.querySelectorAll(".gao5_item");
	items.forEach(function(ele){
		wheel(ele);
	})
}


//轮播图效果定位
{
	let labels=document.querySelectorAll(".label");
	let menus=document.querySelectorAll(".menu");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}



//顶部效果
{
	let box=document.querySelector(".box");
	let top=document.querySelector(".top");
	let bottom=document.querySelector(".bottom");
	top.onmouseenter=function(){
		bottom.style.height="350px";
	}
	box.onmouseleave=function(){
		bottom.style.height="0";
	}
}