import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export const Home = () => {
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

      <Participant name="Felipe Soller" onRemove={() => handleParticipantRemove('Felipe Soller')} />
      <Participant name="Guilherme Feitosa" onRemove={() => handleParticipantRemove('Guilherme Feitosa')} />
      <Participant name="Rodolffo Farias" onRemove={() => handleParticipantRemove('Rodolffo Farias')} />
    </View>
  );
}