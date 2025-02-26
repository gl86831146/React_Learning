import { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const BookInput = ({ onAdd }) => {
  const [form] = Form.useForm();
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const newBook = {
        id: Date.now(),
        title: values.title,
        author: values.author,
        year: values.year,
        image: image, // 保存图片文件
      };
      onAdd(newBook);
      form.resetFields();
      setImage(null); // 重置图片
    });
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("只能上传图片文件！");
      return false; // 阻止上传
    }
    setImage(file); // 保存图片文件
    return false; // 阻止默认上传行为
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item
        name="title"
        rules={[{ required: true, message: "请输入书名" }]}
      >
        <Input placeholder="书名" />
      </Form.Item>
      <Form.Item
        name="author"
        rules={[{ required: true, message: "请输入作者" }]}
      >
        <Input placeholder="作者" />
      </Form.Item>
      <Form.Item
        name="year"
        rules={[{ required: true, message: "请输入年份" }]}
      >
        <Input placeholder="年份" />
      </Form.Item>
      <Form.Item label="图书图片">
        <Upload beforeUpload={beforeUpload} showUploadList={false}>
          <Button icon={<UploadOutlined />}>上传图片</Button>
        </Upload>
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="图书封面"
            style={{ width: "100px", marginTop: "10px", borderRadius: "8px" }}
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          添加
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BookInput;
