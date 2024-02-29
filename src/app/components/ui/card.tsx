import { Card } from "antd";
import { CardProps } from "antd/lib/card";

const CustomCard = (props: CardProps) => {
  const { children } = props;
  return (
    <Card
      {...props}
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
    >
      {children}
    </Card>
  );
};

export default CustomCard;
