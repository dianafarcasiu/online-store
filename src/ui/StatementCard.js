export default function StatementCard({ statement }) {
  return (
    <div className="h-auto bg-gray-700 rounded-lg text-center p-12 shadow-lg shadow-black/20">
      <div className="bg-gray-800 rounded-full inline-flex p-4 my-4 text-2xl text-purple-400">
        <i className={statement.icon}></i>
      </div>
      <h4 className="text-xl font-bold pb-6">{statement.title}</h4>
      <p>{statement.description}</p>
    </div>
  );
}
