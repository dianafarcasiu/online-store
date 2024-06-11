import StatementCard from "../components/StatementCard";

export default function AboutStatements({ statements }) {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {statements.map((st) => (
        <StatementCard key={st.id} statement={st} />
      ))}
    </div>
  );
}
