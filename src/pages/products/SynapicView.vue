<script setup>
    import { ref } from 'vue'
    
    const showDropdown = ref(false)
    
    const features = ref([
      { title: 'Privacy Centric', desc: 'No tracking, no user profiles. Your search history remains private and encrypted.' },
      { title: 'S2S Architecture', desc: 'See2Synapic protocol standardizes data from multiple global providers.' },
      { title: 'Self-Hosted', desc: 'Full sovereignty. Deploy your own instance on your local or cloud hardware.' },
      { title: 'Multi-Lingual', desc: 'Smart filtering and ranking for Turkish, English, and German resources.' }
    ])
    
    const navItems = ref([
      { name: 'Synapic', url: '/products/synapic' }
    ])
    
    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value
    }
    </script>
    
    <template>
      <div class="app-container">
        <div class="bg-gradient"></div>
        
        <header class="navbar">
          <div class="nav-inner">
            <div class="brand-wrapper">
              <a href="/" class="brand">openbyte</a>
            </div>
            
            <nav class="nav-menu">
              <div class="dropdown-wrapper">
                <button 
                  class="nav-link dropdown-trigger" 
                  @click="toggleDropdown"
                  :class="{ 'is-open': showDropdown }"
                >
                  Projects
                  <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
            </nav>
    
            <div class="nav-actions">
              <a href="https://github.com/yigitkabak" class="btn-github">
                <span>GitHub</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </a>
            </div>
          </div>
        </header>
    
        <main class="main-content">
          <div class="hero-box">
            <div>
              <span class="badge">V1.0 Stable Release</span>
            </div>
            <h1 class="title-text">Synapic Search</h1>
            <p class="lead-text">
              A high-performance, open-source meta-search engine built with <strong>Vue.js</strong> and <strong>TypeScript</strong>. 
              Synapic redefines digital privacy by providing a transparent gateway to global information without corporate surveillance.
            </p>
          </div>
    
          <div class="feature-grid">
            <div v-for="(f, i) in features" :key="i" class="f-card">
              <h3>{{ f.title }}</h3>
              <p>{{ f.desc }}</p>
            </div>
          </div>
    
          <article class="deep-dive">
            <div class="section-divider"></div>
            <h2>Engineering Sovereignty</h2>
            <div class="text-columns">
                <p>
                The cornerstone of Synapic, the <strong>See2Synapic (S2S)</strong> system, combines raw data from different search engines 
                into a single universal schema.
              </p>
              <p>
                User privacy is not an option, it is a requirement. Synapic does not collect any personal data and never stores it.
              </p>
            </div>
          </article>
    
          <div class="actions-row">
            <a href="https://github.com/yigitkabak/Synapic"><button class="btn-main">See Code</button></a>
          </div>
        </main>
    
        <footer class="footer">
          <div class="footer-content">
            <p>OPENBYTE &copy; 2023</p>
          </div>
        </footer>
      </div>
    </template>
    
    <style>
        :root {
          --bg: #080808;
          --fg: #ffffff;
          --muted: #888888;
          --border: rgba(255, 255, 255, 0.04);
          --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          --ease: cubic-bezier(0.16, 1, 0.3, 1);
        }
      
        body {
          background-color: var(--bg);
          margin: 0;
          color: var(--fg);
          font-family: var(--font);
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
    
        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          opacity: 1; 
        }
      
        .bg-gradient {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at 50% -10%, rgba(255,255,255,0.03) 0%, transparent 70%);
          z-index: -1;
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
          border-bottom: 1px solid var(--border);
          background: rgba(8, 8, 8, 0.7);
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
    
        .nav-link {
          text-decoration: none;
          color: var(--muted);
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s ease;
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: inherit;
        }
    
        .nav-link:hover, .nav-link.is-open {
          color: #fff;
        }
    
        .dropdown-wrapper {
          position: relative;
        }
    
        .chevron {
          transition: transform 0.3s var(--ease);
        }
        
        .is-open .chevron {
          transform: rotate(180deg);
        }
    
        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 15px;
          background: rgba(15, 15, 15, 0.98);
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
          color: var(--muted);
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
          transition: all 0.3s var(--ease);
        }
    
        .dropdown-fade-enter-from,
        .dropdown-fade-leave-to {
          opacity: 0;
          transform: translateX(-50%) translateY(-10px);
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
          transition: all 0.3s var(--ease);
        }
    
        .btn-github:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-1px);
        }
      
        .main-content {
          width: 100%;
          max-width: 900px;
          margin: 160px auto 100px;
          padding: 0 40px;
        }
      
        .title-text {
          font-size: clamp(3rem, 10vw, 5.5rem);
          font-weight: 800;
          margin: 0 0 1.5rem 0;
          letter-spacing: -0.04em;
          line-height: 1.1;
          color: #ffffff;
        }
      
        .lead-text {
          font-size: 1.35rem;
          color: var(--muted);
          max-width: 750px;
        }
    
        .badge {
          font-size: 0.7rem;
          padding: 5px 12px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          color: var(--muted);
          font-weight: 600;
          display: inline-block;
          margin-bottom: 1.5rem;
        }
      
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          margin: 6rem 0 8rem;
        }
      
        .f-card h3 {
          font-size: 1.15rem;
          margin-bottom: 0.8rem;
          color: #ffffff;
        }
      
        .f-card p {
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.5;
        }
      
        .text-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          color: var(--muted);
          font-size: 1.1rem;
        }
      
        .section-divider {
          height: 1px;
          background: #ffffff;
          width: 40px;
          margin-bottom: 3.5rem;
          opacity: 0.3;
        }
      
        .btn-main {
          background: #ffffff;
          color: #000000;
          border: none;
          padding: 16px 36px;
          font-weight: 700;
          border-radius: 4px;
          cursor: pointer;
          transition: 0.3s var(--ease);
        }
    
        .btn-main:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -10px rgba(255, 255, 255, 0.3);
        }
      
        .footer {
          margin-top: auto;
          padding: 3rem 0;
          text-align: center;
          border-top: 1px solid var(--border);
        }
      
        .footer p {
          font-size: 0.85rem;
          color: #444;
          letter-spacing: 0.05em;
        }
      
        @media (max-width: 768px) {
          .text-columns { grid-template-columns: 1fr; gap: 2rem; }
          .title-text { font-size: 3.5rem; }
          .main-content { margin-top: 120px; }
          .nav-inner { padding: 0 20px; }
        }
    </style>