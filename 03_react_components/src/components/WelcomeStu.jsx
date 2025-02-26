import { Space, Avatar, Typography } from "antd";

const WelcomeStu = ({ name, age, avatar }) => {
  return (
    <Space direction="vertical" style={{ alignItems: "center" }}>
      <Avatar src={avatar} />
      <Typography.Title level={2}>{name}</Typography.Title>
      <Typography.Text>{age} 岁</Typography.Text>
    </Space>
  );
};

export default WelcomeStu;
