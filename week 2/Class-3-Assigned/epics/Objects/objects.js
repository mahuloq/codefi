let barnes = {
  title: "Way of Kings",
  author: "Brandon Sanderson",
  pubyear: 2010,
  genre: "fantasy",
};

addTitle = (text) => (barnes.title = text);

AddAuthor = (text) => (barnes.author = text);

AddPub = (text) => (barnes.pubyear = text);

AddGenre = (text) => (barnes.genre = text);

delTitle = () => delete barnes.title;

delAuthor = () => delete barnes.author;

delPub = () => delete barnes.pubyear;

delGenre = () => delete barnes.genre;

// Doesnt work
// addNew = (newKey, newProp) => {
//   let key = newKey;
//   barnes.key = newProp;
// };

// let barnesar = [
//   {
//     title: "Way of Kings",
//     author: "Brandon Sanderson",
//     pubyear: 2010,
//     genre: "fantasy",
//   },
// ];

// let bookAdd = function () {
//    prompt("Enter Title") = titles;
//    prompt("Enter Author") authors;
//  prompt("Enter Publication Year" =  pubyears;
//   prompt("Enter Genre") = genres;

//   barnesar.push({
//     title: titles,
//     author: authors,
//     pubyear: pubyears,
//     genre: genres,
//   });
// };
