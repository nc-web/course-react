
import { css } from 'styled-components'

import {

  ACFlexStart, ACFlexCenter, ACFlexEnd, ACSpaceAround, ACSpaceBetween, ACStretch,
  AIFlexStart, AICenter, AIFlexEnd, AIStretch, AIBaseline,
  ASFlexStart, ASCenter, ASFlexEnd, ASStretch, ASBaseline, ASAuto,

  DisplayBlock, DisplayInline, DisplayInlineBlock, DisplayFlex, DisplayInlineFlex, DisplayGrid, DisplayInlineGrid, DisplayFlowRoot,
  DisplayNone, DisplayContents,
  DisplayTable, DisplayTableRow, DisplaylistItem,
  DisplayInherit, DisplayInitial, DisplayRevert, DisplayUnset,
  DisplayBlockFlow, DisplayInlineFlow, DisplayInlineFlowRoot, DisplayBlockFlex,
  DisplayBlockGrid,
  DisplayBlockFlowRoot,

  Gap1, Gap2, Gap3, Gap4, Gap5, Gap6, Gap7, Gap8, Gap9, Gap10, Gap11, Gap12, Gap13, Gap14, Gap15, Gap16, Gap17, Gap18, Gap19, Gap20,
  Gap21, Gap22, Gap23, Gap24, Gap25, Gap26, Gap27, Gap28, Gap29, Gap30, Gap31, Gap32, Gap33, Gap34, Gap35, Gap36, Gap37, Gap38, Gap39, Gap40,

  GTColNone, GTCol1, GTCol2, GTCol3, GTCol4, GTCol5, GTCol6, GTCol7, GTCol8, GTCol9, GTCol10, GTCol11, GTCol12,

  GTCAutoFill1, GTCAutoFill2, GTCAutoFill3, GTCAutoFill4, GTCAutoFill5, GTCAutoFill6, GTCAutoFill7, GTCAutoFill8, GTCAutoFill9, GTCAutoFill10,
  GTCAutoFill11, GTCAutoFill12, GTCAutoFill13, GTCAutoFill14, GTCAutoFill15, GTCAutoFill16, GTCAutoFill17, GTCAutoFill18, GTCAutoFill19, GTCAutoFill20,

  GTCAutoFit1, GTCAutoFit2, GTCAutoFit3, GTCAutoFit4, GTCAutoFit5, GTCAutoFit6, GTCAutoFit7, GTCAutoFit8, GTCAutoFit9, GTCAutoFit10,
  GTCAutoFit11, GTCAutoFit12, GTCAutoFit13, GTCAutoFit14, GTCAutoFit15, GTCAutoFit16, GTCAutoFit17, GTCAutoFit18, GTCAutoFit19, GTCAutoFit20,

  JCFlexStart, JCCenter, JCFlexEnd, JCSpaceAround, JCSpaceBetween, JCSpaceEvely

}

  from '@components/assets/props/exclusives-props-containers-css'

const exclusivesPropsContainers = css`

    /* ALIGN CONTENT */
    ${props => props.acFlexStart && css` ${ACFlexStart}`}
    ${props => props.acCenter && css` ${ACFlexCenter} `}
    ${props => props.acFlexEnd && css` ${ACFlexEnd} `}
    ${props => props.acSpaceAround && css` ${ACSpaceAround} `}
    ${props => props.acSpaceBetween && css` ${ACSpaceBetween} `}
    ${props => props.acStretch && css` ${ACStretch} `}

    /* ALIGN ITEMS */
    ${props => props.aiFlexStart && css` ${AIFlexStart} `}
    ${props => props.aiCenter && css` ${AICenter} `}
    ${props => props.aiFlexEnd && css` ${AIFlexEnd} `}
    ${props => props.aiStretch && css` ${AIStretch} `}
    ${props => props.aiBaseline && css` ${AIBaseline} `}

    /* ALIGN SELF */
    ${props => props.asFlexStart && css` ${ASFlexStart} `}
    ${props => props.asCenter && css` ${ASCenter} `}
    ${props => props.asFlexEnd && css` ${ASFlexEnd} `}
    ${props => props.asStretch && css` ${ASStretch} `}
    ${props => props.asBaseline && css` ${ASBaseline} `}
    ${props => props.asAuto && css` ${ASAuto} `}

    /* DISPLAY */
    /* Display - Legacy values */
    ${props => props.displayBlock && css` ${DisplayBlock} `}
    ${props => props.displayInline && css` ${DisplayInline} `}
    ${props => props.displayInlineBlock && css` ${DisplayInlineBlock} `}
    ${props => props.displayFlex && css` ${DisplayFlex} `}
    ${props => props.displayInlineFlex && css` ${DisplayInlineFlex} `}
    ${props => props.displayGrid && css` ${DisplayGrid} `}
    ${props => props.displayInlineGrid && css` ${DisplayInlineGrid} `}
    ${props => props.displayFlowRoot && css` ${DisplayFlowRoot} `}
    /* Display - Box Generation */
    ${props => props.displayNone && css` ${DisplayNone} `}
    ${props => props.displayContents && css` ${DisplayContents} `}
    /* Display - Other Values */
    ${props => props.displayTable && css` ${DisplayTable} `}
    ${props => props.displayTableRow && css` ${DisplayTableRow} `}
    ${props => props.displaylistItem && css` ${DisplaylistItem} `}
    // Display - Other Values */
    ${props => props.displayInherit && css` ${DisplayInherit} `}
    ${props => props.displayInitial && css` ${DisplayInitial} `}
    ${props => props.displayRevert && css` ${DisplayRevert} `}
    ${props => props.displayUnset && css` ${DisplayUnset} `}
    /* Display - Two Value Syntax */
    ${props => props.displayBlockFlow && css` ${DisplayBlockFlow} `}
    ${props => props.displayInlineFlow && css` ${DisplayInlineFlow} `}
    ${props => props.displayInlineFlowRoot && css` ${DisplayInlineFlowRoot} `}
    ${props => props.displayBlockFlex && css` ${DisplayBlockFlex} `}
    ${props => props.displayBlockGrid && css` ${DisplayBlockGrid} `}
    ${props => props.displayBlockFlowRoot && css` ${DisplayBlockFlowRoot} `}

    /* JUSTIFY CONTENT */
    ${props => props.jcFlexStart && css` ${JCFlexStart} `}
    ${props => props.jcCenter && css` ${JCCenter} `}
    ${props => props.jcFlexEnd && css` ${JCFlexEnd}`}
    ${props => props.jcSpaceAround && css` ${JCSpaceAround} `}
    ${props => props.jcSpaceBetween && css` ${JCSpaceBetween} `}
    ${props => props.jcSpaceEvely && css` ${JCSpaceEvely} `}

     /* GAP */
    ${props => props.gap1 && css` ${Gap1} `}
    ${props => props.gap2 && css` ${Gap2} `}
    ${props => props.gap3 && css` ${Gap3} `}
    ${props => props.gap4 && css` ${Gap4} `}
    ${props => props.gap5 && css` ${Gap5} `}
    ${props => props.gap6 && css` ${Gap6} `}
    ${props => props.gap7 && css` ${Gap7} `}
    ${props => props.gap8 && css` ${Gap8} `}
    ${props => props.gap9 && css` ${Gap9} `}
    ${props => props.gap10 && css` ${Gap10} `}
    ${props => props.gap11 && css` ${Gap11} `}
    ${props => props.gap12 && css` ${Gap12} `}
    ${props => props.gap13 && css` ${Gap13} `}
    ${props => props.gap14 && css` ${Gap14} `}
    ${props => props.gap15 && css` ${Gap15} `}
    ${props => props.gap16 && css` ${Gap16} `}
    ${props => props.gap17 && css` ${Gap17} `}
    ${props => props.gap18 && css` ${Gap18} `}
    ${props => props.gap19 && css` ${Gap19} `}
    ${props => props.gap20 && css` ${Gap20} `}
    ${props => props.gap21 && css` ${Gap21} `}
    ${props => props.gap22 && css` ${Gap22} `}
    ${props => props.gap23 && css` ${Gap23} `}
    ${props => props.gap24 && css` ${Gap24} `}
    ${props => props.gap25 && css` ${Gap25} `}
    ${props => props.gap26 && css` ${Gap26} `}
    ${props => props.gap27 && css` ${Gap27} `}
    ${props => props.gap28 && css` ${Gap28} `}
    ${props => props.gap29 && css` ${Gap29} `}
    ${props => props.gap30 && css` ${Gap30} `}
    ${props => props.gap31 && css` ${Gap31} `}
    ${props => props.gap32 && css` ${Gap32} `}
    ${props => props.gap33 && css` ${Gap33} `}
    ${props => props.gap34 && css` ${Gap34} `}
    ${props => props.gap35 && css` ${Gap35} `}
    ${props => props.gap36 && css` ${Gap36} `}
    ${props => props.gap37 && css` ${Gap37} `}
    ${props => props.gap38 && css` ${Gap38} `}
    ${props => props.gap39 && css` ${Gap39} `}
    ${props => props.gap40 && css` ${Gap40} `}

    /* GRID TEMPLATE COLUMNS */
    ${props => props.gtCol1 && css` ${GTCol1} `}
    ${props => props.gtCol2 && css` ${GTCol2} `}
    ${props => props.gtCol3 && css` ${GTCol3} `}
    ${props => props.gtCol4 && css` ${GTCol4} `}
    ${props => props.gtCol5 && css` ${GTCol5} `}
    ${props => props.gtCol6 && css` ${GTCol6} `}
    ${props => props.gtCol7 && css` ${GTCol7} `}
    ${props => props.gtCol8 && css` ${GTCol8} `}
    ${props => props.gtCol9 && css` ${GTCol9} `}
    ${props => props.gtCol10 && css` ${GTCol10} `}
    ${props => props.gtCol11 && css` ${GTCol11} `}
    ${props => props.gtCol12 && css` ${GTCol12} `}
    ${props => props.gtColNone && css` ${GTColNone} `}

    /* ==== Grid template columns - Auto Fill ==== */
    ${props => props.gtcAutoFill1 && css` ${GTCAutoFill1} `}
    ${props => props.gtcAutoFill2 && css` ${GTCAutoFill2} `}
    ${props => props.gtcAutoFill3 && css` ${GTCAutoFill3} `}
    ${props => props.gtcAutoFill4 && css` ${GTCAutoFill4} `}
    ${props => props.gtcAutoFill5 && css` ${GTCAutoFill5} `}
    ${props => props.gtcAutoFill6 && css` ${GTCAutoFill6} `}
    ${props => props.gtcAutoFill7 && css` ${GTCAutoFill7} `}
    ${props => props.gtcAutoFill8 && css` ${GTCAutoFill8} `}
    ${props => props.gtcAutoFill9 && css` ${GTCAutoFill9} `}
    ${props => props.gtcAutoFill10 && css` ${GTCAutoFill10} `}
    ${props => props.gtcAutoFill11 && css` ${GTCAutoFill11} `}
    ${props => props.gtcAutoFill12 && css` ${GTCAutoFill12} `}
    ${props => props.gtcAutoFill13 && css` ${GTCAutoFill13} `}
    ${props => props.gtcAutoFill14 && css` ${GTCAutoFill14} `}
    ${props => props.gtcAutoFill15 && css` ${GTCAutoFill15} `}
    ${props => props.gtcAutoFill16 && css` ${GTCAutoFill16} `}
    ${props => props.gtcAutoFill17 && css` ${GTCAutoFill17} `}
    ${props => props.gtcAutoFill18 && css` ${GTCAutoFill18} `}
    ${props => props.gtcAutoFill19 && css` ${GTCAutoFill19} `}
    ${props => props.gtcAutoFill20 && css` ${GTCAutoFill20} `}

    /* ==== Grid template columns - Auto Fit ==== */
    ${props => props.gtcAutoFit1 && css` ${GTCAutoFit1} `}
    ${props => props.gtcAutoFit2 && css` ${GTCAutoFit2} `}
    ${props => props.gtcAutoFit3 && css` ${GTCAutoFit3} `}
    ${props => props.gtcAutoFit4 && css` ${GTCAutoFit4} `}
    ${props => props.gtcAutoFit5 && css` ${GTCAutoFit5} `}
    ${props => props.gtcAutoFit6 && css` ${GTCAutoFit6} `}
    ${props => props.gtcAutoFit7 && css` ${GTCAutoFit7} `}
    ${props => props.gtcAutoFit8 && css` ${GTCAutoFit8} `}
    ${props => props.gtcAutoFit9 && css` ${GTCAutoFit9} `}
    ${props => props.gtcAutoFit10 && css` ${GTCAutoFit10} `}
    ${props => props.gtcAutoFit11 && css` ${GTCAutoFit11} `}
    ${props => props.gtcAutoFit12 && css` ${GTCAutoFit12} `}
    ${props => props.gtcAutoFit13 && css` ${GTCAutoFit13} `}
    ${props => props.gtcAutoFit14 && css` ${GTCAutoFit14} `}
    ${props => props.gtcAutoFit15 && css` ${GTCAutoFit15} `}
    ${props => props.gtcAutoFit16 && css` ${GTCAutoFit16} `}
    ${props => props.gtcAutoFit17 && css` ${GTCAutoFit17} `}
    ${props => props.gtcAutoFit18 && css` ${GTCAutoFit18} `}
    ${props => props.gtcAutoFit19 && css` ${GTCAutoFit19} `}
    ${props => props.gtcAutoFit20 && css` ${GTCAutoFit20} `}


`

export default exclusivesPropsContainers
