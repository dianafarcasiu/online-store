import AboutDescription from "./AboutDescription";
import AboutTitle from "./AboutTitle";
import Underline from "./Underline";
import AboutStatements from "./AboutStatements";
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
