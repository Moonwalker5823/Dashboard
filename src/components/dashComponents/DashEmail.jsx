import { Box, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import StatBox from "../StatBox"
import EmailIcon from "@mui/icons-material/Email"


const DashEmail = () => {
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
                    title="12,361"
                    subtitle="Emails Sent"
                    progress="0.75"
                    increase="+14%"
                    icon={
                         <EmailIcon
                        sx={{ color: colors.greenAccent[600], fontSize: "26px"}}
                    />
                }
                />
        </Box>
    </>
  )
}

export default DashEmail