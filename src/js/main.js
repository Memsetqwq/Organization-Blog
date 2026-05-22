(function(){
  'use strict';

  /* ===== I18N ===== */
let lang='zh';
const T={
  zh:{
    heroTitle:'因开放而精彩，因开源而未来',heroSub:'开放原子开源基金会 · 电子科技大学成都学院',heroScroll:'Scroll',
    aboutTitle:'构建开源新生态',aboutDesc:'连接校园与产业，培养具备开源精神与实践能力的高素质人才',
    aboutCard1t:'成立元年',aboutCard1d:'开放原子开源基金会联合腾讯共同发起',
    aboutCard2t:'核心部门',aboutCard2d:'外联 · 宣策 · 项目 · 组织 · 秘书',
    aboutCard3t:'技术方向',aboutCard3d:'鸿蒙 · 欧拉 · OpenTenBase',
    techTitle:'深耕国产开源技术',techDesc:'以真实项目驱动学习，从学习到贡献，走出一条扎实的开源之路',
    techCard1:'开源鸿蒙分布式操作系统，探索万物互联的无限可能。社团成员已完成人才认证，并参与智慧校园项目开发。',
    techCard1t:'OpenHarmony',techCard1Tag:'开源鸿蒙',
    techCard2:'企业级Linux操作系统研究，从内核原理到生产部署，系统掌握国产基础设施核心技术栈。',
    techCard2t:'openEuler',techCard2Tag:'欧拉系统',
    techCard3:'腾讯开源数据库内核开发与优化。基于钩子机制实现无侵入式监控，荣获核心贡献挑战赛奖项。',
    techCard3t:'OpenTenBase',techCard3Tag:'数据库',
    eventsTitle:'近期动态',eventsDesc:'每一次实践，都是向开源世界更近一步',
    event1t:'"QClaw脑洞名场面"校园专场',event1d:'AI赋能创意，实践点亮校园。累计征集100份高质量AI创新应用作品，用代码将想象变为现实。',
    event1Date:'2026.04.27',event1Meta:'近期活动 / 校园专场',
    event2t:'2025届干事竞选',event2d:'薪火相传，竞绽锋芒。新一届骨干团队正式亮相，延续开源精神，开启全新征程。',
    event2Date:'2026.04.20',event2Meta:'近期活动 / 换届选举',
    event3t:'开源鸿蒙领学课堂·成都站',event3d:'代码筑梦，鸿蒙启航。成都高校开源鸿蒙技术交流盛会，与志同道合的开发者共同探索分布式操作系统的前沿应用。',
    event3Date:'2026.04.04',event3Meta:'近期活动 / 技术交流',
    membersTitle:'核心团队',membersDesc:'一群热爱开源、脚踏实地的年轻人',
    member1Title:'会长',member2Title:'副会长',member3Title:'副会长',member4Title:'副会长',member5Title:'副会长',
    role1:'社团负责人',role2:'OpenTenBase方向',role3:'技术骨干',role4:'社团骨干',role5:'社团骨干',
    honorsTitle:'荣誉与成果',honorsDesc:'用实力说话，以贡献立身',
    honor1:'开放原子菁英团奖',honor1Desc:'全国仅3个团队入选',
    honor2:'校源行优秀指导教师',honor2Desc:'魏雨东老师',
    honor3:'春耕计划优秀组织',honor3Desc:'全国性认可',
    honor4:'OpenTenBase核心贡献',honor4Desc:'挑战赛获奖',
    projectsTitle:'开源项目',projectsDesc:'持续贡献，共同成长',
    proj1Name:'OpenHarmony-Apps',proj1Desc:'基于开源鸿蒙的校园应用开发，探索分布式技术在不同场景下的创新应用。',proj1Lang:'ArkTS',
    proj2Name:'openEuler-Learning',proj2Desc:'欧拉系统学习笔记与实践项目，记录从入门到精通的全过程。',proj2Lang:'Shell · Python',
    proj3Name:'OpenTenBase-Contributions',proj3Desc:'数据库内核贡献记录，包含核心贡献挑战赛的获奖方案与代码实现。',proj3Lang:'C++',
    proj4Name:'查看全部',proj4Desc:'浏览社团所有开源项目，期待你的参与和贡献。',proj4Lang:'→ GitHub',
    footerJoin:'加入我们',footerDesc:'科成开放原子开源社团 · 因开放而精彩，因开源而未来',
    followLabel:'关注我们',
    navHome:'首页',navAbout:'社团简介',navNews:'新闻动态',navProjects:'导航站',navLogin:'登录',
    mTitle:'加入科成开源社团',mSub:'填写以下信息，我们将通过邮件与你联系',
    mNameLabel:'姓名',mNamePh:'请输入你的姓名',
    mEmailLabel:'邮箱',mEmailPh:'your@email.com',
    mDeptLabel:'意向部门',
    mMsgLabel:'自我介绍 / 申请理由',
    mHint:'请介绍你的技术背景、感兴趣的领域（OpenHarmony / openEuler / OpenTenBase），以及为什么想加入我们。',
    mMsgPh:'例如：我是计算机专业大二学生，对开源鸿蒙系统很感兴趣，希望通过社团学习分布式操作系统开发...',
    mCancel:'取消',mSubmit:'提交申请',
  },
  en:{
    heroTitle:'Open for Brilliance, Source for Future',heroSub:'OpenAtom Foundation · CDUESTC',heroScroll:'Scroll',
    aboutTitle:'Building Open Source Ecosystem',aboutDesc:'Connecting campus and industry, cultivating talents with open source spirit',
    aboutCard1t:'Founded',aboutCard1d:'Jointly initiated by OpenAtom & Tencent',
    aboutCard2t:'Departments',aboutCard2d:'Outreach · Publicity · Projects · Org · Admin',
    aboutCard3t:'Tech Focus',aboutCard3d:'OpenHarmony · openEuler · OpenTenBase',
    techTitle:'Deep Dive into Open Source',techDesc:'Learning through real projects, from study to contribution',
    techCard1:'Distributed OS powering everything. Members certified, building smart campus solutions.',
    techCard1t:'OpenHarmony',techCard1Tag:'OpenHarmony',
    techCard2:'Enterprise Linux research. From kernel principles to production deployment.',
    techCard2t:'openEuler',techCard2Tag:'openEuler',
    techCard3:'Open source database kernel dev. Non-intrusive monitoring via hooks, award-winning.',
    techCard3t:'OpenTenBase',techCard3Tag:'Database',
    eventsTitle:'Recent Events',eventsDesc:'Every practice brings us closer to the open source world',
    event1t:'QClaw Campus Innovation',event1d:'AI-powered creativity. 100 innovation works collected.',
    event1Date:'2026.04.27',event1Meta:'Recent / Campus',
    event2t:'2025 Executive Election',event2d:'New leadership team unveiled, carrying forward the open source spirit.',
    event2Date:'2026.04.20',event2Meta:'Recent / Election',
    event3t:'OpenHarmony Workshop Chengdu',event3d:'City-wide university tech exchange on distributed OS.',
    event3Date:'2026.04.04',event3Meta:'Recent / Tech Exchange',
    membersTitle:'Core Team',membersDesc:'Young people who love open source and get things done',
    member1Title:'President',member2Title:'Vice President',member3Title:'Vice President',member4Title:'Vice President',member5Title:'Vice President',
    role1:'President',role2:'OpenTenBase Lead',role3:'Tech Core',role4:'Core Member',role5:'Core Member',
    honorsTitle:'Honors',honorsDesc:'Let achievements speak',
    honor1:'OpenAtom Elite Team',honor1Desc:'Only 3 teams nationwide',
    honor2:'Outstanding Mentor',honor2Desc:'Teacher Wei Yudong',
    honor3:'Spring Plan Excellence',honor3Desc:'National recognition',
    honor4:'OpenTenBase Challenge',honor4Desc:'Competition winner',
    projectsTitle:'Open Source Projects',projectsDesc:'Contribute & Grow Together',
    proj1Name:'OpenHarmony-Apps',proj1Desc:'Campus app development based on OpenHarmony distributed technology.',proj1Lang:'ArkTS',
    proj2Name:'openEuler-Learning',proj2Desc:'Learning notes and practice projects for openEuler OS.',proj2Lang:'Shell · Python',
    proj3Name:'OpenTenBase-Contributions',proj3Desc:'Database kernel contributions and award-winning solutions.',proj3Lang:'C++',
    proj4Name:'View All',proj4Desc:'Browse all open source projects and join our contributions.',proj4Lang:'→ GitHub',
    footerJoin:'Join Us',footerDesc:'CDUESTC OPEN SOURCE CLUB · Open for Brilliance, Source for Future',
    followLabel:'Follow Us',
    navHome:'Home',navAbout:'About',navNews:'News',navProjects:'Projects',navLogin:'Login',
    mTitle:'Join KC Open Source',mSub:'Fill in your info and we will contact you via email',
    mNameLabel:'Name',mNamePh:'Your name',
    mEmailLabel:'Email',mEmailPh:'your@email.com',
    mDeptLabel:'Department',
    mMsgLabel:'Introduction / Reason',
    mHint:'Introduce your background, interests (OpenHarmony / openEuler / OpenTenBase), and why you want to join.',
    mMsgPh:'e.g. CS sophomore interested in OpenHarmony distributed OS...',
    mCancel:'Cancel',mSubmit:'Submit',
  }
};

function applyLang(){
  const d=T[lang];document.title=lang=='zh'?'科成开放原子开源社团':'CDUESTC OPEN SOURCE CLUB';
  const ids=['heroTitle','heroSub','heroScroll','aboutTitle','aboutDesc','aboutCard1t','aboutCard1d','aboutCard2t','aboutCard2d','aboutCard3t','aboutCard3d','techTitle','techDesc','techCard1','techCard1t','techCard1Tag','techCard2','techCard2t','techCard2Tag','techCard3','techCard3t','techCard3Tag','eventsTitle','eventsDesc','event1t','event1d','event1Date','event1Meta','event2t','event2d','event2Date','event2Meta','event3t','event3d','event3Date','event3Meta','membersTitle','membersDesc','member1Title','member2Title','member3Title','member4Title','member5Title','role1','role2','role3','role4','role5','honorsTitle','honorsDesc','honor1','honor1Desc','honor2','honor2Desc','honor3','honor3Desc','honor4','honor4Desc','projectsTitle','projectsDesc','proj1Name','proj1Desc','proj1Lang','proj2Name','proj2Desc','proj2Lang','proj3Name','proj3Desc','proj3Lang','proj4Name','proj4Desc','proj4Lang','footerJoin','footerDesc','followLabel','navHome','navAbout','navNews','navProjects','navLogin','mTitle','mSub','mNameLabel','mEmailLabel','mDeptLabel','mMsgLabel','mHint','mCancel','mSubmit'];
  for(const k of ids){const el=document.getElementById(k);if(el)el.textContent=d[k];}
  const mName=document.getElementById('mName');if(mName)mName.placeholder=d.mNamePh;
  const mEmail=document.getElementById('mEmail');if(mEmail)mEmail.placeholder=d.mEmailPh;
  const mMsg=document.getElementById('mMsg');if(mMsg)mMsg.placeholder=d.mMsgPh;
}
window.toggleLang = function() {lang=lang=='zh'?'en':'zh';document.getElementById('langBtn').textContent=lang=='zh'?'EN':'中';applyLang();}

/* ===== SCROLL ANIMATION ===== */
let lastScrollY=0;
const animObs=new IntersectionObserver((entries)=>{
  const isScrollingDown=window.scrollY>lastScrollY;
  lastScrollY=window.scrollY;
  entries.forEach(e=>{
    if(e.isIntersecting){
      if(isScrollingDown||!e.target.classList.contains('in')){
        e.target.classList.add('in');
      }
    }else if(!isScrollingDown){
      e.target.classList.remove('in');
    }
  });
},{threshold:.08,rootMargin:'0px 0px -40px 0px'});

function observeAll(){
  document.querySelectorAll('.an').forEach(el=>animObs.observe(el));
}
document.addEventListener('DOMContentLoaded',observeAll);

/* ===== NAV SCROLL EFFECT ===== */
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  if(window.scrollY>50){
    navbar.classList.add('nav-scrolled');
  }else{
    navbar.classList.remove('nav-scrolled');
  }
},{passive:true});

/* ===== HAMBURGER MENU ===== */
const hamburger=document.getElementById('hamburger');
const navLinks=document.getElementById('navLinks');
if(hamburger&&navLinks){
  hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click',()=>{
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

/* ===== BACK TO TOP ===== */
const backTop=document.getElementById('backTop');
window.addEventListener('scroll',()=>{
  if(window.scrollY>window.innerHeight*.55)backTop.classList.add('show');
  else backTop.classList.remove('show');
},{passive:true});

/* ===== JOIN MODAL ===== */
window.openJoin = function() {document.getElementById('joinModal').classList.add('on');document.body.style.overflow='hidden';};
window.closeJoin = function() {document.getElementById('joinModal').classList.remove('on');document.body.style.overflow='';};
window.submitJoin = function() {
  const name = document.getElementById('mName').value.trim();
  const email = document.getElementById('mEmail').value.trim();
  const dept = document.getElementById('mDept').value;
  const msg = document.getElementById('mMsg').value.trim();
  if (!name || !email || !msg) {
    alert(lang === 'zh' ? '请填写完整信息' : 'Please fill in all fields');
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert(lang === 'zh' ? '请输入有效的邮箱地址' : 'Please enter a valid email address');
    return;
  }
  const existing = DB.findByEmail(email);
  if (existing) {
    const confirmMsg = lang === 'zh'
      ? `该邮箱 ${email} 已有申请记录，是否覆盖？`
      : `Email ${email} already has a record. Overwrite?`;
    if (!confirm(confirmMsg)) {
      return;
    }
    DB.deleteApplication(existing.id);
  }
  const appData = {name: name,email: email,dept: dept,message: msg};
  DB.addApplication(appData);
  alert(lang === 'zh' ? '申请已提交，感谢您的加入！' : 'Application submitted! Thank you!');
  closeJoin();
  document.getElementById('mName').value = '';
  document.getElementById('mEmail').value = '';
  document.getElementById('mDept').value = '';
  document.getElementById('mMsg').value = '';
};
document.getElementById('joinModal').addEventListener('click',e=>{if(e.target===document.getElementById('joinModal'))closeJoin();});

/* ===== QR CODE EXPAND ===== */
let qrExpanded = false;
window.toggleQrExpand = function() {
  const followUs = document.getElementById('followUs');
  const footer = document.getElementById('footer');
  qrExpanded = !qrExpanded;
  followUs.classList.toggle('expanded', qrExpanded);
  footer.classList.toggle('expanded', qrExpanded);
}
document.addEventListener('click', function(e) {
  if (!qrExpanded) return;
  const followUs = document.getElementById('followUs');
  if (!followUs.contains(e.target)) {
    qrExpanded = false;
    followUs.classList.remove('expanded');
    footer.classList.remove('expanded');
  }
});

/* ===== BACKGROUND SLIDER ===== */
(function(){
  const container=document.getElementById('sliderContainer');
  if(!container) return;

  const track=document.getElementById('sliderTrack');
  const indicators=document.getElementById('sliderIndicators');
  const prevBtn=document.getElementById('sliderPrev');
  const nextBtn=document.getElementById('sliderNext');
  const slides=track?track.querySelectorAll('.slide'):[];
  const dots=indicators?indicators.querySelectorAll('.indicator'):[];

  if(slides.length===0) return;

  let currentIndex=0;
  let autoplayTimer=null;
  const AUTOPLAY_INTERVAL=6000;

  function goToSlide(index){
    if(index<0) index=slides.length-1;
    if(index>=slides.length) index=0;
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex=index;
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }

  function nextSlide(){goToSlide(currentIndex+1)}
  function prevSlide(){goToSlide(currentIndex-1)}

  function startAutoplay(){
    stopAutoplay();
    autoplayTimer=setInterval(nextSlide,AUTOPLAY_INTERVAL);
  }
  function stopAutoplay(){
    if(autoplayTimer){clearInterval(autoplayTimer);autoplayTimer=null;}
  }

  if(prevBtn) prevBtn.addEventListener('click',()=>{prevSlide();startAutoplay();});
  if(nextBtn) nextBtn.addEventListener('click',()=>{nextSlide();startAutoplay();});

  dots.forEach((dot,i)=>{
    dot.addEventListener('click',()=>{goToSlide(i);startAutoplay();});
  });

  let touchStartX=0;
  let touchEndX=0;

  container.addEventListener('touchstart',(e)=>{
    touchStartX=e.changedTouches[0].screenX;
    stopAutoplay();
  },{passive:true});

  container.addEventListener('touchend',(e)=>{
    touchEndX=e.changedTouches[0].screenX;
    handleSwipe();
    startAutoplay();
  },{passive:true});

  function handleSwipe(){
    const diff=touchStartX-touchEndX;
    if(Math.abs(diff)>50){
      if(diff>0) nextSlide();
      else prevSlide();
    }
  }

  container.addEventListener('mouseenter',stopAutoplay);
  container.addEventListener('mouseleave',startAutoplay);

  startAutoplay();

  document.addEventListener('visibilitychange',()=>{
    if(document.hidden) stopAutoplay();
    else startAutoplay();
  });
})();

/* ===== LAZY LOADING IMAGES ===== */
(function(){
  if('IntersectionObserver' in window){
    const imgObs=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const img=entry.target;
          if(img.dataset.src){
            img.src=img.dataset.src;
            img.removeAttribute('data-src');
          }
          imgObs.unobserve(img);
        }
      });
    },{rootMargin:'50px'});

    document.querySelectorAll('img[data-src]').forEach(img=>imgObs.observe(img));
  }
})();

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    const href=this.getAttribute('href');
    if(href!=='#'){e.preventDefault();document.querySelector(href)?.scrollIntoView({behavior:'smooth'})}
  })
});

document.querySelector('.hero')?.classList.add('in-view');

})();