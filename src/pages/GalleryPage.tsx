import { useState } from 'react'
import { X } from 'lucide-react'

const photos = [
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80', caption: 'Classroom Learning' },
  { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', caption: 'Graduation Day' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', caption: 'Library Session' },
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80', caption: 'Morning Assembly' },
  { src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80', caption: 'Science Lab' },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80', caption: 'Reading Corner' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', caption: 'Sports Day' },
  { src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80', caption: 'Study Hall' },
  { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80', caption: 'Coding Club' },
  { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80', caption: 'School Campus' },
  { src: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=800&q=80', caption: 'Arts & Crafts' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', caption: 'Events' },
]

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <>
      <div className="relative h-64 bg-primary-500 flex items-center justify-center text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="relative z-10">
          <h1 className="font-heading text-4xl font-bold text-white mb-2">Photo Gallery</h1>
          <p className="text-primary-200">Home › Media › Photo Gallery</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-primary-500 mb-3">School Life at Mount Moriah</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A glimpse into the vibrant, faith-filled community we've built together.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {photos.map((p, i) => (
              <div key={i} onClick={() => setSelected(i)}
                className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative">
                <img src={p.src} alt={p.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-colors flex items-end p-3">
                  <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{p.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <button className="absolute top-4 right-4 text-white" onClick={() => setSelected(null)}>
            <X size={30} />
          </button>
          <img src={photos[selected].src} alt={photos[selected].caption}
            className="max-w-full max-h-full rounded-lg shadow-2xl" onClick={e => e.stopPropagation()} />
          <div className="absolute bottom-6 text-white text-sm font-medium">{photos[selected].caption}</div>
        </div>
      )}
    </>
  )
}
