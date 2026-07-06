const fornecedores = [
  {
    cnpj: "26.247.868/0001-84",
    razaoSocial: "SEIJIN COMERCIO DE VEICULOS PECAS E SERVICOS LTDA",
    cep: "27947-285",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AV LACERDA AGOSTINHO"
  },
  {
    cnpj: "00.011.218/1217-18",
    razaoSocial: "BRUNO FREITAS DA SILVA",
    cep: "",
    cidade: "",
    estado: "",
    logradouro: ""
  },
  {
    cnpj: "04.584.901/0001-29",
    razaoSocial: "PRO ECO-LOGIUS AGENTES E DISPERSANTES BIODEGRADAVE",
    cep: "25250-130",
    cidade: "DUQUE DE CAXIAS",
    estado: "RJ",
    logradouro: "RUA CAPITAO GUYNEMER"
  },
  {
    cnpj: "05.545.381/0001-08",
    razaoSocial: "AKSO PRODUTOS ELETRONICOS LTDA",
    cep: "93032-200",
    cidade: "SAO LEOPOLDO",
    estado: "RS",
    logradouro: "R EMILIO H. DEXHEIMER"
  },
  {
    cnpj: "39.222.823/0001-05",
    razaoSocial: "PETROTELHAS MATERIAL DE CONSTRUCAO LTDA",
    cep: "27937-160",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AV CARLOS AUGUSTO T GARCIA"
  },
  {
    cnpj: "04.903.763/0001-01",
    razaoSocial: "ANDERSON RODRIGO MARIANO",
    cep: "13515-000",
    cidade: "CHARQUEADA",
    estado: "SP",
    logradouro: "RUA ANTONIO FURLAN"
  },
  {
    cnpj: "16.701.716/0001-56",
    razaoSocial: "FCA FIAT CHRYSLER AUTOMOVEIS BRASIL LTDA.",
    cep: "27980-970",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AVENIDA MIGUEL PEIXOTO GUIMARAES"
  },
  {
    cnpj: "02.211.310/0001-98",
    razaoSocial: "VR DIESEL",
    cep: "27963-828",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA HELIO FRAGA SABINO"
  },
  {
    cnpj: "12.156.587/0001-01",
    razaoSocial: "VS OLIVEIRA COMERCIAL ME",
    cep: "27935-120",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA E-SETE"
  },
  {
    cnpj: "40.378.990/0001-10",
    razaoSocial: "MUNIZ MOTORES",
    cep: "",
    cidade: "RIO DAS OSTRAS",
    estado: "RJ",
    logradouro: "EST PROFESSOR LEANDRO FARIA SARZEDAS"
  },
  {
    cnpj: "03.320.489/0001-77",
    razaoSocial: "WARBEL DO BRASIL INDUSTRIA E COMERCIO LTDA",
    cep: "81610-140",
    cidade: "CURITIBA",
    estado: "PR",
    logradouro: "R SAO BENTO"
  },
  {
    cnpj: "02.828.925/0001-50",
    razaoSocial: "WILSON ROBERTO VENTRONE MARILIA EIRELI",
    cep: "17500-022",
    cidade: "MARILIA",
    estado: "SP",
    logradouro: "AV SAMPAIO VIDAL"
  },
  {
    cnpj: "40.053.796/0001-65",
    razaoSocial: "WS SERVICE MANUTENCAO EM EQUIPAMENTOS MOVEIS LTDA",
    cep: "20730-050",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "R DOUTOR NIEMEYER"
  },
  {
    cnpj: "43.648.971/0001-55",
    razaoSocial: "WURTH DO BRASIL PECAS DE FIXACAO LTDA",
    cep: "",
    cidade: "",
    estado: "",
    logradouro: ""
  },
  {
    cnpj: "28.031.856/0001-43",
    razaoSocial: "CCBL IMPLEMENTOS E SERVICOS LTDA",
    cep: "26574-530",
    cidade: "MESQUITA",
    estado: "RJ",
    logradouro: "R NILO PECANHA"
  },
  {
    cnpj: "55.698.104/0001-03",
    razaoSocial: "BEMEL INDUSTRIA METALURGICA LTDA",
    cep: "13326-400",
    cidade: "SALTO",
    estado: "SP",
    logradouro: "RUA PADRE BENTO"
  },
  {
    cnpj: "04.930.480/0001-40",
    razaoSocial: "AXXONAL MAQUINAS FERRAGENS E FERRAMENTAS LTDA",
    cep: "28890-000",
    cidade: "RIO DAS OSTRAS",
    estado: "RJ",
    logradouro: "AV PC ARMENIO CABRAL"
  },
  {
    cnpj: "13.876.687/0001-75",
    razaoSocial: "TAMBAU RIO TRANSMISSOES LTDA",
    cep: "25085-150",
    cidade: "DUQUE DE CAXIAS",
    estado: "RJ",
    logradouro: "R CESAR MARQUES"
  },
  {
    cnpj: "28.326.312/0005-32",
    razaoSocial: "BELPORTAS COMERCIO DE PRODUTOS ELETRONICOS LTDA",
    cep: "",
    cidade: "RIO DAS OSTRAS",
    estado: "RJ",
    logradouro: "AV JANE MARIA MARTINS FIGUEIRA"
  },
  {
    cnpj: "12.157.917/0001-83",
    razaoSocial: "ELETRICA KVA LTDA",
    cep: "25085-595",
    cidade: "DUQUE DE CAXIAS",
    estado: "RJ",
    logradouro: "RUA R DOUTOR WALDIR DE SOUZA MEDEIROS"
  },
  {
    cnpj: "01.579.956/0001-52",
    razaoSocial: "MUNDO DAS CORES TINTAS E MATERIAIS DE CONSTRUCAO L",
    cep: "20540-004",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "R BARAO DE MESQUITA"
  },
  {
    cnpj: "15.726.754/0001-09",
    razaoSocial: "SEVEN EXPORT & IMPORT EIRELI",
    cep: "29163-321",
    cidade: "SERRA",
    estado: "ES",
    logradouro: "RUA FLAMINGO"
  },
  {
    cnpj: "31.515.083/0001-85",
    razaoSocial: "SAIBREIRA BARRA DO BACALHAU LTDA",
    cep: "27943-400",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AVENI ROV AMARAL PEIXOTO"
  },
  {
    cnpj: "63.411.623/0025-44",
    razaoSocial: "MARDISA VEICULOS SA",
    cep: "28073-476",
    cidade: "CAMPOS DOS GOYTACAZES",
    estado: "RJ",
    logradouro: "ROD Rod. Campos-Vitória"
  },
  {
    cnpj: "00.985.004/0002-57",
    razaoSocial: "PME MAQUINAS E EQUIPAMENTOS LTDA",
    cep: "24890-000",
    cidade: "TANGUA",
    estado: "RJ",
    logradouro: "ROD BR 101"
  },
  {
    cnpj: "23.841.823/0001-45",
    razaoSocial: "ARMAZEM AMBIENTAL COMERCIAL IMPORTADORA LTDA - ME",
    cep: "27943-032",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA AV DUQUE DE CAXIAS"
  },
  {
    cnpj: "29.381.803/0001-15",
    razaoSocial: "KOTRAC PECAS E ACESSORIOS LTDA",
    cep: "21040-115",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "R TEIXEIRA DE CASTRO"
  },
  {
    cnpj: "62.018.759/0003-10",
    razaoSocial: "V.I. INDUSTRIA E COMERCIO LTDA",
    cep: "21210-000",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "R FILOMENA NUNES"
  },
  {
    cnpj: "17.217.072/0001-98",
    razaoSocial: "ELO FIX EIRELI",
    cep: "27915-011",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AVENI RUI BARBOSA - de 977 ao fim - lado Impar"
  },
  {
    cnpj: "07.962.064/0001-12",
    razaoSocial: "TRUCK EIXO IMPORT E DISTRIB AUTO PECAS",
    cep: "02117-001",
    cidade: "SAO PAULO",
    estado: "SP",
    logradouro: "RUA ANDARAI - de 501/502 ao fim"
  },
  {
    cnpj: "59.104.422/0024-46",
    razaoSocial: "VOLKSWAGEN DO BRASIL INDUSTRIA DE VEICULOS AUTOMOT",
    cep: "12043-000",
    cidade: "TAUBATE",
    estado: "SP",
    logradouro: "AVENI AV CARLOS PEDROSO DA SILVEIRA"
  },
  {
    cnpj: "24.772.866/0001-89",
    razaoSocial: "MAQSHOW SERV E COM. LOC. EQIP EIRELI",
    cep: "27980-970",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA SATURNO"
  },
  {
    cnpj: "49.795.800/0024-21",
    razaoSocial: "MANETONI DISTRIBUIDORA DE PRODUTOS SIDERURGICOS IM",
    cep: "07224-030",
    cidade: "GUARULHOS",
    estado: "SP",
    logradouro: "RUA SUME"
  },
  {
    cnpj: "00.915.086/0001-82",
    razaoSocial: "DISTRIBUIDORA DE FERRAMENTAS KENNEDY LTDA",
    cep: "80220-201",
    cidade: "CURITIBA",
    estado: "PR",
    logradouro: "AV PRESIDENTE KENNEDY"
  },
  {
    cnpj: "35.886.894/0001-43",
    razaoSocial: "A S MARCHON OFICINA E REBOQUE",
    cep: "28860-000",
    cidade: "CASIMIRO DE ABREU",
    estado: "RJ",
    logradouro: "AV INDAIACU"
  },
  {
    cnpj: "05.182.495/0001-30",
    razaoSocial: "AEROSTEEL MANGUEIRAS E CONEXOES LTDA",
    cep: "24030-091",
    cidade: "NITEROI",
    estado: "RJ",
    logradouro: "R VISCONDE DE ITABORAI"
  },
  {
    cnpj: "23.797.607/0001-40",
    razaoSocial: "DINAMICA COMERCIO DE EQUIPAMENTOS DE PROTECAO E FE",
    cep: "",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AV DOUTOR SERGIO VIEIRA DE MELLO"
  },
  {
    cnpj: "12.377.080/0001-88",
    razaoSocial: "ATACADO UNIAO LTDA",
    cep: "29161-376",
    cidade: "ESPIRITO SANTO",
    estado: "ES",
    logradouro: "ROD AV. ACESSO RODOVIARIO"
  },
  {
    cnpj: "09.637.385/0003-39",
    razaoSocial: "MULTIMARCAS PECAS DIESEL LTDA - GALPAO",
    cep: "21012-000",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "RUA CASTELO BRANCO"
  },
  {
    cnpj: "15.834.069/0001-98",
    razaoSocial: "VIP MOTO CARIOCA LTDA",
    cep: "27915-210",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA DOS ADVOGADOS"
  },
  {
    cnpj: "02.618.956/0001-87",
    razaoSocial: "GUMMI-TEC INDUSTRIA E COMERCIO DE PECAS ESPECIAIS",
    cep: "20930-380",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "R BELA"
  },
  {
    cnpj: "10.346.806/0001-90",
    razaoSocial: "MOVIX INDUSTRIA DE EQUIPAMENTOS PARA MOVIMENTACAO",
    cep: "99150000",
    cidade: "MARAU",
    estado: "RS",
    logradouro: "RUA PARALELA OESTE PERIMETRAL"
  },
  {
    cnpj: "08.792.909/0001-31",
    razaoSocial: "G.R. REFRIGERACAO LTDA",
    cep: "28800-000",
    cidade: "RIO BONITO",
    estado: "RJ",
    logradouro: "R DOMICIO DA GAMA"
  },
  {
    cnpj: "27.017.797/0008-62",
    razaoSocial: "COTIMA COMERCIO DE TINTAS MACAE",
    cep: "",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AV RUI BARBOSA"
  },
  {
    cnpj: "27.799.618/0001-10",
    razaoSocial: "AGM ROLAMENTO LTDA- EPP",
    cep: "",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "RUA FIGUEIRA DE MELO"
  },
  {
    cnpj: "28.415.370/0003-70",
    razaoSocial: "VIFERRO FERRAMENTAS E FERRAGENS LTDA",
    cep: "27930-070",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AV ROD AMARAL PEIXOTO"
  },
  {
    cnpj: "43.162.241/0001-40",
    razaoSocial: "MARCO ANTONIO DA SILVA MACIEL 09363671720",
    cep: "",
    cidade: "MAGE",
    estado: "RJ",
    logradouro: "RUA B (JD IPIRANGA)"
  },
  {
    cnpj: "92.753.268/0004-65",
    razaoSocial: "STEMAC SA GRUPOS GERADORES FRJ",
    cep: "21061-020",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "AVENI ITAÚCA"
  },
  {
    cnpj: "17.423.026/0001-45",
    razaoSocial: "COMERCIAL MIX OFFSHORE LTDA",
    cep: "28300-000",
    cidade: "ITAPERUNA",
    estado: "RJ",
    logradouro: "AVENIDA ZULAMITH BITTENCOURT"
  },
  {
    cnpj: "01.243.141/0001-06",
    razaoSocial: "VISION SOLUTIONS ENGENHARIA EIRELI",
    cep: "",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "R LADY ESTEVES DA CONCEICAO"
  },
  {
    cnpj: "40.393.555/0001-65",
    razaoSocial: "MOYCHAVES CORREIAS E BORRACHAS",
    cep: "21370-000",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "RUA COMENDADOR LISBOA"
  },
  {
    cnpj: "16.941.673/0006-90",
    razaoSocial: "LGN DISTRIBUIDORA DE PNEUS LTDA",
    cep: "21535-490",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "R BENJAMIM DA SILVA"
  },
  {
    cnpj: "20.029.458/0001-80",
    razaoSocial: "MOTO CAR C.D.O",
    cep: "27980-000",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AV AVN MIGUEL PEIXOTO GUIMARAES"
  },
  {
    cnpj: "03.461.082/0001-60",
    razaoSocial: "PERFILADOS RIO DOCE LTDA",
    cep: "",
    cidade: "LINHARES",
    estado: "ES",
    logradouro: "ROD BR 101 NORTE"
  },
  {
    cnpj: "03.633.563/0001-05",
    razaoSocial: "AMEC- AMERICA CAMINHOES LTDA",
    cep: "21012-351",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "AV BRASIL"
  },
  {
    cnpj: "09.637.385/0004-10",
    razaoSocial: "MULTIMARCAS PECAS DIESEL LTDA",
    cep: "21012-000",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "R CASTELO BRANCO"
  },
  {
    cnpj: "04.164.758/0001-16",
    razaoSocial: "GRANVIA AUTO PECAS LTDA - EPP",
    cep: "21250-460",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "RUA BALDUINO DE AGUIAR"
  },
  {
    cnpj: "84.685.106/0001-66",
    razaoSocial: "FRANKLIN ELECTRIC INDUSTRIA DE MOTOBOMBAS S.A.",
    cep: "89219-504",
    cidade: "JOINVILLE",
    estado: "SC",
    logradouro: "RUA R HANS DIETER SCHMIDT"
  },
  {
    cnpj: "17.830.728/0001-43",
    razaoSocial: "MOTOLAGOS COMERCIO DE PECAS EIRELI - EPP",
    cep: "27910-340",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA SILVA JARDIM"
  },
  {
    cnpj: "21.478.576/0001-39",
    razaoSocial: "IMPERIO AUTOCENTER LTDA",
    cep: "",
    cidade: "RIO DAS OSTRAS",
    estado: "RJ",
    logradouro: "R GUANABARA"
  },
  {
    cnpj: "09.035.570/0001-91",
    razaoSocial: "ITA CENTER INSPECAO VEICULAR LTDA",
    cep: "",
    cidade: "ITABORAI",
    estado: "RJ",
    logradouro: "ROD BR 101"
  },
  {
    cnpj: "18.178.618/0001-01",
    razaoSocial: "J R POSTO DE COMBUSTIVEIS LTDA",
    cep: "24230-151",
    cidade: "NITEROI",
    estado: "RJ",
    logradouro: "AVENIDA ROBERTO SILVEIRA"
  },
  {
    cnpj: "05.289.050/0001-54",
    razaoSocial: "POSTO TREVO LITORAL LTDA",
    cep: "27946-190",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AV GASTAO HENRIQUE SCHUELER"
  },
  {
    cnpj: "30.759.763/0001-81",
    razaoSocial: "POSTO DE COMBUSTIVEIS CAFUBA LTDA",
    cep: "",
    cidade: "NITEROI",
    estado: "RJ",
    logradouro: "R DOUTOR OSIRIS PITANGA"
  },
  {
    cnpj: "29.220.490/0001-13",
    razaoSocial: "CARGA TEXTIL INDUSTRIA E COMERCIO DE EQUIPAMENTOS",
    cep: "03223-060",
    cidade: "SAO PAULO",
    estado: "SP",
    logradouro: "R MARCELO MULLER"
  },
  {
    cnpj: "28.548.873/0005-86",
    razaoSocial: "RICAMAR PNEUS LTDA",
    cep: "",
    cidade: "ARARUAMA",
    estado: "RJ",
    logradouro: "ROD AMARAL PEIXOTO"
  },
  {
    cnpj: "25.244.905/0001-38",
    razaoSocial: "RIOTRUCK SERVICOS LTDA",
    cep: "21535-510",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "AV CORONEL PHIDIAS TAVORA"
  },
  {
    cnpj: "34.163.250/0001-64",
    razaoSocial: "CBA DIESEL SP ATACADISTA DE AUTOPECAS LTDA - SSA",
    cep: "09220-510",
    cidade: "SANTO ANDRE",
    estado: "SP",
    logradouro: "RUA CONCEICAO"
  },
  {
    cnpj: "29.793.429/0001-65",
    razaoSocial: "COMERCIAL CHARITAS DE PETROLEO LTDA",
    cep: "24360-022",
    cidade: "NITEROI",
    estado: "RJ",
    logradouro: "AV QUINTINO BOCAIUVA"
  },
  {
    cnpj: "22.174.210/0001-39",
    razaoSocial: "LCTP COMERCIO DE PECAS E ACESSORIOS EIRELI",
    cep: "",
    cidade: "ITABORAI",
    estado: "RJ",
    logradouro: "R JOSE LEANDRO"
  },
  {
    cnpj: "32.546.764/0002-54",
    razaoSocial: "REFRIGERACAO VENDA DAS PEDRAS EIRELI - ME",
    cep: "27910-310",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA MARECHAL DEODORO"
  },
  {
    cnpj: "73.762.767/0001-21",
    razaoSocial: "CARROCERIAS MIRAMAR LTDA",
    cep: "",
    cidade: "ITABORAI",
    estado: "RJ",
    logradouro: "RUA SANTA CRUZ"
  },
  {
    cnpj: "32.538.498/0001-37",
    razaoSocial: "FLORPLAN ATACADISTA LTDA",
    cep: "24445-640",
    cidade: "SAO GONCALO",
    estado: "RJ",
    logradouro: "R PROFESSOR ADALBERTO NICOLL"
  },
  {
    cnpj: "29.755.295/0001-98",
    razaoSocial: "POSTO DE GASOLINA TOCANTINS LTDA",
    cep: "24310-005",
    cidade: "NITEROI",
    estado: "RJ",
    logradouro: "AV RUI BARBOSA"
  },
  {
    cnpj: "42.426.965/0001-90",
    razaoSocial: "POSTO SUPERSONICO LTDA",
    cep: "21920-330",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "AV 20 DE JANEIRO"
  },
  {
    cnpj: "06.246.084/0001-24",
    razaoSocial: "MAQUIPECAS REPRESENTACOES LTDA",
    cep: "21032-150",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "R JOAO TORQUATO"
  },
  {
    cnpj: "26.588.821/0001-84",
    razaoSocial: "SUPER EPI EQUIPAMENTOS DE PROTECAO INDIVIDUAL EIRE",
    cep: "02052-001",
    cidade: "SAO PAULO",
    estado: "SP",
    logradouro: "R DOZE DE SETEMBRO"
  },
  {
    cnpj: "04.798.677/0006-82",
    razaoSocial: "DIAFER EIRELI",
    cep: "18410-600",
    cidade: "ITAPEVA",
    estado: "SP",
    logradouro: "AV GUIDO TOMAZONI"
  },
  {
    cnpj: "10.996.479/0001-11",
    razaoSocial: "GOLFINHO DE CABO FRIO ART PARA BORR MOTOPECAS LTDA",
    cep: "28908-500",
    cidade: "CABO FRIO",
    estado: "RJ",
    logradouro: "AVENI AMERICA CENTRAL - atE 498/499"
  },
  {
    cnpj: "09.316.105/0001-29",
    razaoSocial: "FRIOVIX COMERCIO DE REFRIGERACAO LTDA",
    cep: "",
    cidade: "SERRA",
    estado: "ES",
    logradouro: "AV CIVIT I"
  },
  {
    cnpj: "24.111.299/0001-10",
    razaoSocial: "POSTO RAIZ LTDA",
    cep: "",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AV JOSE ALVES MACHADO"
  },
  {
    cnpj: "28.654.510/0001-00",
    razaoSocial: "CBA AUTOMOTIVE PARTS LTDA - TOC",
    cep: "77023-472",
    cidade: "PALMAS",
    estado: "TO",
    logradouro: "QUADR 912 SUL ALAMEDA 15"
  },
  {
    cnpj: "05.355.114/0001-78",
    razaoSocial: "ITALPRATES COMERCIO E IMPORTACAO DE PECAS PARA TRA",
    cep: "03191-110",
    cidade: "SAO PAULO",
    estado: "SP",
    logradouro: "R MIGUEL MOTA"
  },
  {
    cnpj: "27.487.693/0018-93",
    razaoSocial: "RDG Acos do Brasil S/A",
    cep: "",
    cidade: "SERRA",
    estado: "ES",
    logradouro: "RUA 1A QD II LTE 04 DISTRITO DE CARAPINA"
  },
  {
    cnpj: "27.498.765/0001-50",
    razaoSocial: "L M ACESSORIOS E PECAS LTDA",
    cep: "",
    cidade: "CAMPOS DOS GOYTACAZES",
    estado: "RJ",
    logradouro: "ROD CAMPOS VITORIA"
  },
  {
    cnpj: "36.208.262/0001-93",
    razaoSocial: "MATERIAIS DE CONSTRUCAO RAUL VEIGA LTDA",
    cep: "24730-060",
    cidade: "SAO GONCALO",
    estado: "RJ",
    logradouro: "EST RAUL VEIGA"
  },
  {
    cnpj: "38.246.255/0001-01",
    razaoSocial: "R ZANELLI PECAS LTDA ME",
    cep: "27915-011",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AVENI RUI BARBOSA - de 977 ao fim - lado Impar"
  },
  {
    cnpj: "26.191.992/0001-75",
    razaoSocial: "DVANEIO FOCO COMERCIO E SERVICOS LTDA ME",
    cep: "27963-554",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA ERCIO VARGAS"
  },
  {
    cnpj: "22.761.584/0086-40",
    razaoSocial: "FORTBRAS AUTOPECAS S.A.",
    cep: "28070-000",
    cidade: "CAMPOS DOS GOYTACAZES",
    estado: "RJ",
    logradouro: "AV CARLOS ALBERTO CHEBABE"
  },
  {
    cnpj: "52.158.821/0001-54",
    razaoSocial: "VITAL IMPLEMENTOS RODOVIARIOS LTDA",
    cep: "13487-188",
    cidade: "LIMEIRA",
    estado: "SP",
    logradouro: "R MARIO LIMA"
  },
  {
    cnpj: "02.790.028/0001-03",
    razaoSocial: "NORPEM COMERCIAL LTDA",
    cep: "20941-000",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "RUA FIGUEIRA DE MELO - lado par"
  },
  {
    cnpj: "39.929.395/0001-47",
    razaoSocial: "MT AUTOPECAS ACESSORIOS LTDA",
    cep: "28200-000",
    cidade: "SAO JOAO DA BARRA",
    estado: "RJ",
    logradouro: "EST PUBLICA DO ACU RJ 240"
  },
  {
    cnpj: "29.302.348/0003-87",
    razaoSocial: "GURGELMIX MAQUINAS E FERRAMENTAS S.A.",
    cep: "",
    cidade: "CAJAMAR",
    estado: "SP",
    logradouro: "V AC NORTE KM 38 (ROD ANHANGUERA)"
  },
  {
    cnpj: "31.383.201/0002-20",
    razaoSocial: "ARMAZEM OFFSHORE DE MACAE COMERCIAL E IMPORTADORA",
    cep: "",
    cidade: "VILA VELHA",
    estado: "ES",
    logradouro: "ROD DARLY SARDOS"
  },
  {
    cnpj: "39.185.293/0001-64",
    razaoSocial: "TECTAL MATERIAIS DE CONSTRUCAO LTDA",
    cep: "24220-121",
    cidade: "NITEROI",
    estado: "RJ",
    logradouro: "RUA MARIZ E BARROS - lado par"
  },
  {
    cnpj: "36.845.939/0001-02",
    razaoSocial: "COMERCIAL OFFSHORE VAREJISTA COMERCIO DE MAQUINAS,",
    cep: "27940-370",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AV FABIO FRANCO"
  },
  {
    cnpj: "61.478.897/0001-58",
    razaoSocial: "ABECOM ROLAMENTOS E PRODUTOS DE BORRACA LTDA",
    cep: "03047-000",
    cidade: "SAO PAULO",
    estado: "SP",
    logradouro: "RUA Rua 21 de Abril"
  },
  {
    cnpj: "01.908.878/0001-92",
    razaoSocial: "ABI COMERCIO E SERVICOS LTDA ME",
    cep: "27961-070",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "R RODOVIA AMARAL PEIXOTO"
  },
  {
    cnpj: "02.662.809/0001-04",
    razaoSocial: "TARCO GOMES PNMEUS LTDA",
    cep: "27910-060",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA DOUTOR TELIO BARRETO"
  },
  {
    cnpj: "13.232.089/0001-63",
    razaoSocial: "ABUD PNEUS & RODAS MACAE LTDA",
    cep: "27910-030",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "R DR. TELIO BARRETO"
  },
  {
    cnpj: "51.946.630/0001-94",
    razaoSocial: "HIDROMEPE ENGENHARIA DE MANUTENCAO HID IND COM LTD",
    cep: "03155-000",
    cidade: "SAO PAULO",
    estado: "SP",
    logradouro: "AVENI PROFESSOR LUIZ IGNACIO ANHAIA MELLO"
  },
  {
    cnpj: "03.624.587/0001-06",
    razaoSocial: "ACCESS TECNOLOGIA DIGITAL LTDA",
    cep: "13845-414",
    cidade: "MOGIGUACU",
    estado: "SP",
    logradouro: "AV JULIO XAVIER DA SILVA"
  },
  {
    cnpj: "26.312.677/0001-59",
    razaoSocial: "USIMACKI LOCACAO E COMERCIO DE PECAS EIRELI ME",
    cep: "27930-100",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA VIA DO SOL"
  },
  {
    cnpj: "04.457.414/0001-03",
    razaoSocial: "ACRIMAR COMERCIO E SERVICOS LTDA",
    cep: "28200-000",
    cidade: "SAO JOAO DA BARRA",
    estado: "RJ",
    logradouro: "ROD BR 356 KM 170"
  },
  {
    cnpj: "06.113.208/0002-84",
    razaoSocial: "ADAO PISCINAS - C. M. M. SILVA COMERCIO DE PISCINA",
    cep: "27923-220",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AVENI GUADALAJARA"
  },
  {
    cnpj: "35.025.417/0001-93",
    razaoSocial: "ADENILDO NUNES DA SILVA",
    cep: "27980000",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "ENGENHO DA PRAIA"
  },
  {
    cnpj: "29.386.844/0001-02",
    razaoSocial: "ADINAVE COMERCIO E SERVICOS EM EMPILHADEIRA LTDA -",
    cep: "21020-160",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "RUA CUBA"
  },
  {
    cnpj: "23.376.993/0001-04",
    razaoSocial: "R. E. SALLES COMERCIO E SERVICO EIRELI - ME",
    cep: "27937-590",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AVENI CARLOS AUGUSTO TINOCO GARCIA"
  },
  {
    cnpj: "09.274.696/0001-19",
    razaoSocial: "AFW COMERCIO DE PECAS PARA TRATORES LTDA",
    cep: "24855-144",
    cidade: "ITABORAI",
    estado: "RJ",
    logradouro: "ROD ROD. BR 101 KM 22.5 LJ 1"
  },
  {
    cnpj: "33.845.322/0021-34",
    razaoSocial: "A GERADORA ALUGUEL DE MAQUINAS S.A.",
    cep: "25230-005",
    cidade: "DUQUE DE CAXIAS",
    estado: "RJ",
    logradouro: "RODOV WASHINGTON LUIZ - de 9601 a 14199 - lado Impar"
  },
  {
    cnpj: "33.845.322/0019-10",
    razaoSocial: "A GERADORA ALUGUEL DE MAQUINAS S.A.",
    cep: "28890-000",
    cidade: "RIO DAS OSTRAS",
    estado: "RJ",
    logradouro: "AV AVN DOS BANDEIRANTES"
  },
  {
    cnpj: "07.493.290/0001-00",
    razaoSocial: "AGO COMERCIO DE VEICULOS LTDA",
    cep: "22793-080",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "AV DAS AMERICAS"
  },
  {
    cnpj: "21.202.102/0001-60",
    razaoSocial: "AGROCENTER DISTRIBUIDORA DE PECAS EIRELI",
    cep: "27963-846",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA RUA JOSSY SUIRO"
  },
  {
    cnpj: "29.705.985/0001-32",
    razaoSocial: "POSTO DE GASOLINA ALESSANDRA LTDA",
    cep: "27937-300",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "ROD BR 101"
  },
  {
    cnpj: "02.297.602/0001-88",
    razaoSocial: "ALFAKIT LTDA - EPP",
    cep: "88090-820",
    cidade: "FLORIANOPOLIS",
    estado: "SC",
    logradouro: "RUA JOAO SAMPAIO DA SILVA"
  },
  {
    cnpj: "27.054.488/0001-96",
    razaoSocial: "MARIA IVANIE PEREIRA BARBOSA CORDEIRO 01186940492",
    cep: "27965-075",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "ATL AV PROFESSORA ARLETE RIBEIRO JOSE"
  },
  {
    cnpj: "07.331.043/0001-07",
    razaoSocial: "ALFDIESEL COMERCIO DE PECAS DE VEICULOS LTDA",
    cep: "28970-000",
    cidade: "ARARUAMA",
    estado: "RJ",
    logradouro: "RUA GUANABARA"
  },
  {
    cnpj: "10.207.823/0001-46",
    razaoSocial: "ALBANY ALVES DE LUCENA FILHO - SOLDAS",
    cep: "",
    cidade: "SAO PAULO",
    estado: "SP",
    logradouro: "R ANDRE LEAO"
  },
  {
    cnpj: "04.389.533/0001-68",
    razaoSocial: "ALIANCA DE MACAE COMERCIO, IMPORTACAO E EXPORTACAO",
    cep: "",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA DOS JURITIS"
  },
  {
    cnpj: "30.862.521/0001-19",
    razaoSocial: "ALIANCA COMERCIO IMPORTACAO E EXPORTACAO LTDA",
    cep: "",
    cidade: "SERRA",
    estado: "ES",
    logradouro: "AVENIDA DESEMBARGADOR MARIO DA SILVA NUNES"
  },
  {
    cnpj: "44.473.952/0001-06",
    razaoSocial: "AMANDA MOTOS COMERCIO E SERVICOS LTDA",
    cep: "27910-060",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "R DOUTOR TELIO BARRETO"
  },
  {
    cnpj: "00.776.574/0001-56",
    razaoSocial: "AMERICANAS.COM",
    cep: "20081-060",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "R RUA SACADURA CABRAL"
  },
  {
    cnpj: "03.182.704/0001-10",
    razaoSocial: "A M DE SOUZA GOMES COMERCIO DE FERRAMENTAS LTDA",
    cep: "27910-060",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA DR TELIO BARRETO"
  },
  {
    cnpj: "19.035.356/0001-99",
    razaoSocial: "ANCHIETA CAMBIOS INDUSTRIA E MANUTENCAO DE VEICUL",
    cep: "09220-570",
    cidade: "SANTO ANDRE",
    estado: "SP",
    logradouro: "AVENI DOS ESTADOS"
  },
  {
    cnpj: "12.432.329/0003-72",
    razaoSocial: "ANCHIETA PECAS DISTRIB. DE PECAS PARA CAM. E ONIB.",
    cep: "09220-570",
    cidade: "SANTO ANDRE",
    estado: "SP",
    logradouro: "AVENI DOS ESTADOS"
  },
  {
    cnpj: "74.671.991/0001-70",
    razaoSocial: "A.N.T. FERRAMENTAS - COMERCIAL E IMPORTADORA LTDA",
    cep: "03042-000",
    cidade: "SAO PAULO",
    estado: "SP",
    logradouro: "R PIRATININGA"
  },
  {
    cnpj: "27.340.074/0015-29",
    razaoSocial: "ANTONIO AUTO PECAS MACAE",
    cep: "27940-290",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA CARLOS AUGUSTO TINOCO GARCIA"
  },
  {
    cnpj: "17.469.701/0053-06",
    razaoSocial: "ARCELORMITTAL BRASIL S.A",
    cep: "29140-535",
    cidade: "CARIACICA",
    estado: "ES",
    logradouro: "RUA LEOPOLDINA"
  },
  {
    cnpj: "28.998.979/0001-58",
    razaoSocial: "ARCO IRIS PETRO TINTAS MATERIAL DE CONSTRUCAO LTDA",
    cep: "27910-070",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA TENENTE-CORONEL AMADO"
  },
  {
    cnpj: "23.684.546/0001-04",
    razaoSocial: "ARCO IRIS LED COMERCIAL LTDA",
    cep: "",
    cidade: "TRES RIOS",
    estado: "RJ",
    logradouro: "AV ODILON GOMES ASSUMPCAO"
  },
  {
    cnpj: "01.034.217/0001-85",
    razaoSocial: "ARCPLEX QUIMICA INDUSTRIA E COMERCIO LTDA ME",
    cep: "27947-210",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA RUA ARINDA NOGUEIRA"
  },
  {
    cnpj: "31.383.201/0001-49",
    razaoSocial: "ARMAZEM OFFSHORE DE MACAE COMERCIAL E IMPORTADORA",
    cep: "27943-032",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AV DUQUE DE CAXIAS"
  },
  {
    cnpj: "63.987.093/0003-71",
    razaoSocial: "ARMOR EQUIPAMENTOS DE PROTECAO LTDA",
    cep: "22790-703",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "AVENI DAS AMERICAS"
  },
  {
    cnpj: "20.427.185/0001-22",
    razaoSocial: "A SCHELES GONCALVES AUTO PECAS",
    cep: "27980-000",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "R principal"
  },
  {
    cnpj: "16.731.862/0001-24",
    razaoSocial: "ATACADAO PAPELEX LTDA",
    cep: "21010-410",
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
    logradouro: "RUA FRANCISCO DE SOUSA E MELO"
  },
  {
    cnpj: "27.744.333/0005-05",
    razaoSocial: "UNIAO COMERCIO DE PECAS LTDA",
    cep: "29110-286",
    cidade: "VILA VELHA",
    estado: "ES",
    logradouro: "AVENI CARLOS LINDENBERG - lado par"
  },
  {
    cnpj: "27.197.193/0001-79",
    razaoSocial: "A. TAVARES CARPINTARIA E MARCENARIA - EIRELI",
    cep: "27923-220",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AV GUADALAJARA"
  },
  {
    cnpj: "27.899.889/0001-47",
    razaoSocial: "ATLAM OFF-SHORE LTDA",
    cep: "27925-620",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AV AVN IVAIR AMADO"
  },
  {
    cnpj: "62.629.662/0001-82",
    razaoSocial: "ATLANTICA INDUSTRIA DE SEPARADORES EIRELI",
    cep: "05731-370",
    cidade: "SAO PAULO",
    estado: "SP",
    logradouro: "R JOAQUIM NUNES TEIXEIRA"
  },
  {
    cnpj: "21.594.194/0001-70",
    razaoSocial: "BRUNO SALY DE MACEDO CARVALHO",
    cep: "24800-013",
    cidade: "ITABORAI",
    estado: "RJ",
    logradouro: "RUA LAURA CID"
  },
  {
    cnpj: "04.099.706/0001-03",
    razaoSocial: "A. S. MORAIS COMERCIO DE PECAS E ACESSORIOS PARA A",
    cep: "27916-020",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "R VEREADOR ABREU LIMA"
  },
  {
    cnpj: "05.881.419/0001-13",
    razaoSocial: "AUTO JETER SERVICOS E COMERCIO DE PECAS EIRELI",
    cep: "26570-000",
    cidade: "MESQUITA",
    estado: "RJ",
    logradouro: "R GOVERNADOR CELSO PECANHA"
  },
  {
    cnpj: "10.612.199/0001-62",
    razaoSocial: "AUTOLAGOS COMERCIO DE PECAS LTDA",
    cep: "27940-410",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA EVALDO COSTA"
  },
  {
    cnpj: "32.075.511/0001-69",
    razaoSocial: "AUTOMOTINTAS COMERCIO EIRELI",
    cep: "28910-400",
    cidade: "CABO FRIO",
    estado: "RJ",
    logradouro: "R FONSECA JORDAO"
  },
  {
    cnpj: "04.399.699/0001-65",
    razaoSocial: "AUTON SOLUCOES AMBIENTAIS",
    cep: "28993-000",
    cidade: "SAQUAREMA",
    estado: "RJ",
    logradouro: "RUA ETR BACACA- LATINO MELO"
  },
  {
    cnpj: "31.271.216/0001-15",
    razaoSocial: "AUTO PECAS ESTRADAO LTDA",
    cep: "",
    cidade: "ITABORAI",
    estado: "RJ",
    logradouro: "ROD GOVERNADOR MARIO COVAS"
  },
  {
    cnpj: "07.065.883/0001-67",
    razaoSocial: "ESTRADAO DO ALCANTARA AUTO PECAS LTDA",
    cep: "",
    cidade: "SAO GONCALO",
    estado: "RJ",
    logradouro: "R CAPITAO JUVENAL FIGUEIREDO"
  },
  {
    cnpj: "12.527.935/0001-00",
    razaoSocial: "J R FERNANDES AUTO PECAS LTDA",
    cep: "27937-590",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AV CARLOS AUGUSTO TINOCO GARCIA"
  },
  {
    cnpj: "22.563.186/0001-20",
    razaoSocial: "L M AUTO TRUCK PECAS E ACESSORIOS LTDA",
    cep: "24722-070",
    cidade: "SAO GONCALO",
    estado: "RJ",
    logradouro: "AV PRESIDENTE ROOSEVELT"
  },
  {
    cnpj: "10.757.676/0001-88",
    razaoSocial: "QUITUNGO AUTO VIDROS ITABORAI LTDA",
    cep: "",
    cidade: "ITABORAI",
    estado: "RJ",
    logradouro: "ROD BR - 101"
  },
  {
    cnpj: "06.656.324/0001-69",
    razaoSocial: "AVENIDA TEMPER BOX VIDRACARIA E HIDRAULICA LTDA",
    cep: "27910-060",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA DOUTOR TELIO BARRETO"
  },
  {
    cnpj: "33.242.631/0001-76",
    razaoSocial: "J.G.G COMERCIO DE GASES SERVICOS E TRANSPORTE EIRE",
    cep: "24436-400",
    cidade: "SAO GONCALO",
    estado: "RJ",
    logradouro: "RUA CAVARU"
  },
  {
    cnpj: "42.087.254/0014-53",
    razaoSocial: "BAKER HUGHES DO BRASIL LTDA",
    cep: "27932-355",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "ESTRADA PILOTO ROMMEL OLIVEIRA GARCIA"
  },
  {
    cnpj: "42.087.254/0006-43",
    razaoSocial: "BAKER HUGHES DO BRASIL LTDA",
    cep: "27966-530",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AV. AV. ARAXA"
  },
  {
    cnpj: "42.087.254/0020-00",
    razaoSocial: "BAKER HUGHES DO BRASIL LTDA",
    cep: "27933-372",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA JOSE VICENTE SORIANO OLIVEIRA"
  },
  {
    cnpj: "42.087.254/0007-24",
    razaoSocial: "BAKER HUGHES DO BRASIL LTDA",
    cep: "27925-540",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "ESTRA SAO JOSE E IMBOACICA (Setor Industrial)"
  },
  {
    cnpj: "03.868.938/0001-16",
    razaoSocial: "BRAZILIAN WELDING INDUSTRIA E COMERCIO DE MAQUINAS",
    cep: "15990-668",
    cidade: "MATAO",
    estado: "SP",
    logradouro: "R BAMBOZZI"
  },
  {
    cnpj: "02.645.244/0001-57",
    razaoSocial: "BARNATO COMERCIO DE PECAS E VEICULOS LTDA",
    cep: "28800-000",
    cidade: "RIO BONITO",
    estado: "RJ",
    logradouro: "ROD BR 101"
  },
  {
    cnpj: "08.216.192/0001-80",
    razaoSocial: "R.GOMES RODRIGUES - ME",
    cep: "28200-000",
    cidade: "SAO JOAO DA BARRA",
    estado: "RJ",
    logradouro: "RUA A CHACARA DO CAJUEIRO"
  },
  {
    cnpj: "30.833.099/0001-73",
    razaoSocial: "FERNANDES & MENDONCA LTDA",
    cep: "24431-000",
    cidade: "SAO GONCALO",
    estado: "RJ",
    logradouro: "R VISCONDE DE ITAUNA"
  },
  {
    cnpj: "09.005.239/0001-29",
    razaoSocial: "ELIANA PEREIRA DA SILVA CAPOTARIA - ME",
    cep: "27961-214",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "ROD ROD. AMARAL PEIXOTO KM 179"
  },
  {
    cnpj: "05.151.518/0001-40",
    razaoSocial: "BELENUS DO BRASIL S/A",
    cep: "13288-184",
    cidade: "VINHEDO",
    estado: "SP",
    logradouro: "RUA COMENDADOR JOAO LUCAS"
  },
  {
    cnpj: "28.326.312/0003-70",
    razaoSocial: "BEL PORTAS DISTRIBUIDORA DE PRODUTOS ELETRÔNICOS",
    cep: "27923-220",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AVENI GUADALAJARA"
  },
  {
    cnpj: "28.935.773/0001-89",
    razaoSocial: "BELTEC IMPLEMENTOS AGRICOLAS LTDA",
    cep: "28050-000",
    cidade: "CAMPOS DOS GOYTACAZES",
    estado: "RJ",
    logradouro: "RUA ROCHA LEAO"
  },
  {
    cnpj: "97.415.673/0001-44",
    razaoSocial: "BENJA DISTRIBUIDORA DE EQUIPAMENTOS E ACESSORIOS P",
    cep: "",
    cidade: "GOIANIA",
    estado: "GO",
    logradouro: "RUA JUIZ DE FORA"
  },
  {
    cnpj: "27.048.521/0001-75",
    razaoSocial: "BIAMARES OFF SHORE E HIDRAULICA EIRELI",
    cep: "24724540",
    cidade: "SAO GONCALO",
    estado: "RJ",
    logradouro: "R ITAPEVA"
  },
  {
    cnpj: "29.900.263/0001-39",
    razaoSocial: "BIC TESS INDUSTRIAL E COMERCIAL LTDA",
    cep: "27948-000",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "AV. ANTÔNIO ABREU"
  },
  {
    cnpj: "15.680.333/0026-34",
    razaoSocial: "BJ SERVICES DO BRASIL LTDA",
    cep: "27932-355",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA RUA PILOTO ROMMEL OLIVEIRA GARCIA"
  },
  {
    cnpj: "14.552.008/0001-75",
    razaoSocial: "BOG DISTRIBUIDORA LTDA",
    cep: "27923-340",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA OITO DE MARCO"
  },
  {
    cnpj: "18.074.730/0001-00",
    razaoSocial: "BOG OFFSHORE COMERCIO DE MAQUINAS E EQUIPAMENTOS",
    cep: "27930-400",
    cidade: "MACAE",
    estado: "RJ",
    logradouro: "RUA DO ACUDE"
  },
  {
    cnpj: "52.659.113/0001-05",
    razaoSocial: "BOMBA ARLA RIO PECAS E SERVICOS LTDA",
    cep: "25565330",
    cidade: "SÃO JOÃO DE MERITI",
    estado: "RJ",
    logradouro: "RUA FLORIANA 1"
  },
  {
    cnpj: "13.902.367/0001-42",
    razaoSocial: "BRACOM CAMINHOES S/A",
    cep: "",
    cidade: "CACHOEIRO DE ITAPEMIRIM",
    estado: "ES",
    logradouro: "ROD BR 101 SUL - KM 410"
  },
  {
    cnpj: "12.058.950/0001-56",
    razaoSocial: "JEAN CARLOS OENNING",
    cep: "",
    cidade: "BRACO DO NORTE",
    estado: "SC",
    logradouro: "R SAO BASILIO"
  }
];