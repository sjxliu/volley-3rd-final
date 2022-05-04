import React from "react";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem } from '@material-ui/lab';

import useStyles from "./FolioStyles.js";

const Paginate = () => {
  const dazzle_it = useStyles();

  return (
    <Pagination
      dazzle_it={{ ul: dazzle_it.ul }}
      color="primary"
      variant="outlined"
      count={5}
      page={1}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          element={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;