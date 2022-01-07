import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [selectedImgUrl, setSelectedImgUrl] = useState('');
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleViewImage = (url: string) => {
    setSelectedImgUrl(url);
    onOpen();
  };

  return (
    <SimpleGrid columns={3} gap="10">
      {cards.map(card => (
        <Card data={card} viewImage={handleViewImage} key={card.id} />
      ))}

      <ModalViewImage
        imgUrl={selectedImgUrl}
        isOpen={isOpen}
        onClose={onClose}
      />
    </SimpleGrid>
  );
}
