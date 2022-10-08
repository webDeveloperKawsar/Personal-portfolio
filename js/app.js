document.querySelector(".home").addEventListener("click", function () {
    if (document.querySelector(".home-page-wrapper").classList.contains("home-page-wrapper")) {
		
        document.querySelector(".home a").classList.add("menu-color");
        document.querySelector(".home-page-wrapper").classList.add("home-page-wrapper-active");
		
        document.querySelector(".about-me a").classList.remove("menu-color");
        document.querySelector(".about-page-wrapper").classList.remove("about-page-wrapper-active");
		
		document.querySelector(".resume a").classList.remove("menu-color");
        document.querySelector(".resume-page-wrapper").classList.remove("resume-page-wrapper-active");
		
		document.querySelector(".protfolio a").classList.remove("menu-color");
        document.querySelector(".protfolio-page-wrapper").classList.remove("protfolio-page-wrapper-active");
		
		document.querySelector(".blog a").classList.remove("menu-color");
        document.querySelector(".blog-page-wrapper").classList.remove("blog-page-wrapper-active");
		
		document.querySelector(".contact a").classList.remove("menu-color");
        document.querySelector(".contact-page-wrapper").classList.remove("contact-page-wrapper-active");
	}
});

// home page job title slidshow start
setInterval(function () {
    if (document.getElementsByClassName("page-job-title-wrapper")[0].classList.contains("page-job-title-wrapper-active")) {
        document.getElementsByClassName("page-job-title-wrapper")[1].classList.add("page-job-title-wrapper-active");
        document.getElementsByClassName("page-job-title-wrapper")[0].classList.remove("page-job-title-wrapper-active");
    } else if (document.getElementsByClassName("page-job-title-wrapper")[1].classList.contains("page-job-title-wrapper-active")) {
        document.getElementsByClassName("page-job-title-wrapper")[0].classList.add("page-job-title-wrapper-active");
        document.getElementsByClassName("page-job-title-wrapper")[1].classList.remove("page-job-title-wrapper-active");
    }
}, 3000);
// home page job title slidshow end


// about page start
document.querySelector(".about-me").addEventListener("click", function () {
    if (document.querySelector(".about-page-wrapper").classList.contains("about-page-wrapper")) {
		
        document.querySelector(".about-me a").classList.add("menu-color");
        document.querySelector(".about-page-wrapper").classList.add("about-page-wrapper-active");
		
        document.querySelector(".home a").classList.remove("menu-color");
        document.querySelector(".home-page-wrapper").classList.remove("home-page-wrapper-active");
		
		document.querySelector(".resume a").classList.remove("menu-color");
        document.querySelector(".resume-page-wrapper").classList.remove("resume-page-wrapper-active");
		
		document.querySelector(".protfolio a").classList.remove("menu-color");
        document.querySelector(".protfolio-page-wrapper").classList.remove("protfolio-page-wrapper-active");
		
		document.querySelector(".blog a").classList.remove("menu-color");
        document.querySelector(".blog-page-wrapper").classList.remove("blog-page-wrapper-active");
		
		document.querySelector(".contact a").classList.remove("menu-color");
        document.querySelector(".contact-page-wrapper").classList.remove("contact-page-wrapper-active");
    }
});

// about third section testimonials start

document.querySelector("#T-angle-right-button").addEventListener("click",function(){
	if(document.getElementsByClassName("T-cont")[0].classList.contains("T-fstCont-active")){
		document.getElementsByClassName("T-cont")[0].classList.add("T-fstCont");
		document.getElementsByClassName("T-cont")[0].classList.remove("T-fstCont-active");
		document.querySelector(".fstImage-active").classList.add("fstImage");
		document.querySelector(".fstImage-active").classList.remove("fstImage-active");
		
		document.getElementsByClassName("T-cont")[1].classList.add("T-scndCont");
		document.getElementsByClassName("T-cont")[1].classList.remove("T-scndCont-active");
		document.querySelector(".scndImage-active").classList.add("scndImage");
		document.querySelector(".scndImage-active").classList.remove("scndImage-active");
		
		document.getElementsByClassName("T-cont")[2].classList.add("T-trdCont-active");
		document.getElementsByClassName("T-cont")[2].classList.remove("T-trdCont");
		document.querySelector(".trdImage").classList.add("trdImage-active");
		document.querySelector(".trdImage").classList.remove("trdImage");	
	}
});

document.querySelector("#T-angle-left-button").addEventListener("click",function(){
	if(document.getElementsByClassName("T-cont")[0].classList.contains("T-fstCont")){
		document.getElementsByClassName("T-cont")[0].classList.add("T-fstCont-active");
		document.getElementsByClassName("T-cont")[0].classList.remove("T-fstCont");
		document.querySelector(".fstImage").classList.add("fstImage-active");
		document.querySelector(".fstImage").classList.remove("fstImage");
		
		document.getElementsByClassName("T-cont")[1].classList.add("T-scndCont-active");
		document.getElementsByClassName("T-cont")[1].classList.remove("T-scndCont");
		document.querySelector(".scndImage").classList.add("scndImage-active");
		document.querySelector(".scndImage").classList.remove("scndImage");
		
		document.getElementsByClassName("T-cont")[2].classList.add("T-trdCont");
		document.getElementsByClassName("T-cont")[2].classList.remove("T-trdCont-active");
		document.querySelector(".trdImage-active").classList.add("trdImage");
		document.querySelector(".trdImage-active").classList.remove("trdImage-active");
	}
});

// about third section testimonials end

// about forth section Cilents start

document.querySelector("#cl-angle-right-button").addEventListener("click",function(){
	
	if(document.getElementsByClassName("cl-img")[0].classList.contains("cl-img1f")){
		document.getElementsByClassName("cl-img")[0].classList.add("cl-img1s");
		document.getElementsByClassName("cl-img")[0].classList.remove("cl-img1f");
		document.getElementsByClassName("cl-img")[1].classList.add("cl-img2s");
		document.getElementsByClassName("cl-img")[1].classList.remove("cl-img2f");
		document.getElementsByClassName("cl-img")[2].classList.add("cl-img3s");
		document.getElementsByClassName("cl-img")[2].classList.remove("cl-img3f");
		document.getElementsByClassName("cl-img")[3].classList.add("cl-img4s");
		document.getElementsByClassName("cl-img")[3].classList.remove("cl-img4f");
		document.getElementsByClassName("cl-img")[4].classList.add("cl-img5s");
		document.getElementsByClassName("cl-img")[4].classList.remove("cl-img5f");
		document.getElementsByClassName("cl-img")[5].classList.add("cl-img6s");
		document.getElementsByClassName("cl-img")[5].classList.remove("cl-img6f");
		document.getElementsByClassName("cl-img")[6].classList.add("cl-img7s");
		document.getElementsByClassName("cl-img")[6].classList.remove("cl-img7f");
	}else if(document.getElementsByClassName("cl-img")[0].classList.contains("cl-img1s")){
		document.getElementsByClassName("cl-img")[0].classList.add("cl-img1t");
		document.getElementsByClassName("cl-img")[0].classList.remove("cl-img1s");
		document.getElementsByClassName("cl-img")[1].classList.add("cl-img2t");
		document.getElementsByClassName("cl-img")[1].classList.remove("cl-img2s");
		document.getElementsByClassName("cl-img")[2].classList.add("cl-img3t");
		document.getElementsByClassName("cl-img")[2].classList.remove("cl-img3s");
		document.getElementsByClassName("cl-img")[3].classList.add("cl-img4t");
		document.getElementsByClassName("cl-img")[3].classList.remove("cl-img4s");
		document.getElementsByClassName("cl-img")[4].classList.add("cl-img5t");
		document.getElementsByClassName("cl-img")[4].classList.remove("cl-img5s");
		document.getElementsByClassName("cl-img")[5].classList.add("cl-img6t");
		document.getElementsByClassName("cl-img")[5].classList.remove("cl-img6s");
		document.getElementsByClassName("cl-img")[6].classList.add("cl-img7t");
		document.getElementsByClassName("cl-img")[6].classList.remove("cl-img7s");
	}
	
});

document.querySelector("#cl-angle-left-button").addEventListener("click",function(){
	
	if(document.getElementsByClassName("cl-img")[0].classList.contains("cl-img1s")){
		document.getElementsByClassName("cl-img")[0].classList.add("cl-img1f");
		document.getElementsByClassName("cl-img")[0].classList.remove("cl-img1s");
		document.getElementsByClassName("cl-img")[1].classList.add("cl-img2f");
		document.getElementsByClassName("cl-img")[1].classList.remove("cl-img2s");
		document.getElementsByClassName("cl-img")[2].classList.add("cl-img3f");
		document.getElementsByClassName("cl-img")[2].classList.remove("cl-img3s");
		document.getElementsByClassName("cl-img")[3].classList.add("cl-img4f");
		document.getElementsByClassName("cl-img")[3].classList.remove("cl-img4s");
		document.getElementsByClassName("cl-img")[4].classList.add("cl-img5f");
		document.getElementsByClassName("cl-img")[4].classList.remove("cl-img5s");
		document.getElementsByClassName("cl-img")[5].classList.add("cl-img6f");
		document.getElementsByClassName("cl-img")[5].classList.remove("cl-img6s");
		document.getElementsByClassName("cl-img")[6].classList.add("cl-img7f");
		document.getElementsByClassName("cl-img")[6].classList.remove("cl-img7s");
	}else if(document.getElementsByClassName("cl-img")[0].classList.contains("cl-img1t")){
		document.getElementsByClassName("cl-img")[0].classList.add("cl-img1s");
		document.getElementsByClassName("cl-img")[0].classList.remove("cl-img1t");
		document.getElementsByClassName("cl-img")[1].classList.add("cl-img2s");
		document.getElementsByClassName("cl-img")[1].classList.remove("cl-img2t");
		document.getElementsByClassName("cl-img")[2].classList.add("cl-img3s");
		document.getElementsByClassName("cl-img")[2].classList.remove("cl-img3t");
		document.getElementsByClassName("cl-img")[3].classList.add("cl-img4s");
		document.getElementsByClassName("cl-img")[3].classList.remove("cl-img4t");
		document.getElementsByClassName("cl-img")[4].classList.add("cl-img5s");
		document.getElementsByClassName("cl-img")[4].classList.remove("cl-img5t");
		document.getElementsByClassName("cl-img")[5].classList.add("cl-img6s");
		document.getElementsByClassName("cl-img")[5].classList.remove("cl-img6t");
		document.getElementsByClassName("cl-img")[6].classList.add("cl-img7s");
		document.getElementsByClassName("cl-img")[6].classList.remove("cl-img7t");
	}
	
});
// about forth section Cilents end

// about page end







// resume page start

document.querySelector(".resume").addEventListener("click", function () {
    if (document.querySelector(".resume-page-wrapper").classList.contains("resume-page-wrapper")) {
		
        document.querySelector(".resume a").classList.add("menu-color");
        document.querySelector(".resume-page-wrapper").classList.add("resume-page-wrapper-active");
		
        document.querySelector(".home a").classList.remove("menu-color");
        document.querySelector(".home-page-wrapper").classList.remove("home-page-wrapper-active");
		
		document.querySelector(".about-me a").classList.remove("menu-color");
        document.querySelector(".about-page-wrapper").classList.remove("about-page-wrapper-active");
		
		document.querySelector(".protfolio a").classList.remove("menu-color");
        document.querySelector(".protfolio-page-wrapper").classList.remove("protfolio-page-wrapper-active");
		
		document.querySelector(".blog a").classList.remove("menu-color");
        document.querySelector(".blog-page-wrapper").classList.remove("blog-page-wrapper-active");
		
		document.querySelector(".contact a").classList.remove("menu-color");
        document.querySelector(".contact-page-wrapper").classList.remove("contact-page-wrapper-active");
    }
});

// Resume page end

// protfolio page start
document.querySelector(".protfolio").addEventListener("click", function () {
    if (document.querySelector(".protfolio-page-wrapper").classList.contains("protfolio-page-wrapper")) {
		
        document.querySelector(".protfolio a").classList.add("menu-color");
        document.querySelector(".protfolio-page-wrapper").classList.add("protfolio-page-wrapper-active");
		
		document.querySelector(".home a").classList.remove("menu-color");
        document.querySelector(".home-page-wrapper").classList.remove("home-page-wrapper-active");
		
        document.querySelector(".about-me a").classList.remove("menu-color");
        document.querySelector(".about-page-wrapper").classList.remove("about-page-wrapper-active");
		
		document.querySelector(".resume a").classList.remove("menu-color");
        document.querySelector(".resume-page-wrapper").classList.remove("resume-page-wrapper-active");
		
		document.querySelector(".blog a").classList.remove("menu-color");
        document.querySelector(".blog-page-wrapper").classList.remove("blog-page-wrapper-active");
		
		document.querySelector(".contact a").classList.remove("menu-color");
        document.querySelector(".contact-page-wrapper").classList.remove("contact-page-wrapper-active");
    }
});

// portfolio content start
document.querySelector(".SoundCloud").addEventListener("mouseover",function(){
	
	document.querySelector(".SoundCloud-span").classList.add("port-span");
	document.querySelector(".SoundCloud-i").classList.add("port-i");
	document.querySelector(".SoundCloud-img").classList.add("port-img");
	
});
document.querySelector(".SoundCloud").addEventListener("mouseout",function(){
	
	document.querySelector(".SoundCloud-span").classList.remove("port-span");
	document.querySelector(".SoundCloud-i").classList.remove("port-i");
	document.querySelector(".SoundCloud-img").classList.remove("port-img");
	
});

document.querySelector(".Detailed2").addEventListener("mouseover",function(){
	
	document.querySelector(".Detailed2-span").classList.add("port-span");
	document.querySelector(".Detailed2-i").classList.add("port-i");
	document.querySelector(".Detailed2-img").classList.add("port-img");
	
});
document.querySelector(".Detailed2").addEventListener("mouseout",function(){
	
	document.querySelector(".Detailed2-span").classList.remove("port-span");
	document.querySelector(".Detailed2-i").classList.remove("port-i");
	document.querySelector(".Detailed2-img").classList.remove("port-img");
	
});

document.querySelector(".Vimeo1").addEventListener("mouseover",function(){
	
	document.querySelector(".Vimeo1-span").classList.add("port-span");
	document.querySelector(".Vimeo1-i").classList.add("port-i");
	document.querySelector(".Vimeo1-img").classList.add("port-img");
	
});
document.querySelector(".Vimeo1").addEventListener("mouseout",function(){
	
	document.querySelector(".Vimeo1-span").classList.remove("port-span");
	document.querySelector(".Vimeo1-i").classList.remove("port-i");
	document.querySelector(".Vimeo1-img").classList.remove("port-img");
	
});

document.querySelector(".Detailed1").addEventListener("mouseover",function(){
	
	document.querySelector(".Detailed1-span").classList.add("port-span");
	document.querySelector(".Detailed1-i").classList.add("port-i");
	document.querySelector(".Detailed1-img").classList.add("port-img");
	
});
document.querySelector(".Detailed1").addEventListener("mouseout",function(){
	
	document.querySelector(".Detailed1-span").classList.remove("port-span");
	document.querySelector(".Detailed1-i").classList.remove("port-i");
	document.querySelector(".Detailed1-img").classList.remove("port-img");
	
});

document.querySelector(".Mockup1").addEventListener("mouseover",function(){
	
	document.querySelector(".Mockup1-span").classList.add("port-span");
	document.querySelector(".Mockup1-i").classList.add("port-i");
	document.querySelector(".Mockup1-img").classList.add("port-img");
	
});
document.querySelector(".Mockup1").addEventListener("mouseout",function(){
	
	document.querySelector(".Mockup1-span").classList.remove("port-span");
	document.querySelector(".Mockup1-i").classList.remove("port-i");
	document.querySelector(".Mockup1-img").classList.remove("port-img");
	
});

document.querySelector(".YouTube").addEventListener("mouseover",function(){
	
	document.querySelector(".YouTube-span").classList.add("port-span");
	document.querySelector(".YouTube-i").classList.add("port-i");
	document.querySelector(".YouTube-img").classList.add("port-img");
	
});
document.querySelector(".YouTube").addEventListener("mouseout",function(){
	
	document.querySelector(".YouTube-span").classList.remove("port-span");
	document.querySelector(".YouTube-i").classList.remove("port-i");
	document.querySelector(".YouTube-img").classList.remove("port-img");
	
});
// portfolio content end

// portfolio button start
// protfolio button neme all start
document.querySelector(".port-all-btn").addEventListener("click",function(){
	
		document.querySelector(".port-all-btn").classList.add("port-btn");
		
		document.querySelector(".port-detailed-btn").classList.remove("port-btn");
		document.querySelector(".port-mockups-btn").classList.remove("port-btn");
		document.querySelector(".port-soundCloud-btn").classList.remove("port-btn");
		document.querySelector(".port-vimeo-btn").classList.remove("port-btn");
		document.querySelector(".port-youTube-btn").classList.remove("port-btn");

		document.querySelector(".SoundCloud").classList.add("SoundCloud-active");
		document.querySelector(".Detailed2").classList.add("Detailed2-active");
		document.querySelector(".Vimeo1").classList.add("Vimeo1-active");
		document.querySelector(".Detailed1").classList.add("Detailed1-active");
		document.querySelector(".Mockup1").classList.add("Mockup1-active");
		document.querySelector(".YouTube").classList.add("YouTube-active");

		document.querySelector(".Detailed2").classList.remove("just-Detailed2-active");
		document.querySelector(".Detailed1").classList.remove("just-Detailed1-active");
		document.querySelector(".Mockup1").classList.remove("just-Mockup1-active");
		document.querySelector(".SoundCloud").classList.remove("just-SoundCloud-active");
		document.querySelector(".Vimeo1").classList.remove("just-Vimeo1-active");
		document.querySelector(".YouTube").classList.remove("just-YouTube-active");
     
});
// protfolio button neme all end
// protfolio button neme detailed start
document.querySelector(".port-detailed-btn").addEventListener("click",function(){
	
		document.querySelector(".port-detailed-btn").classList.add("port-btn");
		
		document.querySelector(".Detailed2").classList.add("just-Detailed2-active");
		document.querySelector(".Detailed1").classList.add("just-Detailed1-active");
		
		document.querySelector(".port-all-btn").classList.remove("port-btn");
		document.querySelector(".port-mockups-btn").classList.remove("port-btn");
		document.querySelector(".port-soundCloud-btn").classList.remove("port-btn");
		document.querySelector(".port-vimeo-btn").classList.remove("port-btn");
		document.querySelector(".port-youTube-btn").classList.remove("port-btn");

		document.querySelector(".SoundCloud").classList.remove("SoundCloud-active");
		document.querySelector(".Vimeo1").classList.remove("Vimeo1-active");
		document.querySelector(".Mockup1").classList.remove("Mockup1-active");
		document.querySelector(".YouTube").classList.remove("YouTube-active");

		document.querySelector(".Mockup1").classList.remove("just-Mockup1-active");
		document.querySelector(".SoundCloud").classList.remove("just-SoundCloud-active");
		document.querySelector(".Vimeo1").classList.remove("just-Vimeo1-active");
		document.querySelector(".YouTube").classList.remove("just-YouTube-active");
});
// protfolio button neme detailed end
// protfolio button neme mockups start
document.querySelector(".port-mockups-btn").addEventListener("click",function(){

		document.querySelector(".port-mockups-btn").classList.add("port-btn");
		
		document.querySelector(".Mockup1").classList.add("just-Mockup1-active");

		document.querySelector(".port-all-btn").classList.remove("port-btn");
		document.querySelector(".port-detailed-btn").classList.remove("port-btn");
		document.querySelector(".port-soundCloud-btn").classList.remove("port-btn");
		document.querySelector(".port-vimeo-btn").classList.remove("port-btn");
		document.querySelector(".port-youTube-btn").classList.remove("port-btn");

		document.querySelector(".SoundCloud").classList.remove("SoundCloud-active");
		document.querySelector(".Vimeo1").classList.remove("Vimeo1-active");
		document.querySelector(".YouTube").classList.remove("YouTube-active");
		document.querySelector(".Detailed1").classList.remove("Detailed1-active");
		document.querySelector(".Detailed2").classList.remove("Detailed2-active");

		document.querySelector(".Detailed1").classList.remove("just-Detailed1-active");
		document.querySelector(".Detailed2").classList.remove("just-Detailed2-active");
		document.querySelector(".SoundCloud").classList.remove("just-SoundCloud-active");
		document.querySelector(".Vimeo1").classList.remove("just-Vimeo1-active");
		document.querySelector(".YouTube").classList.remove("just-YouTube-active");
});
// protfolio button neme mockups end
// protfolio button neme soundCloud start
document.querySelector(".port-soundCloud-btn").addEventListener("click",function(){

		document.querySelector(".port-soundCloud-btn").classList.add("port-btn");
		
		document.querySelector(".SoundCloud").classList.add("just-SoundCloud-active");
		
		document.querySelector(".port-all-btn").classList.remove("port-btn");
		document.querySelector(".port-detailed-btn").classList.remove("port-btn");
		document.querySelector(".port-mockups-btn").classList.remove("port-btn");
		document.querySelector(".port-vimeo-btn").classList.remove("port-btn");
		document.querySelector(".port-youTube-btn").classList.remove("port-btn");
		
		document.querySelector(".Mockup1").classList.remove("Mockup1-active");
		document.querySelector(".Vimeo1").classList.remove("Vimeo1-active");
		document.querySelector(".YouTube").classList.remove("YouTube-active");
		document.querySelector(".Detailed1").classList.remove("Detailed1-active");
		document.querySelector(".Detailed2").classList.remove("Detailed2-active");
		
		document.querySelector(".Detailed1").classList.remove("just-Detailed1-active");
		document.querySelector(".Detailed2").classList.remove("just-Detailed2-active");
		document.querySelector(".Mockup1").classList.remove("just-Mockup1-active");
		document.querySelector(".Vimeo1").classList.remove("just-Vimeo1-active");
		document.querySelector(".YouTube").classList.remove("just-YouTube-active");
});
// protfolio button neme soundCloud end
// protfolio button neme vimeo start
document.querySelector(".port-vimeo-btn").addEventListener("click",function(){

		
		document.querySelector(".port-vimeo-btn").classList.add("port-btn");
		
		document.querySelector(".Vimeo1").classList.add("just-Vimeo1-active");
		
		document.querySelector(".port-all-btn").classList.remove("port-btn");
		document.querySelector(".port-detailed-btn").classList.remove("port-btn");
		document.querySelector(".port-mockups-btn").classList.remove("port-btn");
		document.querySelector(".port-soundCloud-btn").classList.remove("port-btn");
		document.querySelector(".port-youTube-btn").classList.remove("port-btn");

		document.querySelector(".Mockup1").classList.remove("Mockup1-active");
		document.querySelector(".SoundCloud").classList.remove("SoundCloud-active");
		document.querySelector(".YouTube").classList.remove("YouTube-active");
		document.querySelector(".Detailed1").classList.remove("Detailed1-active");
		document.querySelector(".Detailed2").classList.remove("Detailed2-active");

		document.querySelector(".Detailed1").classList.remove("just-Detailed1-active");
		document.querySelector(".Detailed2").classList.remove("just-Detailed2-active");
		document.querySelector(".Mockup1").classList.remove("just-Mockup1-active");
		document.querySelector(".SoundCloud").classList.remove("just-SoundCloud-active");
		document.querySelector(".YouTube").classList.remove("just-YouTube-active");
});
// protfolio button neme vimeo end
// protfolio button neme youTube start
document.querySelector(".port-youTube-btn").addEventListener("click",function(){

		document.querySelector(".port-youTube-btn").classList.add("port-btn");
		
		document.querySelector(".YouTube").classList.add("just-YouTube-active");
		
		document.querySelector(".port-all-btn").classList.remove("port-btn");
		document.querySelector(".port-detailed-btn").classList.remove("port-btn");
		document.querySelector(".port-mockups-btn").classList.remove("port-btn");
		document.querySelector(".port-soundCloud-btn").classList.remove("port-btn");
		document.querySelector(".port-vimeo-btn").classList.remove("port-btn");

		document.querySelector(".Mockup1").classList.remove("Mockup1-active");
		document.querySelector(".SoundCloud").classList.remove("SoundCloud-active");
		document.querySelector(".Vimeo1").classList.remove("Vimeo1-active");
		document.querySelector(".Detailed1").classList.remove("Detailed1-active");
		document.querySelector(".Detailed2").classList.remove("Detailed2-active");

		document.querySelector(".Detailed1").classList.remove("just-Detailed1-active");
		document.querySelector(".Detailed2").classList.remove("just-Detailed2-active");
		document.querySelector(".Mockup1").classList.remove("just-Mockup1-active");
		document.querySelector(".SoundCloud").classList.remove("just-SoundCloud-active");
		document.querySelector(".Vimeo1").classList.remove("just-Vimeo1-active");
});
// protfolio button neme youTube end
// portfolio button end
// protfolio page end
