import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './car-list-item.styles';

export function CarListItem({
  brand, model, price, year, photo,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <img
        className={classes.photo}
        title={`${brand || ''} ${model || ''} year: ${year || ''} price: ${price || ''}`}
        alt={`${brand || ''} ${model || ''} year: ${year || ''} price: ${price || ''}`}
        src={photo || ''}
      />
      <div className={classes.textDiv}>
        <div className={classes.carTitle}>
          <Typography>
            <span className={classes.fontWeight900}>{brand || ''}&nbsp;</span>
            <span className={classes.fontWeight900}>{model || ''}</span>
          </Typography>
          <Typography className={classes.price} title="car price">
                        $&nbsp;{price || ''}
          </Typography>
        </div>
        <span className={classes.year}>Year: {year || ''}</span>
        <div className={classes.buttonDiv}>

          <Button variant="outlined" color="primary">
                        Show more
          </Button>
        </div>
      </div>
    </Card>
  );
}
