/* ===== I18N ===== */
let lang='zh';
const T={
  zh:{
    heroTitle:'因开放而精彩，因开源而未来',heroSub:'开放原子开源基金会 · 腾讯 · 电子科技大学成都学院',heroScroll:'Scroll',
    aboutTitle:'构建开源新生态',aboutDesc:'连接校园与产业，培养具备开源精神与实践能力的高素质人才',
    aboutCard1t:'成立元年',aboutCard1d:'开放原子开源基金会联合腾讯共同发起',
    aboutCard2t:'核心部门',aboutCard2d:'外联 · 宣策 · 项目 · 组织 · 秘书',
    aboutCard3t:'技术方向',aboutCard3d:'鸿蒙 · 欧拉 · OpenTenBase',
    techTitle:'深耕国产开源技术',techDesc:'以真实项目驱动学习，从学习到贡献，走出一条扎实的开源之路',
    techCard1:'开源鸿蒙分布式操作系统，探索万物互联的无限可能。社团成员已完成人才认证，并参与智慧校园项目开发。',
    techCard2:'企业级Linux操作系统研究，从内核原理到生产部署，系统掌握国产基础设施核心技术栈。',
    techCard3:'腾讯开源数据库内核开发与优化。基于钩子机制实现无侵入式监控，荣获核心贡献挑战赛奖项。',
    eventsTitle:'近期动态',eventsDesc:'每一次实践，都是向开源世界更近一步',
    event1t:'"QClaw脑洞名场面"校园专场',event1d:'AI赋能创意，实践点亮校园。累计征集100份高质量AI创新应用作品，用代码将想象变为现实。',
    event2t:'2025届干事竞选',event2d:'薪火相传，竞绽锋芒。新一届骨干团队正式亮相，延续开源精神，开启全新征程。',
    event3t:'开源鸿蒙领学课堂·成都站',event3d:'代码筑梦，鸿蒙启航。成都高校开源鸿蒙技术交流盛会，与志同道合的开发者共同探索分布式操作系统的前沿应用。',
    event4t:'OpenHarmony人才认证',event4d:'在副社长李枨的精心组织下，社团成员成功通过OpenHarmony人才认证，用实力证明了自己。',
    event5t:'腾讯云社区龙虾公开课',event5d:'社团社长陈圣夫以核心导师身份进行WorkBuddy实战演示，将开源社区的协作理念传递给更多开发者。',
    membersTitle:'核心团队',membersDesc:'一群热爱开源、脚踏实地的年轻人',
    role1:'社团负责人',role2:'OpenTenBase方向',role3:'技术骨干',role4:'社团骨干',role5:'社团骨干',
    honorsTitle:'荣誉与成果',honorsDesc:'用实力说话，以贡献立身',
    honor1:'开放原子菁英团奖',honor2:'校源行优秀指导教师',honor3:'春耕计划优秀组织',honor4:'OpenTenBase核心贡献',
    footerJoin:'加入我们',
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
    heroTitle:'Open for Brilliance, Source for Future',heroSub:'OpenAtom Foundation · Tencent · UESTC Chengdu',heroScroll:'Scroll',
    aboutTitle:'Building Open Source Ecosystem',aboutDesc:'Connecting campus and industry, cultivating talents with open source spirit',
    aboutCard1t:'Founded',aboutCard1d:'Jointly initiated by OpenAtom & Tencent',
    aboutCard2t:'Departments',aboutCard2d:'Outreach · Publicity · Projects · Org · Admin',
    aboutCard3t:'Tech Focus',aboutCard3d:'OpenHarmony · openEuler · OpenTenBase',
    techTitle:'Deep Dive into Open Source',techDesc:'Learning through real projects, from study to contribution',
    techCard1:'Distributed OS powering everything. Members certified, building smart campus solutions.',
    techCard2:'Enterprise Linux research. From kernel principles to production deployment.',
    techCard3:'Open source database kernel dev. Non-intrusive monitoring via hooks, award-winning.',
    eventsTitle:'Recent Events',eventsDesc:'Every practice brings us closer to the open source world',
    event1t:'QClaw Campus Innovation',event1d:'AI-powered creativity. 100 innovation works collected.',
    event2t:'2025 Executive Election',event2d:'New leadership team unveiled, carrying forward the open source spirit.',
    event3t:'OpenHarmony Workshop',event3d:'City-wide university tech exchange on distributed OS.',
    event4t:'OpenHarmony Certification',event4d:'Members successfully certified under VP Li Cheng.',
    event5t:'Tencent Cloud Course',event5d:'President Chen demonstrated WorkBuddy as core instructor.',
    membersTitle:'Core Team',membersDesc:'Young people who love open source and get things done',
    role1:'President',role2:'OpenTenBase Lead',role3:'Tech Core',role4:'Core Member',role5:'Core Member',
    honorsTitle:'Honors',honorsDesc:'Let achievements speak',
    honor1:'OpenAtom Elite Team',honor2:'Outstanding Mentor',honor3:'Spring Plan Excellence',honor4:'OpenTenBase Challenge',
    footerJoin:'Join Us',
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
  const d=T[lang];document.title=lang=='zh'?'科成开放原子开源社团':'KC Open Source Club';
  const ids=['heroTitle','heroSub','heroScroll','aboutTitle','aboutDesc','aboutCard1t','aboutCard1d','aboutCard2t','aboutCard2d','aboutCard3t','aboutCard3d','techTitle','techDesc','techCard1','techCard2','techCard3','eventsTitle','eventsDesc','event1t','event1d','event2t','event2d','event3t','event3d','event4t','event4d','event5t','event5d','membersTitle','membersDesc','role1','role2','role3','role4','role5','honorsTitle','honorsDesc','honor1','honor2','honor3','honor4','footerJoin','mTitle','mSub','mNameLabel','mEmailLabel','mDeptLabel','mMsgLabel','mHint','mCancel','mSubmit'];
  for(const k of ids){const el=document.getElementById(k);if(el)el.textContent=d[k];}
  document.getElementById('mName').placeholder=d.mNamePh;
  document.getElementById('mEmail').placeholder=d.mEmailPh;
  document.getElementById('mMsg').placeholder=d.mMsgPh;
}
function toggleLang(){lang=lang=='zh'?'en':'zh';document.getElementById('langBtn').textContent=lang=='zh'?'EN':'中';applyLang();}

/* ===== SCROLL ANIMATION ===== */
const animObs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');animObs.unobserve(e.target)}})
},{threshold:.08,rootMargin:'0px 0px -40px 0px'});

const navObs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      document.querySelectorAll('.nav .links a[data-nav]').forEach(a=>a.classList.remove('active'));
      const link=document.querySelector(`.nav .links a[data-nav="${e.target.id}"]`);
      if(link)link.classList.add('active');
    }
  });
},{threshold:.25,rootMargin:'-56px 0px 0px 0px'});

function observeAll(){
  document.querySelectorAll('.an').forEach(el=>{if(!el.classList.contains('in'))animObs.observe(el);});
  ['about','tech','events','members','honors'].forEach(id=>{const el=document.getElementById(id);if(el)navObs.observe(el);});
}
document.addEventListener('DOMContentLoaded',observeAll);

/* ===== BACK TO TOP ===== */
const backTop=document.getElementById('backTop');
window.addEventListener('scroll',()=>{
  if(window.scrollY>window.innerHeight*.55)backTop.classList.add('show');
  else backTop.classList.remove('show');
},{passive:true});

/* ===== JOIN MODAL ===== */
function openJoin(){document.getElementById('joinModal').classList.add('on');document.body.style.overflow='hidden';}
function closeJoin(){document.getElementById('joinModal').classList.remove('on');document.body.style.overflow='';}
function submitJoin(){
  const name=document.getElementById('mName').value.trim();
  const email=document.getElementById('mEmail').value.trim();
  const dept=document.getElementById('mDept').value;
  const msg=document.getElementById('mMsg').value.trim();
  if(!name||!email||!msg){alert(lang=='zh'?'请填写完整信息':'Please fill in all fields');return;}
  const deptNames={projects:'项目部',outreach:'外联部',publicity:'宣策部',org:'组织部',admin:'秘书处','':'未选择'};
  const deptNameEn={projects:'Project Dept',outreach:'Outreach',publicity:'Publicity',org:'Organization',admin:'Secretariat','':'Not selected'};
  const dpt=lang=='zh'?deptNames[dept]:deptNameEn[dept];
  const subject=lang=='zh'?`加入社团申请 - ${name}`:`Join Application - ${name}`;
  const body=`姓名 / Name: ${name}%0D%0A邮箱 / Email: ${email}%0D%0A意向部门 / Department: ${dpt}%0D%0A%0D%0A申请理由 / Reason:%0D%0A${msg}`;
  window.location.href=`mailto:2767394183@qq.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  closeJoin();
}
document.getElementById('joinModal').addEventListener('click',e=>{if(e.target===document.getElementById('joinModal'))closeJoin();});

/* ===== WEBGL HERO SHADER ===== */
(function(){
  const c=document.getElementById('heroCanvas');
  if(!window.WebGLRenderingContext)return;
  let gl;try{gl=c.getContext('webgl')||c.getContext('experimental-webgl')}catch(e){return}
  if(!gl)return;
  try{
    function rs(){const d=Math.min(window.devicePixelRatio||1,2);c.width=c.clientWidth*d;c.height=c.clientHeight*d;gl.viewport(0,0,c.width,c.height)}
    rs();
    const vs=`attribute vec4 aPos;void main(){gl_Position=aPos;}`;
    const fs=`precision mediump float;uniform float uT;uniform vec2 uR;
	float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
	float n(vec2 p){vec2 i=floor(p),f=fract(p);float a=h(i),b=h(i+vec2(1,0)),c=h(i+vec2(0,1)),d=h(i+vec2(1,1));vec2 u=f*f*(3.-2.*f);return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;}
	float f(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p*=2.;a*=.5;}return v;}
	void main(){vec2 uv=gl_FragCoord.xy/uR;float t=uT*.00012,p=smoothstep(.3,.7,f(vec2(uv.x*3.+t,uv.y*2.-.5*t))*.5+f(vec2(uv.x*2.-.7*t,uv.y*3.+.3*t))*.3+f(vec2(uv.x*5.+.4*t,uv.y*4.-.6*t))*.2);p*=1.-smoothstep(.2,.8,length(uv-.5));float g=h(gl_FragCoord.xy+uT*.001)*.08-.04;vec3 col=vec3(.1,.18,.16)*p*1.3+g;col+=vec3(.1,.18,.16)*.03;gl_FragColor=vec4(col,1.);}`;
    function cmp(s,t){const sh=gl.createShader(t);gl.shaderSource(sh,s);gl.compileShader(sh);return sh;}
    const p=gl.createProgram();gl.attachShader(p,cmp(vs,gl.VERTEX_SHADER));gl.attachShader(p,cmp(fs,gl.FRAGMENT_SHADER));gl.linkProgram(p);
    if(!gl.getProgramParameter(p,gl.LINK_STATUS))return;gl.useProgram(p);
    const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
    const ap=gl.getAttribLocation(p,'aPos');gl.enableVertexAttribArray(ap);gl.vertexAttribPointer(ap,2,gl.FLOAT,false,0,0);
    const ut=gl.getUniformLocation(p,'uT'),ur=gl.getUniformLocation(p,'uR');let aid;
    function rfn(tm){gl.uniform1f(ut,tm);gl.uniform2f(ur,c.width,c.height);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);aid=requestAnimationFrame(rfn);}
    aid=requestAnimationFrame(rfn);window.addEventListener('resize',rs);
    document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelAnimationFrame(aid);else aid=requestAnimationFrame(rfn);});
  }catch(e){}
})();

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    const href=this.getAttribute('href');
    if(href!=='#'){e.preventDefault();document.querySelector(href)?.scrollIntoView({behavior:'smooth'})}
  })
});

// Trigger hero animation on load
document.querySelector('.hero')?.classList.add('in-view');