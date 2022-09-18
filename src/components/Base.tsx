import { Routes, Route } from "react-router-dom";
import CharacterScreen from "./CharacterScreen";
import {
  Comp404,
  RandomPage,
  PageSelect,
  CharacterVault,
  CharacterPage,
} from "pagescomponents/pageIndex";

const Base = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PageSelect />} />
        <Route path="/character" element={<CharacterPage />}></Route>
        <Route path="*" element={<Comp404 />} />
      </Routes>
    </div>
  );
};
export default Base;
