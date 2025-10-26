import type { Motorcycle } from '../types';

export const motorcycles: Motorcycle[] = [
  {
    id: 1,
    name: 'Yamaha YZF-R1',
    brand: 'Yamaha',
    model: 'YZF-R1',
    year: 2024,
    price: 17999,
    image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&h=600&fit=crop',
    description: 'La legendaria superbike de Yamaha con tecnología MotoGP. Motor de 998cc con 200 HP.',
    category: 'sport',
    engine: '998cc, 4 cilindros en línea',
    power: '200 HP @ 13,500 rpm',
    weight: '201 kg',
    features: [
      'Control de tracción',
      'ABS',
      'Modos de conducción',
      'Quick shifter',
      'Suspensión electrónica'
    ],
    inStock: true
  },
  {
    id: 2,
    name: 'Harley-Davidson Street Glide',
    brand: 'Harley-Davidson',
    model: 'Street Glide',
    year: 2024,
    price: 21999,
    image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=800&h=600&fit=crop',
    description: 'Icónica cruiser americana con motor Milwaukee-Eight 114. Perfecta para viajes largos.',
    category: 'cruiser',
    engine: '1868cc, V-Twin Milwaukee-Eight 114',
    power: '119 HP @ 5,020 rpm',
    weight: '362 kg',
    features: [
      'Sistema de audio premium',
      'Cruise control',
      'Pantalla táctil',
      'Suspensión ajustable',
      'Frenos Brembo'
    ],
    inStock: true
  },
  {
    id: 3,
    name: 'BMW R 1250 GS',
    brand: 'BMW',
    model: 'R 1250 GS',
    year: 2024,
    price: 19500,
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop',
    description: 'La adventure bike más vendida del mundo. Motor boxer de 1254cc con tecnología ShiftCam.',
    category: 'adventure',
    engine: '1254cc, Boxer bicilíndrico',
    power: '136 HP @ 7,750 rpm',
    weight: '249 kg',
    features: [
      'Control de tracción ASC',
      'Modos de conducción Pro',
      'Suspensión electrónica',
      'Pantalla TFT',
      'Conectividad Bluetooth'
    ],
    inStock: true
  },
  {
    id: 4,
    name: 'Ducati Panigale V4',
    brand: 'Ducati',
    model: 'Panigale V4',
    year: 2024,
    price: 24995,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
    description: 'Superbike italiana con motor V4 Desmosedici Stradale. Pura tecnología de MotoGP.',
    category: 'sport',
    engine: '1103cc, V4 Desmosedici Stradale',
    power: '214 HP @ 13,000 rpm',
    weight: '195 kg',
    features: [
      'Ducati Traction Control EVO 3',
      'Cornering ABS EVO',
      'Ducati Quick Shift EVO 2',
      'Suspensión Öhlins',
      'Alas aerodinámicas'
    ],
    inStock: true
  },
  {
    id: 5,
    name: 'Kawasaki Ninja H2',
    brand: 'Kawasaki',
    model: 'Ninja H2',
    year: 2024,
    price: 29000,
    image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&h=600&fit=crop',
    description: 'La moto de producción con compresor. Motor sobrealimentado de 998cc con 231 HP.',
    category: 'sport',
    engine: '998cc, 4 cilindros en línea sobrealimentado',
    power: '231 HP @ 11,500 rpm',
    weight: '238 kg',
    features: [
      'Motor sobrealimentado',
      'Control de tracción KTRC',
      'Launch control',
      'Quick shifter bidireccional',
      'Frenos Brembo Stylema'
    ],
    inStock: false
  },
  {
    id: 6,
    name: 'Honda Gold Wing',
    brand: 'Honda',
    model: 'Gold Wing',
    year: 2024,
    price: 28500,
    image: 'https://images.unsplash.com/photo-1568772684993-e3d9d1befd1d?w=800&h=600&fit=crop',
    description: 'La touring de lujo definitiva. Motor boxer de 6 cilindros con máximo confort.',
    category: 'touring',
    engine: '1833cc, Boxer 6 cilindros',
    power: '126 HP @ 5,500 rpm',
    weight: '383 kg',
    features: [
      'Sistema de navegación',
      'Apple CarPlay',
      'Airbag frontal',
      'Suspensión electrónica',
      'Asientos calefactados'
    ],
    inStock: true
  },
  {
    id: 7,
    name: 'KTM 890 Duke',
    brand: 'KTM',
    model: '890 Duke',
    year: 2024,
    price: 11999,
    image: 'https://images.unsplash.com/photo-1591768575957-a4b2f2e6e6e3?w=800&h=600&fit=crop',
    description: 'Naked deportiva con carácter agresivo. Motor bicilíndrico paralelo de 890cc.',
    category: 'naked',
    engine: '889cc, Bicilíndrico paralelo',
    power: '115 HP @ 9,000 rpm',
    weight: '169 kg',
    features: [
      'Modos de conducción',
      'Control de tracción MTC',
      'Quick shifter',
      'Pantalla TFT',
      'Conectividad smartphone'
    ],
    inStock: true
  },
  {
    id: 8,
    name: 'Triumph Bonneville T120',
    brand: 'Triumph',
    model: 'Bonneville T120',
    year: 2024,
    price: 13500,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=600&fit=crop',
    description: 'Clásica británica moderna. Motor bicilíndrico paralelo de 1200cc con estilo retro.',
    category: 'cruiser',
    engine: '1200cc, Bicilíndrico paralelo',
    power: '80 HP @ 6,550 rpm',
    weight: '236 kg',
    features: [
      'ABS',
      'Control de tracción',
      'Modos de conducción',
      'Instrumentación clásica',
      'Escape doble'
    ],
    inStock: true
  },
  {
    id: 9,
    name: 'Suzuki GSX-R1000R',
    brand: 'Suzuki',
    model: 'GSX-R1000R',
    year: 2024,
    price: 16499,
    image: 'https://images.unsplash.com/photo-1558980664-1db506751c6c?w=800&h=600&fit=crop',
    description: 'Superbike japonesa con tecnología MotoGP. Motor de 999cc con 202 HP.',
    category: 'sport',
    engine: '999cc, 4 cilindros en línea',
    power: '202 HP @ 13,200 rpm',
    weight: '203 kg',
    features: [
      'Sistema de frenado combinado',
      'Control de tracción',
      'Launch control',
      'Quick shifter',
      'Suspensión Showa'
    ],
    inStock: true
  },
  {
    id: 10,
    name: 'Aprilia Tuono V4 1100',
    brand: 'Aprilia',
    model: 'Tuono V4 1100',
    year: 2024,
    price: 18999,
    image: 'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?w=800&h=600&fit=crop',
    description: 'Naked extrema con motor V4 de 175 HP. Pura adrenalina italiana.',
    category: 'naked',
    engine: '1077cc, V4',
    power: '175 HP @ 11,000 rpm',
    weight: '209 kg',
    features: [
      'APRC (Aprilia Performance Ride Control)',
      'Cornering ABS',
      'Control de crucero',
      'Quick shifter',
      'Suspensión Sachs'
    ],
    inStock: true
  },
  {
    id: 11,
    name: 'Indian Scout Bobber',
    brand: 'Indian',
    model: 'Scout Bobber',
    year: 2024,
    price: 12499,
    image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=800&h=600&fit=crop',
    description: 'Bobber americana con estilo minimalista. Motor V-Twin de 1133cc.',
    category: 'cruiser',
    engine: '1133cc, V-Twin',
    power: '100 HP @ 8,100 rpm',
    weight: '256 kg',
    features: [
      'ABS',
      'Control de tracción',
      'Asiento bajo',
      'Escape deportivo',
      'Instrumentación digital'
    ],
    inStock: true
  },
  {
    id: 12,
    name: 'Yamaha Tracer 9 GT',
    brand: 'Yamaha',
    model: 'Tracer 9 GT',
    year: 2024,
    price: 14999,
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop',
    description: 'Sport touring versátil con motor CP3 de 890cc. Perfecta para viajes y diversión.',
    category: 'touring',
    engine: '890cc, 3 cilindros en línea',
    power: '119 HP @ 10,000 rpm',
    weight: '220 kg',
    features: [
      'Control de crucero adaptativo',
      'Pantalla TFT',
      'Quick shifter',
      'Maletas laterales',
      'Suspensión electrónica'
    ],
    inStock: true
  }
];
