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
      }, 0)
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
              <a href="/" class="brand">openbyte</a>
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
              
              <a href="/manifesto" class="nav-link active">Manifesto</a>
            </nav>
    
            <div class="nav-actions reveal-element desktop-only" style="--delay: 0.5s">
              <a href="https://github.com/openbytelabs" class="btn-github">
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
              
              <a href="/manifesto" class="nav-link active">Manifesto</a>
              
              <div class="mobile-github">
                <a href="https://github.com/openbytelabs" class="btn-github">
                  <span>GitHub</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </a>
              </div>
            </div>
          </transition>
        </header>
    
        <main class="content-section">
          <div class="content-wrapper">
            <div class="manifesto-header reveal-up" style="--delay: 0.6s">
              <h1 class="manifesto-title">Manifesto</h1>
            </div>
    
            <article class="manifesto-content reveal-up" style="--delay: 0.8s">
              <p>In today's world, where digital technologies are rapidly developing on a global scale and the web ecosystem plays a decisive role in social, economic, and technical structures, the fundamental approach adopted is shaped by the principles of long-term sustainability, corporate balance, and strategic flexibility. The web's increasing shift towards centralized and closed structures poses significant risks in terms of transparency, accountability, and technological independence for users and developers; this situation makes the participatory and distributed development models offered by open source software strategically valuable. In this context, open source is considered not only a technical choice but also an important tool that supports trust building, ecosystem interaction, and collaborative production on a global scale.</p>
    
              <p>The fact that a significant portion of the developed projects are published under the BSD 3-Clause license enables these projects to be used, adapted, and developed by individuals, institutions, and communities worldwide, while also maintaining the necessary boundaries for protecting brand integrity, intellectual property, and corporate continuity. This licensing approach aims to establish a balanced structure between open source principles and commercial and corporate responsibilities. Open source components are prioritized in terms of transparency, quality control, and community contribution; however, elements that are critical in terms of security, directly affect brand identity, or provide long-term competitive advantage are managed in a controlled manner within the scope of internal policy.</p>
    
              <p>The existence of closed or restricted-access components is positioned as a conscious strategic choice stemming from risk management, operational stability, and quality assurance requirements, rather than an attitude against openness. While acknowledging the restrictive effects of closed ecosystems created by large-scale technology actors, the approach to these structures is defined by the goal of developing alternative and sustainable models that focus on open standards, open source contributions, and quality-oriented development processes, rather than generating direct opposition.</p>
    
              <p>The long-term goal is to build a robust technology ecosystem that is strengthened by open source, encourages community contribution, yet preserves brand control and governance principles, establishing a trust-based relationship between developers and users. This manifesto expresses a balanced stance that positions the open-source approach as a strategic value, but shapes decision-making processes based on corporate goals, risk analyses, and long-term vision rather than ideological imperatives.</p>
            </article>
    
            <div class="license-section reveal-up" style="--delay: 1.0s">
              <h2 class="license-title">BSD 3-Clause License</h2>
              <div class="license-box">
                <pre class="license-text">Copyright (c) 2023, openbytelabs
    
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:
    
    1. Redistributions of source code must retain the above copyright notice, this
       list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice,
       this list of conditions and the following disclaimer in the documentation
       and/or other materials provided with the distribution.
    
    3. Neither the name of the copyright holder nor the names of its
       contributors may be used to endorse or promote products derived from
       this software without specific prior written permission.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</pre>
              </div>
              <p class="license-note">Note: 2023 represents the brand's inception date, not the launch date of all projects.</p>
            </div>
          </div>
        </main>
    
        <footer class="footer reveal-up" style="--delay: 1.2s">
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
      background: rgba(8, 8, 8, 0.8);
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
      transition: opacity 0.3s ease;
    }
    
    .brand:hover {
      opacity: 0.8;
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
      transition: color 0.3s ease;
    }
    
    .dropdown-trigger:hover,
    .dropdown-trigger.is-open {
      color: #fff;
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
    
    .nav-link:hover,
    .nav-link.active,
    .nav-link.is-open {
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
    
    .content-section {
      flex: 1;
      display: flex;
      justify-content: center;
      padding-top: 120px;
      padding-bottom: 80px;
      position: relative;
    }
    
    .content-wrapper {
      max-width: 800px;
      width: 100%;
      padding: 0 40px;
    }
    
    .manifesto-header {
      margin-bottom: 4rem;
    }
    
    .manifesto-title {
      font-size: 3.5rem;
      font-weight: 700;
      letter-spacing: -0.05em;
      margin: 0;
      line-height: 1.1;
    }
    
    .manifesto-content {
      font-size: 1.05rem;
      line-height: 1.8;
      color: var(--text-secondary);
      margin-bottom: 5rem;
    }
    
    .manifesto-content p {
      margin-bottom: 1.5rem;
      text-align: justify;
    }
    
    .license-section {
      margin-top: 5rem;
    }
    
    .license-title {
      font-size: 1.75rem;
      font-weight: 600;
      letter-spacing: -0.03em;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
    }
    
    .license-box {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 12px;
      padding: 2rem;
      overflow-x: auto;
    }
    
    .license-text {
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: 0.85rem;
      line-height: 1.6;
      color: #aaa;
      margin: 0;
      white-space: pre;
    }
    
    .license-note {
      margin-top: 1rem;
      font-size: 0.9rem;
      color: #666;
      font-style: italic;
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
    
      .nav-inner {
        padding: 0 20px;
      }
    
      .navbar {
        height: 70px;
      }
    
      .brand {
        font-size: 1.1rem;
      }
    
      .content-section {
        padding-top: 100px;
        padding-bottom: 60px;
      }
    
      .content-wrapper {
        padding: 0 20px;
      }
    
      .manifesto-header {
        margin-bottom: 2.5rem;
      }
    
      .manifesto-title {
        font-size: 2.5rem;
      }
    
      .manifesto-content {
        font-size: 1rem;
        line-height: 1.7;
        margin-bottom: 3rem;
      }
    
      .manifesto-content p {
        margin-bottom: 1.25rem;
        text-align: left;
      }
    
      .license-section {
        margin-top: 3rem;
      }
    
      .license-title {
        font-size: 1.5rem;
      }
    
      .license-box {
        padding: 1.5rem;
        border-radius: 8px;
      }
    
      .license-text {
        font-size: 0.75rem;
        line-height: 1.5;
      }
    
      .license-note {
        font-size: 0.85rem;
      }
    
      .footer {
        padding: 2rem 0;
      }
    
      .footer-content p {
        font-size: 0.8rem;
      }
    
      .intro-logo {
        font-size: 2.5rem;
      }
    }
    
    @media (max-width: 480px) {
      .manifesto-title {
        font-size: 2rem;
      }
    
      .manifesto-content {
        font-size: 0.95rem;
      }
    
      .license-title {
        font-size: 1.3rem;
      }
    
      .license-box {
        padding: 1rem;
      }
    
      .license-text {
        font-size: 0.7rem;
      }
    }
    
    @media (min-width: 769px) and (max-width: 1024px) {
      .content-wrapper {
        max-width: 700px;
      }
    
      .manifesto-title {
        font-size: 3rem;
      }
    
      .manifesto-content {
        font-size: 1rem;
      }
    }
    </style>