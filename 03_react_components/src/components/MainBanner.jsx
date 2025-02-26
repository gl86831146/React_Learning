import { Carousel } from "antd";

const MainBanner = () => {
  const imagesty = { width: "100%", height: "500px", objectFit: "cover" };
  return (
    <div>
      <Carousel>
        <div>
          <img
            src="https://www.2008php.com/2011_Website_appreciate/2011-09-24/20110924005450.jpg"
            alt="image1"
            style={imagesty}
          />
        </div>
        <div>
          <img
            src="https://pic.nximg.cn/file/20230302/34543442_111536872102_2.jpg"
            alt="image1"
            style={imagesty}
          />
        </div>
        <div>
          <img
            src="https://pic.nximg.cn/file/20230517/11949215_013030610103_2.jpg"
            alt="image1"
            style={imagesty}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default MainBanner;
