import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Example() {


  function onClickText() {
  }

  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="example-link u-color-basic-bright"
          target="_blank"
          rel="noopener noreferrer"
        >
          test
        </a>
        <Button onClick={onClickText}>Button</Button>
      </header>
    </div>
  );
}
