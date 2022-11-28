
import { css } from 'styled-components'

// Colors System
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  gray,
  blueGray,
  black,
  white
} from './colors-system'

const color = css`

    /* Alls */
    ${props => props.color && css` color: ${props => props.color}; `}

    /* White */
    ${props => props.colorWhite && css` color: ${white}; `}
    
    /* Black */
    ${props => props.colorBlack && css` color: ${black}; `}
    /* Red */
    ${props => props.colorRed50 && css` color: ${red[50]}; `}
    ${props => props.colorRed100 && css` color: ${red[100]}; `}
    ${props => props.colorRed200 && css` color: ${red[200]}; `}
    ${props => props.colorRed300 && css` color: ${red[300]}; `}
    ${props => props.colorRed400 && css` color: ${red[400]}; `}
    ${props => props.colorRed500 && css` color: ${red[500]}; `}
    ${props => props.colorRed600 && css` color: ${red[600]}; `}
    ${props => props.colorRed700 && css` color: ${red[700]}; `}
    ${props => props.colorRed800 && css` color: ${red[800]}; `}
    ${props => props.colorRed900 && css` color: ${red[900]}; `}
    ${props => props.colorRedA100 && css` color: ${red.a100}; `}
    ${props => props.colorRedA200 && css` color: ${red.a200}; `}
    ${props => props.colorRedA400 && css` color: ${red.a400}; `}
    ${props => props.colorRedA700 && css` color: ${red.a700}; `}

    /* Pink */
    ${props => props.colorPink50 && css` color: ${pink[50]}; `}
    ${props => props.colorPink100 && css` color: ${pink[100]}; `}
    ${props => props.colorPink200 && css` color: ${pink[200]}; `}
    ${props => props.colorPink300 && css` color: ${pink[300]}; `}
    ${props => props.colorPink400 && css` color: ${pink[400]}; `}
    ${props => props.colorPink500 && css` color: ${pink[500]}; `}
    ${props => props.colorPink600 && css` color: ${pink[600]}; `}
    ${props => props.colorPink700 && css` color: ${pink[700]}; `}
    ${props => props.colorPink800 && css` color: ${pink[800]}; `}
    ${props => props.colorPink900 && css` color: ${pink[900]}; `}
    ${props => props.colorPinkA100 && css` color: ${pink.a100}; `}
    ${props => props.colorPinkA200 && css` color: ${pink.a200}; `}
    ${props => props.colorPinkA400 && css` color: ${pink.a400}; `}
    ${props => props.colorPinkA700 && css` color: ${pink.a700}; `}

    /* Purple */
    ${props => props.colorPurple50 && css` color: ${purple[50]}; `}
    ${props => props.colorPurple100 && css` color: ${purple[100]}; `}
    ${props => props.colorPurple200 && css` color: ${purple[200]}; `}
    ${props => props.colorPurple300 && css` color: ${purple[300]}; `}
    ${props => props.colorPurple400 && css` color: ${purple[400]}; `}
    ${props => props.colorPurple500 && css` color: ${purple[500]}; `}
    ${props => props.colorPurple600 && css` color: ${purple[600]}; `}
    ${props => props.colorPurple700 && css` color: ${purple[700]}; `}
    ${props => props.colorPurple800 && css` color: ${purple[800]}; `}
    ${props => props.colorPurple900 && css` color: ${purple[900]}; `}
    ${props => props.colorPurpleA100 && css` color: ${purple.a100}; `}
    ${props => props.colorPurpleA200 && css` color: ${purple.a200}; `}
    ${props => props.colorPurpleA400 && css` color: ${purple.a400}; `}
    ${props => props.colorPurpleA700 && css` color: ${purple.a700}; `}

    /* Depp Purple */
    ${props => props.colorDeepPurple50 && css` color: ${deepPurple[50]}; `}
    ${props => props.colorDeepPurple100 && css` color: ${deepPurple[100]}; `}
    ${props => props.colorDeepPurple200 && css` color: ${deepPurple[200]}; `}
    ${props => props.colorDeepPurple300 && css` color: ${deepPurple[300]}; `}
    ${props => props.colorDeepPurple400 && css` color: ${deepPurple[400]}; `}
    ${props => props.colorDeepPurple500 && css` color: ${deepPurple[500]}; `}
    ${props => props.colorDeepPurple600 && css` color: ${deepPurple[600]}; `}
    ${props => props.colorDeepPurple700 && css` color: ${deepPurple[700]}; `}
    ${props => props.colorDeepPurple800 && css` color: ${deepPurple[800]}; `}
    ${props => props.colorDeepPurple900 && css` color: ${deepPurple[900]}; `}
    ${props => props.colorDeepPurpleA100 && css` color: ${deepPurple.a100}; `}
    ${props => props.colorDeepPurpleA200 && css` color: ${deepPurple.a200}; `}
    ${props => props.colorDeepPurpleA400 && css` color: ${deepPurple.a400}; `}
    ${props => props.colorDeepPurpleA700 && css` color: ${deepPurple.a700}; `}

    /* Indigo */
    ${props => props.colorIndigo50 && css` color: ${indigo[50]}; `}
    ${props => props.colorIndigo100 && css` color: ${indigo[100]}; `}
    ${props => props.colorIndigo200 && css` color: ${indigo[200]}; `}
    ${props => props.colorIndigo300 && css` color: ${indigo[300]}; `}
    ${props => props.colorIndigo400 && css` color: ${indigo[400]}; `}
    ${props => props.colorIndigo500 && css` color: ${indigo[500]}; `}
    ${props => props.colorIndigo600 && css` color: ${indigo[600]}; `}
    ${props => props.colorIndigo700 && css` color: ${indigo[700]}; `}
    ${props => props.colorIndigo800 && css` color: ${indigo[800]}; `}
    ${props => props.colorIndigo900 && css` color: ${indigo[900]}; `}
    ${props => props.colorIndigoA100 && css` color: ${indigo.a100}; `}
    ${props => props.colorIndigoA200 && css` color: ${indigo.a200}; `}
    ${props => props.colorIndigoA400 && css` color: ${indigo.a400}; `}
    ${props => props.colorIndigoA700 && css` color: ${indigo.a700}; `}

    /* Blue */
    ${props => props.colorBlue50 && css` color: ${blue[50]}; `}
    ${props => props.colorBlue100 && css` color: ${blue[100]}; `}
    ${props => props.colorBlue200 && css` color: ${blue[200]}; `}
    ${props => props.colorBlue300 && css` color: ${blue[300]}; `}
    ${props => props.colorBlue400 && css` color: ${blue[400]}; `}
    ${props => props.colorBlue500 && css` color: ${blue[500]}; `}
    ${props => props.colorBlue600 && css` color: ${blue[600]}; `}
    ${props => props.colorBlue700 && css` color: ${blue[700]}; `}
    ${props => props.colorBlue800 && css` color: ${blue[800]}; `}
    ${props => props.colorBlue900 && css` color: ${blue[900]}; `}
    ${props => props.colorBlueA100 && css` color: ${blue.a100}; `}
    ${props => props.colorBlueA200 && css` color: ${blue.a200}; `}
    ${props => props.colorBlueA400 && css` color: ${blue.a400}; `}
    ${props => props.colorBlueA700 && css` color: ${blue.a700}; `}

    /* Light Blue */
    ${props => props.colorLightBlue50 && css` color: ${lightBlue[50]}; `}
    ${props => props.colorLightBlue100 && css` color: ${lightBlue[100]}; `}
    ${props => props.colorLightBlue200 && css` color: ${lightBlue[200]}; `}
    ${props => props.colorLightBlue300 && css` color: ${lightBlue[300]}; `}
    ${props => props.colorLightBlue400 && css` color: ${lightBlue[400]}; `}
    ${props => props.colorLightBlue500 && css` color: ${lightBlue[500]}; `}
    ${props => props.colorLightBlue600 && css` color: ${lightBlue[600]}; `}
    ${props => props.colorLightBlue700 && css` color: ${lightBlue[700]}; `}
    ${props => props.colorLightBlue800 && css` color: ${lightBlue[800]}; `}
    ${props => props.colorLightBlue900 && css` color: ${lightBlue[900]}; `}
    ${props => props.colorLightBlueA100 && css` color: ${lightBlue.a100}; `}
    ${props => props.colorLightBlueA200 && css` color: ${lightBlue.a200}; `}
    ${props => props.colorLightBlueA400 && css` color: ${lightBlue.a400}; `}
    ${props => props.colorLightBlueA700 && css` color: ${lightBlue.a700}; `}

    /* Cyan */
    ${props => props.colorCyan50 && css` color: ${cyan[50]}; `}
    ${props => props.colorCyan100 && css` color: ${cyan[100]}; `}
    ${props => props.colorCyan200 && css` color: ${cyan[200]}; `}
    ${props => props.colorCyan300 && css` color: ${cyan[300]}; `}
    ${props => props.colorCyan400 && css` color: ${cyan[400]}; `}
    ${props => props.colorCyan500 && css` color: ${cyan[500]}; `}
    ${props => props.colorCyan600 && css` color: ${cyan[600]}; `}
    ${props => props.colorCyan700 && css` color: ${cyan[700]}; `}
    ${props => props.colorCyan800 && css` color: ${cyan[800]}; `}
    ${props => props.colorCyan900 && css` color: ${cyan[900]}; `}
    ${props => props.colorCyanA100 && css` color: ${cyan.a100}; `}
    ${props => props.colorCyanA200 && css` color: ${cyan.a200}; `}
    ${props => props.colorCyanA400 && css` color: ${cyan.a400}; `}
    ${props => props.colorCyanA700 && css` color: ${cyan.a700}; `}

    /* Teal */
    ${props => props.colorTeal50 && css` color: ${teal[50]}; `}
    ${props => props.colorTeal100 && css` color: ${teal[100]}; `}
    ${props => props.colorTeal200 && css` color: ${teal[200]}; `}
    ${props => props.colorTeal300 && css` color: ${teal[300]}; `}
    ${props => props.colorTeal400 && css` color: ${teal[400]}; `}
    ${props => props.colorTeal500 && css` color: ${teal[500]}; `}
    ${props => props.colorTeal600 && css` color: ${teal[600]}; `}
    ${props => props.colorTeal700 && css` color: ${teal[700]}; `}
    ${props => props.colorTeal800 && css` color: ${teal[800]}; `}
    ${props => props.colorTeal900 && css` color: ${teal[900]}; `}
    ${props => props.colorTealA100 && css` color: ${teal.a100}; `}
    ${props => props.colorTealA200 && css` color: ${teal.a200}; `}
    ${props => props.colorTealA400 && css` color: ${teal.a400}; `}
    ${props => props.colorTealA700 && css` color: ${teal.a700}; `}

    /* Green */
    ${props => props.colorGreen50 && css` color: ${green[50]}; `}
    ${props => props.colorGreen100 && css` color: ${green[100]}; `}
    ${props => props.colorGreen200 && css` color: ${green[200]}; `}
    ${props => props.colorGreen300 && css` color: ${green[300]}; `}
    ${props => props.colorGreen400 && css` color: ${green[400]}; `}
    ${props => props.colorGreen500 && css` color: ${green[500]}; `}
    ${props => props.colorGreen600 && css` color: ${green[600]}; `}
    ${props => props.colorGreen700 && css` color: ${green[700]}; `}
    ${props => props.colorGreen800 && css` color: ${green[800]}; `}
    ${props => props.colorGreen900 && css` color: ${green[900]}; `}
    ${props => props.colorGreenA100 && css` color: ${green.a100}; `}
    ${props => props.colorGreenA200 && css` color: ${green.a200}; `}
    ${props => props.colorGreenA400 && css` color: ${green.a400}; `}
    ${props => props.colorGreenA700 && css` color: ${green.a700}; `}

    /* Light Green */
    ${props => props.colorLightGreen50 && css` color: ${lightGreen[50]}; `}
    ${props => props.colorLightGreen100 && css` color: ${lightGreen[100]}; `}
    ${props => props.colorLightGreen200 && css` color: ${lightGreen[200]}; `}
    ${props => props.colorLightGreen300 && css` color: ${lightGreen[300]}; `}
    ${props => props.colorLightGreen400 && css` color: ${lightGreen[400]}; `}
    ${props => props.colorLightGreen500 && css` color: ${lightGreen[500]}; `}
    ${props => props.colorLightGreen600 && css` color: ${lightGreen[600]}; `}
    ${props => props.colorLightGreen700 && css` color: ${lightGreen[700]}; `}
    ${props => props.colorLightGreen800 && css` color: ${lightGreen[800]}; `}
    ${props => props.colorLightGreen900 && css` color: ${lightGreen[900]}; `}
    ${props => props.colorLightGreenA100 && css` color: ${lightGreen.a100}; `}
    ${props => props.colorLightGreenA200 && css` color: ${lightGreen.a200}; `}
    ${props => props.colorLightGreenA400 && css` color: ${lightGreen.a400}; `}
    ${props => props.colorLightGreenA700 && css` color: ${lightGreen.a700}; `}

    /* Lime */
    ${props => props.colorLime50 && css` color: ${lime[50]}; `}
    ${props => props.colorLime100 && css` color: ${lime[100]}; `}
    ${props => props.colorLime200 && css` color: ${lime[200]}; `}
    ${props => props.colorLime300 && css` color: ${lime[300]}; `}
    ${props => props.colorLime400 && css` color: ${lime[400]}; `}
    ${props => props.colorLime500 && css` color: ${lime[500]}; `}
    ${props => props.colorLime600 && css` color: ${lime[600]}; `}
    ${props => props.colorLime700 && css` color: ${lime[700]}; `}
    ${props => props.colorLime800 && css` color: ${lime[800]}; `}
    ${props => props.colorLime900 && css` color: ${lime[900]}; `}
    ${props => props.colorLimeA100 && css` color: ${lime.a100}; `}
    ${props => props.colorLimeA200 && css` color: ${lime.a200}; `}
    ${props => props.colorLimeA400 && css` color: ${lime.a400}; `}
    ${props => props.colorLimeA700 && css` color: ${lime.a700}; `}

    /* Yellow */
    ${props => props.colorYellow50 && css` color: ${yellow[50]}; `}
    ${props => props.colorYellow100 && css` color: ${yellow[100]}; `}
    ${props => props.colorYellow200 && css` color: ${yellow[200]}; `}
    ${props => props.colorYellow300 && css` color: ${yellow[300]}; `}
    ${props => props.colorYellow400 && css` color: ${yellow[400]}; `}
    ${props => props.colorYellow500 && css` color: ${yellow[500]}; `}
    ${props => props.colorYellow600 && css` color: ${yellow[600]}; `}
    ${props => props.colorYellow700 && css` color: ${yellow[700]}; `}
    ${props => props.colorYellow800 && css` color: ${yellow[800]}; `}
    ${props => props.colorYellow900 && css` color: ${yellow[900]}; `}
    ${props => props.colorYellowA100 && css` color: ${yellow.a100}; `}
    ${props => props.colorYellowA200 && css` color: ${yellow.a200}; `}
    ${props => props.colorYellowA400 && css` color: ${yellow.a400}; `}
    ${props => props.colorYellowA700 && css` color: ${yellow.a700}; `}

    /* Amber */
    ${props => props.colorAmber50 && css` color: ${amber[50]}; `}
    ${props => props.colorAmber100 && css` color: ${amber[100]}; `}
    ${props => props.colorAmber200 && css` color: ${amber[200]}; `}
    ${props => props.colorAmber300 && css` color: ${amber[300]}; `}
    ${props => props.colorAmber400 && css` color: ${amber[400]}; `}
    ${props => props.colorAmber500 && css` color: ${amber[500]}; `}
    ${props => props.colorAmber600 && css` color: ${amber[600]}; `}
    ${props => props.colorAmber700 && css` color: ${amber[700]}; `}
    ${props => props.colorAmber800 && css` color: ${amber[800]}; `}
    ${props => props.colorAmber900 && css` color: ${amber[900]}; `}
    ${props => props.colorAmberA100 && css` color: ${amber.a100}; `}
    ${props => props.colorAmberA200 && css` color: ${amber.a200}; `}
    ${props => props.colorAmberA400 && css` color: ${amber.a400}; `}
    ${props => props.colorAmberA700 && css` color: ${amber.a700}; `}

    /* Orange */
    ${props => props.colorOrange50 && css` color: ${orange[50]}; `}
    ${props => props.colorOrange100 && css` color: ${orange[100]}; `}
    ${props => props.colorOrange200 && css` color: ${orange[200]}; `}
    ${props => props.colorOrange300 && css` color: ${orange[300]}; `}
    ${props => props.colorOrange400 && css` color: ${orange[400]}; `}
    ${props => props.colorOrange500 && css` color: ${orange[500]}; `}
    ${props => props.colorOrange600 && css` color: ${orange[600]}; `}
    ${props => props.colorOrange700 && css` color: ${orange[700]}; `}
    ${props => props.colorOrange800 && css` color: ${orange[800]}; `}
    ${props => props.colorOrange900 && css` color: ${orange[900]}; `}
    ${props => props.colorOrangeA100 && css` color: ${orange.a100}; `}
    ${props => props.colorOrangeA200 && css` color: ${orange.a200}; `}
    ${props => props.colorOrangeA400 && css` color: ${orange.a400}; `}
    ${props => props.colorOrangeA700 && css` color: ${orange.a700}; `}

    /* Deep Orange */
    ${props => props.colorDeepOrange50 && css` color: ${deepOrange[50]}; `}
    ${props => props.colorDeepOrange100 && css` color: ${deepOrange[100]}; `}
    ${props => props.colorDeepOrange200 && css` color: ${deepOrange[200]}; `}
    ${props => props.colorDeepOrange300 && css` color: ${deepOrange[300]}; `}
    ${props => props.colorDeepOrange400 && css` color: ${deepOrange[400]}; `}
    ${props => props.colorDeepOrange500 && css` color: ${deepOrange[500]}; `}
    ${props => props.colorDeepOrange600 && css` color: ${deepOrange[600]}; `}
    ${props => props.colorDeepOrange700 && css` color: ${deepOrange[700]}; `}
    ${props => props.colorDeepOrange800 && css` color: ${deepOrange[800]}; `}
    ${props => props.colorDeepOrange900 && css` color: ${deepOrange[900]}; `}
    ${props => props.colorDeepOrangeA100 && css` color: ${deepOrange.a100}; `}
    ${props => props.colorDeepOrangeA200 && css` color: ${deepOrange.a200}; `}
    ${props => props.colorDeepOrangeA400 && css` color: ${deepOrange.a400}; `}
    ${props => props.colorDeepOrangeA700 && css` color: ${deepOrange.a700}; `}

    /* Brown */
    ${props => props.colorBrown50 && css` color: ${brown[50]}; `}
    ${props => props.colorBrown100 && css` color: ${brown[100]}; `}
    ${props => props.colorBrown200 && css` color: ${brown[200]}; `}
    ${props => props.colorBrown300 && css` color: ${brown[300]}; `}
    ${props => props.colorBrown400 && css` color: ${brown[400]}; `}
    ${props => props.colorBrown500 && css` color: ${brown[500]}; `}
    ${props => props.colorBrown600 && css` color: ${brown[600]}; `}
    ${props => props.colorBrown700 && css` color: ${brown[700]}; `}
    ${props => props.colorBrown800 && css` color: ${brown[800]}; `}
    ${props => props.colorBrown900 && css` color: ${brown[900]}; `}
    ${props => props.colorBrownA100 && css` color: ${brown.a100}; `}
    ${props => props.colorBrownA200 && css` color: ${brown.a200}; `}
    ${props => props.colorBrownA400 && css` color: ${brown.a400}; `}
    ${props => props.colorBrownA700 && css` color: ${brown.a700}; `}

    /* Gray */
    ${props => props.colorGray50 && css` color: ${gray[50]}; `}
    ${props => props.colorGray100 && css` color: ${gray[100]}; `}
    ${props => props.colorGray200 && css` color: ${gray[200]}; `}
    ${props => props.colorGray300 && css` color: ${gray[300]}; `}
    ${props => props.colorGray400 && css` color: ${gray[400]}; `}
    ${props => props.colorGray500 && css` color: ${gray[500]}; `}
    ${props => props.colorGray600 && css` color: ${gray[600]}; `}
    ${props => props.colorGray700 && css` color: ${gray[700]}; `}
    ${props => props.colorGray800 && css` color: ${gray[800]}; `}
    ${props => props.colorGray900 && css` color: ${gray[900]}; `}
    ${props => props.colorGrayA100 && css` color: ${gray.a100}; `}
    ${props => props.colorGrayA200 && css` color: ${gray.a200}; `}
    ${props => props.colorGrayA400 && css` color: ${gray.a400}; `}
    ${props => props.colorGrayA700 && css` color: ${gray.a700}; `}

    /* Blue Gray */
    ${props => props.colorBlueGray50 && css` color: ${blueGray[50]}; `}
    ${props => props.colorBlueGray100 && css` color: ${blueGray[100]}; `}
    ${props => props.colorBlueGray200 && css` color: ${blueGray[200]}; `}
    ${props => props.colorBlueGray300 && css` color: ${blueGray[300]}; `}
    ${props => props.colorBlueGray400 && css` color: ${blueGray[400]}; `}
    ${props => props.colorBlueGray500 && css` color: ${blueGray[500]}; `}
    ${props => props.colorBlueGray600 && css` color: ${blueGray[600]}; `}
    ${props => props.colorBlueGray700 && css` color: ${blueGray[700]}; `}
    ${props => props.colorBlueGray800 && css` color: ${blueGray[800]}; `}
    ${props => props.colorBlueGray900 && css` color: ${blueGray[900]}; `}
    ${props => props.colorBlueGrayA100 && css` color: ${blueGray.a100}; `}
    ${props => props.colorBlueGrayA200 && css` color: ${blueGray.a200}; `}
    ${props => props.colorBlueGrayA400 && css` color: ${blueGray.a400}; `}
    ${props => props.colorBlueGrayA700 && css` color: ${blueGray.a700}; `}

`

export default color
