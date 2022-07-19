import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from './components/Topo.js';
import Detalhes from "./components/Detalhes.js";

export default function Home() {
    return <>
        <Topo />
        <View style={estilos.home}>
            <Detalhes />
        </View>
    </>
}

const estilos = StyleSheet.create({
    home: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})