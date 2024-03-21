import React, { useState, useEffect } from "react";
import {
  Box,
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
import ReactMarkdown from "react-markdown";
import "ace-builds/src-noconflict/mode-markdown";
import "./aceTheme";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

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
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              size="small"
              style={{ margin: "0 10px" }}
            />
            /
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="small"
              style={{ margin: "0 10px" }}
            />
          </Typography>
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
        </Toolbar>
      </AppBar>
      <Paper
        elevation={3}
        style={{ width: "90%", height: "100%", padding: "20px" }}
      >
        <Button
          variant="contained"
          color={editMode ? "primary" : "inherit"}
          onClick={() => setEditMode(true)}
          style={{ marginBottom: "10px", marginRight: "10px" }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color={!editMode ? "primary" : "inherit"}
          onClick={() => setEditMode(false)}
          style={{ marginBottom: "10px" }}
        >
          Preview
        </Button>
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
          <ReactMarkdown>{markdown}</ReactMarkdown>
        )}
      </Paper>
    </Grid>
  );
}
