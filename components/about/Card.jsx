import { createStyles, Paper, Text, Title, Button } from "@mantine/core";
import { useState } from "react";
import md from "markdown-it";
const useStyles = createStyles((theme) => ({
  card: {
    height: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

export function Card({ image, title, info }) {
  const [detail, setDetail] = useState(false);
  const { classes } = useStyles();

  return (
    <div
      // shadow="md"
      // p="xl"
      // radius="md"
      style={{
        backgroundImage: `url(${image})`, backdropFilter: `blur(15)`
      }}
      sx={{ backgroundImage: `url(${image})`, backdropFilter: `blur(15)` }}
      className={
        classes.card +
        " max-w-[300px] shadow-md rounded-md p-5 relative back  after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:z-[1] after:bg-[#000] after:opacity-[0.35] after:rounded-lg"
      }
    >
      <div className="abolute top-0 bottom-0 left-0 right-0 z-[2] w-full h-full flex flex-col justify-between items-start">
        {/* <p className={classes.category} size="xs">
          {category}
        </p> */}
        <Title
          order={4}
          className={
            classes.title +
            " capitalize text-yellow2 text-3xl   py-2  rounded-full "
          }
        >
          {title}
        </Title>
        <button
          className="text-white outline-none"
          onClick={() => {
            setDetail((pre) => !pre);
          }}
        >
          {detail ? "Hide" : "Show"} Details
        </button>
        <Paper
          className={
            `absolute right-0 left-0  m-auto w-[280px] max-h-[280px] 
            text-xl italic font-thin text-justify overflow-auto bg-[#FEFEFE] shadow-md p-2 rounded-md custome-scroll` +
            `${detail ? " bottom-[50px] z-[50]" : "  z-[-1] -bottom-0 scale-0"}`
          }
          onClick={() => {
            setDetail((pre) => !pre);
          }}
        >
          {info ? info : "Nothing To Show !"}
        </Paper>
      </div>
    </div>
  );
}
