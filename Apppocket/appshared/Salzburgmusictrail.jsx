import React, { createContext, useContext, useEffect, useState } from 'react';
import TrackPlayer, { RepeatMode } from 'react-native-track-player';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SalzburgMusicContext = createContext();

export const useSalzburgMusic = () => useContext(SalzburgMusicContext);

export const SalzburgMusicProvider = ({ children }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const [musicVolume, setMusicVolume] = useState(1);

  useEffect(() => {
    const setupSalzburgMusic = async () => {
      try {
        await TrackPlayer.setupPlayer();

        await TrackPlayer.add({
          id: 'salzburg-music-track',
          url: require('../salzburgassts/salzburgmusictrail.mp3'),
          title: 'Salzburg Pocket Trails music',
        });

        await TrackPlayer.setRepeatMode(RepeatMode.Track);

        const savedMusicState = await AsyncStorage.getItem('SALZBURG_MUSIC_STATE');
        if (savedMusicState !== null) {
          const parsedState = JSON.parse(savedMusicState);
          setIsMusicPlaying(parsedState);
          parsedState ? await TrackPlayer.play() : await TrackPlayer.pause();
        } else {
          await TrackPlayer.play();
        }

        await TrackPlayer.setVolume(musicVolume);
      } catch (error) {
        console.log('Error setting up Salzburg Music Player', error);
      }
    };

    setupSalzburgMusic();

    return () => {
      TrackPlayer.stop();
    };
  }, []);

  useEffect(() => {
    isMusicPlaying ? TrackPlayer.play() : TrackPlayer.pause();
  }, [isMusicPlaying]);

  useEffect(() => {
    TrackPlayer.setVolume(musicVolume);
  }, [musicVolume]);

  const toggleSalzburgMusic = async () => {
    const newMusicState = !isMusicPlaying;
    setIsMusicPlaying(newMusicState);
    await AsyncStorage.setItem('SALZBURG_MUSIC_STATE', JSON.stringify(newMusicState));
  };

  return (
    <SalzburgMusicContext.Provider value={{
      isMusicPlaying,
      toggleSalzburgMusic,
      musicVolume,
      setMusicVolume
    }}>
      {children}
    </SalzburgMusicContext.Provider>
  );
};