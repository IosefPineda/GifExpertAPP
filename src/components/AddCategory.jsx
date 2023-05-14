import { useState } from "react"

//En el componente se recibe el evento creado que se manda como prop y este, SE TIENE QUE DESESTRUCTURAR para que no te marque un error
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState([])

    //Función para leer el input del componente
    const onInputChange = (e)=>{
        setInputValue(e.target.value);
    }

    const searchGifs = (e)=>{
        e.preventDefault()

        //Primero se valida que no haya dulicados
        if(inputValue.trim().length <= 1) return;

        //Se ejecuta el evento recibido como prop desde el padre para enviarle el valor de la nueva categoría
        onNewCategory(inputValue.trim());
        setInputValue('')
    }

  return (
    <form onSubmit={searchGifs}>
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={ onInputChange }
         />
    </form>
  )
}

