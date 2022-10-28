import TopButton from "./components/feature/TopButton";
import GlobalStyle from "./shared/GlobalStyle";
import Router from "./shared/Router";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
      <TopButton />
    </div>
  );
}

export default App;
