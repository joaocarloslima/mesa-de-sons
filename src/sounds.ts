import type { AudioSource } from 'expo-audio';

// Cada botão da mesa: nome, emoji, cor de fundo e o arquivo de áudio.
type Sound = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  file: AudioSource;
  new: boolean;
};

export const sounds: Sound[] = [
  {
    id: 'aplausos',
    name: 'Aplausos',
    emoji: '👏',
    color: '#F28C28',
    file: require('../assets/sons/aplausos.mp3'),
    new: false,
  },
  {
    id: 'tambor',
    name: 'Rufar de tambor',
    emoji: '🥁',
    color: '#0B3D6E',
    new: false,
    file: require('../assets/sons/tambor.mp3'),
  },
  {
    id: 'acertou',
    name: 'Acertou!',
    emoji: '✅',
    color: '#2F855A',
    new: false,
    file: require('../assets/sons/acertou.mp3'),
  },
  {
    id: 'errou',
    name: 'Errou...',
    emoji: '🎺',
    color: '#C0392B',
    new: false,
    file: require('../assets/sons/errou.mp3'),
  },
  {
    id: 'grilo',
    name: 'Silêncio',
    emoji: '🦗',
    color: '#5F7D2B',
    new: false,
    file: require('../assets/sons/grilo.mp3'),
  },
  {
    id: 'suspense',
    name: 'Suspense',
    emoji: '😱',
    color: '#5B2C6F',
    new: false,
    file: require('../assets/sons/suspense.mp3'),
  },
  {
    id: 'buzina',
    name: 'Buzina',
    emoji: '📯',
    color: '#B7791F',
    new: false,
    file: require('../assets/sons/buzina.mp3'),
  },
  {
    id: 'badumtss',
    name: 'Ba dum tss',
    emoji: '🎤',
    color: '#1F2933',
    new: true,
    file: require('../assets/sons/badumtss.mp3'),
  },
];
