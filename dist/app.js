'use strict';
const hours = [
  {word:'子',pinyin:'zǐ',animal:'鼠',emoji:'🐭',time:'23:00–01:00',period:'午夜的时光',tag:'午夜的朋友',lead:'小鼠出门，夜宵开张。',copy:'想象一只小鼠背着点心袋，跨过午夜的门槛。它从晚上十一点，一直吃到凌晨一点。',hook:'子鼠跨午夜，十一到一点。',note:'子时跨过两个日期：从前一天 23:00，到当天 01:00。'},
  {word:'丑',pinyin:'chǒu',animal:'牛',emoji:'🐮',time:'01:00–03:00',period:'深夜的时光',tag:'深夜的朋友',lead:'小牛数星星，数着数着睡着了。',copy:'小鼠吃饱后，轮到小牛守夜。想象牛角上挂着一颗星，慢慢摇到凌晨三点。',hook:'丑牛数星星，凌晨一到三。',note:'顺序小线索：生肖里鼠之后是牛，所以子之后就是丑。'},
  {word:'寅',pinyin:'yín',animal:'虎',emoji:'🐯',time:'03:00–05:00',period:'天亮前的时光',tag:'黎明前的朋友',lead:'小虎伸懒腰，准备叫醒森林。',copy:'天还没亮，小虎先起床。想象它打了一个响亮的哈欠，把三点和五点之间的黑夜撑开。',hook:'寅虎伸懒腰，凌晨三到五。',note:'寅字读 yín。先记“寅虎”，再接上你熟悉的生肖顺序。'},
  {word:'卯',pinyin:'mǎo',animal:'兔',emoji:'🐇',time:'05:00–07:00',period:'清晨的时光',tag:'日出的朋友',lead:'小兔起床，太阳露头。',copy:'想象一只小兔推开窗，把第一缕阳光装进胡萝卜篮子。兔子一醒，卯时就到。',hook:'卯兔迎日出，清晨五到七。',note:'你刚问过的「点卯」，就是早晨点名。把卯时和上班报到连起来记。'},
  {word:'辰',pinyin:'chén',animal:'龙',emoji:'🐲',time:'07:00–09:00',period:'早晨的时光',tag:'早餐的朋友',lead:'小龙喷出一朵早餐云。',copy:'兔子开窗之后，小龙端来了热腾腾的早餐。想象它把七个包子一路送到九点。',hook:'辰龙吃早餐，早上七到九。',note:'卯兔之后接辰龙。清晨五到七，再往后加两小时，就是七到九。'},
  {word:'巳',pinyin:'sì',animal:'蛇',emoji:'🐍',time:'09:00–11:00',period:'上午的时光',tag:'上午的朋友',lead:'小蛇卷成九，晒到十一走。',copy:'想象小蛇把身体盘成数字 9，舒舒服服晒太阳。等钟走到 11，它就把位置让给小马。',hook:'巳蛇晒太阳，上午九到十一。',note:'容易认混：巳读 sì，是时辰；已读 yǐ；己读 jǐ。这里记“巳蛇”。'},
  {word:'午',pinyin:'wǔ',animal:'马',emoji:'🐴',time:'11:00–13:00',period:'正午的时光',tag:'太阳下的朋友',lead:'小马站中间，太阳在头顶。',copy:'走到一天的正中央，小马停在太阳下面。它守着正午十二点，前后一小时都是午时。',hook:'午马跨正午，十一到一点。',note:'最稳的记忆钉：午正是 12:00。与它相对的子正，就是午夜 00:00。'},
  {word:'未',pinyin:'wèi',animal:'羊',emoji:'🐑',time:'13:00–15:00',period:'午后的时光',tag:'午后的朋友',lead:'小羊抱软云，午后打个盹。',copy:'小马吃完午饭，小羊抱来一团云朵当枕头。想象一只羊慢慢数到三点，才揉揉眼睛醒来。',hook:'未羊抱云朵，下午一到三。',note:'午后马上接未时。午马、未羊，生肖相邻，时辰也相邻。'},
  {word:'申',pinyin:'shēn',animal:'猴',emoji:'🐒',time:'15:00–17:00',period:'下午的时光',tag:'下午的朋友',lead:'小猴来送信，下午三到五。',copy:'小羊刚醒，小猴就蹦进院子。想象它背着写了“三到五”的信封，把下午的消息送到。',hook:'申猴送封信，下午三到五。',note:'和卯时成对记：卯时是早晨 5–7 点；申时是下午 3–5 点。'},
  {word:'酉',pinyin:'yǒu',animal:'鸡',emoji:'🐔',time:'17:00–19:00',period:'傍晚的时光',tag:'归家的朋友',lead:'小鸡拎夕阳，收工回家啦。',copy:'小猴送完信，小鸡把夕阳当成小灯笼，一路拎回家。从下午五点走到晚上七点。',hook:'酉鸡拎夕阳，傍晚五到七。',note:'把卯兔和酉鸡对着记：卯时是早晨 5–7 点，酉时是傍晚 5–7 点。'},
  {word:'戌',pinyin:'xū',animal:'狗',emoji:'🐶',time:'19:00–21:00',period:'夜晚的时光',tag:'守门的朋友',lead:'小狗点起灯，守着晚归的人。',copy:'小鸡进门后，小狗把门口的灯点亮。想象它在七点到九点之间，陪你度过夜晚。',hook:'戌狗点夜灯，晚上七到九。',note:'戌读 xū，记“戌狗守门”。注意它和戊（wù）、戍（shù）长得像。'},
  {word:'亥',pinyin:'hài',animal:'猪',emoji:'🐷',time:'21:00–23:00',period:'入夜的时光',tag:'梦里的朋友',lead:'小猪钻被窝，一天转完一圈。',copy:'小狗关好门，小猪滚进暖暖的被子。等它睡到十一点，小鼠又背上点心袋，新一圈开始。',hook:'亥猪钻被窝，晚上九到十一。',note:'亥是最后一站，后面回到子。十二时辰循环，一天刚好 24 小时。'}
];
const $ = id => document.getElementById(id);
let selected = 3, needle = 90, reciteTimer = null, questionIndex = 0, correctCount = 0, answered = false, questions = [], mistakes = [], orderPosition = 0;
let saved = {}; try { saved = JSON.parse(localStorage.getItem('shichen-v1') || '{}') || {}; } catch {}
const visited = new Set(Array.isArray(saved.visited) ? saved.visited.filter(n => Number.isInteger(n)&&n>=0&&n<12) : []);
let best = Number.isInteger(saved.best) ? Math.min(8,Math.max(0,saved.best)) : 0;
function save() { try { localStorage.setItem('shichen-v1',JSON.stringify({visited:[...visited],best})); } catch {} }
function updateProgress(){ $('visited-note').textContent = `已认识 ${visited.size} / 12 个时辰`; $('best-score').textContent = best ? `你的最好成绩：${best} / 8` : '第一次挑战，从这里开始'; }
function renderClock(){
  $('clock-stops').innerHTML = hours.map((h,i)=>{const a=i*Math.PI/6; return `<button class="clock-stop" data-hour="${i}" style="--x:calc(${Math.sin(a).toFixed(5)} * var(--radius));--y:calc(${(-Math.cos(a)).toFixed(5)} * var(--radius))" aria-label="${h.word}时，${h.animal}，${h.time.replace('–','至')}" aria-pressed="false"><span class="zodiac" aria-hidden="true">${h.emoji}</span><span class="branch">${h.word}</span></button>`}).join('');
  $('clock-stops').addEventListener('click',e=>{const b=e.target.closest('[data-hour]');if(b)selectHour(Number(b.dataset.hour));});
}
function selectHour(i){
  selected = (i+12)%12; const h=hours[selected]; visited.add(selected); save(); updateProgress();
  document.querySelectorAll('.clock-stop').forEach((b,j)=>{b.setAttribute('aria-pressed',String(j===selected));b.classList.toggle('visited',visited.has(j));});
  let delta = ((selected*30-needle)%360+540)%360-180; needle+=delta; $('clock-hand').style.transform=`rotate(${needle}deg)`;
  $('hub-animal').textContent=h.emoji;$('hub-word').textContent=h.word+'时';$('hub-period').textContent=h.period;
  $('story-stop').textContent=`第 ${String(selected+1).padStart(2,'0')} 站 / 共 12 站`;$('story-tag').textContent=h.tag;
  $('story-title').innerHTML=`${h.word}<span>${h.pinyin}</span>`;$('story-animal').textContent=h.emoji;
  const t=h.time.split('–');$('story-time').innerHTML=`${t[0]} <span>至</span> ${t[1]}`;
  $('story-lead').textContent=h.lead;$('story-copy').textContent=h.copy;$('story-hook').textContent=h.hook;
  $('anchor-note').innerHTML=`<span aria-hidden="true">✳</span><p>${h.note}</p>`;
  const next=hours[(selected+1)%12];$('next-story').innerHTML=`下一站 · ${next.word}${next.animal} <span>↗</span>`;
}
function route(){
  const routeName=location.hash.slice(1);const page=['explore','memory','challenge'].includes(routeName)?routeName:'explore';
  document.querySelectorAll('.page').forEach(el=>el.hidden=el.id!==page);
  document.querySelectorAll('[data-page]').forEach(el=>{if(el.dataset.page===page)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');});
  if(page!=='memory')stopRecite(); if(page==='challenge'&&!questions.length)startQuiz();
}
function stopRecite(){clearInterval(reciteTimer);reciteTimer=null;document.querySelectorAll('.beat').forEach(el=>el.classList.remove('beat'));$('recite').innerHTML='播放记忆节奏 <span>▷</span>';}
function renderMemory(){
  const labels=[['第一小段','夜里到清晨'],['第二小段','早晨到午后'],['第三小段','下午到夜晚']];
  $('chant-board').innerHTML=labels.map((l,g)=>`<div class="chant-row"><div class="chant-label"><strong>${l[0]}</strong>${l[1]}</div>${hours.slice(g*4,g*4+4).map((h,k)=>`<button class="chant-word" data-chant="${g*4+k}" aria-label="${h.word}，${h.pinyin}，${h.animal}，查看时辰"><span class="chant-char">${h.word}</span><span class="chant-details"><span aria-hidden="true">${h.emoji}</span>${h.pinyin}</span></button>`).join('')}</div>`).join('');
  $('chant-board').addEventListener('click',e=>{const b=e.target.closest('[data-chant]');if(b){selectHour(Number(b.dataset.chant));location.hash='explore';}});
  $('reference-table').innerHTML=hours.map(h=>`<div class="ref-row"><span>${h.word}${h.animal}</span><span>${h.time}</span></div>`).join('');
  $('recite').addEventListener('click',()=>{
    if(reciteTimer){stopRecite();$('chant-status').textContent='已暂停。跟着生肖顺序，再自己念一遍。';return;}
    let i=0;$('recite').innerHTML='暂停记忆节奏 <span>Ⅱ</span>';
    const beat=()=>{document.querySelectorAll('.beat').forEach(el=>el.classList.remove('beat'));const h=hours[i];document.querySelector(`[data-chant="${i}"]`).classList.add('beat');$('chant-status').textContent=`${h.word}（${h.pinyin}）${h.animal} · ${h.hook}`;i++;if(i===12){clearInterval(reciteTimer);reciteTimer=setTimeout(()=>{stopRecite();$('chant-status').textContent='一圈完成。子丑寅卯，辰巳午未，申酉戌亥。试着不看再念一遍。';},1000);}};
    reciteTimer=setInterval(beat,1000);beat();
  });
}
function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
function startQuiz(){questionIndex=0;correctCount=0;mistakes=[];questions=shuffle(hours.map((h,i)=>i)).slice(0,8).map((index,i)=>({index,kind:i%2,choices:shuffle([index,...shuffle(hours.map((_,j)=>j).filter(j=>j!==index)).slice(0,3)])}));$('quiz-active').hidden=false;$('quiz-result').hidden=true;renderQuestion();}
function renderQuestion(){
  answered=false;const q=questions[questionIndex],h=hours[q.index];$('question-counter').textContent=`第 ${questionIndex+1} 题 / 共 8 题`;$('quiz-score').textContent=`已答对 ${correctCount} 题`;$('quiz-progress').style.width=`${questionIndex/8*100}%`;
  $('question-kind').textContent=q.kind?'时辰 → 时间':'时间 → 时辰';
  $('question-title').textContent=q.kind?`${h.word}时，是一天中的什么时候？`:`${h.time.replace('–',' 至 ')}，是什么时辰？`;
  $('question-help').textContent=q.kind?`小提示：${h.word}${h.animal}，试着想起它的生活场景。`:'每个时辰两小时。先想子时和午时，再顺着数。';
  $('answers').innerHTML=q.choices.map((i,k)=>`<button class="answer-button" data-answer="${i}"><span class="answer-letter">${'ABCD'[k]}</span><span>${q.kind?hours[i].time:hours[i].emoji+' '+hours[i].word+'时'}</span></button>`).join('');
  $('answer-feedback').textContent='';$('answer-feedback').className='answer-feedback';$('next-question').hidden=true;
}
function answer(i){
  if(answered)return;answered=true;const q=questions[questionIndex],h=hours[q.index],right=i===q.index;
  if(right)correctCount++;else mistakes.push(q.index);
  document.querySelectorAll('[data-answer]').forEach(b=>{b.disabled=true;const v=Number(b.dataset.answer);b.classList.toggle('correct',v===q.index);b.classList.toggle('wrong',v===i&&!right);});
  $('quiz-score').textContent=`已答对 ${correctCount} 题`;$('quiz-progress').style.width=`${(questionIndex+1)/8*100}%`;
  $('answer-feedback').innerHTML=`<strong>${right?'答对了，记住这位朋友。':`正确答案是 ${h.word}时 · ${h.time}。`}</strong>${h.hook}`;
  $('answer-feedback').classList.toggle('feedback-wrong',!right);$('next-question').hidden=false;$('next-question').innerHTML=questionIndex===7?'看看成绩 <span>↗</span>':'下一题 <span>→</span>';
}
function finishQuiz(){
  best=Math.max(best,correctCount);save();updateProgress();$('quiz-active').hidden=true;$('quiz-result').hidden=false;$('question-counter').textContent='本轮完成';
  const title=correctCount===8?'十二时辰，已经有感觉了。':correctCount>=5?'记住了大半，再走一圈。':'别急，朋友们还在等你认。';
  $('quiz-result').innerHTML=`<p class="result-big">${correctCount}<small> / 8</small></p><h3>${title}</h3><p class="result-copy">${correctCount===8?'换一组题，看看能不能继续全对。':'错的几个字，最值得再记一遍。'}</p>${mistakes.length?`<div class="mistakes"><p>这几位，再认识一下：</p>${[...new Set(mistakes)].map(i=>`<p>${hours[i].emoji} ${hours[i].word}时 · ${hours[i].time}　${hours[i].hook}</p>`).join('')}</div>`:''}<div class="result-actions"><button class="primary" id="retry-quiz">再来一轮 <span>↻</span></button><button class="secondary" id="try-order">试试排顺序 →</button></div>`;
  $('retry-quiz').onclick=startQuiz;$('try-order').onclick=()=>setMode('order');
}
function resetOrder(){orderPosition=0;$('order-count').textContent='0 / 12';$('order-slots').innerHTML=hours.map((_,i)=>`<div class="order-slot" aria-label="第 ${i+1} 位，待填写">${String(i+1).padStart(2,'0')}</div>`).join('');$('order-pool').innerHTML=shuffle(hours.map((_,i)=>i)).map(i=>`<button class="order-chip" data-order="${i}" aria-label="${hours[i].word}，${hours[i].pinyin}，${hours[i].animal}"><span aria-hidden="true">${hours[i].emoji}</span>${hours[i].word}</button>`).join('');$('order-feedback').textContent='第一位是子鼠，先找到「子」。';$('order-feedback').classList.remove('feedback-wrong');}
function setMode(mode){$('mode-quiz').setAttribute('aria-pressed',String(mode==='quiz'));$('mode-order').setAttribute('aria-pressed',String(mode==='order'));$('quiz-game').hidden=mode!=='quiz';$('order-game').hidden=mode!=='order';}
$('answers').addEventListener('click',e=>{const b=e.target.closest('[data-answer]');if(b)answer(Number(b.dataset.answer));});
$('next-question').onclick=()=>{if(!answered)return;if(++questionIndex>=8)finishQuiz();else renderQuestion();};
$('order-pool').addEventListener('click',e=>{const b=e.target.closest('[data-order]');if(!b||b.disabled)return;const i=Number(b.dataset.order);if(i!==orderPosition){const h=hours[orderPosition];$('order-feedback').textContent=`再想想。下一位是 ${h.emoji} ${h.word}（${h.pinyin}）${h.animal}，找到它再往前走。`;$('order-feedback').classList.add('feedback-wrong');return;}
  const h=hours[i],slot=$('order-slots').children[orderPosition];slot.innerHTML=`${h.word}<span aria-hidden="true">${h.emoji}</span>`;slot.classList.add('filled');slot.setAttribute('aria-label',`第 ${i+1} 位，${h.word}${h.animal}`);b.disabled=true;orderPosition++;$('order-count').textContent=`${orderPosition} / 12`;$('order-feedback').classList.remove('feedback-wrong');$('order-feedback').textContent=orderPosition===12?'整圈排对了。子丑寅卯，辰巳午未，申酉戌亥。你已经能带队环游一天了。':`对了，${h.word}${h.animal}已就位。接下来是谁？`;
});
$('mode-quiz').onclick=()=>setMode('quiz');$('mode-order').onclick=()=>setMode('order');$('reset-order').onclick=resetOrder;
$('prev').onclick=()=>selectHour(selected-1);$('next').onclick=$('next-story').onclick=()=>selectHour(selected+1);
$('now-btn').onclick=()=>{const d=new Date();selectHour(Math.floor((d.getHours()+1)/2)%12);$('story-tag').textContent=`当地时间 ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;};
$('clock-stops').addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','ArrowUp','ArrowDown','Home','End'].includes(e.key))return;e.preventDefault();let n=selected;if(e.key==='Home')n=0;else if(e.key==='End')n=11;else n+=['ArrowRight','ArrowDown'].includes(e.key)?1:-1;selectHour(n);document.querySelector(`[data-hour="${selected}"]`).focus();});
document.addEventListener('pointerdown',()=>document.body.classList.add('pointer-input'));
document.addEventListener('keydown',()=>document.body.classList.remove('pointer-input'));
window.addEventListener('hashchange',route);
renderClock();renderMemory();resetOrder();selectHour(3);route();
