<script setup>
  import { ref, onMounted, watch } from 'vue'
  
  const isLoading = ref(true)
  const showDropdown = ref(false)
  const isMobileMenuOpen = ref(false)
  
  const navItems = ref([
    { name: 'Synapic', url: '/products/synapic' }
  ])
  
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false
    }, 2000)
  })
  
  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
  }
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    if (isMobileMenuOpen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
  
  watch(isMobileMenuOpen, (newVal) => {
    if (!newVal) {
      showDropdown.value = false
    }
  })
  </script>
  
  <template>
    <transition name="fade-intro">
      <div v-if="isLoading" class="intro-overlay">
        <div class="intro-wrapper">
          <h1 class="intro-logo">openbyte</h1>
        </div>
      </div>
    </transition>
  
    <div class="app-container" :class="{ 'is-active': !isLoading }">
      <div class="ambient-glow"></div>
      
      <transition name="overlay-fade">
        <div 
          v-if="isMobileMenuOpen" 
          class="menu-overlay" 
          @click="toggleMobileMenu"
        ></div>
      </transition>
      
      <header class="navbar">
        <div class="nav-inner">
          <div class="brand-wrapper reveal-element" style="--delay: 0.1s">
            <span class="brand">openbyte</span>
          </div>
          
          <button class="mobile-toggle" @click="toggleMobileMenu">
            <i :class="isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
          </button>
  
          <nav class="nav-menu reveal-element desktop-only" style="--delay: 0.3s">
            <div class="dropdown-wrapper">
              <button 
                class="nav-link dropdown-trigger" 
                @click="toggleDropdown"
                :class="{ 'is-open': showDropdown }"
              >
                Projects
                <svg 
                  class="chevron" 
                  width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              
              <transition name="dropdown-fade">
                <div v-if="showDropdown" class="dropdown-content">
                  <a 
                    v-for="(item, index) in navItems" 
                    :key="item.name" 
                    :href="item.url" 
                    class="dropdown-item"
                    :style="{ '--item-idx': index }"
                  >
                    {{ item.name }}
                  </a>
                </div>
              </transition>
            </div>
            
            <a href="/manifesto" class="nav-link">Manifesto</a>
          </nav>
  
          <div class="nav-actions reveal-element desktop-only" style="--delay: 0.5s">
            <a href="https://github.com/yigitkabak" class="btn-github">
              <span>GitHub</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </a>
          </div>
        </div>
  
        <transition name="mobile-menu-fade">
          <div v-if="isMobileMenuOpen" class="mobile-menu">
            <div class="dropdown-wrapper">
              <button 
                class="nav-link dropdown-trigger" 
                @click="toggleDropdown"
                :class="{ 'is-open': showDropdown }"
              >
                Projects
                <svg 
                  class="chevron" 
                  width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              
              <transition name="dropdown-fade">
                <div v-if="showDropdown" class="dropdown-content">
                  <a 
                    v-for="(item, index) in navItems" 
                    :key="item.name" 
                    :href="item.url" 
                    class="dropdown-item"
                    :style="{ '--item-idx': index }"
                  >
                    {{ item.name }}
                  </a>
                </div>
              </transition>
            </div>
            
            <a href="/manifesto" class="nav-link">Manifesto</a>
            
            <div class="mobile-github">
              <a href="https://github.com/yigitkabak" class="btn-github">
                <span>GitHub</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </a>
            </div>
          </div>
        </transition>
      </header>
  
      <main class="hero-section">
        <div class="hero-content">
          <div class="hero-text-wrapper reveal-up" style="--delay: 0.8s">
            <h1 class="hero-title">
              <span class="block-reveal">openbyte</span>
            </h1>
          </div>
          
          <div class="hero-desc-wrapper reveal-up" style="--delay: 1.0s">
            <p class="hero-description">
              Defining the architecture of modern connectivity. We build open-source infrastructure designed for resilience, speed, and infinite scalability.
            </p>
          </div>
        </div>
      </main>
  
      <footer class="footer reveal-up" style="--delay: 1.5s">
        <div class="footer-content">
          <p>openbyte &copy; 2023</p>
        </div>
      </footer>
    </div>
  </template>
  
  <style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
  
  :root {
    --bg-color: #080808;
    --text-primary: #ffffff;
    --text-secondary: #888888;
    --accent-glow: rgba(255, 255, 255, 0.08);
    --font-stack: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: var(--bg-color);
    margin: 0;
    font-family: var(--font-stack);
    color: var(--text-primary);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }
  
  .intro-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .intro-logo {
    font-size: 4rem;
    font-weight: 600;
    letter-spacing: -0.04em;
    margin: 0;
    color: #fff;
    animation: breathe ease-in-out 2s infinite;
  }
  
  @keyframes breathe {
    0% { color: #ffffff; opacity: 1; transform: scale(1); filter: blur(0px); }
    50% { color: #333333; opacity: 0.6; transform: scale(0.98); filter: blur(1px); }
    100% { color: #ffffff; opacity: 1; transform: scale(1); filter: blur(0px); }
  }
  
  .fade-intro-leave-active {
    transition: opacity 1s var(--ease-out-expo), transform 1s var(--ease-out-expo);
  }
  
  .fade-intro-leave-to {
    opacity: 0;
    transform: scale(1.05);
  }
  
  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  .app-container.is-active {
    opacity: 1;
  }
  
  .ambient-glow {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 60%);
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: -1;
    animation: ambientPulse 10s ease-in-out infinite alternate;
  }
  
  @keyframes ambientPulse {
    0% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
    100% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
  }
  
  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 98;
  }
  
  .overlay-fade-enter-active,
  .overlay-fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .overlay-fade-enter-from,
  .overlay-fade-leave-to {
    opacity: 0;
  }
  
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }
  
  .nav-inner {
    width: 100%;
    max-width: 1400px;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .brand {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #fff;
  }
  
  .nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  
  .mobile-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    z-index: 101;
    padding: 8px;
    font-size: 1.5rem;
  }
  
  .mobile-menu {
    display: none;
  }
  
  .dropdown-wrapper {
    position: relative;
  }
  
  .dropdown-trigger {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    font-family: var(--font-stack);
    color: var(--text-secondary);
    font-size: 0.95rem;
    font-weight: 500;
  }
  
  .chevron {
    transition: transform 0.3s var(--ease-out-expo);
  }
  
  .dropdown-trigger.is-open .chevron {
    transform: rotate(180deg);
  }
  
  .dropdown-content {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 15px;
    background: rgba(15, 15, 15, 0.95);
    border: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(20px);
    border-radius: 12px;
    padding: 8px;
    min-width: 180px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
  }
  
  .dropdown-item {
    text-decoration: none;
    color: var(--text-secondary);
    padding: 10px 16px;
    font-size: 0.9rem;
    border-radius: 6px;
    transition: all 0.2s ease;
    text-align: left;
  }
  
  .dropdown-item:hover {
    background: rgba(255,255,255,0.08);
    color: #fff;
  }
  
  .dropdown-fade-enter-active,
  .dropdown-fade-leave-active {
    transition: all 0.3s var(--ease-out-expo);
  }
  
  .dropdown-fade-enter-from,
  .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }
  
  .nav-link {
    text-decoration: none;
    color: var(--text-secondary);
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover, .nav-link.is-open {
    color: #fff;
  }
  
  .btn-github {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 99px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    transition: all 0.3s var(--ease-out-expo);
  }
  
  .btn-github:hover {
    background: rgba(255,255,255,0.15);
    transform: translateY(-1px);
  }
  
  .hero-section {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    position: relative;
  }
  
  .hero-content {
    text-align: center;
    max-width: 900px;
    padding: 0 20px;
  }
  
  .hero-title {
    font-size: 4.5rem;
    font-weight: 700;
    letter-spacing: -0.05em;
    margin: 0;
    line-height: 1.1;
    overflow: hidden;
  }
  
  .hero-description {
    font-size: 1.25rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-top: 2rem;
    margin-bottom: 3rem;
    font-weight: 400;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .footer {
    padding: 3rem 0;
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.03);
  }
  
  .footer-content p {
    color: #444;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    margin: 0;
  }
  
  .reveal-element {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 1.2s var(--ease-out-expo), transform 1.2s var(--ease-out-expo);
    transition-delay: var(--delay);
  }
  
  .is-active .reveal-element {
    opacity: 1;
    transform: translateY(0);
  }
  
  .reveal-up {
    opacity: 0;
    transform: translateY(40px);
    filter: blur(10px);
    transition: all 1.2s var(--ease-out-expo);
    transition-delay: var(--delay);
  }
  
  .is-active .reveal-up {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
  
  @media (max-width: 768px) {
    .mobile-toggle { 
      display: block;
    }
    
    .desktop-only { 
      display: none !important;
    }
    
    .mobile-menu {
      display: block;
      position: fixed;
      top: 80px;
      left: 0;
      width: 100%;
      background: rgba(8, 8, 8, 0.98);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255,255,255,0.05);
      padding: 2rem;
      z-index: 99;
    }
  
    .mobile-menu-fade-enter-active,
    .mobile-menu-fade-leave-active {
      transition: all 0.3s var(--ease-out-expo);
    }
  
    .mobile-menu-fade-enter-from,
    .mobile-menu-fade-leave-to {
      opacity: 0;
      transform: translateY(-20px);
    }
  
    .mobile-menu .dropdown-wrapper {
      width: 100%;
      margin-bottom: 1rem;
    }
  
    .mobile-menu .dropdown-trigger {
      width: 100%;
      justify-content: space-between;
      padding: 12px 16px;
      font-size: 1rem;
      border-radius: 8px;
      background: rgba(255,255,255,0.03);
    }
    
    .mobile-menu .dropdown-trigger:hover {
      background: rgba(255,255,255,0.05);
    }
  
    .mobile-menu .dropdown-content {
      position: static;
      transform: none;
      margin-top: 10px;
      width: 100%;
      background: rgba(255,255,255,0.03);
    }
  
    .mobile-menu .dropdown-fade-enter-from,
    .mobile-menu .dropdown-fade-leave-to {
      opacity: 0;
      transform: translateY(-10px);
    }
  
    .mobile-menu .nav-link {
      padding: 12px 16px;
      font-size: 1rem;
      width: 100%;
      display: block;
      border-radius: 8px;
      background: rgba(255,255,255,0.03);
      margin-bottom: 1rem;
    }
    
    .mobile-menu .nav-link:hover {
      background: rgba(255,255,255,0.05);
    }
  
    .mobile-github {
      display: flex;
      justify-content: center;
      margin-top: 1.5rem;
    }
  
    .hero-title { 
      font-size: 3rem; 
    }
    
    .hero-description { 
      font-size: 1.1rem; 
    }
    
    .intro-logo { 
      font-size: 2.5rem; 
    }
    
    .nav-inner { 
      padding: 0 20px; 
    }
  }
  </style>