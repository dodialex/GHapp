import React, { useEffect, useState } from 'react';
import { Linking, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Category, Gap, Header, NewsItem } from '../../components';
import { Fire } from '../../config';
import { colors } from '../../utils/colors';
import { JSONCategory } from '../../assets';

const Beranda = ({onPress,navigation}) => {

    const [news, setNews] = useState([]);
    useEffect(() => {
        Fire.database().ref('news/').once('value').then(res => {
                console.log('data:', res.val());
                if (res.val()) {
                    setNews(res.val());
                }
            })
       
    }, []);

    return (
        <View style={styles.container}>
            <Header title='Gekari Kasih Karunia Jemaat Haleluya' type='secondary'/>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.wrapper}>
                    <View style={styles.page}>

                    <View style={styles.scrollView}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <Gap width={40}/>
                                 {JSONCategory.data.map(item => {
                                     return <Category
                                                key={item.id}
                                                category={item.category}/>
                                 })}
                                <Gap width={40}/>
                            </View>
                        </ScrollView>
                    </View>
                        {news.map(item => {
                            return (
                                <TouchableOpacity 
                                    style={styles.news} 
                                    onPress={() => Linking.openURL(item.link)}>
                                <NewsItem
                                    key={item.id}
                                    label={item.label}
                                    title={item.title}
                                    image={item.image}
                                />
                                </TouchableOpacity>

                            );
                        })} 
      
                    </View>
                </View>
            </ScrollView>
            
            
        </View>
    )
}

export default Beranda

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    page: {
        backgroundColor: colors.background,
        flex: 1,
        paddingVertical: 50,
    },
    category: {  
        flexDirection: 'row'
    },
    scrollView: {
        marginHorizontal: -40
    },
    wrapper: {
        paddingHorizontal: 40
    },

    news: {
        alignItems: 'center',
    },
})