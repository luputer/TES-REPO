import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';


const GrowceryItems = [
    {
      id: 1,
      name: 'kopi bubuk',
      quantity: 6,
      checked: true,
    },
    {
      id: 2,
      name: 'Gula pasir',
      quantity: 5,
      checked: true,
    },
    {
      id: 3,
      name: 'Air miniral',
      quantity: 3,
      checked: false,
    },
  ]


  function App(){
    const [item, setItems] = useState(GrowceryItems);

    function hendeAddItems(item){
        setItems(...setItems, item)
    }

    function hendeleDeleteItem(id){
        setItems((items) => items.filter((item) => item.id != id));
    }

    function hendletoggle(id){
        setItems((items) => items.map((item) => item.id === id ? {...item, checked : !item.checked} : item))
    }

    function hendleClearItems(){
        setItems([])
    }

    return (
        <>
        <div className='app'>
        </div>
        <h1>hello word</h1>
        </>
    )

  }
  



export default App;