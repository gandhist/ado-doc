import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DummyDokter1, DummyDokter2, DummyDokter3 } from '../../assets'
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { colors, fonts, showError } from '../../utils'
import { Firebase } from "../../config/";

const Doctor = ({ navigation }) => {

    const [news, setNews] = useState([])
    const [categoryDoc, setCategoryDoc] = useState([])
    const [ratedDoctor, setRatedDoctor] = useState([])

    const getNews = () => {
        Firebase.database().ref('news/').once('value')
            .then(res => {
                if (res.val()) {
                    const filteredData = res.val().filter(el => el != null);
                    setNews(filteredData)
                }
            })
            .catch(err => {
                console.log('err data news', err)
                showError({ message: 'Failed to get data', description: err.toString() })
            })
    }

    const getCategoryDoctor = () => {
        Firebase.database().ref('category_doctor/').once('value')
            .then(res => {
                if (res.val()) {
                    const filteredData = res.val().filter(el => el != null);
                    setCategoryDoc(filteredData)
                }
            })
            .catch(err => {
                console.log('err data category', err)
                showError({ message: 'Failed to get data', description: err.toString() })
            })
    }

    const getTopRatedDoctor = () => {
        Firebase.database().ref('doctors/').orderByChild('rate').limitToLast(3).once('value')
            .then(res => {
                if (res.val()) {
                    setRatedDoctor(parseObjToArray(res.val()))
                }
            })
            .catch(err => {
                console.log('err top rated', err)
                showError({ message: 'Failed to get data toprated', description: err.toString() })
            })
    }

    const parseObjToArray = (listObj) => {
        const data = [];
        Object.keys(listObj).map(key => {
            data.push({
                id: key,
                data: listObj[key]
            })
        })
        return data;
    }


    useEffect(() => {
        getNews()
        getCategoryDoctor()
        getTopRatedDoctor()
    }, [])
    return (
        <View style={styles.page} >
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapperSection}>
                        <Gap height={30} />
                        <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
                        <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
                    </View>
                    <View style={styles.wrapperScroll} >
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            <View style={styles.category}>
                                <Gap width={32} />
                                {categoryDoc.map(item => {
                                    return <DoctorCategory key={item.id} title={item.category} onPress={() => navigation.navigate('ChooseDoctor', item)} />
                                })}
                                <Gap width={22} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.wrapperSection}>
                        <Text style={styles.sectionLabel}>Top rated doctor</Text>
                        {ratedDoctor.map(doc => {
                            return <RatedDoctor avatar={{ uri: doc.data.photo }} onPress={() => navigation.navigate('DoctorProfile', doc)} name={doc.data.fullName} desc={doc.data.profession} />
                        })}
                        <Text style={styles.sectionLabel}>Good news</Text>
                    </View>
                    {
                        news.map(item => {
                            return <NewsItem key={item.id} title={item.title} date={item.date} image={item.image} />
                        })
                    }
                    <Gap height={30} />

                </ScrollView>
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    welcome: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 209
    },
    category: {
        flexDirection: 'row'
    },
    wrapperScroll: {
        marginHorizontal: -16
    },
    wrapperSection: {
        paddingHorizontal: 16
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16
    }
})
