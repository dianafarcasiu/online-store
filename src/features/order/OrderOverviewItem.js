import Underline from "../../ui/Underline";

function OrderOverviewItem({ children }) {
  return (
    <>
      <li className="flex items-center justify-between gap-5 pb-2 text-sm italic font-semibold tracking-wider">
        {children}
      </li>
      <Underline marginBottom="mb-4" />
    </>
  );
}

export default OrderOverviewItem;
