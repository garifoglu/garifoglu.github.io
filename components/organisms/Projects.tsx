import Container from '../atoms/Container'
import CardGrid from '../molecules/CardGrid'
import { phases } from '@/utils/ProjectInfo'

export default function Projects() {
  return (
    <Container id="Projects">
        <h2>Work at Humak</h2>
        <p className="max-w-2xl pb-10 text-base text-white/80 lg:text-lg lg:leading-tight">
          Humak University of Applied Sciences, Education Support and
          Development unit, Helsinki. Two phases in 2026: a traineeship from
          March to the end of July, and an expert job in August and September.
        </p>

        {/* To change the work details, please go to: utils/ProjectInfo.ts */}
        {phases.map((phase) => (
          <div key={phase.title} className="pb-16 last:pb-0">
            <p className="text-sm uppercase tracking-widest text-accent">{phase.period}</p>
            <h3 className="pb-4 pt-2">{phase.title}</h3>
            <p className="max-w-3xl pb-8 text-base text-white/80">{phase.summary}</p>
            <CardGrid cards={phase.cards} />
          </div>
        ))}
    </Container>
  )
}
