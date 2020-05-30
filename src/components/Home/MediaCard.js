import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    text-align: center;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
`
const StyledCardMedia = styled(CardMedia)`
    height: 8em;
`

export default function MediaCard() {

  return (
    <StyledCard >
      <CardActionArea>
        <StyledCardMedia
          image=""
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="p">
            Media Outlet
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Coronavirus: Uni student making thousands of meals for exhausted health workers
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}
