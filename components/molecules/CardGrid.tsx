import Card from "../atoms/Card";
import type { CardInfo } from "@/utils/ProjectInfo";

// One card per chapter of the story, stacked and numbered.
export default function CardGrid({ cards }: { cards: CardInfo[] }) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {cards.map((card, index) => (
        <Card key={card.title} index={index} {...card} />
      ))}
    </div>
  );
}
