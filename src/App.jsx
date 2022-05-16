import './App.css';
import { Mobile } from './components/Mobile';

function App() {
  const res = [
    {
      title: 'Mobile Operating System',
      items: ['Android', 'Blackberry', 'iPhone', 'Windows Phone'],
    },
    {
      title: 'Mobile Manufacturer',
      items: ['Samsung', 'HTC', 'Micromax', 'Apple'],
    },
  ];

  return <div className="App">    
  <Mobile />
  </div>;
}

export default App;
