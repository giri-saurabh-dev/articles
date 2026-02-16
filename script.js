lucide.createIcons();

// Staggered Entrance
const items = document.querySelectorAll('.article-item');
items.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
    }, 100 * i);
});