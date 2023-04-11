import Card from './components/Card/Card';
import List from './components/List/List';
import Paragraph from './components/Paragraph/Paragraph';
import VisibilityToggleWrapper from './components/VisibilityToggleWrapper/VisibilityToggleWrapper';

const people = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Dave' },
  { id: 5, name: 'Eve' },
];

function App() {
  return (
    <div>
      <VisibilityToggleWrapper
        render={(isVisible, toggle) => {
          return <Paragraph isVisible={isVisible} toggle={toggle} />;
        }}
      />
      <VisibilityToggleWrapper
        render={(isVisible, toggle) => {
          return (
            <Card
              isVisible={isVisible}
              toggle={toggle}
              source={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png'
              }
              header={'This is a header'}
              bodyText={'Some Random Body text'}
            />
          );
        }}
      />
      <VisibilityToggleWrapper
        render={(isVisible, toggle) => {
          return <List isVisible={isVisible} toggle={toggle} people={people} />;
        }}
      />
    </div>
  );
}

export default App;
