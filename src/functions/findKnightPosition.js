// this function is used to calculate all the positions of the knight
// current position of the knight is send as argument and this returns all the next possible moves

//horizontal a - h
//vertical 1 - 8
//cases : (+-1,+-2) , (+-2,+-1)
export default function findPossiblePositions(currentPosition) {
  if (currentPosition == "") {
    return [];
  }
  const finalArray = [];
  let newHorizontalPosition = "";
  let newVerticalPosition = "";
  let newPosition = "";
  const [horizontalPosition, verticalPosition] = currentPosition.split("");
  //console.log(horizontalPosition,verticalPosition)
  // case 1 : (+1,+2)
  newHorizontalPosition = nextChar(horizontalPosition);
  newVerticalPosition = Number(verticalPosition) + 2;

  if (
    newHorizontalPosition >= "a" &&
    newHorizontalPosition <= "h" &&
    newVerticalPosition >= 1 &&
    newVerticalPosition <= 8
  ) {
    newPosition = newHorizontalPosition + newVerticalPosition;
    finalArray.push(newPosition);
  }

  //case 2 : (-1,-2)

  newHorizontalPosition = previousChar(horizontalPosition);
  newVerticalPosition = Number(verticalPosition) - 2;

  if (
    newHorizontalPosition >= "a" &&
    newHorizontalPosition <= "h" &&
    newVerticalPosition >= 1 &&
    newVerticalPosition <= 8
  ) {
    newPosition = newHorizontalPosition + newVerticalPosition;
    finalArray.push(newPosition);
  }

  //case 3 : (+1,-2)

  newHorizontalPosition = nextChar(horizontalPosition);
  newVerticalPosition = Number(verticalPosition) - 2;

  if (
    newHorizontalPosition >= "a" &&
    newHorizontalPosition <= "h" &&
    newVerticalPosition >= 1 &&
    newVerticalPosition <= 8
  ) {
    newPosition = newHorizontalPosition + newVerticalPosition;
    finalArray.push(newPosition);
  }

  //case 4 : (-1,+2)
  newHorizontalPosition = previousChar(horizontalPosition);
  newVerticalPosition = Number(verticalPosition) + 2;

  if (
    newHorizontalPosition >= "a" &&
    newHorizontalPosition <= "h" &&
    newVerticalPosition >= 1 &&
    newVerticalPosition <= 8
  ) {
    newPosition = newHorizontalPosition + newVerticalPosition;
    finalArray.push(newPosition);
  }

  //case 5 : (+2,+1)

  newHorizontalPosition = nextChar(nextChar(horizontalPosition));
  newVerticalPosition = Number(verticalPosition) + 1;

  if (
    newHorizontalPosition >= "a" &&
    newHorizontalPosition <= "h" &&
    newVerticalPosition >= 1 &&
    newVerticalPosition <= 8
  ) {
    newPosition = newHorizontalPosition + newVerticalPosition;
    finalArray.push(newPosition);
  }

  //case 6 : (+2,-1)

  newHorizontalPosition = nextChar(nextChar(horizontalPosition));
  newVerticalPosition = Number(verticalPosition) - 1;

  if (
    newHorizontalPosition >= "a" &&
    newHorizontalPosition <= "h" &&
    newVerticalPosition >= 1 &&
    newVerticalPosition <= 8
  ) {
    newPosition = newHorizontalPosition + newVerticalPosition;
    finalArray.push(newPosition);
  }

  //case 7 : (-2,+1)
  newHorizontalPosition = previousChar(previousChar(horizontalPosition));
  newVerticalPosition = Number(verticalPosition) + 1;

  if (
    newHorizontalPosition >= "a" &&
    newHorizontalPosition <= "h" &&
    newVerticalPosition >= 1 &&
    newVerticalPosition <= 8
  ) {
    newPosition = newHorizontalPosition + newVerticalPosition;
    finalArray.push(newPosition);
  }

  //case 8 : (-2,-1)
  newHorizontalPosition = previousChar(previousChar(horizontalPosition));
  newVerticalPosition = Number(verticalPosition) - 1;

  if (
    newHorizontalPosition >= "a" &&
    newHorizontalPosition <= "h" &&
    newVerticalPosition >= 1 &&
    newVerticalPosition <= 8
  ) {
    newPosition = newHorizontalPosition + newVerticalPosition;
    finalArray.push(newPosition);
  }

  return finalArray;
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

function previousChar(c) {
  return String.fromCharCode(c.charCodeAt(0) - 1);
}
