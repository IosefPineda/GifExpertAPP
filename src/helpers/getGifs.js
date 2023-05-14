export const getGifs = async (category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Sml3FxAIAHMcu7okFA1I9AYRpvDTKWa2&q=
    ${ category }&limit=6`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
  
    return gifs
  
  };