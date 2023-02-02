import { createContext, useContext, useState } from "react";
import cities from "../data/data.json"; // cities JSON dosyamız. Dropwdown'a aktarıyoruz.

const AdvertContext = createContext(); // Adı ile birlikte context'imizi oluşturuyoruz.

export const AdvertProvider = ({ children }) => {
    const [advert, setAdvert] = useState([]); //API'dan çekeceğimiz veriler dizi halinde olduğu için dizi state'i oluşturduk.
    const [city, setCity] = useState(
      cities.find((item) => item.name === "İstanbul") //Dropdown'a varsayılan olarak İstanbul çıkması için find methodu ile cities json dosyamızdan çektik.
    );
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; //API'dan çektiğimiz dosyada date'i dönüştürdüğümüzde 0-6 arası gün seçecek. Ona göre buradan günü alacak.
    const value = { city, setCity, cities, advert, setAdvert, days }; // Burada context aracılığıyla aktarmak istediğimiz propsları aktardık.
    return (
      <AdvertContext.Provider value={value}>{children}</AdvertContext.Provider> // Children, context'imizin altındaki componentslere veri aktarımı sağlıyor.
    );
  };


  export const useAdvert = () => useContext(AdvertContext); // Daha kullanışlı hale getirmek için normalde her context kullanacağımızda useContext'i import etmek zorunda kalıyorduk. Bu sayede dışa aktararak sadece useAdvert'ı çağırmamız yeterli oluyor.
