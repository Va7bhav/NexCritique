/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import Product from '@/models/Product'
import AllProducts from '@/src/components/dashboard/AllProducts'
import FullLayout from '@/src/layouts/FullLayout'
import theme from '@/src/theme/theme'
import { ThemeProvider } from '@emotion/react'
import { Grid } from '@mui/material'
import mongoose from 'mongoose'
import React, { useEffect } from 'react'

const AllProds = ({ products }) => {
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
						<AllProducts products={products} />
					</Grid>
				</Grid>
			</FullLayout>
		</ThemeProvider>
	)
}

export default AllProds

export async function getServerSideProps(context) {
	if (!mongoose.connections[0].readyState) {
		await mongoose.connect(process.env.MONGO_URI);
	}
	let products = await Product.find();
	// console.log(products);
	return {
		props: { products: JSON.parse(JSON.stringify(products)) }
	}
}