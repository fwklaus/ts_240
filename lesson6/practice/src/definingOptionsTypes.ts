// nullish coalescing operator
// function calculateRectangleArea(
//   width: number,
//   height: number,
//   options: { unit?: string } = {}
// ): string {
//   const unit = options.unit ?? "sq. units";
//   const area = width * height;
//   return `${area} ${unit}`;
// }

// destructuring the options object in the function signature
// function calculateRectangleArea(
//   width: number,
//   height: number,
//   { unit = "sq. units" }: { unit?: string } = {}
// ): string {
//   const area = width * height;
//   return `${area} ${unit}`;
// }

// define separate type for the options object 
// interface RectangleOptions {
//   unit?: string;
// }

// function calculateRectangleArea(
//   width: number,
//   height: number,
//   options: RectangleOptions = {}
// ): string {
//   const unit = options.unit ?? "sq. units";
//   const area = width * height;
//   return `${area} ${unit}`;
// }

// 1
// 0

// 2
// write function called formatName
  // takes options objet of type NameOptions as a parameter
  // return the formatted name as a string
    // title (if provided), first name, last name
// use nullish coalescing operator to handle optional properties and provide default values for firstName and lastName

// type NameOptions = {
//   firstName?: string;
//   lastName?: string;
//   title?: string;
// };

// function formatName(options: NameOptions): string {
//   let firstName = options.firstName ?? "John";
//   let lastName = options.lastName ?? "Doe";
//   let title = options.title ?? "";

//   if (title) {
//     return `${title} ${firstName} ${lastName}`;
//   } else {
//     return `${firstName} ${lastName}`;
//   }
// }

// const formattedName = formatName({
//   firstName: "Jane",
//   lastName: "Smith",
//   title: "Dr.",
// });

// console.log(formattedName); // "Dr. Jane Smith"
// console.log(formatName({})); // John Doe

// 3
// refactor previous answer
// provide default vales direcly in the options parameter

type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
};

function formatName({firstName = "John", lastName = "Doe", title}: NameOptions): string {
  if (title) {
    return `${title} ${firstName} ${lastName}`;
  } else {
    return `${firstName} ${lastName}`;
  }
}

const formattedName = formatName({
  firstName: "Jane",
  lastName: "Smith",
  title: "Dr.",
});

console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe
