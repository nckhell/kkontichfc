(window.webpackJsonp=window.webpackJsonp||[]).push([["a98b"],{"1jS1":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page",function(){var n=e("k9zA");return{page:n.default||n}}])},FmIs:function(n,t,e){var i={"./pages/info/bestuur.json":"RCRQ","./pages/jeugd/trainers.json":"pnbI","./pages/summary.json":"l3zr"};function o(n){var t=a(n);return e(t)}function a(n){var t=i[n];if(!(t+1)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t}o.keys=function(){return Object.keys(i)},o.resolve=a,n.exports=o,o.id="FmIs"},RCRQ:function(n){n.exports={title:"Trainers",bodyContent:'---\n__Advertisement :)__\n\n- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image\n  resize in browser.\n- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly\n  i18n with plurals support and easy syntax.\n\nYou will like those projects!\n\n---\n\n# h1 Heading 8-)\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading\n\n\n## Horizontal Rules\n\n___\n\n---\n\n***\n\n\n## Typographic replacements\n\nEnable typographer option to see result.\n\n(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n\ntest.. test... test..... test?..... test!....\n\n!!!!!! ???? ,,  -- ---\n\n"Smartypants, double quotes" and \'single quotes\'\n\n\n## Emphasis\n\n**This is bold text**\n\n__This is bold text__\n\n*This is italic text*\n\n_This is italic text_\n\n~~Strikethrough~~\n\n\n## Blockquotes\n\n\n> Blockquotes can also be nested...\n>> ...by using additional greater-than signs right next to each other...\n> > > ...or with spaces between arrows.\n\n\n## Lists\n\nUnordered\n\n+ Create a list by starting a line with `+`, `-`, or `*`\n+ Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ Very easy!\n\nOrdered\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. Integer molestie lorem at massa\n\n\n1. You can use sequential numbers...\n1. ...or keep all the numbers as `1.`\n\nStart numbering with offset:\n\n57. foo\n1. bar\n\n\n## Code\n\nInline `code`\n\nIndented code\n\n    // Some comments\n    line 1 of code\n    line 2 of code\n    line 3 of code\n\n\nBlock code "fences"\n\n```\nSample text here...\n```\n\nSyntax highlighting\n\n``` js\nvar foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));\n```\n\n## Tables\n\n| Option | Description |\n| ------ | ----------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nRight aligned columns\n\n| Option | Description |\n| ------:| -----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\n\n## Links\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n\n\n## Images\n\n![Minion](https://octodex.github.com/images/minion.png)\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")\n\nLike links, Images also have a footnote style syntax\n\n![Alt text][id]\n\nWith a reference later in the document defining the URL location:\n\n[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"\n\n\n## Plugins\n\nThe killer feature of `markdown-it` is very effective support of\n[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).\n\n\n### [Emojies](https://github.com/markdown-it/markdown-it-emoji)\n\n> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:\n>\n> Shortcuts (emoticons): :-) :-( 8-) ;)\n\nsee [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.\n\n\n### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)\n\n- 19^th^\n- H~2~O\n\n\n### [\\<ins>](https://github.com/markdown-it/markdown-it-ins)\n\n++Inserted text++\n\n\n### [\\<mark>](https://github.com/markdown-it/markdown-it-mark)\n\n==Marked text==\n\n\n### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)\n\nFootnote 1 link[^first].\n\nFootnote 2 link[^second].\n\nInline footnote^[Text of inline footnote] definition.\n\nDuplicated footnote reference[^second].\n\n[^first]: Footnote **can have markup**\n\n    and multiple paragraphs.\n\n[^second]: Footnote text.\n\n\n### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)\n\nTerm 1\n\n:   Definition 1\nwith lazy continuation.\n\nTerm 2 with *inline markup*\n\n:   Definition 2\n\n        { some code, part of Definition 2 }\n\n    Third paragraph of definition 2.\n\n_Compact style:_\n\nTerm 1\n  ~ Definition 1\n\nTerm 2\n  ~ Definition 2a\n  ~ Definition 2b\n\n\n### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)\n\nThis is HTML abbreviation example.\n\nIt converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.\n\n*[HTML]: Hyper Text Markup Language\n\n### [Custom containers](https://github.com/markdown-it/markdown-it-container)\n\n::: warning\n*here be dragons*\n:::',bodyHtml:'<hr>\n<p><strong>Advertisement :)</strong></p>\n<ul>\n<li><strong><a href="https://nodeca.github.io/pica/demo/">pica</a></strong> - high quality and fast image\nresize in browser.</li>\n<li><strong><a href="https://github.com/nodeca/babelfish/">babelfish</a></strong> - developer friendly\ni18n with plurals support and easy syntax.</li>\n</ul>\n<p>You will like those projects!</p>\n<hr>\n<h1>h1 Heading 8-)</h1>\n<h2>h2 Heading</h2>\n<h3>h3 Heading</h3>\n<h4>h4 Heading</h4>\n<h5>h5 Heading</h5>\n<h6>h6 Heading</h6>\n<h2>Horizontal Rules</h2>\n<hr>\n<hr>\n<hr>\n<h2>Typographic replacements</h2>\n<p>Enable typographer option to see result.</p>\n<p>(c) (C) (r) (R) (tm) (TM) (p) (P) +-</p>\n<p>test.. test... test..... test?..... test!....</p>\n<p>!!!!!! ???? ,,  -- ---</p>\n<p>&quot;Smartypants, double quotes&quot; and \'single quotes\'</p>\n<h2>Emphasis</h2>\n<p><strong>This is bold text</strong></p>\n<p><strong>This is bold text</strong></p>\n<p><em>This is italic text</em></p>\n<p><em>This is italic text</em></p>\n<p><s>Strikethrough</s></p>\n<h2>Blockquotes</h2>\n<blockquote>\n<p>Blockquotes can also be nested...</p>\n<blockquote>\n<p>...by using additional greater-than signs right next to each other...</p>\n<blockquote>\n<p>...or with spaces between arrows.</p>\n</blockquote>\n</blockquote>\n</blockquote>\n<h2>Lists</h2>\n<p>Unordered</p>\n<ul>\n<li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li>\n<li>Sub-lists are made by indenting 2 spaces:\n<ul>\n<li>Marker character change forces new list start:\n<ul>\n<li>Ac tristique libero volutpat at</li>\n</ul>\n<ul>\n<li>Facilisis in pretium nisl aliquet</li>\n</ul>\n<ul>\n<li>Nulla volutpat aliquam velit</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Very easy!</li>\n</ul>\n<p>Ordered</p>\n<ol>\n<li>\n<p>Lorem ipsum dolor sit amet</p>\n</li>\n<li>\n<p>Consectetur adipiscing elit</p>\n</li>\n<li>\n<p>Integer molestie lorem at massa</p>\n</li>\n<li>\n<p>You can use sequential numbers...</p>\n</li>\n<li>\n<p>...or keep all the numbers as <code>1.</code></p>\n</li>\n</ol>\n<p>Start numbering with offset:</p>\n<ol start="57">\n<li>foo</li>\n<li>bar</li>\n</ol>\n<h2>Code</h2>\n<p>Inline <code>code</code></p>\n<p>Indented code</p>\n<pre><code>// Some comments\nline 1 of code\nline 2 of code\nline 3 of code\n</code></pre>\n<p>Block code &quot;fences&quot;</p>\n<pre><code>Sample text here...\n</code></pre>\n<p>Syntax highlighting</p>\n<pre><code class="hljs">var foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));</code></pre><h2>Tables</h2>\n<table>\n<thead>\n<tr>\n<th>Option</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>data</td>\n<td>path to data files to supply the data that will be passed into templates.</td>\n</tr>\n<tr>\n<td>engine</td>\n<td>engine to be used for processing templates. Handlebars is the default.</td>\n</tr>\n<tr>\n<td>ext</td>\n<td>extension to be used for dest files.</td>\n</tr>\n</tbody>\n</table>\n<p>Right aligned columns</p>\n<table>\n<thead>\n<tr>\n<th style="text-align:right">Option</th>\n<th style="text-align:right">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:right">data</td>\n<td style="text-align:right">path to data files to supply the data that will be passed into templates.</td>\n</tr>\n<tr>\n<td style="text-align:right">engine</td>\n<td style="text-align:right">engine to be used for processing templates. Handlebars is the default.</td>\n</tr>\n<tr>\n<td style="text-align:right">ext</td>\n<td style="text-align:right">extension to be used for dest files.</td>\n</tr>\n</tbody>\n</table>\n<h2>Links</h2>\n<p><a href="http://dev.nodeca.com">link text</a></p>\n<p><a href="http://nodeca.github.io/pica/demo/" title="title text!">link with title</a></p>\n<p>Autoconverted link https://github.com/nodeca/pica (enable linkify to see)</p>\n<h2>Images</h2>\n<p><img src="https://octodex.github.com/images/minion.png" alt="Minion">\n<img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" title="The Stormtroopocat"></p>\n<p>Like links, Images also have a footnote style syntax</p>\n<p><img src="https://octodex.github.com/images/dojocat.jpg" alt="Alt text" title="The Dojocat"></p>\n<p>With a reference later in the document defining the URL location:</p>\n<h2>Plugins</h2>\n<p>The killer feature of <code>markdown-it</code> is very effective support of\n<a href="https://www.npmjs.org/browse/keyword/markdown-it-plugin">syntax plugins</a>.</p>\n<h3><a href="https://github.com/markdown-it/markdown-it-emoji">Emojies</a></h3>\n<blockquote>\n<p>Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:</p>\n<p>Shortcuts (emoticons): :-) :-( 8-) ;)</p>\n</blockquote>\n<p>see <a href="https://github.com/markdown-it/markdown-it-emoji#change-output">how to change output</a> with twemoji.</p>\n<h3><a href="https://github.com/markdown-it/markdown-it-sub">Subscript</a> / <a href="https://github.com/markdown-it/markdown-it-sup">Superscript</a></h3>\n<ul>\n<li>19^th^</li>\n<li>H~2~O</li>\n</ul>\n<h3><a href="https://github.com/markdown-it/markdown-it-ins">&lt;ins&gt;</a></h3>\n<p>++Inserted text++</p>\n<h3><a href="https://github.com/markdown-it/markdown-it-mark">&lt;mark&gt;</a></h3>\n<p>==Marked text==</p>\n<h3><a href="https://github.com/markdown-it/markdown-it-footnote">Footnotes</a></h3>\n<p>Footnote 1 link[^first].</p>\n<p>Footnote 2 link[^second].</p>\n<p>Inline footnote^[Text of inline footnote] definition.</p>\n<p>Duplicated footnote reference[^second].</p>\n<p>[^first]: Footnote <strong>can have markup</strong></p>\n<pre><code>and multiple paragraphs.\n</code></pre>\n<p>[^second]: Footnote text.</p>\n<h3><a href="https://github.com/markdown-it/markdown-it-deflist">Definition lists</a></h3>\n<p>Term 1</p>\n<p>:   Definition 1\nwith lazy continuation.</p>\n<p>Term 2 with <em>inline markup</em></p>\n<p>:   Definition 2</p>\n<pre><code>    { some code, part of Definition 2 }\n\nThird paragraph of definition 2.\n</code></pre>\n<p><em>Compact style:</em></p>\n<p>Term 1\n~ Definition 1</p>\n<p>Term 2\n~ Definition 2a\n~ Definition 2b</p>\n<h3><a href="https://github.com/markdown-it/markdown-it-abbr">Abbreviations</a></h3>\n<p>This is HTML abbreviation example.</p>\n<p>It converts &quot;HTML&quot;, but keep intact partial entries like &quot;xxxHTMLyyy&quot; and so on.</p>\n<p>*[HTML]: Hyper Text Markup Language</p>\n<h3><a href="https://github.com/markdown-it/markdown-it-container">Custom containers</a></h3>\n<p>::: warning\n<em>here be dragons</em>\n:::</p>\n',preview:"Advertisement :)\n\npica - high quality and fast image\n  resize in browser.\nbabelfish - developer friendly",dir:"content/pages/info",base:"bestuur.json",ext:".json",sourceBase:"bestuur.md",sourceExt:".md"}},k9zA:function(n,t,e){"use strict";e.r(t);var i=e("0iUn"),o=e("sLSF"),a=e("MI3g"),r=e("a7VT"),s=e("AT/M"),p=e("Tit0"),l=e("vYYK"),d=e("q1tI"),h=e.n(d),c=e("Sv8q"),u=function(n){function t(){var n,e;Object(i.default)(this,t);for(var o=arguments.length,p=new Array(o),d=0;d<o;d++)p[d]=arguments[d];return e=Object(a.default)(this,(n=Object(r.default)(t)).call.apply(n,[this].concat(p))),Object(l.a)(Object(s.default)(e),"state",{}),e}return Object(p.default)(t,n),Object(o.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var n=this.props.pageJson;return h.a.createElement(c.a,null,h.a.createElement("h1",null,n.title),h.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.bodyHtml}}))}}]),t}(d.Component);u.getInitialProps=function(n){var t=n.query;return{pageJson:e("FmIs")("./pages".concat(t.fullUrl,".json"))}},t.default=u},l3zr:function(n){n.exports={fileMap:{"content/pages/info/bestuur.json":{title:"Trainers",preview:"Advertisement :)\n\npica - high quality and fast image\n  resize in browser.\nbabelfish - developer friendly",dir:"content/pages/info",base:"bestuur.json",ext:".json",sourceBase:"bestuur.md",sourceExt:".md"},"content/pages/jeugd/trainers.json":{title:"Trainers",preview:"Trainers pagina",dir:"content/pages/jeugd",base:"trainers.json",ext:".json",sourceBase:"trainers.md",sourceExt:".md"}},sourceFileArray:["content/pages/info/bestuur.md","content/pages/jeugd/trainers.md"]}},pnbI:function(n){n.exports={title:"Trainers",bodyContent:"Trainers pagina",bodyHtml:"<p>Trainers pagina</p>\n",preview:"Trainers pagina",dir:"content/pages/jeugd",base:"trainers.json",ext:".json",sourceBase:"trainers.md",sourceExt:".md"}},vYYK:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var i=e("hfKm"),o=e.n(i);function a(n,t,e){return t in n?o()(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}}},[["1jS1","5d41","9da1"]]]);