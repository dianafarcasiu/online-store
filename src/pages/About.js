import AboutDescription from "../components/AboutDescription";
import AboutTitle from "../components/AboutTitle";
import Underline from "../components/Underline";
import AboutStatements from "../containers/AboutStatements";
import statements from "../data/statements";

export default function About() {
  return (
    <>
      <div className="wrapper">
        <AboutTitle />
        <AboutDescription />
        <Underline />

        <h3 className="text-lg text-center font-bold pb-14 sm:text-2xl">
          Carefully selected for you.
        </h3>

        <AboutStatements statements={statements} />
      </div>
    </>
  );
}
