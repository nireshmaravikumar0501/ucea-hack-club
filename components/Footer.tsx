import { Container } from "@/components/ui/Container";
import { JOIN_FORM_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-white">UCEA Hack Club</div>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Innovation & Hackathon Community Portal.
            </p>
            <a
              href={JOIN_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Join via Google Form
            </a>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Email: <span className="text-white/60">your-email@college.edu</span></li>
              <li>Faculty Coordinator: <span className="text-white/60">Name Placeholder</span></li>
              <li>Location: <span className="text-white/60">UCEA Campus</span></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Social</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Instagram: <span className="text-white/60">@placeholder</span></li>
              <li>LinkedIn: <span className="text-white/60">/placeholder</span></li>
              <li>GitHub: <span className="text-white/60">/placeholder</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <div>Built by UCEA Hack Club</div>
          <div>© {new Date().getFullYear()} UCEA Hack Club</div>
        </div>
      </Container>
    </footer>
  );
}

