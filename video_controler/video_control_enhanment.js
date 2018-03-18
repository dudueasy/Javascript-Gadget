// 这个脚本用来增强网页播放器 <video>
// 功能:
//// 1. 监听keyDown事件, 替换原事件, 实现键盘控制.
//// 2. 修改video.preload为 auto, 提高缓存速率


(function () {
    //set video variable
    let video = function () {
        // method1  getVideo through selector
        //// please customize selectorPattern before using
        // let selectorPattern = 'div.el-collapse-item.is-active video'
        //
        // let currentVideo = document.querySelector(selectorPattern)


        // method2 getVideo through filtering video.offsetHeight
        let videos = document.querySelectorAll('video')
        if (videos) {
            videos = Array.from(videos)
            let currentVideo = videos.filter((currentElement) => currentElement.offsetHeight !== 0)[0]


            // force video preload
            currentVideo.preload = 'auto'
            return currentVideo
        }
        else {
            console.log('找不到video标签')
            return undefined
        }
    }


//specify functions
    function vidPlayPause() {
        if (video().paused) {
            video().play();
        } else {
            video().pause();
        }
    }

    function vidForward(step) {
        video().currentTime += step;
    }

    function vidBackward(step) {
        video().currentTime -= step;
    }

    function volumeDown() {
        if (video().volume >= 0.1) {
            video().volume -= 0.1;
        }
    }

    function volumeUp() {
        if (video().volume <= 0.9) {
            video().volume += 0.1;
        }
    }

    function fullScreen() {
        if (document.webkitIsFullScreen) {
            video().webkitExitFullScreen();
        }
        else {
            video().webkitRequestFullScreen();
        }
    }

//global eventListener
    window.addEventListener('keydown', function (e) {
        // e.preventDefault()
        let key = e.keyCode;

        // 检验 event.keyCode 的类型
        //// console.log(key)
        //// console.log(typeof  key)

        // 初始化步进的秒数
        let defaultStep = 5
        let currentStep;

        if (video()) {
            // 如果 shift 键触发, 那么步进/布退秒数翻倍
            if (e.shiftKey === true) {
                currentStep = 2 * defaultStep
            }
            else {
                currentStep = defaultStep
            }

            //arrowLeft
            if (key === 37) {
                e.preventDefault()

                vidBackward(currentStep);
            }
            //arrowRight

            if (key === 39) {
                e.preventDefault()

                vidForward(currentStep);
            }

            //arrowUp
            if (key === 38) {
                e.preventDefault()

                volumeUp();
            }

            if (key === 40) {
                e.preventDefault()

                volumeDown();
            }
            //Space key

            if (key === 32) {
                e.preventDefault()

                vidPlayPause();
            }
            //F key
            if (key === 70) {
                e.preventDefault()

                fullScreen();
            }
        }

    });
})()

