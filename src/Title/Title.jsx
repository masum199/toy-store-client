import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `CAR MANIA - ${title}`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

export default useTitle;