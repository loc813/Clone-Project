// hieu ung chay slide 1
const imgList_1 = document.querySelector('.img-list-1');
let scrollValue_1 = 0;
let isScrolling_1 = true;
let isMouseOver = false;

imgList_1.addEventListener('mouseenter', () => {
    isMouseOver = true;
});

imgList_1.addEventListener('mouseleave', () => {
    isMouseOver = false;
});

function scrollImages_1(timestamp) {
    if (isScrolling_1) {
        // Điều chỉnh tốc độ cuộn dựa trên trạng thái chuột
        const scrollSpeed = isMouseOver ? -1 : 1; // Sử dụng -1 để cuộn về phía trái, 1 để cuộn về phía phải
        scrollValue_1 += scrollSpeed; // Điều chỉnh tốc độ cuộn tại đây
        imgList_1.scrollLeft = scrollValue_1;

        if (scrollValue_1 >= imgList_1.scrollWidth - imgList_1.clientWidth) {
            scrollValue_1 = 0;
        }

        requestAnimationFrame(scrollImages_1);
    }
}

requestAnimationFrame(scrollImages_1);


// hieu ung chay slide 2 
const imgList_2 = document.querySelector('.img-list-2');
let scrollValue_2 = 0;
let isScrolling_2 = true;
let scrollSpeed = 1; // Tốc độ mặc định

imgList_2.addEventListener('mouseenter', () => {
    // Khi trỏ chuột vào, giảm tốc độ cuộn
    scrollSpeed = 0.2;
});

imgList_2.addEventListener('mouseleave', () => {
    // Khi chuột rời khỏi, quay lại tốc độ bình thường
    scrollSpeed = 1;
});

function scrollImages_2(timestamp) {
    if (isScrolling_2) {
        scrollValue_2 += scrollSpeed; // Điều chỉnh tốc độ cuộn tại đây
        imgList_2.scrollLeft = scrollValue_2;

        if (scrollValue_2 <= 0) {
            scrollValue_2 = imgList_2.scrollWidth - imgList_2.clientWidth;
        }

        requestAnimationFrame(scrollImages_2);
    }
}

requestAnimationFrame(scrollImages_2);

// hieu ung slide 3


