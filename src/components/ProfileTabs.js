import React from "react";
import { Tabs, Tab, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ExploreGridItem from "./ExploreGridItem";

const useProfileTabsStyles = makeStyles((theme) => ({
  indicator: {
    top: 0,
    width: "0.1px",
  },
}));

function ProfileTabs() {
  const classes = useProfileTabsStyles();
  const [value, setValue] = React.useState(0);
  return (
    <section>
      <Tabs
        className={classes.mainTab}
        centered
        classes={{
          indicator: classes.indicator,
        }}
        value={value}
        onChange={(_, val) => setValue(val)}
      >
        <Tab label="Posts"  />
        <Tab label="IGTV" />
        <Tab label="Saved" />
        <Tab label="Tagged" />
      </Tabs>
      {value === 0 && <ProfilePost />}
      {value === 1 && <IGTV />}
    </section>
  );
}

function IGTV() {
  return <div>IGTV</div>;
}

function ProfilePost() {
  return (
    <Grid container direction="row">
      <ExploreGridItem />
      <ExploreGridItem />
      <ExploreGridItem />
      <ExploreGridItem />
      <ExploreGridItem />
      <ExploreGridItem />
      <ExploreGridItem />
      <ExploreGridItem />
    </Grid>
  );
}

export default ProfileTabs;
