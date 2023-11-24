const categories = document.getElementById("categories");
const categoryItem = categories.querySelector(`li.item`);
console.log(`Number of categories : ${categories}`);
categoryItem.forEach((categoryItem) => {
const categoryName = category.querySelector('h2').textContent;
const categoryElements = category.querySelectorAll('ul > li');
console.log(`Category: ${categoryName}`);
console.log(`Number of items in this category: ${categoryElements.length}`);
});

