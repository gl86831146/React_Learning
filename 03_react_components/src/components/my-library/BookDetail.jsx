import { useEffect, useState } from "react";
import { Modal, Form, Button, message, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const BookDetail = ({ book, onClose, onUpdate, onDelete }) => {
  const [form] = Form.useForm();
  const [image, setImage] = useState(book.image);

  useEffect(() => {
    form.setFieldsValue(book);
  }, [book, form]);

  const handleSave = () => {
    form.validateFields().then((values) => {
      onUpdate({ ...book, ...values, image });
      message.success("图书修改成功");
      onClose();
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
    <Modal title="图书详情" open={true} onCancel={onClose} footer={null}>
      <Form form={form}>
        <Form.Item label="书名" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="作者" name="author">
          <Input />
        </Form.Item>
        <Form.Item label="出版年份" name="year">
          <Input />
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
      </Form>
      <div style={{ textAlign: "right" }}>
        <Button onClick={onClose} style={{ marginRight: 8 }}>
          取消
        </Button>
        <Button type="primary" onClick={handleSave}>
          保存
        </Button>
      </div>
    </Modal>
  );
};

export default BookDetail;
