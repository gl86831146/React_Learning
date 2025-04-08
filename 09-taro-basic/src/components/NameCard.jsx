import { View, Image } from "@tarojs/components";

const NameCard = ({ cardInfo }) => {
  return (
    <View>
      <View>
        <Image
          src="https://c-ssl.duitang.com/uploads/blog/202207/22/20220722231325_3754c.jpg"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "100px"
          }}
        />
        <View>{cardInfo.name}</View>
      </View>
      <View>
        <View>{cardInfo.position}</View>
        <View>{cardInfo.company}</View>
        <View>{cardInfo.phone}</View>
        <View>{cardInfo.email}</View>
      </View>
    </View>
  );
};

export default NameCard;
