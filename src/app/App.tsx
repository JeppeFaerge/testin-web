import { Mail, Linkedin, MapPin } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjE4MTg1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Jeppe Færgegaard Sørensen"
            className="w-40 h-40 rounded-full object-cover"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl mb-2">Jeppe Færgegaard Sørensen</h1>
            <p className="text-xl text-gray-600 mb-4">Professional Profile</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a 
                href="https://www.linkedin.com/in/jeppe-f%C3%A6rgegaard-s%C3%B8rensen-a149a47b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="mb-8">
          <h2 className="text-2xl mb-4 border-b pb-2">About</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to my professional profile. Connect with me on LinkedIn to learn more about my experience, 
            skills, and professional background.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl mb-4 border-b pb-2">Contact</h2>
          <div className="flex flex-col gap-3">
            <a 
              href="https://www.linkedin.com/in/jeppe-f%C3%A6rgegaard-s%C3%B8rensen-a149a47b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn: Jeppe Færgegaard Sørensen</span>
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Jeppe Færgegaard Sørensen
      </footer>
    </div>
  );
}
