import { Box, useTheme, Typography, IconButton } from "@mui/material"
import { tokens } from "../../theme"
import LineChart from "../LineChart"
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined"

const DashRevenue = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
    return (
      <>
        <Box
          gridColumn='span 8'
          gridRow="span 2"
          backgroundcolor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography 
                varient="h5" 
                fontWeight="600" 
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography  
                varient="h3" 
                fontWeight="bold" 
                color={colors.greenAccent[500]}
              >
                $70,457,48
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500]}}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true}/>
          </Box>
        </Box>
      </>
    )
}

export default DashRevenue