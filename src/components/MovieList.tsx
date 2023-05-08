import React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type MovieProps = {Title: string, Post: string};

var deviceWidth = Dimensions.get("window").width;

const Movie = ({Title, Post}: MovieProps) => (
    <View style = {{alignItems:'center'}}>
      <Text>{Title}</Text>
      <Image 
        style = {{width: deviceWidth,height: 500,resizeMode: 'contain'}}
        source={{
          uri: Post
        }} />
    </View>
  );

const backgroundStyle = {
    backgroundColor: Colors.darker,
};


const MovieList = (props: { movies: any[]; }) => {
	return (
    <SafeAreaView style={backgroundStyle}>
        <FlatList
          style={backgroundStyle}
          data={props.movies}
          renderItem={({item}) => <Movie Title={item.Title} Post={item.Poster} />}
          keyExtractor={item => item.imdbID}
        />
      </SafeAreaView>
	);
};

export default MovieList;