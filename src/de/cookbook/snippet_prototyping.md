# Prototypen

Unter den commonJS-Entwicklern ist dies bekannt als Prototyp einer Prototypenkette. (engl.: prototyping)

Diese funktionieren in alt:V **NICHT** nicht in mehreren Resourcen gleichzeitig. Die Prototypveränderung ist also in jeder Resource isoliert.

Wenn du kein Freund der Objektorientierten Entiwicklung bist könnte dir das verändern von Prototypen enorm helfen.

**Serverseitig**

```js
alt.Player.prototype.emitMeta = function emitMeta(key, value) {
    if (typeof value === 'function') {
        throw new Error(`Value cannot be a function. emitMeta.prototype`);
    }

    this.setMeta(key, value);
    alt.emitClient(this, 'meta:Emit', key, value);
};

alt.Player.prototype.init = function init() {
    this.data = {};
};

alt.Player.prototype.syncCash = function syncCash() {
    this.emitMeta('cash', this.data.cash);
};

alt.Player.prototype.setCash = function setCash(value) {
    if (isNaN(value)) {
        throw new Error(`Value is not a number. setCash.prototype`);
    }

    if (!this.data) {
        this.data = {};
    }

    this.data.cash = value;
    this.syncCash();
};

alt.Player.prototype.subCash = function subCash(value) {
    if (isNaN(value)) {
        throw new Error(`Value is not a number. subCash.prototype`);
    }

    if (!this.data) {
        this.data = {};
    }

    const absValue = Math.abs(parseFloat(value)) * 1;
    if (this.data.cash < absValue) {
        return false;
    }

    this.data.cash -= absValue;
    this.data.cash = Number.parseFloat(this.data.cash).toFixed(2) * 1;
    this.syncCash();
    return true;
};

alt.Player.prototype.addCash = function addCash(value) {
    if (isNaN(value)) {
        throw new Error(`Value is not a number. addCash.prototype`);
    }

    if (!this.data) {
        this.data = {};
    }

    const absValue = Math.abs(parseFloat(value));
    if (this.data.cash + absValue > 92233720368547757) {
        absValue = 92233720368547757;
    }

    this.data.cash += absValue;
    this.data.cash = Number.parseFloat(this.data.cash).toFixed(2) * 1;
    this.syncCash();
    return true;
};
```

## Beispiel

**Serverseitig**

```js
player.init();
player.emitMeta('test', true);
player.setCash(25);
player.subCash(5);
player.addCash(2);
```
