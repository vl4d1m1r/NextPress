import { tagsChipsClass, tagsWrapperClass } from "@/styles/layouts";
import Box from "@mui/material/Box";

const dummyTags = ["Life", "Work", "Study", "Travel", "Music", "Sport", "Food", "Tech", "Design", "Art"];

export default function Tags() {
  return (
    <Box className="tags" sx={tagsWrapperClass}>
      {dummyTags.map((tag, index) => {
        return (
          <Box key={index} sx={tagsChipsClass}>
            {tag}
          </Box>
        );
      })}
    </Box>
  );
}
