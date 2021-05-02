import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from "../../assets";
import { Button, Gap, Header, Link } from '../../components';
import { Firebase } from '../../config';
import { colors, fonts, storeData } from '../../utils';

const UploadPhoto = ({ route, navigation }) => {
    const { fullName, profession, uid } = route.params;
    const [hasPhoto, setHasPhoto] = useState(false)
    const [photoDB, setPhotoDB] = useState('')
    const [photo, setPhoto] = useState(ILNullPhoto)

    const getImageFromGallery = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: true,
            quality: 0.8,
            maxWidth: 200,
            maxHeight: 200
        }
        launchImageLibrary(options, (res) => {
            const { didCancel } = res;
            if (!didCancel) {
                const source = { uri: res.uri };
                const photoToDB = `data:${res.type};base64,${res.base64}`;
                setPhotoDB(photoToDB)
                setPhoto(source)
                setHasPhoto(true)
            }
        })
    }

    const upload = () => {
        Firebase.database().ref(`users/${uid}/`)
            .update({ photo: photoDB }) // definedata to save
        const data = route.params;
        data.photo = photoDB;
        storeData('user', data)
        navigation.replace('MainApp')
    }
    return (
        <View style={styles.page} >
            <Header onPress={() => navigation.goBack()} title="Upload Photo" />
            <View style={styles.content} >
                <View style={styles.profile} >
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImageFromGallery}>
                        <Image source={photo} style={styles.avatar} />
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
                    </TouchableOpacity>
                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.job}>{profession}</Text>
                </View>
                <View>
                    <Button disable={!hasPhoto} title="Upload and Continue" onPress={upload} />
                    <Gap height={30} />
                    <Link title="Skip for this" textAlign="center" size={16} onPress={() => navigation.replace('MainApp')} />
                </View>
            </View>

        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    avatarWrapper: {
        height: 130,
        width: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        height: 110,
        width: 110,
        borderRadius: 110 / 2
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    job: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 60,
        flex: 1,
        justifyContent: 'space-between'
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})
