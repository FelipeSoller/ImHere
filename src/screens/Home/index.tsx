import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export const Home = () => {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  const handleParticipantAdd = () => {
    if (participants.includes(participantName)) {
      return Alert.alert('Participante existente', 'Já existe um participante na lista com esse nome')
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  const handleParticipantRemove = (name: string) => {
    setParticipants(prevState => prevState.filter(participant => participant !== name))

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
          onChangeText={setParticipantName}
          value={participantName}
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