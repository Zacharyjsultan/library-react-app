import BookList from './components/book/BookList';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import BookDetail from './components/book/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
   
    <main className="container">
      <Link to="/books">BOOKS!</Link>
      <h1>Library Catalog?</h1>
      <Switch> 
       
       
        <Route path="/books:id" component={ BookDetail } />
        <Route path="/books:id" component={ BookList } />

    
        

      </Switch> 
    </main>

  );
}

export default App;
