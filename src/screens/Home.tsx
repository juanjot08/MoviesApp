import React, { useState, useEffect  } from 'react';
import {
    View,
} from 'react-native';
import MovieList from '../components/MovieList';
import { SearchBar } from '@rneui/themed';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function HomeScreen({ navigation }){

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const backgroundStyle = {
        backgroundColor: Colors.darker,
    };

	const getMovieRequest = async (searchValue: string) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&plot=full&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

        console.info(responseJson);

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

    
    const onChangeSearch = search => setSearchValue(search);

    return (
        <View style={backgroundStyle}>
          <SearchBar
            placeholder="Busca una Pelicula"
            onChangeText={onChangeSearch}
            value={searchValue}
            />
          <MovieList movies={movies} />
        </View>
      );
}

export default HomeScreen;