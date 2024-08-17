import React from "react";

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  Chip,
} from "@mui/material";

const BaseCard = (props) => {
  return (
    <Card>
      <Box p={2} display="flex" alignItems="center">
        <Typography variant="h4"></Typography>
      </Box>
      <CardContent></CardContent>
    </Card>
  );
};

export default BaseCard;
