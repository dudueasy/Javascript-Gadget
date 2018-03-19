# 说明
* 这个脚本用来增强HTML5视频播放器 
* 该脚本仅针对xiedaimala生效, 仅对存在 HTML5 video 播放器的页面生效. 不会影响提交答案页面的键盘事件.

# 功能
* 1. 通过对keydown事件监听, 实现了视频播放器的控制, 对应键位的原事件将会被阻止.
* 2. 修改video.preload为 auto, 提高缓存速率
* 3. 通过setTimeout延时加载, 覆盖原视频播放器键盘控制.

# 使用
* 脚本使用
    * 推荐安装:
        * 结合浏览器插件 violentmonkey 来实现脚本自动引入和更新
        * 脚本仓库(openuserjs): https://openuserjs.org/scripts/dudueasy/video-control-by-apolo-for-xiedaimala
        * 在安装了 violentmonkey 插件的前提下, 可以点击OpenUserJS仓库右上角的 install 一键安装到violentmonkey.
    * 简易用法:
        * 直接将脚本内容粘贴到 Console 中运行.

* 键盘控制
    * 方向键: 步进和步退, 默认为5s
        * 按住 SHIFT 使步伐增大一倍   
    * f键: 全屏和退出全屏
    * "." 和",": 视频加速和减速, 视频速率会显示在Console中
    * w键: 初步实现网页全屏