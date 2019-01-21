export const mapProps = (store: any, api: any): any => {
  const pics = store.getFromState("pics");
  const { onBuyRequest } = api;

  return { pics, onBuyRequest };
};
