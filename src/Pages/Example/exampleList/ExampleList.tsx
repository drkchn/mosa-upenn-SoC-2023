import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { ListItemButton } from "@mui/material";

interface exampleListProps {
  listItems: string[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  updateExampleList: Function;
}

export const ExampleList = ({
  listItems,
  updateExampleList,
}: exampleListProps) => {
  useEffect(() => {
    console.log(listItems);
  }, [listItems]);

  const removeListItem = (strIndex: string) => {
    const index = parseInt(strIndex);
    const list = JSON.parse(localStorage.getItem("example-list") || "[]");

    // Add the element to the beginning of the array
    list.splice(index, 1);
    console.log(list);

    // passes new list to the parent component
    updateExampleList(list);

    // Add it to the local storage
    localStorage.setItem("example-list", JSON.stringify(list));
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Test List
      </Typography>
      <List sx={{ width: "80%", margin: "auto" }}>
        {listItems.map((item, index) => {
          console.log(item, index);
          return (
            <ListItem
              disablePadding
              key={index}
              divider
              sx={{ backgroundColor: "primary.light", color: "text.primary" }}
            >
              <ListItemButton
                data-idx={index}
                onClick={(e) => {
                  removeListItem(e.currentTarget.dataset.idx!);
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
