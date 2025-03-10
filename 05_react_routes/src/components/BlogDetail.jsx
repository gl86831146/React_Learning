import React from "react";
import { Typography, Image } from "antd";
import { useParams } from "react-router-dom";
import blogData from "../data/blog";

const { Title, Paragraph } = Typography;

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-detail">
      <Title level={2}>{blog.title}</Title>
      <Image width={640} src={blog.image} alt={blog.title} />
      <Paragraph>{blog.content}</Paragraph>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{`${blog.views} 阅读`}</span>
        <span>{`${blog.likes} 赞`}</span>
        <span>{`${blog.collections} 收藏`}</span>
      </div>
    </div>
  );
};

export default BlogDetail;
