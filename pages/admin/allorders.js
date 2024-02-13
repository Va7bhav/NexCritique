import ProductPerfomance from '@/src/components/dashboard/ProductPerfomance';
import FullLayout from '@/src/layouts/FullLayout';
import theme from '@/src/theme/theme';
import { ThemeProvider } from '@emotion/react';
import { Grid } from '@mui/material';
import React from 'react'

const AllOrders = () => {
	return (
		<ThemeProvider theme={theme}>
			<style jsx global>{
				`footer {
          display: none;
        }`
			}
			</style>
			<FullLayout>
				<Grid container spacing={0}>
					<Grid item xs={12} lg={12}>
						<ProductPerfomance />
					</Grid>
				</Grid>
			</FullLayout>
		</ThemeProvider>
	);
}

export default AllOrders