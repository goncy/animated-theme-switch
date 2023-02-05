import {useState} from "react";
import {createPortal} from "react-dom";

type OverlayProps = {
  isPreviewing: boolean;
  isToggled: boolean;
};

const Overlay = ({isToggled, isPreviewing}: OverlayProps) => {
  const overlay = document.querySelector("#overlay");

  if (!overlay) return null;

  return createPortal(
    <div
      className={`fixed backdrop-invert z-50 h-full skew-x-[30deg] -left-1/2 top-0 pointer-events-none transition-all duration-500 ${
        isPreviewing ? "w-full" : isToggled ? "w-[200%]" : "w-0"
      }`}
    />,
    overlay as HTMLElement,
  );
};

const ColorModeSwitcher: React.FC = () => {
  const [{isToggled, isPreviewing, isInteractive}, setState] = useState({
    isToggled: false,
    isPreviewing: false,
    isInteractive: true,
  });

  const previewStart = () => {
    if (!isInteractive) return;

    setState((state) => ({...state, isPreviewing: true, isInteractive: true}));
  };

  const previewEnd = () => {
    setState((state) => ({...state, isPreviewing: false, isInteractive: true}));
  };

  return (
    <>
      <button
        aria-checked={isToggled}
        aria-label="dark theme"
        className="p-2"
        role="switch"
        type="button"
        value={isToggled ? "on" : "off"}
        onBlur={previewEnd}
        onClick={() => {
          setState(({isToggled}) => ({
            isPreviewing: false,
            isToggled: !isToggled,
            isInteractive: false,
          }));
        }}
        onFocus={previewStart}
        onMouseEnter={previewStart}
        onMouseLeave={previewEnd}
      >
        {isToggled ? (
          <svg height="16px" viewBox="0 0 24 24" width="16px">
            <path
              d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg height="16px" viewBox="0 0 24 24" width="16px">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2" />
              <path d="M12 21v2" />
              <path d="M4.22 4.22l1.42 1.42" />
              <path d="M18.36 18.36l1.42 1.42" />
              <path d="M1 12h2" />
              <path d="M21 12h2" />
              <path d="M4.22 19.78l1.42-1.42" />
              <path d="M18.36 5.64l1.42-1.42" />
            </g>
          </svg>
        )}
      </button>
      <Overlay isPreviewing={isPreviewing} isToggled={isToggled} />
    </>
  );
};

export default ColorModeSwitcher;
