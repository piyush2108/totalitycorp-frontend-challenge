// To scroll all thorough the top of webpage

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const ToTop = () => {
  return (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className="w-12 h-12 p-2 text-base sm:text-lg text-black rounded-full flex justify-center items-center border-[1px] border-primaryRed absolute bottom-10 right-10 cursor-pointer hover:bg-primaryRed hover:text-white"
    >
      <button>
        <FontAwesomeIcon icon={faCaretUp} />
      </button>
    </div>
  );
};

export default ToTop;