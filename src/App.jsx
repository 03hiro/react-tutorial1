import { Main } from "./conponents/Main";
import { Header } from "./conponents/Header";
import { Footer } from "./conponents/Footer";



export const  Loading = () => {
  return <p>Now Loading...</p>
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}


export default App;