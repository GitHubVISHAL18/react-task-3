import React from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;