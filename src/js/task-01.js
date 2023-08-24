const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elementsList = category.querySelectorAll("ul li");
  const numberOfElements = elementsList.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberOfElements}\n`);
});

/////

// //Obtener la lista de categorías
// const categoriesList = document.getElementById("categories");
// // Obtener los elementos li.item en la lista
// const categories = categoriesList.getElementsByClassName("item");

// // Contar y mostrar el número de categorías
// console.log(`Number of categories:" ${categories.length}`);

// // Recorrer cada categoría y mostrar el título y el número de elementos
// for (let i = 0; i < categories.length; i++) {
//   const category = categories[i];
//   const title = category.getElementsByTagName("h2")[0].textContent;
//   const elements = category.getElementsByTagName("li");

//   console.log("Category:", title);
//   console.log("Elements:", elements.length);
// }
