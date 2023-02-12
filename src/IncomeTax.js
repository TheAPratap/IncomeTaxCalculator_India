import React, { useState } from 'react';
import './IncomeTax.css';

const IncomeTax = () => {
  const [income, setIncome] = useState(0);
  const [tax, setTax] = useState(0);

  const handleChange = (e) => {
    setIncome(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let calculatedTax = 0.0;
    if (income > 700000) {
      if (income <= 300000) {
        calculatedTax = 0;
      } else if (income <= 600000) {
        calculatedTax = (income - 300000) * 0.05;
      } else if (income <= 900000) {
        calculatedTax = (300000 * 0.05) + ((income - 600000) * 0.1);
      } else if (income <= 1200000) {
        calculatedTax = (300000 * 0.05) + (300000 * 0.1) + ((income - 900000) * 0.15);
      } else if (income <= 1500000) {
        calculatedTax = (300000 * 0.05) + (300000 * 0.1) + (300000 * 0.15) + ((income - 1200000) * 0.2);
      } else {
        calculatedTax = (300000 * 0.05) + (300000 * 0.1) + (300000 * 0.15) + (300000 * 0.2) + ((income - 1500000) * 0.3);
      }
    }

    setTax(calculatedTax);
  };

  // const formattedTax = tax.toLocaleString();

  return (
    <div className="IncomeTax">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Enter your income (in Rupees):
            <input type="number" value={income} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Calculate Tax</button>
      </form>
      {tax > 0 ? (
        <div className="IncomeTax-result">
          Your tax is: <span className="IncomeTax-tax">₹{tax.toLocaleString()}</span>
        </div>
      ) : (
        <div className="IncomeTax-result">
          Your tax is: <span className="IncomeTax-tax">₹0</span>
        </div>
      )}
    </div>
  );
};

export default IncomeTax;
