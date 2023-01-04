import React from "react";

function index() {
  return (
    <div>
      <h1>Investor.js</h1>
      <p>Various functions for calculations</p>
      <a href="docs">Get Started</a>

      <hr />
      <br />
      <p>Install </p>
      <code>npm i investorjs</code>

      <hr />
      <p>Usage </p>
      <code>import * as investor from "investorjs";</code>

      <br />
      <hr />

      <p>Example </p>
      <code>import * as investor from "investorjs";</code>
      <pre>
        <code>
          {`\n \n \n var marketPrice = 148.9; \nvar eps = 3.91; \ninvestor.peRatio( marketPrice, eps );\n // => 38.08 `}
        </code>
      </pre>
    </div>
  );
}

export default index;
