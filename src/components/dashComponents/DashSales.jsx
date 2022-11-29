import { Box, Typography, useTheme } from "@mui/material"
import BarChart from "../../components/BarChart"
import { tokens } from "../../theme"

const DashSales = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <>
    <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
            >
              <Typography 
                variant="h5"
                fontWeight='600'
                sx={{ p: "30px 30px 0 30px"}}
              >
                Sales Quantity
              </Typography>
              <Box height="250px" mt="-20px">
                <BarChart isDashboard={true}/>
              </Box>
            </Box>
    </>
  )
}

export default DashSales