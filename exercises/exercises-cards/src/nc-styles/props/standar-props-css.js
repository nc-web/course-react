
import { css } from 'styled-components'

// ==== Align Content ====
export const AlignContent = css` align-content: ${props => props.alignContent}; `

// ==== Align Items ====
export const AlignItems = css` align-items: ${props => props.AlignItems}; `

// ==== Align Self ====
export const AlignSelf = css` align-self: ${props => props.AlignSelf}; `

// ==== Align Tracks ====
// export const AlignTracks = css` align-tracks: ${props => props.alignTracks}; `

// ==== Direction ====
export const Direction = css` direction: ${props => props.direction}; `

// ==== Direction ====
export const Display = css` display: ${props => props.display}; `

// ========================= BORDER =============================
// Border
export const Border = css` ${props => props.border} `
export const BorderNone = css` border: none; `

// Border Top
export const BorderTop = css` border-top: ${props => props.borderTop}; `

// Border Bottom
export const BorderBottom = css` border-bottom: ${props => props.borderBottom}; `

// Border Left 
export const BorderLeft = css` border-left: ${props => props.borderLeft}; `

// Border Right
export const BorderRight = css` border-right: ${props => props.borderRight}; `

// ========================= BORDER RADIUS =============================
// Radius all
export const BorderRadius = css` border-radius: ${props => props.borderRadius}; `

// Radius TL
export const BorderTopLeftRadius = css` border-top-left-radius: ${props => props.borderTopLeftRadius}; `

// Radius TR
export const BorderTopRightRadius = css` border-top-right-radius: ${props => props.borderTopRightRadius}; `

// Radius BL
export const BorderBottomLeftRadius = css` border-bottom-left-radius: ${props => props.borderBottomLeftRadius}; `

// Radius BR
export const BorderBottomRightRadius = css` border-bottom-right-radius: ${props => props.borderBottomRightRadius}; `

// Cursor Pointer
export const Cursor = css` cursor: ${props => props.cursor}; `

// ==== FLEX ====
export const Flex = css` flex: ${props => props.flex};`

// FontSize
export const FontSize = css` font-size: ${props => props.fontSize}; `

// ===== Font Weight ====
export const FontWeight = css` font-weight: ${props => props.fontWeight}; `
export const FontWeightLighter = css` font-weight: lighter; `
export const FontWeightNormal = css` font-weight: normal; `
export const FontWeightBold = css` font-weight: bold; `

// ===== Gap ====
export const Gap = css` gap: ${props => props.gap}; `

// ==== Grid Template Columns - Repeat ====
export const GridTemplateColumns = css` grid-template-columns: ${props => props.gridTemplateColumns}; `

// ========================= POSITIONS =============================
export const Position = css` position: ${props => props.position}; `
export const PositionAbsolute = css` position: absolute; `
export const PositionFixed = css` position: fixed; `
export const PositionRelative = css` position: relative; `
export const PositionStatic = css` position: static; `
export const PositionSticky = css` position: sticky; `
export const PositionInherit = css` position: inherit; `
export const PositionInitial = css` position: initial; `
export const PositionUnset = css` position: unset; `

// ========================= SHADOW =============================
export const BoxShadow = css` box-shadow: ${props => props.boxShadow}; `
export const BoxShadowBR1 = css` box-shadow: .063rem .125rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowBR2 = css` box-shadow: .125rem .188rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowBL1 = css` box-shadow: .063rem .125rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowBL2 = css` box-shadow: .125rem .188rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowTR1 = css` box-shadow: .063rem .125rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowTR2 = css` box-shadow: .125rem .188rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowTL1 = css` box-shadow: .063rem .125rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowTL2 = css` box-shadow: .125rem .188rem .063rem .063rem rgba(0, 0, 0, 0.1); `

// ========================= TEXT ALING ============================
export const TextAling = css` text-align: ${props => props.textAling}; `
export const TextAlingCenter = css` text-align: center; `
export const TextAlingLeft = css` text-align: left; `
export const TextAlingRight = css` text-align: right; `

// ======================== POSITIONS ==============================
// Top
export const Top = css` top: ${props => props.top}; `

// Bottom
export const Bottom = css` bottom: ${props => props.bottom}; `

// ========================= HEIGHT ============================
export const Height = css` height: ${props => props.height}; `

// Left
export const Left = css` left: ${props => props.left}; `

// Right
export const Right = css` right: ${props => props.right}; `

// ========================= MARGINS ============================
// MarginAuto - Margin Auto
export const MarginAuto = css` margin: auto;`
// Margin - Margin All
export const Margin = css` margin: ${props => props.margin};`

// MarginX - Margin eje X
export const MarginX = css` margin-left: ${ props => props.marginX }; margin-right: ${ props => props.marginX }; `

// MarginY - Margin eje Y
export const MarginY = css` margin-top: ${ props => props.marginY }; margin-bottom: ${ props => props.marginY }; `

// MarginT - Margin Top
export const MarginT = css` margin-top: ${ props => props.marginT }; `

// MarginR - Margin right
export const MarginR = css` margin-right: ${ props => props.marginR }; `

// MarginB - Margin bottom
export const MarginB = css` margin-bottom: ${ props => props.marginB }; `

// MarginL - Margin left
export const MarginL = css` margin-left: ${ props => props.marginL }; `

// ======================== PADDING ==============================
// Padding - Padding All
export const Padding = css` padding: ${ props => props.padding }; `

// PaddingX - Padding eje X
export const PaddingX = css` padding-right: ${ props => props.paddingX }; padding-left: ${ props => props.paddingX }; `

// PaddingY - Padding eje Y
export const PaddingY = css` padding-top: ${ props => props.paddingY }; padding-bottom: ${ props => props.paddingY }; `

// PaddingT - Padding top
export const PaddingT = css` padding-top: ${ props => props.paddingT }; `

// PaddingR - Padding right
export const PaddingR = css` padding-right: ${ props => props.paddingR }; `

// PaddingB - Padding bottom
export const PaddingB = css` padding-bottom: ${ props => props.paddingB }; `

// PaddingL - Padding left
export const PaddingL = css` padding-left: ${ props => props.paddingL }; `

// ======================== WIDTH ==============================
export const Width = css` width: ${ props => props.width }; `

// ======================== Z-INDEX ==============================
export const ZIndex = css` z-index: ${ props => props.zIndex }; `

