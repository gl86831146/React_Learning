import { useState } from "react";
import { Layout, Menu, Button, Carousel } from "antd";
import BookInput from "./BookInput";
import BookList from "./BookList";
import BookDetail from "./BookDetail";

const { Header, Content, Footer } = Layout;
const imagesty = { width: "100%", height: "600px", objectFit: "cover" };
const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "西游记", author: "吴承恩", year: "2022" },
    { id: 2, title: "红楼梦", author: "曹雪芹", year: "2021" },
  ]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
    setShowForm(false);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleUpdateBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  return (
    <Layout>
      <div>
        <Header style={{ zIndex: 1, width: "100%" }}>
          <div style={{ float: "left", color: "white", fontSize: "18px" }}>
            图书管理系统
          </div>
          <Button
            type="primary"
            style={{ float: "right", marginTop: "15px" }}
            onClick={() => setShowForm(true)}
          >
            添加图书
          </Button>
        </Header>
      </div>
      <Carousel>
        <div>
          <img
            src="https://bpic.588ku.com/back_origin_min_pic/19/10/22/380abc8c5a7355574279311b90c3da9d.jpg"
            alt="image1"
            style={imagesty}
          />
        </div>
        <div>
          <img
            src="https://bpic.588ku.com/back_origin_min_pic/19/10/22/beab832e6434f11169b13067073f806f.jpg"
            alt="image2"
            style={imagesty}
          />
        </div>
        <div>
          <img
            src="https://s1.aigei.com/prevfiles/dd66383f1d014cc9a0188e7d42f78110.jpg?e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:A-NN4dgeb4QiIyC85_puJeEZ244="
            alt="image3"
            style={imagesty}
          />
        </div>
      </Carousel>

      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <div style={{ padding: 24, background: "#fff", minHeight: "100vh" }}>
          {showForm && <BookInput onAdd={handleAddBook} />}
          <BookList
            books={books}
            onDelete={handleDeleteBook}
            onEdit={setSelectedBook}
          />
          {selectedBook && (
            <BookDetail
              book={selectedBook}
              onClose={() => setSelectedBook(null)}
              onUpdate={handleUpdateBook}
              onDelete={handleDeleteBook}
            />
          )}
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>图书管理系统 ©2025</Footer>
    </Layout>
  );
};

export default App;
