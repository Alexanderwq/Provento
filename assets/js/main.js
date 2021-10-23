// VIDEO
let videoFile = document.querySelector(".video")
let videoBtn = document.querySelector(".video__button")
let videoIcon = document.querySelector(".video__icon")

function playPause(){
	if (videoFile.paused){
		// Icon replace
		videoIcon.classList.remove("fa-play");
		videoIcon.classList.add("fa-pause");
		// Hide Btn
		videoBtn.style.opacity = 0;
		// Play video
		videoFile.play()
	} else{
		// Video pause
		videoFile.pause()
		// Btn ON
		videoBtn.style.opacity = 1;
		// Icon replace
		videoIcon.classList.add("fa-play");
		videoIcon.classList.remove("fa-pause");
	}
}
// Click Button or VideoFile
videoBtn.addEventListener("click", playPause)
videoFile.addEventListener("click", playPause)


// TEAM SLIDER
let swiper = new Swiper(".team__content", {
	slidesPerView: 3.5,
	spaceBetween: 30,
	breakpoints: {
		320:{
			slidesPerView: 1.2,
		},

		540:{
			slidesPerView: 2.5,
		},

		768:{
			slidesPerView: 3.5,
		}
	}
  });


// CUSTOMERS SLIDER
let swiperReviews = new Swiper(".customers__reviews", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	pagination: {
	  el: ".customers__nav",
	  clickable: true,
	},
	breakpoints: {
		320:{
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		
		768:{
			slidesPerGroup: 3,
			slidesPerView: 3,
		}
	},
  });



