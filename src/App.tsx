import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://www.minimundi.com.br/cdn/imagens/produtos/original/miniatura-carro-batmaovel-com-figura-liga-da-justiaYa-metals-die-cast1-24-jada-toys-99232_a.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
