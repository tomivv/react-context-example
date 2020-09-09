import React from 'react';

export default function Alert({ alert }) {
  if (alert.hidden) {
    return (
      <div className="hidden">

      </div>
    )
  } else if (!alert.hidden) {
    return (
      <div className="visible">
        <h1>MOI OON ALERT</h1>
      </div>
    )
  }
}