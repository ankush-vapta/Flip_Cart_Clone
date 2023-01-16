import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Button, Divider, Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
`;

const Deal = styled(Box)`
    display: flex;    
    padding: 15px 20px;
`

const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 25px;
`

const Timer = styled(Box)`
    color: #7f7f7f;
    margin-left: 10px;
    display: flex;
    align-items: center;
`;

const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
`;

const Image = styled('img')({
  width: 'auto',
  height: 150
})

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px
`

const RenderTimer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));


const Slide = ({ products, title }) => {
  return (
    <>
      <Deal>
        <DealText>{title}</DealText>
      </Deal>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
      >
        {products !== undefined && products?.map((item) =>
          //  <Link to={`product/${item.id}`} style={{textDecoration: 'none'}}>
          <Box textAlign="center" key={item.id} style={{ padding: '25px 15px' }}>
            <Image src={item.url} />
            <Text style={{ fontWeight: 600, color: '#212121' }}>{item.title.shortTitle}</Text>
            <Text style={{ color: 'green' }}>{item.discount}</Text>
            <Text style={{ color: '#212121', opacity: '.6' }}>{item.tagline}</Text>
          </Box>
          //  </Link>
        )}
      </Carousel>
    </>
  )
}

export default Slide;