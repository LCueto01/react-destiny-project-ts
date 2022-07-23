import React, { useEffect, useState } from "react";
import { applyMiddleware } from "redux";
import { StoreProvider, createStore, action } from "easy-peasy";
import { model } from "./model";
import logger from "redux-logger";
import VaultItem from "./VaultItem";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(model, composeWithDevTools(applyMiddleware(logger)));

const Vault = () => {
  return (
    <div>
      <StoreProvider store={store}>
        <h1>hello from vault</h1>
        <VaultItem />
      </StoreProvider>
    </div>
  );
};

export default Vault;
