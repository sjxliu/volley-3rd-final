import React, { useEffect, useState } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

import { getPost } from "../../actionsTypes/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./HomeStyles";
import Folio from "../Folio";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dazzle_it = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(getPost());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          className={dazzle_it.container}
          spacing={3}
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <AppBar
              className={dazzle_it.search}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper className={dazzle_it.pagination} elevation={6}>
              <Folio />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
