import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');


export const shared = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingTop: 160
    },

    logo: {
        width: 51,
        height: 51,
        resizeMode: 'contain',
        position: 'absolute',
        top: height * 0.08,
        alignSelf: 'center',
        zIndex: 10
    },

    routeDesc: {
        fontSize: 14,
        fontWeight: '300',
        fontStyle: 'italic',
        color: '#C6C6C6',
        marginBottom: 10
    },

    row: {
        flexDirection: 'row',
        width: '100%'
    }

});


export const compwrapper = StyleSheet.create({

    upper: {
        position: 'absolute',
        top: 0,
        width: width
    },

    trailComp: {
        width: '100%',
        height: '100%'
    },

    bottom: {
        position: 'absolute',
        bottom: 0,
        width: width
    }

});


export const upper = StyleSheet.create({

    container: {
        width: '100%',
        paddingTop: height * 0.08,
        paddingBottom: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },

    gobackArrow: {
        width: 18,
        height: 20,
        marginRight: 15,
        resizeMode: 'contain'
    },

    route: {
        fontSize: 32,
        fontWeight: '500',
        lineHeight: 38,
        color: '#fff',
        width: 140
    }

});


export const bottom = StyleSheet.create({

    container: {
        width: '100%',
        paddingHorizontal: 40,
        paddingTop: 20,
        paddingBottom: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 10,
    },

    buttonIcon: {
        width: 37,
        height: 37,
        resizeMode: 'contain',
        padding: 5
    }

});


export const loader = StyleSheet.create({

    text: {
        fontSize: 38,
        fontWeight: '500',
        color: '#fff',
        marginVertical: 8,
        alignSelf: 'center',
        textAlign: 'center'
    },

    underline: {
        width: '80%',
        height: 2,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginVertical: 10,
        alignSelf: 'center',
        textAlign: 'center'
    },

});


export const stories = StyleSheet.create({

    saveNavBtn: {
        position: 'absolute',
        zIndex: 10,
        top: height * 0.1,
        right: 20
    },

    saveIcon: {
        width: 28,
        height: 27,
        resizeMode: 'contain'
    },

    categoryBtn: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 9,
        borderBottomColor: '#000',
        borderBottomWidth: 2
    },

    categoryText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
        lineHeight: 22
    },

});


export const secrets = StyleSheet.create({

    button: {
        width: '100%',
        backgroundColor: '#333333',
        marginBottom: 10,
        borderRadius: 28,
        paddingVertical: 10,
        paddingHorizontal: 20
    },

    buttonText: {
        fontSize: 24,
        fontWeight: '500',
        color: '#fff',
        lineHeight: 28
    }

});


export const read = StyleSheet.create({

    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 28
    },

    button: {
        width: 274,
        backgroundColor: '#DA021B',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 14,
        borderRadius: 11,
        marginTop: 46
    },

    buttonText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        lineHeight: 22,
    }

});


export const card = StyleSheet.create({

    container: {
        width: '100%',
        borderRadius: 28,
        backgroundColor: '#333333',
        marginBottom: 22,
        paddingTop: 10
    },

    title: {
        fontSize: 24,
        fontWeight: '500',
        color: '#fff',
        lineHeight: 28,
        marginBottom: 10,
        textAlign: 'center',
        alignSelf: 'center',
        width: '82%'
    },

    description: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        lineHeight: 16,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 3
    },

    previewImage: {
        width: '100%',
        height: 229,
        resizeMode: 'contain',
        marginTop: 10
    },

    navBtn: {
        position: 'absolute',
        bottom: 10,
        left: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },

    navBtnText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff',
        lineHeight: 24,
        marginRight: 30
    },

    navBtnIcon: {
        width: 36,
        height: 36,
        resizeMode: 'contain'
    }

});


export const modal = StyleSheet.create({

    background: {
        backgroundColor: 'rgba(165, 13, 30, 0.6)',
        width: width,
        height: height,
        position: 'absolute',
        top: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    container: {
        width: '90%',
        maxHeight: '70%',
        borderRadius: 28,
        borderWidth: 1,
        borderColor: '#fff',
    },

    gradient: {
        width: '100%',
        borderRadius: 28,
        maxHeight: '100%'
    },

    inner: {
        width: '100%',
        maxHeight: '100%',
        paddingHorizontal: 20,
        paddingVertical: 40
    },

    closeBtn: {
        position: 'absolute',
        top: -10,
        right: -10,
        zIndex: 10
    },

    closeIcon: {
        width: 46,
        height: 46,
        resizeMode: 'contain'
    },

    text: {
        fontSize: 16,
        fontWeight: '400',
        color: '#fff',
        lineHeight: 22,
        marginBottom: 40
    }

});


export const adventure = StyleSheet.create({

    score: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        zIndex: 10,
    },

    failImage: {
        width: 114,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 42,
        marginTop: 41,
        alignSelf: 'center'
    }

});


export const settings = StyleSheet.create({

    icon: {
        width: 42,
        height: 32,
        resizeMode: 'contain',
        marginRight: 10
    },

    label: {
        fontSize: 32,
        fontWeight: '500',
        color: '#fff',
        lineHeight: 36,
    },

    slider: {
        height: 21,
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#707070',
        paddingHorizontal: 5,
        marginBottom: 56,
        borderWidth: 1,
        borderColor: '#fff'
    },

    switch: {
        width: 47,
        height: 32,
        borderRadius: 50,
        borderWidth: 4,
        padding: 3,
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },

    switchInner: {
        width: 18,
        height: 18,
        borderRadius: 100,
        borderWidth: 4
    }

});