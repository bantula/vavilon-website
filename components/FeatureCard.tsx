interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  accent?: boolean
}

/**
 * FeatureCard — individual card inside FeaturesGrid.
 * accent=true applies a subtle orange tint for highlighted cards.
 */
export default function FeatureCard({
  icon,
  title,
  description,
  accent = false,
}: FeatureCardProps) {
  return (
    <article
      className={`
        group card cursor-default
        flex flex-col gap-4
        ${accent ? 'border-accent/20 hover:border-accent/50' : ''}
      `}
    >
      {/* Icon wrapper */}
      <div
        className={`
          flex items-center justify-center w-12 h-12 rounded-xl
          transition-all duration-300
          ${accent
            ? 'bg-accent/15 text-accent group-hover:bg-accent/25'
            : 'bg-primary/15 text-primary group-hover:bg-primary/25'
          }
        `}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-content-muted text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  )
}
