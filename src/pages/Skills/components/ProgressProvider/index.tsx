import { ReactElement, useEffect, useState } from "react";

interface Props {
  valueStart: number;
  valueEnd: number;
  children(value: number): JSX.Element;
}

function ProgressProvider(props: Props): ReactElement {
  const { valueStart, valueEnd, children } = props;
  const [value, setValue] = useState(valueStart);
  useEffect(() => {
    const valueTimer = setTimeout(() => setValue(valueEnd), 1000);
    return () => {
      clearTimeout(valueTimer);
    };
  }, []);
  return children(value);
}

export default ProgressProvider;
