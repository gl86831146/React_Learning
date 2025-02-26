import { Button } from "antd";

const BookItem = ({ book, onEdit, onDelete, children }) => {
  return (
    <div
      className="book-item"
      style={{ marginBottom: 16, padding: 16, border: "1px solid #ddd" }}
    >
      {book.image && (
        <img
          src={URL.createObjectURL(book.image)}
          alt="图书封面"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            marginBottom: "16px",
            borderRadius: "8px", // 添加圆角
          }}
        />
      )}
      <div className="book-info">
        {children} {/* 插槽：父组件传递的内容 */}
      </div>
      <div style={{ marginTop: 8 }}>
        <Button onClick={() => onEdit(book)} style={{ marginRight: 8 }}>
          编辑
        </Button>
        <Button onClick={() => onDelete(book.id)} danger>
          删除
        </Button>
      </div>
    </div>
  );
};

export default BookItem;
