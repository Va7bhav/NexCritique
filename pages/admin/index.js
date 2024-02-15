/* eslint-disable react/no-unknown-property */
import { Grid } from "@mui/material";
import BlogCard from "../../src/components/dashboard/BlogCard";
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import React, { useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import FullLayout from "@/src/layouts/FullLayout";
import theme from "@/src/theme/theme";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
	const checkUserIsAdmin = async () => {
		const myuser = JSON.parse(localStorage.getItem('myuser'));
    console.log(myuser.token);
		const res = await fetch('http://localhost:3000/api/getuser', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(myuser),
		});
		let response = await res.json();
		console.log(response);
		let isAdmin = response.isAdmin;
		console.log(isAdmin);
		if (isAdmin == false) {
			router.push('/');
		} 
	}

	useEffect(() => {
		checkUserIsAdmin();
	}, [router.query]);
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
            <SalesOverview />
          </Grid>
          {/* ------------------------- row 1 ------------------------- */}
          <Grid item xs={12} lg={4}>
            <DailyActivity />
          </Grid>
          <Grid item xs={12} lg={12}>
            <BlogCard />
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
}
