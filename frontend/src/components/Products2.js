const products2 = [
  {
    productId: 1,
    name: "Audi A1 Sportback",
    auto: "A1",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/gba/2021.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a1/a1-sportback/my-2022/derivate-startpage/parallax-teaser/2878x3500-audi-a1-sportback-aa1_181005_1.jpg?imwidth=1439",
    description:
      "La seconda generazione di A1 Sportback, la compatta Audi più apprezzata, è caratterizzata da un design sportivo che fa subito colpo e da un’ampia flessibilità nelle opzioni di equipaggiamento.",
    price: 23765,
    category: "Sportback",
    countInStock: 2,
  },
  {
    productId: 1.1,
    name: "Audi A1 allstreet",
    auto: "A1",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/gbh0tg/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a1/a1-allstreet/my-2023/stage/AA1_191006_4-L.jpg?imwidth=1920",
    description:
      "Audi A1 allstreet è il crossover compatto dai molteplici vantaggi.",
    price: 25200,
    category: "allstreet",
    countInStock: 0,
  },
  {
    productId: 2,
    name: "Audi A3 Sportback",
    auto: "A3",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8yaar/2021.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/it/Gamma/a3-sportback/a3_2020_2614B_C_MOD_GG933SX_WEB-883x883.jpg",
    description:
      "Design avanguardistico e tecnologie innovative: questa è Audi A3 Sportback.",
    price: 31260,
    category: "Sportback",
    countInStock: 8,
  },
  {
    productId: 2.1,
    name: "Audi A3 Sportback g-tron",
    auto: "A3",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8yabag/2021.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a3/a3-sportback-g-tron/my-2022/derivative-startpage/stage/1920x1080-A3_2020_1052.jpg?imwidth=1920",
    description:
      "La trazione alternativa di Audi A3 Sportback g-tron si identifica per un piccolo ma significativo dettaglio: la dicitura g-tron apposta sul portellone del bagagliaio.",
    price: 34160,
    category: "g-tron",
    countInStock: 0,
  },
  {
    productId: 2.2,
    name: "Audi A3 Sedan",
    auto: "A3",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8ysar/2021.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a3/a3-limousine/my-2022/NeMo-Derivate-Startpage/feature-gallery/a3_ae_2020_1028_1-xl.jpg?imwidth=1920&imdensity=1",
    description:
      "Audi A3 Sedan è l’emblema della ricerca tecnologica. Grazie a un livello di digitalizzazione superiore dei sistemi di infotainment e delle tecnologie di assistenza alla guida, è in grado di connetterti al tuo mondo in ogni momento.",
    price: 32560,
    category: "Sedan",
    countInStock: 1,
  },
  {
    productId: 2.3,
    name: "Audi S3 Sportback TFSI",
    auto: "A3",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8yas3/2021.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a3/s3-sportback/my-2022/NeMo-Derivate-Startpage/feature-gallery/1920x900-s3_ed1_2020_1992_1.jpg?imwidth=1920&imdensity=1",
    description:
      "La sportività perfetta per la vita di tutti i giorni: Audi S3 Sportback.",
    price: 51950,
    category: "Audi Sport S",
    countInStock: 1,
  },
  {
    productId: 2.4,
    name: "Audi S3 Sedan TFSI",
    auto: "A3",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8yss3/2021.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a3/s3-limousine/my-2022/NeMo-Derivate-Startpage/feature-gallery/1920x900-S3_2020_1035_RGB.jpg?imwidth=1920&imdensity=1",
    description:
      "Decisa, sportiva, affascinante, fin dal primo sguardo: Audi S3 Sedan si presenta nel colore carrozzeria Rosso Tango metallizzato.",
    price: 53250,
    category: "Audi Sport S",
    countInStock: 1,
  },
  {
    productId: 2.5,
    name: "Audi RS 3 Sportback",
    auto: "A3",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8yarwy/2022.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a3/rs-3-sportback/my-2022/NeMo-Derivate-Startpage/stage/1920x1080-audi-rs-3-sportback-stage-desktop-RS3_2021_3107.jpg?imwidth=1920",
    description:
      "Dinamismo elevato, comfort ai massimi livelli e puro carattere RS: è l‘essenza di Audi RS 3 Sportback. Con il pacchetto RS dynamic plus5, il nuovo Launch Control e l‘impianto di scarico sportivo RS le performance diventano esperienze da vivere. Inoltre, grazie all‘Audi drive select con set-up inediti, puoi esprimere il carattere di questa vettura tramite ulteriori modalità di guida specifiche RS.",
    price: 61750,
    category: "Audi Sport RS",
    countInStock: 1,
  },
  {
    productId: 2.6,
    name: "Audi RS 3 Sedan",
    auto: "A3",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8ysrwy/2022.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a3/rs-3-limousine/my-2022/NeMo-Derivate-Startpage/parallax-teaser/3840x4000-audi-rs-3-sedan-driving-RS3_2021_3160.jpg?imwidth=1920",
    description:
      "La potenza prende forma. Audi RS. Performance is an attitude.",
    price: 64850,
    category: "Audi Sport RS",
    countInStock: 1,
  },
  {
    productId: 3,
    name: "Audi A4",
    auto: "A4",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8wc/2021.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a4/a4-limousine/my-2023/parallax-teaser/A4_2020_1971_1-M.jpg?imwidth=1439",
    description:
      "Il fascino di Audi A4 emerge in maniera decisa grazie al design progressivo del frontale, sagomato con precisione, e al posteriore caratteristico.",
    price: 44005,
    category: "Sedan",
    countInStock: 7,
  },
  {
    productId: 3.1,
    name: "Audi A4 Avant",
    auto: "A4",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8wd/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/it/Gamma/a4-avant/1920x1080-2020_1974_1.jpg?imwidth=1920",
    description:
      "Audi A4 Avant rappresenta la massima espressione di sportività, qualità, digitalizzazione e versatilità.",
    price: 44785,
    category: "Avant",
    countInStock: 1,
  },
  {
    productId: 3.2,
    name: "Audi A4 Avant g-tron",
    auto: "A4",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8wdblg/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/it/Gamma/a4gtron/1920x1920-audi-a4-avant-g-tron-stage-AA4_G-TRON_191001_1_FZ468EG.jpg?imwidth=1920",
    description:
      "Alimentata da un motore TFSI a metano da 2 litri, Audi A4 Avant g-tron garantisce sportività ed efficienza.",
    price: 49130,
    category: "g-tron",
    countInStock: 1,
  },
  {
    productId: 3.3,
    name: "Audi A4 allroad quattro",
    auto: "A4",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8wj/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a4/a4-allroad-quattro/my-2023/feature-gallery/A4_2022_3673-L.jpg?imwidth=1920&imdensity=1",
    description:
      "Le performance della trazione quattro si uniscono alla potenza del motore e alle sospensioni specifiche allroad, dando risalto alle qualità offroad di Audi A4 allroad quattro.",
    price: 53085,
    category: "Quattro",
    countInStock: 1,
  },
  {
    productId: 3.4,
    name: "Audi S4 TDI",
    auto: "A4",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8wcs/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a4/s4-limousine/my-2023/stage/AS4_L_191001_2-L.jpg?imwidth=1920",
    description:
      "Sportività allo stato puro. Audi S4 si pone su un livello superiore, grazie ai numerosi elementi specifici S per interni ed esterni.",
    price: 77900,
    category: "Audi Sport S",
    countInStock: 0,
  },
  {
    productId: 3.5,
    name: "Audi S4 Avant TDI",
    auto: "A4",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8wds/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/it/Gamma/s4-avant/1920x1920-audi-s4-avant-stage-AS4_A_191003_1_IT.jpg?imwidth=1920",
    description:
      "Sportività senza compromessi. Gli elementi specifici S impreziosiscono gli interni e gli esterni di S4 Avant e mettono in risalto il suo DNA sportivo.",
    price: 79500,
    category: "Audi Sport S",
    countInStock: 1,
  },
  {
    productId: 3.6,
    name: "Audi RS 4 Avant",
    auto: "A4",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8wdr/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a4/rs-4-avant/my-2022/derivative-startpage/feature-gallery/1920x900-rs4_2020_1503.jpg?imwidth=1920&imdensity=1",
    description:
      "Il design muscoloso degli esterni. Le caratteristiche distintive del design RS, il Singleframe e la griglia a nido d’ape danno al frontale di Audi RS 4 Avant un carattere sportivo, esprimendo così a pieno tutta la sua potenza. Nella parte posteriore, invece, la sportività emerge grazie al paraurti specifico RS e al possente diffusore. Lasciati sorprendere dal design dei cerchi, dai passaruota più ampi e dai pacchetti design RS per interni in grigio o rosso, disponibili come optional.",
    price: 98600,
    category: "Audi Sport RS",
    countInStock: 1,
  },
  {
    productId: 4,
    name: "Audi A5 Coupé",
    auto: "A5",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f5p/2021.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a5/a5-coupe/my-2023/highlighted-car-teaser/A5_2020_1985_1-L.jpg",
    description:
      "Design ricercato e connettività ai massimi livelli: questa è Audi A5 Coupé.",
    price: 52535,
    category: "Coupé",
    countInStock: 9,
  },
  {
    productId: 4.1,
    name: "Audi A5 Sportback",
    auto: "A5",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f5fbzg/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a5/a5-sportback/my-2023/stage/A5_2020_1985_1-l.jpg?imwidth=1920",
    description:
      "Distinguiti con stile, a bordo di Audi A5 Sportback.",
    price: 51450,
    category: "Sportback",
    countInStock: 0,
  },
  {
    productId: 4.2,
    name: "Audi A5 Sportback g-tron",
    auto: "A5",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f5fblg/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a5/a5-sportback-g-tron/my-2022/derivative-startpage/stage/1920x1080-AA5_G-TRON_191001.jpg?imwidth=1920",
    description:
      "L’affidabilità di una cinque porte per tutta la famiglia e l’innovazione della guida a gas metano. In una parola: Audi A5 Sportback g-tron.",
    price: 52835,
    category: "g-tron",
    countInStock: 3,
  },
  {
    productId: 4.3,
    name: "Audi A5 Cabriolet",
    auto: "A5",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f5ebzg/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a5/a5-cabriolet/my-2023/parallax-teaser/ACA_191002_2-XL.jpg?imwidth=1920",
    description:
      "Sali a bordo di Audi A5 Cabriolet e lasciati coinvolgere da un’esperienza di guida entusiasmante.",
    price: 59535,
    category: "Cabriolet",
    countInStock: 3,
  },
  {
    productId: 4.4,
    name: "Audi S5 Coupé TDI",
    auto: "A5",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f5ps5a/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a5/s5-coupe/my-2022/derivate-startpage/stage-large-image/2021_191003_1-L_1.jpg?imwidth=1920",
    description:
      "Il design e gli elementi specifici S di Audi S5 Coupé conferiscono alla vettura un look inconfondibilmente sportivo.",
    price: 88535,
    category: "Audi Sport S",
    countInStock: 1,
  },
  {
    productId: 4.5,
    name: "Audi S5 Sportback TDI",
    auto: "A5",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f5fs5a/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a5/s5-sportback/my-2022/derivate-startpage/stage-large-image/AS5_SB_D_191002-L-1.jpg?imwidth=1920",
    description:
      "Comfort a bordo e tutta la potenza di un’auto sportiva: questa è Audi S5 Sportback TDI.",
    price: 88455,
    category: "Audi Sport S",
    countInStock: 0,
  },
  {
    productId: 4.6,
    name: "Audi S5 Cabriolet TFSI",
    auto: "A5",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f5es4a/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a5/s5-cabriolet/my-2022/derivative-startpage/stage/1920x1080-aca_191010_2.jpg?imwidth=1920",
    description:
      "Sportività senza confini. Il potente motore di Audi S5 Cabriolet offre performance uniche, che si riflettono nella sua dinamica di guida da vera sportiva.",
    price: 91550,
    category: "Audi Sport S",
    countInStock: 1,
  },
  {
    productId: 4.7,
    name: "Audi RS 5 Coupé",
    auto: "A5",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f5prxa/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a5/rs-5-coupe/my-2022/NeMo-Derivative-Startpage/feature-gallery/1920x900-rs5_2020_1515.jpg?imwidth=1920&imdensity=1",
    description:
      "Audi RS 5 Coupé è espressione di puro dinamismo e sinonimo di performance straordinarie. Performance is an attitude.",
    price: 103500,
    category: "Audi Sport RS",
    countInStock: 1,
  },
  {
    productId: 4.8,
    name: "Audi RS 5 Sportback",
    auto: "A5",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f5frxa/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a5/rs-5-sportback/my-2022/derivate-startpage/stage/1920x1080-rs5_2020_1519.jpg?imwidth=1920",
    description:
      "La potenza del biturbo. Comfort e dinamismo ai massimi livelli fanno di Audi RS 5 Sportback molto più di una semplice sportiva. Performance is an attitude.",
    price: 103500,
    category: "Audi Sport RS",
    countInStock: 1,
  },
  {
    productId: 5,
    name: "Audi A6",
    auto: "A6",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4a2/2022.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a6/a6-limousine/my-2022/derivative-startpage/stage/1920x1080-AA6_L_181012_2.jpg?imwidth=1440",
    description:
      "Audi A6 definisce un nuovo concetto di progresso, espresso in ogni dettaglio: dalla griglia Singleframe più ampia alle prese d’aria laterali con finiture cromate, e alle linee sottili dei proiettori. La silhouette laterale ancora più affilata e le possenti curve sopra i passaruota evidenziano ulteriormente l’inconfondibile stile quattro. Il look sportivo della vettura viene ulteriormente definito dagli specchietti retrovisivi posizionati sopra le guide delle porte.",
    price: 57020,
    category: "Sedan",
    countInStock: 8,
  },
  {
    productId: 5.1,
    name: "Audi A6 TFSI e quattro",
    auto: "A6",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4a2bqy/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a6/a6-limousine-tfsi-e/my-2023/stage/AA6_TFSIe_191001_2-L.jpg?imwidth=1920",
    description:
      "Anticipa il progresso. Audi A6 TFSI e quattro si fa riconoscere, grazie a efficienti motori plug-in hybrid, un sistema operativo innovativo e un design atletico.",
    price: 67720,
    category: "Quattro",
    countInStock: 2,
  },
  {
    productId: 5.2,
    name: "Audi A6 Avant",
    auto: "A6",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4a5a2/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a6/a6-avant/my-2022/derivativ-startpage/feature-gallery/1920x900-AA6_A_181003_2.jpg?imwidth=1920&imdensity=1",
    description:
      "L’inconfondibile silhouette di Audi A6 Avant non passa inosservata: gli ampi passaruota, la linea del tetto lievemente discendente e il montante D ribassato ne sottolineano le proporzioni armoniose e dinamiche. La sportività della vettura è immediatamente riconoscibile anche nello spoiler al tetto e nella particolare linea cromata che domina il posteriore.",
    price: 59420,
    category: "Avant",
    countInStock: 2,
  },
  {
    productId: 5.3,
    name: "Audi A6 Avant TFSI e quattro",
    auto: "A6",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4a5bqy/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a6/a6-avant-tfsi-e/my-2022/derivative-startpage/feature-gallery/1920x900-audi-a6-avant-tfsi-e-AA6_TFSIe_191003_1.jpg?imwidth=1920&imdensity=1",
    description:
      "Elettrica ed efficiente. Un’innovativa trazione plug-in hybrid e un comfort elevato per tutti i passeggeri a bordo: è Audi A6 Avant 50 TFSI e quattro.",
    price: 70020,
    category: "Quattro",
    countInStock: 0,
  },
  {
    productId: 5.4,
    name: "Audi A6 allroad quattro",
    auto: "A6",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4aha/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a6/a6-allroad-quattro/my-2023/stage/AA6_181018_3-l.jpg?imwidth=1920",
    description:
      "Audi A6 allroad quattro abbina i vantaggi di una Avant alle caratteristiche tipiche delle allroad, come la trazione integrale permanente quattro e le linee imponenti di un fuoristrada.",
    price: 68120,
    category: "Quattro",
    countInStock: 2,
  },
  {
    productId: 5.5,
    name: "Audi S6 TDI",
    auto: "A6",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4a2sv/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a6/s6-limousine/my-2022/derivativ-startpage/stage-large-image/1920x1080-AS6_L_181005.jpg?imwidth=1920",
    description:
      "Forza, eleganza e connettività. Audi S6 TDI è un’auto versatile e sportiva, dalle prestazioni sorprendenti.",
    price: 86370,
    category: "Audi Sport S",
    countInStock: 2,
  },
  {
    productId: 5.6,
    name: "Audi S6 Avant TDI",
    auto: "A6",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4a5sv/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a6/s6-avant/my-2022/derivativ-startpage/stage-large-image/1920x1080-AS6_181006_1.jpg?imwidth=1920",
    description:
      "Intelligente, versatile e sportiva. Audi S6 Avant TDI si adatta perfettamente a diverse esigenze di guida.",
    price: 88700,
    category: "Audi Sport S",
    countInStock: 2,
  },
  {
    productId: 5.7,
    name: "Audi RS 6 Avant",
    auto: "A6",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4a5sv/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a6/rs-6-avant/my-2022/derivativ-startpage/highlighted-car-teaser/883x883-rs6_2020_1531.jpg",
    description:
      "Il segreto del successo? Non avere limiti. Dal meeting di lavoro al viaggio in famiglia: Audi RS 6 Avant è l’auto perfetta per ogni occasione.",
    price: 136850,
    category: "Audi Sport RS",
    countInStock: 1,
  },
  {
    productId: 6,
    name: "Audi A7 Sportback",
    auto: "A7",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4ka/2022.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a7/a7-sportback/my-2023/stage-large-image/AA7_171015_3-L.jpg?imwidth=1440",
    description:
      "Il design di una coupé, la spaziosità di una berlina e la versatilità di una Avant: Audi A7 Sportback racchiude il meglio di ogni modello ed è perfetta in ogni situazione.",
    price: 66500,
    category: "Sportback",
    countInStock: 4,
  },
  {
    productId: 6.1,
    name: "Audi S7 Sportback TDI",
    auto: "A7",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4kasv/2019.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a7/s7-sportback/my-2022/derivate-startpage/stage-large-image/1920x1080-as7_181001_2.jpg?imwidth=1920",
    description:
      "Audi S7 Sportback convince al primo sguardo con il suo appeal sofisticato, un’erogazione dinamica della potenza e interni di grande pregio.",
    price: 95550,
    category: "Audi Sport S",
    countInStock: 1,
  },
  {
    productId: 6.2,
    name: "Audi RS 7 Sportback",
    auto: "A7",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4karca/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a7/rs-7-sportback/my-2022/nemo-derivate-startpage/feature-gallery/1920x900-rs7_2020_1540.jpg?imwidth=1920&imdensity=1",
    description:
      "Agile e scattante, elegante ed equilibrata. Con Audi RS 7 Sportback non è necessario scegliere. Performance is an attitude.",
    price: 143200,
    category: "Audi Sport RS",
    countInStock: 1,
  },
  {
    productId: 7,
    name: "Audi A8",
    auto: "A8",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4nc0da/2022.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/it/Gamma/a8/A8_2021_3211_withoutCast_IT_1920x1080.jpg?imwidth=1440",
    description:
      "Una berlina di classe che spicca per eleganza e tecnologie intelligenti, per un’esperienza di guida senza paragoni. Questa è nuova Audi A8.",
    price: 101500,
    category: "Sedan",
    countInStock: 0,
  },
  {
    productId: 7.1,
    name: "Audi A8 L",
    auto: "A8",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4nl0da/2022.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a8/a8-l/my-2022-pa/nemo-derivate-startpage/feature-gallery/1920x900-A8_ae_2021_3277_V1_withoutCast.jpg?imwidth=1920&imdensity=1",
    description:
      "Spazio senza limiti. Nuova Audi A8 L si distingue per l’abitacolo sorprendentemente ampio e accogliente, caratterizzato da sedili posteriori che offrono un comfort di seduta senza precedenti.",
    price: 108700,
    category: "L",
    countInStock: 5,
  },
  {
    productId: 7.2,
    name: "Audi S8 TFSI",
    auto: "A8",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4ncssa/2022.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/a8/s8/my-2022-pa/nemo-derivate-startpage/stage/S8_2021_3261-xl.jpg?imwidth=1920",
    description:
      "S, di sportività. A bordo di nuova Audi S8, la berlina business nella sua forma più sportiva, viaggerai sempre in completo relax.",
    price: 155100,
    category: "Audi Sport S",
    countInStock: 1,
  },
  {
    productId: 8,
    name: "Audi Q2",
    auto: "Q2",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/gagaqc/2021.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q2/q2/my-2023/stage-large-image/Q2_ae_2022_3667-L.png?imwidth=1920",
    description:
      "Il SUV urbano dal look audace e dal design unico si distingue anche per un’ampia gamma di opzioni di infotainment, e per la tecnologia dynamic suspension.",
    price: 30350,
    category: "SUV",
    countInStock: 2,
  },
  {
    productId: 8.1,
    name: "Audi SQ2 TFSI",
    auto: "Q2",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/gags3y/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q2/sq2/my-2022/derivate-startpage/feature-gallery/1920x900-audi-sq2_2020_1841.jpg?imwidth=1920&imdensity=1",
    description:
      "Sportiva, compatta, unica. Il SUV compatto è un concentrato di grandi emozioni alla guida, design sportivo, sistema di infotainment di ultima generazione e tecnologie di assistenza alla guida1 intelligenti.",
    price: 53500,
    category: "Audi Sport S",
    countInStock: 2,
  },
  {
    productId: 9,
    name: "Audi Q3",
    auto: "Q3",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f3bbky/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q3/q3/my-2022/derivative-startpage/stage-large-image/1920x1080-audi-q3-AQ3_181001_1.jpg?imwidth=1920",
    description:
      "Il SUV compatto dalle mille sfaccettature: Audi Q3 è al centro della scena grazie a spaziosità e praticità.",
    price: 38040,
    category: "SUV",
    countInStock: 0,
  },
  {
    productId: 9.1,
    name: "Audi Q3 Sportback",
    auto: "Q3",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f3ncky/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q3/q3-sportback/my-2023/feature-gallery/AQ3_191007_3-L.jpg?imwidth=1920&imdensity=1",
    description:
      "Il carisma di un SUV coupé. L’estetica e lo stile suggestivo da coupé incontrano la potenza e la versatilità tipiche di un SUV: è Audi Q3 Sportback.",
    price: 41940,
    category: "Sportback",
    countInStock: 6,
  },
  {
    productId: 9.2,
    name: "Audi RS Q3",
    auto: "Q3",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f3brwy/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q3/rs-q3/my-2022/NeMo-Derivate-Startpage/stage-large-image/1920x1080-rsq3_2020_1480.jpg?imwidth=1920",
    description:
      "Pronta al domani. Il nuovo SUV compatto dalle performance eccezionali, che combina design sportivo ad un’elevata praticità. Audi RS Q3 è la vettura ideale per le avventure urbane di ogni giorno. Performance is an attitude.",
    price: 72200,
    category: "Audi Sport RS",
    countInStock: 1,
  },
  {
    productId: 9.3,
    name: "Audi RS Q3 Sportback",
    auto: "Q3",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f3nrwy/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q3/rs-q3-sportback/my-2022/nemo-derivate-startpage/stage-large-image/1920x1080-rsq3_ae_2020_2417.jpg?imwidth=1920",
    description:
      "Pronta a dare sempre il massimo. Un SUV coupé che rappresenta il connubio perfetto tra design atletico ed elementi specifici RS. Performance is an attitude.",
    price: 75450,
    category: "Audi Sport RS",
    countInStock: 1,
  },
  {
    productId: 10,
    name: "Audi Q5",
    auto: "Q5",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f3bbky/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q5/q5/my-2023/stage-large-image/q5_2020_2148_1-L.jpg?imwidth=1920",
    description:
      "Audi Q5 combina carattere offroad con un’elevata versatilità e un comfort di bordo ai massimi livelli.",
    price: 55385,
    category: "SUV",
    countInStock: 0,
  },
  {
    productId: 10.1,
    name: "Audi Q5 Sportback",
    auto: "Q5",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/fytbuy/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q5/q5-sportback/my-2023/feature-gallery/Q5_2022_3859-L.jpg?imwidth=1920&imdensity=1",
    description:
      "Nuova Audi Q5 Sportback combina le performance di un SUV con un’elevata praticità quotidiana.",
    price: 58355,
    category: "Sportback",
    countInStock: 6,
  },
  {
    productId: 10.2,
    name: "Audi SQ5 TDI",
    auto: "Q5",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/fygs5a/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q5/sq5/my-2022/NeMo-Derivate-Startpage/stage-lage-image/SQ5_2020_2155-xl-blue.jpg?imwidth=1920",
    description:
      "Affrontare ogni sfida con sicurezza, raggiungere rapidamente le destinazioni, lasciare un segno al solo passaggio. In una parola, Audi SQ5.",
    price: 89325,
    category: "Audi Sport S",
    countInStock: 2,
  },
  {
    productId: 10.3,
    name: "Audi SQ5 Sportback TDI",
    auto: "Q5",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/fyts5a/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q5/sq5-sportback/my-2023/parallax-teaser/sq5_2020_1373_1-L.jpg?imwidth=1920",
    description:
      "Audi SQ5 Sportback è il SUV sportivo dal design moderno e dalle linee coupé, che si distingue per gli ampi spazi e l’elevata versatilità.",
    price: 91835,
    category: "Audi Sport S",
    countInStock: 2,
  },
  {
    productId: 11,
    name: "Audi Q7",
    auto: "Q7",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4mg/2021.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q7/q7/my-2022/NeMo-Derivate-Startpage/feature-gallery/1920x900-q7_2021_3058_1.jpg?imwidth=1920&imdensity=1",
    description:
      "Audi Q7 combina tecnologia, performance e comfort assoluto, per vivere un’esperienza di guida senza precedenti. Con il suo carattere deciso e allo stesso tempo versatile, offre diverse opzioni per rendere l’abitacolo adatto a tutte le esigenze.",
    price: 75470,
    category: "SUV",
    countInStock: 3,
  },
  {
    productId: 11.1,
    name: "Audi SQ7 TFSI",
    auto: "Q7",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4mgsw1/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q7/sq7-tdi/my-2022/derivate-startpage/stage-large-image/1920x1080-ASQ7_191002_1.jpg?imwidth=1920",
    description:
      "Audi SQ7 TFSI è il SUV innovativo ad alta tecnologia, connubio tra potenza e comfort.",
    price: 108400,
    category: "Audi Sport S",
    countInStock: 0,
  },
  {
    productId: 12,
    name: "Audi Q8",
    auto: "Q8",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4mn0g/2021.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q8/q8/my-2022/nemo-derivate-startpage/parallax-teaser/AQ8_D_181026-xl.jpg?imwidth=1920",
    description:
      "Audi Q8 combina magistralmente la silhouette di una coupé sportiva con la spaziosità di un SUV.",
    price: 83850,
    category: "SUV",
    countInStock: 4,
  },
  {
    productId: 12.1,
    name: "Audi SQ8 TFSI",
    auto: "Q8",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4mnsw1/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q8/sq8/my-2023/parallax-teaser/ASQ8_191002_2-XL.jpg?imwidth=1920",
    description:
      "Audi SQ8 TFSI nasce dalla perfetta combinazione di più elementi: design all’avanguardia, potenza dei motori, trazione integrale quattro e comfort eccezionale per i passeggeri.",
    price: 116800,
    category: "Audi Sport S",
    countInStock: 2,
  },
  {
    productId: 12.2,
    name: "Audi RSQ8",
    auto: "Q8",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4mnrv2/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q8/rs-q8/my-2022/nemo-derivate-startpage/feature-gallery/1920x900-rsq8_2020_1553.jpg?imwidth=1920&imdensity=1",
    description:
      "Il SUV coupé più potente della gamma Audi Sport: Audi RS Q8.",
    price: 153100,
    category: "Audi Sport RS",
    countInStock: 1,
  },
  {
    productId: 13,
    name: "Q4 e-tron Sportback",
    auto: "Q4",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f4n/2022.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/q4-e-tron/q4-e-tron-sportback/my-2022/NeMo-Derivate-Startpage/stage-large-image/new/01_Driving_Dynamics_Desktop.jpg?imwidth=1920",
    description:
      "Le linee dinamiche di Audi Q4 Sportback e-tron definiscono il futuro della mobilità elettrica con forme ancora più accattivanti. Il frontale incisivo e il possente posteriore sono pronti a scattare, mentre la sua silhouette si assottiglia dolcemente in un design che emoziona.",
    price: 52120,
    category: "e-tron",
    countInStock: 2,
  },
  {
    productId: 14,
    name: "e-tron GT quattro",
    auto: "GT",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f83rj7/2022.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/audi-e-tron-gt/e-tron-gt/my-2022/NeMo-Derivate-Startpage/images/18_Desktop.jpg?imwidth=1920",
    description:
      "Le proporzioni classiche di una Gran Turismo, come la carrozzeria piatta e larga con un passo lungo, dichiarano già a una prima occhiata il carattere di e-tron GT quattro2: un perfetto connubio tra praticità e DNA sportivo. Il design scultoreo della carrozzeria promette potenza e prestazioni elevate.",
    price: 110420,
    category: "e-tron",
    countInStock: 2,
  },
  {
    productId: 14.1,
    name: "RS e-tron GT",
    auto: "GT",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f83rh7/2022.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/audi-e-tron-gt/rs-e-tron-gt/my-2022/NeMo-Derivate-Startpage/stage-large-images/26_Driving_Shot_Desktop.jpg?imwidth=1920",
    description:
      "Precisione sportiva. Dettagli sorprendenti sottolineano le principali caratteristiche della vettura, come ad esempio il baricentro estremamente basso, evidenziato dalle soglie marcate e al passo lungo.",
    price: 153620,
    category: "GT",
    countInStock: 2,
  },
  {
    productId: 15,
    name: "e-tron Sportback",
    auto: "e-tron",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/geaaa/2021.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/e-tron/audi-e-tron-sportback/my-2022/NeMo-Derivate-Startpage/feature-gallery/A_E-TRON_191043-xl.jpg?imwidth=1920&imdensity=1",
    description:
      "Audi e-tron Sportback combina la potenza e gli spazi ampi di un SUV con l’eleganza di una coupé a quattro porte.",
    price: 87287,
    category: "e-tron",
    countInStock: 2,
  },
  {
    productId: 15.1,
    name: "e-tron S Sportback",
    auto: "e-tron",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/geas/2021.png?imwidth=2911",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/e-tron/audi-e-tron-s-sportback/my-2022/NeMo-Derivate-Startpage/feature-gallery/e-tron-s_2020_1906.jpg?imwidth=1920&imdensity=1",
    description:
      "Lo stile viaggia ad una nuova velocità. Sperimenta un design e dinamiche di guida completamente innovativi con Audi e-tron S Sportback.",
    price: 99637,
    category: "e-tron",
    countInStock: 2,
  },
  {
    productId: 16,
    name: "Audi TT Coupé",
    auto: "TT",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/fvp08y/2021.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/tt/tt-coupe/my-2022/derivate-startpage/feature-gallery/att_181006_2-l.png?imwidth=1920&imdensity=1",
    description:
      "Prendi posto sui sedili sportivi anteriori con poggiatesta integrati, di serie per Audi TT Coupé. Su richiesta, è possibile optare per i sedili anteriori a regolazione elettrica con regolazione pneumatica dello schienale e del supporto lombare.",
    price: 53100,
    category: "Coupé",
    countInStock: 6,
  },
  {
    productId: 16.1,
    name: "Audi TT Roadster",
    auto: "TT",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/fvr08y/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/tt/tt-roadster/my-2022/derivate-startpage/feature-gallery/QTT_181001-L.png?imwidth=1920&imdensity=1",
    description:
      "Una star assoluta. Lo spirito sportivo e la guida a cielo aperto rendono Audi TT Roadster un’auto unica e sorprendente.",
    price: 56640,
    category: "Roadster",
    countInStock: 2,
  },
  {
    productId: 16.2,
    name: "Audi TTS Coupé TFSI",
    auto: "TT",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/fvpsky/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/tt/tts-coupe/my-2022/derivative-startpage/stage-large-image/ATTS_181001-L.jpg?imwidth=1920",
    description:
      "La sportività entra in scena. Potenza, guida dinamica e design sportivo: questa è Audi TTS Coupé.",
    price: 63900,
    category: "Audi Sport S",
    countInStock: 2,
  },
  {
    productId: 16.3,
    name: "Audi TTS Roadster TFSI",
    auto: "TT",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/fvrsky/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/tt/tts-roadster/my-2022/derivative-startpage/stage-large-image/atts_181004_3-L.jpg?imwidth=1920",
    description:
      "Autentica potenza. Grazie alla guida dinamica e alle prestazioni eccezionali, Audi TTS Roadster è l’auto sportiva a due posti capace di regalare emozioni sempre nuove in ogni viaggio.",
    price: 66750,
    category: "Audi Sport S",
    countInStock: 2,
  },
  {
    productId: 16.4,
    name: "Audi TT RS Coupé",
    auto: "TT",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/fvprsy/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/tt/tt-rs-coupe/my-2022/derivate-startpage/feature-gallery/ttrs_2020_1565-L.png?imwidth=1920&imdensity=1",
    description:
      "Massima sportività. Potenza inarrestabile, design accattivante, dinamismo elevato e perfetta stabilità di guida, proprio come un’auto da corsa. Scopri la punta di diamante della gamma TT Audi Sport: Audi TT RS Coupé. Performance is an attitude.",
    price: 84690,
    category: "Audi Sport RS",
    countInStock: 2,
  },
  {
    productId: 16.5,
    name: "Audi TT RS Roadster",
    auto: "TT",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/fvrrsy/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/tt/tt-rs-roadster/my-2022/derivate-startpage/stage/TTRS_2020_1570-L.jpg?imwidth=1920",
    description:
      "Ispirazione senza confini. Che la capote sia aperta o chiusa, Audi TT RS Roadster regala un’esperienza di guida emozionante, grazie a performance sportive e un handling dinamico. Performance is an attitude.",
    price: 86600,
    category: "Audi Sport RS",
    countInStock: 2,
  },
  {
    productId: 17,
    name: "Audi R8 Coupé V10 performance quattro",
    auto: "R8",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4sprde/2022.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/r8/r8-coupe-v10-performance/my-2021/derivative-startpage/stage-large-image/1920x1080-audi-r8-coupe-performance-ar8_ae_2020_2438.jpg?imwidth=1440",
    description:
      "Performance is an attitude - Audi R8 Coupé V10 performance quattro.",
    price: 214010,
    category: "Quattro",
    countInStock: 5,
  },
  {
    productId: 17.1,
    name: "Audi R8 Spider V10 performance quattro",
    auto: "R8",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4srrde/2022.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/r8/r8-spyder-v10-performance-quattro/my-2021/derivative-startpage/parallax-teaser/3840x4000-audi-r8-performance-spyder-r8_2020_1631.jpg?imwidth=1920",
    description:
      "Il motore V10 aspirato di Audi R8 Spyder V10 performance quattro sprigiona 620 CV (456 kW). Con una velocità massima fino a 329 km/h e prestazioni inimitabili, l’esperienza di guida si traduce in emozione allo stato puro.",
    price: 226100,
    category: "Quattro",
    countInStock: 1,
  },
  {
    productId: 17.2,
    name: "Audi R8 Coupé V10 performance RWD",
    auto: "R8",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4spref/2022.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/r8/r8-coupe-v10-performance-rwd/my-2022/feature-gallery/1920x900-audi-r8-coupe-v10-performance-rwd-driving-R8_2021_3004.jpg?imwidth=1920&imdensity=1",
    description:
      "Audi R8 Coupé V10 performance RWD con motore FSI aspirato da 5,2 litri eroga una potenza impressionante di 570 CV (419 kW) che si sprigiona al massimo sull’asse posteriore, consentendo uno scatto in accelerazione da 0 a 100 km/h in 3,7 secondi.",
    price: 170060,
    category: "Coupé",
    countInStock: 1,
  },
  {
    productId: 17.3,
    name: "Audi R8 Spider V10 performance RWD",
    auto: "R8",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4srref/2022.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/r8/r8-spyder-v10-performance-rwd/my-2022/stage-large-image/1920x1080-audi-r8-spyder-v10-performance-rwd-textmodule_2021_3013.jpg?imwidth=1920",
    description:
      "Nuovi orizzonti: Il tettuccio apribile completamente automatico di Audi R8 Spyder V10 performance RWD può essere abbassato in 20 secondi fino a una velocità di 50 km/h, e ti permette di vivere un’esclusiva esperienza di guida.",
    price: 182500,
    category: "Coupé",
    countInStock: 1,
  },
  {
    productId: 17.4,
    name: "Audi R8 GT",
    auto: "R8",
    imageUrl1:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4sprdf/2023.png?imwidth=291",
    imageUrl2:
      "https://www.audi.it/content/dam/nemo/models/r8/r8-gt/my-2023/feature-gallery/R8_GT_2022_4289-L.jpg?imwidth=1920&imdensity=1",
    description:
      "Bellezza poderosa. Talento ingegneristico, design iconico e un unico limite: 333 esemplari disponibili. Questa è Audi R8 GT.",
    price: 182500,
    category: "GT",
    countInStock: 1,
  },
];

module.exports = products2;