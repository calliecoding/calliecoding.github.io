import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as l,a as n,b as e,d as a,e as s}from"./app-4b3cc4f3.js";const c={},p=n("p",null,[e("常年使用搜狗输入法，备份时发现搜狗词库高达 27 万条，其中 99% 的内容是垃圾词条，即使偶尔输入过一次的内容也被输入法记录。更可怕的是，词库无法从云端删除，只要你输入过一次，搜狗就永远记住了。这哪里是输入法，根本是个"),n("strong",null,"键盘记录器"),e("。")],-1),d=n("p",null,"之后，我尝试了各种输入法：百度、讯飞、手心等依旧是键盘记录器；影子输入法开源但不稳定；谷歌拼音停止更新；微软拼音词库收录慢且难以转移；只有小狼毫开源、稳定，而且又能多设备同步词库。",-1),u={href:"https://github.com/rime/weasel/releases/download/0.15.0/weasel-0.15.0.0-installer.exe",target:"_blank",rel:"noopener noreferrer"},h={href:"https://wwva.lanzoum.com/iTAcP0ynxmfi",target:"_blank",rel:"noopener noreferrer"},_=s('<h2 id="基础设置" tabindex="-1"><a class="header-anchor" href="#基础设置" aria-hidden="true">#</a> 基础设置</h2><p>安装小狼毫时，不要修改用户文件夹位置，否则后续输入法定制容易出错。安装完成后，右键单击任务栏的小狼毫图标，点击「输入法设定」，勾选输入法（推荐「朙月拼音·简化字」），点击「中」，选择皮肤后即可使用小狼毫输入法。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup><sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p>',2),m={href:"https://github.com/fkxxyz/rime-cloverpinyin",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/ssnhd/rime",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/qq_42204675/article/details/86422450",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"扩充词库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#扩充词库","aria-hidden":"true"},"#"),e(" 扩充词库")],-1),y={href:"https://github.com/Chernfalin/better-rime-dict",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/Chernfalin/SuperRimeDict",target:"_blank",rel:"noopener noreferrer"},v={href:"https://gist.github.com/lotem/5440677",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/rime-aca/dictionaries",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,"从容量上来说，SuperRime 词库 > BetterRime 词库 > Rime 擴充詞庫，但词库越大错误收录也越多，建议按实际需求选择词库。",-1),w=n("p",null,[e("词库解压后，修改 "),n("code",null,"luna_pinyin.extended.dict.yaml"),e("，选择词库范围。"),n("code",null,"mysymbols.yaml"),e(" 对全角和半角符号都做了优化，有其他需求可以自行修改。")],-1),q=n("h2",{id:"双拼方案",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#双拼方案","aria-hidden":"true"},"#"),e(" 双拼方案")],-1),A={href:"https://github.com/rime/rime-double-pinyin",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/rime/rime-double-pinyin/blob/master/double_pinyin_flypy.schema.yaml",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/functoreality/rime-flypy-zrmfast",target:"_blank",rel:"noopener noreferrer"},R={href:"https://blog.csdn.net/neninee/article/details/83692270",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"double_pinyin_flypy.schema.yaml",-1),W={href:"https://github.com/rime/rime-double-pinyin/issues/6#issuecomment-754367706",target:"_blank",rel:"noopener noreferrer"},z=n("code",null,"- 'xform/^(.*)$/\\U$1\\E\\t | $1/'",-1),D=n("code",null,"{原始输出}|{对应拼音}",-1),j=s(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">translator</span><span class="token punctuation">:</span>
  <span class="token key atrule">dictionary</span><span class="token punctuation">:</span> luna_pinyin
  <span class="token key atrule">prism</span><span class="token punctuation">:</span> double_pinyin_flypy
  <span class="token key atrule">preedit_format</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进阶指南" tabindex="-1"><a class="header-anchor" href="#进阶指南" aria-hidden="true">#</a> 进阶指南</h2><p>在进阶前，需要进入小狼毫的默认用户文档位置，新建 YAML 文档来存储输入法设置修改。如果使用「朙月拼音·简化字」输入法方案，则新建「luna_pinyin_simp.custom.yaml」。<code>%APPDATA%\\Rime</code> 是小狼毫默认的用户文档位置。如果安装时修改了用户文档位置，右键单击任务栏小狼毫图标，选择「用户文件夹」，即可进入用户文档。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p>`,3),M={href:"https://github.com/rime/home/wiki/CustomizationGuide",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/rime/home/wiki/RimeWithSchemata#rime-%E4%B8%AD%E7%9A%84%E6%95%B8%E6%93%9A%E6%96%87%E4%BB%B6%E5%88%86%E4%BD%88%E5%8F%8A%E4%BD%9C%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/rime/rime-emoji",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/rime/home/wiki/CustomizationGuide#%E6%A8%A1%E7%B3%8A%E9%9F%B3",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/rime/home/wiki/UserGuide#%E5%90%8C%E6%AD%A5%E7%94%A8%E6%88%B6%E8%B3%87%E6%96%99",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"installation.yaml",-1),G=n("code",null,"installation_id",-1),T=n("code",null,"installation.yaml",-1),V=n("code",null,"sync_dir: 'D:\\Sync\\RIME'",-1),$=n("p",null,[e("打字习惯会保存在 "),n("code",null,"<词典名>.userdb.txt"),e(" 或 "),n("code",null,"<词典名>.userdb.kct.snapshot"),e(" 中。要还原个人输入习惯，则点击「用户词典管理」>「导入文本码表」来恢复词频记录。")],-1),U={href:"https://github.com/rime/librime/releases",target:"_blank",rel:"noopener noreferrer"},Y=n("code",null,"Rime.lua",-1),O=s('<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="开机后不能输出中文" tabindex="-1"><a class="header-anchor" href="#开机后不能输出中文" aria-hidden="true">#</a> 开机后不能输出中文</h3><p>有时开机后，不能正常输出中文，这是由于 <code>WeaselServer.exe</code> 未正常启动的原因。</p><p>此时，我们可以打开程序文件夹中的 <code>WeaselServer.exe</code> 来解决问题。该程序默认位置为 <code>C:\\Program Files (x86)\\Rime\\weasel-0.14.3\\WeaselServer.exe</code>。不要将 <code>WeaselServer.exe</code> 放入开启启动程序，会导致程序报错。</p>',4),H=n("code",null,"WeaselServer.exe",-1),J={href:"https://github.com/rockbenben/rime-WeaselServer",target:"_blank",rel:"noopener noreferrer"},K=n("code",null,"%AppData%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup",-1),Q={href:"https://wwx.lanzoux.com/if3znkka01g",target:"_blank",rel:"noopener noreferrer"},X=n("h3",{id:"输入法报错",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#输入法报错","aria-hidden":"true"},"#"),e(" 输入法报错")],-1),Z=n("p",null,"将用户文件夹设置为同步文件夹后，出现提示「有错误，请查看日志%TEMP%\\rime.weasel.*.INFO」。这是由于用户文件夹设置为同步文件夹后导致的进程冲突。日志中有提示「另一个程序正在使用此文件，进程无法访问」。",-1),ee=n("p",null,[e("遇到报错后，关闭任务管理器中的 "),n("code",null,"WeaselServer.exe"),e(" 进程，然后重新执行小狼毫算法服务。")],-1),ne=n("h3",{id:"切换输入法状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#切换输入法状态","aria-hidden":"true"},"#"),e(" 切换输入法状态")],-1),te={href:"https://gist.github.com/lotem/2981316",target:"_blank",rel:"noopener noreferrer"},ae=n("p",null,"虽然小狼毫不能组合键切换，但可以使用 Windows 键盘切换设置组合键。设置中选择「时间和语言」>「输入」>「高级键盘设置」>「语言栏选项」>「高级键设置」，Ctrl+Space 是 Windows 默认的中文输入法/非输入法切换的快捷键。",-1),se=n("h3",{id:"输入法候选框闪烁",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#输入法候选框闪烁","aria-hidden":"true"},"#"),e(" 输入法候选框闪烁")],-1),oe={href:"https://github.com/rime/weasel/issues/228",target:"_blank",rel:"noopener noreferrer"},re=s(`<h3 id="删除错误「上屏」的词" tabindex="-1"><a class="header-anchor" href="#删除错误「上屏」的词" aria-hidden="true">#</a> 删除错误「上屏」的词</h3><p>有时打错几次的字会出现在预选词的前排，影响了输入法的习惯词典。要删除这些错误的「上屏」词，只需将选字光标移到错词上，然后按下 Shift+Delete 或 Control+Delete 即可。</p><h3 id="符号直接上屏" tabindex="-1"><a class="header-anchor" href="#符号直接上屏" aria-hidden="true">#</a> 符号直接上屏</h3><p>小狼毫给字符提供了多个候选，比如 / 默认有 <code>&quot;、&quot;, &quot;/&quot;, &quot;／&quot;, &quot;÷&quot;</code> 四个候选词。若要按 / 键直接输出「、」，则按下方代码修改 luna_pinyin.schema.yaml 中的 punctuator 区块。<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">punctuator</span><span class="token punctuation">:</span>
  <span class="token key atrule">import_preset</span><span class="token punctuation">:</span> default
  <span class="token key atrule">full_shape</span><span class="token punctuation">:</span>
    <span class="token key atrule">&quot;/&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;、&quot;</span>
  <span class="token key atrule">half_shape</span><span class="token punctuation">:</span>
    <span class="token key atrule">&quot;/&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;、&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定程序中默认输入法" tabindex="-1"><a class="header-anchor" href="#指定程序中默认输入法" aria-hidden="true">#</a> 指定程序中默认输入法</h3><p>如果想在特定程序中默认使用英文输入法，可以在 <code>.\\weasel.custom.yaml</code> 中加入下列代码。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">patch</span><span class="token punctuation">:</span>
  <span class="token key atrule">app_options/windowsterminal.exe</span><span class="token punctuation">:</span> <span class="token comment"># 程序名字全用小寫字母</span>
    <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">app_options/powershell.exe</span><span class="token punctuation">:</span>
    <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">app_options/code.exe</span><span class="token punctuation">:</span>
    <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">app_options/putty.exe</span><span class="token punctuation">:</span>
    <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">app_options/listary.exe</span><span class="token punctuation">:</span>
    <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不能输出-emoji" tabindex="-1"><a class="header-anchor" href="#不能输出-emoji" aria-hidden="true">#</a> 不能输出 emoji</h3>`,9),ie={href:"https://github.com/ssnhd/rime",target:"_blank",rel:"noopener noreferrer"},le=s(`<h3 id="无法触发词库的特殊符号" tabindex="-1"><a class="header-anchor" href="#无法触发词库的特殊符号" aria-hidden="true">#</a> 无法触发词库的特殊符号</h3><p>SuperRime 词库自带的标点及特殊表情设置有问题，需要在输入法设置文件夹 <code>luna_pinyin_simp.custom.yaml</code> 中植入触发标点及特殊表情的代码。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">patch</span><span class="token punctuation">:</span>
  <span class="token key atrule">&quot;punctuator/import_preset&quot;</span><span class="token punctuation">:</span> mysymbols
  <span class="token key atrule">&quot;recognizer/patterns/punct&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;^/([a-z]+|[0-9])$&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,4),ce={class:"footnotes"},pe={class:"footnotes-list"},de={id:"footnote1",class:"footnote-item"},ue={href:"https://www.jianshu.com/p/296bba666604",target:"_blank",rel:"noopener noreferrer"},he=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),_e={id:"footnote2",class:"footnote-item"},me={href:"https://www.jianshu.com/p/cffc0ea094a7",target:"_blank",rel:"noopener noreferrer"},fe=n("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),ke={id:"footnote3",class:"footnote-item"},be={href:"https://www.dazhuanlan.com/2019/10/06/5d995d43e4432/",target:"_blank",rel:"noopener noreferrer"},ye=n("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1),ge={id:"footnote4",class:"footnote-item"},ve={href:"https://github.com/rime/home/wiki/CustomizationGuide#%E4%B8%80%E4%BE%8B%E5%AE%9A%E8%A3%BD%E6%A8%99%E9%BB%9E%E7%AC%A6%E8%99%9F",target:"_blank",rel:"noopener noreferrer"},xe=n("a",{href:"#footnote-ref4",class:"footnote-backref"},"↩︎",-1);function Ee(we,qe){const t=r("ExternalLinkIcon");return i(),l("div",null,[p,d,n("p",null,[e("Rime 小狼毫输入法下载："),n("a",u,[e("官方渠道"),a(t)]),e("，"),n("a",h,[e("国内搬运"),a(t)]),e("。")]),_,n("p",null,[e("小狼毫不推荐使用"),n("a",m,[e("四叶草"),a(t)]),e("等集成方案，建议参考 "),n("a",f,[e("Squirrel 鼠须管配置"),a(t)]),e("和"),n("a",k,[e("小狼毫 [rime_win][眀月拼音] 简单配置方法"),a(t)]),e(" 以「朙月拼音·简化字」为基础定制自己的输入法，最大限度提升输入法效率。小狼毫的魅力在于可自定义，让输入法按你的想法输出，定制流程参考下面的进阶指南。")]),b,n("p",null,[e("扩充词库包含英文联想、网络流行语、成语、俗语等，能提高输出效率。热门词库有 "),n("a",y,[e("BetterRime 词库"),a(t)]),e("、"),n("a",g,[e("SuperRime 拓展词库"),a(t)]),e("、"),n("a",v,[e("自定义短语"),a(t)]),e("和 "),n("a",x,[e("Rime 擴充詞庫"),a(t)]),e("。")]),E,w,q,n("p",null,[e("为了提高输出效率，我使用的是小鹤双拼方案。"),n("a",A,[e("小狼毫官方配置库"),a(t)]),e("收录了自然码双拼、智能 ABC 双拼、小鹤双拼、MSPY 双拼和拼音加加双拼。")]),n("p",null,[e("配置时，将官方配置库中的 "),n("a",S,[e("double_pinyin_flypy.schema.yaml"),a(t)]),e(" 下载到小狼毫的用户文件夹。然后，右键单击任务栏小狼毫图标，选「输入法设定」，只勾选一个「小鹤双拼」。默认方案为繁体，可使用按键 F5 (部分版本是 F4)，将配置默认为简体。如果你不想翻页找字，可以参考由 @functoreality 提供的"),n("a",B,[e("双拼加辅助码方案"),a(t)]),e("。")]),n("p",null,[e("双拼的自定义短语可参考"),n("a",R,[e("小狼毫自定义短语-Rime-双拼"),a(t)]),e("。如果设定后无法使用简体输入，可将 "),C,e(" 中的 filters 模块剪贴到 translators 模块上方。")]),n("p",null,[e("双拼不会显示当前输出字母，可参考"),n("a",W,[e("使用双拼时如何同时显示按下的键以及双拼对应的拼音"),a(t)]),e("。在 double_pinyin_flypy.schema.yaml 文件中，找到下方的代码行，然后换行加入 "),z,e("。这是同时显示拼音的核心代码，配置后的双拼会显示为 "),D,e("。")]),j,n("p",null,[e("Rime 的官方文档非常详细，涵盖几乎所有的进阶需求，比如"),n("a",M,[e("定制指南"),a(t)]),e("、"),n("a",F,[e("文件配置说明"),a(t)]),e("、"),n("a",P,[e("emoji 集成"),a(t)]),e(" 和 "),n("a",I,[e("模糊音设置"),a(t)]),e("。")]),n("p",null,[e("如果要在多个设备上"),n("a",L,[e("同步用户资料"),a(t)]),e("，请打开用户文件夹中的 "),N,e("，将其中的设备名称 "),G,e(" 从长字符串修改为方便识别的名称，并在 "),T,e(" 文本末尾添加用户资料同步位置 "),V,e("，路径中不能出现中文。")]),$,n("p",null,[e("小狼毫主版本已多年未更新，可以用 rime 核心库 "),n("a",U,[e("librime"),a(t)]),e(" 替换小狼毫程序文件夹中的 rime.dll 来更新输入法。如果输入法中使用了 "),Y,e(" 的动态输出功能，可能会与核心库发生冲突，不要更换 rime.dll。")]),O,n("p",null,[e("如果不想手动启动 "),H,e("，可以使用 "),n("a",J,[e("WeaselServerAutostart"),a(t)]),e(" 脚本工具。首先把脚本放置于小狼毫「程序文件夹」内，然后将脚本的快捷方式移动至开机启动目录 "),K,e("。当开机时，如果检测到小狼毫未正常启动，脚本会自动启动对应程序。WeaselServerAutostart 脚本国内下载："),n("a",Q,[e("https://wwx.lanzoux.com/if3znkka01g"),a(t)]),e("。")]),X,Z,ee,ne,n("p",null,[e("小狼毫只支持按键切换中英文，支持的按键是 Caps_Lock, Shift_L, Shift_R, Control_L, control_R，配置参考"),n("a",te,[e("使用 Control 鍵切換中西文"),a(t)]),e("，修改 default.custom.yaml。")]),ae,se,n("p",null,[e("中文输入法的候选框闪烁，无法显示候选词。排除键盘硬件问题，可以尝试拔除或更换键盘，以确认问题是否复现。Word 2016 下候选框闪烁可以参考 "),n("a",oe,[e("issue 228"),a(t)]),e("。")]),re,n("p",null,[e("根据官方文档的教程设置了 emoji，但无法输出符号。经过多种方案的测试，目前输出特殊字符最稳定的是 "),n("a",ie,[e("Squirrel 鼠须管配置"),a(t)]),e("，Windows 用户可以参考它来调整自己的输入法。")]),le,n("section",ce,[n("ol",pe,[n("li",de,[n("p",null,[n("a",ue,[e("30 分钟搞定 自由输入法 RIME 简明配置指南"),a(t)]),e(),he])]),n("li",_e,[n("p",null,[n("a",me,[e("Rime 输入法—鼠须管 (Squirrel) 词库添加及配置"),a(t)]),e(),fe])]),n("li",ke,[n("p",null,[n("a",be,[e("小狼毫 RIME 输入法配置"),a(t)]),e(),ye])]),n("li",ge,[n("p",null,[n("a",ve,[e("一例、定製標點符號"),a(t)]),e(),xe])])])])])}const Be=o(c,[["render",Ee],["__file","2020-11-27-rime_input.html.vue"]]);export{Be as default};
