import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';

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
    console.log('Adicionar Participante');
  }

  const handleParticipantRemove = (name: string) => {
    console.log(`Remover participante: ${name}`);
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)}
            />
          ))
        }
      </ScrollView>

    </View>
  );
}