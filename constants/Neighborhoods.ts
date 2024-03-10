interface NeighborhoodInterface {
  name: string;
  rpa: string;
  value: number;
}

const neighborhoods: NeighborhoodInterface[] = [
  {
    name: 'Boa Vista',
    rpa: '1',
    value: 1.694,
  },
  {
    name: 'Cabanga',
    rpa: '1',
    value: 11.340,
  },
  {
    name: 'Ilha do Leite',
    rpa: '1',
    value: 11.034,
  },
  {
    name: 'Ilha Joana Bezerra',
    rpa: '1',
    value: 0.061,
  },
  {
    name: 'Paissandu',
    rpa: '1',
    value: 5.071,
  },
  {
    name: 'Recife',
    rpa: '1',
    value: 36.325,
  },
  {
    name: 'Santo Amaro',
    rpa: '1',
    value: 11.450,
  },
  {
    name: 'Santo Antonio',
    rpa: '1',
    value: 98.458,
  },
  {
    name: 'São José',
    rpa: '1',
    value: 2.578,
  },
  {
    name: 'Soledade',
    rpa: '1',
    value: 1.61,
  },
  {
    name: 'Água Fria',
    rpa: '2',
    value: 0.016,
  },
  {
    name: 'Alto Santa Terezinha',
    rpa: '2',
    value: 0.043,
  },
  {
    name: 'Arruda',
    rpa: '2',
    value: 0.175,
  },
  {
    name: 'Beberibe',
    rpa: '2',
    value: 0.279,
  },
  {
    name: 'Bomba do Hemetério',
    rpa: '2',
    value: 0.103,
  },
  {
    name: 'Cajueiro',
    rpa: '2',
    value: 0.872,
  },
  {
    name: 'Campina do Barreto',
    rpa: '2',
    value: 2.776,
  },
  {
    name: 'Campo Grande',
    rpa: '2',
    value: 0.791,
  },
  {
    name: 'Dois Unidos',
    rpa: '2',
    value: 0.346,
  },
  {
    name: 'Encruzilhada',
    rpa: '2',
    value: 0.643,
  },
  {
    name: 'Fundão',
    rpa: '2',
    value: 0.287,
  },
  {
    name: 'Hipódromo',
    rpa: '2',
    value: 5.556,
  },
  {
    name: 'Linha do Tiro',
    rpa: '2',
    value: 0.006,
  },
  {
    name: 'Ponto de Parada',
    rpa: '2',
    value: 5.385,
  },
  {
    name: 'Porto da Madeira',
    rpa: '2',
    value: 0.591,
  },
  {
    name: 'Rosarinho',
    rpa: '2',
    value: 0.964,
  },
  {
    name: 'Torreão',
    rpa: '2',
    value: 11.173,
  },
  {
    name: 'Aflitos',
    rpa: '3',
    value: 0.208,
  },
  {
    name: 'Alto do Mandu',
    rpa: '3',
    value: 0.097,
  },
  {
    name: 'Alto José Bonifácio',
    rpa: '3',
    value: 0.144,
  },
  {
    name: 'Alto José do Pinho',
    rpa: '3',
    value: 0.076,
  },
  {
    name: 'Apipucos',
    rpa: '3',
    value: 0.433,
  },
  {
    name: 'Casa Amarela',
    rpa: '3',
    value: 2.361,
  },
  {
    name: 'Casa Forte',
    rpa: '3',
    value: 2.052,
  },
  {
    name: 'Derby',
    rpa: '3',
    value: 17.433,
  },
  {
    name: 'Dois Irmãos',
    rpa: '3',
    value: 3.341,
  },
  {
    name: 'Espinheiro',
    rpa: '3',
    value: 1.270,
  },
  {
    name: 'Graças',
    rpa: '3',
    value: 0.403,
  },
  {
    name: 'Guabiraba',
    rpa: '3',
    value: 0.715,
  },
  {
    name: 'Jaqueira',
    rpa: '3',
    value: 52.171,
  },
  {
    name: 'Macaxeira',
    rpa: '3',
    value: 0.440,
  },
  {
    name: 'Monteiro',
    rpa: '3',
    value: 2.258,
  },
  {
    name: 'Morro da Conceição',
    rpa: '3',
    value: 1.082,
  },
  {
    name: 'Nova Descoberta',
    rpa: '3',
    value: 0.078,
  },
  {
    name: 'Parnamirim',
    rpa: '3',
    value: 1.527,
  },
  {
    name: 'Poço da Panela',
    rpa: '3',
    value: 0.830,
  },
  {
    name: 'Santana',
    rpa: '3',
    value: 18.926,
  },
  {
    name: 'Tamarineira',
    rpa: '3',
    value: 4.183,
  },
  {
    name: 'Vasco da Gama',
    rpa: '3',
    value: 0.088,
  },
  {
    name: 'Caxangá',
    rpa: '4',
    value: 0.242,
  },
  {
    name: 'Cordeiro',
    rpa: '4',
    value: 10.092,
  },
  {
    name: 'Engenho do Meio',
    rpa: '4',
    value: 3.316,
  },
  {
    name: 'Ilha do Retiro',
    rpa: '4',
    value: 0.749,
  },
  {
    name: 'Iputinga',
    rpa: '4',
    value: 2.827,
  },
  {
    name: 'Madalena',
    rpa: '4',
    value: 2.067,
  },
  {
    name: 'Prado',
    rpa: '4',
    value: 0.190,
  },
  {
    name: 'Torre',
    rpa: '4',
    value: 2.833,
  },
  {
    name: 'Torrões',
    rpa: '4',
    value: 2.434,
  },
  {
    name: 'Várzea',
    rpa: '4',
    value: 0.403,
  },
  {
    name: 'Zumbi',
    rpa: '4',
    value: 0.089,
  },
  {
    name: 'Afogados',
    rpa: '5',
    value: 0.557,
  },
  {
    name: 'Areias',
    rpa: '5',
    value: 2.553,
  },
  {
    name: 'Barro',
    rpa: '5',
    value: 0.177,
  },
  {
    name: 'Bongi',
    rpa: '5',
    value: 0.154,
  },
  {
    name: 'Coqueiral',
    rpa: '5',
    value: 0.056,
  },
  {
    name: 'Curado',
    rpa: '5',
    value: 6.849,
  },
  {
    name: 'Jardim São Paulo',
    rpa: '5',
    value: 0.355,
  },
  {
    name: 'Jiquia',
    rpa: '5',
    value: 0.710,
  },
  {
    name: 'Mangueira',
    rpa: '5',
    value: 0.057,
  },
  {
    name: 'Mustardinha',
    rpa: '5',
    value: 0.469,
  },
  {
    name: 'San Martin',
    rpa: '5',
    value: 1.208,
  },
  {
    name: 'Tejipió',
    rpa: '5',
    value: 0.199,
  },
  {
    name: 'Boa Viagem',
    rpa: '6',
    value: 0.555,
  },
  {
    name: 'Brasília Teimosa',
    rpa: '6',
    value: 0.027,
  },
  {
    name: 'Cohab',
    rpa: '6',
    value: 0.693,
  },
  {
    name: 'Ibura',
    rpa: '6',
    value: 0.319,
  },
  {
    name: 'Imbiribeira',
    rpa: '6',
    value: 3.547,
  },
  {
    name: 'Ipsep',
    rpa: '6',
    value: 2.303,
  },
  {
    name: 'Jordão',
    rpa: '6',
    value: 0.578,
  },
  {
    name: 'Pina',
    rpa: '6',
    value: 1.064,
  },
]

export default neighborhoods;