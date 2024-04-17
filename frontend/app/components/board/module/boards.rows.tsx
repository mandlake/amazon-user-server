import { useSelector } from "react-redux";
import { IBoard } from "../model/board";
import { getAllBoards } from "../service/board.slice";

export default function BoardRows() {
  const allBoards: [] = useSelector(getAllBoards);
  const additionalRows = allBoards.map((boards: IBoard) => ({
    id: boards.id,
    title: boards.title,
    description: boards.description,
    registerDate: boards.registerDate,
  }));

  return [...(additionalRows || [])];
}
