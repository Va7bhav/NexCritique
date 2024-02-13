/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import BaseCard from '@/src/components/baseCard/BaseCard';
import FullLayout from '@/src/layouts/FullLayout';
import theme from '@/src/theme/theme';
import { ThemeProvider } from '@emotion/react';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Radio, RadioGroup, Stack, TextField } from '@mui/material';
import React, { useState } from 'react'

const Add = () => {
	const [form, setForm] = useState({});
	const onChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const submitForm = async (e) => {
		e.preventDefault();
		const data = { title: form.title, slug: form.slug, desc: form.description, img: form.img, category: form.type, size: form.size, color: form.color, price: form.price, availableQty: form.qty };
		const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproduct`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		let response = await res.json()
		console.log(response.success);

	}
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
						<BaseCard title="Add a Product">
							<Stack spacing={3}>
								<TextField onChange={onChange} value={form.slug ? form.slug : ""} name="slug" label="Slug" variant="outlined" />
								<TextField onChange={onChange} value={form.title ? form.title : ""} name="title" label="Title" variant="outlined" />
								<TextField onChange={onChange} value={form.type ? form.type : ""} name="type" label="Type" variant="outlined" />
								<TextField onChange={onChange} value={form.color ? form.color : ""} name="color" label="Color" variant="outlined" />
								<TextField onChange={onChange} value={form.size ? form.size : ""} name="size" label="Size" variant="outlined" />
								<TextField onChange={onChange} value={form.price ? form.price : ""} name="price" label="Price" variant="outlined" />
								<TextField onChange={onChange} value={form.qty ? form.qty : ""} name="qty" label="Quantity" variant="outlined" />
								<TextField onChange={onChange} value={form.img ? form.img : ""} name="img" label="Image Link" variant="outlined" />

								<TextField
									onChange={onChange}
									name="description"
									label="Description"
									value={form.description ? form.description : ""}
									multiline
									rows={4}
								/>



							</Stack>
							<br />
							<Button onClick={submitForm} variant="outlined" mt={2}>
								Submit
							</Button>
						</BaseCard>
					</Grid>


				</Grid>

			</FullLayout>
		</ThemeProvider>
	);
}

export default Add