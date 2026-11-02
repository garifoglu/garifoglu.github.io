import Card from "../atoms/Card";

type CardInfo = {
  title: string;
  desc: string;
  points: string[];
  tags: string[];
};

export default function CardGrid({ cards }: { cards: CardInfo[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {cards.map((card, index) => {
        return <Card key={card.title} index={index} {...card} />;
      })}
    </div>
  );
}
