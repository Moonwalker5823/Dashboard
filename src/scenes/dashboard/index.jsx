import { Box, Button, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import Header from '../../components/Header'
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import DashEmail from "../../components/dashComponents/DashEmail";
import DashPointOfSale from "../../components/dashComponents/DashPointOfSale";
import DashPerson from "../../components/dashComponents/DashPerson";
import DashTraffic from "../../components/dashComponents/DashTraffic";
import DashRevenue from "../../components/dashComponents/DashRevenue";
import DashTransactions from "../../components/dashComponents/DashTransactions";
import DashCampaign from "../../components/dashComponents/DashCampaign";
import DashSales from "../../components/dashComponents/DashSales";
import DashGeo from "../../components/dashComponents/DashGeo";

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
      <DashCampaign/>
      <DashSales/>
      <DashGeo/>
      </Box>
    </Box>
  )
}

export default Dashboard