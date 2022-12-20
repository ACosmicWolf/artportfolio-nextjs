import React from "react";
import Image from "next/image";

export default class Card extends React.Component {
  render() {
    return (
      <div className="h-auto bg-ctp-crust m-5 max-w-lg">
        <div>Header</div>
        <div className="h-80"></div>
      </div>
    );
  }
}
