import { useSelector } from "react-redux";
import { IBoard } from "../model/board";
import { getAllBoards } from "../service/board.slice";

export default function BoardRows() {
  const allBoards: [] = useSelector(getAllBoards);
  const additionalRows = allBoards.map((boards: IBoard) => ({
    id: boards.id,
    boardName: boards.boardName,
    boardType: boards.boardType,
    registerDate: boards.registerDate,
  }));

  return [...(additionalRows || [])];
}
