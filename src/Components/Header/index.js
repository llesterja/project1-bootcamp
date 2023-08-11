import React from 'react';

const Header = (props) =>{
  return(
    <div className='col col-sm-8'>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;