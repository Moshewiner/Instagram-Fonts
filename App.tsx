import React from 'react';
import {Picker, StyleSheet, Text, TextInput, View} from 'react-native';
import {useFonts} from '@use-expo/font';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';


export default function App() {
    let fonts = {
        "Handlee": require('./assets/fonts/Handlee/Handlee-Regular.ttf'),
        "Just Another Hand": require('./assets/fonts/Just_Another_Hand/JustAnotherHand-Regular.ttf'),
        // "Lovers Quarrel": require('./assets/fonts/Lovers_Quarrel/LoversQuarrel-Regular.ttf'),
        "Lobster": require('./assets/fonts/Lobster/Lobster-Regular.ttf'),
        // "Lobster Two": require('./assets/fonts/Lobster_Two/LobsterTwo-Regular.ttf'),
        // "Vidaloka": require('./assets/fonts/Vidaloka/Vidaloka-Regular.ttf'),
        "Boogaloo": require('./assets/fonts/Boogaloo/Boogaloo-Regular.ttf'),
        // "Love Ya Like A Sister": require('./assets/fonts/Love_Ya_Like_A_Sister/Love_Ya_Like_A_Sister-Regular.ttf'),
        // "Rouge Script": require('./assets/fonts/Rouge_Script/Rouge_Script-Regular.ttf'),
        // "Loved by the King": require('./assets/fonts/Loved_by_the_King/Loved_by_the_King-Regular.ttf'),
        // "Euphoria Script": require('./assets/fonts/Euphoria_Script/Euphoria_Script-Regular.ttf'),
        // "Coiny": require('./assets/fonts/Coiny/Coiny-Regular.ttf'),
        // "Londrina Outline": require('./assets/fonts/Londrina_Outline/Londrina_Outline-Regular.ttf'),
        // "Londrina Shadow": require('./assets/fonts/Londrina_Shadow/Londrina_Shadow-Regular.ttf'),
        // "Londrina Sketch": require('./assets/fonts/Londrina_Sketch/Londrina_Sketch-Regular.ttf'),
        // "Alex Brush": require('./assets/fonts/Alex_Brush/Alex_Brush-Regular.ttf'),
        // "Playfair Display": require('./assets/fonts/Playfair_Display/Playfair_Display-Regular.ttf'),
        // "Dancing Script bold 700": require('./assets/fonts/Dancing_Script_bold_700/Dancing_Script_bold_700-Regular.ttf'),
        // "Indie Flower": require('./assets/fonts/Indie_Flower/Indie_Flower-Regular.ttf'),
        // "Pacifico": require('./assets/fonts/Pacifico/Pacifico-Regular.ttf'),
        // "Bebas Neue": require('./assets/fonts/Bebas_Neue/Bebas_Neue-Regular.ttf'),
        // "Teko bold 600": require('./assets/fonts/Teko_bold_600/Teko_bold_600-Regular.ttf'),
        // "Abril Fatface": require('./assets/fonts/Abril_Fatface/Abril_Fatface-Regular.ttf'),
        // "Amatic SC bold 700": require('./assets/fonts/Amatic_SC_bold_700/Amatic_SC_bold_700-Regular.ttf'),
        // "Fredoka One": require('./assets/fonts/Fredoka_One/Fredoka_One-Regular.ttf'),
        // "Caveat bold 700": require('./assets/fonts/Caveat_bold_700/Caveat_bold_700-Regular.ttf'),
        // "Satisfy": require('./assets/fonts/Satisfy/Satisfy-Regular.ttf'),
        // "Patrick Hand": require('./assets/fonts/Patrick_Hand/Patrick_Hand-Regular.ttf'),
        // "Rokkitt bold 700": require('./assets/fonts/Rokkitt_bold_700/Rokkitt_bold_700-Regular.ttf'),
        // "Courgette": require('./assets/fonts/Courgette/Courgette-Regular.ttf'),
        // "Special Elite": require('./assets/fonts/Special_Elite/Special_Elite-Regular.ttf'),
        // "Tinos bold 700 italic": require('./assets/fonts/Tinos_bold_700_italic/Tinos_bold_700_italic-Regular.ttf'),
        // "Alfa Slab One": require('./assets/fonts/Alfa_Slab_One/Alfa_Slab_One-Regular.ttf'),
        // "Kaushan Script": require('./assets/fonts/Kaushan_Script/Kaushan_Script-Regular.ttf'),
        // "Great Vibes": require('./assets/fonts/Great_Vibes/Great_Vibes-Regular.ttf'),
        // "Gochi Hand": require('./assets/fonts/Gochi_Hand/Gochi_Hand-Regular.ttf'),
        // "Sacramento": require('./assets/fonts/Sacramento/Sacramento-Regular.ttf'),
        // "Parisienne": require('./assets/fonts/Parisienne/Parisienne-Regular.ttf'),
        // "Poiret One": require('./assets/fonts/Poiret_One/Poiret_One-Regular.ttf'),
        // "Cookie": require('./assets/fonts/Cookie/Cookie-Regular.ttf'),
        // "Bench Nine bold 700": require('./assets/fonts/Bench_Nine_bold_700/Bench_Nine_bold_700-Regular.ttf'),
        // "Monoton": require('./assets/fonts/Monoton/Monoton-Regular.ttf'),
        // "Ultra": require('./assets/fonts/Ultra/Ultra-Regular.ttf'),
        // "Press Start 2P": require('./assets/fonts/Press_Start_2P/Press_Start_2P-Regular.ttf'),
        // "Marck Script": require('./assets/fonts/Marck_Script/Marck_Script-Regular.ttf'),
        // "M PLUS Rounded 1c bold 700": require('./assets/fonts/M_PLUS_Rounded_1c_bold_700/M_PLUS_Rounded_1c_bold_700-Regular.ttf'),
        // "Merienda": require('./assets/fonts/Merienda/Merienda-Regular.ttf'),
        // "Sigmar One": require('./assets/fonts/Sigmar_One/Sigmar_One-Regular.ttf'),
        // "Rock Salt": require('./assets/fonts/Rock_Salt/Rock_Salt-Regular.ttf'),
        // "Cabin Condensed bold 600": require('./assets/fonts/Cabin_Condensed_bold_600/Cabin_Condensed_bold_600-Regular.ttf'),
        // "Aclonica": require('./assets/fonts/Aclonica/Aclonica-Regular.ttf'),
        // "Yellowtail": require('./assets/fonts/Yellowtail/Yellowtail-Regular.ttf'),
        // "Oleo Script": require('./assets/fonts/Oleo_Script/Oleo_Script-Regular.ttf'),
        // "Bowlby One SC": require('./assets/fonts/Bowlby_One_SC/Bowlby_One_SC-Regular.ttf'),
        // "El Messiri bold 700": require('./assets/fonts/El_Messiri_bold_700/El_Messiri_bold_700-Regular.ttf'),
        // "Playball": require('./assets/fonts/Playball/Playball-Regular.ttf'),
        // "Bad Script": require('./assets/fonts/Bad_Script/Bad_Script-Regular.ttf'),
        // "Homemade Apple": require('./assets/fonts/Homemade_Apple/Homemade_Apple-Regular.ttf'),
        // "DM Serif Text": require('./assets/fonts/DM_Serif_Text/DM_Serif_Text-Regular.ttf'),
        // "Allura": require('./assets/fonts/Allura/Allura-Regular.ttf'),
        // "Damion": require('./assets/fonts/Damion/Damion-Regular.ttf'),
        // "Shadows Into Light Two": require('./assets/fonts/Shadows_Into_Light_Two/Shadows_Into_Light_Two-Regular.ttf'),
        // "Quantico bold 700": require('./assets/fonts/Quantico_bold_700/Quantico_bold_700-Regular.ttf'),
        // "Yeseva One": require('./assets/fonts/Yeseva_One/Yeseva_One-Regular.ttf'),
        // "Covered By Your Grace": require('./assets/fonts/Covered_By_Your_Grace/Covered_By_Your_Grace-Regular.ttf'),
        // "Fugaz One": require('./assets/fonts/Fugaz_One/Fugaz_One-Regular.ttf'),
        // "ZCOOL XiaoWei": require('./assets/fonts/ZCOOL_XiaoWei/ZCOOL_XiaoWei-Regular.ttf'),
        // "Marmelad": require('./assets/fonts/Marmelad/Marmelad-Regular.ttf'),
        // "Bellota bold 700 italic": require('./assets/fonts/Bellota_bold_700_italic/Bellota_bold_700_italic-Regular.ttf'),
        // "Unna": require('./assets/fonts/Unna/Unna-Regular.ttf'),
        // "Mr Dafoe": require('./assets/fonts/Mr_Dafoe/Mr_Dafoe-Regular.ttf'),
        // "Miriam Libre": require('./assets/fonts/Miriam_Libre/Miriam_Libre-Regular.ttf'),
        // "Ubuntu Mono": require('./assets/fonts/Ubuntu_Mono/Ubuntu_Mono-Regular.ttf'),
        // "Black Ops One": require('./assets/fonts/Black_Ops_One/Black_Ops_One-Regular.ttf'),
        // "Pinyon Script": require('./assets/fonts/Pinyon_Script/Pinyon_Script-Regular.ttf'),
        // "Reenie Beanie": require('./assets/fonts/Reenie_Beanie/Reenie_Beanie-Regular.ttf'),
        // "Chewy": require('./assets/fonts/Chewy/Chewy-Regular.ttf'),
        // "Anonymous Pro": require('./assets/fonts/Anonymous_Pro/Anonymous_Pro-Regular.ttf'),
        // "Lateef": require('./assets/fonts/Lateef/Lateef-Regular.ttf'),
        // "Forum": require('./assets/fonts/Forum/Forum-Regular.ttf'),
        // "Caveat Brush": require('./assets/fonts/Caveat_Brush/Caveat_Brush-Regular.ttf'),
        // "Oranienbaum": require('./assets/fonts/Oranienbaum/Oranienbaum-Regular.ttf'),
        // "Nothing You Could Do": require('./assets/fonts/Nothing_You_Could_Do/Nothing_You_Could_Do-Regular.ttf'),
        // "Annie Use Your Telescope": require('./assets/fonts/Annie_Use_Your_Telescope/Annie_Use_Your_Telescope-Regular.ttf'),
        // "Rancho": require('./assets/fonts/Rancho/Rancho-Regular.ttf'),
        // "Fredericka the Great": require('./assets/fonts/Fredericka_the_Great/Fredericka_the_Great-Regular.ttf'),
        // "Sriracha": require('./assets/fonts/Sriracha/Sriracha-Regular.ttf'),
        // "VT323": require('./assets/fonts/VT323/VT323-Regular.ttf'),
        // "Michroma": require('./assets/fonts/Michroma/Michroma-Regular.ttf'),
        // "Cinzel Decorative": require('./assets/fonts/Cinzel_Decorative/Cinzel_Decorative-Regular.ttf'),
        // "Shrikhand": require('./assets/fonts/Shrikhand/Shrikhand-Regular.ttf'),
        // "Notable": require('./assets/fonts/Notable/Notable-Regular.ttf'),
        // "Leckerli One": require('./assets/fonts/Leckerli_One/Leckerli_One-Regular.ttf'),
        // "Cabin Sketch": require('./assets/fonts/Cabin_Sketch/Cabin_Sketch-Regular.ttf'),
        // "Berkshire Swash": require('./assets/fonts/Berkshire_Swash/Berkshire_Swash-Regular.ttf'),
        // "Knewave": require('./assets/fonts/Knewave/Knewave-Regular.ttf'),
        // "DM Serif Display": require('./assets/fonts/DM_Serif_Display/DM_Serif_Display-Regular.ttf'),
        // "Six Caps": require('./assets/fonts/Six_Caps/Six_Caps-Regular.ttf'),
        // "Arima Madurai black 900": require('./assets/fonts/Arima_Madurai_black_900/Arima_Madurai_black_900-Regular.ttf'),
        // "Italianno": require('./assets/fonts/Italianno/Italianno-Regular.ttf'),
        // "Niconne": require('./assets/fonts/Niconne/Niconne-Regular.ttf'),
        // "Mrs Saint Delafield": require('./assets/fonts/Mrs_Saint_Delafield/Mrs_Saint_Delafield-Regular.ttf'),
        // "Pattaya": require('./assets/fonts/Pattaya/Pattaya-Regular.ttf'),
        // "Yesteryear": require('./assets/fonts/Yesteryear/Yesteryear-Regular.ttf'),
        // "Kumar One Outline": require('./assets/fonts/Kumar_One_Outline/Kumar_One_Outline-Regular.ttf'),
        // "Norican": require('./assets/fonts/Norican/Norican-Regular.ttf'),
        // "Racing Sans One": require('./assets/fonts/Racing_Sans_One/Racing_Sans_One-Regular.ttf'),
        // "Grand Hotel": require('./assets/fonts/Grand_Hotel/Grand_Hotel-Regular.ttf'),
        // "Bungee Inline": require('./assets/fonts/Bungee_Inline/Bungee_Inline-Regular.ttf'),
        // "Rochester": require('./assets/fonts/Rochester/Rochester-Regular.ttf'),
        // "Cedarville Cursive": require('./assets/fonts/Cedarville_Cursive/Cedarville_Cursive-Regular.ttf'),
        // "Merienda One": require('./assets/fonts/Merienda_One/Merienda_One-Regular.ttf'),
        // "Nanum Brush Script": require('./assets/fonts/Nanum_Brush_Script/Nanum_Brush_Script-Regular.ttf'),
        // "Arizonia": require('./assets/fonts/Arizonia/Arizonia-Regular.ttf'),
        // "Sofia": require('./assets/fonts/Sofia/Sofia-Regular.ttf'),
        // "Graduate": require('./assets/fonts/Graduate/Graduate-Regular.ttf'),
        // "Lemon": require('./assets/fonts/Lemon/Lemon-Regular.ttf'),
        // "Averia Serif Libre bold 700": require('./assets/fonts/Averia_Serif_Libre_bold_700/Averia_Serif_Libre_bold_700-Regular.ttf'),
        // "Rozha One": require('./assets/fonts/Rozha_One/Rozha_One-Regular.ttf')
    }
    let fontsLoaded = false;
    Font.loadAsync(fonts)
        .then(() => {
            fontsLoaded = true;
        })
    // let [fontsLoaded] = useFonts(fonts);

    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return (
            <View style={styles.container}>
                <Picker
                    // selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    {Object.keys(fonts).map(fontName => <Picker.Item label={fontName} value={fontName} />)}
                </Picker>
                <Text style={{fontFamily: 'Merienda One', fontSize: 40}}>
                    Type whatever you want22!</Text>
                <TextInput>here</TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 100,
        flex: 1,
        backgroundColor: '#6e1482',
        color: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    headline: {
        fontSize: 42,
        textAlign: 'center',
        color: "#fff"
    },
    text: {
        fontSize: 30,
        color: "#fff"
    }
});
