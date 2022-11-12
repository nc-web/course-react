
import { css } from 'styled-components'

// ==== Align Content ====
export const ACFlexStart = css` align-content: flex-start; `
export const ACFlexCenter = css` align-content: center; `
export const ACFlexEnd = css` align-content: flex-End; `
export const ACSpaceAround = css` align-content: space-around; `
export const ACSpaceBetween = css` align-content: space-between; `
export const ACStretch = css` align-content: stretch; `

// ==== Align Items ====
export const AIFlexStart = css` align-items: flex-start; `
export const AICenter = css` align-items: center; `
export const AIFlexEnd = css` align-items: flex-end; `
export const AIStretch = css` align-items: stretch; `
export const AIBaseline = css` align-items: baseline; `

// ==== Align Self ====
export const ASFlexStart = css` align-self: flex-start;  `
export const ASCenter = css` align-self: center; `
export const ASFlexEnd = css` align-self: flex-end; `
export const ASStretch = css` align-self: stretch; `
export const ASBaseline = css` align-self: baseline; `
export const ASAuto = css` align-self: auto; `

// Display - Legacy values
export const DisplayBlock = css` display: block; `
export const DisplayInline = css` display: inline; `
export const DisplayInlineBlock = css` display: inline-block; `
export const DisplayFlex = css` display: flex; `
export const DisplayInlineFlex = css` display: inline-flex; `
export const DisplayGrid = css` display: grid; `
export const DisplayInlineGrid = css` display: inline-grid;`
export const DisplayFlowRoot = css` display: flow-root; `

// Display - Box Generation
export const DisplayNone = css` display: none; `
export const DisplayContents = css` display: contents; `

// Display - Other Values
export const DisplayTable = css` display: table; `
export const DisplayTableRow = css` display: table-row; `
export const DisplaylistItem = css` display: clist-item; `

// Display - Global Values
export const DisplayInherit = css` display: inherit; `
export const DisplayInitial = css` display: initial; `
export const DisplayRevert = css` display: revert;`
export const DisplayUnset = css` display: unset; `

// Display - Two-Value Syntax
export const DisplayBlockFlow = css` display: block flow; `
export const DisplayInlineFlow = css` display: inline Flow; `
export const DisplayInlineFlowRoot = css` display: inline flow-root; `
export const DisplayBlockFlex = css` display: block flex; `

// DisplayInlineFlex = css` display: inline flex; `
export const DisplayBlockGrid = css` display: block grid; `

// DisplayInlineGrid = css` inline grid;`
export const DisplayBlockFlowRoot = css` display: block flow-root; `

// ==== Justify Content ====
export const JCFlexStart = css` justify-content: flex-start; `
export const JCCenter = css` justify-content: center; `
export const JCFlexEnd = css` justify-content: flex-end; `
export const JCSpaceAround = css` justify-content: space-around; `
export const JCSpaceBetween = css` justify-content: space-between; `
export const JCSpaceEvely = css` justify-content: space-evenly; `

// ===== Gap ====
export const Gap1 = css` gap: .063rem; `
export const Gap2 = css` gap: .125rem; `
export const Gap3 = css` gap: .188rem; `
export const Gap4 = css` gap: .25rem; `
export const Gap5 = css` gap: .313rem; `
export const Gap6 = css` gap: .375rem; `
export const Gap7 = css` gap: .438rem; `
export const Gap8 = css` gap: .5rem; `
export const Gap9 = css` gap: .563rem; `
export const Gap10 = css` gap: .625rem; `
export const Gap11 = css` gap: .688rem; `
export const Gap12 = css` gap: .75rem; `
export const Gap13 = css` gap: .813rem; `
export const Gap14 = css` gap: .875rem; `
export const Gap15 = css` gap: .938rem; `
export const Gap16 = css` gap: 1rem; `
export const Gap17 = css` gap: 1.063rem; `
export const Gap18 = css` gap: 1.125rem; `
export const Gap19 = css` gap: 1.188rem; `
export const Gap20 = css` gap: 1.25rem; `
export const Gap21 = css` gap: 1.313rem; `
export const Gap22 = css` gap: 1.375rem; `
export const Gap23 = css` gap: 1.438rem; `
export const Gap24 = css` gap: 1.5rem; `
export const Gap25 = css` gap: 1.563rem; `
export const Gap26 = css` gap: 1.625rem; `
export const Gap27 = css` gap: 1.688rem; `
export const Gap28 = css` gap: 1.75rem; `
export const Gap29 = css` gap: 1.813rem; `
export const Gap30 = css` gap: 1.875rem; `
export const Gap31 = css` gap: 1.938rem; `
export const Gap32 = css` gap: 2rem; `
export const Gap33 = css` gap: 2.063rem; `
export const Gap34 = css` gap: 2.125rem; `
export const Gap35 = css` gap: 2.188rem; `
export const Gap36 = css` gap: 2.25rem; `
export const Gap37 = css` gap: 2.313rem; `
export const Gap38 = css` gap: 2.375rem; `
export const Gap39 = css` gap: 2.438rem; `
export const Gap40 = css` gap: 2.5rem; `

// ==== Grid Template Columns - Repeat ====
export const GTColNone = css` grid-template-columns: none; `
export const GTCol1 = css` grid-template-columns: repeat(1, minmax(0, 1fr)); `
export const GTCol2 = css` grid-template-columns: repeat(2, minmax(0, 1fr)); `
export const GTCol3 = css` grid-template-columns: repeat(3, minmax(0, 1fr)); `
export const GTCol4 = css` grid-template-columns: repeat(4, minmax(0, 1fr)); `
export const GTCol5 = css` grid-template-columns: repeat(5, minmax(0, 1fr)); `
export const GTCol6 = css` grid-template-columns: repeat(6, minmax(0, 1fr)); `
export const GTCol7 = css` grid-template-columns: repeat(7, minmax(0, 1fr)); `
export const GTCol8 = css` grid-template-columns: repeat(8, minmax(0, 1fr)); `
export const GTCol9 = css` grid-template-columns: repeat(9, minmax(0, 1fr)); `
export const GTCol10 = css` grid-template-columns: repeat(10, minmax(0, 1fr)); `
export const GTCol11 = css` grid-template-columns: repeat(11, minmax(0, 1fr)); `
export const GTCol12 = css` grid-template-columns: repeat(12, minmax(0, 1fr)); `

// ==== Grid Template Columns - Auto Fill ====
export const GTCAutoFill1 = css` grid-template-columns: repeat(auto-fill, minmax(1rem, 1fr)); `
export const GTCAutoFill2 = css` grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr)); `
export const GTCAutoFill3 = css` grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr)); `
export const GTCAutoFill4 = css` grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr)); `
export const GTCAutoFill5 = css` grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr)); `
export const GTCAutoFill6 = css` grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr)); `
export const GTCAutoFill7 = css` grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr)); `
export const GTCAutoFill8 = css` grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr)); `
export const GTCAutoFill9 = css` grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr)); `
export const GTCAutoFill10 = css` grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr)); `
export const GTCAutoFill11 = css` grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr)); `
export const GTCAutoFill12 = css` grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr)); `
export const GTCAutoFill13 = css` grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr)); `
export const GTCAutoFill14 = css` grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr)); `
export const GTCAutoFill15 = css` grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); `
export const GTCAutoFill16 = css` grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr)); `
export const GTCAutoFill17 = css` grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr)); `
export const GTCAutoFill18 = css` grid-template-columns: repeat(auto-fill, minmax(18em, 1fr)); `
export const GTCAutoFill19 = css` grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr)); `
export const GTCAutoFill20 = css` grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr)); `

// ==== Grid Template Columns - Auto Fit ====
export const GTCAutoFit1 = css` grid-template-columns: repeat(auto-fit, minmax(1rem, 1fr)); `
export const GTCAutoFit2 = css` grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr)); `
export const GTCAutoFit3 = css` grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr)); `
export const GTCAutoFit4 = css` grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr)); `
export const GTCAutoFit5 = css` grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr)); `
export const GTCAutoFit6 = css` grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr)); `
export const GTCAutoFit7 = css` grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr)); `
export const GTCAutoFit8 = css` grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr)); `
export const GTCAutoFit9 = css` grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr)); `
export const GTCAutoFit10 = css` grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); `
export const GTCAutoFit11 = css` grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr)); `
export const GTCAutoFit12 = css` grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); `
export const GTCAutoFit13 = css` grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr)); `
export const GTCAutoFit14 = css` grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr)); `
export const GTCAutoFit15 = css` grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); `
export const GTCAutoFit16 = css` grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)); `
export const GTCAutoFit17 = css` grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr)); `
export const GTCAutoFit18 = css` grid-template-columns: repeat(auto-fit, minmax(18em, 1fr)); `
export const GTCAutoFit19 = css` grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr)); `
export const GTCAutoFit20 = css` grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); `
