import { useState } from "react";
import { View, Text, Input, Button } from "@tarojs/components";
import NameCard from "../../components/NameCard";

const businessCardPage = () => {
  const [formData, setFormData] = useState({
    name: "高善成",
    position: "学生",
    company: "南京工业职业技术大学",
    phone: "18360641926",
    email: "2813314009@qq.com",
  });

  const [cardInfo, setCardInfo] = useState(null);

  const handleInputChange = (key) => (e) => {
    setFormData({ ...formData, [key]: e.detail.value });
  };

  const generateCard = () => {
    setCardInfo({ ...formData });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      position: "",
      company: "",
      phone: "",
      email: "",
    });
    setCardInfo(null);
  };

  return (
    <View>
      <View>
        <View>
          <Text>姓名：</Text>
          <Input
            type="text"
            placeholder="请输入姓名"
            value={formData.name}
            onInput={handleInputChange("name")}
          />
        </View>
        <View>
          <Text>职位：</Text>
          <Input
            type="text"
            placeholder="请输入职位"
            value={formData.position}
            onInput={handleInputChange("position")}
          />
        </View>
        <View>
          <Text>公司：</Text>
          <Input
            type="text"
            placeholder="请输入公司"
            value={formData.company}
            onInput={handleInputChange("company")}
          />
        </View>
        <View>
          <Text>联系方式：</Text>
          <Input
            type="text"
            placeholder="请输入联系方式"
            value={formData.phone}
            onInput={handleInputChange("phone")}
          />
        </View>
        <View>
          <Text>邮箱：</Text>
          <Input
            type="text"
            placeholder="请输入邮箱"
            value={formData.email}
            onInput={handleInputChange("email")}
          />
        </View>
        <View>
          <Button onClick={generateCard} type="primary">
            生成名片
          </Button>
          <Button onClick={clearForm} type="warn">
            清空
          </Button>
        </View>
      </View>
      {cardInfo && <NameCard cardInfo={cardInfo} />}
    </View>
  );
};

export default businessCardPage;
