
import React from 'react';
import Homepage from './components/Homepage';
import { FilterProvider } from './FilterContext'



function App() {
  return (
    <div className="App">
      <FilterProvider>
        <Homepage/>
      </FilterProvider>
    </div>
  );
}

export default App;
