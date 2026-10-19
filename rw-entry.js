// Link the independent Reading & Writing course into the existing Math app.
(() => {
  const labels={
    ru:{nav:'Reading & Writing',title:'Теперь и Reading & Writing',body:'От английского с нуля до двух модулей по 27 заданий. Отдельный прогресс, 12 навыков и разбор ответов.',go:'Открыть курс',hub:'План и экзамен',hubTitle:'Твой персональный маршрут SAT',hubBody:'Диагностика, слабые темы и полный учебный экзамен на 98 заданий.'},
    en:{nav:'Reading & Writing',title:'Reading & Writing is here',body:'Learn from the basics, then practice two 27-question modules. Track 12 skills and review every answer.',go:'Open course',hub:'Plan and exam',hubTitle:'Your personal SAT path',hubBody:'Diagnostic, weak skills, and a full 98-question practice exam.'},
    es:{nav:'Reading & Writing',title:'Ya está Reading & Writing',body:'Aprende desde cero y practica dos módulos de 27 preguntas. Sigue 12 habilidades y revisa tus respuestas.',go:'Abrir curso',hub:'Plan y examen',hubTitle:'Tu camino personal al SAT',hubBody:'Diagnóstico, áreas débiles y examen de práctica de 98 preguntas.'},
    ar:{nav:'القراءة والكتابة',title:'دورة القراءة والكتابة',body:'ابدأ من الأساسيات ثم تدرب على وحدتين من 27 سؤالًا. تابع 12 مهارة وراجع إجاباتك.',go:'افتح الدورة',hub:'الخطة والاختبار',hubTitle:'خطتك الشخصية لاختبار SAT',hubBody:'تشخيص ومهارات ضعيفة واختبار تدريبي كامل من 98 سؤالًا.'}
  };
  const oldShell=shell;
  shell=function(body){
    oldShell(body);
    const x=labels[state.lang]||labels.en;
    const navEl=document.querySelector('.sidebar .nav');
    if(navEl)navEl.insertAdjacentHTML('beforeend',`<a class="rw-nav-link" href="./rw.html"><span class="nav-icon">✎</span>${x.nav}</a>`);
    if(navEl)navEl.insertAdjacentHTML('beforeend',`<a href="./hub.html"><span class="nav-icon">◈</span>${x.hub}</a>`);
    const main=document.querySelector('.shell .main');
    const top=main?.querySelector('.topbar');
    if(top)top.insertAdjacentHTML('afterend',`<div class="course-switch" aria-label="SAT courses"><a class="active" href="./index.html" aria-current="page"><span class="switch-mark">∑</span> SAT Math</a><a href="./rw.html"><span class="switch-mark">Aa</span> Reading & Writing</a></div>`);
  };
  const oldHome=home;
  home=function(){
    oldHome();
    const x=labels[state.lang]||labels.en;
    document.querySelector('.shell .hero')?.insertAdjacentHTML('afterend',`<a class="hub-promo" href="./hub.html"><span>◈</span><span><strong>${x.hubTitle}</strong><small>${x.hubBody}</small></span><b>↗</b></a>`);
    const footer=document.querySelector('.footer');
    if(footer)footer.insertAdjacentHTML('beforebegin',`<section class="rw-home-banner"><span class="tag">SAT START · READING & WRITING</span><h2>${x.title}</h2><p>${x.body}</p><a href="./rw.html">${x.go} →</a></section>`);
  };
  render();
  const params=new URLSearchParams(location.search),lesson=params.get('lesson');
  if(lesson){const index=LESSONS.findIndex(l=>l.id===lesson);if(index>=0)start(index)}
  else if(params.get('view')==='course')nav('course');
})();

