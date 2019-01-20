import hyperHTML from "hyperhtml";

const ModalElement = (props: any) => {
  const { message, isModalOpen, onCloseModalRequest } = props;

  if (!isModalOpen) {
    return null;
  }

  return hyperHTML.wire()`
        <div class="modal-wrapper" onclick=${onCloseModalRequest}>
            <div class="modal">
                <div class="message"> 
                    ${message} 
                </div>
            </div>
        </div>
    `;
};

export default ModalElement;
