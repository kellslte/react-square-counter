import React from 'react'
import Joke from '../components/Joke'
import { useSearchParams } from 'react-router';

function Jokes ()
{
    const [ searchParams ] = useSearchParams();
    let type = searchParams.get("type")
    

  return (
    <>
      <div className="justify-content-center align-items-center d-flex w-100 h-100">
        <Joke type={type} />
      </div>
    </>
  );
}

export default Jokes