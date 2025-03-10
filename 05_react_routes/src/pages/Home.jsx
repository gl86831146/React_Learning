import React, { useState } from "react";
import { Card, List, Typography, Pagination } from "antd";
import { Link } from "react-router-dom";
import blogData from "../data/blog";

const { Title } = Typography;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentBlogs = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="page-container">
      <Title level={2}>Blog List</Title>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={currentBlogs}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card
              style={{
                width: "80%",
                margin: "0 auto",
                marginBottom: "2rem",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ flex: 1 }}>
                  <Card.Meta
                    title={<Link to={`/blog/${item.id}`}>{item.title}</Link>}
                    description={item.content}
                  />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>{`${item.views} 阅读`}</span>
                    <span>{`${item.likes} 赞`}</span>
                    <span>{`${item.favorites} 收藏`}</span>
                  </div>
                </div>
                <img
                  alt={item.title}
                  src={item.image}
                  style={{
                    width: "150px",
                    height: "auto",
                    marginLeft: "1rem",
                    borderRadius: "4px",
                  }}
                />
              </div>
            </Card>
          </List.Item>
        )}
      />
      <Pagination
        defaultCurrent={1}
        total={totalPages * itemsPerPage}
        onChange={handlePageChange}
        pageSize={itemsPerPage}
        style={{ marginTop: "2rem", textAlign: "center" }}
      />
    </div>
  );
};

export default Home;
