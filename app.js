const examples = [
 {input:'A visit to yi shen me yuan.',prefix:'A visit to ',word:'yi yuan',suffix:' (hospital).',explanation:'In this romanized Chinese example, extra syllables interrupt the word for hospital. Resolution removes the deliberate insertion.'},
 {input:'This product is for xiao tang ren.',prefix:'This product is for ',word:'people with diabetes',suffix:'.',explanation:'In this preset context, xiao tang ren is a euphemistic reference to people with diabetes. Real resolution depends on context.'},
 {input:'Let me introduce this product.',prefix:'Let me introduce this product.',word:'',suffix:'',explanation:'When no morph is present, the original utterance is preserved.'}
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
let selectedExample = 0;
function renderExample() {
 const ex=examples[selectedExample];
 document.getElementById('lab-input').textContent=ex.input;
 const output=document.getElementById('lab-output');output.replaceChildren(document.createTextNode(ex.prefix));
 if(ex.word){const word=document.createElement('span');word.className='resolved';word.textContent=ex.word;output.append(word);}
 output.append(document.createTextNode(ex.suffix));document.getElementById('lab-explanation').textContent=ex.explanation;
 document.querySelectorAll('[data-example]').forEach(button=>{const active=Number(button.dataset.example)===selectedExample;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
}
function renderTheme(){const dark=document.documentElement.dataset.theme==='dark';document.getElementById('theme').setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');document.getElementById('theme').setAttribute('aria-pressed',String(dark));document.querySelector('meta[name="theme-color"]').content=dark?'#17231e':'#f5f4ef';}
const storedTheme=readPreference('jz-theme');document.documentElement.dataset.theme=storedTheme==='dark'||(storedTheme!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';
document.getElementById('theme').addEventListener('click',()=>{document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';savePreference('jz-theme',document.documentElement.dataset.theme);renderTheme();});
document.querySelectorAll('[data-example]').forEach(button=>button.addEventListener('click',()=>{selectedExample=Number(button.dataset.example);renderExample();}));
const dialog=document.getElementById('citation-dialog');
document.querySelectorAll('[data-cite]').forEach(button=>button.addEventListener('click',()=>{document.getElementById('citation-text').textContent=citations[button.dataset.cite];document.getElementById('copy-status').textContent='';dialog.showModal();}));
document.getElementById('close-citation').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();}});
document.getElementById('copy-citation').addEventListener('click',async()=>{const citation=document.getElementById('citation-text');try{await navigator.clipboard.writeText(citation.textContent);document.getElementById('copy-status').textContent='Copied to clipboard.';}catch{const range=document.createRange();range.selectNodeContents(citation);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);document.getElementById('copy-status').textContent='Citation selected. Press Ctrl+C / Cmd+C to copy.';}});
document.getElementById('year').textContent=new Date().getFullYear();renderTheme();renderExample();
