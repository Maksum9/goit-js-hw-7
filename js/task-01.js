const categories = document.getElementById("categories");
const categoryItem = categories.querySelector(`li.item`);
console.log(`Number of categories : ${categories}`);
categoryItem.forEach((categoryItem) => {
const categoryTitle = categoryItem.querySelector(`ul > li`).length;
console.log(`Category: ${categoryTitle}`);
console.log(`Number of items in this category: ${categoryItemsCount}`);
});

