/* ===== THEME: Robust theme management with persistence ===== */
(function(){
  'use strict';

  const ThemeManager={
    key:'cduestc-theme-v1',
    current:'dark',
    transitioning:false,
    listeners:[],

    init(){
      // Apply theme immediately to prevent flash
      const saved=this.load();
      const system=this.getSystem();
      this.current=saved||system;
      document.documentElement.setAttribute('data-theme',this.current);
      if(saved) document.documentElement.setAttribute('data-theme-manual','');

      // Sync button after DOM ready
      if(document.readyState==='loading'){
        document.addEventListener('DOMContentLoaded',()=>this.syncButton());
      }else{
        this.syncButton();
      }

      // Listen for system changes
      window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',e=>{
        if(document.documentElement.hasAttribute('data-theme-manual')) return;
        const next=e.matches?'dark':'light';
        if(next!==this.current) this.apply(next,false);
      });
    },

    load(){
      try{const v=localStorage.getItem(this.key);return v==='dark'||v==='light'?v:null;}catch(e){return null;}
    },

    save(v){
      try{localStorage.setItem(this.key,v);}catch(e){}
    },

    getSystem(){
      return window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';
    },

    apply(next,isManual){
      if(this.current===next||this.transitioning) return false;
      this.transitioning=true;
      this.current=next;

      // Use requestAnimationFrame for smooth transition
      requestAnimationFrame(()=>{
        document.documentElement.setAttribute('data-theme',next);
        this.syncButton();
        this.notify(next);
      });

      if(isManual){
        this.save(next);
        document.documentElement.setAttribute('data-theme-manual','');
      }

      setTimeout(()=>{this.transitioning=false;},400);
      return true;
    },

    toggle(){
      return this.apply(this.current==='dark'?'light':'dark',true);
    },

    syncButton(){
      const btn=document.getElementById('themeBtn');
      if(!btn) return;
      const isDark=this.current==='dark';
      btn.classList.toggle('night',isDark);
      btn.setAttribute('aria-pressed',String(isDark));
    },

    onChange(fn){
      this.listeners.push(fn);
    },

    notify(theme){
      this.listeners.forEach(fn=>{try{fn(theme);}catch(e){}});
    }
  };

  // Expose globally
  window.ThemeManager=ThemeManager;
  window.toggleTheme=function(){ThemeManager.toggle();};

  // Initialize immediately
  ThemeManager.init();
})();