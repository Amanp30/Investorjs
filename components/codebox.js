import React from "react";
import Highlight from "react-highlight.js";
import { v4 as uuidv4 } from "uuid";

function codebox({ name, text, args, rtrn, example }) {
  return (
    <>
      <h2 className="nameoffunc">{name}</h2>
      <p className="mgbtm">{text}.</p>
      <div className="mgbtm args">Arguments</div>
      <ul className="matic">
        {args.map(({ text, argument, index }) => {
          return (
            <>
              <li className="removebullets" key={uuidv4()}>
                <span className="argument">{argument}</span>
                {text && <>{`: ${text}`}</>}
              </li>
            </>
          );
        })}
      </ul>
      <div className="mgbtm args">Returns </div>
      <ul className="matic">
        <li className="removebullets" key={uuidv4()}>
          {rtrn}
        </li>
      </ul>
      <div className="mgbtm args">Example </div>
      <div style={{ margin: "0" }}>
        <Highlight language="javascript">{example}</Highlight>
      </div>
    </>
  );
}

export default codebox;
