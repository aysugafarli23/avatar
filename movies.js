//Postman 
const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 3900|1VVxTF66PlWZXlf9aqfZBvs5mm5g5AhEmkoGBelz");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://zylalabs.com/api/942/imdb+top+rated+films+api/761/fetch+top+imdb+films", requestOptions)
  .then((response) => response.json())
  .then((result) => result
  .map((data)=>console.log(`${data.rank}. ${data.title}`)));

  //İstənilən nəticəni verir ,amma yenə də kodun optimizasiyası maraqlıdır)




  // Əlavə olaraq JSON-LA ÇAĞIRANDA isə

// fetch('./movies.json')
// .then(res => res.json())
// .then(data => data
//   .map((movie)=>console.log(`Top filmimizin adı: '${movie.title}' və siyahıda sırası: ${movie.rank}`)))

