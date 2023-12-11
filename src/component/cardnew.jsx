import React from 'react';

const CardNew=(props)=> {
  return (
   
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.title}</h5>
           <img >{props.image}</img>
            <hr/>
            <div><p>{props.list1}</p></div>
           <p>{props.list}</p>
           
          </div>
        </div>
      </div>

  );
}

export default CardNew;