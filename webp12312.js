document.addEventListener('DOMContentLoaded', () => {
    // 1. 스크롤 애니메이션 (Fade-in 효과)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 관찰할 대상 요소들
    const animatedElements = document.querySelectorAll('.fade-in, .card, .section-title');
    animatedElements.forEach(el => observer.observe(el));

    // 2. 네비게이션 바 배경 변경 (스크롤 시)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 10%';
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.padding = '1.5rem 10%';
            navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        }
    });

    // 3. 카드 클릭 시 간단한 효과 (확장 가능)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').innerText;
            alert(`${title} 프로젝트의 상세 정보는 준비 중입니다!`);
        });
    });
});