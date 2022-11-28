
import { css } from 'styled-components'

// Props base
import {
  AlignContent, AlignItems, AlignSelf,
  Direction, Display,
  BorderRadius, BorderTopLeftRadius, BorderTopRightRadius, BorderBottomLeftRadius, BorderBottomRightRadius,
  Bottom,
  BoxShadow, BoxShadowTR1, BoxShadowTR2, BoxShadowTL1, BoxShadowTL2, BoxShadowBR1, BoxShadowBR2, BoxShadowBL1, BoxShadowBL2,
  Cursor,
  Flex, FontSize, FontWeight, FontWeightLighter, FontWeightNormal, FontWeightBold,
  Gap, GridTemplateColumns,
  Height,
  Left,
  Margin, MarginX, MarginY, MarginT, MarginR, MarginB, MarginL,
  Padding, PaddingX, PaddingY, PaddingT, PaddingR, PaddingB, PaddingL,
  Position, PositionAbsolute, PositionFixed, PositionInherit, PositionInitial, PositionRelative, PositionStatic, PositionSticky, PositionUnset,
  Right,
  TextAling, TextAlingCenter, TextAlingLeft, TextAlingRight,
  Top,
  Width,
  ZIndex,

}
  from './standar-props-css'

const standarProps = css`

  /* A */
  ${props => props.alignContent && css` ${AlignContent}`}
  ${props => props.alignItems && css` ${AlignItems}`}
  ${props => props.alignSelf && css` ${AlignSelf}`}

  /* B */
  ${props => props.borderRadius && css` ${BorderRadius} `}
  /* Border Radius TL */
  ${props => props.borderTopLeftRadius && css` ${BorderTopLeftRadius} `}
  /* Border Radius TR */
  ${props => props.borderTopRightRadius && css` ${BorderTopRightRadius} `}
  /* Border Radius BL */
  ${props => props.borderBottomLeftRadius && css` ${BorderBottomLeftRadius} `}
  /* Border Radius BR */
  ${props => props.borderBottomRightRadius && css` ${BorderBottomRightRadius} `}

  /* BOTTOM */
  ${props => props.bottom && css` ${Bottom} `}

  /* BOX SHADOW */  
  ${props => props.boxShadow && css` ${BoxShadow} `}  
  ${props => props.boxShadowBR1 && css` ${BoxShadowBR1} `}
  ${props => props.boxShadowBR2 && css` ${BoxShadowBR2} `}
  ${props => props.boxShadowBL1 && css` ${BoxShadowBL1} `}
  ${props => props.boxShadowBL2 && css` ${BoxShadowBL2} `}
  ${props => props.boxShadowTR1 && css` ${BoxShadowTR1} `}
  ${props => props.boxShadowTR2 && css` ${BoxShadowTR2} `}
  ${props => props.boxShadowTL1 && css` ${BoxShadowTL1} `}
  ${props => props.boxShadowTL2 && css` ${BoxShadowTL2} `}

  /* D */
  ${props => props.direction && css` ${Direction}`}
  ${props => props.display && css` ${Display}`}

  /* C */
  ${props => props.cursor && css` ${Cursor}`}

  /* F */
  ${props => props.flex && css` ${Flex} `}
  ${props => props.fontSize && css` ${FontSize} `}
  ${props => props.fontWeigh && css` ${FontWeight} `}
  ${props => props.fontWeightLighter && css` ${FontWeightLighter} `}
  ${props => props.fontWeightNormal && css` ${FontWeightNormal} `}
  ${props => props.fontWeightBold && css` ${FontWeightBold} `}

  /* G */
  ${props => props.gap && css` ${Gap} `}
  ${props => props.gridTemplateColumns && css` ${GridTemplateColumns} `}

  /* H */
  ${props => props.height && css` ${Height} `}

  /* T */
  ${props => props.textAling && css` ${TextAling} `}
  ${props => props.textAlingCenter && css` ${TextAlingCenter} `}
  ${props => props.textAlingLeft && css` ${TextAlingLeft} `}
  ${props => props.textAlingRight && css` ${TextAlingRight} `}
  ${props => props.top && css` ${Top} `}

  /* L */
  ${props => props.left && css` ${Left} `}

  /* MARGINS */
  /* Margin - Margin All */
  ${props => props.margin && css` ${Margin} `}
  /* MarginX - Eje X */
  ${props => props.marginX && css` ${MarginX} `}
  /* MarginY - Margin eje Y */
  ${props => props.marginY && css` ${MarginY} `}
  /* MarginT - Margin Top */
  ${props => props.marginT && css` ${MarginT} `}
  /* MarginR - Margin Right */
  ${props => props.marginR && css` ${MarginR} `}
  /* MarginB - Margin Bottom */
  ${props => props.marginB && css` ${MarginB} `}
  /* MarginL - Margin Left */
  ${props => props.marginL && css` ${MarginL} `}

  /* R */
  ${props => props.right && css` ${Right} `}

  /* P */ 

  /* PADDING */
  /* Padding - Padding All */
  ${props => props.padding && css` ${Padding} `}
  /* PaddingX - Padding eje X */
  ${props => props.paddingX && css` ${PaddingX} `}
  /* PaddingY - Padding eje Y */
  ${props => props.paddingY && css` ${PaddingY} `}
  /* PaddingR - Padding right */
  ${props => props.paddingR && css` ${PaddingR} `}
  /* PaddingL - Padding left */
  ${props => props.paddingL && css` ${PaddingL} `}
  /* PaddingT - Padding top */
  ${props => props.paddingT && css` ${PaddingT} `}
  /* PaddingB - Padding bottom */
  ${props => props.paddingB && css` ${PaddingB} `}

  ${props => props.position && css` ${Position} `}
  ${props => props.positionAbsolute && css` ${PositionAbsolute} `}
  ${props => props.positionFixed && css` ${PositionFixed} `}
  ${props => props.positionRelative && css` ${PositionRelative} `}
  ${props => props.positionStatic && css` ${PositionStatic} `}
  ${props => props.positionSticky && css` ${PositionSticky} `}
  ${props => props.positionInherit && css` ${PositionInherit} `}
  ${props => props.positionInitial && css` ${PositionInitial} `}
  ${props => props.positionUnset && css` ${PositionUnset} `}

  /* W */
  ${props => props.width && css` ${Width} `}
        
  /* Z */
  ${props => props.zIndex && css` ${ZIndex} `}

    `

export default standarProps
