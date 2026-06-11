export default function PageHeader({ title, description, breadcrumb = [] }) {
  return (
    <section className="pt-[120px] pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(99,102,241,0.3)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(16,185,129,0.2)_0%,transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {breadcrumb.length > 0 && (
          <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-4">
            <a href="/" className="hover:text-white transition-colors">Beranda</a>
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {item.href ? (
                  <a href={item.href} className="hover:text-white transition-colors">{item.label}</a>
                ) : (
                  <span className="text-white/90">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">{title}</h1>
        {description && <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">{description}</p>}
      </div>
    </section>
  )
}
