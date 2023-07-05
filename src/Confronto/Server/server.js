// server.js
import { createServer } from "miragejs";
import honor from '../../confronto images/honor.png'
import iphone11 from '../../confronto images/iphone 11.png'
import iphone11pro from '../../confronto images/iphone 11 pro.png'
import oneplus from '../../confronto images/one plus 7t pro..png'
import lgg8 from '../../confronto images/lg g8.png'

export const server = createServer({
  routes() {
    this.namespace = "api"; // Set the namespace for your API routes

    this.get("/products", () => [
      {
        id: "B07V7ZWFJB",
        brand: "Honor",
        model: "Honor 20",
        rear_camera: "48MP + 16MP + 2MP + 2MP",
        front_camera: "32MP",
        screen: "6.25inch FHD",
        storage: "128gb",
        os: "Android v9",
        cost: 291.8,
        image: honor,
      },
      {
        id: "B07XVLW7YK",
        brand: "Apple",
        model: "iPhone 11 (128GB) - Black",
        rear_camera: "12MP ultra wide & wide cameras",
        front_camera: "12MP TrueDepth camera",
        screen: "6.1-inch liquid Retina HD",
        storage: "128gb",
        os: "Apple iOS",
        cost: 858.21,
        image: iphone11,
      },
      {
        id: "B07XVMJF2D",
        brand: "Apple",
        model: "iPhone 11 Pro (256GB) - Gold",
        rear_camera: "Triple-camera system with 12MP",
        front_camera: "12MP TrueDepth camera",
        screen: "5.8-inch Super Retina XDR",
        storage: "256gb",
        os: "Apple iOS",
        cost: 1506.16,
        image: iphone11pro,
      },
      {
        id: "B082P36B9X",
        brand: "LG",
        model: "LG G8X - Dual Screen (Aurora Black)",
        rear_camera: "12MB OIS + 13MP Wide",
        front_camera: "32MP",
        screen: "6.4-inch Dual OLED",
        storage: "128gb",
        os: "Android 9 (Pie)",
        cost: 661.18,
        image: lgg8,
      },
      {
        id: "B07DJ8K2KT",
        brand: "OnePlus",
        model: "OnePlus 7T Pro (256GB)",
        rear_camera: "48MP + 16MP + 8MP Triple camera",
        front_camera: "16MP",
        screen: "6.67-inch 90Hz fluid display",
        storage: "256gb",
        os: "Oxygen OS",
        cost: 714.07,
        image: oneplus,
      },
    ]);
  },
});

export default server;
