import "./App.css";
import "./categories.style.scss";

import Directory from "./component/directory/directory.component";
function App() {
  const categories = [
    {
      id: 1,
      title: "Graphics Card",
      imageUrl:
        "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/graphics-cards/geforce-ada-4090-web-og-1200x630@2x.jpg",
    },
    {
      id: 2,
      title: "Motherboard",
      imageUrl:
        "https://cdna.artstation.com/p/assets/images/images/058/508/114/large/alphalilly-motherboardart-alphalilly-chromatic-blurred.jpg?1674322507",
    },
    {
      id: 3,
      title: "Processor",
      imageUrl:
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvY2Vzc29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 4,
      title: "Monitor",
      imageUrl:
        "https://images.unsplash.com/photo-1581013793663-dedd7e462266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGMlMjBtb25pdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 5,
      title: "Peripherals",
      imageUrl:
        "https://e1.pxfuel.com/desktop-wallpaper/215/372/desktop-wallpaper-gaming-accessories-how-to-make-your-gaming-setup-better-computer-accessories.jpg",
    },
  ];

  return (
    <Directory categories={categories}></Directory>
  );
}

export default App;
