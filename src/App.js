// import logo from './logo.svg';
import './App.css';
import IncomeTax from './IncomeTax';
import TaxBreakdown from './TaxBreakdown';
import Overview from './Overview';

const App = () => {
  return (
    <div className="App">
      
          <h2>Income Tax Calculator, India</h2><h5>Estimator for Taxes, According to Union Budget 2023-2024</h5>
      <IncomeTax />
      <TaxBreakdown/>
      <Overview/>
    </div>
  );
}

export default App;
