import { BookOpen, Cpu, Music, Trophy, Globe, Leaf } from 'lucide-react'

const programmes = [
  {
    icon: <BookOpen size={32} className="text-primary-500" />,
    id: 'cbc',
    title: 'CBC Curriculum',
    desc: 'Our fully CBC-aligned curriculum develops competencies across all learning areas — language, mathematics, sciences, social studies, creative arts and religious education. Assessment is portfolio and project-based, not purely exam-driven.',
  },
  {
    icon: <Cpu size={32} className="text-primary-500" />,
    id: 'coding',
    title: 'Coding & STEM',
    desc: 'From PP2 upward, students learn computational thinking, robotics and programming using age-appropriate tools. Our STEM lab is equipped with computers and kits that make learning to code practical and fun.',
  },
  {
    icon: <Music size={32} className="text-primary-500" />,
    id: 'cocurricular',
    title: 'Co-Curricular Activities',
    desc: 'Music, drama, choir, debate, scouts/guides and school clubs give students space to explore their God-given talents beyond the classroom. Every student is encouraged to join at least one activity per term.',
  },
  {
    icon: <Trophy size={32} className="text-primary-500" />,
    id: 'sports',
    title: 'Sports & Athletics',
    desc: 'We field teams in football, netball, basketball, athletics and swimming. Our sports programme builds teamwork, resilience and physical wellness — with inter-school competitions and annual athletics days.',
  },
  {
    icon: <Globe size={32} className="text-primary-500" />,
    id: 'elearning',
    title: 'E-Learning Resources',
    desc: 'Digital literacy is embedded across subjects. Students access approved educational platforms, e-library resources and teacher-curated content through our blended learning approach.',
  },
  {
    icon: <Leaf size={32} className="text-primary-500" />,
    id: 'christian',
    title: 'Christian Religious Education',
    desc: 'Daily devotion, weekly chapel services and CRE lessons provide a strong moral and spiritual foundation. We partner with parents to nurture children of faith, integrity and purpose.',
  },
]

export default function Academics() {
  return (
    <>
      <div className="relative h-64 bg-primary-500 flex items-center justify-center text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="relative z-10">
          <h1 className="font-heading text-4xl font-bold text-white mb-2">Academics</h1>
          <p className="text-primary-200">Home › Academics</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase mb-2">Learning & Growth</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-500 mb-4">Our Academic Programmes</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We offer a richly integrated academic experience that goes far beyond textbooks — combining the CBC framework with Christian values, technology and co-curricular development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmes.map((p) => (
              <div key={p.id} id={p.id}
                className="border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-shadow group">
                <div className="mb-4 group-hover:scale-110 transition-transform inline-block">{p.icon}</div>
                <h3 className="font-heading font-bold text-xl text-primary-500 mb-3">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment approach */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl font-bold text-primary-500 mb-4">Our Approach to Assessment</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            In line with CBC, assessment at Mount Moriah is continuous and competency-based. We use portfolios, projects, observations and term examinations to give a full picture of each child's progress. Reports are issued every term and parent-teacher meetings held to discuss growth and development.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[['Formative', 'Ongoing class-based assessments & projects'], ['Summative', 'End-of-term examinations & portfolios'], ['Holistic', 'Character, co-curricular & spiritual growth']].map(([t, d]) => (
              <div key={t} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="font-heading font-bold text-primary-500 text-lg mb-1">{t}</div>
                <p className="text-gray-500 text-xs">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
