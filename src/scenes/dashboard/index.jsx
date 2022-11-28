import { Box, Button, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import Header from '../../components/Header'
// import { mockTransactions } from "../../data/mockData"
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import BarChart from "../../components/BarChart"
import ProgressCircle from "../../components/ProgressCircle"
import DashEmail from "../../components/dashComponents/DashEmail";
import DashPointOfSale from "../../components/DashPointOfSale";
import DashPerson from "../../components/dashComponents/DashPerson";
import DashTraffic from "../../components/dashComponents/DashTraffic";
import DashRevenue from "../../components/dashComponents/DashRevenue";
import DashTransactions from "../../components/dashComponents/DashTransactions";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display='flex' justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>

        <Box>
          <Button
            sx={{ 
              backgroundColor: colors.blueAccent[700], 
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: "bold",
              padding: "10px 20px"
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px"}}/>
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* CARD CHARTS */}
      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gridAutoRows='140px'
        gap="20px"
      >
      {/* FIRST ROW */}
      <DashEmail />
      <DashPointOfSale />
      <DashPerson />
      <DashTraffic />
          
      {/* SECOND ROW */}
      <DashRevenue/>

      {/* TRANSACTIONS */}
      <DashTransactions />

      {/* THIRD ROW */}
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              p="30px"
            >
              <Typography 
                variant="h5"
                fontWeight='600'
              >
                Campaign
              </Typography>
              <Box display='flex' flexDirection="column" alignItems="center" mt="25px">
                <ProgressCircle size="h5"/>
                <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: '15px'}}>
                  $48, 486 revenue Generated
                </Typography>
                <Typography>Includes extra misc expenditures and costs</Typography>
              </Box>
            </Box>

            {/*  */}
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
                Sales Quality
              </Typography>
              <Box height="250px" mt="-20px">
                <BarChart isDashboard={true}/>
              </Box>
            </Box>

            {/*  */}
            {/* <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              padding="30px"
            >
              <Typography 
                variant="h5"
                fontWeight='600'
                sx={{ mb: "15px"}}
              >
                Geography Based Traffic
              </Typography>
              <Box height="200px">
                <GeographyChart isDashboard={true}/>
              </Box>
            </Box> */}
      </Box>
    </Box>
  )
}

export default Dashboard