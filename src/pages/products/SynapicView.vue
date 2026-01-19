<script setup>
  import { ref, onMounted } from 'vue'
  
  const isLoading = ref(true)
  const showDropdown = ref(false)
  
  const navItems = ref([
    { name: 'Synapic', url: '/products/synapic' }
  ])
  
  const features = ref([
    { 
      icon: 'fas fa-shield-halved',
      title: 'Total Privacy', 
      desc: 'Zero tracking. Your search history and preferences are processed and stored strictly on your local device.' 
    },
    { 
      icon: 'fas fa-brain',
      title: 'Elite AI Models', 
      desc: 'Harness the power of Llama 3.3, DeepSeek-R1, and Gemini 2.0 Flash for intelligent, real-time answers.' 
    },
    { 
      icon: 'fas fa-globe',
      title: 'Global Search', 
      desc: 'Deep indexing across 30+ languages including English, Turkish, German, French, and Japanese.' 
    },
    { 
      icon: 'fas fa-code',
      title: 'BSD 3-Clause', 
      desc: 'Fully open-source and transparent architecture. Designed for developers who value digital sovereignty.' 
    }
  ])
  
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false
    }, 600)
  })
  
  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
  }
  </script>
  
  <template>
    <div class="app-container" :class="{ 'is-active': !isLoading }">
      <div class="ambient-glow"></div>
      
      <header class="navbar">
        <div class="nav-inner">
            <div class="brand-wrapper reveal-element" style="--delay: 0.1s">
              <a href="/" class="brand">openbyte</a>
            </div>
          
          <nav class="nav-menu reveal-element" style="--delay: 0.2s">
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
                    v-for="item in navItems" 
                    :key="item.name" 
                    :href="item.url" 
                    class="dropdown-item"
                  >
                    {{ item.name }}
                  </a>
                </div>
              </transition>
            </div>
            
            <a href="/manifesto" class="nav-link">Manifesto</a>
          </nav>
  
          <div class="nav-actions reveal-element" style="--delay: 0.3s">
            <a href="https://github.com/yigitkabak" class="btn-github">
              <span>GitHub</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </a>
          </div>
        </div>
      </header>
  
      <main class="hero-section">
        <div class="hero-content">
          <div class="badge-wrapper reveal-element" style="--delay: 0.4s">
            <span class="version-badge">Synapic v1.0 Stable</span>
          </div>
          
          <h1 class="hero-title reveal-element" style="--delay: 0.5s">
            Discover the Web with <span class="text-gradient">Intelligence</span>
          </h1>
          
          <p class="hero-subtitle reveal-element" style="--delay: 0.6s">
            A next-generation search engine that doesn't track your personal data, powered by top-tier AI, and completely open source.
          </p>
          
          <div class="hero-actions reveal-element" style="--delay: 0.7s">
            <a href="https://github.com/openbytelabs/Synapic" class="btn-main">
              <i class="fab fa-github"></i> View Source Code
            </a>
          </div>
        </div>
      </main>
  
      <section class="features-section reveal-element" style="--delay: 0.9s">
        <div class="bento-grid">
          <div v-for="(feature, index) in features" :key="index" class="bento-card">
            <div class="card-icon"><i :class="feature.icon"></i></div>
            <h3 class="card-title">{{ feature.title }}</h3>
            <p class="card-desc">{{ feature.desc }}</p>
          </div>
        </div>
      </section>
  
      <footer class="footer reveal-element" style="--delay: 1.1s">
        <div class="footer-content">
          <p>openbyte &copy; 2023. BSD 3-CLAUSE LICENSE.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  
  :root {
    --primary-glow: #4f46e5;
    --secondary-glow: #0ea5e9;
    --bg-color: #050505;
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .app-container {
    min-height: 100vh;
    background-color: var(--bg-color);
    color: #fff;
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
  
  .ambient-glow {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    background: 
      radial-gradient(circle at 50% 0%, rgba(79, 70, 229, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 40%);
    pointer-events: none;
    z-index: 0;
    opacity: 0;
    transition: opacity 1.5s ease;
  }
  
  .is-active .ambient-glow {
    opacity: 1;
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
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
    text-decoration: none;
  }
  
  .nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
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
    font-family: 'Inter', sans-serif;
    color: #888;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .dropdown-trigger:hover, .dropdown-trigger.is-open {
    color: #fff;
  }
  
  .chevron {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
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
    background: rgba(10, 10, 10, 0.95);
    border: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(20px);
    border-radius: 12px;
    padding: 6px;
    min-width: 160px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
  }
  
  .dropdown-item {
    text-decoration: none;
    color: #888;
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
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .dropdown-fade-enter-from,
  .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }
  
  .nav-link {
    text-decoration: none;
    color: #888;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover {
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
    padding: 8px 18px;
    border-radius: 99px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    transition: all 0.3s ease;
  }
  
  .btn-github:hover {
    background: rgba(255,255,255,0.15);
    transform: translateY(-1px);
  }
  
  .hero-section {
    padding: 160px 20px 80px;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  
  .hero-content {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .version-badge {
    background: rgba(79, 70, 229, 0.1);
    border: 1px solid rgba(79, 70, 229, 0.3);
    color: #818cf8;
    padding: 6px 16px;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    display: inline-block;
    margin-bottom: 2rem;
    box-shadow: 0 0 20px rgba(79, 70, 229, 0.1);
  }
  
  .hero-title {
    font-size: 5rem;
    font-weight: 800;
    line-height: 1;
    margin: 0 0 1.5rem;
    letter-spacing: -0.04em;
  }
  
  .text-gradient {
    background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  
  .hero-subtitle {
    font-size: 1.35rem;
    color: #9ca3af;
    line-height: 1.6;
    max-width: 680px;
    margin: 0 auto 3.5rem;
    font-weight: 400;
  }
  
  .hero-actions {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
  
  .btn-main {
    background: #fff;
    color: #000;
    padding: 16px 36px;
    border-radius: 12px;
    font-weight: 700;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .btn-main:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px -5px rgba(255, 255, 255, 0.3);
  }
  
  .btn-secondary {
    padding: 16px 36px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    border-radius: 12px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: #fff;
  }
  
  .features-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }
  
  .bento-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
  }
  
  .bento-card {
    background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
    border: 1px solid rgba(255,255,255,0.06);
    padding: 2.5rem;
    border-radius: 24px;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }
  
  .bento-card:hover {
    border-color: rgba(255,255,255,0.2);
    transform: translateY(-5px);
    background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
  }
  
  .bento-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  .bento-card:hover::before {
    opacity: 1;
  }
  
  .card-icon {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #fff 0%, #94a3b8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .card-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
    color: #fff;
  }
  
  .card-desc {
    font-size: 0.95rem;
    color: #888;
    line-height: 1.6;
  }
  
  .footer {
    padding: 80px 0 40px;
    text-align: center;
    margin-top: auto;
    border-top: 1px solid rgba(255,255,255,0.03);
  }
  
  .footer-content p {
    font-size: 0.75rem;
    color: #444;
    letter-spacing: 0.1em;
    font-weight: 500;
  }
  
  .reveal-element {
    opacity: 0;
    transform: translateY(40px);
    filter: blur(8px);
    transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: var(--delay);
    will-change: transform, opacity, filter;
  }
  
  .is-active .reveal-element {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
  
  @media (max-width: 768px) {
    .hero-title { font-size: 3rem; }
    .hero-actions { flex-direction: column; }
    .nav-menu { display: none; }
    .nav-inner { padding: 0 20px; }
    .hero-section { padding-top: 120px; }
  }
  </style>