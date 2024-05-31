export const localStorageMiddleWare = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type === "toggle_favorite") {
    const { favorites } = store.getState().favorite;
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  return result;
};
