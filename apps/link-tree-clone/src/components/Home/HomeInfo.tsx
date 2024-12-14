import { memo } from "react";

type HomeInfoProps = {
  title: string;
  description: string;
};
export const HomeInfo = memo<HomeInfoProps>(({ title, description }) => {
  return (
    <>
      <h1 className="text-2 font-medium ">{title}</h1>
      <h2 className="text-1 font-regular mb-6">{description}</h2>
    </>
  );
});
