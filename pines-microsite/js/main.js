/**
 * 安徽派恩斯金属制品有限公司微官网 - 主交互逻辑
 * 修复版本：移除弃用API、清理未使用代码、优化性能
 */
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScroll();
    initBackToTop();
    initScrollAnimations();
    initContactForm();
    initResizeHandler();
    initScrollEffects();
});

/**
 * 移动端菜单控制
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (closeMenu) {
        closeMenu.addEventListener('click', closeMobileMenu);
    }
    
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMobileMenu);
    }
    
    mobileNavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            setTimeout(closeMobileMenu, 300);
        });
    });
}

/**
 * 平滑滚动
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * 滚动导航高亮 + 回到顶部按钮 + Header效果（合并为节流函数）
 */
function initScrollEffects() {
    const backToTopBtn = document.getElementById('backToTop');
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    
    function updateOnScroll() {
        const scrollPos = window.scrollY + 100;
        
        // 1. 导航高亮
        let currentSection = '';
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
        
        bottomNavItems.forEach(function(item) {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + currentSection) {
                item.classList.add('active');
            }
        });
        
        // 2. 回到顶部按钮
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
        
        // 3. Header 滚动效果
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            }
        }
    }
    
    // 使用节流优化滚动事件
    const throttledScroll = throttle(updateOnScroll, 100);
    window.addEventListener('scroll', throttledScroll);
    updateOnScroll();
}

/**
 * 回到顶部按钮点击事件
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * 滚动动画（IntersectionObserver）
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll(
        '.stat-card, .honor-card, .product-card, .case-card, .quality-card, .process-step, .timeline-item'
    );
    
    animatedElements.forEach(function(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

/**
 * 联系表单处理（前端验证 + 提示）
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[type="text"]').value;
        const phone = contactForm.querySelector('input[type="tel"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        if (!name || !phone || !message) {
            alert('请填写必填项（姓名、电话、留言内容）');
            return;
        }
        
        alert('感谢您的留言！目前在线留言功能暂未开放，请直接拨打电话或发送邮件联系我们。');
        contactForm.reset();
    });
}

/**
 * 响应式导航栏自适应
 */
function initResizeHandler() {
    function handleResize() {
        if (window.innerWidth > 768) {
            const mobileMenu = document.getElementById('mobileMenu');
            const menuOverlay = document.getElementById('menuOverlay');
            if (mobileMenu) mobileMenu.classList.remove('active');
            if (menuOverlay) menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    window.addEventListener('resize', throttle(handleResize, 200));
}

/**
 * 性能优化：节流函数
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(function() { inThrottle = false; }, limit);
        }
    };
}

/**
 * 打印样式优化
 */
window.addEventListener('beforeprint', function() {
    document.body.style.paddingBottom = '0';
});

window.addEventListener('afterprint', function() {
    document.body.style.paddingBottom = '';
});

console.log('安徽派恩斯金属制品有限公司微官网 - 脚本加载完成');
