import { useState } from "react";

export default function useEngaged(countNum) {
  const [engaged, setengaged] = useState(false);
  const [count, setCount] = useState(countNum);
  const handleEngaged = () => {
    if (!engaged) {
      setengaged(true);
      setCount(count + 1);
    }
    if (engaged) {
      setengaged(false);
      setCount(count - 1);
    }
  };
  return [engaged, count, handleEngaged];
}

