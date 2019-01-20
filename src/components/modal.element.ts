import hyperHTML from "hyperhtml";

const ModalElement = (props: any) => {
  const { message, isPromptOpen, onClosePromptRequest } = props;

  if (!isPromptOpen) {
    return null;
  }

  return hyperHTML.wire()`
        <div class="modal-wrapper" onclick=${onClosePromptRequest}>
            <div class="modal">
                <div class="message"> 
                    ${message} 
                </div>
            </div>
        </div>
    `;
};

export default ModalElement;
