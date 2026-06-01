import './App.css'
import Header from './Widgets/Header/Header.jsx';
import BannerPrincipal from './Widgets/BannerPrincipal/BannerPrincipal.jsx';
import Form from './Widgets/Form/Form.jsx';
function App() {

  return (
    <>
      <Header/>
      <div id="gambi">
      <BannerPrincipal/>
      <Form/>
      </div>
    </>
  )
}

export default App
