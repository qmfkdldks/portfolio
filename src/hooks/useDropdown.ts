import React from "react";

function useDropdown(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  React.RefObject<HTMLDivElement>
] {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [opened, setOpened] = React.useState<boolean>(false);

  const handleClickOutside = (e: any) => {
    if (containerRef.current?.contains(e.target)) {
      return;
    }

    // if clicked element is outside of the container ref element
    // opened gets false
    setOpened(false);
  };

  React.useEffect(() => {
    if (opened) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [opened]);

  return [opened, setOpened, containerRef];
}

export default useDropdown;
