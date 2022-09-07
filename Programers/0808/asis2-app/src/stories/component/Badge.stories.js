import Badge from "../../components/base/Badge";
import Image from "../../components/base/Image";

export default {
  title: "Component/Badge",
  component: Badge,
  argTypes: {
    count: { defaultValue: 10, control: "number" },
    maxCount: { defaultValue: 100, control: "number" },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    showZero: { defaultValue: false, control: "boolean" },
  },
};

export const Default = (args) => {
  return (
    <Badge {...args}>
      <Image
        src="https://picsum.photos/60"
        width={60}
        style={{ borderRadius: 8 }}
      />
    </Badge>
  );
};

export const Dot = () => {
  return (
    <Badge dot>
      <Image src="https://picsum.photos/60" width={60} />
    </Badge>
  );
};
