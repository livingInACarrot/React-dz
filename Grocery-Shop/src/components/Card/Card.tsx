import { IProduct } from '/src/entities/IProduct.ts';
import emptyImage from '../../images/empty.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/system';

const ProdCard = styled(Card)({
  '&': {
    height: '400px',
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f7f2ef',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  '&:hover': { transform: 'scale(1.05)' },
});

const Product = ({
  name,
  description,
  category,
  quantity,
  unit,
  image,
  onClick,
}: IProduct & { onClick: () => void }) => {
  return (
    <Tooltip title={description}>
      <ProdCard onClick={onClick}>
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f7f2ef',
            textAlign: 'center',
            height: '400px',
          }}
        >
          <h3 style={{ marginBottom: 0, marginTop: 0 }}>{name}</h3>
          <p style={{ color: '#857979', marginTop: 0 }}>{category}</p>
          <CardMedia
            sx={{
              width: '220px',
              height: '220px',
              marginBottom: '10px',
              borderRadius: '5px',
              boxShadow: '3px 3px 3px 3px rgba(194, 159, 137, 0.07)',
            }}
            image={image || emptyImage}
          />
          <p
            style={{
              marginTop: '0',
              color: '#857979',
              fontSize: '13.5px',
              marginBottom: '1px',
            }}
          >
            {quantity} {unit}
          </p>
          <p
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxWidth: '220px',
            }}
          >
            {description}
          </p>
        </CardContent>
      </ProdCard>
    </Tooltip>
  );
};

export default Product;
