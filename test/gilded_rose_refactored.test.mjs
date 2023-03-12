import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose_refactored.mjs";

describe("Gilded Rose coverage tests", () => {
  it("empty shop", () => {
    const gildedRose = new Shop();
    const items = gildedRose.updateQuality();
    expect(items.length).to.equal(0);
  });
});

describe("Gilded Rose foo quality", () => {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
  it("should foo with quality", () => {
    const gildedRose = new Shop([new Item("foo", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
  it("should foo with s-10 q10", () => {
    const gildedRose = new Shop([new Item("foo", -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8);
  });
  it("should foo with s1 q10", () => {
    const gildedRose = new Shop([new Item("foo", 1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(9);
  });
  it("should foo with s1 q50", () => {
    const gildedRose = new Shop([new Item("foo", 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(49);
  });
});

describe("Gilded Rose Conjured quality", () => {
  it("should Conjured", () => {
    const gildedRose = new Shop([new Item("Conjured", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
  it("should Conjured with quality", () => {
    const gildedRose = new Shop([new Item("Conjured", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
  it("should Conjured with quality", () => {
    const gildedRose = new Shop([new Item("Conjured", 0, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
  it("should Conjured with s-1 q10", () => {
    const gildedRose = new Shop([new Item("Conjured", -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(6);
  });
  it("should Conjured with s1 q10", () => {
    const gildedRose = new Shop([new Item("Conjured", 1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8);
  });
  it("should Conjured with s1 q50", () => {
    const gildedRose = new Shop([new Item("Conjured", 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(48);
  });
});

describe("Gilded Rose Aged Brie quality", () => {
  it("0 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(2);
  });
  it("0 49", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });
  it("0 50", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });
  it("1 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });
});

describe("Gilded Rose Backstage passes to a TAFKAL80ETC concert quality", () => {
  it("0 0", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
  it("11 0", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });
  it("10 0", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(2);
  });
  it("5 0", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(3);
  });
  it("6 0", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(2);
  });
  it("5 48", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });
  it("5 49", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });
  it("10 49", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });
  it("2 0", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(3);
  });
  it("sellin<1 should result in 0 quality", () => {
    for (let q=-50; q < 100; q++){
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);      
    }
  });
});

describe("Sulfuras, Hand of Ragnaros", () => {
  it("quality remains same", () => {
    for (let q=-10; q < 50; q++){
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, q)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(q);
    }
  });
  it("quality test", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(10);  
  });
  it("sellIn remains same", () => {
    for (let s=-10; s < 50; s++){
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", s, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(s);
    }
  });
});

describe("foo sellIn", () => {
  it("sellIn -1", () => {
    const s = 1
    const gildedRose = new Shop([new Item("foo", s, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(0);  
  });
});

describe("Conjured sellIn", () => {
  it("sellIn -1", () => {
    const s = 1
    const gildedRose = new Shop([new Item("Conjured", s, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(0);  
  });
});
