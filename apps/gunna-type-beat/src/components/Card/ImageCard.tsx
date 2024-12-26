import type { CardProps } from "@repo/ui/Card";
import { Card } from "@repo/ui/Card";
import { YayaText } from "@repo/ui/YayaText";

type ImageCardProps = CardProps & {
  image: JSX.Element;
};

export const ImageCard = ({ image, children, ...rest }: ImageCardProps) => {
  return (
    <Card
      className="p-4 bg-white rounded-lg flex flex-col items-center justify-center gap-4 cursor-pointer"
      {...rest}
    >
      {image}
      <YayaText textColor="text-dark" textSize="1.5" type="h2">
        {children}
      </YayaText>
    </Card>
  );
};
