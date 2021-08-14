import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Category, Header, NewsItem, Gap } from '../../components';
import { colors } from '../../utils/colors';

const Beranda = () => {
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
                                <Category/>
                                <Category/>
                                <Category/>
                                <Category/>
                                <Category/>
                                <Gap width={40}/>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.news}>
                        <NewsItem/>
                        <NewsItem/>
                        <NewsItem/>   
                    </View>
      
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
        alignItems: 'center'
    },
})