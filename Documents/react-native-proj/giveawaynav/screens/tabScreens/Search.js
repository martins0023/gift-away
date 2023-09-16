import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { Button, TextInput } from 'react-native-paper';

export default function Search({ searchTerm, setSearchTerm, handleClick }) {

  return (
    <View>
        <View>
            <TextInput
                left={<TextInput.Icon icon={<Ionicons name="ios-search-outline" size="12" color="#007260" />} />}
                placeholder="Home theatres, bags, shoes"
                label="Search..."
                style={[
                    {
                        underlineColor: '#007260',
                        outlineColor: '#007260'
                    }
                ]}
            />
        </View>
        <View
            style={[
                styles.container,
                {
                    // Try setting `flexDirection` to `"row"`.
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    columnGap: '12',
                    alignContent: 'center',
                    alignItems: 'center',
                },
        ]}>
            <Button
                style={{
                    resizeMode: 'cover',
                    height: '35px',
                    width: '120px',
                    marginHorizontal: 3
                }}
                icon="" mode="contained-tonal" onPress={() => console.log('Pressed')}>
                Used Items
            </Button>
            <Button
                style={{
                    resizeMode: 'cover',
                    height: '35px',
                    width: '120px',
                    marginHorizontal: 3
                }}
                icon="" mode="contained-tonal" onPress={() => console.log('Pressed')}>
                Tangibles
            </Button>
            <Button
                style={{
                    resizeMode: 'cover',
                    height: '35px',
                    width: '110px',
                    marginHorizontal: 3
                }}
                icon="" mode="contained-tonal" onPress={() => console.log('Pressed')}>
                Foods
            </Button>
        </View>
    </View>
  );
}

const FONT = {
    regular: "DMRegular",
    medium: "DMMedium",
    bold: "DMBold",
};

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
};

const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },

    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.large,
        height: 50,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
    },

    searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
    },

    tabsContainer: {
        width: "100%",
        marginTop: SIZES.medium,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },

    searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: COLORS.white,
    },

    tab: (activeJobType, item) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.medium,
        borderWidth: 1,
        borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
      }),

    tabText: (activeJobType, item) => ({
        fontFamily: FONT.medium,
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
      }),

})