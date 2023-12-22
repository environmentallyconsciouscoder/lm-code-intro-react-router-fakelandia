import React from "react";

interface Props {
  errorMessage: Array<string>
}

const ErrorMessage: React.FC<Props> = ({errorMessage}: Props) => {
  return (
    <div>
    {errorMessage.map((err, index) => {
      return (
      <div key={index}>
        {err}
      </div>
      )
    })}
  </div>
  );
};

export default ErrorMessage;