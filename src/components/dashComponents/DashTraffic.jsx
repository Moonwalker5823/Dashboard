import { Box, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import StatBox from "../StatBox"
import TrafficIcon from "@mui/icons-material/Traffic"

const DashTraffic = () => {
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
              title="1,346,277"
              subtitle="Inbound Traffic"
              progress="0.80"
              increase="+43%"
              icon={
                <TrafficIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px"}}
                />
              }
            />
          </Box>
   </>
  )
}

export default DashTraffic