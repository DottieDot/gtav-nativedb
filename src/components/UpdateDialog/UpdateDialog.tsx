import { Dialog, DialogTitle, DialogContent, Typography, styled, Divider, Box, DialogActions, Button } from '@material-ui/core'
import React, { memo } from 'react'
import { useCallback } from 'react'
import { ReactNode } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import { buildDate } from '../../common'

const UnorderedList = styled('ul')(({ theme }) => ({
  marginTop: 0,
  paddingLeft: theme.spacing(2)
}))

const ListItem = styled('li')(({ theme }) => ({
  marginTop: theme.spacing(1)
}))

interface HeaderProps {
  children: ReactNode
  type: 'new' | 'fix'
}

function Header({ children,  type }: HeaderProps) {
  const color = type === 'fix' ? 'warning.main' : 'primary.main'
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography 
        variant="h6" 
        component="h3"
        sx={{ color: color }}
      >
        {children}
      </Typography>
      <Divider 
        sx={{ 
          flex: 1, 
          bgcolor: color, 
          mt: .5 
        }} 
        />
    </Box>
  )
}

function UpdateDialog() {
  const [closedChangelog, setClosedChangelog] = useLocalStorageState('UpdateDialog.Closed', '')

  const handleClose = useCallback(() => {
    setClosedChangelog(buildDate)
  }, [setClosedChangelog])

  return (
    <Dialog 
      open={closedChangelog !== buildDate}
      onClose={handleClose}
      maxWidth="sm" 
      scroll="paper" 
      fullWidth
    >
      <DialogTitle>
        Changelog
      </DialogTitle>
      <DialogContent>
        <Header type="new">
          New Features
        </Header>
        <Typography variant="body2">
          <UnorderedList>
            <ListItem>
              <b>Native Script Usage</b><br />
              Native info now includes a code snippet from the game scripts on how the native is used.
            </ListItem>
          </UnorderedList>
        </Typography> 
        {/* <Header type="fix">
          Fixes and Changes
        </Header>
        <Typography variant="body2">
          <UnorderedList>
            <ListItem>
              <b>FiveM Native Search</b><br />
              Fixed how FiveM natives are loaded. The app will no longer crash while having them loaded.
            </ListItem>
          </UnorderedList>
        </Typography> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
export default memo(UpdateDialog)
