interface ComponentProps {
  hello: string;
}

export const Component = ({ ...rest }: ComponentProps) => {
  return <div></div>;
};
