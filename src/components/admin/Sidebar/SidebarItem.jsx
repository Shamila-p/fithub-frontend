import React from 'react';

function SidebarItem({ item, index, selected, setSelected }) {
    console.log(index)
    console.log(selected)
    
  return (
    <div
      className={selected === index ? "menuItem active" : "menuItem"}
      onClick={() => setSelected(index)}
    >

      <item.icon />
      <span>{item.heading}</span>
    </div>
  );
}

export default SidebarItem;
