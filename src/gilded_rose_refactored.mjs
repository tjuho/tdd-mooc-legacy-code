export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name == "Sulfuras, Hand of Ragnaros"){
        continue;
      }
      this.items[i].sellIn -= 1;
      if (this.items[i].name == "Aged Brie"){
        if (this.items[i].sellIn < 0){
          this.items[i].quality += 2;
        } else {
          this.items[i].quality += 1;
        }
      } else if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"){
        if (this.items[i].sellIn < 1){
          this.items[i].quality = 0;
        } else if (this.items[i].sellIn < 5){
          this.items[i].quality += 3;
        } else if (this.items[i].sellIn < 10){
          this.items[i].quality += 2
        } else {
          this.items[i].quality += 1;
        }
      } else {
        let multiplier = 1;
        if (this.items[i].name == "Conjured"){
          multiplier = 2;
        }
        if (this.items[i].sellIn < 0){
          this.items[i].quality -= 2*multiplier;
        } else {
          this.items[i].quality -= 1*multiplier;
        }
      }
      if (this.items[i].quality > 49){
        this.items[i].quality = 50;
      } else if (this.items[i].quality < 1){
        this.items[i].quality = 0;
      }
    }
    return this.items;
  }
}