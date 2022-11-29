import { Box, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import StatBox from "../StatBox"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"

import React from 'react'

const DashPointOfSale = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <>
        <Box
            gridColumn='span 3'
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="531,225"
              subtitle="Sales Obtained"
              progress="0.5"
              increase="+21%"
              icon={
                <PointOfSaleIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px"}}
                />
              }
            />
          </Box>
    </>
  )
}

export default DashPointOfSale