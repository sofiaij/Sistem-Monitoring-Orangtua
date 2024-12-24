const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="rounded w-full py-3 px-4  text-[#B4B8BB] bg-[#EBEEFB] text-[12px] 2xl:text-[18px]"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

export default Input;