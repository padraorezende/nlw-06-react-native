import React, { useState } from "react"
import { View, Text } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { Background } from "../../components/Background"
import { Header } from "../../components/Header"
import { styles } from "./styles"
import { CategorySelect } from "../../components/CategorySelect"
import { Feather } from "@expo/vector-icons"
import { theme } from "../../global/styles/theme"
import { SmallInput } from "../../components/SmallInput"


export function AppointmentCreate() {
    const [category, setCategory] = useState('');

    return (
        <Background>
            <Header title="Agendar partida" />

            <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
                Categoria
            </Text>

            <CategorySelect hasCheckBox setCategory={setCategory} categorySelected={category} />

            <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>
                        <View style={styles.image} />
                        <View style={styles.selectBody}>
                            <Text style={styles.label}>
                                Selecione um servidor
                            </Text>
                        </View>

                        <Feather name="chevron-right" color={theme.colors.heading} size={18} />

                    </View>
                </RectButton>


                <View style={styles.field}>
                    <View>
                        <Text style={styles.label}>
                            Dia e mes
                        </Text>
                    </View>

                    <View style={styles.column}>
                        <SmallInput />

                    </View>
                </View>

            </View>
        </Background>
    )
}