import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface FlexRowItem {
  label: string;
  value: ReactNode;
}

interface FlexRowProps {
  items: FlexRowItem[];
}

const FlexRow = ({ items }: FlexRowProps) => {
  return (
    <Box display="flex" justifyContent="space-between" mb={2}>
      {items.map((item, index) => (
        <Box key={index} flex={1} px={1}>
          <Typography variant="subtitle2" color="#7E838F">
            {item.label}
          </Typography>
          <Typography>{item.value}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FlexRow;
