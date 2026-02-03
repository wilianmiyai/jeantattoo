/* ==========================================
   JEAN TATTOO - LANDING PAGE PREMIUM
   JavaScript - Interações e Funcionalidades
   ========================================== */

// ==================== CONFIGURAÇÕES ====================
// EDITE AQUI SEUS DADOS FACILMENTE:

const CONFIG = {
    // ===== WHATSAPP =====
    // Número do WhatsApp (apenas números, com código do país e DDD)
    whatsappNumero: '555195085124',
    
    // Mensagem automática (será URL encoded automaticamente)
    whatsappMensagem: 'Olá! Vim pelo site do Jean Tattoo. Quero informações e agendamento. Minha ideia é: ____',
    
    // ===== INSTAGRAM =====
    // Nome de usuário do Instagram (sem @)
    instagramUsuario: 'jeantattoo',
    
    // ===== IMAGENS DO PORTFÓLIO =====
    // Adicione suas imagens aqui - basta trocar os caminhos
    // Formatos aceitos: jpg, png, webp
    // Recomendação: imagens quadradas ou próximas de 1:1
    // Categorias disponíveis: realismo, blackwork, colorido, cobertura, anime
    portfolioImagens: [
        {
            src: 'Imagem/501919123_18500507860051094_9197064780641343807_n.jpg',
            alt: 'Tatuagem autoral',
            titulo: 'Arte Autoral',
            categoria: 'realismo'
        },
        {
            src: 'Imagem/548896649_18519731095051094_1076971646964545446_n.webp',
            alt: 'Trabalho exclusivo',
            titulo: 'Trabalho Exclusivo',
            categoria: 'blackwork'
        },
        {
            src: 'Imagem/474586417_18475788163051094_7797768104827953086_n.jpg',
            alt: 'Trabalho autoral',
            titulo: 'Arte Exclusiva',
            categoria: 'realismo'
        },
        {
            src: 'Imagem/constelacao.jpg',
            alt: 'Constelação Aquarela',
            titulo: 'Constelação',
            categoria: 'colorido'
        },
        {
            src: 'Imagem/ganesha.jpg',
            alt: 'Ganesha - Cicatrizada 5 anos',
            titulo: 'Ganesha',
            categoria: 'blackwork'
        },
        {
            src: 'Imagem/saojorge.jpg',
            alt: 'São Jorge',
            titulo: 'São Jorge',
            categoria: 'realismo'
        },
        {
            src: 'Imagem/cobertura.jpg',
            alt: 'Cobertura de cicatriz',
            titulo: 'Cobertura',
            categoria: 'cobertura'
        },
        {
            src: 'Imagem/vegeta.webp',
            alt: 'Dragon Ball Z - Vegeta',
            titulo: 'Vegeta',
            categoria: 'anime'
        },
        {
            src: 'Imagem/lobo.jpg',
            alt: 'Lobo enfurecido',
            titulo: 'Lobo',
            categoria: 'realismo'
        },
        {
            src: 'Imagem/lemmy.jpg',
            alt: 'Lemmy Kilmister - Motorhead',
            titulo: 'Lemmy Kilmister',
            categoria: 'realismo'
        },
        {
            src: 'Imagem/braco.webp',
            alt: 'Fechamento de braço',
            titulo: 'Fechamento Braço',
            categoria: 'blackwork'
        },
        {
            src: 'Imagem/brasil.jpg',
            alt: 'Tatuagem Brasil',
            titulo: 'Brasil',
            categoria: 'colorido'
        },
        {
            src: 'Imagem/tattoo_1.jpg',
            alt: 'Catrina - Cultura Mexicana',
            titulo: 'Catrina',
            categoria: 'realismo'
        },
        {
            src: 'Imagem/tattoo_2.jpg',
            alt: 'Pirata',
            titulo: 'Pirata',
            categoria: 'blackwork'
        },
        {
            src: 'Imagem/tattoo_3.jpg',
            alt: 'Samurai',
            titulo: 'Samurai',
            categoria: 'realismo'
        },
        {
            src: 'Imagem/tattoo_5.webp',
            alt: 'Sweet Tooth - Twisted Metal',
            titulo: 'Sweet Tooth',
            categoria: 'anime'
        },
        {
            src: 'Imagem/tattoo_10.jpg',
            alt: 'Zeus - Deuses Gregos',
            titulo: 'Zeus',
            categoria: 'realismo'
        },
        {
            src: 'Imagem/tattoo_9.webp',
            alt: 'Lobo Werewolf',
            titulo: 'Werewolf',
            categoria: 'blackwork'
        }
    ],
    
    // ===== VÍDEOS =====
    // Tipos suportados:
    // - 'mp4': vídeo local (coloque o arquivo na pasta do site)
    // - 'instagram': embed de Reel do Instagram
    // - 'youtube': embed do YouTube
    videos: [
        {
            tipo: 'mp4',
            src: 'videos/video_1.mp4',
            poster: 'Imagem/501919123_18500507860051094_9197064780641343807_n.jpg',
            titulo: 'Processo Criativo'
        },
        {
            tipo: 'mp4',
            src: 'videos/video_2.mp4',
            poster: 'Imagem/tattoo_2.jpg',
            titulo: 'Pirata'
        },
        {
            tipo: 'mp4',
            src: 'videos/AQOwyMfb8DWPJoJciG7dTMbqIWi3b9Yyc1bG3KZB111Fe8WFJJZPULo-TvEkZj5cHjHFeEnaCSv4S24qOoyLqPRp.mp4',
            poster: 'Imagem/548896649_18519731095051094_1076971646964545446_n.webp',
            titulo: 'Tatuando'
        },
        {
            tipo: 'mp4',
            src: 'videos/AQNl1gMGsUdfGAKLB2oywz-OtcWAH1q2qqEicQbMp5F95kAp4jDhFX88Ck0DYMhc3C5ssSR0I_mGjWHHwPKDoprpVSGlSJ2H.mp4',
            poster: 'Imagem/tattoo_5.webp',
            titulo: 'Arte em Andamento'
        },
        {
            tipo: 'mp4',
            src: 'videos/AQOsGzR_LbH3LCfoXJeP6NRNWRViqFBTZj8v78BfYWMHsYskEamZNMM8E86SonKzivwewI2SmKSv6aGyXcmxwSK-fEiCYNEq.mp4',
            poster: 'Imagem/lobo.jpg',
            titulo: 'Processo'
        },
        {
            tipo: 'mp4',
            src: 'videos/AQP18Gu_TYylTsD6nzTNFQ9KuVhYBhIOjz2HqQT8r-6ZokXLAz6ypokQyPNjFnHXg8foDnNdntn1qveeYGb8jCEKO6r7hKPk.mp4',
            poster: 'Imagem/vegeta.webp',
            titulo: 'Resultado Final'
        }
        // Para adicionar embed do Instagram (Reel):
        // {
        //     tipo: 'instagram',
        //     embedUrl: 'https://www.instagram.com/reel/CODIGO_DO_REEL/embed',
        //     titulo: 'Reel do Instagram'
        // }
        
        // Para adicionar vídeo do YouTube:
        // {
        //     tipo: 'youtube',
        //     videoId: 'ID_DO_VIDEO_YOUTUBE',
        //     titulo: 'Vídeo YouTube'
        // }
    ]
};

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSmoothScroll();
    initHeaderScroll();
    initPortfolio();
    initVideos();
    initModal();
    initScrollAnimationsLegacy(); // Para elementos com .animate-on-scroll
    initScrollAnimations();       // Para elementos com [data-animate]
    initCounters();
    initParallax();
    initParticles();
    initWhatsAppFloat();
});

// ==================== WHATSAPP FLUTUANTE ====================
function initWhatsAppFloat() {
    const whatsappFloat = document.getElementById('whatsappFloat');
    if (!whatsappFloat) return;
    
    // Mostrar após scroll de 500px
    let isVisible = false;
    
    function checkScroll() {
        const shouldShow = window.scrollY > 500;
        
        if (shouldShow && !isVisible) {
            isVisible = true;
            whatsappFloat.classList.add('visible');
        } else if (!shouldShow && isVisible) {
            isVisible = false;
            whatsappFloat.classList.remove('visible');
        }
    }
    
    // Checar posição inicial
    checkScroll();
    
    // Listener com throttle para performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                checkScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ==================== GOTAS DE TINTA ====================
function initCursor() {
    // Só ativar em dispositivos com mouse
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    
    // Container para as gotas
    const inkContainer = document.createElement('div');
    inkContainer.id = 'inkDropContainer';
    inkContainer.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9998; overflow: hidden;';
    document.body.appendChild(inkContainer);
    
    let lastX = 0;
    let lastY = 0;
    let dropInterval = null;
    let isMoving = false;
    
    function createInkDrop(x, y) {
        const drop = document.createElement('div');
        drop.className = 'ink-drop';
        
        // Variações aleatórias para naturalidade
        const size = Math.random() * 12 + 6;
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = Math.random() * 10;
        const duration = Math.random() * 0.8 + 0.6;
        const isGold = Math.random() > 0.7;
        
        drop.style.cssText = `
            position: absolute;
            left: ${x + offsetX}px;
            top: ${y + offsetY}px;
            width: ${size}px;
            height: ${size * 1.3}px;
            background: ${isGold ? 'radial-gradient(ellipse at 30% 20%, rgba(212, 175, 55, 0.9), rgba(180, 140, 20, 0.7))' : 'radial-gradient(ellipse at 30% 20%, rgba(20, 20, 20, 0.95), rgba(0, 0, 0, 0.8))'};
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
            animation: inkFall ${duration}s ease-in forwards;
            box-shadow: ${isGold ? '0 2px 8px rgba(212, 175, 55, 0.5), inset 0 -2px 4px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0, 0, 0, 0.6), inset 0 -2px 4px rgba(0,0,0,0.5)'};
            pointer-events: none;
        `;
        
        inkContainer.appendChild(drop);
        
        // Criar splat quando a gota cai
        setTimeout(() => {
            createInkSplat(x + offsetX, y + offsetY + 100, isGold);
        }, duration * 800);
        
        // Remover gota após animação
        setTimeout(() => {
            drop.remove();
        }, duration * 1000 + 500);
    }
    
    function createInkSplat(x, y, isGold) {
        const splat = document.createElement('div');
        splat.className = 'ink-splat';
        
        const size = Math.random() * 20 + 15;
        
        splat.style.cssText = `
            position: absolute;
            left: ${x - size/2}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size * 0.4}px;
            background: ${isGold ? 'radial-gradient(ellipse, rgba(212, 175, 55, 0.7), rgba(180, 140, 20, 0) 70%)' : 'radial-gradient(ellipse, rgba(10, 10, 10, 0.8), rgba(0, 0, 0, 0) 70%)'};
            border-radius: 50%;
            animation: splatFade 1.5s ease-out forwards;
            pointer-events: none;
        `;
        
        inkContainer.appendChild(splat);
        
        setTimeout(() => {
            splat.remove();
        }, 1500);
    }
    
    document.addEventListener('mousemove', (e) => {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        lastX = e.clientX;
        lastY = e.clientY;
        
        // Criar gotas baseado na velocidade do movimento
        if (distance > 30 && !isMoving) {
            isMoving = true;
            createInkDrop(e.clientX, e.clientY);
            
            setTimeout(() => {
                isMoving = false;
            }, 100);
        }
    });
    
    // Criar gotas ocasionais quando parado (efeito de pingar)
    document.addEventListener('mousemove', (e) => {
        clearInterval(dropInterval);
        
        dropInterval = setInterval(() => {
            if (Math.random() > 0.6) {
                createInkDrop(lastX, lastY);
            }
        }, 800);
    });
}

// ==================== PARTÍCULAS DOURADAS DO HERO ====================
function initParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    
    // Partículas douradas flutuando
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle-gold';
        
        const size = Math.random() * 4 + 2;
        const opacity = Math.random() * 0.5 + 0.2;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 10;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(212, 175, 55, ${opacity}) 0%, rgba(212, 175, 55, 0) 70%);
            border-radius: 50%;
            left: ${startX}%;
            top: ${startY}%;
            animation: particleFloat ${duration}s ease-in-out infinite;
            animation-delay: -${delay}s;
            box-shadow: 0 0 ${size * 2}px rgba(212, 175, 55, ${opacity * 0.5});
            pointer-events: none;
        `;
        container.appendChild(particle);
    }
    
    // Adicionar sparkles (brilhos rápidos)
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        sparkle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #D4AF37;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: sparkle ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            box-shadow: 0 0 6px 2px rgba(212, 175, 55, 0.8);
            pointer-events: none;
        `;
        container.appendChild(sparkle);
    }
}

// ==================== NAVEGAÇÃO MOBILE ====================
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        
        // Fechar menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// ==================== SCROLL SUAVE ====================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== HEADER COM SCROLL ====================
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
            header.style.backdropFilter = 'blur(10px)';
        }
        
        lastScroll = currentScroll;
    });
}

// ==================== PORTFÓLIO ====================
function initPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    
    // Limpar grid
    grid.innerHTML = '';
    
    // Detectar se é mobile para otimização
    const isMobile = window.innerWidth <= 768;
    
    // Adicionar imagens do CONFIG
    CONFIG.portfolioImagens.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = 'portfolio-item show';
        item.setAttribute('data-index', index);
        item.setAttribute('data-category', img.categoria || 'todos');
        
        // Decorações douradas variadas (apenas desktop)
        let decoration = '';
        if (!isMobile) {
            const decorType = index % 5;
            
            if (decorType === 0) {
                // Tachinhas douradas nos cantos
                decoration = '<div class="pin-gold pin-tl"></div><div class="pin-gold pin-tr"></div>';
            } else if (decorType === 1) {
                // Push pin dourado
                decoration = '<div class="push-pin"></div>';
            } else if (decorType === 2) {
                // Clipe dourado
                decoration = '<div class="paper-clip"></div>';
            } else if (decorType === 3) {
                // Fita preta com borda dourada
                decoration = '<div class="tape tape-top"></div>';
            }
            // decorType === 4: só cantoneira dourada (padrão)
        }
        
        // Número da página (apenas desktop)
        const pageNum = !isMobile ? String(index + 1).padStart(2, '0') : '';
        
        // No mobile, usar placeholder e lazy loading via Intersection Observer
        const imgSrc = isMobile ? '' : img.src;
        const dataSrc = isMobile ? img.src : '';
        
        item.innerHTML = `
            ${decoration}
            <div class="portfolio-img-wrapper">
                <img ${isMobile ? `data-src="${dataSrc}"` : `src="${imgSrc}"`} alt="${img.alt}" loading="lazy" decoding="async">
            </div>
            ${pageNum ? `<span class="page-num">${pageNum}</span>` : ''}
            <div class="portfolio-item-overlay">
                <span>${img.titulo || 'Ver Detalhes'}</span>
            </div>
        `;
        
        // Clique para abrir modal
        item.addEventListener('click', () => {
            openModal(img.src);
        });
        
        grid.appendChild(item);
    });
    
    // Lazy loading otimizado para mobile com Intersection Observer
    if (isMobile && 'IntersectionObserver' in window) {
        const lazyImages = grid.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Carregar imagem quando estiver próxima de aparecer
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        }, {
            // Começar a carregar quando a imagem estiver a 200px de distância
            rootMargin: '200px 0px',
            threshold: 0.01
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ==================== MODAL COM NAVEGAÇÃO LIGHTBOX ====================
let currentImageIndex = 0;
let portfolioImages = [];

function initModal() {
    const modal = document.getElementById('portfolioModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = modal?.querySelector('.modal-overlay');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    
    // Coletar todas as imagens do portfolio
    collectPortfolioImages();
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
    
    // Navegação por setas
    if (modalPrev) {
        modalPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateModal(-1);
        });
    }
    
    if (modalNext) {
        modalNext.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateModal(1);
        });
    }
    
    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('portfolioModal');
        if (!modal?.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            navigateModal(-1);
        } else if (e.key === 'ArrowRight') {
            navigateModal(1);
        }
    });
    
    // Swipe no mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    modal?.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    modal?.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const diff = touchStartX - touchEndX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                navigateModal(1); // Swipe left = next
            } else {
                navigateModal(-1); // Swipe right = prev
            }
        }
    }
}

function collectPortfolioImages() {
    const items = document.querySelectorAll('.portfolio-item img');
    portfolioImages = Array.from(items).map(img => img.src || img.dataset.src);
}

function openModal(imageSrc) {
    const modal = document.getElementById('portfolioModal');
    const modalImage = document.getElementById('modalImage');
    
    if (modal && modalImage) {
        // Encontrar índice da imagem atual
        currentImageIndex = portfolioImages.findIndex(src => 
            src === imageSrc || src.includes(imageSrc.split('/').pop())
        );
        
        if (currentImageIndex === -1) {
            // Se não encontrou, recoletar imagens
            collectPortfolioImages();
            currentImageIndex = portfolioImages.findIndex(src => 
                src === imageSrc || src.includes(imageSrc.split('/').pop())
            );
        }
        
        modalImage.src = imageSrc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateModalCounter();
    }
}

function navigateModal(direction) {
    if (portfolioImages.length === 0) return;
    
    currentImageIndex += direction;
    
    // Loop circular
    if (currentImageIndex < 0) {
        currentImageIndex = portfolioImages.length - 1;
    } else if (currentImageIndex >= portfolioImages.length) {
        currentImageIndex = 0;
    }
    
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        // Efeito de transição suave
        modalImage.style.opacity = '0';
        modalImage.style.transform = direction > 0 ? 'translateX(30px)' : 'translateX(-30px)';
        
        setTimeout(() => {
            modalImage.src = portfolioImages[currentImageIndex];
            modalImage.style.transform = direction > 0 ? 'translateX(-30px)' : 'translateX(30px)';
            
            setTimeout(() => {
                modalImage.style.opacity = '1';
                modalImage.style.transform = 'translateX(0)';
            }, 50);
        }, 150);
        
        updateModalCounter();
    }
}

function updateModalCounter() {
    const counter = document.getElementById('modalCounter');
    if (counter && portfolioImages.length > 0) {
        counter.textContent = `${currentImageIndex + 1} / ${portfolioImages.length}`;
    }
}

function closeModal() {
    const modal = document.getElementById('portfolioModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ==================== VÍDEOS ====================
function initVideos() {
    const grid = document.getElementById('videosGrid');
    if (!grid) return;
    
    // Limpar grid
    grid.innerHTML = '';
    
    // Adicionar vídeos do CONFIG
    CONFIG.videos.forEach((video, index) => {
        const item = document.createElement('div');
        item.className = 'video-item';
        
        switch (video.tipo) {
            case 'mp4':
                // Vídeo MP4 local - mostra preview do próprio vídeo
                item.innerHTML = `
                    <div class="video-item-preview" data-video-src="${video.src}">
                        <video muted preload="metadata" playsinline>
                            <source src="${video.src}#t=0.5" type="video/mp4">
                        </video>
                        <div class="video-play-btn"></div>
                        <span class="video-titulo">${video.titulo}</span>
                    </div>
                `;
                
                // Ao clicar, substitui por vídeo com controles
                const preview = item.querySelector('.video-item-preview');
                preview.addEventListener('click', () => {
                    item.innerHTML = `
                        <video controls autoplay playsinline>
                            <source src="${video.src}" type="video/mp4">
                            Seu navegador não suporta vídeos.
                        </video>
                    `;
                });
                break;
                
            case 'instagram':
                // Embed do Instagram
                item.innerHTML = `
                    <iframe 
                        src="${video.embedUrl}"
                        frameborder="0"
                        scrolling="no"
                        allowtransparency="true"
                        allowfullscreen="true"
                        loading="lazy">
                    </iframe>
                `;
                break;
                
            case 'youtube':
                // Embed do YouTube
                item.innerHTML = `
                    <iframe 
                        src="https://www.youtube.com/embed/${video.videoId}"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        loading="lazy">
                    </iframe>
                `;
                break;
        }
        
        grid.appendChild(item);
    });
}

// ==================== STORIES VIEWER (ESTILO INSTAGRAM) ====================
const StoriesViewer = {
    // Arquivos organizados por categoria
    categories: {
        desenhos: {
            name: 'Desenhos',
            avatar: 'destques/desenhos/desenho_1.jpg',
            files: [
                { type: 'image', src: 'destques/desenhos/desenho_1.jpg' },
                { type: 'image', src: 'destques/desenhos/desenho_2.jpg' },
                { type: 'image', src: 'destques/desenhos/desenho_3.webp' },
                { type: 'image', src: 'destques/desenhos/desenho_4.webp' },
                { type: 'image', src: 'destques/desenhos/desenho_5.webp' },
                { type: 'image', src: 'destques/desenhos/desenho_6.webp' },
                { type: 'image', src: 'destques/desenhos/desenho_7.webp' },
                { type: 'image', src: 'destques/desenhos/desenho_8.webp' },
                { type: 'image', src: 'destques/desenhos/desenho_9.webp' },
                { type: 'image', src: 'destques/desenhos/desenho_10.webp' },
                { type: 'image', src: 'destques/desenhos/desenho_11.webp' },
                { type: 'image', src: 'destques/desenhos/desenho_12.jpg' },
                { type: 'image', src: 'destques/desenhos/desenho_13.jpg' },
                { type: 'image', src: 'destques/desenhos/desenho_14.webp' },
                { type: 'image', src: 'destques/desenhos/desenho_15.jpg' },
                { type: 'video', src: 'destques/desenhos/desenho_16.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_17.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_18.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_19.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_20.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_21.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_22.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_23.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_24.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_25.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_26.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_27.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_28.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_29.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_30.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_31.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_32.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_33.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_34.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_35.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_36.mp4' },
                { type: 'video', src: 'destques/desenhos/desenho_37.mp4' }
            ]
        },
        freehand: {
            name: 'Freehand',
            avatar: 'destques/freehand/freehand_1.jpg',
            files: [
                { type: 'image', src: 'destques/freehand/freehand_1.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_2.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_3.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_4.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_5.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_6.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_7.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_8.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_9.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_10.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_11.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_12.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_13.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_14.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_15.webp' },
                { type: 'image', src: 'destques/freehand/freehand_16.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_17.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_18.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_19.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_20.webp' },
                { type: 'image', src: 'destques/freehand/freehand_21.jpg' },
                { type: 'image', src: 'destques/freehand/freehand_22.jpg' },
                { type: 'video', src: 'destques/freehand/freehand_23.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_24.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_25.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_26.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_27.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_28.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_29.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_30.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_31.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_32.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_33.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_34.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_35.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_36.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_37.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_38.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_39.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_40.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_41.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_42.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_43.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_44.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_45.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_46.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_47.mp4' },
                { type: 'video', src: 'destques/freehand/freehand_48.mp4' }
            ]
        },
        coverup: {
            name: 'Cover Up',
            avatar: 'destques/coverup/coverup_1.webp',
            files: [
                { type: 'image', src: 'destques/coverup/coverup_1.webp' },
                { type: 'image', src: 'destques/coverup/coverup_2.webp' },
                { type: 'image', src: 'destques/coverup/coverup_3.webp' },
                { type: 'image', src: 'destques/coverup/coverup_4.webp' },
                { type: 'image', src: 'destques/coverup/coverup_5.webp' },
                { type: 'image', src: 'destques/coverup/coverup_6.webp' },
                { type: 'image', src: 'destques/coverup/coverup_7.webp' },
                { type: 'image', src: 'destques/coverup/coverup_8.webp' },
                { type: 'image', src: 'destques/coverup/coverup_9.webp' },
                { type: 'image', src: 'destques/coverup/coverup_10.webp' },
                { type: 'video', src: 'destques/coverup/coverup_11.mp4' },
                { type: 'video', src: 'destques/coverup/coverup_12.mp4' },
                { type: 'video', src: 'destques/coverup/coverup_13.mp4' }
            ]
        },
        finesses: {
            name: 'Finesse',
            avatar: 'destques/finesses/finesse_1.jpg',
            files: [
                { type: 'image', src: 'destques/finesses/finesse_1.jpg' },
                { type: 'image', src: 'destques/finesses/finesse_2.webp' },
                { type: 'image', src: 'destques/finesses/finesse_3.webp' },
                { type: 'image', src: 'destques/finesses/finesse_4.webp' },
                { type: 'video', src: 'destques/finesses/finesse_5.mp4' },
                { type: 'video', src: 'destques/finesses/finesse_6.mp4' },
                { type: 'video', src: 'destques/finesses/finesse_7.mp4' },
                { type: 'video', src: 'destques/finesses/finesse_8.mp4' }
            ]
        },
        depoimento: {
            name: 'Depoimentos',
            avatar: 'destques/depoimento/depoimento_1.jpg',
            files: [
                { type: 'image', src: 'destques/depoimento/depoimento_1.jpg' },
                { type: 'image', src: 'destques/depoimento/depoimento_2.webp' },
                { type: 'image', src: 'destques/depoimento/depoimento_3.webp' },
                { type: 'image', src: 'destques/depoimento/depoimento_4.webp' },
                { type: 'image', src: 'destques/depoimento/depoimento_5.jpg' },
                { type: 'image', src: 'destques/depoimento/depoimento_6.webp' },
                { type: 'video', src: 'destques/depoimento/depoimento_7.mp4' },
                { type: 'video', src: 'destques/depoimento/depoimento_8.mp4' },
                { type: 'video', src: 'destques/depoimento/depoimento_9.mp4' }
            ]
        }
    },
    
    currentCategory: 'desenhos',
    files: [],
    currentIndex: 0,
    isPlaying: false,
    isPaused: false,
    timer: null,
    progressInterval: null,
    imageDuration: 5000, // 5 segundos para imagens
    
    elements: {},
    
    init() {
        // Pegar elementos do DOM
        this.elements = {
            viewer: document.getElementById('storiesViewer'),
            progress: document.getElementById('storiesProgress'),
            content: document.getElementById('storiesContent'),
            image: document.getElementById('storiesImage'),
            video: document.getElementById('storiesVideo'),
            close: document.getElementById('storiesClose'),
            prev: document.getElementById('storiesPrev'),
            next: document.getElementById('storiesNext'),
            pausedIndicator: document.getElementById('storiesPausedIndicator'),
            userAvatar: document.getElementById('storiesUserAvatar'),
            userName: document.getElementById('storiesUserName')
        };
        
        if (!this.elements.viewer) return;
        
        // Event listeners para cada círculo de destaque
        document.querySelectorAll('.destaque-circle').forEach(circle => {
            circle.addEventListener('click', () => {
                const category = circle.dataset.destaque;
                if (category && this.categories[category]) {
                    this.openCategory(category);
                }
            });
        });
        
        // Event listeners do viewer
        this.elements.close.addEventListener('click', () => this.close());
        this.elements.prev.addEventListener('click', () => this.prev());
        this.elements.next.addEventListener('click', () => this.next());
        
        // Fechar com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isPlaying) {
                this.close();
            }
            if (e.key === 'ArrowLeft' && this.isPlaying) {
                this.prev();
            }
            if (e.key === 'ArrowRight' && this.isPlaying) {
                this.next();
            }
        });
        
        // Pausar ao segurar
        this.elements.content.addEventListener('mousedown', () => this.pause());
        this.elements.content.addEventListener('mouseup', () => this.resume());
        this.elements.content.addEventListener('touchstart', () => this.pause(), { passive: true });
        this.elements.content.addEventListener('touchend', () => this.resume());
        
        // Quando vídeo termina
        this.elements.video.addEventListener('ended', () => this.next());
        
        // Fechar ao clicar no overlay
        this.elements.viewer.querySelector('.stories-viewer-overlay').addEventListener('click', () => this.close());
        
        console.log('Stories Viewer initialized with categories:', Object.keys(this.categories));
    },
    
    openCategory(category) {
        this.currentCategory = category;
        this.files = this.categories[category].files;
        
        // Atualizar avatar e nome
        if (this.elements.userAvatar) {
            this.elements.userAvatar.src = this.categories[category].avatar;
        }
        if (this.elements.userName) {
            this.elements.userName.textContent = this.categories[category].name;
        }
        
        this.open();
    },
    
    createProgressBars() {
        this.elements.progress.innerHTML = '';
        this.files.forEach((_, index) => {
            const bar = document.createElement('div');
            bar.className = 'stories-progress-bar';
            bar.innerHTML = '<div class="stories-progress-bar-fill"></div>';
            this.elements.progress.appendChild(bar);
        });
    },
    
    open() {
        this.currentIndex = 0;
        this.createProgressBars();
        this.elements.viewer.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.isPlaying = true;
        this.show(0);
    },
    
    close() {
        this.elements.viewer.classList.remove('active');
        document.body.style.overflow = '';
        this.isPlaying = false;
        this.stopTimer();
        this.elements.video.pause();
        this.elements.video.src = '';
    },
    
    show(index) {
        if (index < 0 || index >= this.files.length) {
            this.close();
            return;
        }
        
        this.currentIndex = index;
        const file = this.files[index];
        
        // Atualizar barras de progresso
        this.updateProgressBars();
        
        // Parar timer anterior
        this.stopTimer();
        
        // Loading state
        this.elements.content.classList.add('loading');
        
        // Esconder ambos
        this.elements.image.classList.remove('active');
        this.elements.video.classList.remove('active');
        this.elements.video.pause();
        
        if (file.type === 'image') {
            this.showImage(file.src);
        } else {
            this.showVideo(file.src);
        }
    },
    
    showImage(src) {
        const img = this.elements.image;
        img.onload = () => {
            this.elements.content.classList.remove('loading');
            img.classList.add('active');
            this.startImageTimer();
        };
        img.onerror = () => {
            console.warn('Erro ao carregar imagem:', src);
            this.next();
        };
        img.src = src;
    },
    
    showVideo(src) {
        const video = this.elements.video;
        video.src = src;
        video.load();
        
        video.onloadeddata = () => {
            this.elements.content.classList.remove('loading');
            video.classList.add('active');
            video.play().catch(err => {
                console.warn('Autoplay blocked:', err);
            });
            this.startVideoProgress();
        };
        
        video.onerror = () => {
            console.warn('Erro ao carregar vídeo:', src);
            this.next();
        };
    },
    
    startImageTimer() {
        const bars = this.elements.progress.querySelectorAll('.stories-progress-bar');
        const currentBar = bars[this.currentIndex];
        const fill = currentBar.querySelector('.stories-progress-bar-fill');
        
        currentBar.classList.add('active');
        
        let progress = 0;
        const step = 100 / (this.imageDuration / 100);
        
        this.progressInterval = setInterval(() => {
            if (!this.isPaused) {
                progress += step;
                fill.style.width = progress + '%';
                
                if (progress >= 100) {
                    this.next();
                }
            }
        }, 100);
    },
    
    startVideoProgress() {
        const bars = this.elements.progress.querySelectorAll('.stories-progress-bar');
        const currentBar = bars[this.currentIndex];
        const fill = currentBar.querySelector('.stories-progress-bar-fill');
        const video = this.elements.video;
        
        currentBar.classList.add('active');
        
        this.progressInterval = setInterval(() => {
            if (!this.isPaused && video.duration) {
                const progress = (video.currentTime / video.duration) * 100;
                fill.style.width = progress + '%';
            }
        }, 100);
    },
    
    stopTimer() {
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
            this.progressInterval = null;
        }
    },
    
    updateProgressBars() {
        const bars = this.elements.progress.querySelectorAll('.stories-progress-bar');
        bars.forEach((bar, index) => {
            const fill = bar.querySelector('.stories-progress-bar-fill');
            bar.classList.remove('active', 'completed');
            
            if (index < this.currentIndex) {
                bar.classList.add('completed');
                fill.style.width = '100%';
            } else {
                fill.style.width = '0%';
            }
        });
    },
    
    next() {
        this.stopTimer();
        if (this.currentIndex < this.files.length - 1) {
            this.show(this.currentIndex + 1);
        } else {
            this.close();
        }
    },
    
    prev() {
        this.stopTimer();
        if (this.currentIndex > 0) {
            this.show(this.currentIndex - 1);
        } else {
            this.show(0);
        }
    },
    
    pause() {
        this.isPaused = true;
        this.elements.pausedIndicator.classList.add('visible');
        if (this.files[this.currentIndex].type === 'video') {
            this.elements.video.pause();
        }
    },
    
    resume() {
        this.isPaused = false;
        this.elements.pausedIndicator.classList.remove('visible');
        if (this.files[this.currentIndex].type === 'video') {
            this.elements.video.play();
        }
    }
};

// Inicializar Stories Viewer
document.addEventListener('DOMContentLoaded', () => {
    StoriesViewer.init();
    AgendamentoForm.init();
});

// ==================== SISTEMA DE AGENDAMENTO ====================
// Sistema completo de agendamento com Google Apps Script
// Configuração, validação, anti-spam e feedback visual

const AgendamentoForm = {
    // =====================================================
    // CONFIGURAÇÃO - EDITE AQUI
    // =====================================================
    config: {
        // URL do Google Apps Script Web App (após deploy)
        // SUBSTITUA pela sua URL após fazer o deploy
        webAppUrl: 'https://script.google.com/macros/s/AKfycbzM_I_URMH_VYPgFWihLeYiF4NRvV3qhn-Bfj_8VNrvYxdVgdhguM60qk7siJBuYY-Zzg/exec',
        
        // Horários de funcionamento (para validação no front-end)
        horaInicio: 10, // 10:00
        horaFim: 23,    // 23:00 (última sessão às 20h pois dura 3h)
        
        // Intervalo entre slots (em minutos)
        intervaloSlots: 30,
        
        // Cooldown anti-spam (em segundos)
        cooldownSegundos: 30,
        
        // Chave do localStorage para cooldown
        cooldownKey: 'jeantattoo_lastSubmit',
        
        // Cache de horários válido por 1 minuto (para atualizar rápido após agendamentos)
        cacheDuracaoMs: 60000
    },
    
    // Elementos do DOM
    elements: {},
    
    // Cache de horários por data
    cacheHorarios: {},
    
    // Flag para saber se o servidor já foi "acordado"
    servidorAquecido: false,
    
    // Rate limiting avançado
    rateLimiting: {
        tentativas: 0,
        ultimaTentativa: 0,
        bloqueadoAte: 0
    },
    
    // Chave do reCAPTCHA v3
    recaptchaSiteKey: '6LcvVV8sAAAAAHnHwLAB54HQuMmJgu9J3v5HvL-Y',
    
    // =====================================================
    // INICIALIZAÇÃO
    // =====================================================
    init() {
        // Pegar elementos do DOM
        this.elements = {
            form: document.getElementById('agendamentoForm'),
            submitBtn: document.getElementById('agendarBtn'),
            formStatus: document.getElementById('formStatus'),
            statusSuccess: document.getElementById('statusSuccess'),
            statusUnavailable: document.getElementById('statusUnavailable'),
            statusError: document.getElementById('statusError'),
            honeypot: document.getElementById('honeypot'),
            recaptchaToken: document.getElementById('recaptchaToken'),
            nome: document.getElementById('ag-nome'),
            whatsapp: document.getElementById('ag-whatsapp'),
            data: document.getElementById('ag-data'),
            hora: document.getElementById('ag-hora'),
            estilo: document.getElementById('ag-estilo'),
            obs: document.getElementById('ag-obs'),
            // Elementos de sugestão
            sugestoesContainer: document.getElementById('sugestoes-horario'),
            sugestoesMesmoDia: document.getElementById('sugestoes-mesmo-dia'),
            sugestoesOutrosDias: document.getElementById('sugestoes-outros-dias')
        };
        
        if (!this.elements.form) return;
        
        // Configurar data mínima (hoje)
        this.setMinDate();
        
        // Configurar máscara do WhatsApp
        this.setupWhatsAppMask();
        
        // Configurar validação de hora
        this.setupHoraValidation();
        
        // Atualizar horários quando a data mudar
        this.elements.data.addEventListener('change', () => this.atualizarHorariosDisponiveis());
        
        // PRÉ-CARREGAR horários de hoje em background (otimização)
        this.preCarregarHorarios();
        
        // Aquecer servidor quando usuário interagir com campos
        this.elements.nome.addEventListener('focus', () => this.aquecerServidor(), { once: true });
        
        // Aquecer servidor quando seção de agendamento entrar na tela
        this.observarSecaoAgendamento();
        
        // Aquecer servidor PRIMEIRO, depois iniciar contador
        this.aquecerServidor().then(() => {
            // Iniciar contador de vagas e prova social após servidor aquecido
            setTimeout(() => {
                this.initContadorVagas();
                this.initProvaSocial();
            }, 500);
        });
        
        // Restaurar rate limiting do localStorage
        this.restaurarRateLimiting();
        
        // Event listener do formulário
        this.elements.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        console.log('Sistema de Agendamento inicializado!');
    },
    
    // Observa quando a seção de agendamento entra na tela para pré-carregar
    observarSecaoAgendamento() {
        const secao = document.getElementById('agendar');
        if (!secao || !('IntersectionObserver' in window)) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Aquecer servidor quando usuário se aproximar
                    this.aquecerServidor();
                    observer.disconnect();
                }
            });
        }, { rootMargin: '200px' }); // Ativa 200px antes de entrar na tela
        
        observer.observe(secao);
    },
    
    // =====================================================
    // CONTADOR DE VAGAS DA SEMANA
    // =====================================================
    async initContadorVagas() {
        const slotsNumber = document.getElementById('slotsNumber');
        if (!slotsNumber) return;
        
        try {
            // Buscar estatísticas do servidor
            const stats = await this.buscarEstatisticasSemana();
            
            if (stats.ok && stats.vagasDisponiveis !== undefined) {
                const disponiveis = stats.vagasDisponiveis;
                let texto = '';
                let classe = '';
                
                if (disponiveis === 0) {
                    texto = 'Agenda lotada!';
                    classe = 'urgent';
                } else if (disponiveis <= 3) {
                    texto = `Apenas ${disponiveis} horário${disponiveis > 1 ? 's' : ''} livre${disponiveis > 1 ? 's' : ''}!`;
                    classe = 'urgent';
                } else if (disponiveis <= 6) {
                    texto = 'Poucos horários disponíveis';
                    classe = 'few';
                } else if (disponiveis <= 12) {
                    texto = 'Horários limitados';
                    classe = 'few';
                } else {
                    texto = 'Agenda aberta';
                    classe = 'plenty';
                }
                
                slotsNumber.textContent = texto;
                slotsNumber.className = `slots-number ${classe}`;
            } else {
                // Resposta sem dados válidos
                slotsNumber.textContent = 'Consulte disponibilidade';
                slotsNumber.className = 'slots-number plenty';
            }
        } catch (e) {
            // Fallback: mostrar texto genérico sem ficar carregando
            console.log('Erro ao buscar estatísticas:', e);
            slotsNumber.textContent = 'Consulte disponibilidade';
            slotsNumber.className = 'slots-number plenty';
        }
    },
    
    async buscarEstatisticasSemana() {
        if (this.config.webAppUrl === 'COLE_AQUI_SUA_URL_DO_APPS_SCRIPT') {
            throw new Error('URL não configurada');
        }
        
        const url = `${this.config.webAppUrl}?action=estatisticas&_t=${Date.now()}`;
        
        // Timeout de 15 segundos (servidor pode demorar no cold start)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);
        
        try {
            const response = await fetch(url, { 
                method: 'GET', 
                redirect: 'follow',
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            return await response.json();
        } catch (e) {
            clearTimeout(timeoutId);
            throw e;
        }
    },
    
    // =====================================================
    // PROVA SOCIAL EM TEMPO REAL
    // =====================================================
    initProvaSocial() {
        const socialProof = document.getElementById('socialProof');
        if (!socialProof) return;
        
        // Buscar último agendamento e mostrar
        this.mostrarProvaSocial();
        
        // Atualizar a cada 30 segundos
        setInterval(() => this.mostrarProvaSocial(), 30000);
    },
    
    async mostrarProvaSocial() {
        const socialProof = document.getElementById('socialProof');
        const proofName = document.getElementById('proofName');
        const proofAction = document.getElementById('proofAction');
        
        if (!socialProof || !proofName || !proofAction) return;
        
        try {
            const dados = await this.buscarUltimoAgendamento();
            
            // Verificar se tem dados válidos (backend retorna primeiroNome e tempoFormatado)
            if (dados && dados.ok && dados.tem && dados.primeiroNome) {
                proofName.textContent = dados.primeiroNome;
                proofAction.textContent = `agendou ${dados.tempoFormatado || 'recentemente'}`;
                
                // Mostrar com animação
                socialProof.classList.add('visible');
                
                // Esconder após 8 segundos
                setTimeout(() => {
                    socialProof.classList.remove('visible');
                }, 8000);
                
                // Mostrar novamente a cada 45 segundos se ainda houver dados
                setTimeout(() => this.mostrarProvaSocial(), 45000);
            }
        } catch (e) {
            // Silencioso - não mostrar nada se não tiver dados
            console.log('Prova social não disponível:', e.message);
        }
    },
    
    async buscarUltimoAgendamento() {
        if (this.config.webAppUrl === 'COLE_AQUI_SUA_URL_DO_APPS_SCRIPT') {
            throw new Error('URL não configurada');
        }
        
        const url = `${this.config.webAppUrl}?action=ultimoAgendamento&_t=${Date.now()}`;
        
        try {
            const response = await fetch(url, { method: 'GET', redirect: 'follow' });
            return await response.json();
        } catch (e) {
            throw e;
        }
    },
    
    anonimizarNome(nomeCompleto) {
        const partes = nomeCompleto.trim().split(' ');
        const primeiroNome = partes[0];
        const inicialSobrenome = partes.length > 1 ? partes[partes.length - 1].charAt(0) + '.' : '';
        return `${primeiroNome} ${inicialSobrenome}`.trim();
    },
    
    calcularTempoAtras(timestamp) {
        const agora = new Date();
        const data = new Date(timestamp);
        const diffMs = agora - data;
        const diffMin = Math.floor(diffMs / 60000);
        const diffHoras = Math.floor(diffMin / 60);
        const diffDias = Math.floor(diffHoras / 24);
        
        if (diffMin < 1) return 'agora mesmo';
        if (diffMin < 60) return `há ${diffMin} min`;
        if (diffHoras < 24) return `há ${diffHoras}h`;
        if (diffDias === 1) return 'ontem';
        if (diffDias < 7) return `há ${diffDias} dias`;
        return 'recentemente';
    },
    
    // =====================================================
    // RATE LIMITING AVANÇADO
    // =====================================================
    restaurarRateLimiting() {
        const saved = localStorage.getItem('jeantattoo_ratelimit');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.rateLimiting = { ...this.rateLimiting, ...data };
            } catch (e) {}
        }
    },
    
    salvarRateLimiting() {
        localStorage.setItem('jeantattoo_ratelimit', JSON.stringify(this.rateLimiting));
    },
    
    verificarRateLimiting() {
        const agora = Date.now();
        
        // Se está bloqueado, verificar se já passou o tempo
        if (this.rateLimiting.bloqueadoAte > agora) {
            const restante = Math.ceil((this.rateLimiting.bloqueadoAte - agora) / 1000);
            return { 
                permitido: false, 
                mensagem: `Muitas tentativas. Aguarde ${restante} segundos.` 
            };
        }
        
        // Reset se passou mais de 10 minutos desde última tentativa
        if (agora - this.rateLimiting.ultimaTentativa > 600000) {
            this.rateLimiting.tentativas = 0;
        }
        
        return { permitido: true };
    },
    
    registrarTentativa(sucesso) {
        const agora = Date.now();
        this.rateLimiting.ultimaTentativa = agora;
        
        if (!sucesso) {
            this.rateLimiting.tentativas++;
            
            // Bloquear progressivamente
            if (this.rateLimiting.tentativas >= 5) {
                // 5+ tentativas = bloqueio de 5 minutos
                this.rateLimiting.bloqueadoAte = agora + 300000;
            } else if (this.rateLimiting.tentativas >= 3) {
                // 3-4 tentativas = bloqueio de 1 minuto
                this.rateLimiting.bloqueadoAte = agora + 60000;
            }
        } else {
            // Reset em caso de sucesso
            this.rateLimiting.tentativas = 0;
            this.rateLimiting.bloqueadoAte = 0;
        }
        
        this.salvarRateLimiting();
    },
    
    // =====================================================
    // VALIDAÇÕES ROBUSTAS
    // =====================================================
    validarFormularioCompleto(formData) {
        const erros = [];
        
        // Nome
        if (!formData.nome || formData.nome.length < 3) {
            erros.push('Nome deve ter pelo menos 3 caracteres');
        }
        if (formData.nome && formData.nome.length > 100) {
            erros.push('Nome muito longo (máx. 100 caracteres)');
        }
        if (formData.nome && /[<>{}]/.test(formData.nome)) {
            erros.push('Nome contém caracteres inválidos');
        }
        
        // WhatsApp
        const whatsappLimpo = formData.whatsapp.replace(/\D/g, '');
        if (whatsappLimpo.length < 10 || whatsappLimpo.length > 11) {
            erros.push('WhatsApp inválido (deve ter 10 ou 11 dígitos)');
        }
        
        // Data
        if (!formData.data) {
            erros.push('Selecione uma data');
        } else {
            const dataEscolhida = new Date(formData.data + 'T00:00:00');
            const hoje = new Date();
            hoje.setHours(0, 0, 0, 0);
            
            if (dataEscolhida < hoje) {
                erros.push('Data não pode ser no passado');
            }
            
            // Máximo 60 dias no futuro
            const maxData = new Date();
            maxData.setDate(maxData.getDate() + 60);
            if (dataEscolhida > maxData) {
                erros.push('Data muito distante (máx. 60 dias)');
            }
        }
        
        // Hora
        if (!formData.hora) {
            erros.push('Selecione um horário');
        }
        
        // Estilo
        if (!formData.estilo) {
            erros.push('Selecione um estilo de tatuagem');
        }
        
        // Observações (opcional, mas limitar tamanho)
        if (formData.obs && formData.obs.length > 500) {
            erros.push('Observações muito longas (máx. 500 caracteres)');
        }
        
        // Verificar padrões suspeitos (spam)
        if (this.detectarSpam(formData)) {
            erros.push('Conteúdo suspeito detectado');
        }
        
        return erros;
    },
    
    detectarSpam(formData) {
        const textoCompleto = `${formData.nome} ${formData.obs}`.toLowerCase();
        
        // Palavras suspeitas
        const spamWords = ['http://', 'https://', 'www.', '.com', 'click here', 'buy now', 'free money', 'viagra', 'casino'];
        if (spamWords.some(word => textoCompleto.includes(word))) {
            return true;
        }
        
        // Muitos números seguidos no nome
        if (/\d{5,}/.test(formData.nome)) {
            return true;
        }
        
        // Nome com muitas letras repetidas
        if (/(.)\1{4,}/.test(formData.nome)) {
            return true;
        }
        
        return false;
    },
    
    // =====================================================
    // reCAPTCHA v3
    // =====================================================
    async obterTokenRecaptcha() {
        // Verificar se reCAPTCHA está carregado
        if (typeof grecaptcha === 'undefined') {
            console.warn('reCAPTCHA não carregado');
            return null;
        }
        
        try {
            await grecaptcha.ready;
            const token = await grecaptcha.execute(this.recaptchaSiteKey, { action: 'agendamento' });
            return token;
        } catch (e) {
            console.warn('Erro ao obter token reCAPTCHA:', e);
            return null;
        }
    },
    
    // =====================================================
    // PRÉ-CARREGAMENTO E OTIMIZAÇÃO
    // =====================================================
    
    // Pré-carrega horários de hoje e amanhã em background
    async preCarregarHorarios() {
        const hoje = new Date().toISOString().split('T')[0];
        const amanha = new Date();
        amanha.setDate(amanha.getDate() + 1);
        const amanhaStr = amanha.toISOString().split('T')[0];
        
        // Carregar horários de hoje primeiro (mostra no select)
        this.atualizarHorariosDisponiveis();
        
        // Pré-carregar amanhã em background (sem bloquear)
        setTimeout(() => {
            this.buscarHorariosDoServidor(amanhaStr).catch(() => {});
        }, 2000);
    },
    
    // Aquece o servidor Apps Script (evita cold start)
    async aquecerServidor() {
        if (this.servidorAquecido) return;
        
        try {
            // Requisição leve só para acordar o servidor
            const url = `${this.config.webAppUrl}?action=ping&_t=${Date.now()}`;
            fetch(url, { method: 'GET', mode: 'no-cors' });
            this.servidorAquecido = true;
        } catch (e) {
            // Ignorar erros
        }
    },
    
    // =====================================================
    // CONFIGURAÇÃO DE CAMPOS
    // =====================================================
    
    // Define a data mínima como hoje
    setMinDate() {
        const today = new Date().toISOString().split('T')[0];
        this.elements.data.setAttribute('min', today);
        // Definir data padrão como hoje
        if (!this.elements.data.value) {
            this.elements.data.value = today;
        }
    },
    
    // Atualiza os horários disponíveis baseado na data selecionada
    async atualizarHorariosDisponiveis() {
        const selectHora = this.elements.hora;
        const dataSelecionada = this.elements.data.value;
        
        if (!dataSelecionada) return;
        
        // Mostrar loading no select
        selectHora.innerHTML = '<option value="">Consultando disponibilidade...</option>';
        selectHora.disabled = true;
        
        // Esconder sugestões anteriores
        this.hideSugestoes();
        
        try {
            // Buscar horários do servidor
            const resultado = await this.buscarHorariosDoServidor(dataSelecionada);
            
            // Se dia está bloqueado (folga/férias)
            if (resultado.bloqueado) {
                selectHora.innerHTML = '<option value="">Dia indisponível</option>';
                selectHora.disabled = true;
                this.mostrarDiaBloqueado(resultado.motivo, dataSelecionada);
                return;
            }
            
            // Filtrar horários disponíveis
            const hoje = new Date();
            const dataEscolhida = new Date(dataSelecionada + 'T00:00:00');
            const ehHoje = dataEscolhida.toDateString() === hoje.toDateString();
            const horaAtual = hoje.getHours();
            const minutoAtual = hoje.getMinutes();
            
            // Limpar e adicionar opções
            selectHora.innerHTML = '<option value="">Selecione um horário</option>';
            selectHora.disabled = false;
            
            let horariosDisponiveis = 0;
            
            resultado.slots.forEach(slot => {
                // Pular horários ocupados
                if (!slot.disponivel) return;
                
                const [hora, minuto] = slot.hora.split(':').map(Number);
                
                // Se for hoje, verificar se o horário já passou (+ 2h de antecedência mínima)
                if (ehHoje) {
                    const horaMinima = horaAtual + 2; // 2 horas de antecedência
                    if (hora < horaMinima || (hora === horaMinima && minuto <= minutoAtual)) {
                        return;
                    }
                }
                
                // Adicionar opção - apenas texto limpo, sem checkmark
                const option = document.createElement('option');
                option.value = slot.hora;
                option.textContent = slot.hora;
                selectHora.appendChild(option);
                horariosDisponiveis++;
            });
            
            // Se não houver horários disponíveis
            if (horariosDisponiveis === 0) {
                selectHora.innerHTML = '<option value="">Sem horários disponíveis</option>';
                selectHora.disabled = true;
                this.mostrarDiaSemHorarios(dataSelecionada);
            }
            
        } catch (error) {
            console.error('Erro ao buscar horários:', error);
            // Fallback para horários padrão (sem verificação do servidor)
            this.atualizarHorariosDisponiveisLocal();
        }
    },
    
    // Busca horários disponíveis do servidor (Apps Script) - OTIMIZADO
    async buscarHorariosDoServidor(data) {
        // Verificar cache (válido por 5 minutos)
        const cacheKey = data;
        const cached = this.cacheHorarios[cacheKey];
        if (cached && (Date.now() - cached.timestamp) < this.config.cacheDuracaoMs) {
            console.log('Usando cache para', data);
            return cached.data;
        }
        
        // Se URL não configurada, usar fallback local
        if (this.config.webAppUrl === 'COLE_AQUI_SUA_URL_DO_APPS_SCRIPT') {
            throw new Error('URL não configurada');
        }
        
        const url = `${this.config.webAppUrl}?action=getSlots&data=${data}&_t=${Date.now()}`;
        
        // Timeout de 8 segundos (Apps Script pode ser lento no cold start)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);
        
        try {
            const response = await fetch(url, {
                method: 'GET',
                redirect: 'follow',
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            const resultado = await response.json();
            
            // Marcar servidor como aquecido
            this.servidorAquecido = true;
            
            // Salvar no cache
            this.cacheHorarios[cacheKey] = {
                timestamp: Date.now(),
                data: resultado
            };
            
            return resultado;
            
        } catch (error) {
            clearTimeout(timeoutId);
            
            if (error.name === 'AbortError') {
                console.warn('Timeout ao buscar horários - usando fallback local');
            }
            throw error;
        }
    },
    
    // Fallback: horários locais sem verificar servidor
    atualizarHorariosDisponiveisLocal() {
        const selectHora = this.elements.hora;
        const dataSelecionada = this.elements.data.value;
        
        if (!dataSelecionada) return;
        
        const hoje = new Date();
        const dataEscolhida = new Date(dataSelecionada + 'T00:00:00');
        const ehHoje = dataEscolhida.toDateString() === hoje.toDateString();
        const horaAtual = hoje.getHours();
        const minutoAtual = hoje.getMinutes();
        
        const todosHorarios = [
            '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
            '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
            '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
            '19:00', '19:30', '20:00'
        ];
        
        selectHora.innerHTML = '<option value="">Selecione um horário</option>';
        selectHora.disabled = false;
        
        let horariosDisponiveis = 0;
        
        todosHorarios.forEach(horario => {
            const [hora, minuto] = horario.split(':').map(Number);
            
            if (ehHoje) {
                const horaMinima = horaAtual + 1;
                if (hora < horaMinima || (hora === horaMinima && minuto <= minutoAtual)) {
                    return;
                }
            }
            
            const option = document.createElement('option');
            option.value = horario;
            option.textContent = horario;
            selectHora.appendChild(option);
            horariosDisponiveis++;
        });
        
        if (horariosDisponiveis === 0 && ehHoje) {
            selectHora.innerHTML = '<option value="" disabled>Sem horários disponíveis hoje</option>';
            this.mostrarAvisoProximoDia();
        }
    },
    
    // Mostra aviso quando o dia está bloqueado (folga/férias)
    mostrarDiaBloqueado(motivo, dataSelecionada) {
        if (this.elements.sugestoesContainer) {
            this.elements.sugestoesContainer.style.display = 'block';
            
            // Calcular próximos dias
            const amanha = new Date(dataSelecionada);
            amanha.setDate(amanha.getDate() + 1);
            const amanhaStr = amanha.toISOString().split('T')[0];
            
            const depoisAmanha = new Date(dataSelecionada);
            depoisAmanha.setDate(depoisAmanha.getDate() + 2);
            const depoisAmanhaStr = depoisAmanha.toISOString().split('T')[0];
            
            if (this.elements.sugestoesMesmoDia) {
                this.elements.sugestoesMesmoDia.innerHTML = `
                    <div class="dia-bloqueado-aviso">
                        <div class="aviso-icone">🚫</div>
                        <div class="aviso-texto">
                            <strong>${motivo || 'Dia indisponível'}</strong>
                            <p>Não estou disponível nesta data. Por favor, escolha outro dia.</p>
                        </div>
                    </div>
                `;
            }
            
            if (this.elements.sugestoesOutrosDias) {
                this.elements.sugestoesOutrosDias.innerHTML = `
                    <p style="color: var(--gold); margin-bottom: 10px; font-size: 0.9rem;">Sugestões de datas:</p>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <button type="button" class="sugestao-btn sugestao-dia" onclick="AgendamentoForm.selecionarData('${amanhaStr}')">
                            📅 ${this.formatarDataExibicao(amanhaStr)}
                        </button>
                        <button type="button" class="sugestao-btn sugestao-dia" onclick="AgendamentoForm.selecionarData('${depoisAmanhaStr}')">
                            📅 ${this.formatarDataExibicao(depoisAmanhaStr)}
                        </button>
                    </div>
                `;
            }
        }
    },
    
    // Mostra aviso quando não há horários disponíveis no dia
    mostrarDiaSemHorarios(dataSelecionada) {
        const amanha = new Date(dataSelecionada);
        amanha.setDate(amanha.getDate() + 1);
        const amanhaStr = amanha.toISOString().split('T')[0];
        
        if (this.elements.sugestoesContainer) {
            this.elements.sugestoesContainer.style.display = 'block';
            if (this.elements.sugestoesMesmoDia) {
                this.elements.sugestoesMesmoDia.innerHTML = `
                    <div class="dia-bloqueado-aviso" style="border-color: rgba(234, 179, 8, 0.3); background: rgba(234, 179, 8, 0.05);">
                        <div class="aviso-icone">⚠️</div>
                        <div class="aviso-texto">
                            <strong>Agenda lotada!</strong>
                            <p>Todos os horários deste dia já estão ocupados.</p>
                        </div>
                    </div>
                `;
            }
            if (this.elements.sugestoesOutrosDias) {
                this.elements.sugestoesOutrosDias.innerHTML = `
                    <button type="button" class="sugestao-btn sugestao-dia" onclick="AgendamentoForm.selecionarData('${amanhaStr}')">
                        📅 Tentar ${this.formatarDataExibicao(amanhaStr)}
                    </button>
                `;
            }
        }
    },
    
    // Formata data para exibição (ex: "Seg, 03/02")
    formatarDataExibicao(dataStr) {
        const data = new Date(dataStr + 'T12:00:00');
        const dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        return `${dias[data.getDay()]}, ${dia}/${mes}`;
    },
    
    // Mostra aviso para selecionar outro dia
    mostrarAvisoProximoDia() {
        // Calcular amanhã
        const amanha = new Date();
        amanha.setDate(amanha.getDate() + 1);
        const amanhaStr = amanha.toISOString().split('T')[0];
        
        // Mostrar container de sugestões
        if (this.elements.sugestoesContainer) {
            this.elements.sugestoesContainer.style.display = 'block';
            if (this.elements.sugestoesMesmoDia) {
                this.elements.sugestoesMesmoDia.innerHTML = `
                    <p style="color: var(--gold); margin-bottom: 10px;">
                        ⚠️ Não há mais horários disponíveis para hoje.
                    </p>
                `;
            }
            if (this.elements.sugestoesOutrosDias) {
                this.elements.sugestoesOutrosDias.innerHTML = `
                    <button type="button" class="sugestao-btn sugestao-dia" onclick="AgendamentoForm.selecionarData('${amanhaStr}')">
                        📅 Agendar para amanhã
                    </button>
                `;
            }
        }
    },
    
    // Seleciona uma data sugerida
    selecionarData(data) {
        this.elements.data.value = data;
        this.atualizarHorariosDisponiveis();
        if (this.elements.sugestoesContainer) {
            this.elements.sugestoesContainer.style.display = 'none';
        }
    },
    
    // Máscara para WhatsApp
    setupWhatsAppMask() {
        this.elements.whatsapp.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                if (value.length > 2) {
                    value = '(' + value.substring(0, 2) + ') ' + value.substring(2);
                }
                if (value.length > 10) {
                    value = value.substring(0, 10) + '-' + value.substring(10);
                }
            }
            e.target.value = value;
        });
    },
    
    // Validação de horário (agora é select, então só verifica se foi selecionado)
    setupHoraValidation() {
        // Como agora é um select com opções fixas, não precisa de validação complexa
        // O required do HTML já cuida disso
    },
    
    // =====================================================
    // VALIDAÇÕES
    // =====================================================
    
    // Valida email
    isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },
    
    // Valida se a data é hoje ou futura
    isValidDate(dateStr) {
        const selectedDate = new Date(dateStr + 'T00:00:00');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate >= today;
    },
    
    // Valida horário (de 30 em 30 min, entre 10h e 20h)
    isValidHora(horaStr) {
        if (!horaStr) return false;
        const [hora, minuto] = horaStr.split(':').map(Number);
        // Verificar se está no intervalo válido
        if (hora < this.config.horaInicio || hora > 20) return false;
        // Verificar se minutos são válidos (0 ou 30)
        if (minuto !== 0 && minuto !== 30) return false;
        return true;
    },
    
    // Checa honeypot (anti-spam)
    isHoneypotFilled() {
        return this.elements.honeypot && this.elements.honeypot.value.length > 0;
    },
    
    // Checa cooldown (anti-spam)
    isInCooldown() {
        const lastSubmit = localStorage.getItem(this.config.cooldownKey);
        if (!lastSubmit) return false;
        
        const elapsed = (Date.now() - parseInt(lastSubmit)) / 1000;
        return elapsed < this.config.cooldownSegundos;
    },
    
    // Registra o último envio
    setCooldown() {
        localStorage.setItem(this.config.cooldownKey, Date.now().toString());
    },
    
    // =====================================================
    // ENVIO DO FORMULÁRIO
    // =====================================================
    
    async handleSubmit(e) {
        e.preventDefault();
        
        // Anti-spam: honeypot
        if (this.isHoneypotFilled()) {
            console.warn('Honeypot detectado - possível spam');
            return;
        }
        
        // Rate limiting avançado
        const rateCheck = this.verificarRateLimiting();
        if (!rateCheck.permitido) {
            alert(rateCheck.mensagem);
            return;
        }
        
        // Anti-spam: cooldown básico
        if (this.isInCooldown()) {
            const remainingTime = this.config.cooldownSegundos - 
                Math.floor((Date.now() - parseInt(localStorage.getItem(this.config.cooldownKey))) / 1000);
            alert(`Aguarde ${remainingTime} segundos antes de enviar novamente.`);
            return;
        }
        
        // Coletar dados
        const formData = {
            nome: this.elements.nome.value.trim(),
            whatsapp: this.elements.whatsapp.value.trim(),
            data: this.elements.data.value,
            hora: this.elements.hora.value,
            estilo: this.elements.estilo.value,
            obs: this.elements.obs.value.trim()
        };
        
        // Esconder sugestões anteriores
        this.hideSugestoes();
        
        // Validação robusta
        const errosValidacao = this.validarFormularioCompleto(formData);
        if (errosValidacao.length > 0) {
            alert('Por favor, corrija os seguintes erros:\n\n• ' + errosValidacao.join('\n• '));
            this.registrarTentativa(false);
            return;
        }
        
        // Mostrar loading
        this.setLoading(true);
        
        try {
            // Obter token reCAPTCHA (se disponível)
            const recaptchaToken = await this.obterTokenRecaptcha();
            if (recaptchaToken) {
                formData.recaptchaToken = recaptchaToken;
            }
            
            // Enviar para o Apps Script
            const response = await this.sendToAppsScript(formData);
            
            // Verificar se há sugestões (horário ocupado)
            if (response.status === 'unavailable' && response.sugestoes) {
                this.showSugestoes(response.sugestoes, formData.data);
                this.setLoading(false);
                this.registrarTentativa(false);
                return;
            }
            
            // Registrar cooldown e tentativa bem-sucedida
            this.setCooldown();
            this.registrarTentativa(true);
            
            // Limpar cache de horários para que a lista atualize
            this.cacheHorarios = {};
            
            // Mostrar resultado
            this.showStatus(response.status);
            
        } catch (error) {
            console.error('Erro ao enviar:', error);
            this.registrarTentativa(false);
            this.showStatus('error');
        } finally {
            this.setLoading(false);
        }
    },
    
    // Envia dados para o Google Apps Script
    async sendToAppsScript(data) {
        // Se a URL não foi configurada, simular sucesso para teste
        if (this.config.webAppUrl === 'COLE_AQUI_SUA_URL_DO_APPS_SCRIPT') {
            console.warn('URL do Apps Script não configurada. Simulando envio...');
            await new Promise(resolve => setTimeout(resolve, 500));
            return { status: 'success' };
        }
        
        console.log('Enviando para Apps Script...', data);
        
        // Mostrar aviso de aguardar
        this.showWaitingMessage(true);
        
        // Adicionar listener para evitar saída acidental
        const beforeUnloadHandler = (e) => {
            e.preventDefault();
            e.returnValue = 'Seu agendamento está sendo processado. Tem certeza que deseja sair?';
            return e.returnValue;
        };
        window.addEventListener('beforeunload', beforeUnloadHandler);
        
        // Cleanup function
        const cleanup = () => {
            window.removeEventListener('beforeunload', beforeUnloadHandler);
            this.showWaitingMessage(false);
        };
        
        try {
            // Converter dados para URL params
            const params = new URLSearchParams();
            params.append('action', 'agendar');
            Object.keys(data).forEach(key => {
                params.append(key, data[key]);
            });
            
            // Método: GET com parâmetros na URL (mais confiável com Apps Script)
            const url = this.config.webAppUrl + '?' + params.toString();
            
            console.log('URL de envio:', url);
            
            // Usar fetch com redirect follow
            const response = await fetch(url, {
                method: 'GET',
                redirect: 'follow'
            });
            
            console.log('Status:', response.status);
            
            // Tentar ler a resposta
            let result;
            try {
                result = await response.json();
                console.log('Resposta JSON:', result);
            } catch (e) {
                // Se não for JSON, ainda assim considerar sucesso
                const text = await response.text();
                console.log('Resposta texto:', text);
                result = { status: 'success', message: 'Agendamento processado!' };
            }
            
            cleanup();
            return result;
            
        } catch (error) {
            console.error('Erro no fetch:', error);
            cleanup();
            
            // Tentar método alternativo via imagem (GET)
            return new Promise((resolve) => {
                const params = new URLSearchParams();
                params.append('action', 'agendar');
                Object.keys(data).forEach(key => {
                    params.append(key, data[key]);
                });
                
                const img = new Image();
                img.src = this.config.webAppUrl + '?' + params.toString() + '&_t=' + Date.now();
                
                img.onload = () => {
                    console.log('Enviado via imagem (sucesso)');
                    resolve({ status: 'success', message: 'Agendamento enviado!' });
                };
                
                img.onerror = () => {
                    // Mesmo com erro, os dados provavelmente foram enviados
                    console.log('Enviado via imagem (erro esperado)');
                    resolve({ status: 'success', message: 'Agendamento enviado! Aguarde confirmação.' });
                };
            });
        }
    },
    
    // Mostra mensagem de aguardar processamento
    showWaitingMessage(show) {
        let waitingOverlay = document.getElementById('waitingOverlay');
        
        if (show) {
            if (!waitingOverlay) {
                waitingOverlay = document.createElement('div');
                waitingOverlay.id = 'waitingOverlay';
                waitingOverlay.innerHTML = `
                    <div class="waiting-content">
                        <div class="waiting-spinner"></div>
                        <h3>Processando seu agendamento...</h3>
                        <p>Por favor, aguarde. Não feche esta página.</p>
                        <p class="waiting-tip">Isso pode levar alguns segundos.</p>
                    </div>
                `;
                waitingOverlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 99999;
                    backdrop-filter: blur(5px);
                `;
                
                const style = document.createElement('style');
                style.textContent = `
                    .waiting-content {
                        text-align: center;
                        color: white;
                        padding: 40px;
                    }
                    .waiting-content h3 {
                        color: #D4AF37;
                        font-size: 1.5rem;
                        margin: 20px 0 10px;
                    }
                    .waiting-content p {
                        color: #ccc;
                        margin: 5px 0;
                    }
                    .waiting-tip {
                        font-size: 0.85rem;
                        opacity: 0.7;
                        margin-top: 15px !important;
                    }
                    .waiting-spinner {
                        width: 60px;
                        height: 60px;
                        border: 4px solid rgba(212, 175, 55, 0.2);
                        border-top-color: #D4AF37;
                        border-radius: 50%;
                        margin: 0 auto;
                        animation: waitingSpin 1s linear infinite;
                    }
                    @keyframes waitingSpin {
                        to { transform: rotate(360deg); }
                    }
                `;
                document.head.appendChild(style);
                document.body.appendChild(waitingOverlay);
            }
            waitingOverlay.style.display = 'flex';
        } else {
            if (waitingOverlay) {
                waitingOverlay.style.display = 'none';
            }
        }
    },
    
    // =====================================================
    // SUGESTÕES DE HORÁRIO
    // =====================================================
    
    // Mostra sugestões de horários alternativos
    showSugestoes(sugestoes, dataSolicitada) {
        if (!this.elements.sugestoesContainer) return;
        
        let htmlMesmoDia = '';
        let htmlOutrosDias = '';
        
        // Filtrar horários passados se for hoje
        const hoje = new Date();
        const dataHoje = hoje.toISOString().split('T')[0];
        const horaAtual = hoje.getHours();
        const minutoAtual = hoje.getMinutes();
        
        // Função para verificar se horário já passou
        const horarioJaPassou = (data, hora) => {
            if (data !== dataHoje) return false;
            const [h, m] = hora.split(':').map(Number);
            // Adicionar 1 hora de margem
            return h < horaAtual + 1 || (h === horaAtual + 1 && m <= minutoAtual);
        };
        
        // Sugestões para o mesmo dia (filtrando horários passados)
        if (sugestoes.mesmoDia && sugestoes.mesmoDia.length > 0) {
            const horariosValidos = sugestoes.mesmoDia.filter(hora => !horarioJaPassou(dataSolicitada, hora));
            
            if (horariosValidos.length > 0) {
                htmlMesmoDia = `
                    <h4>📅 HORÁRIOS DISPONÍVEIS NO MESMO DIA:</h4>
                    <div class="sugestoes-lista">
                        ${horariosValidos.map(hora => `
                            <button type="button" class="sugestao-btn" onclick="AgendamentoForm.selecionarSugestao('${dataSolicitada}', '${hora}')">
                                ${hora}
                            </button>
                        `).join('')}
                    </div>
                `;
            }
        }
        
        // Sugestões para outros dias
        if (sugestoes.outrosDias && sugestoes.outrosDias.length > 0) {
            htmlOutrosDias = `
                <h4>📆 PRÓXIMOS DIAS COM DISPONIBILIDADE:</h4>
                <div class="sugestoes-lista">
                    ${sugestoes.outrosDias.map(dia => `
                        <button type="button" class="sugestao-btn sugestao-dia" onclick="AgendamentoForm.selecionarSugestao('${dia.data}', '${dia.primeiroHorario}')">
                            <span class="dia-nome">${dia.diaSemana}</span>
                            <span class="dia-data">${dia.dataFormatada}</span>
                            <span class="dia-horarios">${dia.horariosDisponiveis} horários livres</span>
                        </button>
                    `).join('')}
                </div>
            `;
        }
        
        if (htmlMesmoDia || htmlOutrosDias) {
            this.elements.sugestoesMesmoDia.innerHTML = htmlMesmoDia;
            this.elements.sugestoesOutrosDias.innerHTML = htmlOutrosDias;
            this.elements.sugestoesContainer.style.display = 'block';
            
            // Scroll suave até as sugestões
            this.elements.sugestoesContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    },
    
    // Esconde as sugestões
    hideSugestoes() {
        if (this.elements.sugestoesContainer) {
            this.elements.sugestoesContainer.style.display = 'none';
        }
    },
    
    // Seleciona uma sugestão de horário
    selecionarSugestao(data, hora) {
        // Atualizar data primeiro
        this.elements.data.value = data;
        
        // Atualizar opções de horário baseado na nova data
        this.atualizarHorariosDisponiveis();
        
        // Depois selecionar o horário
        this.elements.hora.value = hora;
        
        // Esconder sugestões
        this.hideSugestoes();
        
        // Dar destaque visual nos campos alterados
        this.elements.data.style.borderColor = '#4ade80';
        this.elements.hora.style.borderColor = '#4ade80';
        
        setTimeout(() => {
            this.elements.data.style.borderColor = '';
            this.elements.hora.style.borderColor = '';
        }, 2000);
        
        // Scroll para o botão de enviar
        this.elements.submitBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },
    
    // =====================================================
    // UI / FEEDBACK
    // =====================================================
    
    // Define estado de loading no botão
    setLoading(isLoading) {
        if (isLoading) {
            this.elements.submitBtn.classList.add('loading');
            this.elements.submitBtn.disabled = true;
        } else {
            this.elements.submitBtn.classList.remove('loading');
            this.elements.submitBtn.disabled = false;
        }
    },
    
    // Mostra mensagem de status
    showStatus(status) {
        // Esconder formulário
        this.elements.form.style.display = 'none';
        
        // Esconder todos os status
        this.elements.statusSuccess.classList.remove('active');
        this.elements.statusUnavailable.classList.remove('active');
        this.elements.statusError.classList.remove('active');
        
        // Mostrar container de status
        this.elements.formStatus.classList.add('active');
        
        // Mostrar status específico com animação
        const statusElement = {
            'success': this.elements.statusSuccess,
            'unavailable': this.elements.statusUnavailable,
            'error': this.elements.statusError
        }[status];
        
        if (statusElement) {
            // Pequeno delay para animação
            setTimeout(() => {
                statusElement.classList.add('active');
                statusElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    },
    
    // Reset do formulário para novo agendamento
    reset() {
        // Limpar formulário
        this.elements.form.reset();
        
        // Esconder status
        this.elements.formStatus.classList.remove('active');
        this.elements.statusSuccess.classList.remove('active');
        this.elements.statusUnavailable.classList.remove('active');
        this.elements.statusError.classList.remove('active');
        
        // Mostrar formulário
        this.elements.form.style.display = 'block';
        
        // Reconfigurar data mínima
        this.setMinDate();
        
        // Scroll para o formulário
        this.elements.form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};

// ==================== ANIMAÇÕES NO SCROLL (LEGACY) ====================
function initScrollAnimationsLegacy() {
    // Adicionar classe de animação aos elementos que não têm ainda
    const elementsToAnimate = document.querySelectorAll(
        '.section-header:not([data-animate]), .autoral-content, .autoral-visual, ' +
        '.portfolio-item, .video-item, .story-item, ' +
        '.form-info, .form-wrapper, .cta-final-content, ' +
        '.stat-item, .testimonial-card, .destaque-circle'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    // Pegar TODOS os elementos com animate-on-scroll (incluindo os que já tinham no HTML)
    const allAnimatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Observer para animar quando elemento entra na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    allAnimatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ==================== CONTADOR ANIMADO ====================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 segundos
                const start = 0;
                const startTime = performance.now();
                
                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Easing function (easeOutQuart)
                    const easeOut = 1 - Math.pow(1 - progress, 4);
                    const current = Math.floor(easeOut * (target - start) + start);
                    
                    counter.textContent = current.toLocaleString('pt-BR');
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString('pt-BR');
                    }
                }
                
                requestAnimationFrame(updateCounter);
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// ==================== PARALLAX NO HERO ====================
function initParallax() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (!hero) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroHeight = window.innerHeight;
        
        // Só aplicar efeitos quando o hero está visível
        if (scrolled < heroHeight) {
            const rate = scrolled * 0.3;
            hero.style.backgroundPositionY = rate + 'px';
            
            if (heroContent) {
                const opacity = 1 - (scrolled / (heroHeight * 0.7));
                const translateY = scrolled * 0.2;
                heroContent.style.opacity = Math.max(0, Math.min(1, opacity));
                heroContent.style.transform = `translateY(${translateY}px)`;
            }
        } else {
            // Resetar quando fora da visão
            hero.style.backgroundPositionY = '0px';
            if (heroContent) {
                heroContent.style.opacity = '0';
                heroContent.style.transform = 'translateY(0)';
            }
        }
        
        // Quando voltar ao topo, restaurar
        if (scrolled <= 10) {
            hero.style.backgroundPositionY = '0px';
            if (heroContent) {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });
    
    // Inicializar estado
    updateParallax();
}

// ==================== EFEITO DE DIGITAÇÃO ====================
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title-line.accent');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '2px solid var(--gold)';
    
    let i = 0;
    function type() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            // Remove cursor após terminar
            setTimeout(() => {
                heroTitle.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    // Iniciar após um pequeno delay
    setTimeout(type, 500);
}

// ==================== CURSOR TEMÁTICO ====================
function initCustomCursor() {
    // Não mostrar em dispositivos touch
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
    
    // Criar elementos do cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDot);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Cursor dot segue instantaneamente
        cursorDot.style.left = mouseX - 3 + 'px';
        cursorDot.style.top = mouseY - 3 + 'px';
    });
    
    // Animação suave para o círculo maior
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Efeito hover em elementos interativos
    const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .faq-item, .blog-card, .filter-btn, .nav-link');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
    
    // Efeito de clique
    document.addEventListener('mousedown', () => cursor.classList.add('click'));
    document.addEventListener('mouseup', () => cursor.classList.remove('click'));
    
    // Esconder cursor nativo
    document.body.style.cursor = 'none';
    hoverElements.forEach(el => el.style.cursor = 'none');
}

// ==================== ANIMAÇÕES DE SCROLL (REVEAL) ====================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    if (!animatedElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Opcional: parar de observar após animar
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

// ==================== FAQ ACCORDION ====================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Fechar outros itens
            faqItems.forEach(other => {
                if (other !== item && other.classList.contains('active')) {
                    other.classList.remove('active');
                }
            });
            
            // Toggle item atual
            item.classList.toggle('active');
        });
    });
}

// ==================== LAZY LOADING MELHORADO ====================
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        images.forEach(img => {
            // Se a imagem já carregou, adicionar classe
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', () => img.classList.add('loaded'));
                imageObserver.observe(img);
            }
        });
    } else {
        // Fallback para navegadores sem suporte
        images.forEach(img => img.classList.add('loaded'));
    }
}

// ==================== RASTREAMENTO DE CONVERSÕES ====================
function trackEvent(category, action, label) {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    
    console.log(`[Analytics] ${category} - ${action} - ${label}`);
}

// Rastrear cliques em WhatsApp
function initConversionTracking() {
    // Links do WhatsApp
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('WhatsApp', 'click', 'Contato WhatsApp');
        });
    });
    
    // Links do Instagram
    document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('Instagram', 'click', 'Perfil Instagram');
        });
    });
    
    // Clique em items do portfólio
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', () => {
            trackEvent('Portfolio', 'view', 'Visualização Imagem');
        });
    });
    
    // FAQ aberto
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            trackEvent('FAQ', 'open', q.textContent.trim());
        });
    });
}

// ==================== LOADER PREMIUM ====================
function initLoader() {
    const loader = document.getElementById('loader');
    const loaderBar = document.getElementById('loaderBarFill');
    const loaderPercentage = document.getElementById('loaderPercentage');
    const loaderText = document.getElementById('loaderText');
    const loaderParticles = document.getElementById('loaderParticles');
    
    // SEMPRE voltar ao topo ao carregar/recarregar a página
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    
    // Bloquear scroll durante loading
    document.body.classList.add('loading');
    
    // Frases rotativas
    const frases = [
        'Preparando a arte...',
        'Aquecendo a máquina...',
        'Carregando portfólio...',
        'Misturando as tintas...',
        'Afiando a agulha...',
        'Quase lá...'
    ];
    
    // Criar partículas de fundo
    if (loaderParticles) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'loader-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 3 + 's';
            particle.style.animationDuration = (2 + Math.random() * 2) + 's';
            particle.style.width = (2 + Math.random() * 4) + 'px';
            particle.style.height = particle.style.width;
            particle.style.opacity = 0.3 + Math.random() * 0.7;
            loaderParticles.appendChild(particle);
        }
    }
    
    if (loader) {
        let progress = 0;
        let fraseIndex = 0;
        
        // Animação de progresso
        const progressInterval = setInterval(() => {
            progress += Math.random() * 3 + 1;
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(progressInterval);
            }
            
            if (loaderBar) {
                loaderBar.style.width = progress + '%';
            }
            
            if (loaderPercentage) {
                loaderPercentage.textContent = Math.floor(progress) + '%';
            }
        }, 40);
        
        // Trocar frases
        const fraseInterval = setInterval(() => {
            if (loaderText) {
                loaderText.style.opacity = '0';
                setTimeout(() => {
                    fraseIndex = (fraseIndex + 1) % frases.length;
                    loaderText.textContent = frases[fraseIndex];
                    loaderText.style.opacity = '1';
                }, 200);
            }
        }, 600);
        
        // Esconder loader após a animação
        window.addEventListener('load', () => {
            setTimeout(() => {
                clearInterval(fraseInterval);
                
                // Mostrar "Pronto!" antes de fechar
                if (loaderText) {
                    loaderText.textContent = '✓ Pronto!';
                    loaderText.style.color = '#4ade80';
                }
                
                if (loaderPercentage) {
                    loaderPercentage.textContent = '100%';
                }
                
                if (loaderBar) {
                    loaderBar.style.width = '100%';
                }
                
                // Fade out do loader
                setTimeout(() => {
                    loader.classList.add('hidden');
                    document.body.classList.remove('loading');
                    document.body.classList.remove('no-scroll');
                    
                    // Garantir que está no topo após loading
                    window.scrollTo(0, 0);
                }, 500);
            }, 2000); // Tempo da animação do loader
        });
    } else {
        // Se não houver loader, liberar scroll imediatamente
        document.body.classList.remove('loading');
    }
}

// ==================== INICIALIZAÇÃO ADICIONAL ====================
document.addEventListener('DOMContentLoaded', () => {
    initCounters();
    initParallax();
    initCustomCursor();
    initScrollAnimations();
    initFAQ();
    initLazyLoading();
    initConversionTracking();
    initLoader();
    // initTypingEffect(); // Descomente para ativar efeito de digitação
});

// ==================== FUNÇÕES AUXILIARES ====================

// Gerar link do WhatsApp com mensagem
function getWhatsAppLink(mensagemExtra = '') {
    const mensagem = mensagemExtra || CONFIG.whatsappMensagem;
    const mensagemEncoded = encodeURIComponent(mensagem);
    return `https://wa.me/${CONFIG.whatsappNumero}?text=${mensagemEncoded}`;
}

// Gerar link do Instagram
function getInstagramLink() {
    return `https://www.instagram.com/${CONFIG.instagramUsuario}/`;
}

// ==================== EFEITOS 3D AVANÇADOS ====================

// ===== PARTÍCULAS DE TINTA FLUTUANDO =====
function initInkParticles() {
    const container = document.createElement('div');
    container.className = 'ink-particles';
    document.body.appendChild(container);
    
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'ink-particle';
        
        // Propriedades aleatórias
        const size = Math.random() * 15 + 5;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            --size: ${size}px;
            --duration: ${duration}s;
            --delay: -${delay}s;
            left: ${left}%;
            top: ${top}%;
        `;
        
        container.appendChild(particle);
    }
}

// ===== GOTA DE TINTA CAINDO =====
function createInkDrop() {
    const drop = document.createElement('div');
    drop.className = 'ink-drop';
    drop.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(drop);
    
    // Remover após animação
    setTimeout(() => drop.remove(), 3000);
}

// Criar gotas periodicamente
function initInkDrops() {
    // Primeira gota após 2 segundos
    setTimeout(createInkDrop, 2000);
    
    // Gotas aleatórias a cada 8-15 segundos
    setInterval(() => {
        if (Math.random() > 0.5) {
            createInkDrop();
        }
    }, 10000);
}

// ===== SPLASH DE TINTA NO CLICK =====
function initInkSplash() {
    const splashContainer = document.createElement('div');
    splashContainer.className = 'ink-splash-effect';
    document.body.appendChild(splashContainer);
    
    document.addEventListener('click', (e) => {
        // Splash principal
        const splash = document.createElement('div');
        splash.className = 'splash';
        splash.style.left = e.clientX + 'px';
        splash.style.top = e.clientY + 'px';
        splashContainer.appendChild(splash);
        
        // Pequenas partículas
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.className = 'splash-particle';
            particle.style.left = e.clientX + 'px';
            particle.style.top = e.clientY + 'px';
            
            // Direção aleatória
            const angle = (i / 6) * Math.PI * 2;
            const distance = 30 + Math.random() * 50;
            particle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
            particle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
            
            splashContainer.appendChild(particle);
            
            setTimeout(() => particle.remove(), 500);
        }
        
        setTimeout(() => splash.remove(), 600);
    });
}

// ===== 3D TILT EFFECT - Cards que inclinam com o mouse =====
function initTiltEffect() {
    const tiltElements = document.querySelectorAll('.portfolio-item, .location-card, .faq-item');
    
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// ===== PARALLAX DEPTH - Movimento com o mouse =====
function initParallaxDepth() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const layers = [
        { selector: '.hero-title', speed: 0.05 },
        { selector: '.hero-subtitle', speed: 0.03 },
        { selector: '.hero-badge', speed: 0.02 },
        { selector: '.hero-ctas', speed: 0.04 }
    ];
    
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        
        layers.forEach(layer => {
            const el = document.querySelector(layer.selector);
            if (el) {
                const moveX = x * layer.speed * 100;
                const moveY = y * layer.speed * 100;
                el.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
    });
    
    hero.addEventListener('mouseleave', () => {
        layers.forEach(layer => {
            const el = document.querySelector(layer.selector);
            if (el) {
                el.style.transform = 'translate(0, 0)';
            }
        });
    });
}

// ===== TEXTO SENDO TATUADO =====
function initTattooText() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const lines = heroTitle.querySelectorAll('.hero-title-line');
    
    lines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.5}s`;
        line.classList.add('tattoo-text');
    });
}

// ===== REVEAL 3D NO SCROLL =====
function initReveal3D() {
    const elements = document.querySelectorAll('.section-header, .portfolio-item, .faq-item, .location-card');
    
    elements.forEach(el => {
        el.classList.add('reveal-3d');
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => observer.observe(el));
}

// ===== FUMAÇA NO HERO =====
function initSmokeEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Verificar se já existe
    if (hero.querySelector('.smoke-container')) return;
    
    const smokeContainer = document.createElement('div');
    smokeContainer.className = 'smoke-container';
    
    for (let i = 1; i <= 3; i++) {
        const layer = document.createElement('div');
        layer.className = `smoke-layer smoke-layer-${i}`;
        smokeContainer.appendChild(layer);
    }
    
    hero.insertBefore(smokeContainer, hero.firstChild);
}

// Inicializar todos os efeitos 3D
function init3DEffects() {
    initInkParticles();
    initInkDrops();
    initInkSplash();
    initTiltEffect();
    initParallaxDepth();
    initReveal3D();
    initSmokeEffect();
}

// ==================== MEGA UPGRADE - NOVAS FUNCIONALIDADES ====================

// ===== 1. SCROLL PROGRESS BAR =====
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// ===== 2. HEADER TRANSPARENTE → SÓLIDO =====
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ===== 3. CONTADOR ANIMADO =====
function initAnimatedCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });
    counters.forEach(counter => observer.observe(counter));
}

// ===== 4. MAGNETIC BUTTONS (DESABILITADO) =====
// Efeito de magnetismo removido - causava tremor nos botões
function initMagneticButtons() {
    // Desabilitado
}

// ===== 5. CURSOR TRAIL =====
function initCursorTrail() {
    const trailCount = 5;
    const trails = [];
    const positions = [];
    
    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        document.body.appendChild(trail);
        trails.push(trail);
        positions.push({ x: 0, y: 0 });
    }
    
    document.addEventListener('mousemove', (e) => {
        positions[0] = { x: e.clientX, y: e.clientY };
    });
    
    function animateTrails() {
        for (let i = trails.length - 1; i > 0; i--) {
            positions[i] = { ...positions[i - 1] };
        }
        
        trails.forEach((trail, i) => {
            trail.style.left = positions[i].x - 4 + 'px';
            trail.style.top = positions[i].y - 4 + 'px';
        });
        
        requestAnimationFrame(animateTrails);
    }
    
    animateTrails();
}

// ===== 6. TYPEWRITER EFFECT =====
function initTypewriter() {
    const elements = document.querySelectorAll('.typewriter-text');
    
    elements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        el.style.opacity = '1';
        
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    });
}

// ===== 7. LIGHTBOX MELHORADO =====
function initImprovedLightbox() {
    const portfolioItems = document.querySelectorAll('.portfolio-item img');
    let currentIndex = 0;
    let images = [];
    
    // Criar lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-improved';
    lightbox.innerHTML = `
        <button class="lightbox-close">✕</button>
        <button class="lightbox-nav prev">←</button>
        <button class="lightbox-nav next">→</button>
        <img class="lightbox-image" src="" alt="">
        <div class="lightbox-counter"></div>
    `;
    document.body.appendChild(lightbox);
    
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const counter = lightbox.querySelector('.lightbox-counter');
    
    // Coletar imagens
    portfolioItems.forEach((img, index) => {
        images.push(img.src);
        
        img.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = index;
            openLightbox();
        });
    });
    
    function openLightbox() {
        lightboxImg.src = images[currentIndex];
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex];
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
    }
    
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex];
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
    }
    
    // Event listeners
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-nav.next').addEventListener('click', nextImage);
    lightbox.querySelector('.lightbox-nav.prev').addEventListener('click', prevImage);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });
    
    // Touch swipe
    let touchStartX = 0;
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });
    
    lightbox.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextImage();
            else prevImage();
        }
    });
}

// ===== 8. SMOOTH SCROLL MELHORADO =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== 9. MASONRY LAYOUT =====
function initMasonryLayout() {
    const grid = document.querySelector('.portfolio-grid');
    if (!grid) return;
    
    const items = grid.querySelectorAll('.portfolio-item');
    const sizes = ['size-small', 'size-medium', 'size-large'];
    
    items.forEach((item, index) => {
        // Atribuir tamanhos variados
        const sizeClass = sizes[index % 3];
        item.classList.add(sizeClass);
    });
}

// Inicializar todas as novas funcionalidades
function initMegaUpgrade() {
    initScrollProgress();
    initHeaderScroll();
    initAnimatedCounters();
    initMagneticButtons();
    // initCursorTrail(); // Descomente para ativar rastro do cursor
    initImprovedLightbox();
    initSmoothScroll();
    // initMasonryLayout(); // Descomente para layout masonry
}

// ==================== BOTTOM NAVIGATION ====================
function initBottomNav() {
    const bottomNav = document.getElementById('bottomNav');
    const navItems = document.querySelectorAll('.bottom-nav-item[data-section]');
    
    if (!bottomNav || navItems.length === 0) return;
    
    // Observar seções para atualizar item ativo
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.dataset.section === sectionId) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
    
    // Click handler com scroll suave
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const section = item.dataset.section;
            if (section) {
                e.preventDefault();
                const target = document.getElementById(section);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ==================== PARALLAX NO PORTFÓLIO ====================
function initPortfolioParallax() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (!portfolioItems.length) return;
    
    // Marcar itens para parallax
    portfolioItems.forEach(item => {
        item.setAttribute('data-parallax', 'true');
    });
    
    // Parallax no scroll
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                portfolioItems.forEach(item => {
                    const rect = item.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    if (rect.top < windowHeight && rect.bottom > 0) {
                        const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
                        const translateY = (scrollPercent - 0.5) * 30;
                        
                        const img = item.querySelector('img');
                        if (img) {
                            img.style.transform = `scale(1.1) translateY(${translateY}px)`;
                        }
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ==================== ANIMAÇÕES DE ENTRADA ELABORADAS ====================
function initEntranceAnimations() {
    // Adicionar atributos de animação aos elementos
    const animationMap = [
        { selector: '.section-header', animation: 'fade-up' },
        { selector: '.style-card', animation: 'scale-up' },
        { selector: '.process-step', animation: 'slide-left' },
        { selector: '.stat-item', animation: 'zoom-rotate' },
        { selector: '.faq-item', animation: 'fade-up' },
        { selector: '.testimonial-card', animation: 'blur-in' }
    ];
    
    animationMap.forEach(({ selector, animation }) => {
        document.querySelectorAll(selector).forEach((el, index) => {
            if (!el.hasAttribute('data-animate')) {
                el.setAttribute('data-animate', animation);
                el.style.transitionDelay = `${index * 0.1}s`;
            }
        });
    });
    
    // Adicionar classe animate-stagger aos grids
    document.querySelectorAll('.styles-grid, .stats-grid, .destaques-grid').forEach(grid => {
        grid.classList.add('animate-stagger');
    });
    
    // Observer para ativar animações
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Não para de observar para permitir re-animação se quiser
            }
        });
    }, observerOptions);
    
    // Observar todos os elementos com data-animate
    document.querySelectorAll('[data-animate]').forEach(el => {
        animationObserver.observe(el);
    });
    
    // Observar stagger grids
    document.querySelectorAll('.animate-stagger').forEach(el => {
        animationObserver.observe(el);
    });
    
    // Observar seções
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-animate');
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });
        
        sectionObserver.observe(section);
    });
}

// ==================== SWIPE NO PORTFÓLIO (MOBILE) ====================
function initPortfolioSwipe() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (!portfolioGrid) return;
    
    // Adicionar indicador de swipe
    const swipeIndicator = document.createElement('div');
    swipeIndicator.className = 'swipe-indicator';
    swipeIndicator.textContent = 'Arraste para ver mais';
    portfolioGrid.appendChild(swipeIndicator);
    
    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;
    
    // Touch events
    portfolioGrid.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - portfolioGrid.offsetLeft;
        scrollLeft = portfolioGrid.scrollLeft;
        portfolioGrid.classList.add('swiped');
    }, { passive: true });
    
    portfolioGrid.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - portfolioGrid.offsetLeft;
        const walk = (x - startX) * 2;
        portfolioGrid.scrollLeft = scrollLeft - walk;
    }, { passive: true });
    
    portfolioGrid.addEventListener('touchend', () => {
        isDown = false;
    });
    
    // Mouse events para desktop
    portfolioGrid.addEventListener('mousedown', (e) => {
        isDown = true;
        portfolioGrid.style.cursor = 'grabbing';
        startX = e.pageX - portfolioGrid.offsetLeft;
        scrollLeft = portfolioGrid.scrollLeft;
    });
    
    portfolioGrid.addEventListener('mouseleave', () => {
        isDown = false;
        portfolioGrid.style.cursor = 'grab';
    });
    
    portfolioGrid.addEventListener('mouseup', () => {
        isDown = false;
        portfolioGrid.style.cursor = 'grab';
    });
    
    portfolioGrid.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - portfolioGrid.offsetLeft;
        const walk = (x - startX) * 2;
        portfolioGrid.scrollLeft = scrollLeft - walk;
    });
}

// Adicionar ao DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Aguardar loader terminar
    setTimeout(init3DEffects, 1500);
    setTimeout(initMegaUpgrade, 100);
    setTimeout(initTypewriter, 2000); // Após loader
    
    // Novas funcionalidades
    initBottomNav();
    initPortfolioParallax();
    initEntranceAnimations();
    initPortfolioSwipe();
});

// Site carregado com sucesso - versão de produção
