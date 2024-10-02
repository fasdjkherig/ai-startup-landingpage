const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="rounded-lg py-2 px-3 text-white text-sm font-medium bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-custom-shadow">
      {props.children}
    </button>
  );
};

export default Button;
