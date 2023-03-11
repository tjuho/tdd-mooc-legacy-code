import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose coverage tests", () => {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });
  it("should foo with quality", () => {
    const gildedRose = new Shop([new Item("foo", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });
  it("should foo with s-10 q10", () => {
    const gildedRose = new Shop([new Item("foo", -10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });
  it("should Aged Brie", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
  });
  it("should Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
  });
});

describe("Gilded Rose quali", () => {
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
    const gildedRose = new Shop([new Item("foo", -10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8);
  });
  // it("should Aged Brie", () => {
    // const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    // const items = gildedRose.updateQuality();
    // expect(items[0].name).to.equal("Aged Brie");
  // });
  // it("should Backstage passes to a TAFKAL80ETC concert", () => {
    // const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)]);
    // const items = gildedRose.updateQuality();
    // expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
  // });
});
