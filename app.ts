console.log("Library Management System");
class Book {
  constructor(
    public title: string,
    public author: string,
    public ISBN: string,
    public category: Category
  ) {}
}
class Category {
  constructor(public name: string, public description: string) {}
}
class Ebook extends Book {
  constructor(
    t: string,
    a: string,
    I: string,
    c: Category,
    public fileSize: string,
    public format: string
  ) {
    super(t, a, I, c);
  }
}
class PrintedBook extends Book {
  constructor(
    t: string,
    a: string,
    I: string,
    c: Category,
    public pageCount: number,
    public Publisher: string
  ) {
    super(t, a, I, c);
  }
}
class Library {
  private books: Book[] = [];
  private categories: Category[] = [];
  addBook(book: Book) {
    this.books.push(book);
  }
  removeBook(ISBN: string) {
    this.books = this.books.filter((book) => book.ISBN !== ISBN);
  }
  findBook(ISBN: string) {
    return this.books.find((book) => book.ISBN === ISBN);
  }
  listBooks() {
    return this.books;
  }
  addCategory(category: Category) {
    this.categories.push(category);
  }
  listCategories() {
    return this.categories;
  }
}
let Allama_iqbal_library = new Library();
let Historical = new Category("History", "This is a historical book");
let Scientific = new Category("Science", "This is a scientific book");
let Poetry = new Category("Poetry", "This is aPoetry book");
let Novels = new Category("Novels", "This  is a novels book");
let ComputerScience = new Category(
  "Computer Science",
  "This is a Computer Science book"
);
let ProgramingLangugae = new Category(
  "Programing Langugae",
  "This is a programing language book"
);
let UrduLiterature = new Category(
  "Urdu Literature",
  "This is an Urdu Literature book"
);
let EnglishLitrature = new Category(
  "English Litrature",
  "This English Litrature book"
);
let book1 = new Ebook(
  "History of Islam",
  "Dr Israr ul Haq",
  "6464-38hty",
  Historical,
  " 230 Mb",
  " reflowable layout "
);
let book2 = new PrintedBook(
  "History of Pakistan",
  "Dr Abrar Husain",
  "364-hyg89",
  Historical,
  200,
  " Karachi Publisher "
);
let book3 = new Ebook(
  "Science and Nature",
  "Eng Ali Usaid",
  "4564-38bfy",
  Scientific,
  " 130 Mb",
  " reflowable layout "
);
let book4 = new PrintedBook(
  "Astronomy & Space",
  "Sir Janifair Lns",
  "364-hyg89",
  Scientific,
  190,
  " United State Publisher "
);
let book5 = new Ebook(
  "Dewan-e-Galib",
  "Mirza Asadullah Khan",
  "4564-38bfy",
  Poetry,
  " 160 Mb",
  " EPUB "
);
let book6 = new PrintedBook(
  "Kulliyat-e-Iqbal",
  "Allama Iqbal",
  "364-hyg89",
  Poetry,
  200,
  " Lahore Publisher "
);
let book7 = new Ebook(
  "The Alchemist",
  "Paulo Coelho",
  "2164-57ky",
  Novels,
  " 320 Mb",
  " PDF "
);
let book8 = new PrintedBook(
  "Aab-e-Hayat",
  "UMERA AHMED",
  "234-ffdg49",
  Novels,
  728,
  " Urdu Publisher "
);
let book9 = new Ebook(
  "Structure and Interpretation of Computer Programs",
  "Harold Abelson",
  "34663-35bfh",
  ComputerScience,
  "98 MB",
  "PDF"
);
let book10 = new PrintedBook(
  "Introduction to Algorithms",
  "Thomas H. Cormen",
  "33564-hgg4",
  ComputerScience,
  1000,
  " Cambridge University Press "
);
let book11 = new Ebook(
  "The C Programming Language",
  "Brian W. Kernighan",
  "87464-337bby",
  ProgramingLangugae,
  " 102 MB",
  "PDF"
);
let book12 = new PrintedBook(
  "The Art of Computer Programming",
  "Donald E. Knuth",
  "36464-547kcy",
  ProgramingLangugae,
  1000,
  " Addison-Wesley "
);
let book13 = new Ebook(
  "NAMA-E-ASKANDARI",
  "Ameer Khusrau",
  "  234-57ky",
  UrduLiterature,
  "  120 Mb",
  "PDF"
);
let book14 = new PrintedBook(
  "AASAR-US-SANADEED",
  "Sir Syed Ahmad Khan",
  "  278544-526srt",
  UrduLiterature,
  600,
  " Urdu Publisher "
);
let book15 = new Ebook(
    "A Midsummer Night’s Dream",
    "William Shakespeare",
    "  3634-57su",
    EnglishLitrature,
    "  120 Mb",
    "reflowable layout"
);
let book16 = new PrintedBook(
    "The Great Gatsby",
    "F. Scott Fitzgerald",
    "  33478-tzzu",
    EnglishLitrature,
    600,
    " Penguin "
);
Allama_iqbal_library.addBook(book1)
Allama_iqbal_library.addBook(book2)
Allama_iqbal_library.addBook(book3)
Allama_iqbal_library.addBook(book4)
Allama_iqbal_library.addBook(book5)
Allama_iqbal_library.addBook(book6)
Allama_iqbal_library.addBook(book7)
Allama_iqbal_library.addBook(book8)
Allama_iqbal_library.addBook(book9)
Allama_iqbal_library.addBook(book10)
Allama_iqbal_library.addBook(book11)
Allama_iqbal_library.addBook(book12)
Allama_iqbal_library.addBook(book13)
Allama_iqbal_library.addBook(book14)
Allama_iqbal_library.addBook(book15)
Allama_iqbal_library.addBook(book16)
console.log(Allama_iqbal_library.findBook(book11.ISBN));
Allama_iqbal_library.removeBook(book11.ISBN)
console.log(Allama_iqbal_library.findBook(book11.ISBN));
Allama_iqbal_library.addCategory(Historical)
Allama_iqbal_library.addCategory(Scientific)
Allama_iqbal_library.addCategory(Poetry)
Allama_iqbal_library.addCategory(Novels)
Allama_iqbal_library.addCategory(ComputerScience)
Allama_iqbal_library.addCategory(ProgramingLangugae)
Allama_iqbal_library.addCategory(UrduLiterature)
Allama_iqbal_library.addCategory(EnglishLitrature)

//console.log(Allama_iqbal_library.listCategories());
//console.log(Allama_iqbal_library.listBooks());







