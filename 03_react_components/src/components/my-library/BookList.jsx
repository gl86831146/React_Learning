import { Card, Row, Col } from "antd";
import BookItem from "./BookItem";

const BookList = ({ books, onDelete, onEdit }) => {
  return (
    <Row gutter={[16, 16]}>
      {books.map((book) => (
        <Col key={book.id} span={8}>
          <Card
            title={book.title}
            style={{ marginBottom: 16, borderRadius: "8px" }} // 添加圆角
            cover={
              book.image && (
                <img
                  src={URL.createObjectURL(book.image)}
                  alt="图书封面"
                  style={{
                    width: "50%",
                    height: "0px",
                    objectFit: "cover",
                    borderTopLeftRadius: "8px", // 图片顶部圆角
                    borderTopRightRadius: "8px",
                  }}
                />
              )
            }
          >
            <BookItem book={book} onDelete={onDelete} onEdit={onEdit}>
              <p>作者：{book.author}</p>
              <p>出版年份：{book.year}</p>
            </BookItem>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BookList;
