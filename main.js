const addPegs = () => {
  const numRows = 36;
  const numColumns = 48;
  const boardElem = document.getElementById("peg-board");
  let rowElem = document.createElement("div");
  rowElem.className = "board-row";
  let rowInnerHtml = ``;

  // Generate a row with numColumns number of pegs
  for (var i = 0; i < numColumns; i++) {
    rowInnerHtml += `<div class="board-peg">&nbsp;</div>`;
  }
  rowElem.innerHTML = rowInnerHtml;

  // Add that row to the board numRows number of times
  for (var i = 0; i < numRows; i++) {
    boardElem.innerHTML += rowElem.outerHTML;
  }
};

addPegs();
