import React from "react"
import "./LexLogo.css"

// To use logo
    // Assign a location prop: logo__login--lex, header, footer (from LexLogo.css)
    // Assign a color prop: logo__white (from LexLogo.css)

const LexLogo = props => (
    <svg className={props.location} width="195" height="160" version="1.1" viewBox="0 0 51.594 42.333" xmlns="http://www.w3.org/2000/svg">
        <title>Lexicon Logo</title>
        <path id="tri_yellow" d="m34.507 1.3433-34.453 39.621h30.672z" style={{fill:"#e4e485", paintOrder:"stroke fill markers", strokeLinecap:"round", strokeLinejoin: "round", strokWidth:".10087"}}/>
        <path id="tri_red" d="m0.053477 1.3434 17.389 19.811 8.464-9.5514 6.941 9.5514 14.396-19.811h-28.792z" style={{fill:"#d64d4d", paintOrder:"stroke fill markers",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:".050434"}}/>
        <path id="tri_gray" d="m32.848 21.154-14.396 19.811h28.792z" style={{fill:"#dbdbdb",paintOrder:"stroke fill markers",strokeLinecap:"round",strokeLinejoin:"round", strokeWidth:".050434"}}/>
        <path id="tri_orange" d="m25.886 11.467-8.4433 9.6868h15.405z" style={{fillOpacity:".57143",fill:"#d64d4d",paintOrder:"stroke fill markers",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:".021494"}}/>
        <path className={props.color} id="x" d="m16.099 0.039502v1.9041h1.6933l13.817 19.013 0.14309 0.1968-0.14309 0.19616-13.838 19.041h-1.6724v1.9049h7.1287v-1.9049h-3.2618l12.883-17.729 12.88 17.729h-1.3206v1.9049h7.1315v-1.9049h-3.6164l-13.979-19.238 13.958-19.21h3.6373v-1.9041h-7.1315v1.9041h1.3018l-12.861 17.701-12.864-17.701h3.2429v-1.9041z" style={{colorRendering:"auto",color:"#000000",dominantBaseline:"auto",fill:"#171717",fontFeatureSettings:"normal",fontVariantAlternates:"normal",fontVariantCaps:"normal", imageRendering:"auto",inlineSize:"0",isolation:"auto",mixBlendMode:"normal",shapeMargin:"0",shapePadding:"0",shapeRendering:"auto",solidColor:"#000000",stopColor:"#000000",textDecorationColor:"#000000",textDecorationLine:"none",textDecorationStyle:"solid"}}/>
    </svg>
)

export default LexLogo