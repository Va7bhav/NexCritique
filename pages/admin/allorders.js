/* eslint-disable react/no-unknown-property */
import BlogCard from '@/src/components/dashboard/BlogCard'
import DailyActivity from '@/src/components/dashboard/DailyActivity'
import SalesOverview from '@/src/components/dashboard/SalesOverview'
import FullLayout from '@/src/layouts/FullLayout'
import theme from '@/src/theme/theme'
import { ThemeProvider } from '@emotion/react'
import { Grid } from '@mui/material'
import React from 'react'

const allorders = () => {
  return (
	<ThemeProvider theme={theme}>
      
      <style jsx global>{
        `footer {
          display: none;
        }`
      }
      </style>
      <FullLayout>
        I am empty
      </FullLayout>
    </ThemeProvider>
  )
}

export default allorders