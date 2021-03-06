const net = new brain.NeuralNetwork()

const data = [
  {"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},{"input":{"r":0.6746825413217328,"g":0.9418104289163194,"b":0.46724381027325257},"output":[0]},{"input":{"r":0.4691600793115216,"g":0.1301779965084091,"b":0.7828390082023031},"output":[1]},{"input":{"r":0.24411378394360717,"g":0.7973324330735065,"b":0.9411369574043309},"output":[0]},{"input":{"r":0.5441820284981798,"g":0.7903430098414217,"b":0.9793650785793755},"output":[0]},{"input":{"r":0.7017416373147352,"g":0.5846545531989265,"b":0.9497037926073957},"output":[0]},{"input":{"r":0.3447742755364589,"g":0.956151291544137,"b":0.9796122714232927},"output":[0]},{"input":{"r":0.6656480601057266,"g":0.9173792276874544,"b":0.7686356923001889},"output":[0]},{"input":{"r":0.7670310634423498,"g":0.83129868858412,"b":0.10875464010410996},"output":[0]},{"input":{"r":0.3035580528325652,"g":0.3212896604718638,"b":0.14410379300172282},"output":[1]},{"input":{"r":0.6329152382194716,"g":0.8718761624009104,"b":0.40669168027160363},"output":[0]},{"input":{"r":0.2966237053049732,"g":0.9190180044236602,"b":0.8078500546477503},"output":[0]},{"input":{"r":0.09106662257494125,"g":0.2540008540258416,"b":0.9053907029184745},"output":[1]},{"input":{"r":0.5738154892539837,"g":0.37966657619804467,"b":0.33207173963928205},"output":[1]},{"input":{"r":0.43438987202402646,"g":0.468962700214252,"b":0.02043379191844652},"output":[1]},{"input":{"r":0.7443555312802184,"g":0.06326993346575449,"b":0.17873364849454654},"output":[1],"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},{"input":{"r":0.6746825413217328,"g":0.9418104289163194,"b":0.46724381027325257},"output":[0]},{"input":{"r":0.4691600793115216,"g":0.1301779965084091,"b":0.7828390082023031},"output":[1]},{"input":{"r":0.24411378394360717,"g":0.7973324330735065,"b":0.9411369574043309},"output":[0]},{"input":{"r":0.5441820284981798,"g":0.7903430098414217,"b":0.9793650785793755},"output":[0]},{"input":{"r":0.7017416373147352,"g":0.5846545531989265,"b":0.9497037926073957},"output":[0]},{"input":{"r":0.3447742755364589,"g":0.956151291544137,"b":0.9796122714232927},"output":[0]},{"input":{"r":0.6656480601057266,"g":0.9173792276874544,"b":0.7686356923001889},"output":[0]},{"input":{"r":0.7670310634423498,"g":0.83129868858412,"b":0.10875464010410996},"output":[0]},{"input":{"r":0.3035580528325652,"g":0.3212896604718638,"b":0.14410379300172282},"output":[1]},{"input":{"r":0.6329152382194716,"g":0.8718761624009104,"b":0.40669168027160363},"output":[0]},{"input":{"r":0.2966237053049732,"g":0.9190180044236602,"b":0.8078500546477503},"output":[0]},{"input":{"r":0.09106662257494125,"g":0.2540008540258416,"b":0.9053907029184745},"output":[1]},{"input":{"r":0.5738154892539837,"g":0.37966657619804467,"b":0.33207173963928205},"output":[1]},{"input":{"r":0.43438987202402646,"g":0.468962700214252,"b":0.02043379191844652},"output":[1]},{"input":{"r":0.7443555312802184,"g":0.06326993346575449,"b":0.17873364849454654},"output":[1]},{"input":{"r":0.0703265499484309,"g":0.783015815813003,"b":0.20182966154268978},"output":[0]},{"input":{"r":0.7280310698422581,"g":0.22294267306578042,"b":0.8651763638745884},"output":[1]},{"input":{"r":0.6203590010434052,"g":0.08899358915280042,"b":0.03677111930665933},"output":[1]},{"input":{"r":0.026343595760226046,"g":0.9825321381515493,"b":0.49335783881088324},"output":[0]},{"input":{"r":0.6172030101493826,"g":0.08692407144804437,"b":0.6706600356583843},"output":[1]},{"input":{"r":0.6115024245736238,"g":0.6021446795733771,"b":0.7047817347372176},"output":[0]},{"input":{"r":0.5388807839457603,"g":0.03188743707389574,"b":0.45014500007006686},"output":[1]},{"input":{"r":0.06662981682881353,"g":0.9895967987323719,"b":0.7153608032840941},"output":[0]},{"input":{"r":0.7577741795877098,"g":0.2581289060328271,"b":0.8739493323130612},"output":[1]},{"input":{"r":0.6981088142357834,"g":0.7906357829548014,"b":0.5874564567128471},"output":[0]},{"input":{"r":0.9990505742707252,"g":0.06856220596673168,"b":0.03607546139533713},"output":[1]},{"input":{"r":0.06434727124073047,"g":0.5475569467117816,"b":0.8250664842241922},"output":[1]},{"input":{"r":0.8972942506334467,"g":0.3317853670694455,"b":0.7007551203680082},"output":[1]},{"input":{"r":0.8894004841074628,"g":0.2525985317207957,"b":0.36648273413460863},"output":[1]},{"input":{"r":0.7245816756142334,"g":0.7992909141790292,"b":0.880452702064026},"output":[0]},{"input":{"r":0.7560158876901424,"g":0.9246053455242926,"b":0.9038792598805219},"output":[0]},{"input":{"r":0.7030956610782628,"g":0.7080134122891901,"b":0.5512359792546726},"output":[0]},{"input":{"r":0.28551333457819816,"g":0.15896557864333416,"b":0.6485206818394034},"output":[1]},{"input":{"r":0.7095380104447835,"g":0.6065732878220236,"b":0.7529625809658846},"output":[0]},{"input":{"r":0.8292413427320762,"g":0.3269857499950761,"b":0.7448097734448285},"output":[1]},{"input":{"r":0.9957295749169963,"g":0.10978607663339046,"b":0.4875481865553215},"output":[1]},{"input":{"r":0.9412732795508192,"g":0.5389932420867765,"b":0.353931324365915},"output":[0]},{"input":{"r":0.4932220788394708,"g":0.1694575621394523,"b":0.6312551445946197},"output":[1]},{"input":{"r":0.7871439771160746,"g":0.5172408728148705,"b":0.8519076816684832},"output":[0]},{"input":{"r":0.5130364732632291,"g":0.22655014728633782,"b":0.8417748724309104},"output":[1]},{"input":{"r":0.37006207566749105,"g":0.7748244179389148,"b":0.3363551865287784},"output":[0]},{"input":{"r":0.9920280490559883,"g":0.0742110875762163,"b":0.07229852561547867},"output":[1]},{"input":{"r":0.3361078903370902,"g":0.3362480488675965,"b":0.03447103910076876},"output":[1]},{"input":{"r":0.0061763968909354094,"g":0.277252353607484,"b":0.9492295628557692},"output":[1]},{"input":{"r":0.5167730085992255,"g":0.7696793909454407,"b":0.490515498824194},"output":[0]},{"input":{"r":0.1656394689286771,"g":0.8449520541978024,"b":0.9318692817598384},"output":[0]},{"input":{"r":0.20260441541497043,"g":0.8553075826021128,"b":0.22781584573889546},"output":[0]},{"input":{"r":0.4807796011218439,"g":0.7901824168206504,"b":0.9111159259401094},"output":[1]},{"input":{"r":0.04668392637707397,"g":0.0015076262336766177,"b":0.43812113801145824},"output":[1]},{"input":{"r":0.6869803516159485,"g":0.6272738573028276,"b":0.9764022784030226},"output":[0]},{"input":{"r":0.4663160061466822,"g":0.5347149402192664,"b":0.5961820367310044},"output":[0]},{"input":{"r":0.7642060312782595,"g":0.7963727195226218,"b":0.008364920664722275},"output":[0]},{"input":{"r":0.8569382515762236,"g":0.24224712494761103,"b":0.3522029175471797},"output":[1]},{"input":{"r":0.5368143232891205,"g":0.011021354045535947,"b":0.06874079729886207},"output":[1]}
]

net.train(data)

const color = document.getElementById('color')
const work = document.getElementById('work')
const guess = document.getElementById('guess')
const wButton = document.getElementById('white-button')
const bButton = document.getElementById('black-button')
const pButton = document.getElementById('print-button')
const changeBG = document.getElementById('change')
const workguess = document.getElementById('workguess')
let printo = document.getElementById('print-data')
let randcolor
let randocolor
setRandomColor()
setRandomColorwork()

wButton.addEventListener('click', () => {
  chooseColor(1)
})

bButton.addEventListener('click', () => {
  chooseColor(0)
})
pButton.addEventListener('click', print)

changeBG.addEventListener('click',setRandomColorwork)

function chooseColor(value) {
  data.push({
    input: randcolor,
    output: [value]
  })
  setRandomColor()
}

function print() {
  console.log(JSON.stringify(data))
  printo.append(JSON.stringify(data))
}

function setRandomColor() {
  randcolor = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  }
  const compGuess = net.run(randcolor)[0]
  guess.style.color = compGuess > .5 ? '#FFF' : '#000'
  color.style.backgroundColor = `rgba(${randcolor.r *255}, ${randcolor.g *255}, ${randcolor.b *255})`
}

function setRandomColorwork() {
  randocolor = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  }
  const compuGuess = net.run(randocolor)[0]
  workguess.style.color = compuGuess > .5 ? '#FFF' : '#000'
  work.style.backgroundColor = `rgba(${randocolor.r *255}, ${randocolor.g *255}, ${randocolor.b *255})`
}
