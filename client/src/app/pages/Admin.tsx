import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  AppBar,
  Toolbar,
  Button,
  Paper,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "./aceTheme";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2db49d",
    },
    secondary: {
      main: "#252527",
    },
  },
});
interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Admin({ setSelectedIndex }: Props) {
  const [index, setIndex] = useState(0);
  const { pathname } = useLocation();
  const [route, setRoute] = useState("");
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [editMode, setEditMode] = useState(true);
  const customStyle = {
    ...solarizedlight,
    'pre[class*="language-"]': {
      ...solarizedlight['pre[class*="language-"]'],
      backgroundColor: "#2f2f2f", // replace #yourColor with your desired color
    },
  };
  const renderers = {
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={customStyle}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, "")}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      );
    },
  };
  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME!;
  }, [pathname]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newIndex = index + 1;

    const page = {
      index: newIndex,
      name,
      route,
      visible,
      category,
      content: markdown,
    };

    setIndex(newIndex);
    try {
      const response = await fetch("http://localhost:7000/api/resources", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(page),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation: ", error);
    }
  };

  const handleCancel = () => {
    // Reset the form state here
    setName("");
    setRoute("");
    setVisible(false);
    setCategory("");
    setMarkdown("");
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      sx={{
        minHeight: `calc(100vh - 20px - 33px)`,
        position: "relative",
        marginTop: 7,
      }}
    >
      <AppBar position="static" style={{ width: "90%", background: "inherit" }}>
        <Toolbar style={{ width: "100%" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
          >
            devtools /
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="small"
              style={{ margin: "0 10px" }}
            />
            in
            <FormControl
              variant="outlined"
              size="small"
              style={{ margin: "0 10px", width: "140px" }}
            >
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Category"
              >
                <MenuItem value={"Category1"}>Ai</MenuItem>
                <MenuItem value={"Category2"}>Extensions</MenuItem>
              </Select>
            </FormControl>
          </Typography>

          <ThemeProvider theme={theme}>
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<CancelIcon />}
              onClick={handleCancel}
            >
              Cancel Changes
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              onClick={handleSubmit}
              style={{ marginLeft: "10px" }}
            >
              Commit Changes
            </Button>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
      <Paper
        elevation={3}
        style={{ width: "90%", height: "100%", padding: "20px" }}
      >
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color={editMode ? "primary" : "secondary"}
            onClick={() => setEditMode(true)}
            style={{ marginBottom: "10px", marginRight: "10px" }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color={!editMode ? "primary" : "secondary"}
            onClick={() => setEditMode(false)}
            style={{ marginBottom: "10px" }}
          >
            Preview
          </Button>
        </ThemeProvider>
        {editMode ? (
          <AceEditor
            mode="markdown"
            width="100%"
            theme="my_theme"
            value={markdown}
            onChange={setMarkdown}
            name="createResource"
            editorProps={{ $blockScrolling: true }}
            showPrintMargin={false}
            fontSize="20px"
            setOptions={{ lineHeight: "20px" }}
          />
        ) : (
          <ReactMarkdown
            components={renderers}
            children={markdown}
            rehypePlugins={[rehypeRaw]}
          />
        )}
      </Paper>
    </Grid>
  );
}
