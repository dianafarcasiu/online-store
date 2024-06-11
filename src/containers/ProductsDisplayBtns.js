import DisplayBtn from "../components/DisplayBtn";

export default function ProductsDisplayBtns({ displayGrid, setDisplayGrid }) {
  function gridDisplay() {
    setDisplayGrid(true);
  }
  function lineDisplay() {
    setDisplayGrid(false);
  }

  return (
    <div className="flex justify-center">
      <DisplayBtn
        icon="fa-solid fa-grip"
        handleDisplay={gridDisplay}
        active={displayGrid}
      />
      <DisplayBtn
        icon="fa-solid fa-grip-lines"
        handleDisplay={lineDisplay}
        active={!displayGrid}
      />
    </div>
  );
}
