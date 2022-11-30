// het element
const x = document.querySelectorAll('.artwork-random2')[0]

const reds = [
  '#C8395B',
  '#A82B22',
  '#CA449E',
  '#EA6033',
  '#EC7598'
]

const yellows = [
  '#FCD149',
  '#FDE392',
  '#FFCD37',
  '#EA6033',
  '#E5A937',
  '#FEA53D'
]

const blues = [
  '#262079',
  '#2269BD',
  '#3EA0E1',
  '#262079',
  '#131863'
]

const greens = [
  '#255443',
  '#1A3A02',
  '#5FBC62',
  '#428A66',
  '#DAE985',
  '#C3D26E'
]

const variables = [
  reds,
  blues,
  greens,
  yellows
]

const color = variables[Math.floor(Math.random() * variables.length)]

for (let i = 0; i < 8; i++) {
  const result = color[Math.floor(Math.random() * color.length)]
  x.style.setProperty('--h' + i, result)
}
