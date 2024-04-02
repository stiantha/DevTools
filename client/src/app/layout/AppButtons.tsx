import { Button, Box, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { VscMarkdown, VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/system";

interface Page {
  index: number;
  name: string;
  route: string;
  category: string;
}

interface Props {
  pages: Page[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  currentComponent: string;
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
  visiblePageIndexs: number[];
  setVisiblePageIndexs: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function AppButtons({
  pages,
  selectedIndex,
  setSelectedIndex,
  currentComponent,
  setCurrentComponent,
  visiblePageIndexs,
  setVisiblePageIndexs,
}: Props) {
  const navigate = useNavigate();
  const theme = useTheme();
  let { pathname } = useLocation();

  const page: Page = pages.find((x) => x.route === pathname)!;

useEffect(() => {
}, [page, setSelectedIndex]);

  function renderButtonBgColor(index: number) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index ? "#1e1e1e" : "#2d2d2d";
    } else {
      return selectedIndex === index ? "#ffffff" : "#ececec";
    }
  }

  function renderButtonColor(index: number) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index ? "white" : "#817d7a";
    } else {
      return selectedIndex === index ? "#524a5f" : "#716f74";
    }
  }

  function renderCloseButtonBgColor(index: number) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index ? "#1e1e1e" : "#2d2d2d";
    } else {
      return selectedIndex === index ? "#ffffff" : "#ececec";
    }
  }

  function renderCloseButtonColor(index: number) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index ? "#white" : "#2d2d2d";
    } else {
      return selectedIndex === index ? "#72736d" : "#ececec";
    }
  }

  function renderCloseButtonHoverBgColor(index: number) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index ? "#333c43" : "#333c43";
    } else {
      return selectedIndex === index ? "#e6e4e5" : "#dadada";
    }
  }

  function renderCloseButtonHoverColor(index: number) {
    if (theme.palette.mode === "dark") {
      return selectedIndex !== index ? "#817d7a" : "#white";
    } else {
      return selectedIndex === index ? "#44434b" : "#92938e";
    }
  }

  function renderPageButton(category: string) {
    return (
      <Box 
      key={category}
      sx={{
        display: "flex",
        flexWrap: "nowrap",
      }}
    >
        {pages
          .filter(
            (page) =>
              page.category === category &&
              visiblePageIndexs.includes(page.index)
          )
          .map((page) => (
            <Box
              key={page.index}
              sx={{
                display: "inline-block",
                borderRight: 1,
                borderColor:
                  theme.palette.mode === "dark" ? "#252525" : "#f3f3f3",
              }}
            >
              <Button
                key={page.index}
                disableRipple
                disableElevation
                disableFocusRipple
                onClick={() => {
                  setSelectedIndex(page.index);
                  setCurrentComponent("button");
                  navigate(page.route);
                }}
                sx={{
                  borderRadius: 0,
                  px: 2,
                  textTransform: "none",
                  backgroundColor: renderButtonBgColor(page.index),
                  color: renderButtonColor(page.index),
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: renderButtonBgColor(page.index),
                  },
                  transition: "none",
                  pb: 0.2,
                }}
              >
                <Box
                  sx={{
                    color: "#6997d5",
                    width: 20,
                    height: 20,
                    mr: 0.4,
                    ml: -1,
                  }}
                >
                  <VscMarkdown />
                </Box>
                {page.name}
                <Box
                  component={Paper}
                  sx={{
                    ml: 1,
                    mr: -1,
                    backgroundColor: renderCloseButtonBgColor(page.index),
                    color: renderCloseButtonColor(page.index),
                    "&.MuiPaper-root:hover": {
                      bgcolor: renderCloseButtonHoverBgColor(page.index),
                      color: renderCloseButtonHoverColor(page.index),
                    },
                    width: 20,
                    height: 20,
                    transition: "none",
                  }}
                  elevation={0}
                  onClick={(e: any) => {
                    e.stopPropagation();
                    setVisiblePageIndexs(
                      visiblePageIndexs.filter((x) => x !== page.index)
                    );
                  }}
                >
                  <VscChromeClose />
                </Box>
              </Button>
            </Box>
          ))}
      </Box>
    );
  }

  const categories = Array.from(new Set(pages.map((page) => page.category)));

  return (
<Container
  maxWidth={false}
  disableGutters
  sx={{
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    backgroundColor: theme.palette.mode === "dark" ? "#252527" : "#f3f3f3",
    "&::-webkit-scrollbar": {
      height: "3px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor:
        theme.palette.mode === "dark" ? "#535353" : "#8c8c8c",
    },
    "&::-webkit-darkScrollbar-thumb": {
      backgroundColor:
        theme.palette.mode === "dark" ? "#ffffff" : "#8c8c8c",
    },
  }}
>
  {categories.map((category) => renderPageButton(category))}
</Container>
  );
}
