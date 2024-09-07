import React, { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { Newsboard } from './Components/Newsboard';
import { Newstopic } from './Components/Newstopic';

  const App = () => {
    const [category,setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
      <Newstopic/>

    </div>
  );
}
export default App


