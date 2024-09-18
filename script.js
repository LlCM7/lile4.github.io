 
// 获取所有图片元素
const images = document.querySelectorAll('.gallery img');

// 为每张图片添加点击事件，实现图片预览
images.forEach(image => {
    image.addEventListener('click', () => {
        // 创建一个覆盖整个屏幕的div
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        // 创建一个包含图片的div
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        // 创建一个新的图片元素，并设置src
        const newImg = new Image();
        newImg.src = image.src;

        // 当图片加载完成后，显示覆盖层和图片
        newImg.onload = () => {
            imgContainer.appendChild(newImg);
            overlay.appendChild(imgContainer);
            document.body.appendChild(overlay);

            // 点击覆盖层关闭图片预览
            overlay.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
        };
    });
});
 