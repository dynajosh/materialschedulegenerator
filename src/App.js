import CivilWorks from './pages/civilWorks';
import SimpleTabs from './pages/mainPage';
import {Provider} from 'react-redux';
import store from './store'

function App() {
  
  return (
    <Provider store ={store}>
    <div className="App">
    <SimpleTabs />
    {/* <CivilWorks />       */}
    </div>
    </Provider>
  );
}

export default App;
