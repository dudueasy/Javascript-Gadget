# 说明
* 这个脚本用来增强HTML5视频播放器 

# 功能
* 1. 通过对keydown事件监听对应键位的原事件将会被阻止.
* 2. 修改video.preload为 auto, 提高缓存速率

# 使用
* 脚本使用
    * 结合浏览器插件 violentmonkey 来实现脚本自动引入和更新
    * 脚本仓库(openuserjs): https://openuserjs.org/scripts/dudueasy/video-control-by-apolo

* 键盘控制
    * 方向键: 步进和步退, 默认为5s
        * 按住 SHIFT 使步伐增大一倍   
    * f键: 全屏和退出全屏
    * "." 和",": 视频加速和减速