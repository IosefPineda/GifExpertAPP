import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"

//En los custom hooks que no regresan un elemento jsx y solo hacen uso de elementos js se usa la extensión js, como en este caso
export const useFetchGifs = (category) => {

    //Se crea un estado para preservar los gifs que ya se obtuvieron
    const [images, setImages] = useState([]);
    
    //Se crea un estado para renderizar el loading
    const [isLoading, setIsLoading] = useState(true);

    //función que hace la petición fetch y va acumulando en el estado esos gifs
    const getImages = async ()=>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    //Se usa el 'useEffect()' para disparar una función solo una ocasión y evitar la rerenderización
    useEffect( ()=> {
        getImages();
    }, []);


    //Toda la lógica anterior se concentra en el siguiente objeto y esta es la data que recibe el padre para crear el componente
    return{
        //Acuerdate que cuando la llave y el valor es el mismo solo se pone una vez, pero lo dejé para que se entienca que se recibe la data del código de arriba y se guarda en este objeto para enviarlo al padre
        images: images,
        isLoading: isLoading,
    }
}
