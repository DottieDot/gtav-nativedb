import { useTheme } from '@material-ui/core'
import React, { memo } from 'react'
import Highlighter from 'react-syntax-highlighter'
import { atomOneDark as darkStyle, atomOneLight as lightStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export interface SyntaxHighlighterProps {
  language: string
  children?: string
}

function SyntaxHighlighter({ language, children }: SyntaxHighlighterProps) {
  const theme = useTheme()

  const highlighterStyle = theme.palette.mode === 'dark'
    ? darkStyle
    : lightStyle

  return (
    <Highlighter 
      language={language} 
      style={highlighterStyle} 
      customStyle={{ 
        background: 'none', 
        padding: theme.spacing(2), 
        margin: 0
      }}
    >
      {children}
    </Highlighter>
  )
}

export default memo(SyntaxHighlighter)
