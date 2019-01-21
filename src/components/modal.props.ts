export const mapProps = (store: any, api: any): any => {
  const { onClosePromptRequest } = api;
  const prompt = store.getFromState("prompt");
  const { isPromptOpen, message } = prompt;

  return { message, isPromptOpen, onClosePromptRequest };
};
