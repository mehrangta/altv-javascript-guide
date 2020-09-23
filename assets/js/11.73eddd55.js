(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{314:function(t,a,s){t.exports=s.p+"assets/img/functions.3cb0e30f.png"},315:function(t,a,s){t.exports=s.p+"assets/img/classes.7469c4fa.png"},448:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"introducere-in-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introducere-in-api"}},[t._v("#")]),t._v(" Introducere în API")]),t._v(" "),n("p",[t._v("API-ul este locul în care puteți obține majoritatea informațiilor cu privire la funcționalitatea și codul scris pentru alt:V.")]),t._v(" "),n("p",[t._v("Singurul avertisment este că există puține exemple privind utilizarea majorității funcțiilor.")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://altmp.github.io/altv-typings/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://altmp.github.io/altv-typings/"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"navigarea-prin-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#navigarea-prin-api"}},[t._v("#")]),t._v(" Navigarea prin API")]),t._v(" "),n("p",[t._v("Când citiți API-ul, există două secțiuni. "),n("strong",[t._v("(Click pe linkul de mai sus)")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("alt-server")]),t._v(" "),n("ul",[n("li",[t._v("Referindu-ne la toate funcționalitățile disponibile în server-side.")])])]),t._v(" "),n("li",[n("p",[t._v("alt-client")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Referindu-ne la toate funcționalitățile disponibile în client-side.")])]),t._v(" "),n("li",[n("p",[t._v("Adesea folosește funționalități native/din joc.")])]),t._v(" "),n("li",[n("p",[t._v("Afectează doar clientul jucătorului.")])])])])]),t._v(" "),n("h2",{attrs:{id:"citirea-api-ului"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#citirea-api-ului"}},[t._v("#")]),t._v(" Citirea API-ului")]),t._v(" "),n("p",[t._v("Când vă uitați la API, toți parametrii și tipurile lor sunt definite pentru funcții și clase.")]),t._v(" "),n("p",[t._v("Iată un exemplu privind funcția "),n("code",[t._v("alt.on")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventName"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"playerConnect"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("listener")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("player"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Player"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n")])])]),n("p",[t._v("Citirea acestui lucru poate fi puțin confuză la început dacă nu știți cum să citiți API-urile.")]),t._v(" "),n("ul",[n("li",[t._v("Numele evenimenului este apelat cu "),n("code",[t._v("on")])]),t._v(" "),n("li",[t._v("Primul parametru este "),n("code",[t._v("playerConnect")])]),t._v(" "),n("li",[t._v("Al doilea parametru este un ascultător sau o funcție de tip callback. Și este atribuit tipului "),n("code",[t._v("alt.Player")]),t._v(".\n"),n("ul",[n("li",[t._v("Puteți face click pe Player pentru a vedea ce proprietăți oferă.")]),t._v(" "),n("li",[t._v("Unele dintre aceste propriețăți sunt "),n("code",[t._v("name")]),t._v(", "),n("code",[t._v("ip")]),t._v(", etc.")])])]),t._v(" "),n("li",[n("code",[t._v(":void")]),t._v(" înseamnă că acest lucru nu returnează nimic.")])]),t._v(" "),n("p",[t._v("Iată aceeași funcție în acțiune.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("alt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'playerConnect'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handlePlayerConnect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handlePlayerConnect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("player")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("player"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v(" connected to the server.")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"folosirea-api-ului"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#folosirea-api-ului"}},[t._v("#")]),t._v(" Folosirea API-ului")]),t._v(" "),n("p",[t._v("În general aveți câteva tipuri diferite de variabile, funcții, clase, etc.")]),t._v(" "),n("p",[t._v("Să vorbim despre ceea ce înseamnă fiecare dintre aceastea și cum arată în cod.")]),t._v(" "),n("h3",{attrs:{id:"functii"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#functii"}},[t._v("#")]),t._v(" Funcții")]),t._v(" "),n("p",[t._v("Funcțiile funcționează întotdeauna ca funcții (duh), iar API-ul are de obicei o secțiune pentru ele.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(314),alt:""}})]),t._v(" "),n("p",[t._v("Iată un exemplu de cum ar putea arăta utilizarea uneia dintre funcțiile de mai sus.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("alt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hello. This triggered after 5 seconds.")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"clasele"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clasele"}},[t._v("#")]),t._v(" Clasele")]),t._v(" "),n("p",[t._v("Clasele funcționează ca cele normale din JavaScript. Depinde doar de modul în care importați "),n("code",[t._v("alt-server")]),t._v(" sau "),n("code",[t._v("alt-client")]),t._v(".")]),t._v(" "),n("p",[t._v("Să presupunem că aveți "),n("code",[t._v("alt")]),t._v(" ca prefix pentru toate.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(315),alt:""}})]),t._v(" "),n("p",[t._v("Rețineți că nu toate clasele sunt accesibile sau pot fi create.")]),t._v(" "),n("p",[t._v("Iată un exemplu de cum ar putea arăta utilizarea uneia dintre clasele de mai sus.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pos "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("alt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vehicle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("alt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vehicle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'infernus'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" shape "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("alt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ColshapeCylinder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"proprietati"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proprietati"}},[t._v("#")]),t._v(" Proprietăți")]),t._v(" "),n("p",[t._v("O proprietate va exista de obicei în interiorul unei calse. Sunt accesibile "),n("strong",[t._v("fără")]),t._v(" paranteze.")]),t._v(" "),n("p",[t._v("De asemenea, sunt lizibile, deci nu trebuie întotdeauna să le setați.")]),t._v(" "),n("p",[t._v("Iată un exemplu de utilizare a unei mașini.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vehicle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("alt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vehicle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'infernus'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vehicle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("engineOn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vehicle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("engineOn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"metode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#metode"}},[t._v("#")]),t._v(" Metode")]),t._v(" "),n("p",[t._v("O metodă va exista de obicei în interiorul unei clase. Sunt accesibile cu paranteze.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vehicle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("alt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vehicle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'infernus'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vehicle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDoorState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvehicle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setArmoredWindowHealth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);