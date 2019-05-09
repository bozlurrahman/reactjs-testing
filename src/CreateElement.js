import React from 'react';

function MyElement(props) {
  console.log(props);  
  return (
    React.createElement("div",
      {
        className: "shopping-list"
      },
      React.createElement("h1", null, "Shopping List for ", props.name),
      React.createElement("ul", null,
        React.createElement("li", null, "Instagram"),
        React.createElement("li", null, "WhatsApp"),
        React.createElement("li", null, "Oculus")
      )
    )
  )
}

export default MyElement;
