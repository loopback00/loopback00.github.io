const translations = {
  zh: {
    skip:'跳到正文',navResearch:'研究',navPapers:'论文',navProjects:'项目',navAbout:'关于',
    hero1:'让语言被理解，',hero2:'让智能可落地。',heroDesc:'从中文直播变体词还原，到企业知识检索与 LLM Agent。我关心模型如何理解真实语言，也关心它们如何成为可靠、实用的系统。',
    readResearch:'阅读我的研究',location:'中国 · 南京',degree:'扬州大学 · NLP 硕士',noteTitle:'表面在变化，\n含义有迹可循。',noteExample:'概念示例 · 非在线模型',
    researchTitle:'从语言现象，到可用系统。',researchIntro:'连接语言理解、可解释性与工程实践。',
    focus1Title:'直播变体词还原',focus1Desc:'研究真实直播中通过插字、替换和谐音形成的变体表达，将其还原为规范词，并保留原句中的其他内容。',
    focus2Title:'企业知识检索',focus2Desc:'关注混合检索、查询改写、重排序与上下文组织，让回答有据可查，让检索过程可以评估与改进。',
    focus3Title:'Agent 工程',focus3Desc:'探索工具调用、上下文管理和执行轨迹观测，把大模型能力连接到真实任务与可维护的工作流。',
    papersTitle:'论文与研究成果',paper2026:'构建 HealthAMR 与 GeneralAMR 数据集，提出联合还原与解释的 JointMRE，以及基于输出冲突检测的 CDRF 精炼框架。',
    paper2025:'提出直播语音变体词还原任务，将还原建模为文本生成问题，并研究大模型数据增强在直播内容监管中的应用。',
    sources:'论文题名、作者与发表信息依据 ACL Anthology；这里只列出本人的相关研究。',projectsTitle:'让研究可以被复现。',allRepos:'全部公开仓库',
    project1:'跨领域直播变体词数据集、标注工具与还原方法。',project2:'面向中文直播语音的变体词还原研究。',
    labTitle:'一处变化，\n一个真实意图。',labDesc:'点选示例，看看变体表达如何回到规范词。还原关注刻意变化的表达，而不是改写整句话。',labDisclaimer:'预设概念演示，结果不由在线模型生成。',
    example0:'插字',example1:'谐音',example2:'保留原文',input:'输入表达',output:'规范表达',
    aboutTitle:'研究与工程，\n是同一份好奇心。',aboutLead:'你好，我是朱家豪，一名关注自然语言处理与大模型应用的 AI 工程师。',
    aboutDesc:'我在扬州大学完成 NLP 方向的硕士研究，师从强继朋老师，研究中文直播场景下的变体词还原。现在，我将这些研究中的问题意识延伸到企业知识检索和 Agent 工程：如何理解意图、找到证据，并让系统的行为可解释、可评估。',
    education:'教育经历',educationDetail:'扬州大学 · 硕士 · NLP 方向',thesis:'硕士课题',thesisDetail:'中文直播场景下的变体词还原方法研究及应用',interests:'当前关注',personalTitle:'个人兴趣',personalDesc:'我对自然语言处理一直充满兴趣，也喜欢探索 Agent 如何管理上下文、调用工具并完成真实任务。研究和开发之外，我喜欢逛 X，接触新信息与不同观点。',
    contactTitle:'一起聊聊语言与智能。',contactDesc:'欢迎交流 NLP 研究、知识检索与 Agent 工程。',findGithub:'在 GitHub 找到我',backTop:'回到顶部 ↑',copy:'复制引用'
  },
  en: {
    skip:'Skip to content',navResearch:'Research',navPapers:'Papers',navProjects:'Projects',navAbout:'About',
    hero1:'Understanding language.',hero2:'Building useful intelligence.',heroDesc:'From morph resolution in Chinese live streams to enterprise retrieval and LLM agents. I explore how models understand real language—and how to turn that understanding into reliable, useful systems.',
    readResearch:'Explore my research',location:'Nanjing, China',degree:'M.S. · NLP · Yangzhou University',noteTitle:'Changing forms.\nRecovering meaning.',noteExample:'Illustrative example · not a live model',
    researchTitle:'From language to useful systems.',researchIntro:'Connecting language understanding, interpretability and engineering.',
    focus1Title:'Morph resolution',focus1Desc:'Resolving deliberate transformations, substitutions and homophones in live-stream speech while preserving the rest of the original utterance.',
    focus2Title:'Enterprise retrieval',focus2Desc:'Exploring hybrid search, query rewriting, reranking and context organization to ground answers in evidence and make retrieval measurable.',
    focus3Title:'Agent engineering',focus3Desc:'Exploring tool use, context management and execution traces to connect language models with real tasks and maintainable workflows.',
    papersTitle:'Selected publications',paper2026:'HealthAMR and GeneralAMR benchmarks, JointMRE for joint resolution and explanation, and CDRF for refinement through output conflict detection.',
    paper2025:'Introducing live auditory morph resolution as a text-generation task, with LLM-based data augmentation for live-stream content moderation.',
    sources:'Titles, authors and venues are verified against ACL Anthology. Only my relevant research is listed here.',projectsTitle:'Research you can reproduce.',allRepos:'Public repositories',
    project1:'Cross-domain datasets, annotation tools and methods for live-stream morph resolution.',project2:'Research on auditory morph resolution in Chinese live streams.',
    labTitle:'A small change.\nA real intention.',labDesc:'Select an example to explore how a morph maps back to a standard word. The task targets deliberate variants while preserving the surrounding text.',labDisclaimer:'Preset illustrative examples. No live model is connected.',
    example0:'Insertion',example1:'Homophone',example2:'Keep original',input:'INPUT UTTERANCE',output:'RESOLVED UTTERANCE',
    aboutTitle:'Research and engineering.\nOne shared curiosity.',aboutLead:'Hi, I’m Jiahao Zhu, an AI engineer interested in natural language processing and practical language-model systems.',
    aboutDesc:'I completed my master’s research in NLP at Yangzhou University, advised by Jipeng Qiang, studying morph resolution in Chinese live streams. I now bring that research perspective to enterprise retrieval and agent engineering: understanding intent, finding evidence, and making system behavior interpretable and measurable.',
    education:'EDUCATION',educationDetail:'Yangzhou University · Master’s · NLP',thesis:'MASTER’S RESEARCH',thesisDetail:'Morph resolution methods and applications in Chinese live-streaming scenarios',interests:'CURRENT INTERESTS',personalTitle:'PERSONAL INTERESTS',personalDesc:'I’m drawn to natural language processing and how agents manage context, use tools and complete real tasks. Beyond research and development, I enjoy browsing X for new information and different perspectives.',
    contactTitle:'Let’s talk language & intelligence.',contactDesc:'Happy to exchange ideas on NLP, retrieval and agent engineering.',findGithub:'Find me on GitHub',backTop:'Back to top ↑',copy:'Copy citation'
  }
};
const examples = [
  {input:'这个可以去医什么院看看。',prefix:'这个可以去',word:'医院',suffix:'看看。',zh:'“医什么院”通过插入额外字符构成变体，还原为“医院”。',en:'“医什么院” inserts extra characters into “医院” (hospital). Resolution removes the deliberate insertion.'},
  {input:'小糖人都是可以吃的。',prefix:'',word:'糖尿病患者',suffix:'都是可以吃的。',zh:'在这一预设语境中，“小糖人”指“糖尿病患者”。真实还原需要结合上下文判断。',en:'In this preset context, “小糖人” refers to people with diabetes. Real resolution depends on context.'},
  {input:'今天给大家介绍这款产品。',prefix:'今天给大家介绍这款产品。',word:'',suffix:'',zh:'没有变体词时，保持原句不变。',en:'When no morph is present, the original utterance is preserved.'}
];
const citations = {
  '2026':`@inproceedings{qiang-etal-2026-chinese,
  title = {Chinese Live-Streaming E-Commerce Morph Resolution: Datasets and Methods},
  author = {Qiang, Jipeng and Zhu, Jiahao and Zhu, Yi and Zhang, Chaowei},
  booktitle = {Findings of the Association for Computational Linguistics: ACL 2026},
  year = {2026},
  pages = {2632--2645},
  publisher = {Association for Computational Linguistics},
  doi = {10.18653/v1/2026.findings-acl.126},
  url = {https://aclanthology.org/2026.findings-acl.126/}
}`,
  '2025':`@inproceedings{zhu-etal-2025-chinese,
  title = {Chinese Morph Resolution in E-commerce Live Streaming Scenarios},
  author = {Zhu, Jiahao and Qiang, Jipeng and Bai, Ran and Liu, Chenyu and Ouyang, Xiaoye},
  booktitle = {Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 3: Industry Track)},
  year = {2025},
  pages = {380--389},
  publisher = {Association for Computational Linguistics},
  doi = {10.18653/v1/2025.naacl-industry.32},
  url = {https://aclanthology.org/2025.naacl-industry.32/}
}`
};
function readPreference(key) { try { return localStorage.getItem(key); } catch { return null; } }
function savePreference(key,value) { try { localStorage.setItem(key,value); } catch {} }
let language = readPreference('jz-language') === 'en' ? 'en' : 'zh';
let selectedExample = 0;
function renderExample() {
  const ex = examples[selectedExample];
  document.getElementById('lab-input').textContent = ex.input;
  const output = document.getElementById('lab-output');
  output.replaceChildren(document.createTextNode(ex.prefix));
  if (ex.word) {
    const word = document.createElement('span'); word.className = 'resolved'; word.textContent = ex.word; output.append(word);
  }
  output.append(document.createTextNode(ex.suffix));
  document.getElementById('lab-explanation').textContent = ex[language];
  document.querySelectorAll('[data-example]').forEach(button => {
    const active = Number(button.dataset.example) === selectedExample;
    button.classList.toggle('active',active); button.setAttribute('aria-pressed',String(active));
  });
}
function renderTheme() {
  const dark = document.documentElement.dataset.theme === 'dark';
  document.getElementById('theme').setAttribute('aria-label',language === 'zh' ? (dark ? '切换浅色主题' : '切换深色主题') : (dark ? 'Switch to light theme' : 'Switch to dark theme'));
  document.getElementById('theme').setAttribute('aria-pressed',String(dark));
  document.querySelector('meta[name="theme-color"]').content = dark ? '#17231e' : '#f5f4ef';
}
function renderLanguage() {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = translations[language][element.dataset.i18n]; });
  const button = document.getElementById('language');
  button.textContent = language === 'zh' ? 'EN' : '中';
  button.setAttribute('aria-label',language === 'zh' ? 'Switch to English' : '切换为中文');
  document.querySelector('.note-index').textContent = language === 'zh' ? '语言与意图' : 'LANGUAGE & INTENT';
  document.getElementById('copy-status').textContent = '';
  renderExample(); renderTheme();
}
const storedTheme = readPreference('jz-theme');
document.documentElement.dataset.theme = storedTheme === 'dark' || (storedTheme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
document.getElementById('language').addEventListener('click',() => { language = language === 'zh' ? 'en' : 'zh'; savePreference('jz-language',language); renderLanguage(); });
document.getElementById('theme').addEventListener('click',() => { document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; savePreference('jz-theme',document.documentElement.dataset.theme); renderTheme(); });
document.querySelectorAll('[data-example]').forEach(button => button.addEventListener('click',() => { selectedExample = Number(button.dataset.example); renderExample(); }));
const dialog = document.getElementById('citation-dialog');
document.querySelectorAll('[data-cite]').forEach(button => button.addEventListener('click',() => { document.getElementById('citation-text').textContent = citations[button.dataset.cite]; document.getElementById('copy-status').textContent = ''; dialog.showModal(); }));
document.getElementById('close-citation').addEventListener('click',() => dialog.close());
dialog.addEventListener('click',event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
document.getElementById('copy-citation').addEventListener('click',async () => {
  const citation = document.getElementById('citation-text');
  try {
    await navigator.clipboard.writeText(citation.textContent);
    document.getElementById('copy-status').textContent = language === 'zh' ? '已复制到剪贴板。' : 'Copied to clipboard.';
  } catch {
    const range = document.createRange(); range.selectNodeContents(citation); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
    document.getElementById('copy-status').textContent = language === 'zh' ? '引用已选中，请按 Ctrl+C / ⌘C 复制。' : 'Citation selected. Press Ctrl+C / ⌘C to copy.';
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
renderLanguage();
