const {onRequest} = require("firebase-functions/v2/https");
const {onDocumentCreated} = require("firebase-functions/v2/firestore"); // Import Firestore trigger
const admin = require("firebase-admin");
const cors = require("cors")({
  origin: true,
});

admin.initializeApp();

// Function to count books
exports.countBooks = onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;
      res.status(200).json({count});
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});

// Function to capitalize book name when a new book is added
exports.capitalizeBookName = onDocumentCreated("books/{bookId}", (event) => {
  const bookData = event.data.data();

  if (bookData && bookData.name) {
    const capitalizedName = bookData.name.toUpperCase();

    // Update the Firestore document with the capitalized name
    return event.data.ref.update({
      name: capitalizedName,
    });
  }

  return null;
});

exports.getAllBooks = onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();

      const books = [];
      snapshot.forEach((doc) => {
        books.push({id: doc.id, ...doc.data()});
      });

      res.status(200).json(books);
    } catch (error) {
      console.error("Error fetching books:", error.message);
      res.status(500).send("Error fetching books");
    }
  });
});
