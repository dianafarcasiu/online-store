import AboutDescription from "../ui/AboutDescription";
import AboutTitle from "../ui/AboutTitle";
import Underline from "../ui/Underline";
import AboutStatements from "../ui/AboutStatements";
import statements from "../data/statements";

export default function About() {
  return (
    <>
      <div className="wrapper">
        <AboutTitle />
        <AboutDescription />
        <Underline />

        <h3 className="text-lg font-bold text-center pb-14 sm:text-2xl">
          Carefully selected for you.
        </h3>

        <AboutStatements statements={statements} />
      </div>
    </>
  );
}
