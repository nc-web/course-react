
import { css } from 'styled-components'

import {

  FontSize1, FontSize2, FontSize3, FontSize4, FontSize5,
  FontSize6, FontSize7, FontSize8, FontSize9, FontSize10,
  FontSize11, FontSize12, FontSize13, FontSize14, FontSize15,
  FontSize16, FontSize17, FontSize18, FontSize19, FontSize20,
  FontSize21, FontSize22, FontSize23, FontSize24, FontSize25,
  FontSize26, FontSize27, FontSize28, FontSize29, FontSize30,
  FontSize31, FontSize32, FontSize33, FontSize34, FontSize35,
  FontSize36, FontSize37, FontSize38, FontSize39, FontSize40,

  FontWeightLighter, FontWeightNormal, FontWeightBold

} from '@components/assets/props/exclusives-props-text-css'

const exclusivesPropsText = css`

    /* Font Size */
    ${props => props.fontSize1 && css` ${FontSize1} `}
    ${props => props.fontSize2 && css` ${FontSize2} `}
    ${props => props.fontSize3 && css` ${FontSize3} `}
    ${props => props.fontSize4 && css` ${FontSize4} `}
    ${props => props.fontSize5 && css` ${FontSize5} `}
    ${props => props.fontSize6 && css` ${FontSize6} `}
    ${props => props.fontSize7 && css` ${FontSize7} `}
    ${props => props.fontSize8 && css` ${FontSize8} `}
    ${props => props.fontSize9 && css` ${FontSize9} `}
    ${props => props.fontSize10 && css` ${FontSize10} `}
    ${props => props.fontSize11 && css` ${FontSize11} `}
    ${props => props.fontSize12 && css` ${FontSize12} `}
    ${props => props.fontSize13 && css` ${FontSize13} `}
    ${props => props.fontSize14 && css` ${FontSize14} `}
    ${props => props.fontSize15 && css` ${FontSize15} `}
    ${props => props.fontSize16 && css` ${FontSize16} `}
    ${props => props.fontSize17 && css` ${FontSize17} `}
    ${props => props.fontSize18 && css` ${FontSize18} `}
    ${props => props.fontSize19 && css` ${FontSize19} `}
    ${props => props.fontSize20 && css` ${FontSize20} `}
    ${props => props.fontSize21 && css` ${FontSize21} `}
    ${props => props.fontSize22 && css` ${FontSize22} `}
    ${props => props.fontSize23 && css` ${FontSize23} `}
    ${props => props.fontSize24 && css` ${FontSize24} `}
    ${props => props.fontSize25 && css` ${FontSize25} `}
    ${props => props.fontSize26 && css` ${FontSize26} `}
    ${props => props.fontSize27 && css` ${FontSize27} `}
    ${props => props.fontSize28 && css` ${FontSize28} `}
    ${props => props.fontSize29 && css` ${FontSize29} `}
    ${props => props.fontSize30 && css` ${FontSize30} `}
    ${props => props.fontSize31 && css` ${FontSize31} `}
    ${props => props.fontSize32 && css` ${FontSize32} `}
    ${props => props.fontSize33 && css` ${FontSize33} `}
    ${props => props.fontSize34 && css` ${FontSize34} `}
    ${props => props.fontSize35 && css` ${FontSize35} `}
    ${props => props.fontSize36 && css` ${FontSize36} `}
    ${props => props.fontSize37 && css` ${FontSize37} `}
    ${props => props.fontSize38 && css` ${FontSize38} `}
    ${props => props.fontSize39 && css` ${FontSize39} `}
    ${props => props.fontSize40 && css` ${FontSize40} `}

    /* Font Weight */
    ${props => props.fontWeightLighter && css` ${FontWeightLighter} `}
    ${props => props.fontWeightNormal && css` ${FontWeightNormal} `}
    ${props => props.fontWeightBold && css` ${FontWeightBold} `}
`

export default exclusivesPropsText
