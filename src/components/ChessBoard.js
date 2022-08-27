import React, { useEffect, useState } from "react";
import findKnightPosition from "../functions/findKnightPosition";

function ChessBoard() {
  const [tableData, setTableData] = useState([]); // complete table data
  const [selectedBlock, setSelectedBlock] = useState(""); // check the position selected
  const [possiblePosition, setPossiblePositions] = useState([]); //possible positions array

  // create table data to render
  const createTableData = () => {
    const horizontalArray = ["a", "b", "c", "d", "e", "f", "g", "h"]; // horizontal elements in a chess board
    const dataArray = []; // stores table rows data
    let setClass = "block2"; // class settings for the board
    for (let i = 8; i >= 1; i--) {
      let data = []; // stores data for all td in table
      setClass = setClass == "block1" ? "block2" : "block1"; // sets the class for chess board colors
      horizontalArray.forEach((element) => {
        let isSelected = selectedBlock == element + i ? "selectedBlock" : "";
        let isPossible = possiblePosition.includes(element + i)
          ? "possiblePositionBlock"
          : "";
        data.push(
          <td
            key={element + i}
            className={setClass + " " + isSelected + " " + isPossible}
            onClick={() => handleBlockClick(element + i)}
          >
            <span>{element + i}</span>
            {isSelected == "" ? (
              ""
            ) : (
              <i class="fa-solid fa-chess-knight selected-fa"></i>
            )}
          </td>
        );
        setClass = setClass == "block1" ? "block2" : "block1";
      });
      dataArray.push(<tr>{data}</tr>); // each row is being pushed
    }

    setTableData(dataArray); //final table data is set to state
  };

  // handle the data change on position selection
  const handleBlockClick = (selectId) => {
    setSelectedBlock(selectId);
    var responseArray = findKnightPosition(selectId);
    setPossiblePositions(responseArray);
  };

  useEffect(() => {
    createTableData();
  }, [possiblePosition]);

  return (
    <div className="row">
      <div className="col-sm-12">
        <h2>Click on any block to find the possible positions of a Knight </h2>
      </div>
      <div className="col-sm-12">
        <label>To reset the board click on this button. &nbsp; &nbsp;</label>
        <button
          className="btn btn-primary"
          onClick={() => handleBlockClick("")}
        >
          Reset
        </button>
      </div>
      <div className="col-sm-12 text-center" id="tableDiv">
        <table className="table table-bordered">
          <tbody>{tableData}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ChessBoard;
