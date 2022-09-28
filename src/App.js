import BookList from './components/book/BookList';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import BookDetail from './components/book/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
   
    <main className="container">
      
      <h1>Alchemy Library Catalog</h1>
      <h2>Click for books!</h2>
      <Link to="/books">Book Collection</Link>
      
      <Switch> 
       
       
        <Route path="/books/:id" component={BookDetail} />
        <Route path="/books" component={BookList} />
      
        
      </Switch> 
    </main>

  );
}

export default App;
