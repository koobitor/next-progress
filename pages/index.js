import React, { useState, useEffect } from "react";
import Loading from "components/Loading";

export default () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(100);
  }, []);

  return (
    <>
      <Loading progress={progress} />
    </>
  );
};
