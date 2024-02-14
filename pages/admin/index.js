/* eslint-disable react/no-unknown-property */
import { Grid } from "@mui/material";
import BlogCard from "../../src/components/dashboard/BlogCard";
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import ProductPerfomance from "../../src/components/dashboard/AllProducts";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import FullLayout from "@/src/layouts/FullLayout";
import theme from "@/src/theme/theme";

export default function Index() {
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
          <Grid item xs={12} lg={8}>
            <ProductPerfomance />
          </Grid>
          <Grid item xs={12} lg={12}>
            <BlogCard />
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
}
