var ImagesLoadedProgress=function(e,s){var o={selectors:{image:e.querySelectorAll("[data-images-loaded-src]"),progress:e.querySelector(".images-loaded-progress-bar")},classes:{progressBarDoneClass:"images-loaded-progress-bar--done",invisibleClass:"images-loaded--invisible",visibleClass:"images-loaded--visible"},showProgressBarCount:!0,progressBarCountFormat:"{index}/{total}",updateAriaNow:!0,_progressBarUpdateBy:0,_progressBarLevel:0,_progressBarAnimationFrame:s,_progressBarCountText:"",_imageCount:0,_currentImageCount:0,_cb:_cb=s};function t(e,s){var r;e&&s?(e.classList.contains(o.classes.invisibleClass)||e.classList.add(o.classes.invisibleClass),(r=new Image).src=s,r.onload=function(){e.classList.remove(o.classes.invisibleClass),e.classList.add(o.classes.visibleClass),e.src=r.src,o._progressBarLevel+=o._progressBarUpdateBy,o.showProgressBarCount&&(o._currentImageCount=o._currentImageCount+1),a(o._progressBarLevel)}):console.error("Cannot load an image. Missing image or src param")}function a(e){"number"==typeof e?(cancelAnimationFrame(o._progressBarAnimationFrame),o._progressBarAnimationFrame=requestAnimationFrame(function(){o.selectors.progress.style.width=e+"%",o.showProgressBarCount&&(o._progressBarCountText=o.progressBarCountFormat.replace("{index}",o._currentImageCount).replace("{total}",o._imageCount),o.selectors.progress.innerText=o._progressBarCountText),o.updateAriaNow&&o.selectors.progress.setAttribute("aria-valuenow",e),100===Math.round(e)&&(o.selectors.progress.classList.add(o.classes.progressBarDoneClass),"function"==typeof cb&&_cb())})):console.error("Cannot update the progress bar, value param isNaN.")}return{init:function(e){"function"==typeof e&&(_cb=e),function(){var e,s=o.selectors.image;if(o._imageCount=s.length,o._imageCount){o._progressBarUpdateBy=100/o._imageCount;for(var r=0,a=o._imageCount;r<a;r++)(e=s[r].getAttribute("data-images-loaded-src")||s[r].getAttribute("src"))?t(s[r],e):console.error("Cannot find src for image: "+s[r])}}()},loadImage:t,updateProgressBar:a}}((window,document),void 0);