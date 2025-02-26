import { Button } from "antd";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#FFC0C8", padding: "10px 20px" }}>
      <Button type="link" style={{ margin: "0 10px" }}>
        🏠 首页
      </Button>
      <Button type="link" style={{ margin: "0 10px" }}>
        📧 邮件
      </Button>
      <Button type="link" style={{ margin: "0 10px" }}>
        ⚙ 设置
      </Button>
    </div>
  );
};
export default Header;
