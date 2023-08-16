const ToTop = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <p
      class="w-full my-3 font-bold text-red-600 hover:text-red-900 underline cursor-pointer"
      onClick={scrollUp}
    >
      Top
    </p>
  );
};

export default ToTop;
