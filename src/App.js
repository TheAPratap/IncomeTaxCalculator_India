// import logo from './logo.svg';
import './App.css';
import IncomeTax from './IncomeTax';
import TaxBreakdown from './TaxBreakdown';

const App = () => {
  return (
    <div className="App">
      
          <h2>Income Tax Calculator, India</h2><h5>Estimator for Taxes, According to Union Budget 2023-2024</h5>
      <IncomeTax />
      <TaxBreakdown/>
      <h2>Income Tax Department, Ministry of Finance, India</h2>
        <p>The Income Tax Department, under the Ministry of Finance in India, is responsible for enforcing laws and regulations related to the assessment and collection of taxes on income. The department works to ensure fair and efficient tax collection while providing support and assistance to taxpayers.</p>
    </div>
  );
}

export default App;
