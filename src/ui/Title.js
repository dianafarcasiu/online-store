import Underline from "./Underline";

function Title({ children }) {
  return (
    <>
      <h3 className="mb-4 text-xl font-bold sm:text-2xl">{children}</h3>
      <Underline />
    </>
  );
}

export default Title;
