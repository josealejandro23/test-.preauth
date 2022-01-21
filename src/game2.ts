export class Item {
   name: string;
   sellIn: number;
   quality: number;

   //se establece un tipo de datos para los argumentos del constructor
   constructor(name: string, sellIn: number, quality: number) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
   }
}

export class TNormalItem extends Item {
   //se sobrecarga el constructor para generar las propiedades
   constructor(name:string, sellin:number, quality:number) {
      super(name, sellin, quality);
      this.updateQuality();
   }
   //merma de la calidad para objetos normales
   updateQuality(){
      if(this.quality > 0) 
         this.quality -= 1;
       if(this.sellIn < 0 )
         this.quality -= 1;
   }
}
export class TPassesItem extends TNormalItem {
   constructor(name: string, sellin: number, quality: number) {
      super(name, sellin, quality);
   }
   //ajuste de la calidad considerando los días antes del evento
   updateQuality() {
      if (this.quality >= 50) return;
      this.quality += 1;
      if (this.sellIn < 11) this.quality += 1;
      if (this.sellIn < 6) this.quality += 1;
   }
}
export class TAgedBrieItem extends TNormalItem {
   constructor(name: string, sellin: number, quality: number) {
      super(name, sellin, quality);
   }
   
   updateQuality() {
      if (this.quality >= 50) return;
      this.quality += 1;
   }
}
export class TSpecialItem extends TNormalItem {
   constructor(name: string, sellin: number, quality: number) {
      super(name, sellin, quality);
   }
   //estos items tienen calidad constante
   updateQuality() {
      this.quality = 80;
   }
}

export class GildedRose {
   items: Array<Item>;

   constructor(items = [] as Array<Item>) {
      this.items = items;
      //se llama a la función que evalúa la calidad de los productos
      this.updateQuality();
   }

   updateQuality() {
      //se cambia a un ciclo foreach que es más elegante y claro para trabajar
      this.items.forEach((item,i) => {
         let object : Item;
         //se recorren los items y se crea el objeto correspondiente
         if (item.name === "Aged Brie") 
            object = new TAgedBrieItem(item.name, item.sellIn, item.quality);
         else if (item.name === "Backstage passes to a TAFKAL80ETC concert")
            object = new TPassesItem(item.name, item.sellIn, item.quality);
         else if(item.name === 'Sulfuras')
            object = new TSpecialItem(item.name, item.sellIn, item.quality);
         else  
            object = new TNormalItem(item.name, item.sellIn, item.quality);
         //se reemplaza el item original por el recalculado
         this.items[i] = object;
      });
   }
}

//array de items para verificar pruebas
let items: Array<Item> = [
   { name: "Sulfuras", sellIn: 0, quality: 80 },
   { name: "Aged Brie", sellIn: 10, quality: 49 },
   { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 3, quality: 38 },
   { name: "Other Item", sellIn: 10, quality: 20 },
];

const gilden = new GildedRose(items);
// gilden.updateQuality();
console.log(items);