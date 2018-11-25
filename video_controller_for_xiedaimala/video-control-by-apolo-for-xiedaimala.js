// ==UserScript==
// @name video-control-by-apolo-for-xiedaimala
// @namespace Violentmonkey Scripts
// @match *://xiedaimala.com/tasks/*
// @grant none
// @license MIT
// @version  1.0.8
// ==/UserScript==
// 

(function () { 
  window.onload = function(){ 
    let video;
    function updateVideo(){
      // method1  getVideo through selector
      //// please customize selectorPattern before using
      // let selectorPattern = 'div.el-collapse-item.is-active video'
      //
      // let currentVideo = document.querySelector(selectorPattern)

      // method2 getVideo through filtering video.offsetHeight
      let videos = document.querySelectorAll('video')

      // console.log(videos)
      if (videos.length > 1) {
        videos = Array.from(videos)
        let currentVideo = videos.filter((currentElement) => currentElement.offsetHeight !== 0)[0]

        // force video preload
        currentVideo.preload = 'auto'
        video =  currentVideo
      }
      else if(videos.length === 1){
        video = videos[0] 
      }
      else {
        console.log('找不到video')
        return undefined
      }
    }

    //specify functions
    function vidPlayPause() {
      if (video.paused) {
        video.play();
      }
      else {
        video.pause();
      }
    }

    function vidForward(step) {
      video.currentTime += step;
    }

    function vidBackward(step) {
      video.currentTime -= step;
    }

    function volumeDown() {
      if (video.volume >= 0.1) {
        video.volume -= 0.1;
      }
    }

    function volumeUp() {
      if (video.volume <= 0.9) {
        video.volume += 0.1;
      }
    }

    function speedUp() {
      video.playbackRate += 0.1
      console.log(`current playback speed: ${video().playbackRate}`)
    }

    function speedDown() {
      if (video.playbackRate >= 0.5)
        video.playbackRate -= 0.1
      console.log(`current playback speed: ${video().playbackRate}`)
    }

    function fullScreen() {
      if (document.webkitIsFullScreen) {
        video.webkitExitFullScreen();
      }
      else {
        video.webkitRequestFullScreen();
      }
    }

    //global eventListener
    window.addEventListener('keydown', function (e) {
      updateVideo()
      e.stopImmediatePropagation()
      let key = e.keyCode;

      // 检验 event.keyCode 的类型
      //// console.log(key)
      //// console.log(typeof  key)

      // 初始化步进的秒数
      let defaultStep = 5
      let currentStep;


      // 如果 shift 键触发, 那么步进/布退秒数翻倍
      if (e.shiftKey === true) {
        currentStep = 2 * defaultStep
      }
      else {
        currentStep = defaultStep
      }

      if (video) {
        switch(key){ 
            // case 37:
            //   //arrowLeft
            //   vidBackward(currentStep);
            //   break;
            //
            // case 39:
            //   //arrowRight
            //   vidForward(currentStep);
            //   break;

          case 38:
            //arrowUp
            volumeUp();
            break; 

          case 40:
            volumeDown(); 
            break;

          // case 32:
          //   //Space key
          //   vidPlayPause();
          //   break;

          case 70: 
            fullScreen();
            break;

          case 190:
            // . key
            speedUp();
            break;

          case 188:
            // , key 
            speedDown()
            break;

          case 87: 
            let event = document.createEvent("Event");
            event.initEvent("click", false, true); 
            document.querySelector(' .bulletControl > input[value=网页全屏] ').dispatchEvent(event)
            break; 
        }
      } 
    }, true);
  }
})()
