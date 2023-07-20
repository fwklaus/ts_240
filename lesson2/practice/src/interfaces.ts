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

// Please create a TypeScript interface that can accurately describe the shape of this book object.


interface Author {
  firstName: string;
  lastName: string;
}

interface Book {
  title: string;
  author: Author;
  publblicationDate: number;
  genres: string[];
}
