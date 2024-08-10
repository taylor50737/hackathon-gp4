interface SubHeaderProps {
  header?: string;
  subHeader?: string;
}

export default function SubHeader(props: SubHeaderProps) {
  return (
    <div className='text-3xl text-center items-center md:h-10'>
      <b>{props.header}</b>
      <h1 className='text-2xl'>{props.subHeader}</h1>
    </div>
  );
}
