import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  //Se establece un hook personalizado para tener un código más limpio y reutilizable (para un custom hook se desestructura dentro de un objeto y no un arreglo como en un useState y siempre se debe usar la palabra "use" que lo identifica como un custom hook)
  const {images, isLoading} = useFetchGifs(category);


  return (
    <>
        <h2>{category}</h2>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
          {
            images.map( (images) => (
              <GifItem 
                key={images.id}
                //Para enviar todas las propiedades de una sola vez se usa el spread operatos para "esparcir las props" el elemento hijo
                {...images}
              />
            ))
          }
        </div>
    </>
  )
}

