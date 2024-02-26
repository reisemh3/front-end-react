// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {Dispatch, SetStateAction, useContext, useEffect} from 'react';
import './Livres.css';
import './../../styles/pages.css';
import SearchBar from '../../components/SearchBar';
import BookCard from '../../components/BookCard';

// import Header from "../../components/Header";

function Livres(){
const handleSearch = () => {
  // rajouté le code pour faire les appelles à l'API 
  console.log('Search query');
};


  return (
        <div className='container'>
        <div className='header'>
            <h1 className='title'>Mon Moteur de Recherche</h1>
            <SearchBar onSearch={handleSearch} />
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


        <div className='booklist'>
            <BookCard
                title="Titre du Livre 1"
                author="Auteur 1"
                /*coverImage="https://example.com/book1-cover.jpg"*/
            />

            <BookCard
                title="Titre du Livre 2"
                author="Auteur 2"
                /*coverImage="https://example.com/book2-cover.jpg"*/
            />  
            <BookCard
                title="Titre du Livre 3"
                author="Auteur 3"
                /*coverImage="https://example.com/book3-cover.jpg"*/
            />  
        </div>
    </div>
  );
}
export default Livres;
