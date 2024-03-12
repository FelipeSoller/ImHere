import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export const Home = () => {
  const participants = [
    'Felipe Soller',
    'Guilherme Feitosa',
    'Rodolffo Farias',
    'Matheus Costa',
    'Gabriel Farias',
    'Lucas Farias',
    'Vinicius Farias',
    'João Paulo',
    'Pedro Henrique',
    'Victor Hugo'
  ]
  const handleParticipantAdd = () => {
    if (participants.includes('Felipe Soller')) {
      return Alert.alert('Participante existente', 'Já existe um participante na lista com esse nome')
    }

    console.log('Adicionar participante');
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert(`Participante: ${name} removido com sucesso!`)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta-feira, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />


    </View>
  );
}