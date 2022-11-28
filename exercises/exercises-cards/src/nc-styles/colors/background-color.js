
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
  white,
  black
} from './colors-system'

const backgroundColor = css`
    
    /* Alls */
    ${props => props.backgroundColor && css` background-color: ${props => props.backgroundColor}; `}

    /* White */
    ${props => props.backgroundColorWhite && css` background-color: ${white}; `}
    
    /* Black */
    ${props => props.backgroundColorBlack && css` background-color: ${black}; `}
    /* Red */
    ${props => props.backgroundColorRed50 && css` background-color: ${red[50]}; `}
    ${props => props.backgroundColorRed100 && css` background-color: ${red[100]}; `}
    ${props => props.backgroundColorRed200 && css` background-color: ${red[200]}; `}
    ${props => props.backgroundColorRed300 && css` background-color: ${red[300]}; `}
    ${props => props.backgroundColorRed400 && css` background-color: ${red[400]}; `}
    ${props => props.backgroundColorRed500 && css` background-color: ${red[500]}; `}
    ${props => props.backgroundColorRed600 && css` background-color: ${red[600]}; `}
    ${props => props.backgroundColorRed700 && css` background-color: ${red[700]}; `}
    ${props => props.backgroundColorRed800 && css` background-color: ${red[800]}; `}
    ${props => props.backgroundColorRed900 && css` background-color: ${red[900]}; `}
    ${props => props.backgroundColorRedA100 && css` background-color: ${red.a100}; `}
    ${props => props.backgroundColorRedA200 && css` background-color: ${red.a200}; `}
    ${props => props.backgroundColorRedA400 && css` background-color: ${red.a400}; `}
    ${props => props.backgroundColorRedA700 && css` background-color: ${red.a700}; `}

    /* Pink */
    ${props => props.backgroundColorPink50 && css` background-color: ${pink[50]}; `}
    ${props => props.backgroundColorPink100 && css` background-color: ${pink[100]}; `}
    ${props => props.backgroundColorPink200 && css` background-color: ${pink[200]}; `}
    ${props => props.backgroundColorPink300 && css` background-color: ${pink[300]}; `}
    ${props => props.backgroundColorPink400 && css` background-color: ${pink[400]}; `}
    ${props => props.backgroundColorPink500 && css` background-color: ${pink[500]}; `}
    ${props => props.backgroundColorPink600 && css` background-color: ${pink[600]}; `}
    ${props => props.backgroundColorPink700 && css` background-color: ${pink[700]}; `}
    ${props => props.backgroundColorPink800 && css` background-color: ${pink[800]}; `}
    ${props => props.backgroundColorPink900 && css` background-color: ${pink[900]}; `}
    ${props => props.backgroundColorPinkA100 && css` background-color: ${pink.a100}; `}
    ${props => props.backgroundColorPinkA200 && css` background-color: ${pink.a200}; `}
    ${props => props.backgroundColorPinkA400 && css` background-color: ${pink.a400}; `}
    ${props => props.backgroundColorPinkA700 && css` background-color: ${pink.a700}; `}

    /* Purple */
    ${props => props.backgroundColorPurple50 && css` background-color: ${purple[50]}; `}
    ${props => props.backgroundColorPurple100 && css` background-color: ${purple[100]}; `}
    ${props => props.backgroundColorPurple200 && css` background-color: ${purple[200]}; `}
    ${props => props.backgroundColorPurple300 && css` background-color: ${purple[300]}; `}
    ${props => props.backgroundColorPurple400 && css` background-color: ${purple[400]}; `}
    ${props => props.backgroundColorPurple500 && css` background-color: ${purple[500]}; `}
    ${props => props.backgroundColorPurple600 && css` background-color: ${purple[600]}; `}
    ${props => props.backgroundColorPurple700 && css` background-color: ${purple[700]}; `}
    ${props => props.backgroundColorPurple800 && css` background-color: ${purple[800]}; `}
    ${props => props.backgroundColorPurple900 && css` background-color: ${purple[900]}; `}
    ${props => props.backgroundColorPurpleA100 && css` background-color: ${purple.a100}; `}
    ${props => props.backgroundColorPurpleA200 && css` background-color: ${purple.a200}; `}
    ${props => props.backgroundColorPurpleA400 && css` background-color: ${purple.a400}; `}
    ${props => props.backgroundColorPurpleA700 && css` background-color: ${purple.a700}; `}

    /* Depp Purple */
    ${props => props.backgroundColorDeepPurple50 && css` background-color: ${deepPurple[50]}; `}
    ${props => props.backgroundColorDeepPurple100 && css` background-color: ${deepPurple[100]}; `}
    ${props => props.backgroundColorDeepPurple200 && css` background-color: ${deepPurple[200]}; `}
    ${props => props.backgroundColorDeepPurple300 && css` background-color: ${deepPurple[300]}; `}
    ${props => props.backgroundColorDeepPurple400 && css` background-color: ${deepPurple[400]}; `}
    ${props => props.backgroundColorDeepPurple500 && css` background-color: ${deepPurple[500]}; `}
    ${props => props.backgroundColorDeepPurple600 && css` background-color: ${deepPurple[600]}; `}
    ${props => props.backgroundColorDeepPurple700 && css` background-color: ${deepPurple[700]}; `}
    ${props => props.backgroundColorDeepPurple800 && css` background-color: ${deepPurple[800]}; `}
    ${props => props.backgroundColorDeepPurple900 && css` background-color: ${deepPurple[900]}; `}
    ${props => props.backgroundColorDeepPurpleA100 && css` background-color: ${deepPurple.a100}; `}
    ${props => props.backgroundColorDeepPurpleA200 && css` background-color: ${deepPurple.a200}; `}
    ${props => props.backgroundColorDeepPurpleA400 && css` background-color: ${deepPurple.a400}; `}
    ${props => props.backgroundColorDeepPurpleA700 && css` background-color: ${deepPurple.a700}; `}

    /* Indigo */
    ${props => props.backgroundColorIndigo50 && css` background-color: ${indigo[50]}; `}
    ${props => props.backgroundColorIndigo100 && css` background-color: ${indigo[100]}; `}
    ${props => props.backgroundColorIndigo200 && css` background-color: ${indigo[200]}; `}
    ${props => props.backgroundColorIndigo300 && css` background-color: ${indigo[300]}; `}
    ${props => props.backgroundColorIndigo400 && css` background-color: ${indigo[400]}; `}
    ${props => props.backgroundColorIndigo500 && css` background-color: ${indigo[500]}; `}
    ${props => props.backgroundColorIndigo600 && css` background-color: ${indigo[600]}; `}
    ${props => props.backgroundColorIndigo700 && css` background-color: ${indigo[700]}; `}
    ${props => props.backgroundColorIndigo800 && css` background-color: ${indigo[800]}; `}
    ${props => props.backgroundColorIndigo900 && css` background-color: ${indigo[900]}; `}
    ${props => props.backgroundColorIndigoA100 && css` background-color: ${indigo.a100}; `}
    ${props => props.backgroundColorIndigoA200 && css` background-color: ${indigo.a200}; `}
    ${props => props.backgroundColorIndigoA400 && css` background-color: ${indigo.a400}; `}
    ${props => props.backgroundColorIndigoA700 && css` background-color: ${indigo.a700}; `}

    /* Blue */
    ${props => props.backgroundColorBlue50 && css` background-color: ${blue[50]}; `}
    ${props => props.backgroundColorBlue100 && css` background-color: ${blue[100]}; `}
    ${props => props.backgroundColorBlue200 && css` background-color: ${blue[200]}; `}
    ${props => props.backgroundColorBlue300 && css` background-color: ${blue[300]}; `}
    ${props => props.backgroundColorBlue400 && css` background-color: ${blue[400]}; `}
    ${props => props.backgroundColorBlue500 && css` background-color: ${blue[500]}; `}
    ${props => props.backgroundColorBlue600 && css` background-color: ${blue[600]}; `}
    ${props => props.backgroundColorBlue700 && css` background-color: ${blue[700]}; `}
    ${props => props.backgroundColorBlue800 && css` background-color: ${blue[800]}; `}
    ${props => props.backgroundColorBlue900 && css` background-color: ${blue[900]}; `}
    ${props => props.backgroundColorBlueA100 && css` background-color: ${blue.a100}; `}
    ${props => props.backgroundColorBlueA200 && css` background-color: ${blue.a200}; `}
    ${props => props.backgroundColorBlueA400 && css` background-color: ${blue.a400}; `}
    ${props => props.backgroundColorBlueA700 && css` background-color: ${blue.a700}; `}

    /* Light Blue */
    ${props => props.backgroundColorLightBlue50 && css` background-color: ${lightBlue[50]}; `}
    ${props => props.backgroundColorLightBlue100 && css` background-color: ${lightBlue[100]}; `}
    ${props => props.backgroundColorLightBlue200 && css` background-color: ${lightBlue[200]}; `}
    ${props => props.backgroundColorLightBlue300 && css` background-color: ${lightBlue[300]}; `}
    ${props => props.backgroundColorLightBlue400 && css` background-color: ${lightBlue[400]}; `}
    ${props => props.backgroundColorLightBlue500 && css` background-color: ${lightBlue[500]}; `}
    ${props => props.backgroundColorLightBlue600 && css` background-color: ${lightBlue[600]}; `}
    ${props => props.backgroundColorLightBlue700 && css` background-color: ${lightBlue[700]}; `}
    ${props => props.backgroundColorLightBlue800 && css` background-color: ${lightBlue[800]}; `}
    ${props => props.backgroundColorLightBlue900 && css` background-color: ${lightBlue[900]}; `}
    ${props => props.backgroundColorLightBlueA100 && css` background-color: ${lightBlue.a100}; `}
    ${props => props.backgroundColorLightBlueA200 && css` background-color: ${lightBlue.a200}; `}
    ${props => props.backgroundColorLightBlueA400 && css` background-color: ${lightBlue.a400}; `}
    ${props => props.backgroundColorLightBlueA700 && css` background-color: ${lightBlue.a700}; `}

    /* Cyan */
    ${props => props.backgroundColorCyan50 && css` background-color: ${cyan[50]}; `}
    ${props => props.backgroundColorCyan100 && css` background-color: ${cyan[100]}; `}
    ${props => props.backgroundColorCyan200 && css` background-color: ${cyan[200]}; `}
    ${props => props.backgroundColorCyan300 && css` background-color: ${cyan[300]}; `}
    ${props => props.backgroundColorCyan400 && css` background-color: ${cyan[400]}; `}
    ${props => props.backgroundColorCyan500 && css` background-color: ${cyan[500]}; `}
    ${props => props.backgroundColorCyan600 && css` background-color: ${cyan[600]}; `}
    ${props => props.backgroundColorCyan700 && css` background-color: ${cyan[700]}; `}
    ${props => props.backgroundColorCyan800 && css` background-color: ${cyan[800]}; `}
    ${props => props.backgroundColorCyan900 && css` background-color: ${cyan[900]}; `}
    ${props => props.backgroundColorCyanA100 && css` background-color: ${cyan.a100}; `}
    ${props => props.backgroundColorCyanA200 && css` background-color: ${cyan.a200}; `}
    ${props => props.backgroundColorCyanA400 && css` background-color: ${cyan.a400}; `}
    ${props => props.backgroundColorCyanA700 && css` background-color: ${cyan.a700}; `}

    /* Teal */
    ${props => props.backgroundColorTeal50 && css` background-color: ${teal[50]}; `}
    ${props => props.backgroundColorTeal100 && css` background-color: ${teal[100]}; `}
    ${props => props.backgroundColorTeal200 && css` background-color: ${teal[200]}; `}
    ${props => props.backgroundColorTeal300 && css` background-color: ${teal[300]}; `}
    ${props => props.backgroundColorTeal400 && css` background-color: ${teal[400]}; `}
    ${props => props.backgroundColorTeal500 && css` background-color: ${teal[500]}; `}
    ${props => props.backgroundColorTeal600 && css` background-color: ${teal[600]}; `}
    ${props => props.backgroundColorTeal700 && css` background-color: ${teal[700]}; `}
    ${props => props.backgroundColorTeal800 && css` background-color: ${teal[800]}; `}
    ${props => props.backgroundColorTeal900 && css` background-color: ${teal[900]}; `}
    ${props => props.backgroundColorTealA100 && css` background-color: ${teal.a100}; `}
    ${props => props.backgroundColorTealA200 && css` background-color: ${teal.a200}; `}
    ${props => props.backgroundColorTealA400 && css` background-color: ${teal.a400}; `}
    ${props => props.backgroundColorTealA700 && css` background-color: ${teal.a700}; `}

    /* Green */
    ${props => props.backgroundColorGreen50 && css` background-color: ${green[50]}; `}
    ${props => props.backgroundColorGreen100 && css` background-color: ${green[100]}; `}
    ${props => props.backgroundColorGreen200 && css` background-color: ${green[200]}; `}
    ${props => props.backgroundColorGreen300 && css` background-color: ${green[300]}; `}
    ${props => props.backgroundColorGreen400 && css` background-color: ${green[400]}; `}
    ${props => props.backgroundColorGreen500 && css` background-color: ${green[500]}; `}
    ${props => props.backgroundColorGreen600 && css` background-color: ${green[600]}; `}
    ${props => props.backgroundColorGreen700 && css` background-color: ${green[700]}; `}
    ${props => props.backgroundColorGreen800 && css` background-color: ${green[800]}; `}
    ${props => props.backgroundColorGreen900 && css` background-color: ${green[900]}; `}
    ${props => props.backgroundColorGreenA100 && css` background-color: ${green.a100}; `}
    ${props => props.backgroundColorGreenA200 && css` background-color: ${green.a200}; `}
    ${props => props.backgroundColorGreenA400 && css` background-color: ${green.a400}; `}
    ${props => props.backgroundColorGreenA700 && css` background-color: ${green.a700}; `}

    /* Light Green */
    ${props => props.backgroundColorLightGreen50 && css` background-color: ${lightGreen[50]}; `}
    ${props => props.backgroundColorLightGreen100 && css` background-color: ${lightGreen[100]}; `}
    ${props => props.backgroundColorLightGreen200 && css` background-color: ${lightGreen[200]}; `}
    ${props => props.backgroundColorLightGreen300 && css` background-color: ${lightGreen[300]}; `}
    ${props => props.backgroundColorLightGreen400 && css` background-color: ${lightGreen[400]}; `}
    ${props => props.backgroundColorLightGreen500 && css` background-color: ${lightGreen[500]}; `}
    ${props => props.backgroundColorLightGreen600 && css` background-color: ${lightGreen[600]}; `}
    ${props => props.backgroundColorLightGreen700 && css` background-color: ${lightGreen[700]}; `}
    ${props => props.backgroundColorLightGreen800 && css` background-color: ${lightGreen[800]}; `}
    ${props => props.backgroundColorLightGreen900 && css` background-color: ${lightGreen[900]}; `}
    ${props => props.backgroundColorLightGreenA100 && css` background-color: ${lightGreen.a100}; `}
    ${props => props.backgroundColorLightGreenA200 && css` background-color: ${lightGreen.a200}; `}
    ${props => props.backgroundColorLightGreenA400 && css` background-color: ${lightGreen.a400}; `}
    ${props => props.backgroundColorLightGreenA700 && css` background-color: ${lightGreen.a700}; `}

    /* Lime */
    ${props => props.backgroundColorLime50 && css` background-color: ${lime[50]}; `}
    ${props => props.backgroundColorLime100 && css` background-color: ${lime[100]}; `}
    ${props => props.backgroundColorLime200 && css` background-color: ${lime[200]}; `}
    ${props => props.backgroundColorLime300 && css` background-color: ${lime[300]}; `}
    ${props => props.backgroundColorLime400 && css` background-color: ${lime[400]}; `}
    ${props => props.backgroundColorLime500 && css` background-color: ${lime[500]}; `}
    ${props => props.backgroundColorLime600 && css` background-color: ${lime[600]}; `}
    ${props => props.backgroundColorLime700 && css` background-color: ${lime[700]}; `}
    ${props => props.backgroundColorLime800 && css` background-color: ${lime[800]}; `}
    ${props => props.backgroundColorLime900 && css` background-color: ${lime[900]}; `}
    ${props => props.backgroundColorLimeA100 && css` background-color: ${lime.a100}; `}
    ${props => props.backgroundColorLimeA200 && css` background-color: ${lime.a200}; `}
    ${props => props.backgroundColorLimeA400 && css` background-color: ${lime.a400}; `}
    ${props => props.backgroundColorLimeA700 && css` background-color: ${lime.a700}; `}

    /* Yellow */
    ${props => props.backgroundColorYellow50 && css` background-color: ${yellow[50]}; `}
    ${props => props.backgroundColorYellow100 && css` background-color: ${yellow[100]}; `}
    ${props => props.backgroundColorYellow200 && css` background-color: ${yellow[200]}; `}
    ${props => props.backgroundColorYellow300 && css` background-color: ${yellow[300]}; `}
    ${props => props.backgroundColorYellow400 && css` background-color: ${yellow[400]}; `}
    ${props => props.backgroundColorYellow500 && css` background-color: ${yellow[500]}; `}
    ${props => props.backgroundColorYellow600 && css` background-color: ${yellow[600]}; `}
    ${props => props.backgroundColorYellow700 && css` background-color: ${yellow[700]}; `}
    ${props => props.backgroundColorYellow800 && css` background-color: ${yellow[800]}; `}
    ${props => props.backgroundColorYellow900 && css` background-color: ${yellow[900]}; `}
    ${props => props.backgroundColorYellowA100 && css` background-color: ${yellow.a100}; `}
    ${props => props.backgroundColorYellowA200 && css` background-color: ${yellow.a200}; `}
    ${props => props.backgroundColorYellowA400 && css` background-color: ${yellow.a400}; `}
    ${props => props.backgroundColorYellowA700 && css` background-color: ${yellow.a700}; `}

    /* Amber */
    ${props => props.backgroundColorAmber50 && css` background-color: ${amber[50]}; `}
    ${props => props.backgroundColorAmber100 && css` background-color: ${amber[100]}; `}
    ${props => props.backgroundColorAmber200 && css` background-color: ${amber[200]}; `}
    ${props => props.backgroundColorAmber300 && css` background-color: ${amber[300]}; `}
    ${props => props.backgroundColorAmber400 && css` background-color: ${amber[400]}; `}
    ${props => props.backgroundColorAmber500 && css` background-color: ${amber[500]}; `}
    ${props => props.backgroundColorAmber600 && css` background-color: ${amber[600]}; `}
    ${props => props.backgroundColorAmber700 && css` background-color: ${amber[700]}; `}
    ${props => props.backgroundColorAmber800 && css` background-color: ${amber[800]}; `}
    ${props => props.backgroundColorAmber900 && css` background-color: ${amber[900]}; `}
    ${props => props.backgroundColorAmberA100 && css` background-color: ${amber.a100}; `}
    ${props => props.backgroundColorAmberA200 && css` background-color: ${amber.a200}; `}
    ${props => props.backgroundColorAmberA400 && css` background-color: ${amber.a400}; `}
    ${props => props.backgroundColorAmberA700 && css` background-color: ${amber.a700}; `}

    /* Orange */
    ${props => props.backgroundColorOrange50 && css` background-color: ${orange[50]}; `}
    ${props => props.backgroundColorOrange100 && css` background-color: ${orange[100]}; `}
    ${props => props.backgroundColorOrange200 && css` background-color: ${orange[200]}; `}
    ${props => props.backgroundColorOrange300 && css` background-color: ${orange[300]}; `}
    ${props => props.backgroundColorOrange400 && css` background-color: ${orange[400]}; `}
    ${props => props.backgroundColorOrange500 && css` background-color: ${orange[500]}; `}
    ${props => props.backgroundColorOrange600 && css` background-color: ${orange[600]}; `}
    ${props => props.backgroundColorOrange700 && css` background-color: ${orange[700]}; `}
    ${props => props.backgroundColorOrange800 && css` background-color: ${orange[800]}; `}
    ${props => props.backgroundColorOrange900 && css` background-color: ${orange[900]}; `}
    ${props => props.backgroundColorOrangeA100 && css` background-color: ${orange.a100}; `}
    ${props => props.backgroundColorOrangeA200 && css` background-color: ${orange.a200}; `}
    ${props => props.backgroundColorOrangeA400 && css` background-color: ${orange.a400}; `}
    ${props => props.backgroundColorOrangeA700 && css` background-color: ${orange.a700}; `}

    /* Deep Orange */
    ${props => props.backgroundColorDeepOrange50 && css` background-color: ${deepOrange[50]}; `}
    ${props => props.backgroundColorDeepOrange100 && css` background-color: ${deepOrange[100]}; `}
    ${props => props.backgroundColorDeepOrange200 && css` background-color: ${deepOrange[200]}; `}
    ${props => props.backgroundColorDeepOrange300 && css` background-color: ${deepOrange[300]}; `}
    ${props => props.backgroundColorDeepOrange400 && css` background-color: ${deepOrange[400]}; `}
    ${props => props.backgroundColorDeepOrange500 && css` background-color: ${deepOrange[500]}; `}
    ${props => props.backgroundColorDeepOrange600 && css` background-color: ${deepOrange[600]}; `}
    ${props => props.backgroundColorDeepOrange700 && css` background-color: ${deepOrange[700]}; `}
    ${props => props.backgroundColorDeepOrange800 && css` background-color: ${deepOrange[800]}; `}
    ${props => props.backgroundColorDeepOrange900 && css` background-color: ${deepOrange[900]}; `}
    ${props => props.backgroundColorDeepOrangeA100 && css` background-color: ${deepOrange.a100}; `}
    ${props => props.backgroundColorDeepOrangeA200 && css` background-color: ${deepOrange.a200}; `}
    ${props => props.backgroundColorDeepOrangeA400 && css` background-color: ${deepOrange.a400}; `}
    ${props => props.backgroundColorDeepOrangeA700 && css` background-color: ${deepOrange.a700}; `}

    /* Brown */
    ${props => props.backgroundColorBrown50 && css` background-color: ${brown[50]}; `}
    ${props => props.backgroundColorBrown100 && css` background-color: ${brown[100]}; `}
    ${props => props.backgroundColorBrown200 && css` background-color: ${brown[200]}; `}
    ${props => props.backgroundColorBrown300 && css` background-color: ${brown[300]}; `}
    ${props => props.backgroundColorBrown400 && css` background-color: ${brown[400]}; `}
    ${props => props.backgroundColorBrown500 && css` background-color: ${brown[500]}; `}
    ${props => props.backgroundColorBrown600 && css` background-color: ${brown[600]}; `}
    ${props => props.backgroundColorBrown700 && css` background-color: ${brown[700]}; `}
    ${props => props.backgroundColorBrown800 && css` background-color: ${brown[800]}; `}
    ${props => props.backgroundColorBrown900 && css` background-color: ${brown[900]}; `}
    ${props => props.backgroundColorBrownA100 && css` background-color: ${brown.a100}; `}
    ${props => props.backgroundColorBrownA200 && css` background-color: ${brown.a200}; `}
    ${props => props.backgroundColorBrownA400 && css` background-color: ${brown.a400}; `}
    ${props => props.backgroundColorBrownA700 && css` background-color: ${brown.a700}; `}

    /* Gray */
    ${props => props.backgroundColorGray50 && css` background-color: ${gray[50]}; `}
    ${props => props.backgroundColorGray100 && css` background-color: ${gray[100]}; `}
    ${props => props.backgroundColorGray200 && css` background-color: ${gray[200]}; `}
    ${props => props.backgroundColorGray300 && css` background-color: ${gray[300]}; `}
    ${props => props.backgroundColorGray400 && css` background-color: ${gray[400]}; `}
    ${props => props.backgroundColorGray500 && css` background-color: ${gray[500]}; `}
    ${props => props.backgroundColorGray600 && css` background-color: ${gray[600]}; `}
    ${props => props.backgroundColorGray700 && css` background-color: ${gray[700]}; `}
    ${props => props.backgroundColorGray800 && css` background-color: ${gray[800]}; `}
    ${props => props.backgroundColorGray900 && css` background-color: ${gray[900]}; `}
    ${props => props.backgroundColorGrayA100 && css` background-color: ${gray.a100}; `}
    ${props => props.backgroundColorGrayA200 && css` background-color: ${gray.a200}; `}
    ${props => props.backgroundColorGrayA400 && css` background-color: ${gray.a400}; `}
    ${props => props.backgroundColorGrayA700 && css` background-color: ${gray.a700}; `}

    /* Blue Gray */
    ${props => props.backgroundColorBlueGray50 && css` background-color: ${blueGray[50]}; `}
    ${props => props.backgroundColorBlueGray100 && css` background-color: ${blueGray[100]}; `}
    ${props => props.backgroundColorBlueGray200 && css` background-color: ${blueGray[200]}; `}
    ${props => props.backgroundColorBlueGray300 && css` background-color: ${blueGray[300]}; `}
    ${props => props.backgroundColorBlueGray400 && css` background-color: ${blueGray[400]}; `}
    ${props => props.backgroundColorBlueGray500 && css` background-color: ${blueGray[500]}; `}
    ${props => props.backgroundColorBlueGray600 && css` background-color: ${blueGray[600]}; `}
    ${props => props.backgroundColorBlueGray700 && css` background-color: ${blueGray[700]}; `}
    ${props => props.backgroundColorBlueGray800 && css` background-color: ${blueGray[800]}; `}
    ${props => props.backgroundColorBlueGray900 && css` background-color: ${blueGray[900]}; `}
    ${props => props.backgroundColorBlueGrayA100 && css` background-color: ${blueGray.a100}; `}
    ${props => props.backgroundColorBlueGrayA200 && css` background-color: ${blueGray.a200}; `}
    ${props => props.backgroundColorBlueGrayA400 && css` background-color: ${blueGray.a400}; `}
    ${props => props.backgroundColorBlueGrayA700 && css` background-color: ${blueGray.a700}; `}

`

export default backgroundColor
