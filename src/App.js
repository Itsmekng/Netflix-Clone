import FrontViewMain from "./Component/FrontViewMain"
import Bottom from "./Bottom Box/Bottom"
import FAQ from "./FAQ/Faq"
import Footer from "./Footer/Footer";
function App() {

  return (
    <>
 <FrontViewMain/>
<Bottom/>
<div style={{backgroundColor: "black"}}>
<FAQ/>
</div>
<Footer/>
</>
  );
}

export default App;
