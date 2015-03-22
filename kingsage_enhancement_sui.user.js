// ==UserScript==
// @name	Kingsage Enhancement Suite
// @version	1.3.0.3
// @author	grafilicious
// @include http://*.kingsage.*/game.php*
// @include	http://*.kingsage.*/redir.php*
// @exclude	http://support.*/*
// @grant	none
// ==/UserScript==
var br = {
  turnOn: 'Ativado',
  turnOff: 'Desativado',
  all: 'Tudo',
  none: 'Nenhum',
  name: 'Nome',
  amount: 'Quantidade',
  color: 'Cor',
  loading: 'Carregando dados',
  close: 'Clique na &aacute;rea escura para fechar',
  confirm: 'Confirmar',
  preview: 'Visualizar',
  'goto': 'Ir para',
  reset: 'Redefinir',
  fillIn: 'Preencher',
  buildOne: '1 N&iacute;vel',
  buildMax: 'N&iacute;veis',
  filter: 'Filtrar',
  beingProcessed: 'Est&aacute; sendo processado',
  resetSettings: 'Redefinir configura&ccedil;&otilde;es',
  adoptSettings: 'Suas configura&ccedil;&otilde;es n&atilde;o puderam ser salvas e foram redefinidas para o padr&atilde;o',
  enableDisableModules: 'Ativar/Desativar m&oacute;dulos',
  buildingTrebuchet: 'Alvo padr&atilde;o da catapulta',
  marketSettings: 'Configurar mercado',
  linkspy: 'Link de espionagem',
  contentTrebuchet: 'Alvo padr&atilde;o para ataques de catapulta',
  contentSpy: 'Criar link de espionagem com %s espi&otilde;es',
  marketDefault: 'Padr&atilde;o',
  player: 'Jogador',
  settlement: 'Povoa&ccedil;&atilde;o',
  attacker: 'Atacante',
  trooppoints: 'Pontos de tropas',
  allyTrooppoints: 'Calcular pontos de tropas da alian&ccedil;a',
  troops: 'Tropas',
  ignore: 'Ignorar',
  unit: 'Unidade',
  nick: 'Nome do jogador',
  ally: 'Alian&ccedil;a',
  target: 'Alvo',
  arrival: 'Hora de chegada',
  defender: 'Defensor',
  retrieve: 'Refazer tropas',
  onlyAbandoned: 'Apenas povoa&ccedil;&otilde;es abandonadas',
  entries: 'Entradas',
  noMatch: 'N&atilde;o h&aacute; povoa&ccedil;&otilde;es dispon&iacute;veis',
  abbr: 'S&iacute;mbolo',
  off: 'Ataque',
  def: 'Defesa',
  count: 'Conde',
  spy: 'Espi&atilde;o',
  stone: 'Pedra',
  wood: 'Madeira',
  iron: 'Ferro',
  arrival: 'Hora de chegada',
  nameCoords: 'Digite o nome do jogador ou as coordenadas',
  cancelAllDestroy: 'Cancelar fila de destrui&ccedil;&atilde;o',
  researchMissingTroops: 'Pesquisar tropas faltando',
  researchStarted: 'Pesquisa iniciada',
  noMissingResearch: 'Nenhuma pesquisa faltando encontrado',
  selectAll: 'Selecionar todos',
  deselectAll: 'Deselecionar todos',
  selected: 'Selecionado',
  deselect: 'Deselecionar',
  markSelection: 'Marcar sele&ccedil;&atilde;o',
  selectedGroups: 'Grupos foram selecionados',
  deleteSelection: 'Excluir sele&ccedil;&atilde;o',
  targetExport: 'Exportar alvos',
  save: 'Salvar',
  saved: 'Salvo',
  saveAttacks: 'Salvar esses ataques',
  saveThread: 'Salvar t&oacute;pico',
  resetSavedAttacks: 'Dispensar ataques salvos',
  highlighttroops: 'Real&ccedil;ar tropas',
  highlighttroopsLabel: 'Selecione tropas a serem real&ccedil;adas',
  highlighttroopsError: 'Voc&ecirc; s&oacute; pode usar a funcionalidade de "Real&ccedil;ar Tropas" depois de pesquisar no alquimista Mostrar Tropas',
  highlighttroopsActivate: 'Por favor, ative a funcionalidade "Mostrar Tropas" abaixo do mapa. Isto &eacute; necess&aacute;rio para real&ccedil;ar tropas no mapa',
  trooplinks: 'Links de tropas',
  troopFilter: 'Filtrar tropas',
  group: 'Grupo',
  setGroup: 'Definir grupo',
  switchGroup: 'Clique em "OK" para mudar para o grupo "Todos"',
  highlightgroups: 'Real&ccedil;ar grupos',
  highlightGroupslabel: 'Selecione grupos a serem real&ccedil;ados',
  highlightGroupsReplacementError: 'N&atilde;o dispon&iacute;vel quando em Aus&ecirc;ncia',
  bbCode: 'Mostrar com BB-Code',
  asBBCode: 'Com BB-Code',
  bbCode: 'Mostrar com BB-Code',
  report_as_bb_code: 'BB-Code compacto',
  enableBBCodeExport: 'Ativar exporta&ccedil;&atilde;o com BB-Code',
  exportBBCode: 'Exportar povoa&ccedil;&otilde;es com BB-Code',
  reports: 'Relat&oacute;rios',
  recipient: 'Receptor',
  forward: 'Encaminhar',
  forwardSuccess: 'Encaminhado com sucesso',
  forwardError: 'N&atilde;o h&aacute; relat&oacute;rios e/ou nome de usu&aacute;rio escolhido',
  sortContinent: 'Por continentes',
  masscoinFixActive: 'Produ&ccedil;&atilde;o em massa',
  sortCoords: 'Por coordenadas',
  sortPoints: 'Por pontos',
  sortName: 'Por nome',
  thread: 'T&oacute;pico',
  goChooseThread: 'Selecione um t&oacute;pico no f&oacute;rum da alian&ccedil;a',
  summary: 'Sum&aacute;rio',
  postIn: 'Este ser&aacute; postado em',
  amountOfSetts: 'Quantidade de povoa&ccedil;&otilde;es selecionadas',
  postsToBeCreated: '%s mensagens ser&atilde;o criadas',
  chooseThreadFirst: 'Voc&ecirc; tem que selecionar um t&oacute;pico no f&oacute;rum da alian&ccedil;a primeiro',
  formatting: 'Escolha a formata&ccedil;&atilde;o',
  header: 'Cabe&ccedil;alho',
  settlementDisplay: 'Apresenta&ccedil;&atilde;o da povoa&ccedil;&atilde;o',
  footer: 'Rodap&eacute;',
  goToBarracks: 'Ir para Quartel',
  goToMain: 'Ir para Castelo ',
  attackWithSpies: 'Enviar %s espi&otilde;es',
  attack: 'Ataque',
  attacks: 'Ataques',
  moreAttacks: 'Mais ataques',
  nextAttacks: 'Pr&oacute;ximos %s ataques',
  noMatch: 'N&atilde;o h&aacute; povoa&ccedil;&otilde;es dispon&iacute;veis',
  runtimecalc: 'Impacto em',
  loadAllAttacks: 'Carregar todos os ataques',
  loadingFinished: 'Carregamento conclu&iacute;do',
  toa: 'Tempo de execu&ccedil;&atilde;o',
  days: 'Dias',
  hours: 'Horas',
  minutes: 'Minutos',
  seconds: 'Segundos',
  withoutRuntime: 'Sem tempo de execu&ccedil;&atilde;o',
  modul: {
    marketOptions: 'Configurar mercado',
    troopsOnMap: 'Real&ccedil;ar tropas no mapa',
    showAttacksOnMap: 'Salvar ataques/Mostrar ataques no mapa',
    insertIntoRuntimeCalc: 'Inserir ataques na calculadora de tempo',
    highlightgroups: 'Real&ccedil;ar grupos',
    massdisband: 'Personalizar liberta&ccedil;&atilde;o em massa',
    simulator: 'Personalizar simulador',
    filterOverview: 'Filtrar tropas por tempo de chegada',
    bbCodeExport: 'Exportar povoa&ccedil;&otilde;es com BB-Code',
    massforward: 'Encaminhar relat&oacute;rios e mensagens em massa',
    trooplinks: 'Links de tropas no quartel',
    targetExport: 'Exportar alvos do mapa',
    massbuild: 'Construir em massa no castelo',
    setGroupsOnMap: 'Definir grupos no mapa',
    sortOwnAttacks: 'Ordenar pr&oacute;prios ataques'
  },
  units: {
    militia: 'Mil&iacute;cia do fazendeiro',
    sword: 'Templ&aacute;rio',
    spear: 'Escudeiro',
    axe: 'Guerreiro',
    bow: 'Arqueiro',
    spy: 'Espi&atilde;o',
    light: 'Cruzado',
    heavy: 'Cavaleiro negro',
    ram: 'Ar&iacute;ete',
    kata: 'Catapulta',
    snob: 'Conde'
  },
  buildings: {
    main: 'Castelo',
    stone: 'Pedreira',
    wood: 'Serraria',
    iron: 'Mina de Ferro',
    storage: 'Armaz&eacute;m',
    hide: 'Esconderijo',
    farm: 'Moinho',
    barracks: 'Quartel',
    wall: 'Muralha',
    stable: 'Est&aacute;bulo',
    market: 'Mercado',
    garage: 'Alquimista',
    snob: 'Mans&atilde;o',
    smith: 'Joalheiro',
    statue: 'Memorial'
  }
};
var de = {
  turnOn: 'An',
  turnOff: 'Aus',
  all: 'Alle',
  none: 'Keine',
  name: 'Name',
  amount: 'Anzahl',
  color: 'Farbe',
  loading: 'Daten werden geladen',
  close: 'Zum Schliessen auf den abgedunkelten Bereich klicken',
  confirm: 'Bestätigen',
  preview: 'Vorschau',
  'goto': 'Gehe zu',
  reset: 'Löschen',
  fillIn: 'Ausfüllen',
  buildOne: '1 Stufe',
  buildMax: 'Stufe(n)',
  filter: 'Filtern',
  beingProcessed: 'wird ausgeführt',
  resetSettings: 'Einstellungen zurücksetzen',
  adoptSettings: 'Deine Einstellungen konnten nicht übernommen werden und wurden zurückgesetzt.',
  enableDisableModules: 'Module ein-/auschalten',
  buildingTrebuchet: 'Standardgebäude Tribok',
  marketSettings: 'Markteinstellungen',
  linkspy: 'Direktlink Kundschafter',
  contentTrebuchet: 'Standardgebäude für Tribok-Angriffe',
  contentSpy: 'Direktlink mit %s Kundschaftern erzeugen',
  marketDefault: 'Standardoption',
  player: 'Spieler',
  settlement: 'Siedlung',
  attacker: 'Angreifer',
  trooppoints: 'Truppenpunkte',
  allyTrooppoints: 'Truppenpunkte der Allianz berechnen',
  troops: 'Truppen',
  ignore: 'Ignorieren',
  unit: 'Einheit',
  nick: 'Nickname',
  ally: 'Allianz',
  target: 'Ziel',
  arrival: 'Ankunft',
  defender: 'Verteidiger',
  retrieve: 'Zurückrufen',
  onlyAbandoned: 'Nur Verlassene Siedlungen',
  entries: 'Einträge',
  noMatch: 'Keine Siedlungen gefunden',
  abbr: 'Symbol',
  off: 'Offensiveinheit',
  def: 'Defensiveinheit',
  count: 'Graf',
  spy: 'Kundschafter',
  stone: 'Stein',
  wood: 'Holz',
  iron: 'Erz',
  arrival: 'Ankunftszeit',
  nameCoords: 'Spielername -koordinaten eingeben',
  cancelAllDestroy: 'Alle Abbruch-Aufträge abbrechen',
  researchMissingTroops: 'Fehlende Truppen erforschen',
  researchStarted: 'Forschungen in Auftrag gegeben',
  noMissingResearch: 'Keine fehlenden Forschungen gefunden',
  selectAll: 'Alle auswählen',
  deselectAll: 'Alle abwählen',
  selected: 'ausgewählt',
  deselect: 'abwählen',
  markSelection: 'Auswahl markieren',
  selectedGroups: 'Gruppen ausgewählt',
  deleteSelection: 'Auswahl löschen',
  targetExport: 'Target Export',
  save: 'Abspeichern',
  saved: 'gespeichert',
  saveAttacks: 'Diese Angriffe speichern',
  saveThread: 'Thread speichern',
  resetSavedAttacks: 'Gespeicherte Angriffe verwerfen',
  highlighttroops: 'Truppen hervorheben',
  highlighttroopsLabel: 'Truppen zum Hervorheben auswählen',
  highlighttroopsError: 'Du kannst die "Truppen hervorheben"-Funktion nur verwenden wenn diese im Alchemisten erforscht wurde.',
  highlighttroopsActivate: 'Bitte aktiviere unterhalb der Karte in den Einstellungen den Punkt "Truppen anzeigen". Dies ist nötig um Truppen auf der Karte anzeigen lassen zu können.',
  trooplinks: 'Truppenlinks',
  troopFilter: 'Truppenfilter',
  group: 'Gruppe',
  setGroup: 'Setze Gruppe',
  switchGroup: 'Die ausgewählte Gruppe muss "Alle" sein, bestätige mit OK um die Gruppe zu wechseln',
  highlightgroups: 'Gruppen hervorheben',
  highlightGroupslabel: 'Gruppen zum Hervorheben auswählen',
  highlightGroupsReplacementError: 'In Abwesenheitsvertretung nicht verfügbar',
  bbCode: 'BB-Code',
  asBBCode: 'Als BB-Code',
  bbCode: 'Als BB-Code anzeigen',
  report_as_bb_code: 'kurzer BB-Code',
  enableBBCodeExport: 'BB-Code Export einschalten',
  exportBBCode: 'Siedlungen als BB-Code exportieren',
  reports: 'Berichte',
  recipient: 'Empfänger',
  forward: 'Weiterleiten',
  forwardSuccess: 'Berichte erfolgreich weitergeleitet',
  forwardError: 'Keine Berichte und/oder Usernamen ausgewählt',
  sortContinent: 'Nach Kontinent',
  sortCoords: 'Nach Koordinaten',
  sortPoints: 'Nach Punkten',
  sortName: 'Nach Name',
  thread: 'Thread',
  goChooseThread: 'Gehe ins Forum und wähle einen Thread aus',
  summary: 'Zusammenfassung der Auswahl',
  postIn: 'Gepostet wird in',
  amountOfSetts: 'Anzahl der Ausgewählten Siedlungen',
  postsToBeCreated: 'Es werden %s Post(s) angelegt',
  chooseThreadFirst: 'Du musst zuerst im Allianzforum einen Thread auswählen',
  formatting: 'Gewünschte Formatierung',
  header: 'Kopfzeile',
  settlementDisplay: 'Siedlungsdarstellung',
  footer: 'Fußzeile',
  goToBarracks: 'Zur Kaserne',
  goToMain: 'Zur Burg',
  attackWithSpies: 'Mit %s Kundschaftern angreifen',
  attack: 'Angriff',
  attacks: 'Angriffe',
  moreAttacks: 'Weitere Angriffe',
  nextAttacks: 'Die nächsten %s Angriffe',
  noMatch: 'keine passenden Siedlungen vorhanden',
  runtimecalc: 'Einschlag in',
  loadAllAttacks: 'Alle Angriffe laden',
  loadingFinished: 'Fertig geladen',
  toa: 'Laufzeit',
  days: 'Tage',
  hours: 'Stunden',
  minutes: 'Minuten',
  seconds: 'Sekunden',
  withoutRuntime: 'Ohne Laufzeit',
  modul: {
    marketOptions: 'Eigene Einstellung Markt',
    troopsOnMap: 'Truppen hervorheben',
    showAttacksOnMap: 'Angriffe speichern/Auf Karte hervorheben',
    insertIntoRuntimeCalc: 'Angriffe in Laufzeitrechner einfügen',
    highlightgroups: 'Gruppen hervorheben',
    massdisband: 'Angepasste Massenentlassung',
    simulator: 'Angepasster Simulator',
    filterOverview: 'Truppenfilter mit Ankunftszeit für Übersicht>Kombiniert',
    bbCodeExport: 'Siedlungslisten als BB-Code exportieren',
    massforward: 'Massenweiterleiten von Berichten',
    trooplinks: 'Truppenlinks in der Kaserne',
    targetExport: 'Ziel aus Kartenauschnitt auswählen',
    massbuild: 'Mehrfachbau in der Burg',
    setGroupsOnMap: 'Gruppen via Karte setzen',
    sortOwnAttacks: 'Eigene Angriffe sortieren'
  },
  units: {
    militia: 'Bauernmiliz',
    sword: 'Templer',
    spear: 'Knappe',
    axe: 'Berserker',
    bow: 'Langbogen',
    spy: 'Kundschafter',
    light: 'Kreuzritter',
    heavy: 'Schwarzer Ritter',
    ram: 'Sturmbock',
    kata: 'Tribok',
    snob: 'Graf'
  },
  buildings: {
    main: 'Burg',
    stone: 'Steinbruch',
    wood: 'Sägewerk',
    iron: 'Erzbergwerk',
    storage: 'Lagerhaus',
    hide: 'Versteck',
    farm: 'Müller',
    barracks: 'Kaserne',
    wall: 'Stadtmauer',
    stable: 'Eselzucht',
    market: 'Markt',
    garage: 'Alchemist',
    snob: 'Residenz',
    smith: 'Goldschmiede',
    statue: 'Denkmal'
  }
};
var en = {
  turnOn: 'On',
  turnOff: 'Off',
  all: 'All',
  none: 'None',
  name: 'Name',
  amount: 'Amount',
  color: 'Color',
  loading: 'Loading data',
  close: 'Click on darkened area to close',
  confirm: 'Confirm',
  preview: 'Preview',
  'goto': 'Go to',
  reset: 'Reset',
  fillIn: 'Fill in',
  buildOne: '1 Level',
  buildMax: 'Levels',
  filter: 'Filter',
  beingProcessed: 'is being processed',
  resetSettings: 'Reset settings',
  adoptSettings: 'Your settings could not be saved and have reset to default',
  enableDisableModules: 'En/disable modules',
  buildingTrebuchet: 'Default target trebuchet',
  marketSettings: 'Marketsettings',
  linkspy: 'Link spyattack',
  contentTrebuchet: 'Default target for trebuchet attacks',
  contentSpy: 'Create Link for spyattack with %s spies',
  marketDefault: 'Default',
  player: 'Player',
  settlement: 'Settlement',
  attacker: 'Attacker',
  trooppoints: 'Trooppoints',
  allyTrooppoints: 'Calculate trooppoints of alliance',
  troops: 'Troops',
  ignore: 'Ignore',
  unit: 'Unit',
  nick: 'Nickname',
  ally: 'Alliance',
  target: 'Target',
  arrival: 'Arrival',
  defender: 'Defender',
  retrieve: 'Retrieve troops',
  onlyAbandoned: 'Only abandoned settlements',
  entries: 'Entries',
  noMatch: 'No match found',
  abbr: 'Symbol',
  off: 'Offense',
  def: 'Defense',
  count: 'Count',
  spy: 'Spy',
  stone: 'Stone',
  wood: 'Wood',
  iron: 'Ore',
  arrival: 'Time of Arrival',
  nameCoords: 'Enter playername or coordinates',
  cancelAllDestroy: 'Cancel tear down queue',
  researchMissingTroops: 'Research missing troops',
  researchStarted: 'Research has been started',
  noMissingResearch: 'No missing research found',
  selectAll: 'Select all',
  deselectAll: 'Deselect all',
  selected: 'selected',
  deselect: 'deselect',
  markSelection: 'Mark selection',
  selectedGroups: 'Groups have been selected',
  deleteSelection: 'Delete selection',
  targetExport: 'Export targets',
  save: 'Save',
  saved: 'Saved',
  saveAttacks: 'Save these attacks',
  saveThread: 'Save thread',
  resetSavedAttacks: 'Dismiss saved attacks',
  highlighttroops: 'Highlight troops',
  highlighttroopsLabel: 'Select troops to be highlighted',
  highlighttroopsError: 'You can only use the "highlight troops" functionality after it has been researched with the alchemist.',
  highlighttroopsActivate: 'Please activate the "Show troops" functionality below the map. This is required to highlight troops on the map',
  trooplinks: 'Troop quicklinks',
  troopFilter: 'Filter troops',
  group: 'Group',
  setGroup: 'Set group',
  switchGroup: 'Click "OK" to switch to group "All"',
  highlightgroups: 'Highlight groups',
  highlightGroupslabel: 'Select groups to be highlighted',
  highlightGroupsReplacementError: 'Not available when in holiday replacement',
  bbCode: 'BB-Code',
  asBBCode: 'As BB-Code',
  bbCode: 'Show as BB-Code',
  report_as_bb_code: 'Short BB-Code',
  enableBBCodeExport: 'Enable BB-Code export',
  exportBBCode: 'Export settlements as BB-Code',
  reports: 'Reports',
  recipient: 'Recipient',
  forward: 'Forward',
  forwardSuccess: 'Forwarding successful',
  forwardError: 'No reports and/or username chosen',
  sortContinent: 'By continent',
  sortCoords: 'By coordinates',
  sortPoints: 'By points',
  sortName: 'By name',
  thread: 'Thread',
  goChooseThread: 'Select a thread on the alliance board',
  summary: 'Summary',
  postIn: 'This will be posted in',
  amountOfSetts: 'Amount of selected settlements',
  postsToBeCreated: '%s posts will be created',
  chooseThreadFirst: 'You have to select a thread on the alliance board first',
  formatting: 'Choose formatting',
  header: 'Headline',
  settlementDisplay: 'Settlementpresentation',
  footer: 'footer',
  goToBarracks: 'Go to barracks',
  goToMain: 'Go to castle',
  attackWithSpies: 'Attack with %s spies',
  attack: 'Attack',
  attacks: 'Attacks',
  moreAttacks: 'More attacks',
  nextAttacks: 'Next %s attacks',
  noMatch: 'No matching settlements available',
  runtimecalc: 'Impact in',
  loadAllAttacks: 'Load all attacks',
  loadingFinished: 'Loading finished',
  toa: 'Runtime',
  days: 'Days',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds',
  withoutRuntime: 'Without runtime',
  modul: {
    marketOptions: 'Marketsettings',
    troopsOnMap: 'Highlight troops on map',
    showAttacksOnMap: 'Save attacks/show attacks on map',
    insertIntoRuntimeCalc: 'Insert attacks into runtimecalculator',
    highlightgroups: 'Highlight groups',
    massdisband: 'Customize mass discharge',
    simulator: 'Customize simulator',
    filterOverview: 'Filter troops by time of arrival',
    bbCodeExport: 'Export settlements as bb-code',
    massforward: 'Massforward reports and messages',
    trooplinks: 'Troop quicklinks in barracks',
    targetExport: 'Export targets from map',
    massbuild: 'Massbuild in castle',
    setGroupsOnMap: 'Set groups via map',
    sortOwnAttacks: 'Sort own attacks'
  },
  units: {
    militia: 'Farmer\'s militia',
    sword: 'Templar',
    spear: 'Squire',
    axe: 'Berserker',
    bow: 'Long-bow',
    spy: 'Spy',
    light: 'Crusader',
    heavy: 'Black knight',
    ram: 'Battering ram',
    kata: 'Trebuchet',
    snob: 'Count'
  },
  buildings: {
    main: 'Castle',
    stone: 'Quarry',
    wood: 'Sawmill',
    iron: 'Ore Mine',
    storage: 'Warehouse',
    hide: 'Hideout',
    farm: 'Miller',
    barracks: 'Barracks',
    wall: 'Town Wall',
    stable: 'Donkey Stable',
    market: 'Market',
    garage: 'Alchemist',
    snob: 'Residence',
    smith: 'Goldsmith',
    statue: 'Memorial'
  }
};
var fr = {
  turnOn: 'Actif',
  turnOff: 'Inactif',
  all: 'Tout',
  none: 'Rien',
  name: 'Nom',
  amount: 'Quantité',
  color: 'Couleur',
  loading: 'Chargement des données',
  close: 'Cliquer sur la zone sombre pour fermer',
  confirm: 'Confirmer',
  preview: 'Aperçu',
  'goto': 'Aller à',
  reset: 'Reinitialiser',
  fillIn: 'Remplir',
  buildOne: '1 niveau',
  buildMax: 'Niveaux',
  filter: 'Filtre',
  beingProcessed: 'est en cours de traitement',
  resetSettings: 'Reinitialiser les paramètres',
  adoptSettings: 'Vos paramètres n\'ont pas pu être sauvegardé et ont été remis à zéro',
  enableDisableModules: 'Activer/désactiver les modules',
  buildingTrebuchet: 'Cible par défaut des trébuchets',
  marketSettings: 'Options du marché',
  linkspy: 'Lien pour espionnage',
  contentTrebuchet: 'Cible par défaut des trébuchets',
  contentSpy: 'Créer un lien pour espionner avec %s éclaireurs',
  marketDefault: 'Par défaut',
  player: 'Joueur',
  settlement: 'Village',
  attacker: 'Attaquant',
  trooppoints: 'Points troupes',
  allyTrooppoints: 'Calculer les points troupes de l\'alliance',
  troops: 'Troupes',
  ignore: 'Ignorer',
  unit: 'Unité',
  nick: 'Pseudo',
  ally: 'Alliance',
  target: 'Cible',
  arrival: 'Arrivée',
  defender: 'Défenseur',
  retrieve: 'Récupérer troupes',
  onlyAbandoned: 'Uniquement les villages abandonnés',
  entries: 'Entrées',
  noMatch: 'Aucune correspondance trouvée',
  abbr: 'Symbole',
  off: 'Offensif',
  def: 'Défensif',
  count: 'Comte',
  spy: 'Eclaireur',
  stone: 'Pierre',
  wood: 'Bois',
  iron: 'Minerai',
  arrival: 'Heure d\'arrivée',
  nameCoords: 'Entrez un pseudo ou des coordonnées',
  cancelAllDestroy: 'Annuler la liste de démolition de bâtiments',
  researchMissingTroops: 'Lancer les recherches manquantes',
  researchStarted: 'La recherche a été lancée',
  noMissingResearch: 'Aucune recherche manquante a été trouvée',
  selectAll: 'Sélectionner tout',
  deselectAll: 'Tout désélectionner',
  selected: 'sélectionné',
  deselect: 'deselectionné',
  markSelection: 'Baliser la sélection',
  selectedGroups: 'Les groupes ont été sélectionnés',
  deleteSelection: 'Supprimer la sélection',
  targetExport: 'Exporter les cibles',
  save: 'Enregistrer',
  saved: 'Enregistré',
  saveAttacks: 'Enregistrer ces attaques',
  saveThread: 'Enregistrer le sujet',
  resetSavedAttacks: 'Supprimer les attaques enregistrées',
  highlighttroops: 'Marquer des troupes',
  highlighttroopsLabel: 'Sélectionner les troupes à marquer',
  highlighttroopsError: 'Vous ne pouvez utiliser la fonction de marquage des troupes seulement après l\'avoir recherché dans le laboratoire',
  highlighttroopsActivate: 'Activer l\'option "Afficher les troupes" dans les paramètres de la carte. Ceci est nécessaire pour marquer les troupes sur la carte',
  trooplinks: 'Raccourcis d\'ordre',
  troopFilter: 'Filtrer les troupes',
  group: 'Groupe',
  setGroup: 'Créer groupe',
  switchGroup: 'Cliquer sur "OK" pour passer au groupe "Tous"',
  highlightgroups: 'Marquer des groupes',
  highlightGroupslabel: 'Selectionner les groupes à marquer',
  highlightGroupsReplacementError: 'Non disponible lors du sitting',
  bbCode: 'BB-Code',
  asBBCode: 'En BB-Code',
  bbCode: 'Afficher en BB-Code',
  report_as_bb_code: 'Version courte en BB-Code',
  enableBBCodeExport: 'Activer l\'exportation en BB-Code ',
  exportBBCode: 'Exporter les villages en BB-Code',
  reports: 'Rapports',
  recipient: 'Destinataire',
  forward: 'Transférer',
  forwardSuccess: 'Transfert réussi',
  forwardError: 'Pas de rapports et/ou nom d utilisateur choisis',
  sortContinent: 'Par continent',
  sortCoords: 'Par coordonnées',
  sortPoints: 'Par points',
  sortName: 'Par pseudo',
  thread: 'Sujet',
  goChooseThread: 'Sélectionner un sujet sur le forum de l\'alliance',
  summary: 'Résumé',
  postIn: 'Ce sera posté dans',
  amountOfSetts: 'Nombre de villages sélectionnés',
  postsToBeCreated: '%s sujets vont être créés',
  chooseThreadFirst: 'Vous devez sélectionner un sujet sur le forum de l\'alliance d\'abord',
  formatting: 'Choisir la formation',
  header: 'Titre',
  settlementDisplay: 'Présentation du village',
  footer: 'bas de page',
  goToBarracks: 'Aller à la caserne',
  goToMain: 'Aller au château',
  attackWithSpies: 'Attaquer avec %s éclaireurs',
  attack: 'Attaque',
  attacks: 'Attaques',
  moreAttacks: 'Plus d\'attaques',
  nextAttacks: '%s prochaines attaques',
  noMatch: 'Pas de village correspondant disponible',
  runtimecalc: 'Impact dans',
  loadAllAttacks: 'Charger toutes les attaques',
  loadingFinished: 'Chargement terminé',
  toa: 'Temps de trajet',
  days: 'Jours',
  hours: 'Heures',
  minutes: 'Minutes',
  seconds: 'Secondes',
  withoutRuntime: 'Sans temps de trajet',
  modul: {
    marketOptions: 'Options du marché',
    troopsOnMap: 'Marquage des troupes sur la carte',
    showAttacksOnMap: 'Sauvegarder attaque/afficher les attaques sur la carte',
    insertIntoRuntimeCalc: 'Insérer les attaques dans le calculateur de temps de trajet',
    highlightgroups: 'Marquage des groupes',
    massdisband: 'Démobilisation massive améliorée',
    simulator: 'Simulateur amélioré',
    filterOverview: 'Filtrer les troupes par heures d\'arrivée',
    bbCodeExport: 'Exporter les villages en BB-code',
    massforward: 'Transfère en masse des messages et rapports',
    trooplinks: 'Raccourcis d\'ordre dans la caserne',
    targetExport: 'Exporter les cibles depuis la carte',
    massbuild: 'Construction en masse',
    setGroupsOnMap: 'Créer les groupes à partir de la carte',
    sortOwnAttacks: 'Trier vos propres attaques'
  },
  units: {
    militia: 'Milice de paysans',
    sword: 'Templier',
    spear: 'Ecuyer',
    axe: 'Sauvage',
    bow: 'Grand arc',
    spy: 'Eclaireur',
    light: 'Croisé',
    heavy: 'Chevalier noir',
    ram: 'Bélier',
    kata: 'Trébuchet',
    snob: 'Comte'
  },
  buildings: {
    main: 'Château',
    stone: 'Carrière',
    wood: 'Scierie',
    iron: 'Mine de minerai',
    storage: 'Entrepôt',
    hide: 'Cachette',
    farm: 'Moulin',
    barracks: 'Caserne',
    wall: 'Rempart',
    stable: 'Élevage d\'ânes',
    market: 'Marché',
    garage: 'Laboratoire',
    snob: 'Résidence',
    smith: 'Orfèvrerie',
    statue: 'Mémorial'
  }
};
var nl = {
  turnOn: 'Aan',
  turnOff: 'Uit',
  all: 'Alle',
  none: 'Geen',
  name: 'Naam',
  amount: 'Hoeveelheid',
  color: 'Kleur',
  loading: 'Gegevens laden',
  close: 'Klik op donker vlak om te sluiten',
  confirm: 'Bevestigen',
  preview: 'Voorbeeld',
  'goto': 'Ga naar',
  reset: 'Reset',
  fillIn: 'Invullen',
  buildOne: '1 niveau',
  buildMax: 'niveau\'s',
  filter: 'Filter',
  beingProcessed: 'Wordt verwerkt',
  resetSettings: 'Herstel instellingen',
  adoptSettings: 'Je instellingen zijn niet opgeslagen en zijn herstelt naar de beginwaardes',
  enableDisableModules: 'Aan/uitzetten modules',
  buildingTrebuchet: 'Standaard doel trebuchet',
  marketSettings: 'Marktplaats instellingen',
  linkspy: 'Link spion aanval',
  contentTrebuchet: 'Standaard doel voor trebuchet aanvallen',
  contentSpy: 'Creëer link voor spion aanval met %s spionnen ',
  marketDefault: 'Standaard',
  player: 'Speler',
  settlement: 'Nederzetting',
  attacker: 'Aanvaller',
  trooppoints: 'Troepen punten',
  allyTrooppoints: 'Bereken troep punten van alliantie',
  troops: 'Troepen',
  ignore: 'Negeren',
  unit: 'Eenheid',
  nick: 'Spelersnaam',
  ally: 'Alliantie',
  target: 'Doel',
  arrival: 'Aankomsttijd',
  defender: 'Verdediger',
  retrieve: 'Troepen terug trekken',
  onlyAbandoned: 'Alleen verlaten nederzettingen',
  entries: 'Entries',
  noMatch: 'Geen nederzettingen gevonden',
  abbr: 'Symbool',
  off: 'Aanval',
  def: 'Verdediging',
  count: 'Tellen',
  spy: 'Spioneer',
  stone: 'Steen',
  wood: 'Hout',
  iron: 'Erts',
  arrival: 'Aankomsttijd',
  nameCoords: 'Vul spelersnaam of coördinaten in',
  cancelAllDestroy: 'Verwijder sloop wachtrij',
  researchMissingTroops: 'Onderzoek missende troepen',
  researchStarted: 'Onderzoek is gestart',
  noMissingResearch: 'Geen missende troepen gevonden',
  selectAll: 'Selecteer alles',
  deselectAll: 'Alles deselecteren',
  selected: 'Geselecteerde',
  deselect: 'deselecteren',
  markSelection: 'Markeer selectie',
  selectedGroups: 'Groepen zijn geselecteerd',
  deleteSelection: 'Verwijder selectie',
  targetExport: 'Exporteer doelen',
  save: 'Opslaan',
  saved: 'Opgeslagen',
  saveAttacks: 'Sla deze aanvallen op',
  saveThread: 'Thread opslaan',
  resetSavedAttacks: 'Ontslaan opgeslagen aanvallen',
  highlighttroops: 'Markeer troepen',
  highlighttroopsLabel: 'Selecteer de troepen die gemarkeerd moeten worden',
  highlighttroopsError: 'Je kunt alleen de "markeer troepen" functionaliteit gebruiken nadat het is onderzocht met de alchemist.',
  highlighttroopsActivate: 'Activeer de "Toon troepen" functionaliteit onder de kaart. Dit is nodig om troepen te markeren op de kaart',
  trooplinks: 'Snelle links voor troepen',
  troopFilter: 'Filter troepen',
  group: 'Groep',
  setGroup: 'Bevestig groep',
  switchGroup: 'Klik "OK" om naar de groep "Alle" te wisselen',
  highlightgroups: 'Markeer groepen',
  highlightGroupslabel: 'Selecteer groepen om te markeren',
  highlightGroupsReplacementError: 'Niet beschikbaar als vakantie vervanging aanstaat',
  bbCode: 'Laat als BB-Code zien',
  asBBCode: 'Als BB-Code',
  bbCode: 'Laat als BB-Code zien',
  report_as_bb_code: 'Korte BB-Code',
  enableBBCodeExport: 'BB-Code exporteren aanzetten',
  exportBBCode: 'Exporteer nederzettingen als BB-Code',
  reports: 'Rapporten',
  recipient: 'Ontvanger',
  forward: 'Doorsturen',
  forwardSuccess: 'Doorsturen succesvol',
  forwardError: 'Geen rapport of spelersnaam gekozen',
  sortContinent: 'Op continent',
  sortCoords: 'Op Coördinaten',
  sortPoints: 'Op punten',
  sortName: 'Op naam',
  thread: 'Thread',
  goChooseThread: 'Selecteer een thread op het alliantie forum',
  summary: 'Overzicht',
  postIn: 'Dit wordt geplaatst in',
  amountOfSetts: 'Hoeveelheid selecteerde nederzettingen',
  postsToBeCreated: '%s posts die gecreëerd worden ',
  chooseThreadFirst: 'Je moet eerst een thread op het alliantie forum selecteren',
  formatting: 'Kies format',
  header: 'Kop',
  settlementDisplay: 'Nederzetting aanzicht',
  footer: 'Voet',
  goToBarracks: 'Ga naar Barakken',
  goToMain: 'Ga naar Kasteel',
  attackWithSpies: 'Val aan met %s spionnen',
  attack: 'Aanval',
  attacks: 'Aanvallen',
  moreAttacks: 'Meer aanvallen',
  nextAttacks: 'Volgende %s van de aanvallen',
  noMatch: 'Geen nederzettingen gevonden',
  runtimecalc: 'Aankomst in',
  loadAllAttacks: 'Laad alle aanvallen',
  loadingFinished: 'Laden voltooid',
  toa: 'Looptijd',
  days: 'Dagen',
  hours: 'Uren',
  minutes: 'Minuten',
  seconds: 'Seconden',
  withoutRuntime: 'Zonder looptijd',
  modul: {
    marketOptions: 'Markt instellingen',
    troopsOnMap: 'Markeer troepen op de map',
    showAttacksOnMap: 'Sla aanvallen op/laat aanvallen op map zien',
    insertIntoRuntimeCalc: 'Voeg troepen toe aan looptijd calculator',
    highlightgroups: 'Markeer groepen',
    massdisband: 'Pas collectief ontslag aan',
    simulator: 'Pas simulator aan',
    filterOverview: 'Filter troepen op aankomst tijd',
    bbCodeExport: 'Exporteer nederzettingen als bb-code',
    massforward: 'Massaal doorsturen van rapporten en berichten',
    trooplinks: 'Snelle link troepen in barakken',
    targetExport: 'Exporteer doelen van map',
    massbuild: 'Massaal bouwen in kasteel',
    setGroupsOnMap: 'Plaats groepen op de map',
    sortOwnAttacks: 'Sorteer eigen aanvallen'
  },
  units: {
    militia: 'Militie',
    sword: 'Tempelier',
    spear: 'Knecht',
    axe: 'Berserker',
    bow: 'Boogschutter',
    spy: 'Spion',
    light: 'Kruisvaarder',
    heavy: 'Zwarte Ridder',
    ram: 'Stormram',
    kata: 'Trebuchet',
    snob: 'Graaf'
  },
  buildings: {
    main: 'Kasteel',
    stone: 'Groeve',
    wood: 'Zagerij',
    iron: 'Ertsmijn',
    storage: 'Opslagplaats',
    hide: 'Schuilplaats',
    farm: 'Molenaar',
    barracks: 'Barakken ',
    wall: 'Stadsmuur',
    stable: 'Ezelstal',
    market: 'Markt',
    garage: 'Alchemist',
    snob: 'Woning',
    smith: 'Goudsmid',
    statue: 'Monument'
  }
};
var pl = {
  turnOn: 'Załącz',
  turnOff: 'Wyłącz',
  all: 'Wszystko',
  none: 'Brak',
  name: 'Nazwa',
  amount: 'Ilość',
  color: 'Kolor',
  loading: 'Wczytaj',
  close: 'Zamknij',
  confirm: 'Potwierdź',
  preview: 'Podgląd',
  'goto': 'Idź do',
  reset: 'Reset',
  fillIn: 'Wypełnic',
  buildOne: '1 Poziom',
  buildMax: 'Poziom',
  filter: 'Filtr',
  beingProcessed: 'Proces trwa',
  resetSettings: 'Reset ustawień',
  adoptSettings: 'Twoje ustawienia nie mogą być zapisane i pozostają ustawienia domyślne',
  enableDisableModules: 'Załącz/Wyłącz ustawienie',
  buildingTrebuchet: 'Domyślny cel katapult',
  marketSettings: 'Rynek wymiana',
  linkspy: 'Szpiegowanie',
  contentTrebuchet: 'Domyślny cel ataków katapult',
  contentSpy: 'Wyślij szpiegowanie z %s szpiegów',
  marketDefault: 'Domyślny',
  player: 'Gracz',
  settlement: 'Osada',
  attacker: 'Napastnik',
  trooppoints: 'Wojsko w procentach',
  allyTrooppoints: 'Oblicz punkty wojska w sojuszu',
  troops: 'Wojsko',
  ignore: 'Ignoruj',
  unit: 'Jednostka',
  nick: 'Gracz',
  ally: 'Sojusz',
  target: 'Cel',
  arrival: 'Arrival',
  defender: 'Obrońca',
  retrieve: 'Retrieve troops',
  onlyAbandoned: 'Tylko opuszczone osady',
  entries: 'Wpisy',
  noMatch: 'Nie znaleziono',
  abbr: 'Symbol',
  off: 'Atak',
  def: 'Obrona',
  count: 'Hrabia',
  spy: 'Szpieg',
  stone: 'Kamień',
  wood: 'Drewno',
  iron: 'Ruda',
  arrival: 'Czas dotarcia',
  nameCoords: 'Wpisz nick lub koordynaty',
  cancelAllDestroy: 'Anuluj, cofnij kolejkę',
  researchMissingTroops: 'Brakujące badania oddziałów',
  researchStarted: 'Badania w toku',
  noMissingResearch: 'Wszystkie oddziały zostały zbadane',
  selectAll: 'Wprowadź wszystkie',
  deselectAll: 'Odznacz wszystkie',
  selected: 'Zaznacz',
  deselect: 'Odznacz',
  markSelection: 'Zaznacz selekcje',
  selectedGroups: 'Grupy zostały wybrane',
  deleteSelection: 'Skasuj selektcje',
  targetExport: 'Exportuj',
  save: 'Zapisz',
  saved: 'Zapisane',
  saveAttacks: 'Zapisz te ataki',
  saveThread: 'Zapisz w tym wątku',
  resetSavedAttacks: 'Odrzuć zapisane ataki',
  highlighttroops: 'Zaznacz wojsko',
  highlighttroopsLabel: 'Wybierz zaznaczone oddziały',
  highlighttroopsError: 'Aby używać tego polecenia musisz mieć zbadane przez alchemika.',
  highlighttroopsActivate: 'Zaznacz opcję "Pokaż wojsko" w ustawieniach mapy. Jest to wymagane, aby zobaczyc rodzaj żołnierzy w osadzie',
  trooplinks: 'Wpisz wojsko ',
  troopFilter: 'Filtr wojska',
  group: 'Grupy',
  setGroup: 'Ustaw grupę',
  switchGroup: 'Kliknij "OK", aby przejść do "All"',
  highlightgroups: 'Zaznaczone grupy',
  highlightGroupslabel: 'Wybierz grupy, aby zaznaczyć',
  highlightGroupsReplacementError: 'Niedostępne brak wojska',
  bbCode: 'BB-Code',
  asBBCode: 'Według BB-Code',
  bbCode: 'Pokaż w BB-Code',
  report_as_bb_code: 'Krótki BB-Code',
  enableBBCodeExport: 'Otwóż wyświetlanie w BB-Code',
  exportBBCode: 'Pokaż osady w BB-Code',
  reports: 'Raport',
  recipient: 'Rozmówca',
  forward: 'Przekaż',
  forwardSuccess: 'Forwarding successful',
  forwardError: 'Brak raportów i / lub nazwy wybranego rozmówcy',
  sortContinent: 'Kontynentów',
  sortCoords: 'Współrzędnych',
  sortPoints: 'Punktów',
  sortName: 'Nazwy',
  thread: 'Wątek',
  goChooseThread: 'Przejdź na forum i wybierz wątek',
  summary: 'Summary',
  postIn: 'zostanie opublikowane w',
  amountOfSetts: 'Ilość wybranych wiosek',
  postsToBeCreated: '%s wiadomości zostanie wysłanych',
  chooseThreadFirst: 'Najpierw musisz wybrać wątek na forum sojuszu',
  formatting: 'Choose formatting',
  header: 'Nagłówek',
  settlementDisplay: 'Parametry wykazu wybranych osad',
  footer: 'stopka',
  goToBarracks: 'Idź do koszar',
  goToMain: 'Idź do zamku',
  attackWithSpies: 'Atak z %s szpiegów',
  attack: 'Atak',
  attacks: 'Ataków',
  moreAttacks: 'Więcej ataków',
  nextAttacks: 'Następne %s ataków',
  noMatch: 'Nie znaleziono takich osad.',
  runtimecalc: 'Czas dotarcia wojsk',
  loadAllAttacks: 'Wczytaj wszystkie ataki',
  loadingFinished: 'Wczytywanie zakończone',
  toa: 'Czas pracy',
  days: 'dzień',
  hours: 'godz.',
  minutes: 'min.',
  seconds: 'sek.',
  withoutRuntime: 'nie wykonane',
  modul: {
    marketOptions: 'Ustawienia rynku',
    troopsOnMap: 'Wyróżnij wojska na mapie',
    showAttacksOnMap: 'Zapisz ataki / pokaz ataki na mapie',
    insertIntoRuntimeCalc: 'Włóż do kalkulatora ataku',
    highlightgroups: 'Podświetlenie grupy',
    massdisband: 'Customize mass discharge',
    simulator: 'Dostosuj symulator',
    filterOverview: 'Filter troops by time of arrival',
    bbCodeExport: 'Eksportuj osady jako bb-code',
    massforward: 'Zaznaczone wiadomoci lub raporty zostaną przekazane',
    trooplinks: 'Szybkie wpisanie ilości wojsk w koszarach',
    targetExport: 'Export targets from map',
    massbuild: 'Grupowe budowanie w zamku',
    setGroupsOnMap: 'Pokaż grupy ma mapie',
    sortOwnAttacks: 'Sortuj własne ataki'
  },
  units: {
    militia: 'Wiejska milicja',
    sword: 'Templariusz',
    spear: 'Giermek',
    axe: 'Wściekły wojownik',
    bow: 'Długi łuk',
    spy: 'Szpieg',
    light: 'Krzyżowiec',
    heavy: 'Czarny rycerz',
    ram: 'Taran',
    kata: 'Katapulta',
    snob: 'Hrabia'
  },
  buildings: {
    main: 'Zamek',
    stone: 'Kamieniołom',
    wood: 'Tartak',
    iron: 'Kopalnia rudy',
    storage: 'Magazyn',
    hide: 'Kryjówka',
    farm: 'Młyn',
    barracks: 'Koszary',
    wall: 'Mur miejski',
    stable: 'Hodowla osłów',
    market: 'Rynek',
    garage: 'Alchemik',
    snob: 'Dwór',
    smith: 'Złotnik',
    statue: 'Pomnik'
  }
};
var selectLanguage = function (lang) {
  switch (lang) {
    case 'br.kingsage.gameforge.com':
      return br;
    case 'kingsage.de':
    case 'de.kingsage.gameforge.com':
      return de;
    case 'kingsage.nl':
    case 'nl.kingsage.gameforge.com':
      return nl;
    case 'kingsage.pl':
    case 'pl.kingsage.gameforge.com':
      return pl;
    case 'kingsage.fr':
    case 'fr.kingsage.gameforge.com':
      return fr;
    case 'kingsage.com':
    case 'kingsage.org':
    case 'en.kingsage.gameforge.com':
    case 'us.kingsage.gameforge.com':
      return en;
    default:
      return en
  }
};
var $ = 'undefined' != typeof unsafeWindow ? unsafeWindow.jQuery : jQuery || $,
location = window.location,
languageSelector = location.host;
languageSelector = languageSelector.substring(languageSelector.indexOf('.') + 1, languageSelector.length);
var loca = selectLanguage(languageSelector),
Query = function () {
  for (var pair, query = {
  }, search = location.search.substring(1).split('&'), i = search.length; i--; ) pair = search[i].split('='),
  query[pair[0]] = decodeURIComponent(pair[1]);
  return query
}(),
kes = {
},
l = loca;
kes.module = {
};
!function ($) {
  var privateHelper = {
    encode: 'function' == typeof JSON.stringify ? JSON.stringify : JSON.encode,
    decode: 'function' == typeof JSON.parse ? JSON.parse : JSON.decode
  },
  callQueue = [
  ],
  kesForDom = {
    fadeOutRemove: function () {
      return this.each(function () {
        $(this).fadeOut(function () {
          $(this).remove()
        })
      })
    },
    fadeInfadeOut: function () {
      return this.each(function () {
        $(this).fadeIn(function () {
          $(this).fadeOut()
        })
      })
    },
    fadeOutfadeIn: function () {
      return this.each(function () {
        $(this).fadeOut(function () {
          $(this).fadeIn()
        })
      })
    },
    multiCheckBoxes: function (values) {
      return this.each(function (i) {
        $(this).val(values[i])
      })
    },
    resizeTextarea: function () {
      return this.each(function () {
        var textareaHeight = $(this).prop('scrollHeight'),
        windowHeight = 0.9 * window.innerHeight,
        newHeight = textareaHeight > windowHeight ? windowHeight : textareaHeight;
        $(this).css({
          height: newHeight + 'px'
        })
      })
    },
    nullifyEmptyVal: function () {
      var value = $(this).val();
      return '' === value ? 0 : value
    }
  },
  kesForUtil = {
    presets: function () {
      return {
        modul: {
          troopsOnMap: !0,
          marketOptions: !0,
          showAttacksOnMap: !0,
          insertIntoRuntimeCalc: !0,
          highlightgroups: !1,
          massdisband: !0,
          simulator: !0,
          filterOverview: !0,
          bbCodeExport: !0,
          massforward: !0,
          trooplinks: !1,
          targetExport: !0,
          massbuild: !0,
          setGroupsOnMap: !0,
          sortOwnAttacks: !0
        },
        kata_select: 'statue',
        spylink_amount: 500,
        units: {
          modul: {
            off: !0,
            def: !0,
            count: !0,
            spy: !0
          },
          off: {
            one: {
              amount: 1,
              unit: 7
            },
            two: {
              amount: 1,
              unit: 9
            },
            color: '#FF8274',
            abbr: 'O'
          },
          def: {
            one: {
              amount: 1,
              unit: 8
            },
            two: {
              amount: 1,
              unit: 12
            },
            color: '#98F5FF',
            abbr: 'D'
          },
          count: {
            one: {
              amount: 1,
              unit: 11
            },
            two: {
              amount: 1,
              unit: 12
            },
            color: '#FFFAAA',
            abbr: 'G'
          },
          spy: {
            one: {
              amount: 1,
              unit: 5
            },
            two: {
              amount: 1,
              unit: 12
            },
            color: '#D15FEE',
            abbr: 'K'
          }
        },
        market: {
          opt1: {
            name: '10k',
            option: 'opt1',
            stone: 10000,
            wood: 10000,
            iron: 10000
          },
          opt2: {
            name: '50k',
            option: 'opt2',
            stone: 50000,
            wood: 50000,
            iron: 50000
          },
          opt3: {
            name: '100k',
            option: 'opt3',
            stone: 100000,
            wood: 100000,
            iron: 100000
          },
          opt4: {
            name: '200k',
            option: 'opt4',
            stone: 200000,
            wood: 200000,
            iron: 200000
          },
          opt5: {
            name: '321k',
            option: 'opt5',
            stone: 300000,
            wood: 100000,
            iron: 200000
          },
          opt6: {
            name: '213k',
            option: 'opt6',
            stone: 200000,
            wood: 100000,
            iron: 300000
          },
          d3fault: 'opt4'
        },
        highlightgroups: {
          one: {
            name: 'a',
            color: '#004563',
            group: {
            }
          },
          two: {
            name: 'b',
            color: '#A90641',
            group: {
            }
          }
        },
        trooplinks: {
          one: {
            name: 'a',
            farmer: 0,
            sword: 0,
            spear: 0,
            axe: 0,
            bow: 0,
            spy: 0,
            light: 0,
            heavy: 0,
            ram: 0,
            kata: 0,
            snob: 0
          },
          two: {
            name: 'b',
            farmer: 0,
            sword: 0,
            spear: 0,
            axe: 0,
            bow: 0,
            spy: 0,
            light: 0,
            heavy: 0,
            ram: 0,
            kata: 0,
            snob: 0
          },
          three: {
            name: 'c',
            farmer: 0,
            sword: 0,
            spear: 0,
            axe: 0,
            bow: 0,
            spy: 0,
            light: 0,
            heavy: 0,
            ram: 0,
            kata: 0,
            snob: 0
          }
        }
      }
    },
    saveSettings: function (prefix, obj) {
      var save = {
      };
      for (var i in obj) if (obj[i] instanceof Object) if (prefix.indexOf('highlightgroups') > - 1 && 'group' == i) {
        var groups = {
        };
        $('#' + prefix + i + ' input:checked').each(function () {
          var id = $(this).prop('id');
          groups[id] = id
        }),
        save[i] = groups
      } else save[i] = $.kes('saveSettings', prefix + i + '_', obj[i]);
       else {
        var elem = $('#' + prefix + i);
        save[i] = elem.is('input[type="checkbox"]') ? elem.prop('checked') ? !0 : !1 : 'color' == i ? isValidColor(elem.val().slice(1)) ? elem.val()  : obj[i] : elem.val()
      }
      return save
    },
    getUrlParameters: function (url) {
      for (var pair, query = {
      }, search = url.substring(url.indexOf('?') + 1).split('&'), i = search.length; i--; ) pair = search[i].split('='),
      query[pair[0]] = decodeURIComponent(pair[1]);
      return query
    },
    getGroups: function (villageId) {
      var url = '/popup.php?s=groups&m=village&village_id=' + villageId + av,
      groups = [
      ];
      return $.ajax({
        type: 'POST',
        async: !1,
        url: url,
        success: function (data) {
          $(data).find('table.borderlist').eq(0).find('tr > td').each(function () {
            var tmpIn = $(this);
            groups.push({
              name: tmpIn.text().trim(),
              id: tmpIn.find('input').attr('value'),
              checked: 1 == tmpIn.find('input:checked').length ? !0 : !1
            })
          })
        }
      }),
      groups
    },
    getSession: function (url) {
      return $.ajax({
        type: 'post',
        url: url
      })
    },
    genericBBCode: function (creator, data) {
      $('body').append('<div id="kes_box"><textarea style="width: 99%; max-height: 90% !important; resize: none;" id="kes_genericBBCode"></textarea></div><div id="kes_overlay" class="kes-backlight"></div>'),
      $('#kes_genericBBCode').text(creator(data)),
      $('#kes_overlay').fadeIn().bind('click', function () {
        $('#kes_overlay, #kes_box').kes('fadeOutRemove')
      }),
      $('#kes_box').fadeIn(),
      $('#kes_genericBBCode').kes('resizeTextarea')
    },
    prettyNumber: function (number) {
      return (number + '').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
    },
    paddedNumber: function (number) {
      return parseInt10(number) < 10 ? '0' + number : number
    },
    prettyTime: function (time) {
      return Math.floor(time / 3600) + ':' + $.kes('paddedNumber', Math.floor(time % 3600 / 60)) + ':' + $.kes('paddedNumber', Math.floor(time % 60))
    },
    queue: function (options) {
      var optionsCopy = {
      };
      for (var o in options) options.hasOwnProperty(o) && (optionsCopy[o] = options[o]);
      options = optionsCopy;
      var originalCompleteCallback = options.complete;
      options.complete = function (request, status) {
        callQueue.shift(),
        originalCompleteCallback && originalCompleteCallback(request, status),
        callQueue.length > 0 ? $.ajax(callQueue[0])  : location.reload()
      },
      callQueue.push(options),
      1 == callQueue.length && $.ajax(options)
    },
    loadKey: function (key) {
      try {
        return privateHelper.decode(window.localStorage.getItem(key))
      } catch (e) {
        return window.localStorage.getItem(key)
      }
    },
    saveKey: function (key, value) {
      return window.localStorage.setItem(key, privateHelper.encode(value))
    },
    deleteKey: function (key) {
      var value = privateHelper.decode(window.localStorage.getItem(key));
      return window.localStorage.removeItem(key),
      value
    },
    isKey: function (key) {
      return window.localStorage.getItem(key)
    }
  },
  callKES = function (that, methodArray, method, args) {
    return methodArray[method] ? methodArray[method].apply(that, args)  : void $.error('Method ' + method + ' does not exist on jQuery.kes')
  };
  $.fn.extend({
    kes: function (method) {
      return callKES(this, kesForDom, method, Array.prototype.slice.call(arguments, 1))
    }
  }),
  $.extend({
    kes: function (method) {
      return callKES(this, kesForUtil, method, Array.prototype.slice.call(arguments, 1))
    }
  })
}($);
function identifyActiveTab(link) {
  return 0 != $('td[background*="s_back"]').find('a[href*="' + link + '"]').length
}
function parseInt10(arg) {
  return parseInt(arg, 10)
}
function isValidColor(hexcolor) {
  return /^([0-9a-f]{1,2}){6}$/i.test(hexcolor)
}
function printf(string, s) {
  if (s instanceof Array) {
    var o = string;
    for (var i in s) s.hasOwnProperty(i) && (o = o.replace('%s', s[i]));
    return o
  }
  return string.replace('%s', s)
}
function calculateTroopScore(playerPage) {
  var playerPage = $(playerPage),
  cachedTable = playerPage.find('table.borderlist').eq(2),
  totalScore = cachedTable.find('tr:nth-child(3) > td:last').html().replace(/\./g, ''),
  cities = cachedTable.find('tr:nth-child(5) > td:last').html().replace(/\./g, ''),
  bonusScore = 2250 * (cities - 1),
  troopScoremax = 10000 * cities,
  startIndex = playerPage.find('table.borderlist').eq(3).find('tr > th:last').parent().index(),
  cityScore = 0;
  return bonusScore = 0 > bonusScore ? 0 : bonusScore,
  playerPage.find('table.borderlist').eq(3).find('tr:gt(' + startIndex + ')').each(function () {
    cityScore += Number($(this).find('td:last').html().replace(/\./g, ''))
  }),
  [
    totalScore - (bonusScore + cityScore),
    troopScoremax
  ]
}
function displayAttacksWithSeconds(element) {
  function createDate(time) {
    var date = new Date;
    return date.setHours(parseInt10(time[0])),
    date.setMinutes(parseInt10(time[1])),
    date.setSeconds(parseInt10(time[2])),
    date
  }
  function formatDate(date, text) {
    var formattedDate = text;
    return formattedDate = formattedDate.replace(/\d+\.\d+\./, date.getDate() + '.' + $.kes('paddedNumber', date.getMonth() + 1) + '.'),
    formattedDate = formattedDate.replace(/[0-9]{2}:[0-9]{2}/, date.getHours() + ':' + $.kes('paddedNumber', date.getMinutes()) + ':' + $.kes('paddedNumber', date.getSeconds()))
  }
  $('table.borderlist').eq(element).find('tr').each(function () {
    var cur = $(this);
    if (cur.find('td:last > span').length > 0) {
      var incomming = cur.find('td:last > span').text().split(':'),
      servertime = createDate($('#servertime').text().split(':'));
      servertime.setSeconds(servertime.getSeconds() + parseInt(incomming[2], 10)),
      servertime.setMinutes(servertime.getMinutes() + parseInt(incomming[1], 10)),
      servertime.setHours(servertime.getHours() + parseInt(incomming[0], 10));
      var replacable = cur.find('td:nth-child(4)'),
      repl = replacable.text(),
      replacer = formatDate(servertime, repl);
      replacable.text(replacer)
    }
  })
}
function filterOverdueAttacks(attacks) {
  var tmp_attacks = {
  };
  $.each(attacks, function (villageId) {
    village_attacks = attacks[villageId],
    tmp_attacks[villageId] = {
    },
    tmp_attacks[villageId].length = 0;
    for (var index in village_attacks) if (village_attacks.hasOwnProperty(index)) {
      var single_attack = village_attacks[index],
      time = parseInt10(single_attack[6]) - Date.parse(new Date) / 1000;
      time > 0 && (tmp_attacks[villageId].length = index, tmp_attacks[villageId][tmp_attacks[villageId].length] = single_attack)
    }
    0 == tmp_attacks[villageId].length && delete tmp_attacks[villageId]
  });
  var count = 0;
  for (var item in tmp_attacks) tmp_attacks.hasOwnProperty(item) && count++;
  0 == count ? $.kes('deleteKey', 'kes_save_attacks')  : $.kes('saveKey', 'kes_save_attacks', tmp_attacks)
}
function displayTrooplinks() {
  var wordToDigit = {
    one: 1,
    two: 2,
    three: 3
  },
  o = '<div style="padding: 5px;"><span style="font-weight: bold;">(kes) ' + l.trooplinks + '</span>';
  for (var no in k.trooplinks) k.trooplinks.hasOwnProperty(no) && (o += ' <span style="font-weight: bold;">#' + wordToDigit[no] + ' </span><span class="click kes_mark" id="kes_trooplink_' + no + '">' + arrow + ' ' + k.trooplinks[no].name + ' </span> ');
  return o + '</div>'
}
function updateSettings() {
  k = $.kes('loadKey', 'kes_user_settings')
}
function isNewerVersion(vold, vnew) {
  for (var o = vold.replace(/\./g, ''), n = vnew.replace(/\./g, ''); o.length != n.length; ) o.length > n.length ? n += '0' : o += '0';
  return parseInt10(n) > parseInt10(o) ? !0 : !1
}
function putSettings(start_tab) {
  function switch_tabs(obj) {
    if (obj.attr('rel')) {
      $('.kes-content-wrapper').hide(),
      $('.kes-menu a').removeClass('kes-active');
      var id = obj.attr('rel');
      $('#' + id).slideDown(800),
      obj.addClass('kes-active')
    }
  }
  var html = '';
  html += '<div id="kes_overlay" class="kes-backlight"></div>',
  html += '<div class="kes-user-settings">',
  html += '\t<a href="#" id="kes_close" class="kes-close">',
  html += '\t\t<span class="kes-icons kes-icon-close"></span>',
  html += '\t</a>',
  html += '\t<span id="kes_save_success" class="kes-saved">' + l.saved + '<span class="kes-icons kes-icon-saved"></span></span>',
  html += '\t<div>',
  html += '\t\t<div class="kes-menu-wrapper">',
  html += '\t\t\t\t<span class="kes-heading">Kingsage Enhancement Suite<a href="http://kingsage-enhancement.com/" target="_blank"><span class="kes-icons kes-icon-home"></span></a></span><span class="kes-subheading">version ' + version + '</span>',
  html += '\t\t\t<div class="kes-menu">',
  html += '\t\t\t\t<div class="kes-separator"></div>',
  html += '\t\t\t\t<a href="#" id="kes_reset_settings">' + l.resetSettings + '</a>',
  html += '\t\t\t\t<div class="kes-separator"></div>',
  html += '\t\t\t\t<a href="#" rel="content_modules">' + l.enableDisableModules + '</a>',
  html += '\t\t\t\t<a href="#" rel="content_trebuchet">' + l.buildingTrebuchet + '</a>',
  html += '\t\t\t\t<a href="#" rel="content_spy">' + l.linkspy + '</a>',
  html += '\t\t\t\t<a href="#" rel="content_market">' + l.marketSettings + '</a>',
  html += '\t\t\t\t<a href="#" rel="content_troops">' + l.highlighttroops + '</a>',
  html += '\t\t\t\t<a href="#" rel="content_groups">' + l.highlightgroups + '</a>',
  html += '\t\t\t\t<a href="#" rel="content_trooplinks">' + l.trooplinks + '</a>',
  html += '\t\t\t\t<div class="kes-separator"></div>',
  html += '\t\t\t</div>',
  html += '\t\t</div>',
  html += '\t\t<div id="content_modules" class="kes-content-wrapper"><div class="kes-content-title"><h1>' + l.enableDisableModules + '</h1></div><div class="kes-content"><ul>' + draw.modul(presets.modul, k.modul) + '</ul></div></div>',
  html += '\t\t<div id="content_trebuchet" class="kes-content-wrapper">',
  html += '\t\t\t<div class="kes-content-title"><h1>' + l.buildingTrebuchet + '</h1></div>',
  html += '\t\t\t<div class="kes-content">',
  html += '\t\t\t\t' + l.contentTrebuchet + ': <select id="kes_kata_select" style="width: 125px;"> ' + draw.helper.returnOptionsForObject(buildings) + '</select>',
  html += '\t\t\t</div>',
  html += '\t\t</div>',
  html += '\t\t<div id="content_spy" class="kes-content-wrapper">',
  html += '\t\t\t<div class="kes-content-title"><h1>' + l.spy + '</h1></div>',
  html += '\t\t\t<div class="kes-content">' + printf(l.contentSpy, '<input id="kes_spylink_amount" type="text" maxlength="5" size="6" value="' + k.spylink_amount + '">') + '</div>',
  html += '\t\t</div>',
  html += '\t\t<div id="content_market" class="kes-content-wrapper">',
  html += '\t\t\t<div class="kes-content-title"><h1>' + l.marketSettings + '</h1></div>',
  html += '\t\t\t<div class="kes-content">',
  html += '\t\t\t\t' + l.marketDefault + ':   <select id="kes_market_d3fault">' + draw.returnMarketDefault(k.market) + '</select>',
  html += '\t\t\t<table class="kes-table"><tbody>',
  html += '\t\t\t\t<tr><th><b>' + l.name + '</b></th><th><b>' + l.stone + '</b></th><th><b>' + l.wood + '</b></th><th><b>' + l.iron + '</b></th></tr>',
  html += '\t\t\t\t' + draw.returnMarketInputs(k.market),
  html += '\t\t\t</tbody></table>',
  html += '\t\t\t</div>',
  html += '\t\t</div>',
  html += '\t\t<div id="content_troops" class="kes-content-wrapper"><div class="kes-content-title"><h1>' + l.highlighttroopsLabel + '</h1></div><div class="kes-content">' + draw.highlighttroops(k.units.modul, units) + '</div></div>',
  html += '\t\t<div id="content_groups" class="kes-content-wrapper"><div class="kes-content-title"><h1>' + l.highlightGroupslabel + '</h1></div><div class="kes-content">' + draw.highlightgroups(k.highlightgroups) + '<br style="clear: left;"></div></div>',
  html += '\t\t<div id="content_trooplinks" class="kes-content-wrapper"><div class="kes-content-title"><h1>' + l.modul.trooplinks + '</h1></div><div class="kes-content">' + draw.trooplinks() + '</div></div>',
  html += '\t</div>',
  html += '</div>',
  $('body').append(html),
  $('#kes_kata_select, #kes_market_d3fault, #kes_units_off_one_unit, #kes_units_off_two_unit, #kes_units_def_one_unit, #kes_units_def_two_unit').kes('multiCheckBoxes', [
    k.kata_select,
    k.market[k.market.d3fault].option,
    k.units.off.one.unit,
    k.units.off.two.unit,
    k.units.def.one.unit,
    k.units.def.two.unit
  ]),
  $('input[class*="kes_color"]').keyup(function () {
    var color = $(this).val().slice(1);
    isValidColor(color) ? ($(this).css('background-color', $(this).val()), $(this).next('.kes-color-validation').find('span').hide().end().find('.kes-icon-valid').css({
      opacity: 0,
      display: 'inline-block'
    }).animate({
      opacity: 1
    }, 600))  : $(this).next('.kes-color-validation').find('span').hide().end().find('.kes-icon-invalid').css({
      opacity: 0,
      display: 'inline-block'
    }).animate({
      opacity: 1
    }, 600)
  }),
  $('.kes-enable, .kes-disable').click(function () {
    var parent = $(this).parent('.kes-switch');
    $('.kes-enable, .kes-disable', parent).toggleClass('selected'),
    $('.checkbox', parent).prop('checked', !$('.checkbox', parent).prop('checked')).trigger('change')
  }),
  $('.kes-menu a').click(function () {
    switch_tabs($(this))
  }),
  switch_tabs($('.kes-menu a[rel="' + start_tab + '"]')),
  setTimeout(initSettings, 50),
  $('#kes_overlay, #kes_close').bind('click', exitSettings),
  $('#kes_reset_settings').bind('click', function () {
    q = confirm(l.resetSettings + '?'),
    q && ($.kes('saveKey', 'kes_user_settings', presets), exitSettings(), updateSettings())
  }),
  $('.kes-user-settings').on('change', 'input, select', function () {
    $.kes('saveKey', 'kes_user_settings', $.kes('saveSettings', 'kes_', presets)),
    $('#kes_save_success').kes('fadeInfadeOut'),
    updateSettings()
  })
}
function initSettings() {
  $('.kes-backlight').fadeIn(200),
  $('.kes-user-settings').slideDown(600)
}
function exitSettings() {
  $('.kes-backlight').fadeOut(600),
  $('.kes-user-settings').slideUp(600),
  setTimeout(function () {
    $('.kes-backlight, .kes-user-settings').remove()
  }, 700)
}
var version = '1.2',
host = location.host,
server = location.host.split('.') [0].substr(1),
page = document.URL,
self = document.title.substring(document.title.indexOf('- ') + 2);
self = self.substring(0, self.indexOf(' -'));
var arrow = '<img src="img/arrow_right_raquo.png">',
units = {
  0: l.units.militia,
  1: l.units.sword,
  2: l.units.spear,
  3: l.units.axe,
  4: l.units.bow,
  5: l.units.spy,
  7: l.units.light,
  8: l.units.heavy,
  9: l.units.ram,
  10: l.units.kata,
  11: l.units.snob
},
unit_runtime = {
  farmer: 20,
  sword: 22,
  spear: 18,
  axe: 18,
  bow: 18,
  spy: 9,
  light: 10,
  heavy: 11,
  ram: 30,
  kata: 30,
  snob: 35
},
buildings = l.buildings,
premium = $('div.buff[style*="premium-account"]').length > 0 ? !0 : !1,
av = Query.av ? '&av=' + Query.av : '',
css = '';
css += '.kes-backlight {display: none; position: fixed; cursor: pointer; width: 100%; height: 100%; padding: 0; margin: 0; top: 0; left: 0; background-color: black; opacity: 0.7; z-index: 199; }',
css += '.kes-user-settings {display: none; position: fixed; left: 100px; right: 100px; top: 30px; bottom: 30px; background-color: white; z-index: 250; font-family: sans-serif; font-size: 14px; color: #333333; }',
css += '.kes-user-settings input[type="text"], .kes-user-settings select {border: 1px solid #ccc; padding: 6px 4px; outline: none; border-radius: 2px; margin: 0; width: 70px; max-width: 100%; display: inline-block; margin-bottom: 5px; background: #fff; }',
css += '.kes-user-settings input[type="text"]:focus, .kes-user-settings select:focus {border: 1px solid #aaa; color: #444; box-shadow:  0 0 3px rgba(0,0,0,.2); }',
css += '.kes-user-settings select {width: 130px; padding: 4px; }',
css += '.kes-user-settings ul {padding-left: 20px; }',
css += '.kes-user-settings li {list-style-type: none; }',
css += '.kes-icons {background: url(data:image/png;base64,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) no-repeat; }',
css += '.kes-saved {color: #529214; height: 28px; position: absolute; right: 30px; top: 17px; display: none; width: 100px; z-index: 251; }',
css += '.kes-icon-saved {background-position: -288px 0; display: inline-block; width: 15px; height: 15px; margin: -2px 5px; }',
css += '.kes-close {position: absolute; top: 10px; right: 7px; z-index: 251; height: 28px; width: 28px; }',
css += '.kes-close:hover .kes-icon-close {opacity: 0.6; }',
css += '.kes-icon-close {background-position: -312px 0; display: inline-block; height: 14px; width: 14px; line-height: 14px; margin-top: 1px; vertical-align: text-top; position: relative; left: 7px; top: 5px; }',
css += '.kes-icon-valid {background-position: -288px 0; display: none; height: 14px; width: 14px; line-height: 14px; margin-top: 3px; vertical-align: top; position: relative; left: 7px; top: 5px; }',
css += '.kes-icon-invalid {background-position: -144px -120px; display: none; height: 14px; width: 14px; line-height: 14px; margin-top: 3px; vertical-align: top; position: relative; left: 7px; top: 5px; }',
css += '.kes-menu-wrapper {overflow-y: auto; padding-top: 16px; border-right: 1px solid #D9D9D9; box-shadow: -6px 0 6px -6px rgba(0,0,0,0.2) inset; top: 0; right: 0; left: 0; bottom: 0; position: absolute; width: 212px; z-index: 150; }',
css += '.kes-menu {top: 0; right: 0; left: 0; bottom: 0; margin: 0; user-select: none; }',
css += '.kes-menu a {color: #21759B; display: block; font-size: 14px; line-height: 18px; margin: 0; padding: 4px 20px 4px 0; position: relative; text-decoration: none; text-shadow: 0 1px 0 #FFFFFF; text-align: right; }',
css += '.kes-menu a:hover {background: none repeat scroll 0 0 rgba(0,0,0,0.04); color: #21759B; }',
css += 'a > .kes-icon-home {background-position: 0 -24px; display: inline-block; height: 14px; margin: -2px 5px; width: 13px; }',
css += 'a:hover > .kes-icon-home {opacity: 0.6; background-color: transparent; }',
css += '.kes-menu .kes-active {font-weight: bold; color: #333333; }',
css += '.kes-heading {display: block; font-size: 16px; font-weight: bold; line-height: 18px; margin: 0; padding: 4px 20px; position: relative; }',
css += '.kes-subheading {display: block; font-size: 13px; line-height: 18px; margin: -5px 0; padding: 0 20px; position: relative; }',
css += '.kes-separator {border-bottom: 1px solid #FFFFFF; border-top: 1px solid #DFDFDF; height: 0; margin: 12px 20px; padding: 0; }',
css += '.kes-content {bottom: 0; height: auto; left: 213px; margin: 0; overflow: auto; position: absolute; right: 0; top: 45px; width: auto; padding: 20px; }',
css += '.kes-content-title {text-overflow: ellipsis; overflow: hidden; height: 45px; left: 213px; position: absolute; right: 0; padding-right: 135px; top: 0; z-index: 200; border-bottom: 1px solid #DFDFDF; box-shadow: 0 4px 4px -4px rgba(0,0,0,0.1); }',
css += '.kes-content-title h1 {font-size: 22px; font-weight: 200; line-height: 45px; margin: 0; padding: 0 16px; }',
css += '.kes-content .kes-paragraph {background: none repeat scroll 0 0 #F5F5F5; border: 1px solid #DFDFDF; margin: 0 1%; padding: 0 1% 0; }',
css += '.kes-enable, .kes-disable, .kes-enable span, .kes-disable span {user-select: none;background: url(data:image/gif;base64,R0lGODlhBQAOAeYAAL6+vlyRE4q8Je7u7oC0HZubm0l0EFaKEYqKimKNGJKSklxcXGCUFGmTGfDw8NjY2H2xHdLS0mSTF0JtDXWbKIaGhoKCglJ7E3mqH0tzEnyuIPX19WmfF+np6W2eGm+kGHGmGHZ2dmmZGVuFFd7e3mRkZI2NjYSEhICAgJOyV3mXTXKcH1VVVVGFD12NFVKGEIiIiHGhHI3AJ2FhYYa7HmSaFViOEleCFF6IFnx8fHBwcHp6eo+Pj2pqanJycm5ubnR0dH9/f2xsbHh4eGhoaHmtG3arGnuwHHOpGWecFmKYFGuhF+Xl5YS2I4S5HpSUlIi8H4a5H0+BD5GRkWdnZ4e5JMTExODg4HWmHc/Pz4GyImCQFXOkHX+wIYO2Hqy9lMjIyKysrPLy8nWgIG6bGrzOmbDDj87Yv9Xfw4CxHliHE3CjGHqkIX+lMnyvHW6YHYGeV3inHYa0JXquHFh/IFyCJmWWF1WAFJu2YYKwJIK0I1yPE9XV1ff392ZmZvj4+CH5BAAAAAAALAAAAAAFAA4BAAf/gACCgkyFhQ6IiH+LjI2Oj5CRkpOUlZaXmI59m5t8np4hoaEIpKQKp6dPqqqop1Ovrzyysia1taW4pRW7vL0Wv8DBQcPDOcbGO8nJQ8zMoqFA0dE+1NQ619c/2tpC3d094OBE4+NU5uYl6errLO3tDfDwEPPzUfb2UPn5NPz8Tv//vAgUSKBgQXrzjihUWKRhQyMQISKZOBGERYsfMmZcwpEjh48fk4gUWaNkSSUoUTJYuTKAy5cwbciUeaCmzZsvcuZswZOnlJ8/JwgVuqhDFit/SFjJQmIAGCaI+DzY0OdPBDGMIlRdxGfrn66MwHL1KvYr2bNh0Y5Ny3atW7Nt/+G+ncqIBAlGDvgMYNSBzxUHiwZcebDoQYEKfwCEyFHhwQ4EpwpYQGWBB6oclk9hnrXDlokQuELAKAWkl49eOoKlBvaDWJAex3IQUbbDT7Mhfp6VkAZkRjUfM7DpWLDtxwJvQhaE6zHDDzkLC/xIj7CguZ8/YVhUX5SlQolFZSg0+JNCAhkMZSTESeOFAhn2NCRg8MIvwRGACdwQEJhgjsEERdCDgxELjQCCQwZGdMMaFN3gwUUXcKDRBUl0dEENIF1gx0gGMGBShykZsAdLBtjw0gQHnHjATBO8YNMEUtiUgQE6fQFjTn+oMIEBUizyBR0TLNXBIiQcdRciTICxV/8fGzzAByNiRMBIH1Iu0seTVmL5x5VTasllll2GCeaYW3pppphlovllmmQ2WdddfwzAByJX8DHkA1fs9ccJBRD2RwU5hADAH6cgsMMDT5xiQQGo8DDZKTxsJksOnj1WCmikwBBCL6XtcoIPqgGDgg6u/RBbD7QRcVtuovjBWwm/BYfNDMUd541y4SxAjh/W+bEACtLNsEAEwrIQxh8lVJDFIm3ggcYiebCxghl/yCCDHGOgYa0MGKSwrQBtCCCuAGOMS24V6FYxRhPsNrFCu3qsoMW8WrzRxb1dvKHBvho0gMG/GPgLcANYFIxFAlwkzEUCMTQcQwIeROwBDhJPLMIuxSKMgLEIN9jhsR03SCCyBHdsYfIWF5zsAh0utHyHCi2rccEZMhtAbR1wnLFIIAA7) repeat-x; display: inline-block; }',
css += '.kes-enable span, .kes-disable span { user-select: none; line-height: 30px; display: block; background-repeat: no-repeat; font-weight: bold; }',
css += '.kes-enable span { background-position: left -90px; padding: 0 10px; }',
css += '.kes-disable span { background-position: right -180px;padding: 0 10px; }',
css += '.kes-disable.selected { background-position: 0 -30px; }',
css += '.kes-disable.selected span { background-position: right -210px; color: #fff; }',
css += '.kes-enable.selected { background-position: 0 -60px; }',
css += '.kes-enable.selected span { background-position: left -150px; color: #fff; }',
css += '.kes-switch {margin: 5px !important; }',
css += '.kes-switch label { cursor: pointer; }',
css += '.kes-switch input { display: none; }',
css += 'td.kes_used { background-image: url("data:image/jpeg;base64,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"); }',
css += '.kes-table {border-collapse: collapse; border-spacing: 0; box-shadow: 0 0 3px 1px rgba(0,0,0,0.2); max-width: 520px; width: 90%; }',
css += '.kes-table td, .kes-table th {border-top: 1px solid #DDD; line-height: 20px; padding: 8px; text-align: left; vertical-align: top; }',
css += '.kes-table th {border-top: none; font-weight: bold; }',
css += '.kes-table tbody > tr:nth-child(2n+1) > td, .kes-table tbody > tr:nth-child(2n+1) > th {background-color: #F9F9F9; }',
css += '.kes-width {width: 45px; margin: 0 0 0 5px; display: inline-block; vertical-align: text-top;}',
css += '.kes-padding {margin: 0 5px; display: inline-block;}',
css += '@media screen and (max-width:1024px) { .kes-user-settings {position: fixed; left: 30px; right: 30px; top: 30px; bottom: 30px; } }',
css += '.kes-notification {position: fixed; transition: all 0.3s ease-out; z-index: 100000; font-family: sans-serif; line-height: 40px; font-size: 35px; top: 25%; left: 25%; opacity: 1; width: 50%; min-height: 40px; text-align: center; background-color: #000; color: #fff; border-radius: 15px; text-shadow: 0 -1px 1px #ddd; box-shadow: 0 15px 15px -15px #000; }',
css += '.kes_spinner { display: inline-block; width: 16px; height: 16px; vertical-align: text-top; background-image: url("data:image/gif;base64,R0lGODlhEAAQAPYAAO7TngAAAOrPm4h5Wn9wVN/FlLumfMqzhpSDYgAAAIV1WLmkey4pH0xEM93EkpuJZ4p6XOLJlnlrUBoXEaaTbpmIZpB/X+TKl+jOmp2LaMGrgD84KgsJB1lPO9C4itnAkLCcdCciGjIsIUE6K8awg7eieTgxJUlAMDozJkM7LMKsgb2nfVRKN6iVb9vCkWhdRaGOaqyYcq6ac1hOOlZMOVtRPH1vU9G6i3ZoTuzRnJeGZBYTDikkG1BHNQMDAkpCMb+pfjQuIlJJNhgVEODHlcixhZKBYdO7jNe/jzs1J5+NaSEdFh0aE6OQbGpeRkU9LjArIGNYQcSugrOfdyMfF3RnTT02KU5FNAkIBgcGBKSSbdW9jUc/L+bMmaqXcV9UP2FWQM62iJWEYxAOCx8cFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCAAAACwAAAAAEAAQAAAHaIAAgoMgIiYlg4kACxIaACEJCSiKggYMCRselwkpghGJBJEcFgsjJyoAGBmfggcNEx0flBiKDhQFlIoCCA+5lAORFb4AJIihCRbDxQAFChAXw9HSqb60iREZ1omqrIPdJCTe0SWI09GBACH5BAkIAAAALAAAAAAQABAAAAdrgACCgwc0NTeDiYozCQkvOTo9GTmDKy8aFy+NOBA7CTswgywJDTIuEjYFIY0JNYMtKTEFiRU8Pjwygy4ws4owPyCKwsMAJSTEgiQlgsbIAMrO0dKDGMTViREZ14kYGRGK38nHguHEJcvTyIEAIfkECQgAAAAsAAAAABAAEAAAB2iAAIKDAggPg4iJAAMJCRUAJRIqiRGCBI0WQEEJJkWDERkYAAUKEBc4Po1GiKKJHkJDNEeKig4URLS0ICImJZAkuQAhjSi/wQyNKcGDCyMnk8u5rYrTgqDVghgZlYjcACTA1sslvtHRgQAh+QQJCAAAACwAAAAAEAAQAAAHZ4AAgoOEhYaCJSWHgxGDJCQARAtOUoQRGRiFD0kJUYWZhUhKT1OLhR8wBaaFBzQ1NwAlkIszCQkvsbOHL7Y4q4IuEjaqq0ZQD5+GEEsJTDCMmIUhtgk1lo6QFUwJVDKLiYJNUd6/hoEAIfkECQgAAAAsAAAAABAAEAAAB2iAAIKDhIWGgiUlh4MRgyQkjIURGRiGGBmNhJWHm4uen4ICCA+IkIsDCQkVACWmhwSpFqAABQoQF6ALTkWFnYMrVlhWvIKTlSAiJiVVPqlGhJkhqShHV1lCW4cMqSkAR1ofiwsjJyqGgQAh+QQJCAAAACwAAAAAEAAQAAAHZ4AAgoOEhYaCJSWHgxGDJCSMhREZGIYYGY2ElYebi56fhyWQniSKAKKfpaCLFlAPhl0gXYNGEwkhGYREUywag1wJwSkHNDU3D0kJYIMZQwk8MjPBLx9eXwuETVEyAC/BOKsuEjYFhoEAIfkECQgAAAAsAAAAABAAEAAAB2eAAIKDhIWGgiUlh4MRgyQkjIURGRiGGBmNhJWHm4ueICImip6CIQkJKJ4kigynKaqKCyMnKqSEK05StgAGQRxPYZaENqccFgIID4KXmQBhXFkzDgOnFYLNgltaSAAEpxa7BQoQF4aBACH5BAkIAAAALAAAAAAQABAAAAdogACCg4SFggJiPUqCJSWGgkZjCUwZACQkgxGEXAmdT4UYGZqCGWQ+IjKGGIUwPzGPhAc0NTewhDOdL7Ykji+dOLuOLhI2BbaFETICx4MlQitdqoUsCQ2vhKGjglNfU0SWmILaj43M5oEAOwAAAAAAAAAAAA=="); }';
var draw = {
  helper: {
    colorValidation: function () {
      return '<span class="kes-color-validation"><span class="kes-icons kes-icon-valid"></span><span class="kes-icons kes-icon-invalid"></span></span>'
    },
    returnOptionsForObject: function (obj) {
      out = '';
      for (var i in obj) obj.hasOwnProperty(i) && (out += '<option value="' + i + '">' + obj[i] + '</option>');
      return out
    },
    returnUnitsForTrooplinks: function (no) {
      var troops = k.trooplinks[no],
      out = '';
      out += '<ul id="kes_trooplinks_' + no + '">',
      out += '<li><span class="kes-width">Name:</span><input type="text" id="kes_trooplinks_' + no + '_name"size="5" value="' + troops.name + '" max-length="7"></li>';
      for (var unit in unit_runtime) unit_runtime.hasOwnProperty(unit) && (out += '<li><span class="kes-width"><img src="/img/units/unit_' + unit + '.png"></span><input id="kes_trooplinks_' + no + '_' + unit + '" type="text" value="' + troops[unit] + '" size="5"></li>');
      return out += '</ul>'
    },
    getContrast: function (hexcolor) {
      var r = parseInt(hexcolor.substr(0, 2), 16),
      g = parseInt(hexcolor.substr(2, 2), 16),
      b = parseInt(hexcolor.substr(4, 2), 16),
      yiq = (299 * r + 587 * g + 114 * b) / 1000;
      return yiq >= 128 ? 'black' : 'white'
    },
    returnHighlightGroups: function (no) {
      var groups = [
      ],
      g = k.highlightgroups[no].group;
      if ('' != av) for (var i in g) g.hasOwnProperty(i) && groups.push(i);
       else premium ? ($('#group_drop_down > table > tbody > tr').each(function (i) {
        groups[i] = $(this).find('td > a').html()
      }), groups.shift())  : groups.push(l.none);
      for (var disabled = '' != av ? 'disabled' : '', out = '', i = 0; i < groups.length; i++) {
        var checked = g[groups[i]] ? 'checked="checked"' : '';
        out += '<li><p class="kes-switch"><label class="kes-enable' + (checked ? ' selected' : '') + '"><span>' + l.turnOn + '</span></label><label class="kes-disable' + (checked ? '' : ' selected') + '"><span>' + l.turnOff + '</span></label><input id="' + groups[i] + '" class="checkbox" type="checkbox" ' + checked + ' ' + disabled + ' ><span class="kes-width">' + groups[i] + '</span></li>'
      }
      return out
    }
  },
  trooplinks: function () {
    for (var number = [
      '0',
      'one',
      'two',
      'three'
    ], o = '', i = 1; 3 >= i; i++) o += '<div class="kes-paragraph" style="float: left; min-width: 170px; width: 25%;">',
    o += '<h2>KES ' + l.troops + ' #' + i + '</h2><div class="kes_list">' + this.helper.returnUnitsForTrooplinks(number[i]) + '</div></div>';
    return o
  },
  highlightgroups: function (highlightgroups) {
    var o = '' != av ? '<h2 id="groups_av" style="color:red; text-align: center;">' + highlightGroupsReplacementError + '</h2>' : '',
    no = 1;
    for (var i in highlightgroups) highlightgroups.hasOwnProperty(i) && (o += '<div class="kes-paragraph" style="float: left; min-width: 250px; width: 25%">', o += '<h2>KES ' + l.group + ' #' + no + '</h2><ul id="kes_highlightgroups_' + i + '_group"><li><span class="kes-width">' + l.name + ':</span><input id="kes_highlightgroups_' + i + '_name" size="5" maxlength="4" type="text" value="' + highlightgroups[i].name + '"></li>', o += '<li><span class="kes-width">' + l.color + ':</span><input class="kes_color" id="kes_highlightgroups_' + i + '_color" type="text" maxlength="7" size="9" value="' + highlightgroups[i].color + '"', o += 'style="text-transform: uppercase; background-color: ' + highlightgroups[i].color + '; color: ' + this.helper.getContrast(highlightgroups[i].color.substring(1)) + ';">' + this.helper.colorValidation() + '</li>', o += this.helper.returnHighlightGroups(i) + '</ul></div>', no++);
    return o
  },
  highlighttroops: function (unitsettings, units) {
    var o = '',
    unitlist = this.helper.returnOptionsForObject(units),
    amount = l.amount,
    color = l.color,
    none = l.none;
    for (var modul in unitsettings) if (unitsettings.hasOwnProperty(modul)) {
      var checked = unitsettings[modul] ? 'checked="checked"' : '',
      hidden = '',
      listOne = unitlist,
      listTwo = unitlist + '<option value="12">' + none + '</option>',
      hidden = '';
      [
        'spy',
        'count'
      ].indexOf(modul) > - 1 && (hidden = 'display: none;', listOne = '<option value=' + k.units[modul].one.unit + '></option>', listTwo = '<option value="12"></option>'),
      o += '<div class="kes-paragraph kes_troops" style="margin: 10px; float: left; width: 35%; min-width: 340px;"><h2>' + l[modul] + '</h2><p class="kes-switch"><label class="kes-enable' + (checked ? ' selected' : '') + '"><span>' + l.turnOn + '</span></label><label class="kes-disable' + (checked ? '' : ' selected') + '"><span>' + l.turnOff + '</span></label><input class="checkbox" type="checkbox" id="kes_units_modul_' + modul + '" ' + checked + '></p>',
      o += '<span style="vertical-align: sub;" class="kes-padding">' + l.abbr + ':</span><input style="width: 24px; text-align:center" type="text" id="kes_units_' + modul + '_abbr" size="1" maxlength="1" value="' + k.units[modul].abbr + '">',
      o += '<span class="kes-padding">' + color + ':</span><input class="kes_color" id="kes_units_' + modul + '_color" type="text" maxlength="7" size="9" value="' + k.units[modul].color + '" style="text-transform: uppercase; background-color: ' + k.units[modul].color + '; color: ' + this.helper.getContrast(k.units[modul].color.substring(1)) + ';">' + this.helper.colorValidation() + '<br />',
      o += '<span class="kes-padding">' + amount + ':</span><input id="kes_units_' + modul + '_one_amount" value="' + k.units[modul].one.amount + '" type="text" size="9" maxlength="5">',
      o += '<span class="kes-padding" style="' + hidden + '">' + l.unit + ' 1:</span><select id="kes_units_' + modul + '_one_unit" style="' + hidden + '"">' + listOne + '</select><br/>',
      o += '<span class="kes-padding" style="' + hidden + '">' + amount + ':</span><input id="kes_units_' + modul + '_two_amount" value="' + k.units[modul].two.amount + '" type="text" size="9" maxlength="5" style="' + hidden + '">',
      o += '<span class="kes-padding" style="' + hidden + '">' + l.unit + ' 2:</span><select id="kes_units_' + modul + '_two_unit" style="' + hidden + '">' + listTwo + '</select></div>'
    }
    return o
  },
  modul: function (settings, modul) {
    var o = '';
    for (var m in settings) if (settings.hasOwnProperty(m)) {
      var checked = modul[m] ? 'checked="checked"' : '';
      o += '<li class="kes-paragraph" style="margin: 5px 0;"><p class="kes-switch"><label class="kes-enable' + (checked ? ' selected' : '') + '"><span>' + l.turnOn + '</span></label><label class="kes-disable' + (checked ? '' : ' selected') + '"><span>' + l.turnOff + '</span></label><input id="kes_modul_' + [m] + '" class="checkbox" type="checkbox" ' + checked + '><span class="kes-padding">' + l.modul[m] + '</span></li>'
    }
    return o
  },
  returnMarketInputs: function (market) {
    var o = '',
    c = 1;
    for (var opt in market) market.hasOwnProperty(opt) && 'd3fault' != opt && (o += '<tr><td><span class="kes-padding">#' + c + '</span>', o += '<input id="kes_market_' + opt + '_name" value="' + market[opt].name + '" type="text" size="10" maxlength="10"></td><td>', o += '<input id="kes_market_' + opt + '_option" value="' + market[opt].option + '" type="text" size="10" maxlength="10" style="display: none;">', o += '<input id="kes_market_' + opt + '_stone" value="' + market[opt].stone + '" type="text" size="6" maxlength="6"></td><td>', o += '<input id="kes_market_' + opt + '_wood" value="' + market[opt].wood + '" type="text" size="6" maxlength="6"></td><td>', o += '<input id="kes_market_' + opt + '_iron" value="' + market[opt].iron + '" type="text" size="6" maxlength="6"></td></tr>', c++);
    return o
  },
  returnMarketDefault: function (market) {
    var o = '';
    for (var opt in market) market.hasOwnProperty(opt) && 'd3fault' != opt && (o += '<option value="' + opt + '">' + k.market[opt].name + '</option>');
    return o
  }
};
$('div[id*="lay_castle_widget"] > ul > li').eq(1).append('<a class="widget_icon widget_icon_1" style="cursor: pointer;" id="kes_show_settings">kes</a>'),
$('#kes_show_settings').bind('click', function () {
  putSettings('content_modules')
});
var presets = $.kes('presets'),
k = presets;
$.kes('isKey', 'kes_user_settings') ? updateSettings()  : (putSettings('content_modules'), $.kes('saveKey', 'kes_user_settings', k), $.kes('isKey', 'kes_version') || $.kes('saveKey', 'kes_version', '0'));
function iterateSettings(presets, settings) {
  if (0 == Object.getOwnPropertyNames(presets).length) return settings;
  var new_settings = {
  };
  for (var i in presets) new_settings[i] = settings.hasOwnProperty(i) ? presets[i] instanceof Object && !(presets[i] instanceof Array) ? iterateSettings(presets[i], settings[i])  : settings[i] : presets[i];
  return new_settings
}
if (isNewerVersion($.kes('loadKey', 'kes_version'), version)) {
  var updated_settings = {
  };
  if ($.kes('isKey', 'kes_user_settings')) try {
    settings = $.kes('loadKey', 'kes_user_settings'),
    updated_settings = iterateSettings(presets, settings)
  } catch (e) {
    window.alert(l.adoptSettings),
    updated_settings = presets
  } else updated_settings = presets;
  $.kes('saveKey', 'kes_user_settings', updated_settings),
  updateSettings(),
  $.kes('saveKey', 'kes_version', version)
}
!function (kes) {
  kes.module.attackplaner = {
    matcher: page.match('s=tools&m=attack_planer'),
    fn: function () {
      $('input[id*="target_"]').focusin(function () {
        0 == $('#target_x, #target_y').val() && $('input[id*="target_"]').val('')
      })
    }
  }
}(kes);
!function (kes) {
  kes.module.attacks = {
    matcher: page.match('m=attacks'),
    fn: function () {
      function insertIntoRuntimeCalc() {
        k.modul.insertIntoRuntimeCalc && $('table.borderlist').eq(2).find('tr').each(function () {
          var cur = $(this);
          if (cur.find('td[class*="list"]')) {
            var children = cur.children(),
            data = '&target=' + children.eq(1).find('a:last').html() + '&source=' + children.eq(2).find('a:last').html() + '&time=' + children.eq(4).find('span').attr('time') + '&starttime=' + (new Date).getTime();
            children.eq(0).find('img').replaceWith('<a target="_blank" href="/game.php?&s=tools&m=runtime_calculator' + data + av + '"><img src="/img/command/attack.png"></a>')
          }
        })
      }
      function getPages(last, display) {
        var lastN = 'undefined' == typeof last ? 0 : last.substring(last.indexOf('&start=') + 7);
        if (display.indexOf('&start') > 0) {
          var displayN = display.substring(display.indexOf('&start=') + 7);
          return lastN > displayN ? lastN : displayN
        }
        return lastN
      }
      function createQueue(pages) {
        for (var pages = pages / 50 + 1, step = 50, url = '/game.php?s=ally&m=attacks&start=' + av, queue = [
        ], i = 0; pages > i; i++) queue.push(url + i * step);
        return queue
      }
      var table = $('table.borderlist').eq(2);
      table.before('<span class="click" id="kes_allAttacks">' + arrow + ' (kes) ' + l.loadAllAttacks + '<br /><br /></span>');
      var lastPage = $('table.borderlist').eq(2).find('a[href*="attacks&start"]:last').attr('href'),
      display = document.URL,
      pages = getPages(lastPage, display),
      pageQueue = createQueue(pages);
      if (queueLength = pageQueue.length, $('#kes_allAttacks').bind('click', function () {
        $(this).replaceWith('<span id="kes_allAttacks">' + l.loading + '... (' + (queueLength - pageQueue.length) + '/' + queueLength + ')<br /><br /></span>'),
        table.find('tr > td').parent().remove();
        var getAttacks = function (page) {
          $.ajax({
            type: 'POST',
            url: page.shift(),
            success: function (data) {
              var attacks = $(data).find('table.borderlist').eq(2).find('img').parent().parent();
              if ($('table.borderlist').eq(2).append(attacks), page.length > 0) $('#kes_allAttacks').replaceWith('<span id="kes_allAttacks">' + l.loading + '... (' + (queueLength - pageQueue.length) + '/' + queueLength + ')<br /><br /></span>'),
              getAttacks(page);
               else {
                $('#kes_allAttacks').replaceWith('<span id="kes_allAttacks">' + l.loadingFinished + '<br /><br /></span>'),
                setTimeout(function () {
                  $('#kes_allAttacks').kes('fadeOutRemove')
                }, 800),
                displayAttacksWithSeconds(2),
                insertIntoRuntimeCalc(),
                window.timersDown = [
                ],
                table.prepend('<tr style="height: 35px;"><td colspan="4"><form id="kes_filterOption"><input type="radio" name="filter" value="attacker" id="kes_filterAttacker" class="filter"> ' + l.attacker + '\t\t\t\t\t\t\t\t\t<input type="radio" id="kes_filterDefender" value="defender" name="filter" checked="checked" class="filter"> ' + l.defender + '<span style="width: 25px; display: inline-block"> </span>' + l.nameCoords + ': <input style="width: 100px;" type="text" id="kes_filterInput"> <span id="kes_attackRowCount"></span></div></td>\t\t\t\t\t\t\t\t\t<td colspan="1"><span class="click" id="kes_resetFilter">' + arrow + ' ' + l.reset + '</span></td></tr>'),
                $.kes('isKey', 'kes_lastAttackFilterInput') && $('#kes_filterInput').val($.kes('loadKey', 'kes_lastAttackFilterInput'));
                var filterAttacks = function (event) {
                  var keycodes = [
                    9,
                    16,
                    17,
                    18,
                    20,
                    33,
                    34,
                    35
                  ];
                  if (event && !(keycodes.indexOf(event.keyCode) > - 1)) {
                    var filterOption = $('#kes_filterOption').find('input[type="radio"]:checked').val(),
                    filterInput = $('#kes_filterInput').val();
                    if ('' == filterInput) 8 != event.keyCode && $('#kes_filterInput').css('border', '1px solid red').effect('pulsate', 300, function () {
                      $(this).css('border', '1px solid #CFAB65')
                    });
                     else {
                      $.kes('saveKey', 'kes_lastAttackFilterInput', filterInput);
                      var target = 'attacker' == filterOption ? 2 : 1;
                      table.find('tr:gt(1)').show().filter(function () {
                        return $(this).find('td:eq(' + target + ')').text().search(new RegExp(filterInput, 'i')) < 0
                      }).hide();
                      var attackRowCount = $('table.borderlist').eq(2).find('tr:gt(1)').filter(function () {
                        return 'none' != $(this).css('display')
                      }).length;
                      suffix = 1 != attackRowCount ? ' ' + l.attacks : ' ' + l.attack,
                      $('#kes_attackRowCount').text(attackRowCount + suffix)
                    }
                  }
                };
                $('#kes_filterInput').bind('keyup', filterAttacks),
                $('#kes_resetFilter').bind('click', function () {
                  table.find('tr:gt(1)').show()
                }),
                $('#kes_filterOption').submit(function (event) {
                  event.preventDefault()
                }),
                filterAttacks()
              }
            }
          })
        };
        getAttacks(pageQueue)
      }), displayAttacksWithSeconds(2), insertIntoRuntimeCalc(), k.modul.showAttacksOnMap) {
        var display_delete = 'none';
        $.kes('isKey', 'kes_save_attacks') && (display_delete = 'inline', filterOverdueAttacks($.kes('loadKey', 'kes_save_attacks'))),
        $('table[class*="borderlist"]').eq(2).prepend('<tr><td colspan="5"><span id="kes_save_attacks" class="click kes_mark">' + l.saveAttacks + '</span> \t\t\t\t\t<span id="kes_save_attacks_success" style="display: none; color: green;"> ' + l.saved + '!</span> \t\t\t\t\t<span style="display: ' + display_delete + ';" class="click kes_mark" id="kes_delete_attacks">' + l.resetSavedAttacks + '</td></tr>'),
        $('#kes_save_attacks').bind('click', function () {
          var kes_attacks = {
          };
          $('table[class*="borderlist"]').eq(2).find('tr > td[class*="list"]').parent().each(function () {
            var attack = $(this).find('td'),
            def_attack_name = attack.eq(0).text(),
            def_villageId = attack.eq(1).find('a[href*="info_village"]').attr('href');
            def_villageId = def_villageId.substring(def_villageId.lastIndexOf('id=') + 3);
            var off_player = attack.eq(2).find('a[href*="info_player"]').html(),
            off_playerId = attack.eq(2).find('a[href*="info_player"]').attr('href');
            off_playerId = off_playerId.substring(off_playerId.lastIndexOf('id=') + 3);
            var off_village = attack.eq(2).find('a[href*="info_village"]').html(),
            off_villageId = attack.eq(2).find('a[href*="info_village"]').attr('href');
            off_villageId = off_villageId.substring(off_villageId.lastIndexOf('id=') + 3);
            var off_ally = '-',
            off_allyId = '-';
            attack.eq(2).find('a[href*="info_ally"]').html() && (off_ally = attack.eq(2).find('a[href*="info_ally"]').html(), off_allyId = attack.eq(2).find('a[href*="info_ally"]').attr('href'), off_allyId = off_allyId.substring(off_allyId.lastIndexOf('id=') + 3)),
            '' != av && (def_villageId = def_villageId.replace(av, ''), off_playerId = off_playerId.replace(av, ''), off_villageId = off_villageId.replace(av, ''), off_allyId = off_allyId.replace(av, ''));
            var attack_timeleft = attack.eq(4).find('span').attr('time');
            attack_timeleft = Date.parse(new Date) / 1000 + parseInt10(attack_timeleft),
            single_attack = {
              0: off_player,
              1: off_playerId,
              2: off_village,
              3: off_villageId,
              4: off_ally,
              5: off_allyId,
              6: attack_timeleft,
              7: def_attack_name
            },
            kes_attacks.hasOwnProperty(def_villageId) ? (kes_attacks[def_villageId].length = kes_attacks[def_villageId].length + 1, kes_attacks[def_villageId][kes_attacks[def_villageId].length] = single_attack)  : (kes_attacks[def_villageId] = {
            }, kes_attacks[def_villageId].length = 0, kes_attacks[def_villageId][kes_attacks[def_villageId].length] = single_attack)
          }),
          $.kes('saveKey', 'kes_save_attacks', kes_attacks),
          $('#kes_save_attacks_success').fadeIn('slow').fadeOut('fast')
        }),
        $('#kes_delete_attacks').bind('click', function () {
          $(this).fadeOut('slow'),
          $.kes('deleteKey', 'kes_save_attacks')
        })
      }
    }
  }
}(kes);
css += '.kes_toggle_sim { cursor: pointer; width: 25px; text-align: center; }',
function (kes) {
  kes.module.barracks = {
    matcher: page.match('s=build_barracks'),
    fn: function () {
      function fillInUnits(troops) {
        for (var unit in unit_runtime) if (unit_runtime.hasOwnProperty(unit)) {
          var avail = $('input[name="' + unit + '"]').siblings('span').html().replace(/[\(\)\.]/g, '');
          $('input[name="' + unit + '"]').val(parseInt10(troops[unit]) < parseInt10(avail) ? troops[unit] : avail)
        }
      }
      function insertAll(elem) {
        elem.each(function () {
          $(this).prev('input').val($(this).text().replace(/[\(\)\.]/g, ''))
        })
      }
      if (identifyActiveTab('&m=command')) page.match('sub=send') ? $('select[name*="kata_target"]').val(k.kata_select)  : ($('input[id*="send_"]').focusin(function () {
        0 == $('#send_x, #send_y').val() && $('input[id*="send_"]').val('')
      }).focusout(function () {
        '' == $('#send_x, #send_y').val() && $('input[id*="send_"]').val('0')
      }), 0 == $('div[class*="button favourites"]').length ? ($('td[valign="top"] > span[class="click"]').eq(2).before('<span class="click" id="kes_insertAll">' + arrow + ' ' + l.selectAll + '</span><br />'), $('#kes_insertAll').bind('click', function () {
        insertAll($('table[class*="borderlist"]').eq(2).find('td > span'))
      }), k.modul.trooplinks && $('table.borderlist').eq(2).after(displayTrooplinks()))  : ($('div[class*="boxOptions"]').append('<div class="awesome-button" style="left: 409px; position: absolute; test-align: center; top: 90px;  width: 120px; text-align:center;"><span style="color: #FCD87E;" id="kes_insertAll">' + l.selectAll + '</span></div>'), $('#kes_insertAll').bind('click', function () {
        insertAll($('div[class*="quantity"] > span'))
      }), k.modul.trooplinks && $('div.boxOptions').before(displayTrooplinks())), $('span.kes_mark').click(function () {
        var number = $(this).attr('id');
        fillInUnits(k.trooplinks[number.substring(number.indexOf('kes_trooplink_') + 14)])
      }));
       else if (k.modul.massdisband && page.match('m=massdisband')) $(document).ready(function () {
        $('input[id*="fillOutButton"]').replaceWith('<input id="kes_disband" type="submit" value="(kes) ' + l.fillIn + '">'),
        $('input#kes_disband').click(function () {
          var wanted_units = [
          ];
          $('form#groupFilloutOption > table').find('input[id*="group"]').each(function () {
            var unit = $(this).attr('id').replace('group-', '');
            wanted_units[unit] = $(this).val()
          }),
          $('table#massDisbandTable > tbody > tr').each(function () {
            $(this).find('td > span[class*="click"]').parent().each(function () {
              var elem = $(this).find('input[id*="amount_"]'),
              unit = $(elem).attr('id');
              unit = unit.substring(unit.indexOf('_') + 1, unit.lastIndexOf('_'));
              var amount = $(elem).attr('value');
              parseInt10(amount) > parseInt10(wanted_units[unit]) && $(this).find('input[id*="disband_"]').val(parseInt10(amount) - parseInt10(wanted_units[unit]))
            })
          })
        })
      });
       else if (identifyActiveTab('&type=sim_battle')) {
        var cell = $('form[name="kingsage"] > table.borderlist > tbody > tr:last'),
        cellText = cell.find('td:first').text(),
        minus25 = '<span id="minus25" class="click">-25%</span>',
        plus25 = '<span id="plus25" class="click">+25%</span>';
        cell.find('td:first').html(cellText.replace('-25%', minus25).replace('+25', plus25)),
        $('#minus25, #plus25').click(function () {
          var rel = $(this).html().replace('%', '');
          cell.find('td:last > input').val(rel)
        }),
        k.modul.simulator && page.match('inta=battle') && ($('table.borderlist').slice(1, 4).find('tr:first').prepend('<td class="kes_toggle_sim" rowspan="4">&raquo;</td>'), $('table.borderlist').slice(1, 4).find('tr').each(function () {
          $(this).find('td > span, th > img').each(function () {
            $(this).parent().addClass('kes_toggle');
            var unit_long = $(this).attr('title');
            unit_long && (unit_long = unit_long.substring(0, unit_long.indexOf(' ')), $(this).html(unit_long))
          }),
          $(this).find('th:gt(11), td:gt(11)').css('display', 'none').addClass('k_toggle').removeClass('kes_toggle')
        }), $('.kes_toggle_sim').hover(function () {
          $(this).addClass('marked')
        }, function () {
          $(this).removeClass('marked')
        }), $('.kes_toggle_sim').bind('click', function () {
          $('.kes_toggle, .k_toggle').toggle()
        }))
      }
    }
  }
}(kes);
!function (kes) {
  kes.module.forum = {
    matcher: k.modul.bbCodeExport && page.match('s=ally&m=forum'),
    fn: function () {
      $('iframe[src*="forum.php"]').load(function () {
        var iframeURL = $('iframe[src*="forum.php"]').get(0).contentDocument.location.href;
        if (iframeURL.match('s=forum_thread' + av + '&thread_id=')) {
          var frame = $('iframe[src*="forum.php"]').contents();
          $(frame).find('div.smallButton:first').before('<div id="kes_save_thread" class="smallButton"><span style="cursor: pointer;">(kes) ' + l.saveThread + '</span></div>'),
          $(frame).find('#kes_save_thread').bind('click', function () {
            $(this).fadeOut().fadeIn();
            var uri = $('iframe[src*="forum.php"]').contents().find('td.headerInfo > a').attr('href'),
            threadId = uri.substring(uri.indexOf('thread_id=') + 10),
            threadName = $('iframe[src*="forum.php"]').contents().find('td.headerInfo > a').html();
            '' != av && (threadId = threadId.replace(av, ''));
            var obj = {
              id: threadId,
              name: threadName
            };
            $.kes('saveKey', 'kes_thread', obj)
          })
        }
      })
    }
  }
}(kes);
css += '#kes_box { background-color: #fff; display: none; border-radius: 5px; position: fixed; width: 500px; left: 50%; top: 5%; margin-left: -250px; padding: 6px; z-index: 200; }',
css += '.kes_progressOuter { border:1px solid #CFAB65; overflow: hidden; width:100px; height:10px; background: #CFAB65; }',
css += '.kes_progressInner { width: 0px; height: 10px; background: #FFCC6E; }',
function (kes) {
  kes.module.infoally = {
    matcher: page.match('s=info_ally') && !premium || identifyActiveTab('s=info_ally&m=profile'),
    fn: function () {
      function getPlayerInfo(members, callback) {
        var href = members.shift();
        $.ajax({
          type: 'POST',
          url: href,
          success: function (data) {
            callback(members, data)
          }
        })
      }
      var cachedTable = $('table.borderlist').eq(2);
      cachedTable.append('<tr><td colspan="2"><span class="click" id="kes_getAllyTroopPoints">' + l.allyTrooppoints + '</span></td></tr>'),
      $('#kes_getAllyTroopPoints').bind('click', function () {
        $(this).unbind('click').fadeOut();
        var membersPage = cachedTable.find('a[href*="info_member"]').attr('href');
        $.when($.ajax({
          type: 'POST',
          url: membersPage
        }).then(function (data) {
          function getAllPlayerInfos(members, callback) {
            function callQueue(members) {
              getPlayerInfo(members, function (members, playerInfo) {
                var player = [
                ],
                playerName = $(playerInfo).find('h1').eq(1).text();
                playerName = playerName.substring(playerName.indexOf(' ') + 1),
                playerName = playerName.replace(/\(.*\)/, '').trim(),
                player.push(playerName),
                player.push(calculateTroopScore(playerInfo)),
                i++,
                $('#kes_getAllyTroopPoints').text(l.loading + ': ' + i + '/' + len),
                $('#kes_progress').css({
                  width: i * (100 / len) + '%'
                }),
                allyTroopPoints.push(player),
                0 === --left ? ($('#kes_getAllyTroopPoints').parent().parent().remove(), callback(allyTroopPoints))  : callQueue(members)
              })
            }
            var allyTroopPoints = [
            ],
            len = members.length,
            left = len,
            i = 0;
            $('#kes_getAllyTroopPoints').removeClass('click').text(l.loading + ': ' + i + '/' + len).fadeIn().parent().attr('colspan', 0).after('<td><div class="kes_progressOuter"><div id="kes_progress" class="kes_progressInner" maxwidth="100"></div></div></td>'),
            callQueue(members)
          }
          function showData(allyTroopPoints) {
            function getDataReady(lineStart, lineMiddle, lineEnd, data) {
              var i,
              percentage,
              divider,
              o = '',
              len = data.length;
              for (i = 0; len > i; i++) divider = 0 == data[i][1][1] ? 100 : data[i][1][1],
              percentage = data[i][1][0] / divider * 100,
              o += lineStart + data[i][0] + lineMiddle + $.kes('prettyNumber', data[i][1][0]) + ' (' + percentage.toFixed(2) + '%)';
              return o + lineEnd
            }
            allyTroopPoints.sort(function (a, b) {
              return b[1][0] - a[1][0]
            });
            var o = arrow + ' <span class="click" id="kes_createBB">(kes) ' + l.bbCode + '</span><table class="borderlist" style="width: 420px;">';
            o += '<tr><th>' + l.player + '</th><th>' + l.trooppoints + '</th></tr>',
            o += getDataReady('<tr><td>', '</td><td>', '</td></tr>', allyTroopPoints),
            o += '</table><br />',
            $('table.borderlist').eq(3).before(o),
            $('#kes_createBB').bind('click', function () {
              $('body').append('<div id="kes_box"><textarea style="width: 99%; resize: none;" id="kes_data"></textarea></div><div id="kes_overlay" class="kes-backlight"></div>'),
              $('#kes_data').text(getDataReady('[player]', '[/player] ', '\n', allyTroopPoints)).select(),
              $('#kes_overlay').fadeIn().bind('click', function () {
                $('#kes_overlay, #kes_box').kes('fadeOutRemove')
              }),
              $('#kes_box').fadeIn(),
              $('#kes_data').kes('resizeTextarea')
            })
          }
          var members = [
          ];
          $(data).find('table.borderlist').eq(2).find('a[href*="info_player"]').each(function () {
            members.push($(this).attr('href'))
          }),
          getAllPlayerInfos(members, showData)
        }))
      })
    }
  }
}(kes);
css += 'tr.kes_selected td { background: url("img/layout/bg_table_cell_marked2.jpg") repeat-x scroll 0 0 transparent !important; }',
css += '.unselectable { user-select: none; -moz-user-select: none; -khtml-user-select: none; }',
css += '.kes_remove_selection { display: inline; background-color: #fff; cursor: pointer; position: relative; float: right; z-index: 150; color: crimson; font-weight: bold; }',
css += '#kes_showSelectedSetts { position: fixed; background: #FFF; font-size: 10pt; border-radius: 5px; padding: 5px; z-index: 200; top: 10%; left: 50%; margin-left: -310px; width: 620px; max-height: 85%; overflow-y: auto; }',
function (kes) {
  kes.module.infoplayer = {
    matcher: page.match('s=info_player') && !(page.match('m=statistics') || page.match('m=conquers')),
    fn: function () {
      var post_details = {
        settlementName: 'kes_settname',
        nick: 'kes_player',
        village: 'kes_coords',
        continent: 'kes_continent',
        points: 'kes_points'
      };
      post_details.std_input = post_details.village,
      k.modul.bbCodeExport && ($('table.borderlist').eq(3).prepend('<tr><th colspan="3"><span class="click" id="kes_enablebbCodeExport">' + arrow + ' (kes) ' + l.enableBBCodeExport + '</span></th></tr>'), $('#kes_enablebbCodeExport').bind('click', function () {
        function getKontinent(koords) {
          return koords.substring(4, 5) + koords.substring(0, 1)
        }
        if ($(this).parent().parent().replaceWith('<tr><th colspan="3">' + l.exportBBCode + '</td></tr><tr><td id="kes_threadId_avail" colspan="3"></td></tr><tr><td colspan="2">\t\t\t\t\t<input type="radio" value="kontinent" name="kes_sel_setts"><span style="vertical-align: bottom; display: inline-block; width: 100px;">' + l.sortContinent + '</span>\t\t\t\t\t<input type="radio" value="koords" name="kes_sel_setts" checked="checked"><span style="vertical-align:bottom">' + l.sortCoords + '</span></td><td></td></tr><td colspan="2">\t\t\t\t\t<input type="radio" value="points" name="kes_sel_setts"><span style="vertical-align: bottom; display: inline-block; width: 100px">' + l.sortPoints + '</span>\t\t\t\t\t<input type="radio" value="name" name="kes_sel_setts"><span style="vertical-align: bottom">' + l.sortName + '</span></td><td><input type="submit" id="kes_sel_setts_submit" value="' + l.bbCode + '"></td></tr>\t\t\t\t\t<tr><td colspan="3"><span class="click kes_mark" id="kes_select_all">' + arrow + ' ' + l.selectAll + '</span> <span class="click kes_mark" id="kes_deselect_all">' + arrow + ' ' + l.deselectAll + '</span></td></tr>'), $('table.borderlist').eq(3).prepend(''), $('table.borderlist').eq(3).addClass('unselectable'), $.kes('isKey', 'kes_thread')) {
          var thread = $.kes('loadKey', 'kes_thread');
          threadName = thread.name,
          $('#kes_threadId_avail').html('<span style="color: green; font-weight: bold;">' + l.thread + ' "' + threadName + '" ' + l.selected + '.</span>')
        } else $('#kes_threadId_avail').html('<span style="color: crimson; font-weight: bold;">' + l.goChooseThread + '.</span>');
        $(document).ready(function () {
          $.fn.selectSettlement = function () {
            $(this).hasClass('kes_selected') || $(this).addClass('kes_selected').find('td:first').find('a, img').css('float', 'left').end().append('<div class="kes_remove_selection"><div style="position: absolute; right: 0;">' + l.deselect + '</div></div>')
          };
          var selectable = !1;
          $('table.borderlist').eq(3).find('tr:gt(5)').mousedown(function () {
            selectable = !0
          }).mouseup(function () {
            selectable = !1
          }).mousemove(function () {
            selectable && $(this).selectSettlement()
          }).click(function () {
            $(this).selectSettlement()
          }),
          $('.kes_remove_selection').live('click', function () {
            $(this).parent().parent().removeClass('kes_selected').end().end().fadeOut().remove()
          })
        }),
        $('#kes_select_all').bind('click', function () {
          $(this).fadeOut().fadeIn(),
          $('table.borderlist').eq(3).find('tr:gt(5)').each(function () {
            $(this).selectSettlement()
          })
        }),
        $('#kes_deselect_all').bind('click', function () {
          $(this).fadeOut().fadeIn(),
          $('table.borderlist').eq(3).find('tr:gt(5)').each(function () {
            $(this).removeClass('kes_selected').find('td:first > div').remove()
          })
        }).fadeOut().fadeIn(),
        $('#kes_sel_setts_submit').bind('click', function () {
          function formatOutput(sett, r) {
            var o = r;
            return o = o.replace(new RegExp('{' + post_details.nick + '}', 'g'), ' ' + sett.nick),
            o = o.replace(new RegExp('{' + post_details.settlementName + '}', 'g'), ' ' + sett.sett),
            o = o.replace(new RegExp('{' + post_details.village + '}', 'g'), ' [village]' + sett.pos + '[/village]'),
            o = o.replace(new RegExp('{' + post_details.continent + '}', 'g'), ' K' + sett.continent),
            o = o.replace(new RegExp('{' + post_details.points + '}', 'g'), ' ' + sett.points)
          }
          function confirmPost(setts, playerName, threadName, threadId, settsPerPosts) {
            function updatePreview() {
              $('#kes_post_preview').html($('#kes_post_top').val() + '<br />' + formatOutput({
                pos: 'xxx|yyy',
                continent: 'YX',
                points: '10000',
                sett: l.settlement,
                nick: l.player
              }, $('#kes_post_body').val()) + '<br />[...]<br />' + $('#kes_post_footer').val())
            }
            var postCount = Math.ceil(setts.length / parseInt(settsPerPosts, 10));
            $('body').append('<div id="kes_overlay" class="kes-backlight" style="display: block !important;"><h3 style="color: white; text-align:left; opacity: 1; margin: 1em;">' + l.close + '</h3></div>\t\t\t\t\t\t\t\t\t\t<div id="kes_showSelectedSetts">\t\t\t\t\t\t\t\t\t\t\t<div style="line-height: 1.1; text-align: left; width: 50%; margin: 0; float: left; border-right: 1px solid #DDD;">\t\t\t\t\t\t\t\t\t\t\t\t<h3>' + l.summary + ':</h3>\t\t\t\t\t\t\t\t\t\t\t\t' + l.postIn + ' "' + threadName + '" (<a href="/forum.php?s=forum_thread&thread_id=' + threadId + av + '" target="_blank">' + threadId + '</a>)<br /> ' + l.player + ': ' + playerName + '<br />\t\t\t\t\t\t\t\t\t\t\t\t' + l.amountOfSetts + ': ' + setts.length + '<br />' + printf(l.postsToBeCreated, postCount) + '<br /><br />\t\t\t\t\t\t\t\t\t\t\t\t<h3>' + l.formatting + ':</h3>\t\t\t\t\t\t\t\t\t\t\t\t<h4>' + l.header + ':</h4><textarea style="min-width: 290px; max-width: 290px; min-height: 60px; max-height: 60px;" id="kes_post_top"></textarea>\t\t\t\t\t\t\t\t\t\t\t\t<h4>' + l.settlementDisplay + ':</h4>\t\t\t\t\t\t\t\t\t\t\t\t<span class="kes_input click">{' + post_details.nick + '}</span>, <span class="kes_input click">{' + post_details.settlementName + '}</span>, <span class="kes_input click">{' + post_details.village + '}</span>, \t\t\t\t\t\t\t\t\t\t\t\t<span class="kes_input click">{' + post_details.continent + '}</span>, <span class="kes_input click">{' + post_details.points + '}</span><br />\t\t\t\t\t\t\t\t\t\t\t\t<textarea style="min-width: 297px; max-width: 297px; min-height: 90px; max-height: 90px;" id="kes_post_body">{' + post_details.std_input + '}</textarea>\t\t\t\t\t\t\t\t\t\t\t\t<h4>' + l.footer + ':</h4><textarea style="min-width: 290px; max-width: 290px;min-height: 60px; max-height: 60px; height: 60px;" id="kes_post_footer"></textarea>\t\t\t\t\t\t\t\t\t\t\t\t<input id="confirm_post_submit" type="submit" value="' + l.confirm + '">\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div style="line-height: 1.1; text-align: left; padding-left: 3px; width: 49%; margin: 0; float: right;">\t\t\t\t\t\t\t\t\t\t\t<h3>' + l.preview + ':</h3><span id="kes_post_preview"></span>\t\t\t\t\t\t\t\t\t\t\t</div></div>'),
            updatePreview(),
            $('.kes_input').bind('click', function () {
              $('#kes_post_body').val($('#kes_post_body').val() + $(this).html()),
              updatePreview()
            }),
            $('textarea[id*="kes_post_"]').keyup(function () {
              updatePreview()
            }),
            $('.kes-backlight').bind('click', function () {
              $('.kes-backlight, #kes_showSelectedSetts').fadeOut().remove(),
              $('.kes_input').unbind('click')
            }),
            $('#confirm_post_submit').bind('click', function () {
              function makePost(threadId) {
                var single = data.shift();
                $.ajax({
                  type: 'post',
                  url: '/forum.php?s=forum_thread&thread_id=' + threadId + '&a=forumReplyThread' + av,
                  data: 'text=' + single,
                  complete: function () {
                    data.length > 0 && makePost(threadId)
                  }
                })
              }
              for (var top = $('#kes_post_top').val(), format = $('#kes_post_body').val(), footer = $('#kes_post_footer').val(), output = top + '\n' + playerName + '\n', count = 0, data = [
              ], i = 0; i < setts.length; i++) output += formatOutput(setts[i], format) + '\n',
              count++,
              (count == settsPerPosts || i == setts.length - 1) && (output += footer, data.push(output), output = top + '\n' + playerName + '\n', count = 0);
              makePost(threadId),
              $('.kes_overlay').click()
            })
          }
          function sortKoords(a, b) {
            var xya = a.pos.split('|'),
            xyb = b.pos.split('|'),
            a = xya[0] + xya[1],
            b = xyb[0] + xyb[1];
            return a - b
          }
          function sortKontinents(a, b) {
            var xya = a.pos.split('|'),
            xyb = b.pos.split('|'),
            a = 1000 * a.continent + (xya[0] + xya[1]),
            b = 1000 * b.continent + (xyb[0] + xyb[1]);
            return a - b
          }
          function sortSetts(setts, mode) {
            switch (mode) {
              case 'kontinent':
                return setts.sort(sortKontinents);
              case 'points':
                return setts.sort(function (a, b) {
                  return a.points - b.points
                });
              case 'koords':
                return setts.sort(sortKoords);
              default:
                return setts
            }
          }
          if ($.kes('isKey', 'kes_thread')) {
            var thread = $.kes('loadKey', 'kes_thread'),
            threadName = thread.name,
            mode = $('input[name="kes_sel_setts"]:checked').val(),
            threadId = thread.id;
            playerName = $('table.borderlist').eq(2).find('tr:first').text().trim(),
            playerName = playerName.substring(playerName.indexOf(':') + 1),
            playerName = $.trim(playerName);
            var setts = [
            ];
            $('table.borderlist').eq(3).find('tr.kes_selected').each(function () {
              var settlementName = $(this).find('td:first > a').html(),
              xy = $(this).find('td:nth-child(2) > a').html(),
              x = parseInt10(xy.split('|') [0]),
              y = parseInt10(xy.split('|') [1]),
              k = getKontinent(xy),
              p = $(this).find('td:nth-child(3)').html();
              p = p.replace(/\./g, ''),
              setts.push({
                pos: x + '|' + y,
                continent: k,
                points: p,
                sett: settlementName,
                nick: playerName
              })
            }),
            confirmPost(sortSetts(setts, mode), playerName, threadName, threadId, 200)
          } else window.alert(l.chooseThreadFirst + '.')
        })
      })); var troopScore = calculateTroopScore($('body')); $('table.borderlist').eq(2).append('<tr><td>' + l.trooppoints + ':</td><td>' + $.kes('prettyNumber', troopScore[0]) + ' (' + (troopScore[0] / troopScore[1] * 100).toFixed(2) + '%)</td></tr>')
    }
  }
}(kes);
!function (kes) {
  kes.module.infovillages = {
    matcher: page.match('s=info_village'),
    fn: function () {
      var target = $('a[href*="&s=build_barracks&m=command&target="]').attr('href'),
      id = Query.id,
      player = $('a[href*="info_player&"]').text();
      self.match(player) && '' != player ? $('a[href*="edit_player_colors"]').after('<br /><span><a href="/game.php?village=' + id + '&s=build_barracks' + av + '">' + arrow + ' ' + l.goToBarracks + '</a></span><br />\t\t\t\t\t<span><a href="/game.php?village=' + id + '&s=build_main' + av + '">' + arrow + ' ' + l.goToMain + '</a></span>')  : $('a[href*="&s=build_barracks&m=command&target="]').after('<br /><a href="' + target + '&spy=' + k.spylink_amount + '">' + arrow + ' ' + printf(l.attackWithSpies, k.spylink_amount) + '</a>')
    }
  }
}(kes);
!function (kes) {
  kes.module.main = {
    matcher: page.match('s=build_main'),
    fn: function () {
      var destroyText = $('a[href*="m=destroy"]').text(),
      tableCount = $('table.borderlist'),
      isModernView = $('div.mainBuildList, div.mainBuildModern').length;
      if (tableCount.length == 6 - isModernView) {
        var buildList = tableCount.eq(2),
        destroyList = $.makeArray(buildList.find('tr > td').parent().filter(function () {
          return $(this).find('td:first').text().match(destroyText)
        }));
        destroyList.length > 0 && '' != destroyText && (buildList.before('<span class="click" id="kes_cancelAllDestroy">(kes) ' + l.cancelAllDestroy + '</span><br />'), $('#kes_cancelAllDestroy').bind('click', function () {
          function cancelDestroy(destroyList, callback) {
            var that = $(destroyList.shift()),
            link = that.find('a[href*="cancelBuilding"]').attr('href');
            $.ajax({
              type: 'post',
              url: link,
              success: function () {
                that.kes('fadeOutRemove'),
                0 == destroyList.length && 1 == buildList.length ? buildList.kes('fadeOutRemove')  : callback(destroyList, callback)
              }
            })
          }
          $(this).kes('fadeOutRemove'),
          cancelDestroy(destroyList, cancelDestroy)
        }))
      }
      if (k.modul.massbuild && premium) {
        var buildCosts = {
          main: {
            min: 1,
            max: 50,
            stone: {
              b: 85,
              f: 1.17
            },
            wood: {
              b: 70,
              f: 1.165
            },
            ore: {
              b: 65,
              f: 1.165
            },
            workers: {
              b: 2,
              f: 1.12
            }
          },
          wood: {
            min: 0,
            max: 50,
            stone: {
              b: 55,
              f: 1.17
            },
            wood: {
              b: 30,
              f: 1.165
            },
            ore: {
              b: 40,
              f: 1.165
            },
            workers: {
              b: 5,
              f: 1.1
            }
          },
          stone: {
            min: 0,
            max: 50,
            stone: {
              b: 40,
              f: 1.17
            },
            wood: {
              b: 30,
              f: 1.165
            },
            ore: {
              b: 55,
              f: 1.165
            },
            workers: {
              b: 5,
              f: 1.1
            }
          },
          iron: {
            min: 0,
            max: 50,
            stone: {
              b: 55,
              f: 1.17
            },
            wood: {
              b: 40,
              f: 1.165
            },
            ore: {
              b: 30,
              f: 1.165
            },
            workers: {
              b: 5,
              f: 1.1
            }
          },
          storage: {
            min: 1,
            max: 50,
            stone: {
              b: 43,
              f: 1.17
            },
            wood: {
              b: 40,
              f: 1.165
            },
            ore: {
              b: 35,
              f: 1.165
            },
            workers: {
              b: 0.1,
              f: 1.1
            }
          },
          hide: {
            min: 0,
            max: 30,
            stone: {
              b: 50,
              f: 1.17
            },
            wood: {
              b: 40,
              f: 1.165
            },
            ore: {
              b: 40,
              f: 1.165
            },
            workers: {
              b: 1,
              f: 1.15
            }
          },
          farm: {
            min: 1,
            max: 50,
            stone: {
              b: 65,
              f: 1.17
            },
            wood: {
              b: 50,
              f: 1.165
            },
            ore: {
              b: 50,
              f: 1.16
            },
            workers: {
              b: 0,
              f: 1
            }
          },
          barracks: {
            min: 0,
            max: 30,
            stone: {
              b: 180,
              f: 1.23
            },
            wood: {
              b: 180,
              f: 1.21
            },
            ore: {
              b: 120,
              f: 1.22
            },
            workers: {
              b: 6,
              f: 1.17
            }
          },
          wall: {
            min: 1,
            max: 20,
            stone: {
              b: 60,
              f: 1.17
            },
            wood: {
              b: 40,
              f: 1.165
            },
            ore: {
              b: 30,
              f: 1.16
            },
            workers: {
              b: 4,
              f: 1.2
            }
          },
          stable: {
            min: 0,
            max: 30,
            stone: {
              b: 240,
              f: 1.17
            },
            wood: {
              b: 200,
              f: 1.165
            },
            ore: {
              b: 220,
              f: 1.16
            },
            workers: {
              b: 10,
              f: 1.1
            }
          },
          market: {
            min: 0,
            max: 30,
            stone: {
              b: 100,
              f: 1.17
            },
            wood: {
              b: 80,
              f: 1.165
            },
            ore: {
              b: 70,
              f: 1.16
            },
            workers: {
              b: 10,
              f: 1.17
            }
          },
          garage: {
            min: 0,
            max: 5,
            stone: {
              b: 400,
              f: 1.17
            },
            wood: {
              b: 600,
              f: 1.165
            },
            ore: {
              b: 500,
              f: 1.16
            },
            workers: {
              b: 50,
              f: 1.4
            }
          },
          snob: {
            min: 0,
            max: 10,
            stone: {
              b: 30000,
              f: 1.3
            },
            wood: {
              b: 25000,
              f: 1.3
            },
            ore: {
              b: 25000,
              f: 1.3
            },
            workers: {
              b: 100,
              f: 1.2
            }
          },
          smith: {
            min: 0,
            max: 5,
            stone: {
              b: 4000,
              f: 1.4
            },
            wood: {
              b: 3000,
              f: 1.4
            },
            ore: {
              b: 2500,
              f: 1.4
            },
            workers: {
              b: 25,
              f: 1.2
            }
          },
          statue: {
            min: 0,
            max: 1,
            stone: {
              b: 400000,
              f: 2
            },
            wood: {
              b: 400000,
              f: 2
            },
            ore: {
              b: 400000,
              f: 2
            },
            workers: {
              b: 0,
              f: 1.17
            }
          },
          cost: function (building, level) {
            var stone = 0,
            wood = 0,
            ore = 0,
            workers = 0;
            return 'number' == typeof level && level <= building.max && level >= building.min && (stone = Math.round(building.stone.b * Math.pow(building.stone.f, level - 1)), wood = Math.round(building.wood.b * Math.pow(building.wood.f, level - 1)), ore = Math.round(building.ore.b * Math.pow(building.ore.f, level - 1)), workers = Math.round(building.workers.b * Math.pow(building.workers.f, level - 1))),
            [
              stone,
              wood,
              ore,
              workers
            ]
          },
          cumulatedCost: function (building, min, max) {
            for (var stone = 0, wood = 0, ore = 0, workersLow = this.cost(building, min) [3], workersHigh = this.cost(building, max) [3], i = min + 1; max >= i; i++) cost = this.cost(building, i),
            stone += cost[0],
            wood += cost[1],
            ore += cost[2];
            return [stone,
            wood,
            ore,
            workersHigh - workersLow]
          },
          getMaximumLevel: function (building, level, stone, wood, iron, workers) {
            var max = building.max,
            min = level,
            available = [
              stone,
              wood,
              iron,
              workers
            ],
            canBuild = function (cumulated, available) {
              return cumulated[0] <= available[0] && cumulated[1] <= available[1] && cumulated[2] <= available[2] && cumulated[3] <= available[3]
            },
            addCost = function (n, o) {
              return [n[0] + o[0],
              n[1] + o[1],
              n[2] + o[2],
              n[3]]
            },
            maxCost = this.cumulatedCost(building, min, max);
            if (canBuild(maxCost, available)) return [max - min].concat(maxCost);
            for (var high = max - 1, low = min, lowCost = this.cumulatedCost(building, low, low + 1), lastCost = lowCost, i = low + 1; high >= low; i++) {
              var tmpCost = addCost(this.cost(building, i), lastCost);
              if (!canBuild(tmpCost, available)) return [i - low].concat(lastCost);
              lastCost = tmpCost
            }
          }
        };
        $('a[href*="&s=build_main&a=buildBuilding"]').each(function () {
          var current = $(this),
          row = current.parent().parent(),
          level = parseInt(current.text().match(/\d{1,2}/), 10) - 1 || 0,
          building = current.attr('href');
          building = $.kes('getUrlParameters', building).build;
          var stone,
          wood,
          ore,
          workers,
          link,
          modernStyling = isModernView > 0 ? 'style="color: #F7D48E;" ' : '',
          maximumLevel = buildCosts.getMaximumLevel(buildCosts[building], level, $('#stone').text().replace('.', ''), $('#wood').text().replace('.', ''), $('#iron').text().replace('.', ''), $('a[href*="&s=build_farm"]:first').parent().find('span').text().replace('.', '')),
          data = row.find('td');
          0 == data.length ? (stone = row.find('.res2'), wood = row.find('.res1'), ore = row.find('.res3'), workers = row.find('.workers'), link = row.find('.button'))  : (stone = data.eq(1), wood = data.eq(2), ore = data.eq(3), workers = data.eq(4), link = data.eq(6)),
          stone = stone.find('span').text($.kes('prettyNumber', maximumLevel[1])),
          wood = wood.find('span').text($.kes('prettyNumber', maximumLevel[2])),
          ore = ore.find('span').text($.kes('prettyNumber', maximumLevel[3])),
          workers = workers.find('span').text($.kes('prettyNumber', maximumLevel[4]));
          var replacement = '<a ' + modernStyling + 'href="' + current.attr('href') + '">' + l.buildOne + '</a> ';
          replacement += '<input type="text" maxlength="2" style="width: 17px;" data-max="' + maximumLevel[0] + '" class="kes_buildLevels" value="' + maximumLevel[0] + '"> ',
          replacement += '<span ' + modernStyling + 'class="click kes_massbuild" data-url="' + current.attr('href') + '">' + l.buildMax + '</span>',
          current.replaceWith(replacement)
        }),
        $('.contentpane').on('click', '.kes_massbuild', function () {
          var url = $(this).data('url');
          max = $(this).siblings('input').data('max'),
          levels = $(this).siblings('input').val(),
          levels = levels > max ? max : levels;
          for (var i = 0; levels > i; i++) $.kes('queue', {
            type: 'post',
            url: url,
            success: function (data) {
              var content = $(data).find('.contentpane');
              $('.contentpane').replaceWith(content)
            }
          })
        })
      }
    }
  }
}(kes);
css += '#kes_show_attack_info { position: fixed; z-index: 150; box-shadow: 1px 1px 5px #000; display: none; top: 5px; left: 5px; min-width: 250px; max-width: 350px; background-color: #fff; opacity: .9; }',
css += '#kes_errorbox { position: fixed; width: 500px; z-index: 150; box-shadow: 1px 1px 5px rgb(0, 0, 0); line-height: 1.2; text-align: left; padding:5px; top: 25px; left: 25px; color: #fff; font-size: 11pt; background-color: #871919; }',
css += '.kes_hastroops { position: absolute; padding: 1px; border: 1px solid black; width: 10px; height: 9px; line-height: 8px; font-weight: bold; }',
css += '#kes_box { background-color: #fff; display: none; border-radius: 5px; position: fixed; width: 500px; left: 50%; top: 5%; margin-left: -250px; padding: 6px; z-index: 200; }',
function (kes) {
  kes.module.map = {
    matcher: page.match('s=map'),
    fn: function () {
      function mapStateChanges() {
        $('td[class*="occupied"] > div > a').each(function () {
          function hasTroops(troops, units, amount) {
            var result = !1,
            unit_1 = units[0],
            unit_2 = units[1];
            return 12 == parseInt10(unit_2) ? parseInt10(troops[unit_1].replace(/\./g, '')) > amount[0] - 1 && (result = !0)  : parseInt10(troops[unit_1].replace(/\./g, '')) > amount[0] - 1 && parseInt10(troops[unit_2].replace(/\./g, '')) > amount[1] - 1 && (result = !0),
            result
          }
          function drawTroops(elem, troops, modules, pos) {
            for (var m in modules) modules.hasOwnProperty(m) && modules[m] && hasTroops(troops, [
              k.units[m].one.unit,
              k.units[m].two.unit
            ], [
              k.units[m].one.amount,
              k.units[m].two.amount
            ]) && elem.append('<div class="kes_hastroops" style="background-color: ' + k.units[m].color + '; color: ' + draw.helper.getContrast(k.units[m].color.substring(1)) + '; top: ' + pos[m].top + '; right: ' + pos[m].right + ';">' + k.units[m].abbr + '</div>')
          }
          function isSettlementInGroup(meta, groups) {
            var result = !1;
            if (0 != Object.getOwnPropertyNames(groups).length) for (var item in groups) if ( - 1 != meta.indexOf(groups[item])) {
              result = !0;
              break
            }
            return result
          }
          var meta = $(this).parent().html();
          meta = meta.substring(meta.indexOf('onmouseover'), meta.indexOf('onmouseout') - 1);
          var metaSplit = meta.split(','),
          village = $(this).attr('href');
          village = village.substring(village.lastIndexOf('id=') + 3),
          '' != av && (village = village.replace(av, ''));
          var playerName = metaSplit[3].substr(2, metaSplit[3].indexOf(' (') - 2),
          isThisMe = self.match(playerName) && '' != playerName;
          if (k.modul.troopsOnMap && isThisMe && mapOptionActivated) {
            var troops = metaSplit[metaSplit.length - 4];
            troops = troops.substring(2, troops.length - 1),
            troops = troops.split(':'),
            drawTroops($(this), troops, k.units.modul, {
              def: {
                top: '2px',
                right: '2px'
              },
              off: {
                top: '2px',
                right: '15px'
              },
              count: {
                top: '14px',
                right: '2px'
              },
              spy: {
                top: '14px',
                right: '15px'
              }
            })
          }
          if (k.modul.highlightgroups && isThisMe) if (isSettlementInGroup(meta, k.highlightgroups.one.group) && $(this).attr('kes_g_one', k.highlightgroups.one.name), isSettlementInGroup(meta, k.highlightgroups.two.group) && $(this).attr('kes_g_two', k.highlightgroups.two.name), $(this).attr('kes_g_one') && $(this).attr('kes_g_two')) $(this).append('<div style="position: absolute; padding: 1px; border-radius: 5px; border: 1px solid black; background-color: #FF7F50;  bottom: 2px; left: 2px; width: 5px; height: 5px;"></div>');
           else {
            var cssMapGroups = 'position: absolute; padding: 1px; border-radius: 3px; bottom: 0px; left: 0px;';
            $(this).attr('kes_g_one') && $(this).append('<div style="' + cssMapGroups + ' background-color:' + k.highlightgroups.one.color + '; color: ' + draw.helper.getContrast(k.highlightgroups.one.color.substring(1)) + ';"><span>' + $(this).attr('kes_g_one') + '</span></div>'),
            $(this).attr('kes_g_two') && $(this).append('<div style="' + cssMapGroups + ' background-color:' + k.highlightgroups.two.color + '; color: ' + draw.helper.getContrast(k.highlightgroups.two.color.substring(1)) + ';"><span>' + $(this).attr('kes_g_two') + '</span></div>')
          }
          k.modul.showAttacksOnMap && saved_attacks && attacks.hasOwnProperty(village) && $(this).attr('kes_villageId', village).parent().parent().attr('attacked', 'true')
        })
      }
      var mapOptionActivated = mapOptionActivated = 'checked' == $('input[name="map_show_troups"]').attr('checked') ? !0 : !1;
      if (k.modul.troopsOnMap && !mapOptionActivated) {
        $('body').append('<div id="kes_errorbox"></div>'),
        $('#kes_errorbox').html(0 == $('input[name="map_show_troups"]').length ? l.highlighttroopsError : l.highlighttroopsActivate)
      }
      if (k.modul.showAttacksOnMap) {
        var saved_attacks = !1,
        attacks = {
        };
        $.kes('isKey', 'kes_save_attacks') && (saved_attacks = !0, attacks = $.kes('loadKey', 'kes_save_attacks'), filterOverdueAttacks(attacks))
      }
      $(document).ready(function () {
        function showAttackInformation(villageId) {
          function moreAttacks() {
            return 0 == len ? l.none : len
          }
          function showNextTwenty() {
            var o;
            if (0 == len) return '';
            o = '<span style="text-align: center;" id="kes_show_all">' + printf(l.nextAttacks, size) + '</span><table>';
            for (var i = 1; size >= i; i++) {
              var attack_info = village_attacks[i],
              y = $.kes('prettyTime', parseInt10(attack_info[6]) - Date.parse(new Date) / 1000);
              o += '<tr><td><a href="/game.php?s=info_player&id=' + attack_info[1] + av + '" target="_blank">' + attack_info[0] + '</a></td>',
              o += '<td><a href="/game.php?s=info_village&id=' + attack_info[3] + av + '" target="_blank">' + attack_info[2] + '</a></td><td><b>' + attack_info[7] + '</b></td><td>' + y + '</td></tr>'
            }
            return o += '</table>'
          }
          var village_attacks = attacks[villageId],
          len = village_attacks.length,
          attack_single = village_attacks[0],
          time = attack_single[6],
          n = attack_single[7];
          time = $.kes('prettyTime', parseInt10(time) - Date.parse(new Date) / 1000);
          var size = Math.min(len, 20);
          $('#kes_show_attack_info').find('td[id*="n"]').html('<b>' + n + '</b>').end().find('td[id*="p"]').html('<a href="/game.php?s=info_player&id=' + attack_single[1] + av + '" target="_blank">' + attack_single[0] + '</a>').end().find('td[id*="v"]').html('<a href="/game.php?s=info_village&id=' + attack_single[3] + av + '" target="_blank">' + attack_single[2] + '</a>').end().find('td[id*="a"]').html('<a href="/game.php?s=info_ally&id=' + attack_single[5] + av + '" target="_blank">' + attack_single[4] + '</a>').end().find('td[id*="t"]').html(time).end().find('td[id*="m"]').html(moreAttacks()).end().find('td[id*="s"]').attr('villageId', villageId).end().find('td[id*="s"]').html(showNextTwenty()).end().fadeIn('slow')
        }
        function pulse(element) {
          $(element).fadeOut(700).fadeIn(700),
          setTimeout(function () {
            pulse(element)
          }, 800)
        }
        if (mapStateChanges(), $('td[title], div[id*="minimap"]').live('click', mapStateChanges), k.modul.showAttacksOnMap && ($('body').append('<div id="kes_show_attack_info">\t\t\t\t\t\t<table>\t\t\t\t\t\t\t<tr><td id="n"></td><td align="right"><span class="click kes_mark" id="kes_close_attack_info">' + l.close + '</span></td></tr>\t\t\t\t\t\t\t<tr><td colspan="2"><u>' + l.attacker + '</u></td></tr>\t\t\t\t\t\t\t<tr><td>' + l.nick + ': </td><td id="p"></td></tr><tr><td>' + l.settlement + ': </td><td id="v"></td></tr>\t\t\t\t\t\t\t<tr><td>' + l.ally + ': </td><td id="a"></td></tr><tr><td>' + l.arrival + ': </td><td id="t"></td></tr>\t\t\t\t\t\t\t<tr><td>' + l.moreAttacks + ': </td><td id="m"></td></tr><tr><td id="s" colspan="2"></td></tr>\t\t\t\t\t\t</table></div>'), pulse('td[attacked*="true"]'), $('td[attacked*="true"]').live('mouseover', function () {
          showAttackInformation($(this).find('a').attr('kes_villageid'))
        }), $('#kes_close_attack_info').bind('click', function () {
          $('#kes_show_attack_info').fadeOut()
        })), k.modul.targetExport && ($('#mapContainer').parent().before('<form action="javascript:void(0);">' + l.player + ': <input type="text" id="kes_target"> <input type="checkbox" id="kes_onlyAbandoned"> ' + l.onlyAbandoned + '<input type="checkbox" id="kes_showAsMessage"> ' + l.asBBCode + ' <input type="submit" value="(kes) ' + l.targetExport + '" id="kes_targetExportSubmit"> <span id="kes_targetExport_error" style="color: crimson; font-weight: bold; display: none;"></span></form><br />'), $('#kes_targetExportSubmit').click(function () {
          var results = [
          ],
          target = $('#kes_target').val(),
          onlyAbandoned = 1 == $('#kes_onlyAbandoned:checked').length;
          $('td[class*="occupied"] > div > a').each(function () {
            var meta = $(this).attr('onmouseover'),
            metaSplit = meta.split(','),
            user = metaSplit[3],
            coordinates = meta.match(/\d+\|\d+/),
            isAbandoned = $(this).find('img').attr('src').match(/_left.png$/);
            onlyAbandoned ? isAbandoned && results.push(coordinates)  : null != user.match(target) && results.push(coordinates)
          });
          var displayDataAsBBCode = function (data) {
            var r = data.length + ' ' + l.entries + ' \n';
            for (var i in data) data.hasOwnProperty(i) && (r += '[village]' + data[i] + '[/village] \n');
            return r.substring(0, r.length - 2)
          },
          displayDataAsList = function (data) {
            var r = data.length + ' ' + l.entries + ' \n';
            for (var i in data) data.hasOwnProperty(i) && (r += '"' + data[i] + '",\n');
            return r.substring(0, r.length - 2)
          };
          if (results.length > 0) {
            1 == $('#kes_targetExport_error:visible').length && $('#kes_targetExport_error').fadeOut();
            var creator = 1 == $('#kes_showAsMessage:checked').length ? displayDataAsBBCode : displayDataAsList;
            $.kes('genericBBCode', creator, results)
          } else $('#kes_targetExport_error').text(l.noMatch + '.').fadeIn()
        })), k.modul.setGroupsOnMap && premium) {
          var groups = $.makeArray($('#container_group_drop_down').find('a:gt(0)')).map(function (t) {
            return {
              id: $.kes('getUrlParameters', $(t).attr('href')).group,
              name: $(t).text()
            }
          }),
          options = groups.map(function (i) {
            return '<option value="' + i.id + '">' + i.name + '</option>'
          });
          $('#mapContainer').parent().before('<div id="kes_setGroupsOnMap"><select id="kes_setGroupsOnMap_select">' + options.join() + '</select> <input type="submit" id="kes_setGroupsOnMap_submit" value="' + l.setGroup + '"> <span id="kes_setGroupsOnMap_success" style="display: none; font-weight: bold;">' + l.saved + '</span></div><br />'),
          $('#kes_setGroupsOnMap_submit').click(function () {
            var allGroup = $('#group_drop_down').find('table tr td').eq(0);
            if (allGroup.hasClass('marked')) {
              $('#kes_setGroupsOnMap_saved').remove();
              var groupID = $('#kes_setGroupsOnMap_select').val(),
              settlements = [
              ],
              o = 0,
              n = 0,
              getVillagesOfGroup = function (groupID) {
                return $.ajax({
                  type: 'post',
                  url: 'popup.php?s=groups&group_id=' + groupID + av
                })
              };
              $.when(getVillagesOfGroup(groupID)).then(function (raw) {
                selectedSetts = $(raw).find('input:checked'),
                selectedSetts.each(function () {
                  settlements.push($(this).val())
                }),
                o = settlements.length,
                $('td[class*="occupied"] > div > a').each(function () {
                  var meta = $(this).attr('onmouseover'),
                  user = meta.split(',') [3],
                  id = $.kes('getUrlParameters', $(this).attr('href')).id;
                  user.match(self) && - 1 == settlements.indexOf(id) && settlements.push(id)
                }),
                n = settlements.length,
                n != o ? $.ajax({
                  type: 'post',
                  url: 'popup.php?s=groups&m=define&inta=modifyVillageGroups&group_id=' + groupID + av,
                  data: 'vg[]=' + settlements.join('&vg[]='),
                  success: function () {
                    $('#kes_setGroupsOnMap_success').css({
                      color: 'green'
                    }).kes('fadeInfadeOut').before('<span id="kes_setGroupsOnMap_saved" class="kes-icons kes-icon-saved"></span>')
                  }
                })  : $('#kes_setGroupsOnMap_success').css({
                  color: 'green'
                }).kes('fadeInfadeOut').before('<span id="kes_setGroupsOnMap_saved" class="kes-icons kes-icon-saved"></span>')
              })
            } else confirm(l.switchGroup) && (location.href = allGroup.find('a').attr('href'))
          })
        }
      })
    }
  }
}(kes);
!function (kes) {
  kes.module.market = {
    matcher: k.modul.marketOptions && page.match('s=build_market') && !page.match('inta') && identifyActiveTab('s=build_market&m=send'),
    fn: function () {
      function calculateRes(avail_donkeys, avail_res, wanted_res) {
        var out = [
        ],
        sum = parseInt10(wanted_res[0]) + parseInt10(wanted_res[1]) + parseInt10(wanted_res[2]);
        if (sum <= 1000 * parseInt10(avail_donkeys)) for (var i = 0; 3 > i; i++) out.push(parseInt10(avail_res[i]) > parseInt10(wanted_res[i]) ? wanted_res[i] : avail_res[i]);
         else for (var donkeys = 1000 * parseInt10(avail_donkeys), scale = donkeys / sum, i = 0; 3 > i; i++) out.push(parseInt10(avail_res[i]) > parseInt10(parseInt10(wanted_res[i]) * scale) ? parseInt10(parseInt10(wanted_res[i]) * scale)  : avail_res[i]);
        $('input[name*="send_res"]').kes('multiCheckBoxes', out)
      }
      function createOptions(market) {
        var o = '';
        for (var opt in market) market.hasOwnProperty(opt) && 'd3fault' != opt && (o += ' <span id="kes_market_' + opt + '" opt="' + opt + '" class="click kes_mark">' + arrow + ' ' + market[opt].name + '</span>');
        return o
      }
      var avail_res = [
      ];
      if ($.kes('isKey', 'kes_lastMarketTarget') && '' == $('input[id="send_x"], input[id="send_y"]').val()) {
        var lastTarget = $.kes('loadKey', 'kes_lastMarketTarget');
        lastTarget = lastTarget.split('|'),
        $('input[id="send_x"]').val(lastTarget[0]),
        $('input[id="send_y"]').val(lastTarget[1])
      }
      $('input[type="submit"]').click(function () {
        var target = $('input[id="send_x"]').val() + '|' + $('input[id="send_y"]').val();
        $.kes('saveKey', 'kes_lastMarketTarget', target)
      }),
      $('table[class*="borderlist"]').eq(3).find('span').each(function () {
        avail_res.push($(this).text().replace(/[\(\)\.]/g, ''))
      });
      var avail_donkeys = $('table[class*="borderlist"]').eq(2).find('tr').eq(1).find('td').eq(0).text();
      avail_donkeys = avail_donkeys.match(/(\d+)/) [0],
      calculateRes(avail_donkeys, avail_res, [
        k.market[k.market.d3fault].stone,
        k.market[k.market.d3fault].wood,
        k.market[k.market.d3fault].iron
      ]),
      $('table[class*="borderlist"]').eq(3).append('<tr><td colspan="3"><span id="kes_market_all"  opt="0" class="click kes_mark">' + arrow + ' ' + l.all + '</span>' + createOptions(k.market) + '</tr>'),
      $('span[id*="kes_market_"]').bind('click', function () {
        var wanted_res = [
        ],
        opt = $(this).attr('opt');
        switch (opt) {
          case '0':
            wanted_res.push('950000', '950000', '950000');
            break;
          default:
            wanted_res.push(k.market[opt].stone, k.market[opt].wood, k.market[opt].iron)
        }
        calculateRes(avail_donkeys, avail_res, wanted_res)
      })
    }
  }
}(kes);
css += '#bb_code { word-wrap: break-word; overflow-wrap: break-word; }',
function (kes) {
  kes.module.messages = {
    matcher: page.match('s=messages'),
    fn: function () {
      function forward(type, details, nick) {
        var url,
        data;
        switch (type) {
          case 'report':
            url = 'game.php?s=messages&m=all&a=reportForward&p=' + details.p + '&id=' + details.id,
            data = 'report_to=' + nick;
            break;
          case 'message':
            url = details.url,
            data = 'msg_to=' + nick + '&confbox=on&' + details.data
        }
        $.ajax({
          type: 'post',
          url: url + av,
          data: data
        })
      }
      if (page.match('&id')) {
        var returnBBCodeForImage = function (a, match) {
          var type = match.substring(match.lastIndexOf('/') + 1, match.lastIndexOf('.')),
          result = '';
          if (type.indexOf('res') > - 1) switch (type) {
            case 'res2':
              result = '[img_stone]';
              break;
            case 'res1':
              result = '[img_wood]';
              break;
            case 'res3':
              result = '[img_iron]'
          } else result = type.indexOf('unit') > - 1 ? '[img' + type.substring(type.lastIndexOf('_')) + ']' : match.indexOf('buildings') > - 1 ? '[img_build_' + match.substring(match.lastIndexOf('/') + 1, match.lastIndexOf('.')) + ']' : '[img]' + match + '[/img]';
          return result
        },
        regex = new RegExp(/\[img](.*?)\[\/img]/gi),
        $bbCode = $('#bb_code');
        $bbCode.prevAll('.borderlist:first').find('tr:last > td').append(' ' + arrow + ' <span id="kes_report_as_bb_code" class="click">(kes) ' + l.report_as_bb_code + '</span>'),
        $('#kes_report_as_bb_code').click(function () {
          bb = $bbCode.html(),
          bb = bb.replace(regex, returnBBCodeForImage),
          $bbCode.html(bb).show()
        })
      } else if (identifyActiveTab('s=messages&m=in') && (css += '.kes_padding { padding: 0 5px; }', $('input[type="checkbox"][name="confbox"]').parent().append(' <span class="click kes_mark kes_padding" rel="reports" toggle="false">' + l.reports + '</span> \t\t\t\t\t<span class="click kes_mark kes_padding" rel="mail" toggle="false"><img src="img/messages/mail_read.png"></span> <span class="click kes_mark kes_padding" rel="misc" toggle="false"><img src="img/report/misc.png"></span> <span class="click kes_mark kes_padding" rel="green" toggle="false"><img src="img/dots/green.png"></span>\t\t\t\t\t<span class="click kes_mark kes_padding" rel="yellow" toggle="false"><img src="img/dots/yellow.png"></span> <span class="click kes_mark kes_padding" rel="red" toggle="false"><img src="img/dots/red.png"></span> \t\t\t\t\t<span class="click kes_mark kes_padding" rel="blue" toggle="false"><img src="img/dots/blue.png"></span> <span class="click kes_mark kes_padding" rel="support" toggle="false"><img src="img/report/support.png"></span>\t\t\t\t\t<span class="click kes_mark kes_padding" rel="trade" toggle="false"><img src="img/report/trade.png"></span'), $('.kes_mark').click(function () {
        function selector(rel) {
          switch (rel) {
            case 'reports':
              return 'img[src*="red"], img[src*="green"],img[src*="blue"],img[src*="yellow"]';
            case 'mail':
              return 'img[src*="mail"]';
            case 'misc':
              return 'img[src*="misc"]';
            case 'red':
              return 'img[src*="red"]';
            case 'yellow':
              return 'img[src*="yellow"]';
            case 'blue':
              return 'img[src*="blue"]';
            case 'green':
              return 'img[src*="green"]';
            case 'support':
              return 'img[src*="support"]';
            case 'trade':
              return 'img[src*="trade"]'
          }
        }
        var toggle = $(this).attr('toggle'),
        selection = $(selector($(this).attr('rel'))).siblings('input[type="checkbox"]');
        'false' == toggle ? (selection.attr('checked', !0), $(this).attr('toggle', !0))  : 'true' == toggle && (selection.attr('checked', !1), $(this).attr('toggle', !1))
      }), k.modul.massforward)) {
        var messageDetails = function (id) {
          return $.ajax({
            type: 'get',
            url: 'game.php?s=messages&m=forward&id=' + id + av
          }).promise()
        },
        reportSession = function (id) {
          return $.ajax({
            type: 'post',
            url: 'game.php?s=messages&m=forward_report&id=' + id + av
          }).promise()
        };
        $('table.borderlist').eq(5).append('<tr><td colspan="3"><span style="font-weight:bold;">' + l.recipient + ': </span><input type="text" id="kes_massforward_nick"> <input type="submit" id="kes_massforward" value="(kes) ' + l.forward + '"> <span style="display: none; font-weight: bold;" id="kes_massforward_text"></span></td></tr>'),
        $('#kes_massforward').bind('click', function (event) {
          event.preventDefault();
          var table = $('table.borderlist').eq(5);
          reports = table.find('img[src*="red"], img[src*="green"],img[src*="blue"],img[src*="yellow"]').siblings('input:checked'),
          messages = table.find('img[src*="mail"]').siblings('input:checked'),
          nick = $('#kes_massforward_nick').val(),
          session = '',
          0 == reports.length && 0 == messages.length || '' == nick ? $('#kes_massforward_text').html(l.forwardError + '!').css('color', 'red').fadeIn(500).delay(800).fadeOut(100)  : ($(reports).each(function () {
            var id = $(this).val();
            '' == session && (session = reportSession(id)),
            session.then(function (results) {
              dt = {
              },
              dt.id = id,
              dt.p = $.kes('getUrlParameters', $(results).find('form').attr('action')).p,
              forward('report', dt, nick)
            })
          }), $(messages).each(function () {
            var id = $(this).val(),
            dt = messageDetails(id);
            dt.then(function (results) {
              var form = $(results).find('form'),
              details = {
              };
              details.url = form.prop('action'),
              details.data = form.find('input[type="checkbox"][name="mid[]"]').serialize(),
              forward('message', details, nick)
            })
          }), $('#kes_massforward_text').html(l.forwardSuccess + '.').css('color', 'green').fadeIn(500).delay(800).fadeOut(100))
        })
      }
    }
  }
}(kes);
css += '.kes_group_element { display: inline-block; }',
function (kes) {
  kes.module.overview = {
    matcher: page.match('s=overview') && !page.match('s=overview_villages'),
    fn: function () {
      var place = $('span[onclick*="groups"]').parent(),
      label = $('span[onclick*="groups"]').text() + ': ',
      insert = place.closest('table:not(.noborder)'),
      villageId = Query.village,
      groups = $.kes('getGroups', villageId),
      saveurl = 'popup.php?s=groups&m=village&inta=modifyVillageGroups&village_id=' + villageId + av,
      formGenerator = function (groups) {
        var currentGroups = [
        ],
        o = '<br /><table width="790px" class="borderlist"><tr><th>';
        o += label + ' <span id="kes_groups_savestatus" style="color: green; display:none;">' + l.saved + '</span></th></tr><tr><td><form id="kes_groups" action="' + saveurl + '">';
        for (var g in groups) if (groups.hasOwnProperty(g)) {
          var checked = groups[g].checked ? 'checked="checked"' : '';
          o += '<span class="kes_group_element"><input name="vg[]" value="' + groups[g].id + '" type="checkbox" ' + checked + '> ' + groups[g].name + ' </span>',
          groups[g].checked && currentGroups.push(groups[g].name)
        }
        return o += '</form></td></tr></table><br />',
        currentGroups.length > 0 && place.text(label + currentGroups.join(', ')),
        groups.length > 0 ? o : ''
      };
      insert.before(formGenerator(groups)),
      $('#kes_groups').delegate('input', 'click', function () {
        var data = $('#kes_groups'),
        newGroups = data.find('input[type="checkbox"]:checked').parent().text();
        $.ajax({
          type: 'POST',
          url: saveurl,
          data: data.serialize(),
          success: function () {
            $('#kes_groups_savestatus').kes('fadeInfadeOut'),
            place.text(label + newGroups.replace(/  /g, ', '))
          }
        })
      })
    }
  }
}(kes);
css += '.kes_multiselect { display: none; }',
css += '.kes_multiselect_open { display: block !important; }',
function (kes) {
  kes.module.overviewvillages = {
    matcher: premium && page.match('s=overview_villages'),
    fn: function () {
      function getWorldRuntime() {
        $.ajax({
          type: 'post',
          url: '/help.php?m=worldinfo',
          success: function (data) {
            var runtime = 1;
            runtime = parseFloat($(data).find('table.borderlist').eq(0).find('tr:gt(1):lt(1) > td:nth-child(2)').html(), 10),
            $.kes('saveKey', 'kes_worldRuntime', runtime)
          }
        })
      }
      function getInput() {
        var t = {
        };
        return $('#filterTroops_table').find('input:gt(0):not(:last)').each(function (i) {
          t[i] = 16 != i ? '' == $(this).val() ? 0 : $(this).val()  : 1 == $('#kes_filterTroops_onlyTroops:checked').length ? !0 : !1
        }),
        t
      }
      function calculateDistance(source, target) {
        var distance = Math.sqrt(Math.pow(Math.abs(parseInt10(source[0]) - parseInt10(target[0])), 2) + Math.pow(Math.abs(parseInt10(source[1]) - parseInt10(target[1])), 2));
        return Math.round(100 * distance) / 100
      }
      function checkForTroops(wanted, available) {
        for (var r = !1, count_match = 0, i = 0; i < wanted.length; i++) parseInt10(wanted[i]) <= parseInt10(available[i]) && count_match++;
        return r = count_match == wanted.length
      }
      function createBarracksString(troops) {
        for (var output = '', labels = [
          'farmer',
          'sword',
          'spear',
          'axe',
          'bow',
          'spy',
          'light',
          'heavy',
          'ram',
          'kata',
          'snob'
        ], i = 0; i < labels.length; i++) output += '&' + labels[i] + '=' + troops[i];
        return output
      }
      function getSlowestUnit(troops) {
        for (var units = [
          20,
          22,
          22,
          18,
          18,
          9,
          10,
          11,
          30,
          30,
          35
        ], i = 0; i < units.length; i++) 0 == troops[i] && (units[i] = 0);
        return Math.max.apply(Math, units)
      }
      function getResearchSession(villageId) {
        var session;
        return $.ajax({
          type: 'get',
          async: !1,
          url: '/game.php?village=' + villageId + '&s=build_barracks&m=research' + av,
          success: function (data) {
            var p = $(data).find('a[href*="a=research"]:first').attr('href');
            p && (session = p.substring(p.indexOf('a=research&p=') + 13, p.indexOf('&unit=')))
          }
        }),
        session
      }
      function formGenerator(markedGroups, groups, villageId) {
        var formAction = 'popup.php?s=groups&m=village&inta=modifyVillageGroups&village_id=' + villageId + av,
        html = arrow + ' <span class="click kes_multiselect_opener"><span class="kes_multiselect_count">' + markedGroups.length + '</span> ' + l.selectedGroups + '</span> <span class="kes_multiselect_status" style="display: none"></span><br />';
        html += '<div class="kes_multiselect"><form action=' + formAction + ' method="POST">';
        for (var g in groups) if (groups.hasOwnProperty(g)) {
          var checkStatus = - 1 != markedGroups.indexOf(groups[g].name) ? 'checked="checked"' : '';
          html += '<input type="checkbox" class="checkbox" ' + checkStatus + ' name="vg[]" value="' + groups[g].id + '"><span>' + groups[g].name + '</span><br />'
        }
        return html += '</form></div>'
      }
      function submitForm(div) {
        $.ajax({
          type: 'post',
          url: div.find('form').attr('action'),
          data: div.find('form').serialize(),
          success: function () {
            div.siblings('.kes_multiselect_status').css({
              color: 'green'
            }).text(l.saved).kes('fadeInfadeOut')
          }
        })
      }
      if (k.modul.filterOverview && identifyActiveTab('s=overview_villages&m=1')) {
        var unit_runtime = {
          farmer: 20,
          sword: 22,
          spear: 18,
          axe: 18,
          bow: 18,
          spy: 9,
          light: 10,
          heavy: 11,
          ram: 30,
          kata: 30,
          snob: 35
        },
        head = '';
        $('table.borderlist').eq(3).find('tr:first > th:gt(4)').each(function () {
          head += '<td>' + $(this).html() + '</td>'
        });
        var ui = '<table id="filterTroops_table" class="borderlist" style="width: 820px;">';
        ui += '<tr><td><span id="kes_filterTroops_status">' + l.troopFilter + '</span></td>' + head + '</tr>',
        ui += '<tr><td><input id="kes_filterTroops"  value="' + l.filter + '" type="submit"></td><td><input type="text" name="farmer" size="4" maxlength="5"></td>',
        ui += '<td><input type="text" name="sword" size="4" maxlength="5"></td><td><input type="text" name="spear" size="4" maxlength="5"></td>',
        ui += '<td><input type="text" name="axe" size="4" maxlength="5"></td><td><input type="text" name="bow" size="4" maxlength="5"></td>',
        ui += '<td><input type="text" name="spy" size="4" maxlength="5"></td><td><input type="text" name="light" size="4" maxlength="5"></td>',
        ui += '<td><input type="text" name="heavy" size="4" maxlength="5"></td><td><input type="text" name="ram" size="4" maxlength="5"></td>',
        ui += '<td><input type="text" name="kata" size="4" maxlength="5"></td><td><input type="text" name="snob" size="4" maxlength="5"></td></tr>',
        ui += '<tr><td>' + l.target + ': <input id="kes_filterTroops_target" type="text" size="7"></td>',
        ui += '<td colspan="10">' + l.toa + ': ',
        ui += l.days + ' <input id="kes_filterTroops_arrival_d" type="text" size="2">' + l.hours + ' <input id="kes_filterTroops_arrival_h" type="text" size="2">',
        ui += l.minutes + ' <input id="kes_filterTroops_arrival_m" type="text" size="2"> ' + l.seconds + ' <input id="kes_filterTroops_arrival_s" type="text" size="2">',
        ui += ' <input type="checkbox" id="kes_filterTroops_onlyTroops">' + l.withoutRuntime + '</td>',
        ui += '<td><input type="submit" id="kes_filterTroops_save" value="' + l.save + '"></td>',
        ui += '</tr><tr><td colspan="12">' + displayTrooplinks() + '</td></tr></table><br />',
        $('table.borderlist').eq(3).before(ui),
        $.kes('isKey', 'kes_worldRuntime') || getWorldRuntime();
        var filterTroopsInput = {
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: '000|000',
          12: 0,
          13: 0,
          14: 0,
          15: 0,
          16: !1
        };
        $.kes('isKey', 'kes_filterTroops') && (filterTroopsInput = $.kes('loadKey', 'kes_filterTroops')),
        $('#filterTroops_table').find('input:gt(0):not(:last)').each(function (i) {
          16 != i ? $(this).val(filterTroopsInput[i])  : filterTroopsInput[i] && $('#kes_filterTroops_onlyTroops').prop('checked', 'checked')
        }),
        $('span.kes_mark').click(function () {
          var number = $(this).attr('id'),
          troops = k.trooplinks[number.substring(number.indexOf('kes_trooplink_') + 14)];
          for (var unit in unit_runtime) unit_runtime.hasOwnProperty(unit) && $('input[name="' + unit + '"]').val(troops[unit])
        }),
        $('table.borderlist').eq(4).on('click mouseup', '.kes_link_to_barracks', function () {
          $(this).closest('tr').find('td').addClass('kes_used')
        }),
        $('#kes_filterTroops_save').bind('click', function () {
          $.kes('saveKey', 'kes_filterTroops', getInput()),
          $('#kes_filterTroops_status').fadeOut().html(l.saved).css('color', 'green').fadeIn('slow', function () {
            $(this).delay(800).html(l.troopFilter).css('color', 'black').fadeIn()
          })
        }),
        $('#kes_filterTroops').bind('click', function () {
          $('table.borderlist').eq(4).find('tr:first > th:nth-child(2)').html(l.toa),
          parseInt10($('#kes_filterTroops_noMatch').length) > 0 && $('#kes_filterTroops_noMatch').remove();
          var isPaginated = !1,
          currInput = getInput(),
          time = parseInt10(currInput[15]) + 60 * parseInt10(currInput[14]) + 3600 * parseInt10(currInput[13]) + 86400 * parseInt10(currInput[12]),
          target = currInput[11].split('|'),
          troops = [
            currInput[0],
            currInput[1],
            currInput[2],
            currInput[3],
            currInput[4],
            currInput[5],
            currInput[6],
            currInput[7],
            currInput[8],
            currInput[9],
            currInput[10]
          ],
          barracksString = createBarracksString(troops),
          sortable = [
          ],
          slowestUnit = getSlowestUnit(troops),
          lz = 1 / parseFloat($.kes('loadKey', 'kes_worldRuntime'), 10) * parseFloat(slowestUnit, 10) * 60,
          onlyTroops = 1 == $('#kes_filterTroops_onlyTroops:checked').length ? !0 : !1;
          $('table.borderlist').eq(4).find('tr:gt(0)').each(function () {
            if ($(this).find('td:first').attr('colspan')) isPaginated = !0,
            $(this).addClass('pagination');
             else {
              var source = $(this).find('span[id*="qeText"]').attr('title');
              source = source.match(/[0-9]{3}\|[0-9]{3}/) [0].split('|');
              var distance = calculateDistance(source, target),
              runtime = Math.ceil(distance * lz);
              if (onlyTroops || time > runtime) {
                var avail_troops = [
                ];
                if ($(this).find('td:gt(4)').each(function (i) {
                  var unit;
                  10 > i ? (unit = $(this).attr('title'), unit = unit.substring(0, unit.indexOf(' ')), unit = unit.replace(/\./g, ''))  : unit = $(this).find('a').html(),
                  avail_troops.push(unit)
                }), checkForTroops(troops, avail_troops)) {
                  var id = $(this).find('td:first').find('a').attr('href');
                  id = id.substring(0, id.lastIndexOf('&s=') + 3),
                  $(this).attr('time', runtime).css('display', 'table-row').find('td:nth-child(2)').html('<a class="kes_link_to_barracks" href="' + id + 'build_barracks&m=command' + barracksString + '&send_x=' + target[0] + '&send_y=' + target[1] + av + '" target="_blank">' + $.kes('prettyTime', runtime) + '</a>'),
                  sortable.push(runtime)
                } else $(this).css('display', 'none')
              } else $(this).css('display', 'none')
            }
          });
          var tbody = $('table.borderlist').eq(4).find('tbody');
          if (0 == parseInt10($('table.borderlist').eq(4).find('tr:gt(0):visible').not('.pagination').length)) {
            var appendice = '<tr id="kes_filterTroops_noMatch"><td colspan="16">' + l.noMatch + '.</td></tr>';
            isPaginated ? $('table.borderlist').eq(4).find('.pagination:first').after(appendice)  : $('table.borderlist').eq(4).find('tr:visible').after(appendice)
          } else sortable.sort(function (a, b) {
            return a - b
          }),
          $.each(sortable, function (i) {
            $('table.borderlist').eq(4).find('tr[time*="' + sortable[i] + '"]').appendTo(tbody)
          }),
          isPaginated && $('table.borderlist').eq(4).find('.pagination:last').appendTo(tbody)
        })
      } else if (identifyActiveTab('s=overview_villages&m=8')) $('.contentpane .borderlist').eq(1).find('th').parent().before('<tr><td colspan="13"><span id="kes_research" class="click">' + l.researchMissingTroops + '</span></td></tr>'),
      $('#kes_research').click(function () {
        $(this).text(l.beingProcessed + '...').css({
          color: 'crimson',
          'font-weight': 'bold'
        });
        var session,
        research = [
        ];
        $('.contentpane .borderlist').eq(1).find('img[src*="grey.png"]').parent().parent().each(function () {
          var research_units = [
            'farmer',
            'sword',
            'spear',
            'axe',
            'bow',
            'spy',
            'light',
            'heavy',
            'ram',
            'kata',
            'snob'
          ],
          current = $(this),
          last = current.find('td:last'),
          villageId = current.find('td:first').find('a').attr('href');
          villageId = villageId.substring(villageId.indexOf('village=') + 8, villageId.indexOf('&s=build_barracks')),
          current.find('td:gt(0):lt(10)').each(function (i) {
            if ($(this).find('img[src*="grey.png"]').length && 0 === last.find('img[src*="unit_' + research_units[i] + '"]').length) {
              'undefined' == typeof session && (session = getResearchSession(villageId));
              var researchLink = '/game.php?village=' + villageId + '&s=build_barracks&m=research&a=research&p=' + session + '&unit=' + research_units[i] + av;
              research.push(researchLink)
            }
          })
        }),
        research.length > 0 ? !function makeResearch(queue) {
          $.ajax({
            type: 'post',
            url: queue.shift(),
            success: function () {
              if (queue.length > 0) makeResearch(queue);
               else {
                var page = Query.start;
                page = 'undefined' == typeof page ? '' : '&start=' + page,
                $.ajax({
                  type: 'post',
                  url: '/game.php?s=overview_villages&m=8' + page + av,
                  success: function (data) {
                    var table = $(data).find('.contentpane .borderlist').eq(1);
                    $('.contentpane .borderlist').eq(1).replaceWith(table),
                    window.alert(l.researchStarted)
                  }
                })
              }
            }
          })
        }(research)  : ($(this).replaceWith(l.noMissingResearch), window.alert(l.noMissingResearch))
      });
       else if (page.match('m=4&type=away_detail')) {
        var selection = [
        ];
        if ($('table[class*="borderlist"]').eq(3).find('input[type="checkbox"]').parent().parent().each(function () {
          var villageId = $(this).find('td:first').find('a').attr('href');
          villageId = villageId.substring(villageId.lastIndexOf('=') + 1),
          $(this).find('td:first').attr('colspan', '1').after('<td class="marked_group"><span class="click removeall" villageId="' + villageId + '">' + l.all + '</span></td>')
        }), $.kes('isKey', 'kes_selection')) {
          $('td[colspan*="14"]').append(' <span id="kes_loadSelection" class="click kes_mark">' + l.markSelection + '</span>');
          var selection = $.kes('loadKey', 'kes_selection');
          $('#kes_loadSelection').bind('click', function () {
            for (var i in selection) selection.hasOwnProperty(i) && $('table[class*="borderlist"]').eq(3).find('td[class*="marked_group"]').parent().find('td:first > a[href*="' + selection[i] + '"]').each(function () {
              $(this).siblings('input').attr('checked', 'true'),
              $(this).parent().parent().find('td[class*="marked_group"]').eq(1).find('span').removeClass('click removeall')
            })
          }),
          $('td[colspan*="14"]').append(' <span id="kes_deleteSelection" class="click kes_mark">' + l.deleteSelection + '</span>'),
          $('#kes_deleteSelection').bind('click', function () {
            $.kes('deleteKey', 'kes_selection'),
            $('#kes_loadSelection, #kes_deleteSelection').kes('fadeOutRemove')
          })
        }
        $('span[class*="removeall"]').bind('click', function () {
          var villageId = $(this).attr('villageId');
          $('table[class*="borderlist"]').eq(3).find('td[class*="marked_group"]').parent().find('td:first > a[href*="' + villageId + '"]').each(function () {
            $(this).siblings('input').attr('checked', 'true'),
            $(this).parent().parent().find('td[class*="marked_group"]').eq(1).find('span').removeClass('click removeall')
          }),
          selection.push(villageId)
        }),
        $('td[colspan*="14"]:first > a, td[colspan*="14"]:first > input, input[value*="' + l.retrieve + '"]').bind('click', function () {
          0 != selection.length && $.kes('saveKey', selection)
        })
      } else if (k.modul.sortOwnAttacks && identifyActiveTab('s=overview_villages&m=5&type=attack')) {
        var table = $('.borderlist').eq(3),
        button = $('<input type="submit" id="kes_sort_attack_overview_submit" value="' + l.modul.sortOwnAttacks + '">');
        table.before(button),
        button.click(function () {
          $(this).remove();
          {
            var isPaginated = 14 == table.find('tr:first > td').prop('colspan'),
            bounds = isPaginated ? 2 : 1;
            table.find('th:first').parent()
          }
          rows = table.find('tr:gt(' + (bounds - 1) + ')'),
          rows = rows.slice(0, - bounds),
          rows.map(function (i, element) {
            var href = $(this).find('td:first').find('a').prop('href'),
            id = 'jump_' + $.kes('getUrlParameters', href).id;
            return $(element).prop('id', id)
          });
          var sort_by_coordinates = function (a, b) {
            var make_a = $(a).find('td').eq(1).find('a').eq(1).html(),
            make_b = $(b).find('td').eq(1).find('a').eq(1).html(),
            xya = make_a.split('|'),
            xyb = make_b.split('|');
            return xya[0] + xya[1] - (xyb[0] + xyb[1])
          },
          sorted = rows.sort(sort_by_coordinates);
          rows.remove(),
          table.find('tr').eq(bounds - 1).after(sorted);
          var create_overview = function (sorted) {
            var object = {
            },
            result = '';
            sorted.each(function () {
              var td = $(this).find('td'),
              target = td.eq(1).find('a').eq(1).html(),
              link = td.eq(1).html(),
              barracks = td.eq(2).find('a').prop('href');
              arrival = td.eq(3).text(),
              jump = '#' + $(this).prop('id'),
              isSnob = 0 != td.eq(14).text(),
              object[target] ? (object[target].count += 1, isSnob && (object[target].snob += 1, '' == object[target].snobf && (object[target].snobf = arrival, object[target].snobj = jump)), object[target].last = arrival, object[target].llink = barracks)  : object[target] = {
                count: 1,
                snob: isSnob ? 1 : 0,
                snobf: isSnob ? arrival : '',
                snobj: isSnob ? jump : '',
                link: link,
                first: arrival,
                flink: barracks,
                fjump: jump,
                last: arrival,
                llink: barracks
              }
            });
            for (var target in object) if (object.hasOwnProperty(target)) {
              var snob = 0 != object[target].snob ? ' (<a class="jump" data-href="' + object[target].snobj + '" href="' + object[target].snobj + '" title="' + object[target].snobf + '">' + object[target].snob + '</a>)' : '';
              result += '<tr><td>' + object[target].link + '</td><td><span class="count">' + object[target].count + '</span>' + snob + '</td><td><a data-href="' + object[target].flink + '" href="' + object[target].flink + '" target="_blank">' + object[target].first + '</a> (<a  class="jump" data-href="' + object[target].fjump + '" href="' + object[target].fjump + '">' + l.goto + '</a>)</td><td><a href="' + object[target].llink + '" target="_blank">' + object[target].last + '</a></td></tr>'
            }
            return result
          };
          0 == $('#kes_sort_attack_overview').length ? table.before('<table class="borderlist" style="width:820px;" id="kes_sort_attack_overview"><tr><th>' + l.target + '</th><th>' + l.amount + '</th><th>' + l.arrival + '</th><th>' + l.arrival + '</th></tr></table><br />')  : $('#kes_sort_attack_overview').find('tr:gt(1)').remove(),
          $('#kes_sort_attack_overview').append(create_overview(sorted)).on('click', '.jump', function () {
            var row = $(this).closest('tr'),
            first = row.find('.jump:last').data('href');
            amount = row.find('.count').text(),
            table.find('td.kes_used').removeClass('kes_used'),
            $(first).prev().nextAll('tr:lt(' + amount + ')').find('td').addClass('kes_used')
          })
        })
      } else if (identifyActiveTab('s=overview_villages&m=6')) {
        if (displayAttacksWithSeconds(3), k.modul.insertIntoRuntimeCalc) {
          var row = $('table.borderlist').eq(3).find('tr > td').parent();
          row.each(function () {
            var cur = $(this);
            if (cur.find('td[class*="list"]')) {
              var children = cur.children(),
              data = '&target=' + children.eq(2).find('a:last').html() + '&source=' + children.eq(1).find('a:last').html() + '&time=' + children.eq(4).find('span').attr('time') + '&starttime=' + (new Date).getTime();
              children.eq(0).find('img:first').wrap('<a target="_blank" href="game.php?&s=tools&m=runtime_calculator' + data + av + '">')
            }
          })
        }
        if (identifyActiveTab('m=6&type=notignored')) {
          $('table.borderlist').eq(3).find('tr > td[colspan]').addClass('kes_pagination');
          var table = $('table.borderlist').eq(3).find('tr > td:not(.kes_pagination)');
          table.parent().each(function () {
            var t = $(this).find('td').eq(0),
            attId = '',
            id = $(this).find('td').eq(1).find('a').attr('href');
            attId = $.kes('getUrlParameters', t.find('a').attr('href')).id,
            id = $.kes('getUrlParameters', id).id,
            t.find('a').eq(0).before('<input type="checkbox" class="kes_help_ignore" data-sid="' + id + '" value="' + attId + '">')
          }),
          table.parent().parent().append('<tr><th colspan="3"><input type="checkbox" class="kes_help_ignore" id="kes_ignore_all"> ' + l.selectAll + '</th><td colspan="2"><input id="kes_ignore_submit" type="submit" value="' + l.ignore + '"></td></tr>'),
          $('#kes_ignore_all').click(function () {
            $('.kes_help_ignore').prop('checked', $(this).prop('checked'))
          }),
          $('#kes_ignore_submit').click(function () {
            var checked = $('.kes_help_ignore:checked').length;
            if (checked) {
              $('#kes_ignore_submit').after(' <div class="kes_spinner"></div>');
              var ignore = {
              };
              $('.kes_help_ignore:checked').each(function () {
                var t = $(this),
                id = t.data('sid'),
                attId = t.val();
                ignore[id] || (ignore[id] = [
                ]),
                ignore[id].push(attId)
              });
              var villageId = table.find('.kes_help_ignore:first').data('sid'),
              url = 'game.php?village=' + villageId + '&s=build_barracks&m=command' + av;
              $.when($.kes('getSession', url)).then(function (raw) {
                var session = $.kes('getUrlParameters', $(raw).find('form[name="ignore"]').attr('action')).p,
                ignoreUrl = 'game.php?village=kes_ignore_placeholder&s=build_barracks&m=command&a=setTroopIgnore&p=' + session + av;
                for (var sett in ignore) ignore.hasOwnProperty(sett) && $.kes('queue', {
                  type: 'post',
                  url: ignoreUrl.replace('kes_ignore_placeholder', sett),
                  data: 'ignore[]=' + ignore[sett].join('&ignore[]=')
                })
              })
            }
          })
        }
      } else identifyActiveTab('s=overview_villages&m=9') && ($('.kes_multiselect_opener').live('click', function () {
        var div = $(this).siblings('div.kes_multiselect');
        $('div.kes_multiselect_open').each(function () {
          $(this).removeClass('kes_multiselect_open')
        }),
        div.toggleClass('kes_multiselect_open')
      }), $('.checkbox').live('change', function () {
        var form = $(this).parent(),
        count = form.find('.checkbox:checked').length,
        siblings = form.parent().parent().siblings();
        submitForm(form.parent()),
        form.parent().siblings('span.click').find('.kes_multiselect_count').text(count),
        siblings.eq(1).text(count),
        siblings.eq(2).html('<div style="width: 200px;">' + $.map(form.find('.checkbox:checked').next('span'), function (element) {
          return $(element).text()
        }).join('; ') + '</div>')
      }), $(document).ready(function () {
        function lazyManipulate(doubleCache) {
          doubleCache.slice(step, step + stepSize).each(function () {
            var parent = $(this).parent(),
            markedGroups = parent.find('td:eq(2)'),
            markedGroups = 1 == markedGroups.find('span.notice').length ? [
            ] : $(this).parent().find('td:eq(2)').text().trim().split('; ');
            villageId = parent.find('td:eq(0)').find('a').attr('href'),
            villageId = villageId.substring(villageId.indexOf('village=') + 8, villageId.indexOf('&s=overview')),
            $(this).replaceWith('<td>' + formGenerator(markedGroups, groups, villageId) + '</td>')
          }),
          step += stepSize,
          steps--,
          steps > 0 && setTimeout(function () {
            lazyManipulate(doubleCache)
          }, 50)
        }
        var tableCache = $('table.borderlist').eq(3),
        firstVillageId = tableCache.find('tr > td:first').find('a').attr('href');
        firstVillageId = firstVillageId.substring(firstVillageId.indexOf('village=') + 8, firstVillageId.indexOf('&s=overview_villages'));
        var groups = $.kes('getGroups', firstVillageId);
        tableCache.find('tr > th').parent().find('th:last').css({
          width: 'auto'
        }).end().find('th:eq(2)').css({
          width: '200px'
        });
        var doubleCache = tableCache.find('tr > td').parent().find('td:eq(3)'),
        doubleCacheLength = doubleCache.length,
        stepSize = 100,
        steps = Math.ceil(doubleCacheLength / stepSize),
        step = 0;
        lazyManipulate(doubleCache)
      }))
    }
  }
}(kes);
!function (kes) {
  kes.module.redir = {
    matcher: page.match('redir.php'),
    fn: function () {
      var link = $('.contentpane:last').find('a'),
      href = link.attr('href');
      href = $('<div/>').html(href).text(),
      link.text(href).prop('href', href)
    }
  }
}(kes);
!function (kes) {
  kes.module.runtimecalculator = {
    matcher: k.modul.insertIntoRuntimeCalc && page.match('m=runtime_calculator'),
    fn: function () {
      if (page.match('&target=')) {
        var target = Query.target.split('|'),
        source = Query.source.split('|'),
        time = Query.time,
        starttime = Query.starttime;
        $.kes('saveKey', 'time', time),
        $.kes('saveKey', 'starttime', starttime),
        $('input[id*="start"], input[id*="target"]').kes('multiCheckBoxes', source.concat(target)),
        $('input[type*="submit"]').click()
      } else if (page.match('&inta=calculate')) {
        var time = $.kes('deleteKey', 'time');
        starttime = $.kes('deleteKey', 'starttime'),
        currenttime = (new Date).getTime(),
        time -= Math.floor((currenttime - starttime) / 1000),
        time = 0 >= time ? 0 : time,
        time = $.kes('prettyTime', time),
        $('table[class*="borderlist"]').eq(4).find('tbody').prepend('<tr><td colspan="3"><p style="color: #DC143C; font-weight: bold; text-align: center;">' + l.runtimecalc + ' ' + time + '</p></td></tr>'),
        $('table[class*="borderlist"] > tbody > tr > td[class*="right"]').each(function () {
          var runtime_unit = $(this).text().split(':'),
          timeInSeconds = time.split(':'),
          inSeconds = function (time) {
            return 3600 * parseInt10(time[0]) + 60 * parseInt10(time[1]) + parseInt10(time[2])
          };
          runtimeInSeconds = inSeconds(runtime_unit),
          timeInSeconds = inSeconds(timeInSeconds),
          timeInSeconds > runtimeInSeconds && $(this).css('color', 'grey')
        })
      }
    }
  }
}(kes);
var h = document.getElementsByTagName('head') [0],
injectCss = document.createElement('style');
injectCss.type = 'text/css',
injectCss.appendChild(document.createTextNode(css)),
h.appendChild(injectCss);
var modules = kes.module;
for (var module in modules) modules.hasOwnProperty(module) && modules[module].matcher && modules[module].fn();
