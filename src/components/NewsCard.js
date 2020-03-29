import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles(({ spacing, palette }) => {
  const family =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  return {
    card: {
        margin: '50px',
      display: 'flex',
      position: 'start',
      padding: spacing(2),
      minWidth: 288,
      borderRadius: 12,
      boxShadow: '0 2px 4px 0 rgba(138, 148, 159, 0.2)',
      '& > *:nth-child(1)': {
        marginRight: spacing(2),
      },
      '& > *:nth-child(2)': {
        flex: 'auto',
      },
    }
  };
});



const NewsCard = ({ data, pattern, onDismiss }) => {
  const styles = useStyles();
  return (
    <Card className={cx(styles.card)} elevation={0}>
      <Box>
        <Box display={'flex'} alignItems={'center'}>
            <span style={{ width: "40%" }}>
            <a href={data.url}>{data.title}</a>
            </span>
            <span style={{ width: "30%" }}>{data.author}</span>
            <span style={{ width: "10%" }}>{data.num_comments}</span>
            <span style={{ width: "10%" }}>{data.points}</span>
            <span style={{ width: "10%" }}></span>
            <Button
                onClick={() => onDismiss(data.objectID)}
                className="button-inline"
            >
                Dismiss
            </Button>
        </Box>
      </Box>
    </Card>
  );
};

const Button = ({ onClick, className = "", children }) => (
    <button onClick={onClick} className={className} type="button">
      {children}
    </button>
  );
  

export default NewsCard;