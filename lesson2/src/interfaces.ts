// 1
const book = {
  title: "The Great Gatsby",
  author: {
    firstName: "F. Scott",
    lastName: "Fitzgerald",
  },
  publicationDate: 1925,
  genres: ["Tragedy", "Realism"],
};

interface Author {
  firstName: string,
  lastName: string,
}

interface Book {
  title: string,
  author: Author,
  publicationDate: number,
  genres: Array<string>,
}