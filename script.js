document.addEventListener("DOMContentLoaded", () => {
  const books = [
    { title: "Pemrograman Web Dasar", author: "Try A. Syahri", cover: "https://source.unsplash.com/200x300/?coding" },
    { title: "Manajemen Informasi", author: "M. Ali", cover: "https://source.unsplash.com/200x300/?information" },
    { title: "Pengantar Ilmu Perpustakaan", author: "D. Pustaka", cover: "https://source.unsplash.com/200x300/?library-book" }
  ];

  const bookList = document.getElementById("bookList");
  books.forEach(book => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="card h-100 shadow">
        <img src="${book.cover}" class="card-img-top" alt="${book.title}">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">Penulis: ${book.author}</p>
        </div>
      </div>
    `;
    bookList.appendChild(col);
  });
});
