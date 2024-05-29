import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <>
      <div className="alert alert-secondary" role="alert">
        <div className="button-container">
          <Button btnText="Black" colorCode="#000000" btnClass="btn-dark" />
          <Button btnText="Red" colorCode="#FF2D00" btnClass="btn-danger" />
          <Button btnText="Green" colorCode="#059E48" btnClass="btn-success" />
          <Button btnText="Blue" colorCode="#3783E5" btnClass="btn-info" />
          <Button btnText="Yellow" colorCode="#F0B108" btnClass="btn btn-warning" />
          <Button btnText="Gray" colorCode="#BABABA" btnClass="btn btn-secondary" />
          <Button btnText="White" colorCode="#FFFFFF" btnClass="btn btn btn-light" />
        </div>
      </div>
    </>
  );
}

export default App;
