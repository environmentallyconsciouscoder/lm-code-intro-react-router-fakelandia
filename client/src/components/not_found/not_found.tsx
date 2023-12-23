import * as React from 'react';
import { useParams } from "react-router-dom";
interface INotFoundProps {
}

const NotFound: React.FC<INotFoundProps> = () => {
  const { statusCode } = useParams();

  return <>Not Found. the status code is {statusCode}</>;
};

export default NotFound;