interface tagProps {
  text: string;
}
const Tag = ({ text }: tagProps) => {
  return (
    <>
      <span className="uppercase bg-gray-200 border border-gray-500 p-3 px-6 text-gray-700 inline-block rounded-full text-sm self-center my-2">
        {text}
      </span>
    </>
  );
};

export default Tag;
