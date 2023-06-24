import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

interface exampleListProps {
  listItems: string[];
}

export const ExampleList = ({ listItems }: exampleListProps) => {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Test List
      </Typography>
      <List>
        {listItems.map((item) => (
          <ListItem>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
