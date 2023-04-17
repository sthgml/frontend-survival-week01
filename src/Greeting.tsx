import { useState } from 'react';

export default function App({ name }: {
  name: string;
}){
  //throw Error("!!!");
  return(
    <p>Hello, {name}</p>
  );
}