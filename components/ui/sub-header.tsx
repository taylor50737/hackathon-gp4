interface SubHeaderProps {
  header: string;
}

export default function SubHeader(props: SubHeaderProps) {
  return (
    <div className="text-3xl text-center items-center h-10">
      <h1>{props.header}</h1>
    </div>
  );
}
