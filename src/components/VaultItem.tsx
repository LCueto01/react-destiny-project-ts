import { useStoreState, useStoreActions } from "./myStoreHooks";
import React, { useEffect, Fragment } from "react";
import { ChildFrame } from "./ChildFrame";

const VaultItem = () => {
  const stuff = useStoreState((state) => state.items);

  const doThing = useStoreActions((state) => state.addToVault);

  const getRarity = (i) => {
    switch (i.rarity) {
      case "exotic":
        return "#ffea29";
      case "legendary":
        return "#9e4fff"; // purple
      case "rare":
        return "#2b80ff"; //blue
      case "uncommon":
        return "green";
      default:
        return "white";
    }
  };
  const renderItems = stuff.map((gridItem) => (
    <ChildFrame key={gridItem.id} item={gridItem} renderRarity={getRarity} />
  ));

  useEffect(() => {
    console.log(stuff);
  }, [stuff]);
  return (
    <Fragment>
      <h1>hello</h1>
      <button>
        does Stuff
      </button>
      <div>{renderItems}</div>
    </Fragment>
  );
};

export default VaultItem;
