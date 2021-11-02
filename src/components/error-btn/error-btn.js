import React, {useState} from 'react'

const ErrorBtn = () => {
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  if(error) {
    throw Error('Error')
  }

  return <button onClick={onError}>Throw error</button>
}

export default ErrorBtn;