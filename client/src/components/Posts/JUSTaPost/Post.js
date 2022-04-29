import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon  from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import useStyles from "./PostStyles";
const Post = ({post}) => {
  const dazzle_it = useStyles();
  return (
  <Card className={dazzle_it.card}>
<CardMedia className={dazzle_it.content} image={post.selectedFile} title={post.title}/>
<div className={dazzle_it.topOver}>

</div>
  </Card>
  )
}

export default Post