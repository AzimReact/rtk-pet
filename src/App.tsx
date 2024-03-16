import { Route, Routes } from 'react-router-dom';
import './App.css';
import Posts from './components/Posts';
import PostItemPage from './pages/PostItemPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/:id" element={<PostItemPage />} />
      </Routes>

    </div>
  );
}

export default App;
