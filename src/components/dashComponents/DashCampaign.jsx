import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import ProgressCircle from "../ProgressCircle"

const DashCampaign = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <>
    <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
    >
        <Typography variant="h5" fontWeight='600'>
            Campaign
        </Typography>
        <Box 
            display='flex' 
            flexDirection="column" 
            alignItems="center" 
            mt="25px"
        >
        <ProgressCircle size="125"/>
        <Typography 
            variant="h5" 
            color={colors.greenAccent[500]} 
            sx={{ mt: '15px'}}
        >
            $48, 486 revenue generated
        </Typography>
        <Typography>
            Includes extra misc expenditures and costs
        </Typography>
        </Box>
    </Box>
    </>
  )
}

export default DashCampaign