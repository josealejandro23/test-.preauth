"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GildedRose = exports.Item = void 0;
class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}
exports.Item = Item;
class GildedRose {
    constructor(items = []) {
        this.items = items;
    }
    decreceQuality(item) {
        if (item.name !== ("Sulfuras, Hand of Ragnaros" && 'Conjured') && item.quality > 0)
            item.quality -= 1;
        if (item.name == 'Conjured' && item.quality > 0)
            item.quality -= 2;
    }
    increaseQuality(item) {
        if (item.quality < 50)
            item.quality += 1;
        if (item.name === "Backstage passes to a TAFKAL80ETC concert" && item.quality < 50 && item.sellIn < 11) {
            item.quality += 1;
            item.sellIn < 6 ? item.quality + 1 : item.quality;
        }
    }
    decreceSelIn(item) {
        item.sellIn -= 1;
    }
    decreceQualitySpecial(item) {
        if (item.name != ("Aged Brie" && "Backstage passes to a TAFKAL80ETC concert")) {
            this.decreceQuality(item);
        }
        else if (item.quality < 50)
            item.quality += 1;
        if (item.name === "Backstage passes to a TAFKAL80ETC concert")
            item.quality = 0;
    }
    updateQuality() {
        this.items.forEach((item) => {
            if (item.name !== ("Aged Brie" && "Backstage passes to a TAFKAL80ETC concert"))
                this.decreceQuality(item);
            else
                this.increaseQuality(item);
            if (item.name !== "Sulfuras, Hand of Ragnaros") {
                this.decreceSelIn(item);
            }
            if (item.sellIn < 0) {
                this.decreceQualitySpecial(item);
            }
        });
    }
}
exports.GildedRose = GildedRose;
