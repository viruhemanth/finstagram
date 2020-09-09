/*
import iconSheet from "../src/images/icon-sheet-2.png";
import {Grid, Typography} from "@material-ui/core";
import {CommentIcon, LikeActiveIcon} from "../src/icons";
import React from "react";

container: {
    position: "relative",
},
itemContainer: {
    height: "30em",
        width: "30em",
        backgroundColor: "aliceblue",
        marginRight: "2em",
        marginBottom: "2em",
        "&:hover": {
        backgroundColor: "rgba(0,0,0,0.6)",
            cursor: "pointer",
            "& > div": {
            opacity: 1,
        },
    },
},
gridPost: {
    color: "#ffffff",
        opacity: 1,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "palegreen",
        height: "100%",
},
likes: {
    backgroundImage: `url(${iconSheet})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-328px -239px",
        backgroundSize: "355px 344px",
        height: 16,
        width: 16,
},
comments: {
    backgroundImage: `url(${iconSheet})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-327px -203px",
        backgroundSize: "355px 344px",
        height: 16,
        width: 18,
},
image: {
    width: "100%",
        height: "100%",
        userSelect: "none",
},
}));

function ExploreGridItem() {
    const classes = useExploreGridItemStyles();
    return (
        <Grid
            item
            className={classes.itemContainer}
            justify="center"
            alignItems="center"
        >
            <Grid
                container
                className={classes.gridPost}
                component="div"
                item
                justify="center"
                alignItems="center"
            >
                { <span className={classes.likes} />}
                <Grid item>
                    <LikeActiveIcon fill="#ffffff" />
                </Grid>
                <Grid item>
                    <Typography style={{ marginLeft: "0.5em" }}>1</Typography>
                </Grid>
            </Grid>
            <Grid
                justify="center"
                container
                className={classes.gridPost}
                component="div"
                item
            >
                {/* <span className={classes.comments} /> */}
                <Grid item>
                    <CommentIcon fill="#ffffff" />
                </Grid>
                <Grid item>
                    <Typography style={{ marginLeft: "0.5em" }}>2</Typography>
                </Grid>
            </Grid>
            { <img }
            { className={classes.image} */}
            { src="https://www.ainonline.com/sites/ainonline.com/files/uploads/2015/08/8-2015-1_t_f_break_.jpg" */}
            {/* /> */}
        </Grid>

