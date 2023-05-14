import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

const GifExpertApp = () => {

  //Se establece el useState para que la info permanezca en cada cambio del DOM
  const [categories, setCategories] = useState(['sunset'])
  
  //Función que añade la nueva categoría
  const onAddCategory = (newCategory)=>{

    //Instrucción para validar que no se duplique una nueva categoría
    if(categories.includes(newCategory)) return;

    //Si se valida que no hay categorías duplicadas entonces se agrega la nueva
    setCategories([newCategory, ...categories]);

  };

  return (
    <>

      <h1>Gif Expert APP</h1>

      <AddCategory 
        //En el componente se pasa como prop la fn que añade la nueva categoría, para ello, se crea un evento en el que el nombre queda a discreción pero, añadiendo el "on" ya que, hace referencia a un evento
        onNewCategory={ onAddCategory }
      />

      {
        categories.map( (category) => (
          <GifGrid 
            key={category} 
            category={ category }
          />
        ))
      }

    </>
  )
}

export default GifExpertApp