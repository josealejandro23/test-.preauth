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

export class GildedRose {
   items: Array<Item>;

   constructor(items = [] as Array<Item>) {
      this.items = items;
      //se llama a la función que evalúa la calidad de los productos
      this.updateQuality();
   }

   //función que baja la calidad de un item 
   private decreceQuality(item: Item) {
      //los elementos que tengan calidad positiva serán decrecidos siempre que no sean especiales
      if (item.name !== ("Sulfuras, Hand of Ragnaros" && 'Conjured')  && item.quality > 0) 
         item.quality -= 1;
      //elementos conjurados pierden calidad por 2
      if(item.name == 'Conjured' && item.quality > 0)
         item.quality -= 2;
   }

   //función para aumentar la caidad de un producto
   private increaseQuality(item: Item) {
      if (item.quality < 50) item.quality += 1;
      //manejo de la calidad para entradas al concierto
      if (item.name === "Backstage passes to a TAFKAL80ETC concert" && item.quality < 50 && item.sellIn < 11) {
         item.quality +=1 ;
         //se valida que queden menos de 6 días para el concierto y se suma otro punto de calidad
         item.sellIn < 6 ? item.quality + 1 : item.quality;
      }
   }

   //función para disminuir la calidad de un producto
   private decreceSelIn(item: Item) {
      item.sellIn -= 1;
   }

   //función que disminuye la calidad de artículos especiales
   private decreceQualitySpecial(item: Item) {
      //se disminuye la calidad del elemento siempre que no tenga trato especial
      if (item.name != ("Aged Brie" && "Backstage passes to a TAFKAL80ETC concert")) {
         this.decreceQuality(item);
      } else if (item.quality < 50) item.quality += 1;
      //se reduce a 0 la calidad de los pases de concierto
      if (item.name === "Backstage passes to a TAFKAL80ETC concert") item.quality = 0;
   }

   updateQuality() {
      //se cambia a un ciclo foreach que es más elegante y claro para trabajar
      this.items.forEach((item) => {
         if (item.name !== ("Aged Brie" && "Backstage passes to a TAFKAL80ETC concert"))
            this.decreceQuality(item);
         else this.increaseQuality(item);

         if (item.name !== "Sulfuras, Hand of Ragnaros") {
            this.decreceSelIn(item);
         }

         if (item.sellIn < 0) {
            this.decreceQualitySpecial(item);
         }
      });
   }
}
