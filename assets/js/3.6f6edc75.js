(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{356:function(e,t,s){e.exports=s.p+"assets/img/cmd_altvpkg.5c759b65.gif"},357:function(e,t,s){e.exports=s.p+"assets/img/vscode_entry.da9c2b21.png"},358:function(e,t,s){e.exports=s.p+"assets/img/cmd_loaded.d7cb8ca1.png"},359:function(e,t,s){e.exports=s.p+"assets/img/vscode_server_test.1453e7f8.png"},360:function(e,t,s){e.exports=s.p+"assets/img/vscode_client_test.aa03a20c.png"},411:function(e,t,s){"use strict";s.r(t);var n=s(25),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"installation-der-serverdateien"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation-der-serverdateien"}},[e._v("#")]),e._v(" Installation der Serverdateien")]),e._v(" "),n("h2",{attrs:{id:"voraussetzungen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#voraussetzungen"}},[e._v("#")]),e._v(" Voraussetzungen")]),e._v(" "),n("p",[e._v("Für die Programmierung und Bereitstellung eines alt:V Servers benötigst du folgende Dinge.")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://nodejs.org/en/download/current/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NodeJS 13+"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("GIT"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://altv.mp/#/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("alt:V Client"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"allgemeine-richtigstellungen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#allgemeine-richtigstellungen"}},[e._v("#")]),e._v(" Allgemeine Richtigstellungen")]),e._v(" "),n("p",[e._v("Die hier veröffentlichten Hilfestellungen erwarten, dass auf Windows programmiert und gearbeitet wird.")]),e._v(" "),n("ul",[n("li",[e._v("Du solltest wissen wie man mit der Eingabeaufforderung (CMD) oder Powershell umgeht.")]),e._v(" "),n("li",[e._v("Du solltest wissen wie man eine .exe Datei in der Eingabeaufforderung (CMD) oder Powershell ausführt.")]),e._v(" "),n("li",[e._v("Du solltest ein gutes Basiswissen in JavaScript haben.")])]),e._v(" "),n("p",[n("strong",[e._v("Wichtig")])]),e._v(" "),n("p",[e._v("Alle Codeblöcke mit dem Prefix "),n("code",[e._v("$")]),e._v(" sind dafür gemacht in der Eingabeaufforderung (CMD) oder Powershell ausgeführt zu werden.")]),e._v(" "),n("p",[n("strong",[e._v("Tue dies nicht!")]),e._v(" Mitkopieren des "),n("code",[e._v("$")]),e._v(" Prefix während des kopierens von Befehlen.")]),e._v(" "),n("h2",{attrs:{id:"installieren-des-altv-pkg-von-stuyk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installieren-des-altv-pkg-von-stuyk"}},[e._v("#")]),e._v(" Installieren des altv-pkg von Stuyk")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/stuyk/altv-pkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("altv-pkg"),n("OutboundLink")],1),e._v(" ist ein Hilfepaket, welches dir schnell und sicher alle benötigten Dateien von alt:V für Windows oder Linux bereitstellt. Dieses Paket enthält außerdem eine Beispielresource mit der du starten kannst.")]),e._v(" "),n("p",[e._v("Du kannst es über die Eingabeaufforderung oder Powershell installieren.")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g altv-pkg\n")])])]),n("p",[e._v("Solltest du Probleme haben das npm Paket Global zu installieren, solltest du die "),n("strong",[e._v("Powershell")]),e._v(" mit "),n("strong",[e._v("Administrationsrechten")]),e._v(" und folgendem Befehl ausführen.")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("$ Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted -Force"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),n("p",[e._v("Überprüfe, ob alles richtig installiert wurde. Mit folgendem Versioncheck.")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("$ altv-pkg --version\n")])])]),n("h2",{attrs:{id:"benutzen-des-altv-pkg"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#benutzen-des-altv-pkg"}},[e._v("#")]),e._v(" Benutzen des altv-pkg")]),e._v(" "),n("p",[e._v("Nach der Installation laden wir die Serverdateien von alt:V herunter.")]),e._v(" "),n("p",[e._v("Erstelle einen Ordner für deinen Server. Gehe mit der Eingabeaufforderung oder Powershell in das von dir erstellte Verzeichnis.")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("$ altv-pkg d release\n")])])]),n("p",[e._v("Dieser Befehl wird dazu führen, dass du danach gefragt wirst, welchen Spielmodus du erstellen möchtest.")]),e._v(" "),n("p",[e._v("Standardmäßig werden die Serverdateien und Resourcedateien automatisch in deinem aktuellen Verzeichnis erstellt.")]),e._v(" "),n("p",[e._v("Folge den Instruktionen.")]),e._v(" "),n("ul",[n("li",[e._v("Drücke "),n("strong",[e._v("N")]),e._v(", wenn du das Voice (Sprachkommunikation) installieren willst")]),e._v(" "),n("li",[e._v("Drücke "),n("strong",[e._v("Y")]),e._v(", für eine Beispielresource")])]),e._v(" "),n("p",[n("img",{attrs:{src:s(356),alt:""}})]),e._v(" "),n("h2",{attrs:{id:"verstehen-der-heruntergeladenen-dateien"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#verstehen-der-heruntergeladenen-dateien"}},[e._v("#")]),e._v(" Verstehen der heruntergeladenen Dateien")]),e._v(" "),n("p",[e._v("Es ist wichtig über ein paar Dateien und die Generelle Ordnerstruktur nach dem herunterladen zu sprechen. Hier sind ein paar Dateien aufgelistet die vorhanden sein sollten nachdem "),n("code",[e._v("altv-pkg d release")]),e._v(" ausgeführt wurde.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("|   altv-server.exe\n|   libnode.dll\n|   package-lock.json\n|   package.json\n|   server.cfg\n|   update.json\n|\n+---data\n|       vehmodels.bin\n|       vehmods.bin\n|\n+---modules\n|       js-module.dll\n|\n\\node_modules\n\\---resources\n    \\---example\n        |   resource.cfg\n        |\n        +---client\n        |       startup.js\n        |\n        \\---server\n                startup.js\n")])])]),n("h3",{attrs:{id:"altv-server-exe"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#altv-server-exe"}},[e._v("#")]),e._v(" altv-server.exe")]),e._v(" "),n("p",[e._v("Mit dieser ausführbaren Datei kannst du den Server starten. Über die Eingabeaufforderung (CMD) oder Powershell ist diese ebenfalls ausführbar.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ altv-server.exe\n")])])]),n("p",[e._v("Benutze die Tastenkombination "),n("code",[e._v("Ctrl + C")]),e._v(", um den Server zu stoppen.")]),e._v(" "),n("h3",{attrs:{id:"package-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[e._v("#")]),e._v(" package.json")]),e._v(" "),n("p",[e._v("Hier werden die "),n("code",[e._v("node_modules")]),e._v(" definiert die du benutzt. In diesen Ordner werden alle Pakete von NPM isntalliert, die du installierst. Sei dir bewusst, dass du clientseitig ohne einen Bundler keine npm-packages aus dem "),n("code",[e._v("node_modules")]),e._v(" Verzeichnis benutzen kannst.")]),e._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"altv-pkgserver"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"description"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Don\'t worry we made this package.json for you."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"main"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"index.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"update"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"altv-pkg d release"')]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"author"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"stuyk"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"module"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"prettier"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"printWidth"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("120")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"tabWidth"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"singleQuote"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"bracketSpacing"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"devDependencies"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"@altv/types-client"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"^1.1.1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"@altv/types-natives"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"^1.1.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"@altv/types-server"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"^1.4.2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"@altv/types-webview"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"^1.0.2"')]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),n("p",[e._v("Wichtige Informationen, die du aus obiger Struktur mitnehmen kannst sind:")]),e._v(" "),n("ul",[n("li",[e._v("Wir benutzen die "),n("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prettier Erweiterung für VSCode"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Wir benutzen "),n("code",[e._v('"type": "module"')]),e._v(", um den "),n("a",{attrs:{href:"https://www.w3schools.com/js/js_es6.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("ES6 Syntax"),n("OutboundLink")],1),e._v(" nutzen zu können.")]),e._v(" "),n("li",[e._v("Der Server wird aktualisiert, indem "),n("code",[e._v("$ npm run update")]),e._v(" aus dem Hauptverzeichnis ausgeführt wird.")])]),e._v(" "),n("p",[e._v("Dies ist der allgemeine Aufbau der package.json und funktioniert hier genauso wie in einem normalen NodeJS-Projekt.")]),e._v(" "),n("h3",{attrs:{id:"server-cfg"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#server-cfg"}},[e._v("#")]),e._v(" server.cfg")]),e._v(" "),n("p",[e._v("Aus dieser Konfigurationsdatei liest der Server aus, mit welchen Parametern er starten soll.")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("name: "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"TestServer"')]),e._v(",\nhost: "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.0.0.0"')]),e._v(",\nport: "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("7788")]),e._v(",\nplayers: "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1024")]),e._v(",\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#password: "verysecurepassword",')]),e._v("\nannounce: false,\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#token: no-token,")]),e._v("\ngamemode: "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Freeroam"')]),e._v(",\nwebsite: "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test.com"')]),e._v(",\nlanguage: "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"en"')]),e._v(",\ndescription: "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test"')]),e._v(",\ndebug: false,\nmodules: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"js-module"')]),e._v(",\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(",\nresources: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"example"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(",\ntags: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"customTag1"')]),e._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"customTag2"')]),e._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"customTag3"')]),e._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"customTag4"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),n("h4",{attrs:{id:"password"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[e._v("#")]),e._v(" password")]),e._v(" "),n("p",[e._v("Password ist ein optionaler Parameter. Auskommentiert wird mit "),n("code",[e._v("#")]),e._v(".")]),e._v(" "),n("h4",{attrs:{id:"token"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[e._v("#")]),e._v(" token")]),e._v(" "),n("p",[e._v("Token ist ein optionaler Parameter. Auskommentiert wird mit "),n("code",[e._v("#")]),e._v(". Den Token erhälst du nachdem du eine Nachricht an den alt:V Discord Bot gesendet hast.")]),e._v(" "),n("h4",{attrs:{id:"debug"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[e._v("#")]),e._v(" debug")]),e._v(" "),n("p",[e._v("Während der Entwicklung eines Servers ist zu empfehlen diesen Parameter auf "),n("code",[e._v("true")]),e._v(" zu setzen. Dies erlaubt dir, dich mit einem Server neuzuverbinden nachdem der Server neugestartet wurde. Mehr Informationen auf "),n("a",{attrs:{href:"https://wiki.altv.mp/Altv.cfg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Client Konfiguration"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h4",{attrs:{id:"resources"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" resources")]),e._v(" "),n("p",[e._v("Hier listest du alle Ordner auf, welche sich innerhalb des "),n("code",[e._v("/resources")]),e._v(" Ordners befinden. Alle Resourcen benötigen eine "),n("code",[e._v("resource.cfg")]),e._v(" innerhalb ihres Ordners, um durch den Server geladen werden zu können.")]),e._v(" "),n("p",[e._v("Dies ist die "),n("code",[e._v("resource.cfg")]),e._v(" Datei aus dem "),n("code",[e._v("/resources/example")]),e._v(" Ordner.")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("type: js,\nmain: server/startup.js,\nclient-main: client/startup.js,\nclient-files: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n\tclient/*\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(",\ndeps: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),n("p",[e._v("Der Haupteinstiegspunkt ist die "),n("code",[e._v("example")]),e._v(" resource in "),n("code",[e._v("/resources/example/server/startup.js")])]),e._v(" "),n("p",[e._v("Dasselbe gilt für die clientseitigen Dateien mit dem Unterschied, dass überall "),n("code",[e._v("client")]),e._v(" anstatt "),n("code",[e._v("server")]),e._v(" in den Pfaden stehen muss.")]),e._v(" "),n("h3",{attrs:{id:"data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[e._v("#")]),e._v(" /data")]),e._v(" "),n("p",[e._v("Dieser Ordner beinhaltet binäre Dateien, die uns definieren welche Fahrzeugnamen mit welchen Werten zusammengehören. Zum Beispiel enthalten diese Dateien, welche Tuningmöglichkeiten ein Fahrzeug hat. Diese werden nach heruntergeladen automatisch benutzt.")]),e._v(" "),n("h3",{attrs:{id:"modules"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[e._v("#")]),e._v(" /modules")]),e._v(" "),n("p",[e._v("Hier werden spezielle "),n("code",[e._v(".dll")]),e._v(" oder "),n("code",[e._v(".so")]),e._v(" Dateien für die verschiedensten Module, welche die Programmiersprachen verfügbar machen, abgelegt. Zum Beispiel JS, C#, Lua, etc. Diese Module sind normalerweise von Leuten erstellt, welche für alt:V entwickeln. Diese sind oft ein Produkt der Community.")]),e._v(" "),n("h3",{attrs:{id:"node-modules"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-modules"}},[e._v("#")]),e._v(" /node_modules")]),e._v(" "),n("p",[e._v("In diesen Ordner werden packages durch NPM installiert. Hier ist ein Beispiel, welches die Stanford Javascript Crypto Library von NPM installiert.")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i sjcl\n")])])]),n("h3",{attrs:{id:"resources-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#resources-2"}},[e._v("#")]),e._v(" /resources")]),e._v(" "),n("p",[n("code",[e._v("resources")]),e._v(" ist der Ordner an dem du Resourcen erstellt, welche durch die "),n("code",[e._v("server.cfg")]),e._v(" geladen werden können. Solltest du ein größeres Projekt planen, empfehle ich nur eine einzige Resource für den Code zu haben. Der Umgang damit ist einfacher und hat Performanzvorteile.")]),e._v(" "),n("h2",{attrs:{id:"offnen-deines-arbeitsbereiches"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#offnen-deines-arbeitsbereiches"}},[e._v("#")]),e._v(" Öffnen deines Arbeitsbereiches")]),e._v(" "),n("p",[e._v("Öffne in VS:Code deinen Ordner in dem du deinen alt:V Server installiert hast.")]),e._v(" "),n("p",[e._v("Dies sollte so aussehen wie auf dem folgendem Foto:")]),e._v(" "),n("p",[n("img",{attrs:{src:s(357),alt:""}})]),e._v(" "),n("p",[e._v("In "),n("code",[e._v("resources/example/startup.js")]),e._v(" kannst du starten deinen Code zu schreiben.")]),e._v(" "),n("p",[e._v("Stelle sicher, dass die "),n("code",[e._v("server.cfg")]),e._v(" die Resource namens "),n("code",[e._v("example")]),e._v(" in der "),n("code",[e._v("resources")]),e._v(" Sektion stehen hat.")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("resources: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"example"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(",\n")])])]),n("p",[e._v("Starte deinen Server in einer Eingabeaufforderung (CMD) oder Powershell, um zu überprüfen, ob dieser richtig gestartet ist.")]),e._v(" "),n("p",[n("img",{attrs:{src:s(358),alt:""}})]),e._v(" "),n("h2",{attrs:{id:"zum-server-verbinden"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zum-server-verbinden"}},[e._v("#")]),e._v(" Zum Server verbinden")]),e._v(" "),n("p",[e._v("Mit dem Server verbinden kannst du, in dem du den alt:V Client startest, auf Direkt verbinden drückst und folgende IP eingibst.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("127.0.0.1:7788\n")])])]),n("h2",{attrs:{id:"serverseitig"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#serverseitig"}},[e._v("#")]),e._v(" Serverseitig")]),e._v(" "),n("p",[e._v("Serverseitiger Code sollte im "),n("code",[e._v("server")]),e._v(" Ordner geschrieben werden.")]),e._v(" "),n("p",[e._v("Du musst zusätzlich noch die serverseitigen "),n("code",[e._v("types")]),e._v(" von alt:V importtieren.")]),e._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/// <reference types="@altv/types-server" />')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" alt "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'alt-server'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nalt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'test'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),n("p",[e._v("Dein serverseitiger Code sollte nun Autovervollständigung des Syntax unterstützen.")]),e._v(" "),n("p",[n("img",{attrs:{src:s(359),alt:""}})]),e._v(" "),n("h2",{attrs:{id:"clientseitig"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clientseitig"}},[e._v("#")]),e._v(" Clientseitig")]),e._v(" "),n("p",[e._v("Clientseitiger Code sollte im "),n("code",[e._v("client")]),e._v(" Ordner geschrieben werden.")]),e._v(" "),n("p",[e._v("Dies ist der einzige Bereich, in dem eine "),n("code",[e._v("native")]),e._v(" benutzbar ist.")]),e._v(" "),n("p",[e._v("Du musst zusätzlich noch die clientseitigen "),n("code",[e._v("types")]),e._v(" von alt:V importtieren.")]),e._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/// <reference types="@altv/types-client" />')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/// <reference types="@altv/types-natives" />')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" alt "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'alt-client'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" native "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'natives'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nalt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("You connected! Nice!")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),n("p",[e._v("Dein clientseitiger Code sollte nun Autovervollständigung des Syntax unterstützen.")]),e._v(" "),n("p",[n("img",{attrs:{src:s(360),alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);