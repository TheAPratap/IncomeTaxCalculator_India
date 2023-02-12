import React from 'react';
import './IncomeTax.css';
import './TaxBreakdown.css';

const TaxBreakdown = () => {
  return (
    <div className="TaxBreakdown">
      <h3 className="Title">New proposed tax slab for FY24</h3>
      <table className = "table">
        <thead>
          <tr>
            <th>Income Slab</th>
            <th>Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>₹0-3 Lakh</td>
            <td className="TaxRate">Nil</td>
          </tr>
          <tr>
            <td>₹3-6 Lakh</td>
            <td className="TaxRate">5%</td>
          </tr>
          <tr>
            <td>₹6-9 Lakh</td>
            <td className="TaxRate">10%</td>
          </tr>
          <tr>
            <td>₹9-12 Lakh</td>
            <td className="TaxRate">15%</td>
          </tr>
          <tr>
            <td>₹12-15 Lakh</td>
            <td className="TaxRate">20%</td>
          </tr>
          <tr>
            <td>Above ₹15 Lakh</td>
            <td className="TaxRate">30%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaxBreakdown;
