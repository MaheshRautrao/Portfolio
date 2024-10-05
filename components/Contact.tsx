import { Button } from "@chakra-ui/react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <Button variant="outline" className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Email Me
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Github className="w-4 h-4" />
          GitHub
        </Button>
      </div>
    </section>
  );
}
