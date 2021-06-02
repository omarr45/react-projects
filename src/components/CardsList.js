import Card from './Card';

const CardsList = (props) => {
  return (
    <div className='cards-wrapper'>
      <Card
        title="Conway's Game of Life"
        path='/game-of-life'
        img='./assets/GOL.png'
      />
      <Card title='Coming Soon...' path='/' img='./assets/soon.png' disabled />
    </div>
  );
};

export default CardsList;
