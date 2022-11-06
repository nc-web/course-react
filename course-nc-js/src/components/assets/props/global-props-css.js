
import { css } from 'styled-components'

// ========================= BORDER =============================
// ========================= NO BORDER ========================
export const BorderNone = css` border: none; `

// ========================= BORDER TOP ========================
export const BorderTop = css` border: none; border-top: solid .5px #757575; `

// ========================= BORDER BOTTOM ========================
export const BorderBottom = css` border: none; border-bottom: solid .5px #757575; `

// ========================= BORDER LEFT ========================
export const BorderLeft = css`border: none; border-left: solid .5px #757575; `

// ========================= BORDER RIGHT ========================
export const BorderRight = css` border: none; border-right: solid .5px #757575; `

// ========================= BORDER RADIUS =============================
// Radius all
export const BorderRadius = css` border-radius: ${props => props.borderRadius}; `
export const Radius1 = css` border-radius: .3rem; `
export const Radius2 = css` border-radius: .6rem; `
export const Radius3 = css` border-radius: .9rem; `
export const Radius4 = css` border-radius: 1.2rem; `
export const Radius5 = css` border-radius: 1.5rem; `
export const Radius6 = css` border-radius: 1.8rem; `
// Radius TL
export const BorderRadiusTL = css` border-top-left-radius: ${props => props.borderRadiusTL}; `
export const RadiusTL1 = css` border-top-left-radius: .3rem; `
export const RadiusTL2 = css` border-top-left-radius : .6rem; `
export const RadiusTL3 = css` border-top-left-radius : .9rem; `
export const RadiusTL4 = css` border-top-left-radius : 1.2rem; `
export const RadiusTL5 = css` border-top-left-radius : 1.5rem; `
export const RadiusTL6 = css` border-top-left-radius : 1.8rem; `
// Radius TR
export const BorderRadiusTR = css` border-top-right-radius: ${props => props.borderRadiusTR}; `
export const RadiusTR1 = css` border-top-right-radius: .3rem; `
export const RadiusTR2 = css` border-top-right-radius: .6rem; `
export const RadiusTR3 = css` border-top-right-radius: .9rem; `
export const RadiusTR4 = css` border-top-right-radius: 1.2rem; `
export const RadiusTR5 = css` border-top-right-radius: 1.5rem; `
export const RadiusTR6 = css` border-top-right-radius: 1.8rem; `
// Radius BL
export const BorderRadiusBL = css` border-bottom-left-radius: ${props => props.borderRadiusBL}; `
export const RadiusBL1 = css` border-bottom-left-radius: .3rem; `
export const RadiusBL2 = css` border-bottom-left-radius: .6rem; `
export const RadiusBL3 = css` border-bottom-left-radius: .9rem; `
export const RadiusBL4 = css` border-bottom-left-radius: 1.2rem; `
export const RadiusBL5 = css` border-bottom-left-radius: 1.5rem; `
export const RadiusBL6 = css` border-bottom-left-radius: 1.8rem; `
// Radius BR
export const BorderRadiusBR = css` border-bottom-right-radius: ${props => props.borderRadiusBR}; `
export const RadiusBR1 = css` border-bottom-right-radius: .3rem; `
export const RadiusBR2 = css` border-bottom-right-radius: .6rem; `
export const RadiusBR3 = css` border-bottom-right-radius: .9rem; `
export const RadiusBR4 = css` border-bottom-right-radius: 1.2rem; `
export const RadiusBR5 = css` border-bottom-right-radius: 1.5rem; `
export const RadiusBR6 = css` border-bottom-right-radius: 1.8rem; `

// ========================= CURSOR POINTER =============================
export const CursorPointer = css`cursor: pointer;`

// ========================= POSITIONS =============================
export const PositionAbsolute = css` position: absolute; `
export const PositionFixed = css` position: fixed; `
export const PositionRelative = css` position: relative; `
export const PositionStatic = css` position: static; `
export const PositionSticky = css` position: sticky; `
export const PositionInherit = css` position: inherit; `
export const PositionInitial = css` position: initial; `
export const PositionUnset = css` position: unset; `

// ========================= SHADOW =============================
export const BoxShadowBR1 = css` box-shadow: .063rem .125rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowBR2 = css` box-shadow: .125rem .188rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowBL1 = css` box-shadow: -.063rem .125rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowBL2 = css` box-shadow: -.125rem .188rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowTR1 = css` box-shadow: .063rem -.125rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowTR2 = css` box-shadow: .125rem -.188rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowTL1 = css` box-shadow: -.063rem -.125rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowTL2 = css` box-shadow: -.125rem -.188rem .063rem .063rem rgba(0, 0, 0, 0.1); `

// ========================= TEXT ALING ============================
// Text aling center
export const TextCenter = css`
    text-align: center;
`
// Text aling left
export const TextLeft = css`
    text-align: left;
`
// Text aling right
export const TextRight = css`
    text-align: right;
`

// ======================== POSITIONS ==============================
// Top
export const Top = css` top: ${props => props.top}; `
export const Top0 = css` top: 0; `
export const Top10 = css` top: .625rem; `
export const Top20 = css` top: 1.25rem; `
export const Top30 = css` top: 1.875rem; `
export const Top40 = css` top: 2.5rem; `
export const Top50 = css` top: 3.125rem; `
export const Top60 = css` top: 3.75rem; `
export const Top70 = css` top: 4.375rem; `
export const Top80 = css` top: 5rem; `
export const Top90 = css` top: 5.625rem; `
export const Top100 = css` top: 6.25rem; `
export const Top110 = css` top: 6.875rem; `
export const Top120 = css` top: 7.520rem; `
export const Top130 = css` top: 8.125rem; `
export const Top140 = css` top: 8.75rem; `
export const Top150 = css` top: 9.375rem; `
export const Top160 = css` top: 10rem; `
export const Top170 = css` top: 10.625rem; `
export const Top180 = css` top: 11.25rem; `
export const Top190 = css` top: 11.875rem; `
export const Top200 = css` top: 12.5rem; `
export const Top210 = css` top: 13.125rem; `
export const Top220 = css` top: 13.75rem; `
export const Top230 = css` top: 14.375rem; `
export const Top240 = css` top: 15rem; `
export const Top250 = css` top: 15.625em; `
export const Top260 = css` top: 16.25rem; `
export const Top270 = css` top: 16.875rem; `
export const Top280 = css` top: 17.5rem; `
export const Top290 = css` top: 18.125rem; `
export const Top300 = css` top: 18.75rem; `
export const Top310 = css` top: 19.375rem; `
export const Top320 = css` top: 20rem; `
export const Top330 = css` top: 20.625rem; `
export const Top340 = css` top: 21.25rem; `
export const Top350 = css` top: 21.875rem; `
export const Top360 = css` top: 22.5rem; `
export const Top370 = css` top: 23.125rem; `
export const Top380 = css` top: 23.75rem; `
export const Top390 = css` top: 24.375rem; `
export const Top400 = css` top: 25rem; `
export const Top410 = css` top: 25.625rem; `
export const Top420 = css` top: 26.25rem; `
export const Top430 = css` top: 26.875rem; `
export const Top440 = css` top: 27.5rem; `
export const Top450 = css` top: 28.125rem; `
export const Top460 = css` top: 28.75rem; `
export const Top470 = css` top: 29.375rem; `
export const Top480 = css` top: 30rem; `
export const Top490 = css` top: 30.625rem; `
export const Top500 = css` top: 31.25rem; `
export const Top510 = css` top: 31.875rem; `
export const Top520 = css` top: 32.5rem; `
export const Top530 = css` top: 33.125rem; `
export const Top540 = css` top: 33.75rem; `
export const Top550 = css` top: 34.375rem; `
export const Top560 = css` top: 35rem; `
export const Top570 = css` top: 35.625rem; `
export const Top580 = css` top: 36.25rem; `
export const Top590 = css` top: 36.875rem; `
export const Top600 = css` top: 37.5rem; `
export const Top610 = css` top: 38.125rem; `
export const Top620 = css` top: 38.75rem; `
export const Top630 = css` top: 39.375rem; `
export const Top640 = css` top: 40rem; `
export const Top650 = css` top: 40.625rem; `
export const Top660 = css` top: 41.25rem; `
export const Top670 = css` top: 41.875rem; `
export const Top680 = css` top: 42.5rem; `
export const Top690 = css` top: 43.125rem; `
export const Top700 = css` top: 43.75rem; `


// Bottom
export const Bottom = css` bottom: ${props => props.bottom}; `
export const Bottom0 = css` bottom: 0; `
export const Bottom10 = css` bottom: .625rem; `
export const Bottom20 = css` bottom: 1.25rem; `
export const Bottom30 = css` bottom: 1.875rem; `
export const Bottom40 = css` bottom: 2.5rem; `
export const Bottom50 = css` bottom: 3.125rem; `
export const Bottom60 = css` bottom: 3.75rem; `
export const Bottom70 = css` bottom: 4.375rem; `
export const Bottom80 = css` bottom: 5rem; `
export const Bottom90 = css` bottom: 5.625rem; `
export const Bottom100 = css` bottom: 6.25rem; `
export const Bottom110 = css` bottom: 6.875rem; `
export const Bottom120 = css` bottom: 7.5rem; `
export const Bottom130 = css` bottom: 8.125rem; `
export const Bottom140 = css` bottom: 8.75rem; `
export const Bottom150 = css` bottom: 9.375rem; `
export const Bottom160 = css` bottom: 10rem; `
export const Bottom170 = css` bottom: 10.625rem; `
export const Bottom180 = css` bottom: 11.25rem; `
export const Bottom190 = css` bottom: 11.875rem; `
export const Bottom200 = css` bottom: 12.5rem; `

// Left
export const Left = css` left: ${props => props.left}; `
export const Left0 = css` left: 0rem; `
export const Left10 = css` left: .625rem; `
export const Left20 = css` left: 1.25rem; `
export const Left30 = css` left: 1.875rem; `
export const Left40 = css` left: 2.5rem; `
export const Left50 = css` left: 3.125rem; `
export const Left60 = css` left: 3.75rem; `
export const Left70 = css` left: 4.375rem; `
export const Left80 = css` left: 5rem; `
export const Left90 = css` left: 5.625rem; `
export const Left100 = css` left: 6.25rem; `
export const Left110 = css` left: 6.875rem; `
export const Left120 = css` left: 7.5rem; `
export const Left130 = css` left: 8.125rem; `
export const Left140 = css` left: 8.75rem; `
export const Left150 = css` left: 9.375rem; `
export const Left160 = css` left: 10rem; `
export const Left170 = css` left: 10.625rem; `
export const Left180 = css` left: 11.25rem; `
export const Left190 = css` left: 11.875rem; `
export const Left200 = css` left: 12.5rem; `

// Right
export const Right = css` right: ${props => props.right}; `
export const Right10 = css` right: .625rem; `
export const Right20 = css` right: 1.25rem; `
export const Right30 = css` right: 1.875rem; `
export const Right40 = css` right: 2.5rem; `
export const Right50 = css` right: 3.125rem; `
export const Right60 = css` right: 3.75rem; `
export const Right70 = css` right: 4.375rem; `
export const Right80 = css` right: 5rem; `
export const Right90 = css` right: 5.625rem; `
export const Right100 = css` right: 6.25rem; `
export const Right110 = css` right: 6.875rem; `
export const Right120 = css` right: 7.5rem; `
export const Right130 = css` right: 8.125rem; `
export const Right140 = css` right: 8.75rem; `
export const Right150 = css` right: 9.375rem; `
export const Right160 = css` right: 10rem; `
export const Right170 = css` right: 10.625rem; `
export const Right180 = css` right: 11.25rem; `
export const Right190 = css` right: 11.875rem; `
export const Right200 = css` right: 12.5rem; `

// ========================= MARGINS ============================
// MarginAuto - Margin Auto
export const MarginAuto = css` margin: auto;`
// Margin - Margin All
export const Margin = css` margin: ${props => props.margin};`
export const Margin1 = css` margin: .2rem;`
export const Margin2 = css` margin: .4rem; `
export const Margin3 = css` margin: .7rem; `
export const Margin4 = css` margin: 1.1rem; `
export const Margin5 = css` margin: 1.6rem; `
export const Margin6 = css` margin: 2.2rem; `
export const Margin7 = css` margin: 2.9rem; `
export const Margin8 = css` margin: 3.7rem; `
export const Margin9 = css` margin: 4.6rem; `
export const Margin10 = css` margin: 5.6rem; `
// MarginX - Margin eje X
export const MarginX = css` margin-left: ${ props => props.marginX }; margin-right: ${ props => props.marginX }; `
export const MarginX1 = css` margin-left: .2rem; margin-right: .2rem; `
export const MarginX2 = css` margin-left: .4rem; margin-right: .4rem; `
export const MarginX3 = css` margin-left: .7rem; margin-right: .7rem; `
export const MarginX4 = css` margin-left: 1.1rem; margin-right: 1.1rem; `
export const MarginX5 = css` margin-left: 1.6rem; margin-right: 1.6rem; `
export const MarginX6 = css` margin-left: 2.2rem; margin-right: 2.2rem; `
export const MarginX7 = css` margin-left: 2.9rem; margin-right: 2.9rem; `
export const MarginX8 = css` margin-left: 3.7rem; margin-right: 3.7rem; `
export const MarginX9 = css` margin-left: 4.6rem; margin-right: 4.6rem; `
export const MarginX10 = css` margin-left: 5.6rem; margin-right: 5.6rem; `
// MarginY - Margin eje Y
export const MarginY = css` margin-top: ${ props => props.marginY }; margin-bottom: ${ props => props.marginY }; `
export const MarginY1 = css` margin-top: .2rem; margin-bottom: .2rem; `
export const MarginY2 = css` margin-top: .4rem; margin-bottom: .4rem; `
export const MarginY3 = css` margin-top: .7rem; margin-bottom: .7rem; `
export const MarginY4 = css` margin-top: 1.1rem; margin-bottom: 1.1rem; `
export const MarginY5 = css` margin-top: 1.6rem; margin-bottom: 1.6rem; `
export const MarginY6 = css` margin-top: 2.2rem; margin-bottom: 2.2rem; `
export const MarginY7 = css` margin-top: 2.9rem; margin-bottom: 2.9rem; `
export const MarginY8 = css` margin-top: 3.7rem; margin-bottom: 3.7rem; `
export const MarginY9 = css` margin-top: 4.6rem; margin-bottom: 4.6rem; `
export const MarginY10 = css` margin-top: 5.6rem; margin-bottom: 5.6rem; `
// MarginT - Margin Top
export const MarginT = css` margin-top: ${ props => props.marginT }; `
export const MarginT1 = css` margin-top: .2rem; `
export const MarginT2 = css` margin-top: .4rem; `
export const MarginT3 = css` margin-top: .7rem; `
export const MarginT4 = css` margin-top: 1.1rem; `
export const MarginT5 = css` margin-top: 1.6rem; `
export const MarginT6 = css` margin-top: 2.2rem; `
export const MarginT7 = css` margin-top: 2.9rem; `
export const MarginT8 = css` margin-top: 3.7rem; `
export const MarginT9 = css` margin-top: 4.6rem; `
export const MarginT10 = css` margin-top: 5.6rem; `
// MarginR - Margin right
export const MarginR = css` margin-right: ${ props => props.marginR }; `
export const MarginR1 = css` margin-right: .2rem; `
export const MarginR2 = css` margin-right: .4rem; `
export const MarginR3 = css` margin-right: .7rem; `
export const MarginR4 = css` margin-right: 1.1rem; `
export const MarginR5 = css` margin-right: 1.6rem; `
export const MarginR6 = css` margin-right: 2.2rem; `
export const MarginR7 = css` margin-right: 2.9rem; `
export const MarginR8 = css` margin-right: 3.7rem; `
export const MarginR9 = css` margin-right: 4.6rem; `
export const MarginR10 = css` margin-right: 5.6rem; `
// MarginB - Margin bottom
export const MarginB = css` margin-bottom: ${ props => props.marginB }; `
export const MarginB1 = css` margin-bottom: .2rem; `
export const MarginB2 = css` margin-bottom: .4rem; `
export const MarginB3 = css` margin-bottom: .7rem; `
export const MarginB4 = css` margin-bottom: 1.1rem; `
export const MarginB5 = css` margin-bottom: 1.6rem; `
export const MarginB6 = css` margin-bottom: 2.2rem; `
export const MarginB7 = css` margin-bottom: 2.9rem; `
export const MarginB8 = css` margin-bottom: 3.7rem; `
export const MarginB9 = css` margin-bottom: 4.6rem; `
export const MarginB10 = css` margin-bottom: 5.6rem; `
// MarginL - Margin left
export const MarginL = css` margin-left: ${ props => props.marginL }; `
export const MarginL1 = css` margin-left: .2rem; `
export const MarginL2 = css` margin-left: .4rem; `
export const MarginL3 = css` margin-left: .7rem; `
export const MarginL4 = css` margin-left: 1.1rem; `
export const MarginL5 = css` margin-left: 1.6rem; `
export const MarginL6 = css` margin-left: 2.2rem; `
export const MarginL7 = css` margin-left: 2.9rem; `
export const MarginL8 = css` margin-left: 3.7rem; `
export const MarginL9 = css` margin-left: 4.6rem; `
export const MarginL10 = css` margin-left: 5.6rem; `

// ======================== PADDING ==============================
// Padding - Padding All
export const Padding = css` padding: ${ props => props.padding }; `
export const Padding1 = css` padding: .1rem; `
export const Padding2 = css` padding: .2rem; `
export const Padding3 = css` padding: .3rem; `
export const Padding4 = css` padding: .4rem; `
export const Padding5 = css` padding: .5rem; `
export const Padding6 = css` padding: .6rem; `
export const Padding7 = css` padding: .7rem; `
export const Padding8 = css` padding: .8rem; `
export const Padding9 = css` padding: .9rem; `
export const Padding10 = css` padding: 1rem; `
export const Padding11 = css` padding: 1.1rem; `
export const Padding12 = css` padding: 1.2rem; `
export const Padding13 = css` padding: 1.3rem; `
export const Padding14 = css` padding: 1.4rem; `
export const Padding15 = css` padding: 1.5rem; `
export const Padding16 = css` padding: 1.6rem; `
export const Padding17 = css` padding: 1.7rem; `
export const Padding18 = css` padding: 1.8rem; `
export const Padding19 = css` padding: 1.9rem; `
export const Padding20 = css` padding: 2rem; `
// PaddingX - Padding eje X
export const PaddingX = css` padding-right: ${ props => props.paddingX }; padding-left: ${ props => props.paddingX }; `
export const PaddingX1 = css` padding-right: .1rem; padding-left: .1rem; `
export const PaddingX2 = css` padding-right: .2rem; padding-left: .2rem; `
export const PaddingX3 = css` padding-right: .3rem; padding-left: .3rem; `
export const PaddingX4 = css` padding-right: .4rem; padding-left: .4rem; `
export const PaddingX5 = css` padding-right: .5rem; padding-left: .5rem; `
export const PaddingX6 = css` padding-right: .6rem; padding-left: .6rem; `
export const PaddingX7 = css` padding-right: .7rem; padding-left: .7rem; `
export const PaddingX8 = css` padding-right: .8rem; padding-left: .8rem;`
export const PaddingX9 = css` padding-right: .9rem; padding-left: .9rem; `
export const PaddingX10 = css` padding-right: 1rem; padding-left: 1rem; `
export const PaddingX11 = css` padding-right: 1.1rem; padding-left: 1.1rem; `
export const PaddingX12 = css` padding-right: 1.2rem; padding-left: 1.2rem; `
export const PaddingX13 = css` padding-right: 1.3rem; padding-left: 1.3rem; `
export const PaddingX14 = css` padding-right: 1.4rem; padding-left: 1.4rem; `
export const PaddingX15 = css` padding-right: 1.5rem; padding-left: 1.5rem; `
export const PaddingX16 = css` padding-right: 1.6rem; padding-left: 1.6rem; `
export const PaddingX17 = css` padding-right: 1.7rem; padding-left: 1.7rem; `
export const PaddingX18 = css` padding-right: 1.8rem; padding-left: 1.8rem; `
export const PaddingX19 = css` padding-right: 1.9rem; padding-left: 1.9rem; `
export const PaddingX20 = css` padding-right: 2rem; padding-left: 2rem; `
// PaddingY - Padding eje Y
export const PaddingY = css` padding-top: ${ props => props.paddingY }; padding-bottom: ${ props => props.paddingY }; `
export const PaddingY1 = css` padding-top: .1rem; padding-bottom: .1rem; `
export const PaddingY2 = css` padding-top: .2rem; padding-bottom: .2rem; `
export const PaddingY3 = css` padding-top: .3rem; padding-bottom: .3rem; `
export const PaddingY4 = css` padding-top: .4rem; padding-bottom: .4rem; `
export const PaddingY5 = css` padding-top: .5rem; padding-bottom: .5rem; `
export const PaddingY6 = css` padding-top: .6rem; padding-bottom: .6rem; `
export const PaddingY7 = css` padding-top: .7rem; padding-bottom: .7rem; `
export const PaddingY8 = css` padding-top: .8rem; padding-bottom: .8rem;`
export const PaddingY9 = css` padding-top: .9rem; padding-bottom: .9rem; `
export const PaddingY10 = css` padding-top: 1rem; padding-bottom: 1rem; `
export const PaddingY11 = css` padding-top: 1.1rem; padding-bottom: 1.1rem; `
export const PaddingY12 = css` padding-top: 1.2rem; padding-bottom: 1.2rem; `
export const PaddingY13 = css` padding-top: 1.3rem; padding-bottom: 1.3rem; `
export const PaddingY14 = css` padding-top: 1.4rem; padding-bottom: 1.4rem; `
export const PaddingY15 = css` padding-top: 1.5rem; padding-bottom: 1.5rem; `
export const PaddingY16 = css` padding-top: 1.6rem; padding-bottom: 1.6rem; `
export const PaddingY17 = css` padding-top: 1.7rem; padding-bottom: 1.7rem; `
export const PaddingY18 = css` padding-top: 1.8rem; padding-bottom: 1.8rem; `
export const PaddingY19 = css` padding-top: 1.9rem; padding-bottom: 1.9rem; `
export const PaddingY20 = css` padding-top: 2rem; padding-bottom: 2rem; `
// PaddingT - Padding top
export const PaddingT = css` padding-top: ${ props => props.paddingT }; `
export const PaddingT1 = css` padding-top: .1rem; `
export const PaddingT2 = css` padding-top: .2rem; `
export const PaddingT3 = css` padding-top: .3rem; `
export const PaddingT4 = css` padding-top: .4rem; `
export const PaddingT5 = css` padding-top: .5rem; `
export const PaddingT6 = css` padding-top: .6rem; `
export const PaddingT7 = css` padding-top: .7rem; `
export const PaddingT8 = css` padding-top: .8rem; `
export const PaddingT9 = css` padding-top: .9rem; `
export const PaddingT10 = css` padding-top: 1rem; `
export const PaddingT11 = css` padding-top: 1.1rem; `
export const PaddingT12 = css` padding-top: 1.2rem; `
export const PaddingT13 = css` padding-top: 1.3rem; `
export const PaddingT14 = css` padding-top: 1.4rem; `
export const PaddingT15 = css` padding-top: 1.5rem; `
export const PaddingT16 = css` padding-top: 1.6rem; `
export const PaddingT17 = css` padding-top: 1.7rem; `
export const PaddingT18 = css` padding-top: 1.8rem; `
export const PaddingT19 = css` padding-top: 1.9rem; `
export const PaddingT20 = css` padding-top: 2rem; `
// PaddingR - Padding right
export const PaddingR = css` padding-right: ${ props => props.paddingR }; `
export const PaddingR1 = css` padding-right: .1rem; `
export const PaddingR2 = css` padding-right: .2rem; `
export const PaddingR3 = css` padding-right: .3rem; `
export const PaddingR4 = css` padding-right: .4rem; `
export const PaddingR5 = css` padding-right: .5rem; `
export const PaddingR6 = css` padding-right: .6rem; `
export const PaddingR7 = css` padding-right: .7rem; `
export const PaddingR8 = css` padding-right: .8rem; `
export const PaddingR9 = css` padding-right: .9rem; `
export const PaddingR10 = css` padding-right: 1rem; `
export const PaddingR11 = css` padding-right: 1.1rem; `
export const PaddingR12 = css` padding-right: 1.2rem; `
export const PaddingR13 = css` padding-right: 1.3rem; `
export const PaddingR14 = css` padding-right: 1.4rem; `
export const PaddingR15 = css` padding-right: 1.5rem; `
export const PaddingR16 = css` padding-right: 1.6rem; `
export const PaddingR17 = css` padding-right: 1.7rem; `
export const PaddingR18 = css` padding-right: 1.8rem; `
export const PaddingR19 = css` padding-right: 1.9rem; `
export const PaddingR20 = css` padding-right: 2rem; `
// PaddingB - Padding bottom
export const PaddingB = css` padding-bottom: ${ props => props.paddingB }; `
export const PaddingB1 = css` padding-bottom: .1rem; `
export const PaddingB2 = css` padding-bottom: .2rem; `
export const PaddingB3 = css` padding-bottom: .3rem; `
export const PaddingB4 = css` padding-bottom: .4rem; `
export const PaddingB5 = css` padding-bottom: .5rem; `
export const PaddingB6 = css` padding-bottom: .6rem; `
export const PaddingB7 = css` padding-bottom: .7rem; `
export const PaddingB8 = css` padding-bottom: .8rem; `
export const PaddingB9 = css` padding-bottom: .9rem; `
export const PaddingB10 = css` padding-bottom: 1rem; `
export const PaddingB11 = css` padding-bottom: 1.1rem; `
export const PaddingB12 = css` padding-bottom: 1.2rem; `
export const PaddingB13 = css` padding-bottom: 1.3rem; `
export const PaddingB14 = css` padding-bottom: 1.4rem; `
export const PaddingB15 = css` padding-bottom: 1.5rem; `
export const PaddingB16 = css` padding-bottom: 1.6rem; `
export const PaddingB17 = css` padding-bottom: 1.7rem; `
export const PaddingB18 = css` padding-bottom: 1.8rem; `
export const PaddingB19 = css` padding-bottom: 1.9rem; `
export const PaddingB20 = css` padding-bottom: 2rem; `
// PaddingL - Padding left
export const PaddingL = css` padding-left: ${ props => props.paddingL }; `
export const PaddingL1 = css` padding-left: .1rem; `
export const PaddingL2 = css` padding-left: .2rem; `
export const PaddingL3 = css` padding-left: .3rem; `
export const PaddingL4 = css` padding-left: .4rem; `
export const PaddingL5 = css` padding-left: .5rem; `
export const PaddingL6 = css` padding-left: .6rem; `
export const PaddingL7 = css` padding-left: .7rem; `
export const PaddingL8 = css` padding-left: .8rem; `
export const PaddingL9 = css` padding-left: .9rem; `
export const PaddingL10 = css` padding-left: 1rem; `
export const PaddingL11 = css` padding-left: 1.1rem; `
export const PaddingL12 = css` padding-left: 1.2rem; `
export const PaddingL13 = css` padding-left: 1.3rem; `
export const PaddingL14 = css` padding-left: 1.4rem; `
export const PaddingL15 = css` padding-left: 1.5rem; `
export const PaddingL16 = css` padding-left: 1.6rem; `
export const PaddingL17 = css` padding-left: 1.7rem; `
export const PaddingL18 = css` padding-left: 1.8rem; `
export const PaddingL19 = css` padding-left: 1.9rem; `
export const PaddingL20 = css` padding-left: 2rem; `

// ======================== Z-INDEX ==============================
export const ZIndex = css` z-index: ${ props => props.zIndex }; `
export const ZIndex0 = css` z-index:0; `
export const ZIndex1 = css` z-index:1; `
export const ZIndex2 = css` z-index:2; `
export const ZIndex3 = css` z-index:3; `
export const ZIndex4 = css` z-index:4; `
export const ZIndex5 = css` z-index:5; `
export const ZIndex6 = css` z-index:6; `
export const ZIndex7 = css` z-index:7; `
export const ZIndex8 = css` z-index:8; `
export const ZIndex9 = css` z-index:9; `
