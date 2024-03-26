import React from 'react';

const styles = {
  ImageContainer: {
    marginTop: '120px',
    position: 'relative',
    width: '80%',
    height: '524px',
    borderRadius: '2px',
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://images.unsplash.com/photo-1536638317175-32449deccfc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHxCZWVyJTJDJTIwQnJld2luZyUyQyUyMENyYWZ0fGVufDF8fHx8MTcwNjYxNjYyNHww&ixlib=rb-4.0.3&q=80&w=1080',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;