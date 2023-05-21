import { useEffect } from "react";

const useTitle = title => {
  useEffect(() => {
    document.title = `CAR MANIA | ${title}`;
  }, [title]);
};

export default useTitle