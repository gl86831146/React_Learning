import { Card, Avatar } from "antd";

const MainProduct = () => {
  const products = [
    {
      image:
        "https://www.2008php.com/2011_Website_appreciate/2011-09-24/20110924005450.jpg",
      title: "标题1",
      subtitle: "标题1标题1",
      avatar:
        "https://www.2008php.com/2011_Website_appreciate/2011-09-24/20110924005450.jpg",
    },
    {
      image:
        "https://ts1.cn.mm.bing.net/th/id/R-C.2c6d25abef201846429e8a44557b665a?rik=AiICIzCQ2%2blx8w&riu=http%3a%2f%2fpic1.bbzhi.com%2fsheyingbizhi%2fshanliangdezuanshishuijing-langmanshanshuobeijing%2fphotograph_sz_179_sparkling_and_romantic_backgrounds_01_1920x1200_45496_12.jpg&ehk=IOX4naal6czHYiuyL4M5BfZLQGshsU8H%2fBUXWe7XOjM%3d&risl=&pid=ImgRaw&r=0",
      title: "标题2",
      subtitle: "标题2标题2",
      avatar:
        "https://www.2008php.com/2011_Website_appreciate/2011-09-24/20110924005450.jpg",
    },
    {
      image:
        "https://ts1.cn.mm.bing.net/th/id/R-C.6cdb9d506a7e3304041fce8727cb7944?rik=%2bspCiBeNUmN%2fYA&riu=http%3a%2f%2fwww.deskcar.com%2fdesktop%2ffengjing%2f2017725231219%2f12.jpg&ehk=iWyCXjD3PXrd7puCnRDLz6jkOm0zVpJoTZPyuoKEoHk%3d&risl=&pid=ImgRaw&r=0",
      title: "标题3",
      subtitle: "标题3标题3",
      avatar:
        "https://www.2008php.com/2011_Website_appreciate/2011-09-24/20110924005450.jpg",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((item, index) => (
        <Card
          key={index}
          style={{
            width: "400px",
            borderRadius: "8px",
            boxShadow: "0 6px 6px rgba(0, 0, 0, 0.1)",
          }}
          cover={<img alt="image" src={item.image} />}
        >
          <Card.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<h3>{item.title}</h3>}
            description={<p>{item.subtitle}</p>}
          />
        </Card>
      ))}
    </div>
  );
};

export default MainProduct;
