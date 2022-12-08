import React from 'react';
// import App from './App';
function Card(){
    return(
        <div className='Card'>
          <h3 className='title'>Ehsan Ellahi</h3>
          <img className='image' src='' alt='Please Wait!'></img>
          <div className='footer'>
            <p className='number'>+923078607264</p>
            <p className='mail'>ehsanellahi051@gmail.com</p>
            <p></p>
          </div>

        </div>
    );
}
export default Card;
// {props.name}{props.img}{props.num}{props.mail}