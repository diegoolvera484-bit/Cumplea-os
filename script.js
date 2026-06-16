document.addEventListener('DOMContentLoaded', () => {

    function switchScreen(oldScreenId, newScreenId) {
        document.getElementById(oldScreenId).classList.remove('active');
        setTimeout(() => {
            document.getElementById(newScreenId).classList.add('active');
        }, 1000); 
    }

    // --- FASE 1: CONSOLA ---
    const t1 = document.getElementById('term1');
    const t2 = document.getElementById('term2');
    const t3 = document.getElementById('term3');
    const t4 = document.getElementById('term4');

    setTimeout(() => typeText(t1, "> Iniciando_Sorpresa_Ale.exe...", () => {
        setTimeout(() => typeText(t2, "> Cargando_Recuerdos... [||||||||||] 100%", () => {
            setTimeout(() => typeText(t3, "> Preparando_Sorpresa_De_Cumpleaños...", () => {
                setTimeout(() => {
                    t4.textContent = "> ¡ACCESO CONCEDIDO!";
                    document.body.style.background = "#070714";
                    setTimeout(() => switchScreen('screen-console', 'screen-map'), 1500);
                }, 800);
            }), 40);
        }), 40);
    }), 40);

    function typeText(element, text, callback, speed = 50) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i); 
                i++;
                setTimeout(type, speed);
            } else if (callback) callback();
        }
        type();
    }

    // --- FASE 2: CARRETES Y HILO ROJO ---
    const btnConnect = document.getElementById('btnConnect');
    const destinyThread = document.getElementById('destinyThread');
    const mapText = document.getElementById('mapText');
    const spoolMe = document.getElementById('spoolMe');
    const spoolHer = document.getElementById('spoolHer');

    btnConnect.addEventListener('click', () => {
        btnConnect.style.opacity = '0';
        btnConnect.style.pointerEvents = 'none';
        
        mapText.style.opacity = '0';
        setTimeout(() => {
            mapText.textContent = "...pero el hilo rojo siempre nos unirá.";
            mapText.style.opacity = '1';
        }, 500);

        spoolMe.style.transform = 'translateX(110px) rotate(720deg)';
        spoolHer.style.transform = 'translateX(-110px) rotate(-720deg)';
        destinyThread.setAttribute('d', 'M 140 50 Q 150 50 160 50');
        
        setTimeout(() => {
            document.body.style.background = "#e0f7fa";
            setTimeout(() => switchScreen('screen-map', 'screen-flower'), 1000);
        }, 2500);
    });

    // --- FASE 3: GIRASOL ---
    const plantStage = document.getElementById('plantStage');
    const flowerText = document.getElementById('flowerText');
    let clicks = 0;
    const stages = ['🟤', '🌱', '🌿', '🌻'];
    const texts = ['Toca la semilla para regarla (0/3)', '¡Sigue regando! (1/3)', 'Casi lista... (2/3)', '¡Floreció! ✨'];

    plantStage.addEventListener('click', () => {
        if (clicks < 3) {
            clicks++;
            plantStage.textContent = stages[clicks];
            flowerText.textContent = texts[clicks];
            
            if (clicks === 3) {
                plantStage.style.transform = 'scale(1.5)';
                document.body.style.background = "#fff3e0";
                setTimeout(() => switchScreen('screen-flower', 'screen-cake'), 2000);
            }
        }
    });

    // --- FASE 4: PASTEL CON VIENTO SUAVE ---
    const candleFlame = document.getElementById('candleFlame');
    candleFlame.addEventListener('click', () => {
        candleFlame.textContent = '💨';
        candleFlame.style.fontSize = '35px'; 
        candleFlame.style.animation = 'floatAway 1.5s ease-out forwards'; 

        document.querySelector('#screen-cake .instruction-text').textContent = "¡Deseo concedido!";
        
        setTimeout(() => {
            switchScreen('screen-cake', 'screen-letter');
            document.getElementById('topControls').style.opacity = '1';
        }, 2000);
    });

    // --- FASE 5: LA CARTA, RAMO Y AUTO-NIGHT MODE ---
    const envelope = document.getElementById('envelopeWrapper');
    const heartIcon = document.getElementById('heartIcon');
    const themeBtn = document.getElementById('themeBtn');
    const starContainer = document.getElementById('starContainer');
    const specialAudioButtons = document.getElementById('specialAudioButtons');
    
    const musicBtn = document.getElementById('musicBtn');
    const bgMusic = document.getElementById('bgMusic');
    const voiceNote = document.getElementById('voiceNote');
    const claxonsSong = document.getElementById('claxonsSong');
    const playVoiceBtn = document.getElementById('playVoice');
    const playClaxonsBtn = document.getElementById('playClaxons');
    
    let isNight = false;
    let isMusicPlaying = false;
    let petalInterval;

    // NUEVO: Función para alternar modo día/noche de forma limpia
    function setNightMode(enable) {
        isNight = enable;
        const letterScreen = document.getElementById('screen-letter');
        
        if (enable) {
            letterScreen.classList.remove('day-mode');
            letterScreen.classList.add('night-mode');
            themeBtn.textContent = '☀️';
            starContainer.classList.remove('hidden');
            
            starContainer.innerHTML = '';
            for (let i = 0; i < 60; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                const size = Math.random() * 3 + 'px';
                star.style.width = size; star.style.height = size;
                star.style.top = Math.random() * 100 + '%';
                star.style.left = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 2 + 's';
                starContainer.appendChild(star);
            }
            for (let i = 0; i < 25; i++) {
                let f = document.createElement('div');
                f.className = 'firefly';
                f.style.top = Math.random() * 100 + "%";
                f.style.left = Math.random() * 100 + "%";
                f.style.animationDelay = Math.random() * 5 + "s";
                starContainer.appendChild(f);
            }
        } else {
            letterScreen.classList.remove('night-mode');
            letterScreen.classList.add('day-mode');
            themeBtn.textContent = '🌙';
            starContainer.classList.add('hidden');
            starContainer.innerHTML = '';
        }
    }

    // NUEVO: Detección Automática de Hora Local
    const currentHour = new Date().getHours();
    // Si son las 7:00 PM (19) o más, o antes de las 6:00 AM (6), se activa el modo noche solo.
    if (currentHour >= 19 || currentHour < 6) {
        setNightMode(true);
    } else {
        setNightMode(false);
    }

    // Botón manual por si quiere cambiarlo
    themeBtn.addEventListener('click', () => { setNightMode(!isNight); });

    function pauseAllAudio() {
        bgMusic.pause(); voiceNote.pause(); claxonsSong.pause();
        playVoiceBtn.classList.remove('playing'); playClaxonsBtn.classList.remove('playing');
    }

    musicBtn.addEventListener('click', () => {
        if (isMusicPlaying) { pauseAllAudio(); musicBtn.textContent = '🔇'; isMusicPlaying = false; } 
        else { bgMusic.play(); musicBtn.textContent = '🎵'; isMusicPlaying = true; }
    });

    function handleSpecialAudio(audioElement, buttonElement) {
        if (!audioElement.paused) {
            audioElement.pause(); buttonElement.classList.remove('playing');
            if(isMusicPlaying) bgMusic.play();
        } else {
            pauseAllAudio(); audioElement.play(); buttonElement.classList.add('playing');
            audioElement.onended = () => { buttonElement.classList.remove('playing'); if(isMusicPlaying) bgMusic.play(); };
        }
    }

    playVoiceBtn.addEventListener('click', () => handleSpecialAudio(voiceNote, playVoiceBtn));
    playClaxonsBtn.addEventListener('click', () => handleSpecialAudio(claxonsSong, playClaxonsBtn));

    // --- NUEVO: VISOR DE FOTOS (LIGHTBOX) ---
    const lightbox = document.getElementById('lightboxOverlay');
    const lightboxImg = document.getElementById('lightboxImg');
    
    document.querySelectorAll('.polaroid img').forEach(img => {
        img.addEventListener('click', (e) => {
            lightboxImg.src = e.target.src;
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // CARRUSEL
    const pols = document.querySelectorAll('.polaroid');
    let carIdx = 0;
    document.querySelector('.next').addEventListener('click', () => { pols[carIdx].classList.remove('active'); carIdx = (carIdx + 1) % pols.length; pols[carIdx].classList.add('active'); });
    document.querySelector('.prev').addEventListener('click', () => { pols[carIdx].classList.remove('active'); carIdx = (carIdx - 1 + pols.length) % pols.length; pols[carIdx].classList.add('active'); });

    // PAGINACIÓN Y MAQUINA DE ESCRIBIR
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const pageIndicator = document.getElementById('pageIndicator');
    let currentPage = 0;
    let typewriterTimeouts = [];

    function runTypewriterEffect(pageIndex) {
        typewriterTimeouts.forEach(t => clearTimeout(t));
        typewriterTimeouts = [];
        if(specialAudioButtons) specialAudioButtons.classList.remove('show');

        const textElements = Array.from(pages[pageIndex].querySelectorAll('.typewriter, .signature-line, .signature-name'));
        textElements.forEach(el => el.textContent = '');

        function typeElement(index) {
            if (index >= textElements.length) {
                // AHORA SON 9 PÁGINAS. EL ÍNDICE ES 8
                if (pageIndex === 8 && specialAudioButtons) specialAudioButtons.classList.add('show');
                return; 
            }
            const el = textElements[index];
            const fullText = el.getAttribute('data-text');
            if (!fullText) return typeElement(index + 1);

            let charIndex = 0;
            function typeChar() {
                if (charIndex < fullText.length) {
                    el.textContent += fullText.charAt(charIndex); 
                    charIndex++;
                    typewriterTimeouts.push(setTimeout(typeChar, 30));
                } else {
                    typewriterTimeouts.push(setTimeout(() => typeElement(index + 1), 300)); 
                }
            }
            typeChar(); 
        }
        typewriterTimeouts.push(setTimeout(() => typeElement(0), 150));
    }

    function updatePages() {
        pages.forEach((page, index) => page.classList.toggle('active', index === currentPage));
        pageIndicator.textContent = `${currentPage + 1} / ${pages.length}`;
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === pages.length - 1;
        runTypewriterEffect(currentPage);
    }

    nextBtn.addEventListener('click', () => { if (currentPage < pages.length - 1) { currentPage++; updatePages(); } });
    prevBtn.addEventListener('click', () => { if (currentPage > 0) { currentPage--; updatePages(); } });

    // --- EFECTO PARALLAX ---
    document.addEventListener('mousemove', (e) => {
        const wrapper = document.getElementById('parallaxWrapper');
        const bouquet = document.getElementById('bouquetContainer');
        if (wrapper && bouquet.classList.contains('show')) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 45;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 45;
            wrapper.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
        }
    });

    // --- CAÍDA DE PÉTALOS ---
    function spawnFallingPetal() {
        const canopy = document.getElementById('bouquetCanopy');
        if (!canopy) return;
        let petal = document.createElement('div');
        petal.className = 'falling-petal';
        petal.innerText = Math.random() > 0.7 ? '💛' : '✨';
        petal.style.left = 30 + Math.random() * 40 + '%';
        petal.style.top = 20 + Math.random() * 30 + '%';
        petal.style.fontSize = (8 + Math.random() * 6) + 'px';
        canopy.appendChild(petal);
        setTimeout(() => petal.remove(), 4000);
    }

    // --- GENERAR RAMO DE FLORES PREMIUM ---
    function showBouquet() {
        const bouquet = document.getElementById('bouquetContainer');
        bouquet.classList.add('show'); 
        const canopy = document.getElementById('bouquetCanopy');
        canopy.innerHTML = ''; 

        setTimeout(() => {
            const numFlowers = 220; 
            let added = 0;
            let attempts = 0;
            
            while (added < numFlowers && attempts < 2000) {
                attempts++;
                let angle = Math.random() * Math.PI * 2;
                let r = Math.sqrt(Math.random()); 
                
                let spreadX = 42; 
                let spreadY = 32; 
                
                let leftPct = 50 + Math.cos(angle) * r * spreadX;
                let topPct = 30 + Math.sin(angle) * r * spreadY; 
                
                let sf = document.createElement('div');
                sf.className = 'tree-sunflower';
                
                let plantType = Math.random();
                if (plantType < 0.65) { sf.innerText = '🌻'; } 
                else if (plantType < 0.75) { sf.innerText = '🌼'; } 
                else if (plantType < 0.85) { sf.innerText = '💮'; }
                else { sf.innerText = Math.random() > 0.5 ? '🌿' : '🪴'; }
                
                sf.style.left = `${leftPct}%`;
                sf.style.top = `${topPct}%`;
                
                const size = 18 + Math.random() * 26; 
                sf.style.fontSize = `${size}px`;
                sf.style.zIndex = Math.floor(size) + 10; 
                
                const brightness = 0.7 + (size / 44) * 0.4;
                sf.style.filter = `brightness(${brightness}) drop-shadow(0 2px 3px rgba(0,0,0,0.4))`;
                
                const rotation = Math.floor(Math.random() * 360);
                sf.style.transformOrigin = "center center"; 
                sf.style.transform = `translate(-50%, -50%) scale(0) rotate(${rotation}deg)`;
                
                sf.style.animationDelay = `${(added * 0.015)}s`; 
                canopy.appendChild(sf);
                added++;
            }
            
            petalInterval = setInterval(spawnFallingPetal, 1200);

        }, 800); 
    }

    function clearBouquet() {
        const bouquet = document.getElementById('bouquetContainer');
        bouquet.classList.remove('show');
        clearInterval(petalInterval);
        setTimeout(() => {
            document.getElementById('bouquetCanopy').innerHTML = '';
        }, 1000);
    }

    function abrirCarta() {
        if (!envelope.classList.contains('is-open')) {
            envelope.classList.remove('is-closing');
            envelope.classList.add('is-open');

            document.body.classList.add("cinematic");

            if (navigator.vibrate) navigator.vibrate([150, 50, 150, 50, 150]); 
            if (!isMusicPlaying) { bgMusic.play().catch(e => console.log(e)); musicBtn.textContent = '🎵'; isMusicPlaying = true; }

            showBouquet();
            
            // CORRECCIÓN DE BUG: Esperamos 1.2 segundos (1200ms) a que la carta termine de salir del sobre para empezar a escribir
            setTimeout(() => runTypewriterEffect(0), 1200);
        }
    }

    document.getElementById('btnAbrir').addEventListener('click', abrirCarta);
    heartIcon.addEventListener('click', abrirCarta);

    document.getElementById('btnCerrar').addEventListener('click', () => {
        envelope.classList.remove('is-open'); 
        envelope.classList.add('is-closing');
        
        document.body.classList.remove("cinematic");
        
        typewriterTimeouts.forEach(t => clearTimeout(t));
        pauseAllAudio(); 
        if(specialAudioButtons) specialAudioButtons.classList.remove('show');
        
        clearBouquet();

        setTimeout(() => {
            if (envelope.classList.contains('is-closing')) envelope.classList.remove('is-closing');
            currentPage = 0;
            pages.forEach(p => p.querySelectorAll('.typewriter, .signature-line, .signature-name').forEach(el => el.textContent = ''));
            updatePages(); // Esto no se verá porque está dentro del sobre oculto
        }, 1200); 
    });

    // Configuración Inicial para que el texto nazca en blanco antes de abrir la carta
    pages.forEach((page, index) => page.classList.toggle('active', index === currentPage));
    pageIndicator.textContent = `${currentPage + 1} / ${pages.length}`;
    pages.forEach(p => p.querySelectorAll('.typewriter, .signature-line, .signature-name').forEach(el => el.textContent = ''));

});