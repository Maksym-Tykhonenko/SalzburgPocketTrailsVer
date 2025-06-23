import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { shared, stories, card } from '../salzburgconsts/salzburgstyles';
import { salzburglogo } from '../trailimprts/trailimgs';
import { navigateArrow, save, saved } from '../trailimprts/trailicns';
import salzburgstories from '../salzburgconsts/salzburgstories';

const Salzburgstories = () => {
    const navigation = useNavigation();
    const [currentCategory, setCurrentCategory] = useState('Hidden Stories');
    const [savedStories, setSavedStories] = useState([]);

    const loadSavedStories = async () => {
        try {
            const saved = await AsyncStorage.getItem('SALZBURG_SAVED_STORIES');
            const parsed = saved ? JSON.parse(saved) : [];
            setSavedStories(parsed);
        } catch (error) {
            Alert.alert('Try later', 'Error loading saved stories');
        }
    };

    useFocusEffect(
        useCallback(() => {
            loadSavedStories();
        }, [])
    );

    useEffect(() => {
        loadSavedStories();
    }, [savedStories])

    const selected = salzburgstories.find(s => s.category === currentCategory);

    const storeSavedStory = async (story) => {
        try {
            const saved = await AsyncStorage.getItem('SALZBURG_SAVED_STORIES');
            const parsed = saved ? JSON.parse(saved) : [];

            const exists = parsed.find(item => item.title === story.title);

            let updated;
            if (exists) {
                updated = parsed.filter(item => item.title !== story.title);
            } else {
                const storyWithCategory = { ...story, category: currentCategory };
                updated = [...parsed, storyWithCategory];
            }

            await AsyncStorage.setItem('SALZBURG_SAVED_STORIES', JSON.stringify(updated));
        } catch (error) {
            Alert.alert('Try later', 'Error saving/removing story');
        }
    };

    const isStorySaved = (item) => {
        return savedStories.some(
            s => s.title === item.title && s.category === currentCategory
        );
    };

    return (
        <View style={shared.container}>

            <TouchableOpacity
                style={stories.saveNavBtn}
                onPress={() => navigation.navigate('Salzburgsavedstories')}
            >
                <Image source={save} style={stories.saveIcon} />
            </TouchableOpacity>

            <Image source={salzburglogo} style={shared.logo} />

            <Text style={shared.routeDesc}>Places you might pass by, but they have secrets to tell.</Text>

            <View style={[shared.row, { justifyContent: 'space-between', alignItems: 'center', marginBottom: 23 }]}>
                {
                    ['Hidden Stories', 'Famous Spots'].map((cat, j) => (
                        <TouchableOpacity
                            key={j}
                            style={[stories.categoryBtn, currentCategory === cat && {borderBottomColor: '#fff'}]}
                            onPress={() => setCurrentCategory(cat)}
                        >
                            <Text style={stories.categoryText}>{cat}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>

            <ScrollView style={{ width: '100%' }}>
                
                {selected?.items.map((item, index) => (
                    <View key={index} style={card.container}>

                        <TouchableOpacity
                            style={[stories.saveNavBtn, {top: 10, right: 15}]}
                            onPress={() => storeSavedStory(item)}
                        >
                            <Image source={isStorySaved(item) ? saved : save} style={[stories.saveIcon, {width: 20}]} />
                        </TouchableOpacity>

                        <Text style={card.title}>{item.title.toUpperCase()}</Text>

                        {
                            item.previewText.map((text, k) => (
                                <Text key={k} style={card.description}>{text}</Text>
                            ))
                        }

                        <Image source={item.previewImage} style={card.previewImage} />

                        <TouchableOpacity
                            style={card.navBtn}
                            onPress={() => navigation.navigate('Salzburgstoryinfo', {story: item})}
                        >
                            <Text style={card.navBtnText}>Open</Text>
                            <Image source={navigateArrow} style={card.navBtnIcon} />
                        </TouchableOpacity>
                    </View>
                ))}

                <View style={{height: 200}} />
            </ScrollView>

        </View>
    )
};

export default Salzburgstories;