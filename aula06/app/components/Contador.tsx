import React from "react";
import { Text, Button, View, StyleSheet} from 'react-native';

export default class Contador extends React.Component{
    constructor() {
        super();
        this.state = {
            contador: 0,
        };
    }
    Decrementar() {
        this.setState({
            contador: this.state.contador - 1
        });
    }
    Incrementar () {
        this.setState({
            contador: this.state.contador + 1
        });
    }
    render() {
        return(
            <View>
                <View style={styles.texto}>
                    <Text>{this.state.contador}</Text>
                </View>
                <View style={styles.botoes}>
                    <Button 
                        style={styles.botao1}
                        title="Aumenta"
                        onPress={this.Incrementar.bind(this)}
                    />
                        <Button 
                        style={styles.botao2}
                        onPress={this.Decrementar.bind(this)}
                        title="Diminui"
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    texto: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100,
      marginBottom: 30,
      padding: 20,
      backgroundColor: '#e0f7fa',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    botoes: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginHorizontal: 40,
    },
    botao1: {
      backgroundColor: '#81c784',
      padding: 10,
      borderRadius: 8,
    },
    botao2: {
      backgroundColor: '#e57373',
      padding: 10,
      borderRadius: 8,
    },
  });