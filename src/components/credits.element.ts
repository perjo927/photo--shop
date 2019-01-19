import hyperHTML from "hyperhtml";

const CreditsElement = (props: any) => {
  const { money, isCreditsOpen } = props;

  if (!isCreditsOpen) {
    return null;
  }

  return hyperHTML.wire()`
        <div id="credits" class="box credits">
            You have ${money} units left.
        </div>
    `;
};

export default CreditsElement;
