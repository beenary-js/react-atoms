---
to: <%= outDir %>/theme.<%= language %>
---

const teal = {
  '50': 'hsl(170, 53%, 81%)',
  '100': 'hsl(174, 46%, 69%)',
  '200': 'hsl(177, 42%, 59%)',
  '300': 'hsl(179, 39%, 51%)',
  '400': 'hsl(182, 52%, 42%)',
  '500': 'hsl(185, 57%, 36%)',
  '600': 'hsl(188, 62%, 30%)',
  '700': 'hsl(191, 69%, 24%)',
  '800': 'hsl(194, 73%, 17%)',
  '900': 'hsl(200, 82%, 11%)'
}

const green = {
  '50': 'hsl(163, 60%, 82%)',
  '100': 'hsl(163, 56%, 73%)',
  '200': 'hsl(163, 50%, 65%)',
  '300': 'hsl(163, 45%, 58%)',
  '400': 'hsl(163, 41%, 52%)',
  '500': 'hsl(163, 47%, 41%)',
  '600': 'hsl(163, 62%, 31%)',
  '700': 'hsl(163, 76%, 23%)',
  '800': 'hsl(162, 79%, 17%)',
  '900': 'hsl(163, 89%, 11%)'
}

const gray = {
'0': 'hsl(180, 46%, 99%)',
'100': 'hsl(180, 16%, 94%)',
'200': 'hsl(180, 8%, 88%)',
'300': 'hsl(180, 4%, 78%)',
'400': 'hsl(180, 2%, 68%)',
'500': 'hsl(180, 1%, 59%)',
'600': 'hsl(180, 1%, 49%)',
'700': 'hsl(180, 1%, 39%)',
'800': 'hsl(180, 1%, 19%)',
'900': 'hsl(180, 0%, 10%)',
}

export const theme = { 
  colors: {
    primary: {
      ...teal,
      light: teal[100], 
      base: teal[400], 
      dark: teal[700],
    },
    secondary: {
      ...green,
      light: green[100], 
      base: green[400], 
      dark: green[700],
    },
    gray
  }
}
