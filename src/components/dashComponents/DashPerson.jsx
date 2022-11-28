import { Box, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import StatBox from "../StatBox"
import PersonAddIcon from "@mui/icons-material/PersonAdd"

const DashPerson = props => {
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
              title="32,456"
              subtitle="New Clients"
              progress="0.30"
              increase="+5%"
              icon={
                <PersonAddIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px"}}
                />
              }
            />
          </Box>
    </>
  )
}

DashPerson.propTypes = {}

export default DashPerson