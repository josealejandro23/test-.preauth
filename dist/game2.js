"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GildedRose = exports.TSpecialItem = exports.TAgedBrieItem = exports.TPassesItem = exports.TNormalItem = exports.Item = void 0;
class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}
exports.Item = Item;
class TNormalItem extends Item {
    constructor(name, sellin, quality) {
        super(name, sellin, quality);
        this.updateQuality();
    }
    updateQuality() {
        if (this.quality > 0)
            this.quality -= 1;
        if (this.sellIn < 0)
            this.quality -= 1;
    }
}
exports.TNormalItem = TNormalItem;
class TPassesItem extends TNormalItem {
    constructor(name, sellin, quality) {
        super(name, sellin, quality);
    }
    updateQuality() {
        if (this.quality >= 50)
            return;
        this.quality += 1;
        if (this.sellIn < 11)
            this.quality += 1;
        if (this.sellIn < 6)
            this.quality += 1;
    }
}
exports.TPassesItem = TPassesItem;
class TAgedBrieItem extends TNormalItem {
    constructor(name, sellin, quality) {
        super(name, sellin, quality);
    }
    updateQuality() {
        if (this.quality >= 50)
            return;
        this.quality += 1;
    }
}
exports.TAgedBrieItem = TAgedBrieItem;
class TSpecialItem extends TNormalItem {
    constructor(name, sellin, quality) {
        super(name, sellin, quality);
    }
    updateQuality() {
        this.quality = 80;
    }
}
exports.TSpecialItem = TSpecialItem;
class GildedRose {
    constructor(items = []) {
        this.items = items;
        this.updateQuality();
    }
    updateQuality() {
        this.items.forEach((item, i) => {
            let object;
            if (item.name === "Aged Brie")
                object = new TAgedBrieItem(item.name, item.sellIn, item.quality);
            else if (item.name === "Backstage passes to a TAFKAL80ETC concert")
                object = new TPassesItem(item.name, item.sellIn, item.quality);
            else if (item.name === 'Sulfuras')
                object = new TSpecialItem(item.name, item.sellIn, item.quality);
            else
                object = new TNormalItem(item.name, item.sellIn, item.quality);
            this.items[i] = object;
        });
    }
}
exports.GildedRose = GildedRose;
let items = [
    { name: "Sulfuras", sellIn: 0, quality: 80 },
    { name: "Aged Brie", sellIn: 10, quality: 49 },
    { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 3, quality: 38 },
    { name: "Other Item", sellIn: 10, quality: 20 },
];
const gilden = new GildedRose(items);
console.log(items);
//# sourceMappingURL=game2.js.map