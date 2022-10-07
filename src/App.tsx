import React, { useState } from 'react';
import './App.css';
type ob = {
    color: string;
    shape: string;
}
let colors: string[] = ["Green", "Blue", "Red", "Cyan"];
let shapes: string[] = ["Circle", "Square", "Triangle"];
let elements: ob[] = [];
for (let i = 0; i < 3; i++) {
    elements.push({ color: colors[i], shape: shapes[i] });
}
const App: React.FC = () => {
  return (
      <div className="App">
          <span className="heading">Shapie</span>
    </div>
  );
}

export default App;
