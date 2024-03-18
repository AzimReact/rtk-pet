import { Route, Routes } from 'react-router-dom';
import PostItemPage from './pages/PostItemPage';
import Main from './pages/Main';
import PostsPage from './pages/PostsPage';
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
