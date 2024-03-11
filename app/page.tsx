import Image from 'next/image';

import Map from '@/components/Map';
import Chart from '@/components/Chart';

import styles from "./page.module.css";

import { League_Gothic } from 'next/font/google';

import Footer from '@/components/Footer';
import Text from '@/components/Text';
import Warning from '@/components/Warning';

const leagueGhotic = League_Gothic({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  const barTitle = 'A Química da Cidade';
  
  const introductionTitle = 'A Química da Cidade';
  const introductionText = 'A cidade do Recife é considerada uma das mais vulneráveis frente às mudanças climáticas potencializadas pelo aquecimento global. Dentre suas diversas razões, como a geografia e o clima, as principais têm relação com o próprio projeto urbano da cidade. Questões como a baixa distribuição de árvores pelos bairros, a estrutura de trânsito que prioriza o uso de automóveis individuais em detrimento de coletivos e a falta de proteção aos locais ameaçados pelas ondas de calor e deslizamentos de terra colocam em risco a qualidade de vida da população.\n\nComo consequência dos altos níveis de CO2 emitidos pelos automóveis, além de outros gases poluentes vindo das fábricas, junto com a poluição urbana e sua baixa arborização, a qualidade do ar da cidade é afetada, o que tem impacto na saúde da população. No entanto, as consequências de um Recife poluído e vulnerável não são sentidas da mesma forma por todos os cidadãos: as mudanças climáticas atingem principalmente as populações de áreas marginalizadas.';

  const infoTitle = 'Mobilidade urbana';
  const infoText = 'O risco ambiental que ameaça o Recife já é pauta dos grupos cicloativismo há, pelo menos, uma década. Isso desemboca em uma batalha diária de chamar a atenção, tanto do poder público, quanto da população, para a importância de se planejar uma cidade com meios de deslocamento múltiplos e menos poluentes.\n\nA locomoção por bicicleta é a principal alternativa quando pensamos em algo fora do transporte coletivo, mas ela só se torna popular se há uma estrutura que possibilite seu uso. No caso da RMR, o Plano Diretor Cicloviário é uma possível solução e, inclusive, está em andamento, ainda que em uma velocidade longe do desejável. Segundo Bárbara, o andamento do Plano Diretor de 2014 até 2024 é o equivalente ao que havia sido planejado previamente de 2014 para 2018.\n\nO Plano Diretor foca o investimento em uma malha cicloviária que se divide em em ciclovias, ciclorrotas e ciclofaixas, que se estendiam de Igarassu até o Cabo de Santo Agostinho, além das ramificações para dentro das cidades. O projeto ainda contava com estruturas como pontos de apoio ao ciclismo ao longo do trajeto e vagas de estacionamento para bicicletas. Na realidade, as estruturas implementadas foram poucas e o projeto não teve o impacto esperado.';

  const infoTitleWarning = 'Impacto dos automóveis';
  const infoTextWarning = 'Partindo de uma perspectiva ambiental, a bicicleta surge como a solução mais provável para quem deseja poluir menos. Como meio de transporte, o veículo tem um impacto ecológico quase nulo, e que fica menor ainda quando comparado ao carro individual. Segundo Barbara Barbosa, arquiteta e coordenadora da Ameciclo, no intervalo de um ano, um carro individual despeja cerca de 16.000 kg de CO2 na atmosfera. Segundo a contagem do IBGE em 2022, Recife tem 394.849 automóveis em uso, sem contar veículos coletivos, caminhões, motocicletas e outras modalidades.\n\nOs danos causados à atmosfera por esses veículos, no entanto, não são sentidos por seus motoristas, que, na maioria das vezes, optam pelo ambiente fechado dentro do carro e o uso do ar condicionado. O uso quase compulsório do automóvel individual no Recife é o reflexo de um distanciamento da população do cenário climático atual, que não é nada favorável à cidade.';
  
  const infoText3 = 'Vale ressaltar, também, que o Plano Diretor não planejava apenas a implementação de várias ciclorrotas, mas um estudo cuidadoso que entendesse quais vias urbanas mais precisavam de uma ciclofaixa. Esse, no entanto, não é o caso no Recife.\n\n“Uma das principais coisas que a Prefeitura precisa fazer é uma estrutura em locais que o Plano Diretor não contemplava, não colocava como prioridade. Estão colocando em ruas calmas, locais que não precisam de estrutura. A rua já é calma, sabe? A gente precisa das estruturas nas avenidas. Se você reparar, a primeira avenida que a gente foi ter essa estrutura completa foi na Agamenon [Magalhães], que aconteceu no último mês do último ano de execução do plano diretor.”, aponta a ativista.\n\n“Eu já pedalei em outras cidades com menos estruturas, mas elas se conectavam e pareciam ser muito mais. Era algo que fazia parte do caminho das pessoas e isso faz muita diferença. Então não é ‘eu coloco onde eu quiser’, existe um planejamento e ele não está sendo executado. Por que a gente se enche de ciclovias na [Rua João] Fernandes Viêira se a gente precisa mesmo na [Conde] Boa Vista? Por quê ficar colocando em paralelas se a gente precisa mesmo na principal?”, conclui.\n\nAs deficiências da malha cicloviária dentro e fora do Recife ganham ainda mais profundidade se pensarmos que 78% da população da cidade chega ao trabalho em transporte público, bicicleta ou a pé. Além dessas pessoas que se locomovem ao seus empregos, é preciso lembrar de quem trabalha em cima de sua “magrela”. De acordo com a Contagem de Ciclistas da Ameciclo, que contou um total de 153.967 ciclistas nos principais cruzamentos nas cidades da RMR, 7% eram pessoas que trabalhavam com suas bicicletas e outras 18,6% eram bicicletas cargueiras, também ligadas ao trabalho.';

  const labelText = 'A ausência da infraestrutura se mostra como a principal causa do desencorajamento das pessoas a pedalar mais, como aponta a pesquisa de Perfil de Ciclista, também realizada pela Ameciclo. Para os entrevistados, a falta de segurança no trânsito é a principal razão para que não optem pelas bicicletas. Conforme os dados divulgados pelo Ministério da Saúde, em 2021, 1.381 ciclistas perderam a vida no trânsito, um aumento em relação ao ano anterior.\n\nSegundo a Ameciclo, para que ocorra redução nas mortes no trânsito, é preciso incorporar a abordagem de Sistema Seguro e Visão Zero. O plano prevê a elaboração de uma política de diminuição de velocidade em todo o estado, com limite máximo de 50 km/h (incluindo no Código de Trânsito Brasileiro). Há também a intenção de pressionar a Secretaria Nacional de Trânsito (Senatran) e suas demais autarquias. O objetivo seria instituir no sistema básico de educação o ensino de temas relacionados à humanização do trânsito, direito à cidade, estímulo aos deslocamentos ativos e ao transporte público, além do uso racional do automóvel.';

  const warningTitle = 'Ciclismo e Meio-Ambiente';
  const warningText = 'Dentre os principais fatores que contribuem para a prática do ciclismo na realidade, apenas a estrutura de uma ciclovia não é a única parte indispensável. É preciso direcionar o olhar para o meio ambiente, em específico, à arborização.\n\n“Posso dizer que, na minha experiência, quanto mais para o subúrbio eu vou, menos árvores vejo e mais calor sinto. Mas uma coisa que percebo vindo para a avenida é que é mais poluído, de sentir o corpo mais poluído. Se for para comparar com Beberibe e Torre, é uma mudança sim” explicou a ativista.\n\nA questão tem ligação com a concentração de gases poluentes emitidos pelos automóveis. Segundo uma pesquisa publicada pela Universidade Federal de Pernambuco (UFPE), ainda em 2020, o aumento da frota veicular desde a década de 1990 causo uma piora na qualidade do ar.\n\nA pesquisa constata que as áreas mais arborizadas da cidade, localizadas principalmente na Zona Norte, ainda não cumprem os requisitos em relação à qualidade do ar, sobretudo nos dias úteis, quando o tráfego é intenso.\n\nEste é o principal problema a ser apontado: a infraestrutura não se limita apenas às condições técnicas, mas à qualidade ambiental da cidade. Isso impacta diretamente nas pessoas que acabam por não aderir ao pedal.\n\nEm 2022, a Ameciclo, em parceria da Greenpeace Brasil, realizou o Segundo Pedal Verde. A ação ocorreu no bairro da Guabiraba, Zona Norte do Recife, com o plantio de mudas de árvores frutíferas para contribuir com a arborização da cidade. O movimento que surgiu na bicicletada, em São Paulo, após um plantio realizado em 2009 como forma de homenagem à cicloativista Márcia Regina Prado. A extensão das áreas verdes por todo país é uma pauta que não favorece somente os ciclistas, como também toda população.\n\n“Temos um estudo só para entender quais espécies nativas são boas em calçadas, e, mesmo assim, a gente não usa. É um estudo sobre árvores que permitem que o solo seja pensado para cadeirantes, que dão sombras para o ciclista”, completou Bárbara.';

  const mapTitle = 'Acesso às áreas de lazer';
  const mapText1 = 'Falar sobre o planejamento urbano do Recife é falar sobre justiça climática e ambiental, não só em eventos e tragédias, como também no acesso ao lazer.\n\nUma pesquisa do Instituto Federal de Pernambuco (IFPE), revelada primeiramente pela reportagem do Jornal do Commercio, mostra que os principais parques urbanos da capital pernambucana estão localizados nas áreas em que o Índice de Desenvolvimento Humano (IDH) é mais alto. Os parques analisados foram: Dona Lindu; Santos Dumont; Lagoa do Araçá, na Zona Sul da cidade; Jaqueira, Trindade; Santana, Caiara e Macaxeira, na Zona Norte, e o 13 de Maio, no Centro.';
  const mapText2 = 'Mapa da localização dos principais parques urbanos do Recife. De 13 existentes, 11 estão localizados na Zona Norte e outros dois na Zona Sul. - Foto: Reprodução/Áreas Verdes Urbanas E (In)Justiça Socioespacial: um estudo sobre os Parques Urbanos do Recife/IFPE.\n\nCom a localização dos parques urbanos presentes principalmente na Zona Norte da cidade, moradores de bairros onde o IDH é mais baixo precisam, consequentemente, percorrer maiores distâncias para poder acessar os equipamentos. Esses habitantes são, em sua maioria, pretos, (75%), pardos (70%) e indígenas (67%).\n\n“O impacto está na falta de reconhecimento de que pessoas negras e indígenas estão sendo exterminadas. Que há um projeto político em curso, desde o momento colonial, para o extermínio gradativo dessa população. A população negra não é só exterminada em uma ação policial, por exemplo. Ela é exterminada pela falta de escola, de acesso à saúde, de lazer, e da falta de políticas socioambientais. Então, quando a gente fala de racismo ambiental, falamos de um projeto político de extermínio em curso dessas populações e, quando não falamos sobre isso, não trazemos para debate a gravidade da situação que vivemos hoje dentro dos territórios”, explicou a pesquisadora.';

  const textTitle = 'Racismo ambiental como questão central';
  const textText = 'Estruturalmente, a Região Metropolitana do Recife (RMR) convive com problemas há muitos anos. O planejamento das cidades, sobretudo a capital, faz com que a população precise conviver, ano após ano, com enchentes, alagamentos e até mesmo deslizamentos durante os períodos de chuva.\n\nEssas condições, vividas no mundo todo, estão diretamente ligadas a uma disparidade do acesso às políticas socioambientais e ecológicas. É o que mostra o estudo Mudança climática 2022: impactos, adaptação e vulnerabilidade, divulgado pelo Painel Intergovernamental sobre Mudanças Climáticas (IPCC). Nele, está destacado que aproximadamente 3,3 a 3,6 bilhões de pessoas vivem atualmente em contextos muito vulneráveis às alterações do clima.\n\nNa Região Metropolitana do Recife (RMR), eventos climáticos recentes elucidam a questão. Somente nas chuvas de maio de 2022 em Pernambuco, apontada como a maior catástrofe climática do século 21 no Estado, foram registradas 140 mortes, 122 mil pessoas desalojadas, 68 mil casas danificadas e 3 mil destruídas completamente. Os dados são do Sistema Integrado de Informações a Desastres (S2iD) do Ministério de Integração e Desenvolvimento Regional.\n\nEm 2022, apenas na RMR, foram 128 vítimas fatais. Dessas, 64 eram moradoras de Jaboatão dos Guararapes, 50 do Recife, sete de Camaragibe e outras seis de Olinda. Limoeiro e Paulista tiveram, cada uma, um registro. Conforme estudo da Secretaria de Defesa Social do Estado (SDS-PE), 120 habitantes (ou 93%) morreram soterrados em deslizamentos de barreiras e outros nove (que representam 7%) vieram a óbito por afogamento.\n\nNesse panorama, há uma indicação de que a maioria das pessoas afetadas são pretas, pardas ou indígenas, moradoras de áreas marginalizadas e de infraestrutura precarizada. Assim, para a advogada, pesquisadora e ativista, Lídia Lins, a questão precisa ser tratada a partir da ótica do racismo ambiental.“Essa discussão mostra que as populações racializadas vêm sofrendo historicamente no acesso a recursos naturais, a políticas públicas socioambientais, a um ambiente ecologicamente equilibrado. É uma forma também para percebermos como as pessoas dentro de ambientes climáticos extremos, de situações de calamidade e desastres naturais, serão mais ou menos impactadas. É nítido como pessoas racializadas, que moram em territórios racializados e, por consequência, marginalizados por conta de um tratamento de exclusão social, sofrem de forma totalmente desproporcional os impactos desses eventos climáticos”, afirmou.';

  const chartText = 'Ao pensar em formas para mudar essa realidade, é preciso buscar alternativas conectadas diretamente aos problemas vividos no dia-a-dia pela população. Lutar contra a falta de infraestrutura, desinformação e um meio-ambiente mal conservado significa a procura por uma vivência melhor. Manter as características observadas hoje em dia, não só no Recife, como em todas as cidades, é preservar um contexto de estagnação na mobilidade, insistência em meios de transporte obsoletos e, por fim, o cerceamento do direito à cidade.\n\nUm exemplo de ação que foi tomada para lutar contra essa realidade é o lançamento da rede de governança para combater o racismo ambiental no Estado, a Rede Gera. O projeto, divulgado no último dia 2 de março, conta com um plano de prevenção e adaptação ambiental e climática.\n\nA ação visa promover um diálogo com a esfera pública para tentar chegar a uma resolução da causa. A Rede Gera deve ser uma ligação entre as pessoas mais afetadas pelas crises climáticas na RMR e os representantes governamentais. Para conhecer mais sobre o projeto, veja o vídeo abaixo.\n\nA iniciativa partiu de ativistas, organizações e coletivos que buscam a justiça climática. Participaram o Instituto InterCidadania, em parceria com o Gris Solidário, Cores do Amanhã, Caranguejo Tabaiares e Tenda Caboclo Flecheiro D’Ararobá. Também conta com apoio da Recria e da Potyra Consultoria.\n\nAssim, o momento atual é de reação para que, futuramente, não exista mais a necessidade de luta.\n\n“A gente vive em um Estado Democrático de Direito, no caso do Brasil, e a autoridade pública só faz o que está previsto em lei. Então, dar a alternativa e nomenclatura legal ao racismo ambiental, com os termos ‘pessoas negras’, ‘pessoas indígenas’, ‘povos de terreiro’, ‘comunidades tradicionais’, vincula aquela autoridade pública a pensar e executar a política a partir desse termo específico. Isso faz com que tenhamos mecanismos de cobrar de acordo com o que está especificado na letra da lei”, completou Lídia Lins.';
  const chartTitle = 'Enfrentamento';

  const footerText = 'Esse projeto foi produzido por alunos de Design, Jornalismo e Ciência da Computação da Universidade Federal de Pernambuco (UFPE) para a disciplina Narrativas Inovadoras com Dados na Comunicação: Genivaldo Henrique, Guilherme dos Santos, Iasminne Oliveira, Isabel Bahé, José Antônio Lira, Lívia Silva, Maria Luíza Bispo, Marvin Miguel, Sarah Chamié e Túlio Oliveira.';
  const footerTitle = 'QUEM SOMOS NÓS?';

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.titleBar}>
          <div className={`${leagueGhotic.className} ${styles.titleText}`}>{barTitle}</div>
        </div>
        <Image
          src={'/images/image1.png'}
          alt={'Imagem de prédios'}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          priority
        />
        <div className={styles.bottomBar} />
      </section>

      <section className={`${styles.section} ${styles.introductionSection}`}> 
        <div className={`${leagueGhotic.className} ${styles.infoTitle}`}>{introductionTitle}</div>
        <div className={styles.infoText}>{introductionText}</div>
      </section>

      <section className={`${styles.section} ${styles.infoSection}`}>
        <div className={styles.infoSection1}>
          <div className={styles.info}>
            <div className={`${leagueGhotic.className} ${styles.infoTitle}`}>{infoTitle}</div>
            <div className={styles.infoText}>{infoText}</div>
          </div>
          <div className={styles.infoBox}>
            <div className={`${leagueGhotic.className} ${styles.infoTitleWarning}`}>{infoTitleWarning}</div>
            <div className={styles.infoText}>{infoTextWarning}</div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoText}>{infoText3}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.infoImageSection}`}>
        <Image
          src={'/images/image2.png'}
          alt={'Imagem de prédios'}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </section>

      <section className={styles.label}>
        <div className={styles.labelText}>{labelText}</div>
        <div className={styles.bottomBar2} />
      </section>

      <section className={`${styles.section}`}>
        <Warning text={warningText} title={warningTitle} />
      </section>

      <section className={`${styles.section} ${styles.mapSection}`}>
        <Map text1={mapText1} text2={mapText2} title={mapTitle} />
      </section>

      <section className={`${styles.section} ${styles.textSection}`}>
        <Text text={textText} title={textTitle} />
      </section>

      <section className={styles.chartContainer}>
        <Chart chartText={chartText} chartTitle={chartTitle} />
      </section>

      <section>
        <Footer text={footerText} title={footerTitle}/>
      </section>
    </main>
  );
}
